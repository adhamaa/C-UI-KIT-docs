import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{r as i,t as a}from"./TextInput-D3wL-qzE.js";var o=t({FilterAList:()=>p,Playground:()=>f,WithLabel:()=>m,__namedExportsOrder:()=>h,default:()=>d}),s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{i(),s=n(),c=r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u=[`Road upgrade section 4`,`Bridge repair Sg. Klang`,`Drainage works Jalan Ipoh`,`Street lighting Shah Alam`,`Pavement resurfacing Federal Highway`],d={title:`Components/Inputs/SearchInput`,component:a,tags:[`!autodocs`],parameters:{layout:`padded`},args:{placeholder:`Search packages`,onSearch:l(),debounceMs:300},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`]},leftSection:{control:!1},rightSection:{control:!1}},decorators:[e=>(0,c.jsx)(`div`,{style:{maxWidth:360},children:(0,c.jsx)(e,{})})]},f={},p={render:e=>{let[t,n]=(0,s.useState)(``),r=u.filter(e=>e.toLowerCase().includes(t.toLowerCase()));return(0,c.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,c.jsx)(a,{...e,onSearch:t=>{n(t),e.onSearch?.(t)}}),(0,c.jsx)(`ul`,{style:{margin:0,paddingInlineStart:20},children:r.map(e=>(0,c.jsx)(`li`,{children:e},e))})]})}},m={args:{label:`Find a contractor`,placeholder:`Name or registration no.`}},h=[`Playground`,`FilterAList`,`WithLabel`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [query, setQuery] = useState('');
    const found = packages.filter(p => p.toLowerCase().includes(query.toLowerCase()));
    return <div style={{
      display: 'grid',
      gap: 12
    }}>\r
        <SearchInput {...args} onSearch={q => {
        setQuery(q);
        args.onSearch?.(q);
      }} />\r
        <ul style={{
        margin: 0,
        paddingInlineStart: 20
      }}>\r
          {found.map(p => <li key={p}>{p}</li>)}\r
        </ul>\r
      </div>;
  }
}`,...p.parameters?.docs?.source},description:{story:"`onSearch` runs once typing pauses for `debounceMs`.",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Find a contractor',
    placeholder: 'Name or registration no.'
  }
}`,...m.parameters?.docs?.source}}}})))()}export{g as a,m as i,f as n,o as r,p as t};