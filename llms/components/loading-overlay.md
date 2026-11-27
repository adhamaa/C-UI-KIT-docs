# LoadingOverlay

Import: `import { LoadingOverlay } from '@adhamaa/ui-kit'`

Covers its parent with a translucent layer and a loader, so the content can't be used while it updates. The parent needs `position: relative`.

```tsx
import { LoadingOverlay } from '@adhamaa/ui-kit'
```

```tsx
const Playground = () => <div style={{ position: 'relative', maxWidth: 360 }}>
    <LoadingOverlay visible blur label="Loading" />
    <Card title="Package details">
        <div style={{ display: 'grid', gap: 12 }}>
            <TextInput label="Package name" defaultValue="Road upgrade section 4" />
            <TextInput label="Package no." defaultValue="PKG-004" />
        </div>
    </Card>
</div>;
```

## Examples

### While saving

```tsx
<div style={{ position: 'relative' }}>
  <LoadingOverlay visible={mutation.isPending} label="Saving" />
  <PackageForm />
</div>
```

```tsx
const WhileSaving = () => {
  const [saving, setSaving] = useState(false)
  return (
    <div style={{ position: 'relative', maxWidth: 360 }}>
      <LoadingOverlay visible={saving} label="Saving" />
      <Card
        title="Package details"
        footer={
          <Button
            onClick={() => {
              setSaving(true)
              setTimeout(() => setSaving(false), 1500)
            }}
          >
            Save
          </Button>
        }
      >
        <TextInput
          label="Package name"
          defaultValue="Road upgrade section 4"
        />
      </Card>
    </div>
  )
};
```

`blur` (on by default) blurs the content underneath. Turn it off when people should still read the content while it refreshes.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `visible` (required) | `boolean` |  |  |
| `label` | `string` | `Loading` | What screen readers hear. |
| `blur` | `boolean` | `true` | Blur the content underneath. |
| `className` | `string` |  |  |

## Styling

| Selector | Part |
| --- | --- |
| `.kit-overlay` | The layer (`[data-blur]` when blurred) |

## Accessibility

The loader inside has `role="status"` and is named by `label` ("Loading" by default), so screen readers announce it. The layer blocks pointer presses, but not the keyboard: disable the form's controls too if editing must stop.

## Usage guidelines

**Do**

- Use it to cover one panel, table or form, not the whole page.

**Don't**

- Don't use it for the first load. Use `Skeleton`, which shows the layout.

## Related

- **Loader**, **Skeleton**.
- **DataTable**: has its own loading state.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-feedback-loadingoverlay--docs
