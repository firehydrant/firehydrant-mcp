# FireHydrant MCP Server

Model Context Protocol (MCP) Server for the *FireHydrant* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=mcp-server&utm_campaign=mcp-typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start Summary [summary] -->
## Summary

FireHydrant MCP Server: An MCP server for interacting with FireHydrant's API.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [FireHydrant MCP Server](#firehydrant-mcp-server)
  * [Installation](#installation)
* [Development](#development)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start Installation [installation] -->
## Installation

<details>
<summary>Cursor</summary>

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/install-mcp?name=FireHydrant&config=eyJtY3BTZXJ2ZXJzIjp7IkZpcmVIeWRyYW50Ijp7ImNvbW1hbmQiOiJucHgiLCJhcmdzIjpbImZpcmVoeWRyYW50LW1jcCIsInN0YXJ0IiwiLS1hcGkta2V5IiwiLi4uIl19fX0=)

Or manually:

1. Open Cursor Settings
2. Select Tools and Integrations
3. Select New MCP Server
4. If the configuration file is empty paste the following JSON into the MCP Server Configuration:

```json
{
  "mcpServers": {
    "FireHydrant": {
      "command": "npx",
      "args": [
        "firehydrant-mcp",
        "start",
        "--api-key",
        "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Claude Code CLI</summary>

```bash
npx firehydrant-mcp start --api-key ...
```

</details>
<details>
<summary>Claude Desktop</summary>
Claude Desktop doesn't yet support SSE/remote MCP servers.

However, you can run the MCP server locally by cloning this repository. Once cloned, you'll need to install dependencies (`npm install`) and build the server (`npm run build`).

Then, configure your server definition to reference your local clone. For example:

```json
{
  "mcpServers": {
    "FireHydrant": {
      "command": "node",
      "args": [
        "./bin/mcp-server.js",
        "start",
        "--api-key",
        "..."
      ]
    }
  }
}
```

</details>
<!-- End Installation [installation] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Contributions

While we value contributions to this MCP Server, the code is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### MCP Server Created by [Speakeasy](https://www.speakeasy.com/?utm_source=mcp-server&utm_campaign=mcp-typescript)
