import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./ActionMenu-B_3kxq1V.js";import{n as i,r as a}from"./Toast-CFrmfPvK.js";import{t as o}from"./jsx-runtime-MKhVqBIO.js";import{_ as s,b as c,f as l}from"./icons-BXSH-BZG.js";import{n as u,t as d}from"./Button-C9VvNvdW.js";var f=t({CustomTrigger:()=>_,Grouped:()=>g,Playground:()=>h,RowActions:()=>y,WithHeader:()=>v,__namedExportsOrder:()=>b,default:()=>m}),p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),u(),c(),i(),p=o(),m={title:`Components/Overlays/ActionMenu`,component:r,tags:[`!autodocs`],parameters:{layout:`padded`},args:{items:[{label:`Edit`,icon:(0,p.jsx)(l,{}),onClick:()=>a(`Edit`)},{label:`Duplicate`,onClick:()=>a(`Duplicate`)},{label:`Archive`,disabled:!0},{type:`separator`},{label:`Delete`,danger:!0,onClick:()=>a.error(`Deleted`)}],side:`bottom`,align:`start`},argTypes:{side:{control:`inline-radio`,options:[`top`,`right`,`bottom`,`left`]},align:{control:`inline-radio`,options:[`start`,`center`,`end`]},items:{control:!1},trigger:{control:!1},header:{control:!1}},decorators:[e=>(0,p.jsx)(`div`,{style:{minHeight:300},children:(0,p.jsx)(e,{})})]},h={},g={args:{"aria-label":`Settings`,width:340,align:`end`,items:[{type:`group`,label:`Personal settings`,items:[{label:`General`,description:`Language, time zone and profile.`,onClick:()=>a(`General`)},{label:`Notifications`,description:`Email and in-app notifications.`,disabled:!0}]},{type:`group`,label:`Admin settings`,items:[{label:`User management`,description:`Add users and manage access.`,onClick:()=>a(`User management`)}]}]},decorators:[e=>(0,p.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`},children:(0,p.jsx)(e,{})})]},_={args:{trigger:(0,p.jsx)(s,{}),"aria-label":`Export`,items:[{label:`Excel (.xlsx)`,onClick:()=>a(`Excel`)},{label:`CSV`,onClick:()=>a(`CSV`)},{label:`PDF`,onClick:()=>a(`PDF`)}]}},v={args:{"aria-label":`Account`,header:(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`strong`,{children:`Aisyah Rahman`}),(0,p.jsx)(`div`,{style:{fontSize:12,opacity:.7},children:`Project engineer`})]}),items:[{label:`Profile`,href:`#profile`},{type:`separator`},{label:`Sign out`,onClick:()=>a(`Signed out`)}]}},y={render:e=>(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,padding:12,border:`1px solid var(--ui-border)`,borderRadius:`var(--ui-radius)`,maxWidth:480},children:[(0,p.jsx)(`span`,{style:{flex:1},children:`PKG-004 · Road upgrade section 4`}),(0,p.jsx)(d,{size:`sm`,variant:`light`,children:`Open`}),(0,p.jsx)(r,{...e,"aria-label":`Actions for PKG-004`,align:`end`})]})},b=[`Playground`,`Grouped`,`CustomTrigger`,`WithHeader`,`RowActions`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Settings',
    width: 340,
    align: 'end',
    items: [{
      type: 'group',
      label: 'Personal settings',
      items: [{
        label: 'General',
        description: 'Language, time zone and profile.',
        onClick: () => toast('General')
      }, {
        label: 'Notifications',
        description: 'Email and in-app notifications.',
        disabled: true
      }]
    }, {
      type: 'group',
      label: 'Admin settings',
      items: [{
        label: 'User management',
        description: 'Add users and manage access.',
        onClick: () => toast('User management')
      }]
    }]
  },
  decorators: [Story => <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>\r
        <Story />\r
      </div>]
}`,...g.parameters?.docs?.source},description:{story:`Sections with headings and a second line of description, like a settings menu.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <icons.UploadIcon />,
    'aria-label': 'Export',
    items: [{
      label: 'Excel (.xlsx)',
      onClick: () => toast('Excel')
    }, {
      label: 'CSV',
      onClick: () => toast('CSV')
    }, {
      label: 'PDF',
      onClick: () => toast('PDF')
    }]
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Account',
    header: <div>\r
        <strong>Aisyah Rahman</strong>\r
        <div style={{
        fontSize: 12,
        opacity: 0.7
      }}>Project engineer</div>\r
      </div>,
    items: [{
      label: 'Profile',
      href: '#profile'
    }, {
      type: 'separator'
    }, {
      label: 'Sign out',
      onClick: () => toast('Signed out')
    }]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: 12,
    border: '1px solid var(--ui-border)',
    borderRadius: 'var(--ui-radius)',
    maxWidth: 480
  }}>\r
      <span style={{
      flex: 1
    }}>PKG-004 · Road upgrade section 4</span>\r
      <Button size="sm" variant="light">\r
        Open\r
      </Button>\r
      <ActionMenu {...args} aria-label="Actions for PKG-004" align="end" />\r
    </div>
}`,...y.parameters?.docs?.source},description:{story:`In a table row, next to the row's main action.`,...y.parameters?.docs?.description}}}})))()}export{y as a,h as i,_ as n,v as o,g as r,x as s,f as t};