import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{r as i,t as a}from"./Button-B6ZSy2dN.js";import{a as o,r as s}from"./Display-D7mpfx8T.js";import{a as c,i as l}from"./Feedback-DfE6PcV0.js";var u=t({ListItem:()=>h,Playground:()=>m,WrapContent:()=>g,__namedExportsOrder:()=>_,default:()=>p}),d,f,p,m,h,g,_;function v(){return(v=e((()=>{i(),o(),c(),d=n(),f=r(),p={title:`Components/Feedback/Skeleton`,component:l,tags:[`!autodocs`],parameters:{layout:`padded`},args:{height:20,width:`60%`,animate:!0}},m={},h={render:()=>(0,f.jsx)(`div`,{style:{display:`grid`,gap:16,maxWidth:360},children:[1,2,3].map(e=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,f.jsx)(l,{circle:!0,height:40}),(0,f.jsxs)(`div`,{style:{flex:1,display:`grid`,gap:8},children:[(0,f.jsx)(l,{height:14,width:`70%`}),(0,f.jsx)(l,{height:12,width:`40%`})]})]},e))})},g={render:()=>{let[e,t]=(0,d.useState)(!0);return(0,f.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:360},children:[(0,f.jsx)(a,{size:`sm`,variant:`default`,onClick:()=>t(e=>!e),children:e?`Finish loading`:`Load again`}),(0,f.jsx)(l,{visible:e,children:(0,f.jsx)(s,{title:`Contract value`,description:`Including variations`,children:`RM 1,250,000.00`})})]})}},_=[`Playground`,`ListItem`,`WrapContent`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 16,
    maxWidth: 360
  }}>\r
      {[1, 2, 3].map(n => <div key={n} style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>\r
          <Skeleton circle height={40} />\r
          <div style={{
        flex: 1,
        display: 'grid',
        gap: 8
      }}>\r
            <Skeleton height={14} width="70%" />\r
            <Skeleton height={12} width="40%" />\r
          </div>\r
        </div>)}\r
    </div>
}`,...h.parameters?.docs?.source},description:{story:`Shapes that match the layout that will load: an avatar and two lines.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = useState(true);
    return <div style={{
      display: 'grid',
      gap: 12,
      maxWidth: 360
    }}>\r
        <Button size="sm" variant="default" onClick={() => setLoading(l => !l)}>\r
          {loading ? 'Finish loading' : 'Load again'}\r
        </Button>\r
        <Skeleton visible={loading}>\r
          <Card title="Contract value" description="Including variations">\r
            RM 1,250,000.00\r
          </Card>\r
        </Skeleton>\r
      </div>;
  }
}`,...g.parameters?.docs?.source},description:{story:"`visible` shows the skeleton while true and the children once false, at the children's size.",...g.parameters?.docs?.description}}}})))()}export{v as a,g as i,m as n,u as r,h as t};