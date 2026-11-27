# FileInput

Import: `import { FileInput } from '@adhamaa/ui-kit'`

Picks or drops files, checks them against your limits, and lists what's chosen. It comes as a compact field with a Browse button, or a large dropzone.

```tsx
import { FileInput } from '@adhamaa/ui-kit'
```

```tsx
const Cards = () => {
  const [files, setFiles] = useState<File[]>([
    sampleFile('contract-signed.pdf', 482_000, 'application/pdf'),
    sampleFile('site-plan.xlsx', 96_000, 'application/vnd.ms-excel'),
  ])
  return (
    <FileInput
      label="Attachments"
      variant="dropzone"
      preview="cards"
      multiple
      value={files}
      onChange={setFiles}
      maxSize={100 * 1024 ** 2}
      placeholder="Drop your documents here"
      hint="Maximum upload file: 100 MB"
    />
  )
};
```

## Playground

```tsx
const Playground = () => <FileInput label="Contract (PDF)" accept=".pdf" onReject={() => {}} />;
```

## Examples

### One file or many

Without `multiple`, the value is a `File` or `null`. With `multiple`, it's a `File[]`. A file with the same name and size as one already chosen is never added twice.

```tsx
<FileInput label="Contract" accept=".pdf" onChange={(file) => setContract(file)} />
<FileInput label="Photos" multiple onChange={(files) => setPhotos(files)} />
```

### Dropzone

`variant="dropzone"` shows a large area to drop files on. `placeholder` is its main text and `hint` the smaller text under it.

```tsx
const Dropzone = () => <FileInput
    label="Site photos"
    accept="image/*"
    onReject={() => {}}
    variant="dropzone"
    multiple
    maxSize={5_000_000}
    description="JPG or PNG, up to 5 MB each" />;
```

### Cards

`preview="cards"` shows each file as a card with a thumbnail (or a document icon), name and size. Inside a dropzone the cards fill the area, which still takes drops. To show files that are already saved, create `File` objects and pass them as `value`.

```tsx
const Cards = () => {
  const [files, setFiles] = useState<File[]>([
    sampleFile('contract-signed.pdf', 482_000, 'application/pdf'),
    sampleFile('site-plan.xlsx', 96_000, 'application/vnd.ms-excel'),
  ])
  return (
    <FileInput
      label="Attachments"
      variant="dropzone"
      preview="cards"
      multiple
      value={files}
      onChange={setFiles}
      maxSize={100 * 1024 ** 2}
      placeholder="Drop your documents here"
      hint="Maximum upload file: 100 MB"
    />
  )
};
```

### Limits and rejections

`accept`, `maxSize` (bytes) and `maxFiles` limit what's accepted. Files that fail are listed under the field and passed to `onReject` with every reason: `file-type`, `file-too-large`, `too-many-files` or `duplicate`. Set `showRejections={false}` to hide the message, or pass a function to word it yourself.

```tsx
const Limits = () => <FileInput
    label="Up to 2 images, 1 MB each"
    accept="image/*"
    onReject={() => {}}
    variant="dropzone"
    multiple
    maxSize={1_000_000}
    maxFiles={2} />;
```

### States

```tsx
const States = () => (
  <div style={{ display: 'grid', gap: 16 }}>
    <FileInput accept=".pdf" label="Required" required />
    <FileInput accept=".pdf" label="With error" error="Attach the contract" />
    <FileInput accept=".pdf" label="Disabled" disabled />
  </div>
);
```

## Use with react-hook-form

```tsx
import { RHFFileInput } from '@adhamaa/ui-kit/form'

<RHFFileInput name="attachments" label="Attachments" multiple maxSize={10 * 1024 ** 2} />
```

