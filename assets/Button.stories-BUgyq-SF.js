import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{a as r,b as i,f as a,p as o,s}from"./icons-BXSH-BZG.js";import{i as c,n as l,r as u,t as d}from"./Button-DgE24e3S.js";var f=t({AsyncClick:()=>k,Disabled:()=>D,FullWidth:()=>O,IconOnly:()=>T,Loading:()=>E,Playground:()=>x,Sizes:()=>C,Variants:()=>S,WithIcons:()=>w,__namedExportsOrder:()=>A,default:()=>b}),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{l(),c(),i(),p=n(),{expect:m,fn:h,userEvent:g,within:_}=__STORYBOOK_MODULE_TEST__,v=[`filled`,`light`,`outline`,`subtle`,`default`,`danger`],y=[`xs`,`sm`,`md`,`lg`],b={title:`Components/Buttons/Button`,component:d,tags:[`!autodocs`],parameters:{layout:`padded`},args:{children:`Save package`,variant:`filled`,size:`md`,onClick:h()},argTypes:{variant:{control:`inline-radio`,options:v},size:{control:`inline-radio`,options:y},leftSection:{control:!1},rightSection:{control:!1}}},x={},S={render:e=>(0,p.jsx)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:v.map(t=>(0,p.jsx)(d,{...e,variant:t,children:t===`danger`?`Delete`:t[0].toUpperCase()+t.slice(1)},t))})},C={render:e=>(0,p.jsx)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:y.map(t=>(0,p.jsxs)(d,{...e,size:t,children:[`Size `,t]},t))})},w={render:e=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,p.jsx)(d,{...e,leftSection:(0,p.jsx)(a,{}),children:`Add package`}),(0,p.jsx)(d,{...e,variant:`default`,rightSection:(0,p.jsx)(r,{}),children:`Next`})]})},T={render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,p.jsx)(u,{"aria-label":`Refresh`,children:(0,p.jsx)(o,{})}),(0,p.jsx)(u,{"aria-label":`More actions`,variant:`default`,children:(0,p.jsx)(s,{})}),(0,p.jsx)(u,{"aria-label":`Add`,variant:`filled`,size:`lg`,children:(0,p.jsx)(a,{})})]})},E={args:{loading:!0,children:`Saving`}},D={args:{disabled:!0}},O={args:{fullWidth:!0}},k={args:{children:`Submit (1s)`,onClick:h(()=>new Promise(e=>setTimeout(e,1e3)))},play:async({args:e,canvasElement:t})=>{let n=_(t).getByRole(`button`,{name:`Submit (1s)`});await g.click(n),await m(e.onClick).toHaveBeenCalledTimes(1),await m(n).toHaveAttribute(`aria-busy`,`true`),await g.click(n),await m(e.onClick).toHaveBeenCalledTimes(1)}},A=[`Playground`,`Variants`,`Sizes`,`WithIcons`,`IconOnly`,`Loading`,`Disabled`,`FullWidth`,`AsyncClick`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}>\r
      {variants.map(variant => <Button key={variant} {...args} variant={variant}>\r
          {variant === 'danger' ? 'Delete' : variant[0].toUpperCase() + variant.slice(1)}\r
        </Button>)}\r
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>\r
      {sizes.map(size => <Button key={size} {...args} size={size}>\r
          Size {size}\r
        </Button>)}\r
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: 'Saving'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:"Return a Promise from `onClick`: the button stays pending until it settles.",...k.parameters?.docs?.description}}}})))()}export{T as a,C as c,j as d,O as i,S as l,f as n,E as o,D as r,x as s,k as t,w as u};