import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,v as i}from"./icons-0fPVZlPW.js";import{a,t as o}from"./Display-DIo3znAw.js";var s=t({ColorsAndVariants:()=>p,Playground:()=>f,Sizes:()=>h,Statuses:()=>m,WithIconAndCount:()=>g,__namedExportsOrder:()=>_,default:()=>d}),c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{a(),i(),c=n(),l=[`neutral`,`primary`,`success`,`warning`,`danger`,`info`],u=[`light`,`filled`,`outline`,`dot`],d={title:`Components/Data display/Badge`,component:o,tags:[`!autodocs`],parameters:{layout:`padded`},args:{children:`Published`,color:`success`,variant:`light`,size:`sm`},argTypes:{color:{control:`inline-radio`,options:l},variant:{control:`inline-radio`,options:u},size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`]},leftSection:{control:!1}}},f={},p={render:e=>(0,c.jsx)(`div`,{style:{display:`grid`,gap:12},children:u.map(t=>(0,c.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:l.map(n=>(0,c.jsx)(o,{...e,variant:t,color:n,children:n},n))},t))})},m={render:()=>(0,c.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:Object.entries({Draft:`neutral`,"In review":`info`,Approved:`success`,Overdue:`warning`,Rejected:`danger`}).map(([e,t])=>(0,c.jsx)(o,{color:t,variant:`dot`,children:e},e))})},h={render:e=>(0,c.jsx)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[`xs`,`sm`,`md`,`lg`].map(t=>(0,c.jsxs)(o,{...e,size:t,children:[`Size `,t]},t))})},g={render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,c.jsx)(o,{color:`success`,leftSection:(0,c.jsx)(r,{}),children:`Verified`}),(0,c.jsx)(o,{color:`primary`,variant:`filled`,children:`12`})]})},_=[`Playground`,`ColorsAndVariants`,`Statuses`,`Sizes`,`WithIconAndCount`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>\r
      {variants.map(variant => <div key={variant} style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }}>\r
          {colors.map(color => <Badge key={color} {...args} variant={variant} color={color}>\r
              {color}\r
            </Badge>)}\r
        </div>)}\r
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const status = {
      Draft: 'neutral',
      'In review': 'info',
      Approved: 'success',
      Overdue: 'warning',
      Rejected: 'danger'
    } as const;
    return <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }}>\r
        {Object.entries(status).map(([label, color]) => <Badge key={label} color={color} variant="dot">\r
            {label}\r
          </Badge>)}\r
      </div>;
  }
}`,...m.parameters?.docs?.source},description:{story:`Map your statuses to colours once, and reuse the map everywhere.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }}>\r
      {(['xs', 'sm', 'md', 'lg'] as const).map(size => <Badge key={size} {...args} size={size}>\r
          Size {size}\r
        </Badge>)}\r
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8
  }}>\r
      <Badge color="success" leftSection={<icons.CheckIcon />}>\r
        Verified\r
      </Badge>\r
      <Badge color="primary" variant="filled">\r
        12\r
      </Badge>\r
    </div>
}`,...g.parameters?.docs?.source}}}})))()}export{m as a,h as i,p as n,g as o,f as r,v as s,s as t};