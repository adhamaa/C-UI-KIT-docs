import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,r,t as i}from"./Toast-gTCuPFCg.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{r as o,t as s}from"./Button-DPy_egTd.js";var c=t({Kinds:()=>f,LoadingToResult:()=>p,Persistent:()=>h,WithAction:()=>m,__namedExportsOrder:()=>g,default:()=>u}),l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{o(),n(),l=a(),u={title:`Components/Overlays/Toast`,component:i,tags:[`!autodocs`],parameters:{layout:`padded`}},d={display:`flex`,gap:12,flexWrap:`wrap`},f={render:()=>(0,l.jsxs)(`div`,{style:d,children:[(0,l.jsx)(s,{variant:`default`,onClick:()=>r(`Route archived`),children:`Default`}),(0,l.jsx)(s,{variant:`default`,onClick:()=>r.success(`Package saved`),children:`Success`}),(0,l.jsx)(s,{variant:`default`,onClick:()=>r.error(`Upload failed`,{description:`The file is over 10 MB.`}),children:`Error`}),(0,l.jsx)(s,{variant:`default`,onClick:()=>r.warning(`Session expires in 5 minutes`),children:`Warning`}),(0,l.jsx)(s,{variant:`default`,onClick:()=>r.info(`New version available`),children:`Info`})]})},p={render:()=>(0,l.jsx)(s,{variant:`default`,onClick:()=>{let e=r.loading(`Exporting report…`);setTimeout(()=>r.success(`Report ready`,{id:e,duration:4e3}),1500)},children:`Export report`})},m={render:()=>(0,l.jsx)(s,{variant:`default`,onClick:()=>r(`Route archived`,{action:{label:`Undo`,onClick:()=>r(`Restored`)}}),children:`Archive route`})},h={render:()=>(0,l.jsxs)(`div`,{style:d,children:[(0,l.jsx)(s,{variant:`default`,onClick:()=>r.warning(`Connection lost`,{id:`offline`,duration:1/0,description:`Changes will sync when you are back online.`}),children:`Show until dismissed`}),(0,l.jsx)(s,{variant:`subtle`,onClick:()=>r.dismiss(`offline`),children:`Dismiss it`})]})},g=[`Kinds`,`LoadingToResult`,`WithAction`,`Persistent`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={row}>\r
      <Button variant="default" onClick={() => toast('Route archived')}>\r
        Default\r
      </Button>\r
      <Button variant="default" onClick={() => toast.success('Package saved')}>\r
        Success\r
      </Button>\r
      <Button variant="default" onClick={() => toast.error('Upload failed', {
      description: 'The file is over 10 MB.'
    })}>\r
        Error\r
      </Button>\r
      <Button variant="default" onClick={() => toast.warning('Session expires in 5 minutes')}>\r
        Warning\r
      </Button>\r
      <Button variant="default" onClick={() => toast.info('New version available')}>\r
        Info\r
      </Button>\r
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Button variant="default" onClick={() => {
    const id = toast.loading('Exporting report…');
    setTimeout(() => toast.success('Report ready', {
      id,
      duration: 4000
    }), 1500);
  }}>\r
      Export report\r
    </Button>
}`,...p.parameters?.docs?.source},description:{story:`Reuse the id to turn a loading toast into the result.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Button variant="default" onClick={() => toast('Route archived', {
    action: {
      label: 'Undo',
      onClick: () => toast('Restored')
    }
  })}>\r
      Archive route\r
    </Button>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={row}>\r
      <Button variant="default" onClick={() => toast.warning('Connection lost', {
      id: 'offline',
      duration: Number.POSITIVE_INFINITY,
      description: 'Changes will sync when you are back online.'
    })}>\r
        Show until dismissed\r
      </Button>\r
      <Button variant="subtle" onClick={() => toast.dismiss('offline')}>\r
        Dismiss it\r
      </Button>\r
    </div>
}`,...h.parameters?.docs?.source}}}})))()}export{m as a,c as i,p as n,_ as o,h as r,f as t};