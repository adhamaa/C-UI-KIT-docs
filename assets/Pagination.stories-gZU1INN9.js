import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./Pagination-CQAu38uS.js";var o=t({Controlled:()=>f,Playground:()=>d,SiblingsAndBoundaries:()=>p,__namedExportsOrder:()=>m,default:()=>u}),s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{i(),s=n(),c=r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Navigation/Pagination`,component:a,tags:[`!autodocs`],parameters:{layout:`padded`},args:{total:12,defaultPage:3,siblings:1,boundaries:1,onChange:l()}},d={},f={render:e=>{let[t,n]=(0,s.useState)(5);return(0,c.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,c.jsx)(a,{...e,defaultPage:void 0,page:t,onChange:n}),(0,c.jsxs)(`p`,{style:{margin:0},children:[`Page `,t,` of `,e.total]})]})}},p={render:()=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,c.jsx)(a,{total:30,defaultPage:15}),(0,c.jsx)(a,{total:30,defaultPage:15,siblings:2}),(0,c.jsx)(a,{total:30,defaultPage:15,boundaries:2})]})},m=[`Playground`,`Controlled`,`SiblingsAndBoundaries`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [page, setPage] = useState(5);
    return <div style={{
      display: 'grid',
      gap: 8
    }}>\r
        <Pagination {...args} defaultPage={undefined} page={page} onChange={setPage} />\r
        <p style={{
        margin: 0
      }}>\r
          Page {page} of {args.total}\r
        </p>\r
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 16
  }}>\r
      <Pagination total={30} defaultPage={15} />\r
      <Pagination total={30} defaultPage={15} siblings={2} />\r
      <Pagination total={30} defaultPage={15} boundaries={2} />\r
    </div>
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,p as i,o as n,d as r,f as t};