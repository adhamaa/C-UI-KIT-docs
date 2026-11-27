import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{c as i,u as a}from"./blocks-7uT58uVX.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Getting started`}),`
`,(0,c.jsx)(t.h1,{id:`getting-started`,children:`Getting started`}),`
`,(0,c.jsx)(t.h2,{id:`1-let-npm-find-the-package`,children:`1. Let npm find the package`}),`
`,(0,c.jsxs)(t.p,{children:[`The kit is a private package on GitHub Packages. Add this line to your app's `,(0,c.jsx)(t.code,{children:`.npmrc`}),`, next to `,(0,c.jsx)(t.code,{children:`package.json`}),`. It holds no secret, so commit it:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ini`,children:`@adhamaa:registry=https://npm.pkg.github.com
`})}),`
`,(0,c.jsx)(t.p,{children:`Then give your own machine a token, once:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`On GitHub, open `,(0,c.jsx)(t.strong,{children:`Settings → Developer settings → Personal access tokens → Tokens (classic)`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Create a token with only the `,(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`read:packages`})}),` scope. GitHub's npm registry doesn't accept fine-grained tokens.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Add it to the `,(0,c.jsx)(t.code,{children:`.npmrc`}),` in your `,(0,c.jsx)(t.strong,{children:`home folder`}),` (`,(0,c.jsx)(t.code,{children:`~/.npmrc`}),`, or `,(0,c.jsx)(t.code,{children:`C:\\Users\\<you>\\.npmrc`}),` on Windows), never the project's:`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ini`,children:`//npm.pkg.github.com/:_authToken=ghp_your_token_here
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Deploy servers`}),` (QA, prod, and the Docker build host) need the same line in their `,(0,c.jsx)(t.code,{children:`~/.npmrc`}),`. Use a token from a bot or machine account so deploys don't depend on one person. See `,(0,c.jsx)(t.em,{children:`Server setup`}),` in the repository README.`]}),`
`,(0,c.jsx)(t.h2,{id:`2-install`,children:`2. Install`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`yarn add @adhamaa/ui-kit
# only if you use the table:
yarn add ag-grid-community ag-grid-react
# only if you use the RHF fields:
yarn add react-hook-form
`})}),`
`,(0,c.jsx)(t.h2,{id:`3-load-the-styles-once`,children:`3. Load the styles once`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`With Tailwind CSS v4`}),`, at the top of your global stylesheet:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`@import "tailwindcss";
@import "@adhamaa/ui-kit/styles.css" layer(components);
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The kit's stylesheet already includes ui-sdk's base styles. Putting it in Tailwind's `,(0,c.jsx)(t.code,{children:`components`}),` layer keeps Tailwind's base reset from undoing them, while utility classes still win. So `,(0,c.jsx)(t.code,{children:`className="mt-4"`}),` on any kit component works.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Without Tailwind`}),`, import it once at your app's entry, such as `,(0,c.jsx)(t.code,{children:`app/layout.tsx`}),` or `,(0,c.jsx)(t.code,{children:`main.tsx`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`import '@adhamaa/ui-kit/styles.css'
`})}),`
`,(0,c.jsx)(t.h2,{id:`4-add-the-provider`,children:`4. Add the provider`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { UIKitProvider, swiftoTheme } from '@adhamaa/ui-kit'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UIKitProvider theme={swiftoTheme} defaultColorScheme="light">
      {children}
    </UIKitProvider>
  )
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The provider applies the theme and hosts the toast region and the modal stack. In a Next.js App Router project, put it in a `,(0,c.jsx)(t.code,{children:`'use client'`}),` providers file and render that from `,(0,c.jsx)(t.code,{children:`app/layout.tsx`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`5-use-components`,children:`5. Use components`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { Button, TextInput, toast } from '@adhamaa/ui-kit'
import { DataTable } from '@adhamaa/ui-kit/table'
import { RHFTextInput } from '@adhamaa/ui-kit/form'
`})}),`
`,(0,c.jsx)(t.p,{children:`The package has three entry points, so an app that never uses tables or react-hook-form doesn't load them:`}),`
`,(0,c.jsxs)(t.p,{children:[`| Import from | Contains | Needs |
| --- | --- | --- |
| `,(0,c.jsx)(t.code,{children:`…/ui-kit`}),` | Theme, fields, overlays, display | (ui-sdk is included) |
| `,(0,c.jsx)(t.code,{children:`…/ui-kit/form`}),` | `,(0,c.jsx)(t.code,{children:`RHF*`}),` fields, `,(0,c.jsx)(t.code,{children:`FormFields`}),`, `,(0,c.jsx)(t.code,{children:`FormDialog`}),` | react-hook-form |
| `,(0,c.jsx)(t.code,{children:`…/ui-kit/table`}),` | `,(0,c.jsx)(t.code,{children:`DataTable`}),`, AG Grid theme, cell editors | AG Grid |`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),a()})))()}l();export{s as default};