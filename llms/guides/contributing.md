# Contributing

How to add a component to the kit, and how to document it so its page matches the rest. **Button**, **Select** and **Dialog** are the reference pages: copy one when you start.

## Where things live

```
packages/ui-kit/src/components/<Name>/<Name>.tsx   the component, with JSDoc on every prop
packages/ui-kit/src/styles/<area>.css             its styles, in @layer ui-kit
apps/docs/src/stories/<Category>/<Name>.stories.tsx   its stories
apps/docs/src/stories/<Category>/<Name>.mdx           its docs page
```

Categories, in sidebar order: **Buttons**, **Inputs**, **Combobox**, **Dates**, **Overlays**, **Feedback**, **Data display**, **Navigation**, **Theming**, **Table**. The story `title` is `Components/<Category>/<Name>`.

## 1. Write JSDoc on the component

The props table is generated from it, so this is where most of the reference docs come from.

```tsx
export type BadgeProps = {
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
```

- One line per prop that says what it does, not what type it is.
- Add `@default` for every prop with a default.
- Give the component a summary and an `@example`.

## 2. Write the stories

One `.stories.tsx` file per component.

```tsx
const meta = {
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
```

- Start with a `Playground` story with no args of its own, so the Controls drive it.
- Spread `args` into `render` stories (`<Badge {...args} variant="dot" />`), so toolbar changes reach them.
- Use `fn()` from `storybook/test` for callbacks, so calls show in the Actions panel.
- Use realistic INFRACIVIC data: packages, routes, contractors, states. Avoid "foo" and "Lorem ipsum".
- For components with real interaction (pickers, overlays, tables), add `play` tests: open it, pick something with the mouse, do the same with the keyboard, and check focus. See `Select.stories.tsx` and `Dialog.stories.tsx`.

## 3. Write the docs page

Copy this template to `<Name>.mdx` and fill it in. Sections marked *(complex only)* are required for form controls, overlays and data display, and optional for small components.

````mdx
import { ArgTypes, Canvas, Controls, Meta, Source } from '@storybook/addon-docs/blocks'
import * as Stories from './Badge.stories'

<Meta of={Stories} />

# Badge

One or two sentences: what it does and when to reach for it.

<Source language="tsx" dark code={`import { Badge } from '@adhamaa/ui-kit'`} />

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
````

## Writing style

- Write for an app developer who has never seen the component.
- Use short sentences and the second person: "Pass `value` to control it."
- Lead each example with what it's for, then show it.
- Link to ui-sdk for behaviour the kit doesn't change. Only spell out what the kit adds.
- Show code people can copy: real imports, real prop names.

## Before you open a PR

- [ ] Every prop has JSDoc, with `@default` where it has one.
- [ ] Stories cover each variant, size and state.
- [ ] The docs page follows the template and renders with no errors.
- [ ] The **Accessibility** panel shows no violations on any story.
- [ ] `play` tests pass in the **Interactions** panel (if any).
- [ ] Both themes and both schemes look right (toolbar switches).
- [ ] `yarn lint`, `yarn type-check` and `yarn build-storybook` pass.
- [ ] A changeset if the package changed (`yarn changeset`).

## Publishing the docs

The docs are published to GitHub Pages at https://adhamaa.github.io/C-UI-KIT-docs/, from the public repo `adhamaa/C-UI-KIT-docs`. Until the org's GitHub Actions work again, publish by hand after a release or a docs fix:

```sh
yarn deploy-docs
```

It builds Storybook and pushes `apps/docs/storybook-static` to the `gh-pages` branch of the docs repo. You need push access to that repo. Set `DOCS_REPO` to publish somewhere else, for example a fork.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/contributing--docs
