import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./Autocomplete-CXhB7G_Z.js";var o=t({FreeText:()=>f,NothingFound:()=>p,Playground:()=>d,__namedExportsOrder:()=>m,default:()=>u}),s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{i(),s=n(),c=r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Combobox/Autocomplete`,component:a,tags:[`!autodocs`],parameters:{layout:`padded`},args:{label:`District`,data:[`Gombak`,`Hulu Langat`,`Hulu Selangor`,`Klang`,`Kuala Langat`,`Kuala Selangor`,`Petaling`,`Sabak Bernam`,`Sepang`],placeholder:`Type a district`,onChange:l()},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`]},error:{control:`text`},data:{control:!1}},decorators:[e=>(0,c.jsx)(`div`,{style:{maxWidth:360,minHeight:320},children:(0,c.jsx)(e,{})})]},d={},f={render:e=>{let[t,n]=(0,s.useState)(`Kajang`);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{...e,value:t,onChange:n}),(0,c.jsxs)(`p`,{style:{marginTop:8},children:[`Value: `,JSON.stringify(t)]})]})}},p={args:{nothingFoundMessage:`No matching district. You can still use it.`}},m=[`Playground`,`FreeText`,`NothingFound`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('Kajang');
    return <>\r
        <Autocomplete {...args} value={value} onChange={setValue} />\r
        <p style={{
        marginTop: 8
      }}>Value: {JSON.stringify(value)}</p>\r
      </>;
  }
}`,...f.parameters?.docs?.source},description:{story:`Any text is a valid value, even one that isn't a suggestion.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    nothingFoundMessage: 'No matching district. You can still use it.'
  }
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,d as i,f as n,p as r,o as t};