# Tokens

Every component reads its colours, radius, shadows, fonts and heights from CSS variables. The swatches below show the live values. Use the **Theme** and **Scheme** switches in the toolbar to see them change.

To change a token for your app, use `defineTheme()` or `extendTheme()`. See **Theming**. To use one in your own code, read the variable, or call `tokenVar()` in JavaScript:

```tsx
import { tokenVar } from '@adhamaa/ui-kit'

<div style={{ color: tokenVar('mutedForeground') }} />   // var(--ui-muted-foreground)
```

```css
.my-panel {
  background: var(--kit-surface-raised);
  border: 1px solid var(--ui-border);
  border-radius: var(--ui-radius);
}
```

## Colours

Variables named `--ui-*` are shared with ui-sdk. Variables named `--kit-*` are the kit's own. Each colour has a light and a dark value.

```tsx
const Colors = () => (
  <div style={{ display: 'grid', gap: 24 }}>
    {colorGroups.map((group) => (
      <section key={group.title}>
        <h3 style={{ margin: '0 0 8px', fontSize: 14 }}>{group.title}</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: 12,
          }}
        >
          {group.tokens.map((token) => (
            <div key={token} style={{ display: 'grid', gap: 6 }}>
              <div
                style={{
                  height: 56,
                  borderRadius: 'var(--ui-radius)',
                  background: `var(${colorTokenVars[token]})`,
                  border: '1px solid var(--ui-border)',
                }}
              />
              <span style={label}>{token}</span>
              <span style={code}>{colorTokenVars[token]}</span>
            </div>
          ))}
        </div>
      </section>
    ))}
  </div>
);
```

Pair each background token with its `…Foreground` token for text on it, so the contrast holds in both schemes.

## Radius

`radius` is the default for fields and buttons. `radiusSm` is for small inner parts like list items and chips. `radiusLg` is for floating layers and containers like dropdown lists, cards and dialogs.

```tsx
const Radius = () => (
  <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
    {radii.map((token) => (
      <div key={token} style={{ display: 'grid', gap: 6 }}>
        <div
          style={{
            width: 96,
            height: 64,
            background: 'var(--kit-primary-soft)',
            border: '1px solid var(--ui-primary)',
            borderRadius: `var(${scalarTokenVars[token]})`,
          }}
        />
        <span style={label}>{token}</span>
        <span style={code}>{scalarTokenVars[token]}</span>
      </div>
    ))}
  </div>
);
```

## Shadows

`shadow` is for slightly raised elements. `shadowLg` is for floating layers like dropdown lists, menus and dialogs.

```tsx
const Shadows = () => (
  <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
    {shadows.map((token) => (
      <div key={token} style={{ display: 'grid', gap: 6 }}>
        <div
          style={{
            width: 140,
            height: 80,
            background: 'var(--kit-surface-raised)',
            borderRadius: 'var(--ui-radius)',
            boxShadow: `var(${scalarTokenVars[token]})`,
          }}
        />
        <span style={label}>{token}</span>
        <span style={code}>{scalarTokenVars[token]}</span>
      </div>
    ))}
  </div>
);
```

## Typography

`fontSans` is the interface font. `fontMono` is for codes, IDs and numbers that should line up. `fontSize` and `lineHeight` set the base text size.

```tsx
const Typography = () => (
  <div style={{ display: 'grid', gap: 16 }}>
    <div>
      <div style={{ fontFamily: 'var(--ui-font-sans)', fontSize: 20 }}>
        The quick brown fox jumps over the lazy dog 0123456789
      </div>
      <span style={label}>fontSans</span>{' '}
      <span style={code}>--ui-font-sans</span>
    </div>
    <div>
      <div style={{ fontFamily: 'var(--ui-font-mono)', fontSize: 16 }}>
        PKG-004 · 12,480.50 · {'{ status: "draft" }'}
      </div>
      <span style={label}>fontMono</span>{' '}
      <span style={code}>--ui-font-mono</span>
    </div>
  </div>
);
```

## Control heights

Buttons, inputs and selects of the same `size` share a height, so they line up in a row. These variables aren't part of the theme API. Override them in CSS if you need to.

```tsx
const ControlHeights = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end' }}>
    {heights.map((size) => (
      <div
        key={size}
        style={{ display: 'grid', gap: 6, justifyItems: 'center' }}
      >
        <div
          style={{
            width: 64,
            height: `var(--kit-h-${size})`,
            background: 'var(--kit-primary-soft)',
            border: '1px solid var(--ui-primary)',
            borderRadius: 'var(--kit-radius-sm)',
          }}
        />
        <span style={label}>{size}</span>
        <span style={code}>--kit-h-{size}</span>
      </div>
    ))}
  </div>
);
```

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/tokens--docs
