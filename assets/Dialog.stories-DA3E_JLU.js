import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r,r as i}from"./Toast-gTCuPFCg.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{n as o,t as s}from"./Button-DgE24e3S.js";import{n as c,r as l}from"./TextInput-TeUkk2FQ.js";import{a as u,i as d,r as f,t as p}from"./modals-CxPfSIEm.js";import{n as m,t as h}from"./ConfirmDialog-iAGzW4ci.js";var g=t({ConfirmAction:()=>A,FocusAndEscape:()=>M,Imperative:()=>j,MustChoose:()=>k,Playground:()=>D,Sizes:()=>O,__namedExportsOrder:()=>N,default:()=>E});function _({trigger:e=`Open dialog`,...t}){let[n,r]=(0,v.useState)(!1),i=()=>{r(!1),t.onClose?.()};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s,{onClick:()=>r(!0),children:e}),(0,y.jsx)(d,{title:`Edit package`,description:`Changes apply to every linked work order.`,footer:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s,{variant:`default`,onClick:i,children:`Cancel`}),(0,y.jsx)(s,{onClick:i,children:`Save`})]}),...t,opened:n,onClose:i,children:t.children??(0,y.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,y.jsx)(c,{label:`Package name`,defaultValue:`Road upgrade section 4`}),(0,y.jsx)(c,{label:`Package no.`,defaultValue:`PKG-004`})]})})]})}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{o(),m(),u(),p(),l(),r(),v=n(),y=a(),{expect:b,fn:x,screen:S,userEvent:C,waitFor:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`Components/Overlays/Dialog`,component:d,tags:[`!autodocs`],parameters:{layout:`padded`},args:{opened:!1,onClose:x(),title:`Edit package`,size:`md`,withCloseButton:!0,closeOnClickOutside:!0,closeOnEscape:!0,centered:!0},argTypes:{opened:{control:!1},onClose:{control:!1},size:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`full`]},footer:{control:!1},children:{control:!1},classNames:{control:!1}},render:e=>(0,y.jsx)(_,{...e})},D={},O={render:e=>(0,y.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[[`xs`,`sm`,`md`,`lg`,`xl`].map(t=>(0,y.jsx)(_,{...e,size:t,title:`Size ${t}`,trigger:t},t)),(0,y.jsx)(_,{...e,size:`min(90vw, 1000px)`,title:`Custom width`,trigger:`min(90vw, 1000px)`}),(0,y.jsx)(_,{...e,fullScreen:!0,title:`Full screen`,trigger:`fullScreen`})]})},k={args:{title:`Accept the new terms`,description:`You need to accept them to keep using the portal.`,withCloseButton:!1,closeOnClickOutside:!1,closeOnEscape:!1,children:(0,y.jsx)(`p`,{style:{margin:0},children:`The terms changed on 1 November.`})}},A={render:()=>{let[e,t]=(0,v.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s,{variant:`danger`,onClick:()=>t(!0),children:`Delete route`}),(0,y.jsx)(h,{opened:e,onClose:()=>t(!1),title:`Delete route?`,description:`Route R-12 and its 4 work orders will be removed. This can't be undone.`,confirmLabel:`Delete`,danger:!0,onConfirm:()=>new Promise(e=>setTimeout(e,1200))})]})}},j={render:()=>(0,y.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,y.jsx)(s,{variant:`default`,onClick:()=>f.open({title:`Route details`,size:`lg`,children:(0,y.jsx)(`p`,{children:`Anything can go here.`})}),children:`modals.open`}),(0,y.jsx)(s,{onClick:()=>f.confirm({title:`Publish package?`,description:`It becomes visible to contractors.`,confirmLabel:`Publish`,onConfirm:()=>i.success(`Published`)}),children:`modals.confirm`})]})},M={play:async({args:e,canvasElement:t})=>{let n=T(t).getByRole(`button`,{name:`Open dialog`});await C.click(n);let r=await S.findByRole(`dialog`,{name:`Edit package`});await w(()=>b(r).toContainElement(document.activeElement)),await C.keyboard(`{Escape}`),await w(()=>b(S.queryByRole(`dialog`)).toBeNull()),await b(e.onClose).toHaveBeenCalled(),await w(()=>b(n).toHaveFocus())}},N=[`Playground`,`Sizes`,`MustChoose`,`ConfirmAction`,`Imperative`,`FocusAndEscape`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}>\r
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <DialogDemo key={size} {...args} size={size} title={\`Size \${size}\`} trigger={size} />)}\r
      <DialogDemo {...args} size="min(90vw, 1000px)" title="Custom width" trigger="min(90vw, 1000px)" />\r
      <DialogDemo {...args} fullScreen title="Full screen" trigger="fullScreen" />\r
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Accept the new terms',
    description: 'You need to accept them to keep using the portal.',
    withCloseButton: false,
    closeOnClickOutside: false,
    closeOnEscape: false,
    children: <p style={{
      margin: 0
    }}>The terms changed on 1 November.</p>
  }
}`,...k.parameters?.docs?.source},description:{story:`For a step that must be finished: no ×, and Escape or the backdrop don't close it.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [opened, setOpened] = useState(false);
    return <>\r
        <Button variant="danger" onClick={() => setOpened(true)}>\r
          Delete route\r
        </Button>\r
        <ConfirmDialog opened={opened} onClose={() => setOpened(false)} title="Delete route?" description="Route R-12 and its 4 work orders will be removed. This can't be undone." confirmLabel="Delete" danger onConfirm={() => new Promise(resolve => setTimeout(resolve, 1200))} />\r
      </>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12
  }}>\r
      <Button variant="default" onClick={() => modals.open({
      title: 'Route details',
      size: 'lg',
      children: <p>Anything can go here.</p>
    })}>\r
        modals.open\r
      </Button>\r
      <Button onClick={() => modals.confirm({
      title: 'Publish package?',
      description: 'It becomes visible to contractors.',
      confirmLabel: 'Publish',
      onConfirm: () => toast.success('Published')
    })}>\r
        modals.confirm\r
      </Button>\r
    </div>
}`,...j.parameters?.docs?.source},description:{story:"`modals.open()` and `modals.confirm()` work from any event handler, with no state.",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('button', {
      name: 'Open dialog'
    });
    await userEvent.click(trigger);
    const dialog = await screen.findByRole('dialog', {
      name: 'Edit package'
    });
    await waitFor(() => expect(dialog).toContainElement(document.activeElement as HTMLElement));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
    await expect(args.onClose).toHaveBeenCalled();
    await waitFor(() => expect(trigger).toHaveFocus());
  }
}`,...M.parameters?.docs?.source},description:{story:`Focus moves in on open, Escape closes, and focus returns to the trigger.`,...M.parameters?.docs?.description}}}})))()}export{D as a,k as i,g as n,O as o,j as r,P as s,A as t};