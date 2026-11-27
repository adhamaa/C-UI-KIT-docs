import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{c as i,u as a}from"./blocks-DItH5EBd.js";function o(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,input:`input`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Contributing`}),`
`,(0,c.jsx)(t.h1,{id:`contributing`,children:`Contributing`}),`
`,(0,c.jsxs)(t.p,{children:[`How to add a component to the kit, and how to document it so its page matches the rest. `,(0,c.jsx)(t.strong,{children:`Button`}),`, `,(0,c.jsx)(t.strong,{children:`Select`}),` and `,(0,c.jsx)(t.strong,{children:`Dialog`}),` are the reference pages: copy one when you start.`]}),`
`,(0,c.jsx)(t.h2,{id:`where-things-live`,children:`Where things live`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:`packages/ui-kit/src/components/<Name>/<Name>.tsx   the component, with JSDoc on every prop
packages/ui-kit/src/styles/<area>.css             its styles, in @layer ui-kit
apps/docs/src/stories/<Category>/<Name>.stories.tsx   its stories
apps/docs/src/stories/<Category>/<Name>.mdx           its docs page
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Categories, in sidebar order: `,(0,c.jsx)(t.strong,{children:`Buttons`}),`, `,(0,c.jsx)(t.strong,{children:`Inputs`}),`, `,(0,c.jsx)(t.strong,{children:`Combobox`}),`, `,(0,c.jsx)(t.strong,{children:`Dates`}),`, `,(0,c.jsx)(t.strong,{children:`Overlays`}),`, `,(0,c.jsx)(t.strong,{children:`Feedback`}),`, `,(0,c.jsx)(t.strong,{children:`Data display`}),`, `,(0,c.jsx)(t.strong,{children:`Navigation`}),`, `,(0,c.jsx)(t.strong,{children:`Theming`}),`, `,(0,c.jsx)(t.strong,{children:`Table`}),`. The story `,(0,c.jsx)(t.code,{children:`title`}),` is `,(0,c.jsx)(t.code,{children:`Components/<Category>/<Name>`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`1-write-jsdoc-on-the-component`,children:`1. Write JSDoc on the component`}),`
`,(0,c.jsx)(t.p,{children:`The props table is generated from it, so this is where most of the reference docs come from.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`export type BadgeProps = {
  /** @default 'light' */
  variant?: 'light' | 'filled' | 'outline' | 'dot'
  /** Content before the label, usually an icon. */
  leftSection?: React.ReactNode
}

/**
 * A short label for a status or a count.
 *
 * @example
 * <Badge color="success">Approved</Badge>
 */
export function Badge(props: BadgeProps) { … }
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`One line per prop that says what it does, not what type it is.`}),`
`,(0,c.jsxs)(t.li,{children:[`Add `,(0,c.jsx)(t.code,{children:`@default`}),` for every prop with a default.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Give the component a summary and an `,(0,c.jsx)(t.code,{children:`@example`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`2-write-the-stories`,children:`2. Write the stories`}),`
`,(0,c.jsxs)(t.p,{children:[`One `,(0,c.jsx)(t.code,{children:`.stories.tsx`}),` file per component.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`const meta = {
  title: 'Components/Data display/Badge',
  component: Badge,
  tags: ['!autodocs'],          // the .mdx file is the docs page
  parameters: { layout: 'padded' },
  args: { children: 'Approved' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['light', 'filled', 'outline', 'dot'] },
  },
} satisfies Meta<typeof Badge>

export const Playground: Story = {}
export const Variants: Story = { render: (args) => … }
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Start with a `,(0,c.jsx)(t.code,{children:`Playground`}),` story with no args of its own, so the Controls drive it.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Spread `,(0,c.jsx)(t.code,{children:`args`}),` into `,(0,c.jsx)(t.code,{children:`render`}),` stories (`,(0,c.jsx)(t.code,{children:`<Badge {...args} variant="dot" />`}),`), so toolbar changes reach them.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Use `,(0,c.jsx)(t.code,{children:`fn()`}),` from `,(0,c.jsx)(t.code,{children:`storybook/test`}),` for callbacks, so calls show in the Actions panel.`]}),`
`,(0,c.jsx)(t.li,{children:`Use realistic INFRACIVIC data: packages, routes, contractors, states. Avoid "foo" and "Lorem ipsum".`}),`
`,(0,c.jsxs)(t.li,{children:[`For components with real interaction (pickers, overlays, tables), add `,(0,c.jsx)(t.code,{children:`play`}),` tests: open it, pick something with the mouse, do the same with the keyboard, and check focus. See `,(0,c.jsx)(t.code,{children:`Select.stories.tsx`}),` and `,(0,c.jsx)(t.code,{children:`Dialog.stories.tsx`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`3-write-the-docs-page`,children:`3. Write the docs page`}),`
`,(0,c.jsxs)(t.p,{children:[`Copy this template to `,(0,c.jsx)(t.code,{children:`<Name>.mdx`}),` and fill it in. Sections marked `,(0,c.jsx)(t.em,{children:`(complex only)`}),` are required for form controls, overlays and data display, and optional for small components.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-mdx`,children:`import { ArgTypes, Canvas, Controls, Meta, Source } from '@storybook/addon-docs/blocks'
import * as Stories from './Badge.stories'

<Meta of={Stories} />

# Badge

One or two sentences: what it does and when to reach for it.

<Source language="tsx" dark code={\`import { Badge } from '@adhamaa/ui-kit'\`} />

<Canvas of={Stories.Variants} />

## Playground

<Canvas of={Stories.Playground} />
<Controls of={Stories.Playground} />

## Examples

### Variants
### Sizes
### …one heading per story, each with a sentence and a <Canvas>

## Composition            ← only if it has parts or sub-components

## Use with react-hook-form   ← only if an RHF* version exists

## Props

<ArgTypes of={Stories} />

## Styling                ← (complex only) kit-* classes, data-* attributes, tokens

## Accessibility

Built on [ui-sdk <Name>](https://ui-sdk.dev/docs/react/components/<name>).
A keyboard table, plus anything the kit adds or changes.

## Usage guidelines       ← (complex only) Do / Don't

## Related                ← (complex only)
`})}),`
`,(0,c.jsx)(t.h2,{id:`writing-style`,children:`Writing style`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Write for an app developer who has never seen the component.`}),`
`,(0,c.jsxs)(t.li,{children:[`Use short sentences and the second person: "Pass `,(0,c.jsx)(t.code,{children:`value`}),` to control it."`]}),`
`,(0,c.jsx)(t.li,{children:`Lead each example with what it's for, then show it.`}),`
`,(0,c.jsx)(t.li,{children:`Link to ui-sdk for behaviour the kit doesn't change. Only spell out what the kit adds.`}),`
`,(0,c.jsx)(t.li,{children:`Show code people can copy: real imports, real prop names.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`before-you-open-a-pr`,children:`Before you open a PR`}),`
`,(0,c.jsxs)(t.ul,{className:`contains-task-list`,children:[`
`,(0,c.jsxs)(t.li,{className:`task-list-item`,children:[(0,c.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,`Every prop has JSDoc, with `,(0,c.jsx)(t.code,{children:`@default`}),` where it has one.`]}),`
`,(0,c.jsxs)(t.li,{className:`task-list-item`,children:[(0,c.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,`Stories cover each variant, size and state.`]}),`
`,(0,c.jsxs)(t.li,{className:`task-list-item`,children:[(0,c.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,`The docs page follows the template and renders with no errors.`]}),`
`,(0,c.jsxs)(t.li,{className:`task-list-item`,children:[(0,c.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,`The `,(0,c.jsx)(t.strong,{children:`Accessibility`}),` panel shows no violations on any story.`]}),`
`,(0,c.jsxs)(t.li,{className:`task-list-item`,children:[(0,c.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,(0,c.jsx)(t.code,{children:`play`}),` tests pass in the `,(0,c.jsx)(t.strong,{children:`Interactions`}),` panel (if any).`]}),`
`,(0,c.jsxs)(t.li,{className:`task-list-item`,children:[(0,c.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,`Both themes and both schemes look right (toolbar switches).`]}),`
`,(0,c.jsxs)(t.li,{className:`task-list-item`,children:[(0,c.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,(0,c.jsx)(t.code,{children:`yarn lint`}),`, `,(0,c.jsx)(t.code,{children:`yarn type-check`}),` and `,(0,c.jsx)(t.code,{children:`yarn build-storybook`}),` pass.`]}),`
`,(0,c.jsxs)(t.li,{className:`task-list-item`,children:[(0,c.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,`A changeset if the package changed (`,(0,c.jsx)(t.code,{children:`yarn changeset`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`publishing-the-docs`,children:`Publishing the docs`}),`
`,(0,c.jsxs)(t.p,{children:[`The docs are published to GitHub Pages at `,(0,c.jsx)(t.a,{href:`https://adhamaa.github.io/C-UI-KIT-docs/`,rel:`nofollow`,children:`https://adhamaa.github.io/C-UI-KIT-docs/`}),`, from the public repo `,(0,c.jsx)(t.code,{children:`adhamaa/C-UI-KIT-docs`}),`. Until the org's GitHub Actions work again, publish by hand after a release or a docs fix:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`yarn deploy-docs
`})}),`
`,(0,c.jsxs)(t.p,{children:[`It builds Storybook, generates the AI-readable text (`,(0,c.jsx)(t.code,{children:`llms.txt`}),`, `,(0,c.jsx)(t.code,{children:`llms-full.txt`}),` and a Markdown page per component, from the Storybook manifests), and pushes `,(0,c.jsx)(t.code,{children:`apps/docs/storybook-static`}),` to the `,(0,c.jsx)(t.code,{children:`gh-pages`}),` branch of the docs repo. You need push access to that repo. Set `,(0,c.jsx)(t.code,{children:`DOCS_REPO`}),` to publish somewhere else, for example a fork.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The kit's MCP server (see `,(0,c.jsx)(t.strong,{children:`Use with AI`}),`) reads that text, so your JSDoc, stories and docs pages are what AI assistants learn from. Keep them complete, and run `,(0,c.jsx)(t.code,{children:`yarn build-storybook && yarn build-llms`}),` to preview the output in `,(0,c.jsx)(t.code,{children:`apps/docs/storybook-static/llms/`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),a()})))()}l();export{s as default};