The form value is a `File`, a `File[]` or `null`. Upload the files in your submit handler, for example with `FormData`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `ReactNode` |  | The visible label. |
| `description` | `ReactNode` |  | Helper text under the control. |
| `error` | `ReactNode` |  | An error to show. A string or node shows that message; `true` marks the field invalid without a message; `false` or empty clears it. |
| `required` | `boolean` |  | Marks the field required: the browser blocks submit and the label shows an asterisk. |
| `withAsterisk` | `boolean` |  | Show the asterisk without making the control natively required. |
| `disabled` | `boolean` |  |  |
| `readOnly` | `boolean` |  |  |
| `size` | `enum` | `'md'` | Control height and text size. |
| `className` | `string` |  | Classes for the outer wrapper. |
| `classNames` | `Partial<Record<FieldPart, string>>` |  | Classes for each part: `root`, `label`, `description`, `error`, `control`. |
| `style` | `CSSProperties` |  |  |
| `name` | `string` |  | The name the control submits under. |
| `id` | `string` |  |  |
| `accept` | `string \| readonly string[]` |  | Accepted types, like `"image/*"` or `[".pdf", "image/png"]`. |
| `maxSize` | `number` |  | Largest file, in bytes. |
| `maxFiles` | `number` |  | Most files, with `multiple`. |
| `onReject` | `((rejected: FileRejectionInfo[]) => void)` |  | Called with files that failed `accept`, `maxSize`, `maxFiles` or the duplicate check. |
| `showRejections` | `boolean \| ((rejected: FileRejectionInfo[]) => ReactNode)` | `true` | Show a message under the field when files are rejected. Pass a function to word it yourself. |
| `variant` | `enum` | `'button'` | `button`: a compact field with a Browse button. `dropzone`: a large area to drop files on. |
| `preview` | `enum` | `'list'` | How chosen files show. `list`: name and size rows. `cards`: cards with an image thumbnail (or a document icon), name and size. With `cards` in a dropzone, the cards fill the dropzone, which still takes drops. |
| `placeholder` | `ReactNode` |  | Main text inside the dropzone, or beside the button. |
| `hint` | `ReactNode` |  | Smaller text under the dropzone's placeholder, like a size limit. |
| `buttonLabel` | `ReactNode` | `'Browse'` | Label of the browse button. |
| `onFileRemove` | `((file: File, index: number) => void)` |  | Called after the user removes a file. |
| `multiple` | `boolean` |  |  |
| `value` | `File \| File[] \| null` |  |  |
| `defaultValue` | `File \| File[] \| null` |  |  |
| `onChange` | `((files: File[]) => void) \| ((file: File \| null) => void)` |  |  |

## Styling

| Selector | Part |
| --- | --- |
| `.kit-file` | The wrapper |
| `.kit-file__trigger` | The Browse button field (`variant="button"`) |
| `.kit-file__dropzone` | The drop area (`variant="dropzone"`) |
| `.kit-file__placeholder`, `.kit-file__hint` | The dropzone's texts |
| `.kit-file__list` | The chosen files (`.kit-file__list--cards` for cards) |
| `.kit-file__item`, `.kit-file__card` | One file as a row or a card |
| `.kit-file__thumb` | A card's thumbnail (`--doc` for the document icon) |
| `.kit-file__name`, `.kit-file__size` | The file's name and size |
| `.kit-file__remove`, `.kit-file__card-remove` | The remove button |

The dropzone uses the `surface` token.

## Accessibility

Built on [ui-sdk File Input](https://ui-sdk.dev/docs/react/components/file-input). Files can always be chosen with the keyboard through the system file dialog, so nobody has to drag. The chosen files are a list named "Chosen files". Each remove button is named after its file.

## Usage guidelines

**Do**

- Say what's accepted and how big in `description` or `hint`: "PDF, up to 10 MB".
- Use `preview="cards"` for photos, so people can check they picked the right ones.

**Don't**

- Don't upload on drop without showing progress. Upload on submit, or show a loader per file.

## Related

- **ImagePreviewer**: shows an uploaded image full screen.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-inputs-fileinput--docs
