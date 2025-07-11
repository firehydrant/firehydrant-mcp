/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type IncidentsConferenceBridgeEntityAttachment = {};

export const IncidentsConferenceBridgeEntityAttachment$zodSchema: z.ZodType<
  IncidentsConferenceBridgeEntityAttachment,
  z.ZodTypeDef,
  unknown
> = z.object({});

/**
 * Incidents_ConferenceBridgeEntity model
 */
export type IncidentsConferenceBridgeEntity = {
  id?: string | null | undefined;
  attachments?:
    | Array<IncidentsConferenceBridgeEntityAttachment>
    | null
    | undefined;
  has_translated_transcripts?: boolean | null | undefined;
  language_codes?: Array<string> | null | undefined;
  transcription_status?: string | null | undefined;
  transcription_sub_code?: string | null | undefined;
  previous_host_assignment?: string | null | undefined;
};

export const IncidentsConferenceBridgeEntity$zodSchema: z.ZodType<
  IncidentsConferenceBridgeEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  attachments: z.array(
    z.lazy(() => IncidentsConferenceBridgeEntityAttachment$zodSchema),
  ).nullable().optional(),
  has_translated_transcripts: z.boolean().nullable().optional(),
  id: z.string().nullable().optional(),
  language_codes: z.array(z.string()).nullable().optional(),
  previous_host_assignment: z.string().nullable().optional(),
  transcription_status: z.string().nullable().optional(),
  transcription_sub_code: z.string().nullable().optional(),
}).describe("Incidents_ConferenceBridgeEntity model");
