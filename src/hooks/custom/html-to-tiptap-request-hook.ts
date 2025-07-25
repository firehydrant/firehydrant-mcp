import { mergeAttributes } from "@tiptap/core";
import { Mark } from "@tiptap/core";
import z from "zod";
import { generateJSON } from "@tiptap/html/server";
import StarterKit from "@tiptap/starter-kit";
import { BeforeRequestContext, BeforeRequestHook } from "../types.js";

const Strong = Mark.create({
  name: "strong",

  parseHTML() {
    return [
      {
        tag: "strong",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["strong", mergeAttributes(HTMLAttributes), 0];
  },
});

const HeaderStyle = Mark.create({
  name: "textStyle",

  addAttributes() {
    return {
      fontSize: {
        default: "18px",
        parseHTML: (el) => {
          switch (el.tagName) {
            case "H1":
              return "24px";
            case "H2":
              return "20px";
            case "H3":
              return "18px";
            case "H4":
              return "16px";
            case "H5":
              return "14px";
            case "H6":
              return "12px";
            default:
              return "18px"; // Default for other tags
          }
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "h1, h2, h3, h4, h5, h6",
      },
    ];
  },
});

export class HtmlToTipTapHook implements BeforeRequestHook {
  async beforeRequest(
    hookCtx: BeforeRequestContext,
    request: Request,
  ): Promise<Request> {
    if (hookCtx.operationID !== "update_incident_retrospective_field")
      return request;

    const reqClone = request.clone();
    const reqBody = z
      .object({
        value: z.string(),
      })
      .parse(await reqClone.json());

    const newPayload = generateJSON(reqBody.value, [
      StarterKit.configure({ bold: false, heading: false }).extend(),
      Strong,
      HeaderStyle,
    ]);

    return new Request(request, {
      body: JSON.stringify({
        value: newPayload["content"],
      }),
    });
  }
}
