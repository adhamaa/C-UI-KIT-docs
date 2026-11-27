import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{i,o as a}from"./Choice-BQlTmvo6.js";var o=t({DisabledOption:()=>h,FullWidth:()=>m,Playground:()=>d,SwitchViews:()=>p,WithLabel:()=>f,__namedExportsOrder:()=>g,default:()=>u}),s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{a(),s=n(),c=r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Inputs/SegmentedControl`,component:i,tags:[`!autodocs`],parameters:{layout:`padded`},args:{"aria-label":`View`,data:[`List`,`Map`,`Calendar`],defaultValue:`List`,onChange:l()},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`]},data:{control:!1}}},d={},f={args:{label:`Period`,"aria-label":void 0,data:[`Day`,`Week`,`Month`,`Year`],defaultValue:`Month`}},p={render:e=>{let[t,n]=(0,s.useState)(`List`);return(0,c.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:420},children:[(0,c.jsx)(i,{...e,value:t,onChange:n}),(0,c.jsxs)(`div`,{style:{padding:16,border:`1px dashed var(--ui-border)`,borderRadius:`var(--ui-radius)`},children:[t,` view of work orders`]})]})}},m={args:{fullWidth:!0}},h={args:{data:[{value:`list`,label:`List`},{value:`map`,label:`Map`},{value:`gantt`,label:`Gantt`,disabled:!0}],defaultValue:`list`}},g=[`Playground`,`WithLabel`,`SwitchViews`,`FullWidth`,`DisabledOption`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Period',
    'aria-label': undefined,
    data: ['Day', 'Week', 'Month', 'Year'],
    defaultValue: 'Month'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [view, setView] = useState('List');
    return <div style={{
      display: 'grid',
      gap: 12,
      maxWidth: 420
    }}>\r
        <SegmentedControl {...args} value={view} onChange={setView} />\r
        <div style={{
        padding: 16,
        border: '1px dashed var(--ui-border)',
        borderRadius: 'var(--ui-radius)'
      }}>\r
          {view} view of work orders\r
        </div>\r
      </div>;
  }
}`,...p.parameters?.docs?.source},description:{story:`Switch what a page shows. The value is plain state.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      value: 'list',
      label: 'List'
    }, {
      value: 'map',
      label: 'Map'
    }, {
      value: 'gantt',
      label: 'Gantt',
      disabled: true
    }],
    defaultValue: 'list'
  }
}`,...h.parameters?.docs?.source}}}})))()}export{p as a,o as i,m as n,f as o,d as r,_ as s,h as t};