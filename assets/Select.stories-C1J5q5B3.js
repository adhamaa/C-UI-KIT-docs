import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r,t as i}from"./Select-DPVn8LHs.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{b as o,m as s}from"./icons-BXSH-BZG.js";var c=t({Controlled:()=>x,Grouped:()=>b,OptionObjects:()=>y,PickWithKeyboard:()=>O,PickWithPointer:()=>D,Playground:()=>_,Searchable:()=>v,ServerSide:()=>E,Sizes:()=>C,States:()=>S,WithLeftSection:()=>w,__namedExportsOrder:()=>k,default:()=>g}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{o(),r(),l=n(),u=a(),{expect:d,fn:f,screen:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Combobox/Select`,component:i,tags:[`!autodocs`],parameters:{layout:`padded`},args:{label:`State`,data:[`Johor`,`Kedah`,`Kelantan`,`Melaka`,`Negeri Sembilan`,`Pahang`,`Perak`,`Perlis`,`Pulau Pinang`,`Sabah`,`Sarawak`,`Selangor`,`Terengganu`],placeholder:`Pick a state`,onChange:f()},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`]},data:{control:!1},leftSection:{control:!1},error:{control:`text`}},decorators:[e=>(0,u.jsx)(`div`,{style:{maxWidth:360,minHeight:340},children:(0,u.jsx)(e,{})})]},_={},v={args:{searchable:!0,clearable:!0}},y={args:{label:`Status`,placeholder:`Pick a status`,data:[{value:`draft`,label:`Draft`},{value:`review`,label:`In review`},{value:`published`,label:`Published`},{value:`archived`,label:`Archived`,disabled:!0}]}},b={args:{label:`Asset`,placeholder:`Pick an asset`,data:[{group:`Pavement`,items:[`Flexible`,`Rigid`]},{group:`Structures`,items:[`Bridge`,`Culvert`,{value:`tunnel`,label:`Tunnel`,disabled:!0}]}]}},x={render:e=>{let[t,n]=(0,l.useState)(`Selangor`);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{...e,clearable:!0,value:t,onChange:n}),(0,u.jsxs)(`p`,{style:{marginTop:8},children:[`Value: `,String(t)]})]})}},S={render:e=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,u.jsx)(i,{...e,label:`With description`,description:`Where the work takes place.`}),(0,u.jsx)(i,{...e,label:`Required`,required:!0}),(0,u.jsx)(i,{...e,label:`With error`,error:`Pick a state`}),(0,u.jsx)(i,{...e,label:`Disabled`,disabled:!0,defaultValue:`Johor`}),(0,u.jsx)(i,{...e,label:`Read-only`,readOnly:!0,defaultValue:`Johor`})]})},C={render:e=>(0,u.jsx)(`div`,{style:{display:`grid`,gap:12},children:[`xs`,`sm`,`md`,`lg`].map(t=>(0,u.jsx)(i,{...e,size:t,label:`Size ${t}`},t))})},w={args:{leftSection:(0,u.jsx)(s,{})}},T=Array.from({length:95},(e,t)=>({value:`c-${t+1}`,label:`Contractor ${String(t+1).padStart(2,`0`)} Sdn Bhd`})),E={render:e=>{let[t,n]=(0,l.useState)(``),[r,a]=(0,l.useState)(0),[o,s]=(0,l.useState)(!1),[c,d]=(0,l.useState)([]),f=T.filter(e=>e.label.toLowerCase().includes(t.toLowerCase()));return(0,l.useEffect)(()=>{s(!0);let e=setTimeout(()=>{d(f.slice(0,(r+1)*10)),s(!1)},400);return()=>clearTimeout(e)},[t,r]),(0,u.jsx)(i,{...e,label:`Contractor`,placeholder:`Search contractors`,data:c,loading:o,onSearchChange:e=>{n(e),a(0)},hasMore:c.length<f.length,onLoadMore:()=>a(e=>e+1)})}},D={play:async({args:e,canvasElement:t})=>{let n=h(t).getByRole(`combobox`,{name:`State`});await m.click(n),await m.click(await p.findByRole(`option`,{name:`Selangor`})),await d(e.onChange).toHaveBeenCalledWith(`Selangor`,d.objectContaining({value:`Selangor`})),await d(n).toHaveTextContent(`Selangor`)}},O={play:async({args:e,canvasElement:t})=>{let n=h(t).getByRole(`combobox`,{name:`State`});n.focus(),await m.keyboard(`{ArrowDown}`),await p.findByRole(`listbox`),await m.keyboard(`{End}{Enter}`),await d(e.onChange).toHaveBeenCalledWith(`Terengganu`,d.anything()),await d(n).toHaveFocus()}},k=[`Playground`,`Searchable`,`OptionObjects`,`Grouped`,`Controlled`,`States`,`Sizes`,`WithLeftSection`,`ServerSide`,`PickWithPointer`,`PickWithKeyboard`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    searchable: true,
    clearable: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Status',
    placeholder: 'Pick a status',
    data: [{
      value: 'draft',
      label: 'Draft'
    }, {
      value: 'review',
      label: 'In review'
    }, {
      value: 'published',
      label: 'Published'
    }, {
      value: 'archived',
      label: 'Archived',
      disabled: true
    }]
  }
}`,...y.parameters?.docs?.source},description:{story:`Options with a separate label and value, and one that can't be chosen.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Asset',
    placeholder: 'Pick an asset',
    data: [{
      group: 'Pavement',
      items: ['Flexible', 'Rigid']
    }, {
      group: 'Structures',
      items: ['Bridge', 'Culvert', {
        value: 'tunnel',
        label: 'Tunnel',
        disabled: true
      }]
    }]
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | null>('Selangor');
    return <>\r
        <Select {...args} clearable value={value} onChange={setValue} />\r
        <p style={{
        marginTop: 8
      }}>Value: {String(value)}</p>\r
      </>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 16
  }}>\r
      <Select {...args} label="With description" description="Where the work takes place." />\r
      <Select {...args} label="Required" required />\r
      <Select {...args} label="With error" error="Pick a state" />\r
      <Select {...args} label="Disabled" disabled defaultValue="Johor" />\r
      <Select {...args} label="Read-only" readOnly defaultValue="Johor" />\r
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>\r
      {(['xs', 'sm', 'md', 'lg'] as const).map(size => <Select key={size} {...args} size={size} label={\`Size \${size}\`} />)}\r
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    leftSection: <icons.SearchIcon />
  }
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState<SelectOption[]>([]);
    const matches = contractors.filter(c => c.label.toLowerCase().includes(search.toLowerCase()));
    useEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => {
        setOptions(matches.slice(0, (page + 1) * 10));
        setLoading(false);
      }, 400);
      return () => clearTimeout(timer);
    }, [search, page]);
    return <Select {...args} label="Contractor" placeholder="Search contractors" data={options} loading={loading} onSearchChange={query => {
      setSearch(query);
      setPage(0);
    }} hasMore={options.length < matches.length} onLoadMore={() => setPage(p => p + 1)} />;
  }
}`,...E.parameters?.docs?.source},description:{story:"Server-side search and paging. `onSearchChange` turns off local filtering;\r\n`hasMore` and `onLoadMore` load the next page as the list scrolls to the end.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('combobox', {
      name: 'State'
    });
    await userEvent.click(trigger);
    await userEvent.click(await screen.findByRole('option', {
      name: 'Selangor'
    }));
    await expect(args.onChange).toHaveBeenCalledWith('Selangor', expect.objectContaining({
      value: 'Selangor'
    }));
    await expect(trigger).toHaveTextContent('Selangor');
  }
}`,...D.parameters?.docs?.source},description:{story:`Opens with the mouse, picks an option, then closes with Escape.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('combobox', {
      name: 'State'
    });
    trigger.focus();
    await userEvent.keyboard('{ArrowDown}');
    await screen.findByRole('listbox');
    await userEvent.keyboard('{End}{Enter}');
    await expect(args.onChange).toHaveBeenCalledWith('Terengganu', expect.anything());
    await expect(trigger).toHaveFocus();
  }
}`,...O.parameters?.docs?.source},description:{story:`Keyboard only: opens with ArrowDown, moves with the arrows, picks with Enter.`,...O.parameters?.docs?.description}}}})))()}export{v as a,C as c,A as d,_ as i,S as l,b as n,c as o,y as r,E as s,x as t,w as u};