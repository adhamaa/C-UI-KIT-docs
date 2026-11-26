import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./ActionMenu-4Fyi2_Yz.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{r as a,t as o}from"./Button-DPy_egTd.js";import{a as s,r as c,t as l}from"./Display-DIo3znAw.js";var u=t({AsSection:()=>g,Plain:()=>h,Playground:()=>p,WithActionsAndFooter:()=>m,__namedExportsOrder:()=>_,default:()=>f}),d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),s(),a(),d=i(),f={title:`Components/Data display/Card`,component:c,tags:[`!autodocs`],parameters:{layout:`padded`},args:{title:`Contract`,description:`Key dates and value`,padding:`md`,withBorder:!0,children:(0,d.jsxs)(`dl`,{style:{margin:0,display:`grid`,gridTemplateColumns:`auto 1fr`,gap:`6px 16px`},children:[(0,d.jsx)(`dt`,{children:`Value`}),(0,d.jsx)(`dd`,{style:{margin:0},children:`RM 1,250,000.00`}),(0,d.jsx)(`dt`,{children:`Start`}),(0,d.jsx)(`dd`,{style:{margin:0},children:`1 Dec 2026`}),(0,d.jsx)(`dt`,{children:`End`}),(0,d.jsx)(`dd`,{style:{margin:0},children:`30 Nov 2027`})]})},argTypes:{padding:{control:`inline-radio`,options:[`none`,`xs`,`sm`,`md`,`lg`]},component:{control:`inline-radio`,options:[`div`,`section`,`article`,`aside`]},children:{control:!1},actions:{control:!1},footer:{control:!1}},decorators:[e=>(0,d.jsx)(`div`,{style:{maxWidth:420},children:(0,d.jsx)(e,{})})]},p={},m={args:{actions:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l,{color:`success`,children:`Active`}),(0,d.jsx)(r,{"aria-label":`Contract actions`,align:`end`,items:[{label:`Edit`},{label:`Download PDF`}]})]}),footer:(0,d.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:8},children:[(0,d.jsx)(o,{variant:`default`,size:`sm`,children:`View history`}),(0,d.jsx)(o,{size:`sm`,children:`Open contract`})]})}},h={args:{title:void 0,description:void 0,padding:`lg`}},g={args:{component:`section`,title:`Contract summary`}},_=[`Playground`,`WithActionsAndFooter`,`Plain`,`AsSection`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    actions: <>\r
        <Badge color="success">Active</Badge>\r
        <ActionMenu aria-label="Contract actions" align="end" items={[{
        label: 'Edit'
      }, {
        label: 'Download PDF'
      }]} />\r
      </>,
    footer: <div style={{
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8
    }}>\r
        <Button variant="default" size="sm">\r
          View history\r
        </Button>\r
        <Button size="sm">Open contract</Button>\r
      </div>
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    description: undefined,
    padding: 'lg'
  }
}`,...h.parameters?.docs?.source},description:{story:`No header: just a surface around content.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    component: 'section',
    title: 'Contract summary'
  }
}`,...g.parameters?.docs?.source},description:{story:'A page section: `component="section"` and the title labels it for screen readers.',...g.parameters?.docs?.description}}}})))()}export{m as a,p as i,u as n,v as o,h as r,g as t};