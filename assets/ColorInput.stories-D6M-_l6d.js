import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,r as a,t as o}from"./ColorInput-D6AkWH-T.js";var s=t({Controlled:()=>g,Formats:()=>m,InlinePicker:()=>_,Playground:()=>p,WithAlpha:()=>h,__namedExportsOrder:()=>v,default:()=>f}),c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{a(),c=n(),l=r(),{fn:u}=__STORYBOOK_MODULE_TEST__,d=[`#e03131`,`#f08c00`,`#2f9e44`,`#1971c2`,`#7048e8`,`#f2c45a`],f={title:`Components/Inputs/ColorInput`,component:o,tags:[`!autodocs`],parameters:{layout:`padded`},args:{label:`Route colour`,defaultValue:`#1971c2`,swatches:d,onChange:u(),onChangeEnd:u()},argTypes:{format:{control:`inline-radio`,options:[`hex`,`srgb`,`hsl`,`oklch`]},size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`]},error:{control:`text`},swatches:{control:!1}},decorators:[e=>(0,l.jsx)(`div`,{style:{maxWidth:320,minHeight:380},children:(0,l.jsx)(e,{})})]},p={},m={render:e=>(0,l.jsx)(`div`,{style:{display:`grid`,gap:16},children:[`hex`,`srgb`,`hsl`,`oklch`].map(t=>(0,l.jsx)(o,{...e,format:t,label:`format="${t}"`},t))})},h={args:{label:`Overlay colour`,withAlpha:!0,format:`srgb`}},g={render:e=>{let[t,n]=(0,c.useState)(`#2f9e44`);return(0,l.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,l.jsx)(o,{...e,value:t,onChange:n}),(0,l.jsx)(`div`,{style:{height:40,borderRadius:`var(--ui-radius)`,background:t}})]})}},_={render:()=>(0,l.jsx)(i,{"aria-label":`Route colour`,defaultValue:`#7048e8`,swatches:d})},v=[`Playground`,`Formats`,`WithAlpha`,`Controlled`,`InlinePicker`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 16
  }}>\r
      {(['hex', 'srgb', 'hsl', 'oklch'] as const).map(format => <ColorInput key={format} {...args} format={format} label={\`format="\${format}"\`} />)}\r
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Overlay colour',
    withAlpha: true,
    format: 'srgb'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [colour, setColour] = useState('#2f9e44');
    return <div style={{
      display: 'grid',
      gap: 12
    }}>\r
        <ColorInput {...args} value={colour} onChange={setColour} />\r
        <div style={{
        height: 40,
        borderRadius: 'var(--ui-radius)',
        background: colour
      }} />\r
      </div>;
  }
}`,...g.parameters?.docs?.source},description:{story:"`onChange` runs mid-drag; `onChangeEnd` runs once, when the drag ends.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ColorPicker aria-label="Route colour" defaultValue="#7048e8" swatches={swatches} />
}`,..._.parameters?.docs?.source}}}})))()}export{p as a,_ as i,g as n,h as o,m as r,y as s,s as t};