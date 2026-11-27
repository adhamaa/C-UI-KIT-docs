import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{c as i,u as a}from"./blocks-C0i7n7Fz.js";function o(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Use with AI`}),`
`,(0,c.jsx)(t.h1,{id:`use-with-ai`,children:`Use with AI`}),`
`,(0,c.jsx)(t.p,{children:`AI coding assistants (Claude Code, Cursor, VS Code Copilot, Codex…) can read these docs, so they suggest the kit's real components and props instead of guessing. There are two ways to give them the docs, and both are free and need nothing installed in your app.`}),`
`,(0,c.jsx)(t.h2,{id:`mcp-server-recommended`,children:`MCP server (recommended)`}),`
`,(0,c.jsxs)(t.p,{children:[`Connect your assistant to the kit's MCP server. It's served by `,(0,c.jsx)(t.a,{href:`https://gitmcp.io`,rel:`nofollow`,children:`GitMCP`}),`, a free service that reads the docs published on this site.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:`https://adhamaa.gitmcp.io/C-UI-KIT-docs
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Claude Code`}),`, from your app's folder:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`claude mcp add --transport http c-ui-kit https://adhamaa.gitmcp.io/C-UI-KIT-docs
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Cursor`}),`: add to `,(0,c.jsx)(t.code,{children:`.cursor/mcp.json`}),` in your app:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "mcpServers": {
    "c-ui-kit": { "url": "https://adhamaa.gitmcp.io/C-UI-KIT-docs" }
  }
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`VS Code (Copilot)`}),`: add to `,(0,c.jsx)(t.code,{children:`.vscode/mcp.json`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "servers": {
    "c-ui-kit": { "type": "http", "url": "https://adhamaa.gitmcp.io/C-UI-KIT-docs" }
  }
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Codex`}),`: add to `,(0,c.jsx)(t.code,{children:`~/.codex/config.toml`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-toml`,children:`[mcp_servers.c-ui-kit]
url = "https://adhamaa.gitmcp.io/C-UI-KIT-docs"
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Check it works by asking: `,(0,c.jsx)(t.em,{children:`"Using the c-ui-kit MCP, list the kit's components."`})]}),`
`,(0,c.jsx)(t.h3,{id:`what-the-assistant-can-do-with-it`,children:`What the assistant can do with it`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Tool`}),(0,c.jsx)(t.th,{children:`What it's for`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`fetch_C_UI_KIT_docs_documentation`})}),(0,c.jsx)(t.td,{children:`Reads the index: every component and guide, with a one-line summary and a link`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`fetch_generic_url_content`})}),(0,c.jsxs)(t.td,{children:[`Reads one page from the index, like `,(0,c.jsx)(t.code,{children:`…/llms/components/multi-select.md`}),`: props table, examples and usage notes`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`search_C_UI_KIT_docs_docs`})}),(0,c.jsx)(t.td,{children:`Searches the docs. It may return the index until GitMCP has indexed the site`})]})]})]}),`
`,(0,c.jsx)(t.p,{children:`Assistants usually read the index first, then the page for the component they need.`}),`
`,(0,c.jsx)(t.h2,{id:`plain-text-without-mcp`,children:`Plain text, without MCP`}),`
`,(0,c.jsx)(t.p,{children:`For tools that don't support MCP, point them at these files:`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`File`}),(0,c.jsx)(t.th,{children:`What's in it`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.a,{href:`https://adhamaa.github.io/C-UI-KIT-docs/llms.txt`,rel:`nofollow`,children:(0,c.jsx)(t.code,{children:`llms.txt`})})}),(0,c.jsxs)(t.td,{children:[`The index, following the `,(0,c.jsx)(t.a,{href:`https://llmstxt.org`,rel:`nofollow`,children:`llms.txt`}),` convention`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.a,{href:`https://adhamaa.github.io/C-UI-KIT-docs/llms-full.txt`,rel:`nofollow`,children:(0,c.jsx)(t.code,{children:`llms-full.txt`})})}),(0,c.jsx)(t.td,{children:`Every page in one file (about 270 KB)`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`llms/components/<name>.md`})}),(0,c.jsxs)(t.td,{children:[`One page per component, like `,(0,c.jsx)(t.a,{href:`https://adhamaa.github.io/C-UI-KIT-docs/llms/components/select.md`,rel:`nofollow`,children:(0,c.jsx)(t.code,{children:`select.md`})})]})]})]})]}),`
`,(0,c.jsx)(t.h2,{id:`tell-the-assistant-about-the-kit`,children:`Tell the assistant about the kit`}),`
`,(0,c.jsxs)(t.p,{children:[`Paste this into your app's `,(0,c.jsx)(t.code,{children:`AGENTS.md`}),` or `,(0,c.jsx)(t.code,{children:`CLAUDE.md`}),`, so the assistant uses the kit without being asked each time:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-md`,children:"## UI components\n\n- Build UI with `@adhamaa/ui-kit` (C-UI-KIT). Look up components and props with the\n  `c-ui-kit` MCP server, or https://adhamaa.github.io/C-UI-KIT-docs/llms.txt.\n- Import components from `@adhamaa/ui-kit`, the DataTable from `@adhamaa/ui-kit/table`,\n  and react-hook-form fields (`RHF*`, `FormFields`, `FormDialog`) from `@adhamaa/ui-kit/form`.\n- Never install or import `@ui-sdk/*`: the kit brings it.\n- Style with the theme tokens (`var(--ui-primary)`, `tokenVar('border')`…), not hard-coded colours.\n"})}),`
`,(0,c.jsx)(t.h2,{id:`how-it-stays-current`,children:`How it stays current`}),`
`,(0,c.jsxs)(t.p,{children:[`Every `,(0,c.jsx)(t.code,{children:`yarn deploy-docs`}),` regenerates the text files from the same JSDoc, stories and docs pages as this site, so the MCP server always describes the latest published version. If your app is on an older version, check its changelog for props that were added since.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The docs are only as good as their source. When you add or change a component, write its JSDoc and docs page for someone, or something, that has never seen it. See `,(0,c.jsx)(t.strong,{children:`Contributing`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),a()})))()}l();export{s as default};