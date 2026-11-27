# ImagePreviewer

Import: `import { ImagePreviewer } from '@adhamaa/ui-kit'`

A thumbnail that opens the image full screen, with zoom. Use it for site photos and other uploaded images.

```tsx
import { ImagePreviewer } from '@adhamaa/ui-kit'
```

```tsx
const Gallery = () => (
  <div
    style={{
      display: 'grid',
      gap: 16,
      gridTemplateColumns: 'repeat(auto-fill, 200px)',
    }}
  >
    {[1, 2, 3, 4].map((n) => (
      <ImagePreviewer
        key={n}
        src={photo(n)}
        alt={`Site photo ${n}`}
        label={`IMG_20${n}1.jpg`}
        meta="12 Nov 2026"
        fileSize={245_000 * n}
      />
    ))}
  </div>
);
```

## Playground

```tsx
const Playground = () => <ImagePreviewer
    src={photo(1, 'Pothole at KM 12')}
    alt="Pothole at KM 12"
    label="IMG_2041.jpg"
    meta="12 Nov 2026"
    fileSize={245_000}
    width={240}
    height={160} />;
```

## Examples

### Gallery

`label` and `meta` caption the thumbnail, like the file name and upload date. `fileSize` (bytes) shows in the viewer's header. The thumbnail fills its container's width by default and is 160px tall: set `width` and `height` to change it.

```tsx
const Gallery = () => (
  <div
    style={{
      display: 'grid',
      gap: 16,
      gridTemplateColumns: 'repeat(auto-fill, 200px)',
    }}
  >
    {[1, 2, 3, 4].map((n) => (
      <ImagePreviewer
        key={n}
        src={photo(n)}
        alt={`Site photo ${n}`}
        label={`IMG_20${n}1.jpg`}
        meta="12 Nov 2026"
        fileSize={245_000 * n}
      />
    ))}
  </div>
);
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `src` (required) | `string` |  |  |
| `alt` (required) | `string` |  |  |
| `label` | `ReactNode` |  | A caption under the thumbnail, like the file name. |
| `meta` | `ReactNode` |  | Secondary caption, like the upload date. |
| `fileSize` | `number` |  | Shown in the viewer header. |
| `width` | `string \| number` | `100%` | Thumbnail width, any CSS length. |
| `height` | `string \| number` | `160` | Thumbnail height. |
| `className` | `string` |  |  |

## Styling

| Selector | Part |
| --- | --- |
| `.kit-image-preview` | The thumbnail and caption |
| `.kit-image-preview__thumb` | The thumbnail button |
| `.kit-image-preview__label`, `.kit-image-preview__meta` | The caption |
| `.kit-viewer` | The full-screen viewer |
| `.kit-viewer__bar`, `.kit-viewer__title`, `.kit-viewer__size` | The viewer's header |
| `.kit-viewer__tools` | Zoom and close buttons |
| `.kit-viewer__stage` | The image area |

## Accessibility

The thumbnail is a button named "Open" plus the image's `alt`. The viewer is a modal dialog built on [ui-sdk Dialog](https://ui-sdk.dev/docs/react/components/dialog): focus moves in, Escape closes it, and focus returns to the thumbnail. The Zoom in, Zoom out and Close buttons are named.

Always write a real `alt` that describes the photo: "Pothole at KM 12", not "IMG_2041".

## Related

- **FileInput**: `preview="cards"` shows thumbnails while uploading.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-data-display-imagepreviewer--docs
