# Avatar

Import: `import { Avatar } from '@adhamaa/ui-kit'`

A person's picture, with their initials while it loads, if it fails, or when there's no picture.

```tsx
import { Avatar } from '@adhamaa/ui-kit'
```

```tsx
const Initials = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Avatar name="Aisyah Rahman" />
    <Avatar name="Lim Wei Jie" />
    <Avatar name="Muthu" />
    <Avatar src="/missing.png" name="Broken Image" />
    <Avatar />
  </div>
);
```

## Playground

```tsx
const Playground = () => <Avatar src={portrait(200)} name="Aisyah Rahman" size="md" radius="full" />;
```

## Examples

### Initials and fallback

`name` gives the initials (up to two letters) and the image's alt text. Without a name, `fallback` shows instead, or a blank circle.

```tsx
const Initials = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Avatar name="Aisyah Rahman" />
    <Avatar name="Lim Wei Jie" />
    <Avatar name="Muthu" />
    <Avatar src="/missing.png" name="Broken Image" />
    <Avatar />
  </div>
);
```

### Sizes and shape

`size` takes a preset (`xs` 20px to `xl` 64px) or a number of pixels. `radius="md"` makes it a rounded square, for organisations rather than people.

```tsx
const Sizes = args => <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
      <Avatar key={size} {...args} size={size} />
    ))}
    <Avatar src={portrait(200)} name="Aisyah Rahman" radius="full" size={80} />
</div>;
```
```tsx
const Square = () => <Avatar src={portrait(200)} name="Aisyah Rahman" size="lg" radius="md" />;
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `src` | `string \| null` |  |  |
| `alt` | `string` |  | Alt text for the image. Defaults to `name`. |
| `name` | `string` |  | A person's name: its initials show while the image loads or if it fails. |
| `size` | `number \| Size \| "xl"` | `md` | Preset or pixels. |
| `radius` | `enum` | `full` |  |
| `fallback` | `ReactNode` |  | Shown instead of initials when there's no name. |
| `className` | `string` |  |  |

## Styling

| Selector | Part |
| --- | --- |
| `.kit-avatar` | The avatar (`[data-radius]`) |
| `.kit-avatar__image` | The image |
| `.kit-avatar__fallback` | The initials or fallback |

## Accessibility

Built on [ui-sdk Avatar](https://ui-sdk.dev/docs/react/components/avatar). The image's alt text is `alt`, or `name`. When the name is already written next to the avatar, pass `alt=""` so screen readers don't read it twice.

## Usage guidelines

**Do**

- Always pass `name`, so there's a fallback.

**Don't**

- Don't use an avatar as the only way to identify someone. Show their name nearby.

## Related

- **ActionMenu**: an account menu with the avatar as its trigger.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-data-display-avatar--docs
