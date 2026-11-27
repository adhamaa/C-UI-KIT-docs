import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{a as r,b as i,f as a,p as o,s}from"./icons-BXSH-BZG.js";import{n as c,r as l,t as u}from"./Button-B6ZSy2dN.js";var d=t({AsyncClick:()=>O,Disabled:()=>E,FullWidth:()=>D,IconOnly:()=>w,Loading:()=>T,Playground:()=>b,Sizes:()=>S,Variants:()=>x,WithIcons:()=>C,__namedExportsOrder:()=>k,default:()=>y}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{l(),i(),f=n(),{expect:p,fn:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_=[`filled`,`light`,`outline`,`subtle`,`default`,`danger`],v=[`xs`,`sm`,`md`,`lg`],y={title:`Components/Buttons/Button`,component:u,tags:[`!autodocs`],parameters:{layout:`padded`},args:{children:`Save package`,variant:`filled`,size:`md`,onClick:m()},argTypes:{variant:{control:`inline-radio`,options:_},size:{control:`inline-radio`,options:v},leftSection:{control:!1},rightSection:{control:!1}}},b={},x={render:e=>(0,f.jsx)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:_.map(t=>(0,f.jsx)(u,{...e,variant:t,children:t===`danger`?`Delete`:t[0].toUpperCase()+t.slice(1)},t))})},S={render:e=>(0,f.jsx)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:v.map(t=>(0,f.jsxs)(u,{...e,size:t,children:[`Size `,t]},t))})},C={render:e=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,f.jsx)(u,{...e,leftSection:(0,f.jsx)(a,{}),children:`Add package`}),(0,f.jsx)(u,{...e,variant:`default`,rightSection:(0,f.jsx)(r,{}),children:`Next`})]})},w={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,f.jsx)(c,{"aria-label":`Refresh`,children:(0,f.jsx)(o,{})}),(0,f.jsx)(c,{"aria-label":`More actions`,variant:`default`,children:(0,f.jsx)(s,{})}),(0,f.jsx)(c,{"aria-label":`Add`,variant:`filled`,size:`lg`,children:(0,f.jsx)(a,{})})]})},T={args:{loading:!0,children:`Saving`}},E={args:{disabled:!0}},D={args:{fullWidth:!0}},O={args:{children:`Submit (1s)`,onClick:m(()=>new Promise(e=>setTimeout(e,1e3)))},play:async({args:e,canvasElement:t})=>{let n=g(t).getByRole(`button`,{name:`Submit (1s)`});await h.click(n),await p(e.onClick).toHaveBeenCalledTimes(1),await p(n).toHaveAttribute(`aria-busy`,`true`),await h.click(n),await p(e.onClick).toHaveBeenCalledTimes(1)}},k=[`Playground`,`Variants`,`Sizes`,`WithIcons`,`IconOnly`,`Loading`,`Disabled`,`FullWidth`,`AsyncClick`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}>\r
      {variants.map(variant => <Button key={variant} {...args} variant={variant}>\r
          {variant === 'danger' ? 'Delete' : variant[0].toUpperCase() + variant.slice(1)}\r
        </Button>)}\r
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>\r
      {sizes.map(size => <Button key={size} {...args} size={size}>\r
          Size {size}\r
        </Button>)}\r
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12
  }}>\r
      <Button {...args} leftSection={<icons.PlusIcon />}>\r
        Add package\r
      </Button>\r
      <Button {...args} variant="default" rightSection={<icons.ChevronRightIcon />}>\r
        Next\r
      </Button>\r
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>\r
      <IconButton aria-label="Refresh">\r
        <icons.RefreshIcon />\r
      </IconButton>\r
      <IconButton aria-label="More actions" variant="default">\r
        <icons.DotsVerticalIcon />\r
      </IconButton>\r
      <IconButton aria-label="Add" variant="filled" size="lg">\r
        <icons.PlusIcon />\r
      </IconButton>\r
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: 'Saving'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Submit (1s)',
    onClick: fn(() => new Promise(resolve => setTimeout(resolve, 1000)))
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const button = within(canvasElement).getByRole('button', {
      name: 'Submit (1s)'
    });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
    await expect(button).toHaveAttribute('aria-busy', 'true');
    // A second press while pending is ignored.
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...O.parameters?.docs?.source},description:{story:"Return a Promise from `onClick`: the button stays pending until it settles.",...O.parameters?.docs?.description}}}})))()}export{w as a,S as c,A as d,D as i,x as l,d as n,T as o,E as r,b as s,O as t,C as u};