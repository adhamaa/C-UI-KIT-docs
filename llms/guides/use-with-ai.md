# Use with AI

AI coding assistants (Claude Code, Cursor, VS Code Copilot, Codex…) can read these docs, so they suggest the kit's real components and props instead of guessing. There are two ways to give them the docs, and both are free and need nothing installed in your app.

## MCP server (recommended)

Connect your assistant to the kit's MCP server. It's served by [GitMCP](https://gitmcp.io), a free service that reads the docs published on this site.

```
https://adhamaa.gitmcp.io/C-UI-KIT-docs
```

**Claude Code**, from your app's folder:

```bash
claude mcp add --transport http c-ui-kit https://adhamaa.gitmcp.io/C-UI-KIT-docs
```

**Cursor**: add to `.cursor/mcp.json` in your app:

```json
{
  "mcpServers": {
    "c-ui-kit": { "url": "https://adhamaa.gitmcp.io/C-UI-KIT-docs" }
  }
}
```

**VS Code (Copilot)**: add to `.vscode/mcp.json`:

```json
{
  "servers": {
    "c-ui-kit": { "type": "http", "url": "https://adhamaa.gitmcp.io/C-UI-KIT-docs" }
  }
}
```

**Codex**: add to `~/.codex/config.toml`:

```toml
[mcp_servers.c-ui-kit]
url = "https://adhamaa.gitmcp.io/C-UI-KIT-docs"
```

Check it works by asking: *"Using the c-ui-kit MCP, list the kit's components."*

### What the assistant can do with it

| Tool | What it's for |
| --- | --- |
| `fetch_C_UI_KIT_docs_documentation` | Reads the index: every component and guide, with a one-line summary and a link |
| `fetch_generic_url_content` | Reads one page from the index, like `…/llms/components/multi-select.md`: props table, examples and usage notes |
| `search_C_UI_KIT_docs_docs` | Searches the docs. It may return the index until GitMCP has indexed the site |

Assistants usually read the index first, then the page for the component they need.

## Plain text, without MCP

For tools that don't support MCP, point them at these files:

| File | What's in it |
| --- | --- |
| [`llms.txt`](https://adhamaa.github.io/C-UI-KIT-docs/llms.txt) | The index, following the [llms.txt](https://llmstxt.org) convention |
| [`llms-full.txt`](https://adhamaa.github.io/C-UI-KIT-docs/llms-full.txt) | Every page in one file (about 270 KB) |
| `llms/components/<name>.md` | One page per component, like [`select.md`](https://adhamaa.github.io/C-UI-KIT-docs/llms/components/select.md) |

## Tell the assistant about the kit

Paste this into your app's `AGENTS.md` or `CLAUDE.md`, so the assistant uses the kit without being asked each time:

```md
## UI components

- Build UI with `@adhamaa/ui-kit` (C-UI-KIT). Look up components and props with the
  `c-ui-kit` MCP server, or https://adhamaa.github.io/C-UI-KIT-docs/llms.txt.
- Import components from `@adhamaa/ui-kit`, the DataTable from `@adhamaa/ui-kit/table`,
  and react-hook-form fields (`RHF*`, `FormFields`, `FormDialog`) from `@adhamaa/ui-kit/form`.
- Never install or import `@ui-sdk/*`: the kit brings it.
- Style with the theme tokens (`var(--ui-primary)`, `tokenVar('border')`…), not hard-coded colours.
```

## How it stays current

Every `yarn deploy-docs` regenerates the text files from the same JSDoc, stories and docs pages as this site, so the MCP server always describes the latest published version. If your app is on an older version, check its changelog for props that were added since.

The docs are only as good as their source. When you add or change a component, write its JSDoc and docs page for someone, or something, that has never seen it. See **Contributing**.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/use-with-ai--docs
