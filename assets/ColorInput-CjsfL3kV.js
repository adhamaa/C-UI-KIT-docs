import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./ColorInput-D6AkWH-T.js";import{i,r as a}from"./react-DITjJg24.js";import{a as o,c as s,l as c,n as l,r as u,u as d}from"./blocks-DItH5EBd.js";import{a as f,i as p,n as m,o as h,r as g,s as _,t as v}from"./ColorInput.stories-D6M-_l6d.js";function y(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...i(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s,{of:v}),`
`,(0,x.jsx)(t.h1,{id:`colorinput-and-colorpicker`,children:`ColorInput and ColorPicker`}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.code,{children:`ColorInput`}),` is a text field for a colour, with a swatch that opens a picker. `,(0,x.jsx)(t.code,{children:`ColorPicker`}),` is the same picker shown inline: a saturation area, a hue slider and optional swatches.`]}),`
`,(0,x.jsx)(c,{language:`tsx`,dark:!0,code:`import { ColorInput, ColorPicker } from '@adhamaa/ui-kit'`}),`
`,(0,x.jsx)(u,{of:f}),`
`,(0,x.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,x.jsx)(o,{of:f}),`
`,(0,x.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,x.jsx)(t.h3,{id:`formats`,children:`Formats`}),`
`,(0,x.jsxs)(t.p,{children:[`The value is a CSS colour string in `,(0,x.jsx)(t.code,{children:`format`}),`: `,(0,x.jsx)(t.code,{children:`hex`}),` (default), `,(0,x.jsx)(t.code,{children:`srgb`}),` (`,(0,x.jsx)(t.code,{children:`rgb()`}),`), `,(0,x.jsx)(t.code,{children:`hsl`}),` or `,(0,x.jsx)(t.code,{children:`oklch`}),`. Typed colours in any CSS syntax are converted to it.`]}),`
`,(0,x.jsx)(u,{of:g}),`
`,(0,x.jsx)(t.h3,{id:`transparency`,children:`Transparency`}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.code,{children:`withAlpha`}),` adds an alpha slider. Use a format that can hold alpha, like `,(0,x.jsx)(t.code,{children:`srgb`}),` or `,(0,x.jsx)(t.code,{children:`oklch`}),`.`]}),`
`,(0,x.jsx)(u,{of:h}),`
`,(0,x.jsx)(t.h3,{id:`controlled`,children:`Controlled`}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.code,{children:`onChange`}),` runs as the colour changes, including while dragging. `,(0,x.jsx)(t.code,{children:`onChangeEnd`}),` runs once the drag is released or the edit is committed. Save in `,(0,x.jsx)(t.code,{children:`onChangeEnd`}),`.`]}),`
`,(0,x.jsx)(u,{of:m}),`
`,(0,x.jsx)(t.h3,{id:`inline-picker`,children:`Inline picker`}),`
`,(0,x.jsx)(u,{of:p}),`
`,(0,x.jsx)(t.h2,{id:`use-with-react-hook-form`,children:`Use with react-hook-form`}),`
`,(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:`language-tsx`,children:`import { RHFColorInput } from '@adhamaa/ui-kit/form'

<RHFColorInput name="routeColour" label="Route colour" swatches={brandColours} />
`})}),`
`,(0,x.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,x.jsx)(t.h3,{id:`colorinput`,children:`ColorInput`}),`
`,(0,x.jsx)(l,{of:v}),`
`,(0,x.jsx)(t.h3,{id:`colorpicker`,children:`ColorPicker`}),`
`,(0,x.jsx)(l,{of:n}),`
`,(0,x.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,x.jsxs)(t.table,{children:[(0,x.jsx)(t.thead,{children:(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.th,{children:`Selector`}),(0,x.jsx)(t.th,{children:`Part`})]})}),(0,x.jsxs)(t.tbody,{children:[(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`.kit-color`})}),(0,x.jsx)(t.td,{children:`The picker`})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`.kit-color--popover`})}),(0,x.jsx)(t.td,{children:`The picker inside ColorInput's popup`})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`.kit-color__area`})}),(0,x.jsx)(t.td,{children:`The saturation and brightness area`})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`.kit-color__slider`})}),(0,x.jsx)(t.td,{children:`The hue or alpha slider`})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`.kit-color__thumb`})}),(0,x.jsx)(t.td,{children:`A draggable handle`})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsxs)(t.td,{children:[(0,x.jsx)(t.code,{children:`.kit-color__swatches`}),`, `,(0,x.jsx)(t.code,{children:`.kit-color__swatch`})]}),(0,x.jsx)(t.td,{children:`The preset colours`})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:(0,x.jsx)(t.code,{children:`.kit-color__preview`})}),(0,x.jsx)(t.td,{children:`The swatch in ColorInput's field`})]})]})]}),`
`,(0,x.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,x.jsxs)(t.p,{children:[`Built on `,(0,x.jsx)(t.a,{href:`https://ui-sdk.dev/docs/react/components/color-picker`,rel:`nofollow`,children:`ui-sdk Color Picker`}),`. The area and sliders are sliders for assistive technology, and each swatch is a button named by its colour. Give a `,(0,x.jsx)(t.code,{children:`ColorPicker`}),` without a label an `,(0,x.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`,(0,x.jsxs)(t.table,{children:[(0,x.jsx)(t.thead,{children:(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.th,{children:`Key`}),(0,x.jsx)(t.th,{children:`Does`})]})}),(0,x.jsxs)(t.tbody,{children:[(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:`Arrow keys`}),(0,x.jsx)(t.td,{children:`On the area or a slider, move the handle`})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:`Enter`}),(0,x.jsx)(t.td,{children:`In the text field, commits the typed colour`})]}),(0,x.jsxs)(t.tr,{children:[(0,x.jsx)(t.td,{children:`Escape`}),(0,x.jsx)(t.td,{children:`Closes ColorInput's popup`})]})]})]}),`
`,(0,x.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,x.jsx)(t.p,{children:(0,x.jsx)(t.strong,{children:`Do`})}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[`Offer `,(0,x.jsx)(t.code,{children:`swatches`}),` for your brand or status colours, so people pick consistent colours.`]}),`
`,(0,x.jsx)(t.li,{children:`Check that text on the chosen colour is still readable.`}),`
`]}),`
`,(0,x.jsx)(t.p,{children:(0,x.jsx)(t.strong,{children:`Don't`})}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsx)(t.li,{children:`Don't use colour as the only way to tell things apart. Add a label or icon.`}),`
`]}),`
`,(0,x.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Tokens`}),`: the theme's colours.`]}),`
`]})]})}function b(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;function S(){return(S=e((()=>{x=t(),a(),d(),r(),_()})))()}S();export{b as default};