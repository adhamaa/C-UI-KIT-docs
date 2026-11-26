import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{b as n,i as r,n as i,rt as a,x as o}from"./use-primitive-Bl2pt8ao.js";import{r as s,t as ee}from"./selects-C58X-MCU.js";import{n as te}from"./attrs-Bj9TwPFq.js";import{i as c,r as l}from"./live-DQ1suyh6.js";import{r as u,t as d}from"./collection-Dy7Yj3uf.js";import{n as f,r as p}from"./bound-keys-vruM9fdL.js";import"./name-check-stub-D4NFDbHG.js";import{t as m}from"./jsx-runtime-MKhVqBIO.js";import{t as ne}from"./cx-B1L7Rn_T.js";import{n as h,o as re,t as ie,v as g}from"./icons-0fPVZlPW.js";import{n as ae,t as oe}from"./roving-focus-lVnXtDNS.js";function se(e){let{store:t,options:n}=e,r=oe(e,{slot:`item`,key:`stop`,orientation:()=>t.get().orientation,loop:()=>n().loop??!0,preferred:e=>e.props?.status===`current`,onItemsChange:i});function i(){let n=r.items(),i=n.map(e=>e.key);e.element(`root`)?.style.setProperty(`--timeline-count`,String(i.length)),n.forEach((e,t)=>e.el.style.setProperty(`--timeline-index`,String(t)));let{feed:a}=t.get();t.set({first:i[0]??null,last:i[i.length-1]??null,positions:a?Object.fromEntries(i.map((e,t)=>[e,t+1])):_,size:a?i.length:0})}function a(e,n){if(e.defaultPrevented)return;let i=t.get().feed?x(e):void 0;if(i){let t=r.items(),a=t[t.findIndex(e=>e.el===n)+i];a&&(e.preventDefault(),a.el.focus())}else e.target===n&&!e.shiftKey&&r.keydown(e,n)}return{focus:e=>r.focus(e),internal:{roving:r,measure:i,keydown:a}}}var _,v,y,b,x,S,C,w,T,E,D,ce;function O(){return(O=e((()=>{a(),d(),ae(),f(),l(),o(),ee(),_={},v=`[data-slot="timeline-item"]`,y=e=>({orientation:u(e.orientation,`vertical`),feed:!!e.feed,busy:!!e.busy}),b=e=>({"data-complete":e===`complete`?``:void 0,"data-current":e===`current`?``:void 0,"data-upcoming":e===`upcoming`?``:void 0}),x=e=>e.altKey||e.ctrlKey||e.metaKey||e.shiftKey?void 0:e.key===`PageDown`?1:e.key===`PageUp`?-1:void 0,S=(e,t,n)=>`${e}-${t}-${te(n)}`,C=se,w=(e,t)=>({status:t.status,orientation:e.orientation}),T=(e,t)=>({...b(t.status),"data-orientation":e.orientation}),E=s({stop:[],first:[],last:[],positions:[],size:[],titles:[],times:[],descriptions:[]}),D={value:{kind:`string`,from:`item`},status:{kind:`string`,from:`item.status`}},ce=n({name:`timeline`,options:{orientation:`string`,loop:`boolean`,feed:`boolean`,busy:`boolean`,controller:`value`},state:e=>({...y(e),stop:null,first:null,last:null,positions:_,size:0,titles:[],times:[],descriptions:[]}),live:[`first`,`last`,`positions`,`size`,`titles`,`times`,`descriptions`],sync:y,api:C,slots:e=>({root:e({role:e=>e.feed?`feed`:`list`,roles:[`list`,`feed`],selects:s({stop:[],first:[],last:[],positions:[],size:[],titles:[],times:[],descriptions:[]}),state:e=>({orientation:e.orientation,feed:e.feed,busy:e.busy}),attrs:e=>({"aria-busy":e.feed&&e.busy?`true`:void 0,"data-orientation":e.orientation,"data-busy":e.feed&&e.busy?``:void 0}),bind(e,{api:t,id:n,store:r}){t.internal.measure();let i=r.get().feed,a=r.subscribe(()=>{r.get().feed!==i&&(i=r.get().feed,queueMicrotask(t.internal.measure))});if(typeof MutationObserver>`u`)return a;let o=new MutationObserver(e=>{e.some(({addedNodes:e})=>[...e].some(e=>e instanceof Element&&(e.matches(v)||!!e.querySelector(v))))&&queueMicrotask(t.internal.measure)});return o.observe(e,{childList:!0,subtree:!0}),()=>{o.disconnect(),a(),e.style.removeProperty(`--timeline-count`)}}}),item:e({role:e=>e.feed?`article`:`listitem`,roles:[`listitem`,`article`],props:{value:`id`,status:`string`},selects:s({stop:({key:e})=>[e,null],first:({key:e})=>[e],last:({key:e})=>[e],positions:({key:e})=>[e],titles:({key:e})=>[e],times:({key:e})=>[e],descriptions:({key:e})=>[e]}),state:(e,{props:t})=>w(e,t),attrs:(e,{key:t,props:n,api:r})=>({tabindex:r.internal.roving.tabIndex(e,{key:t,props:n}),"aria-current":n.status===`current`?`step`:void 0,...T(e,n)}),live:c((e,{id:t,key:n})=>{let r=e.positions[n],i=[e.times.includes(n)&&S(t,`time`,n),e.descriptions.includes(n)&&S(t,`description`,n)].filter(Boolean);return{"aria-labelledby":e.titles.includes(n)?S(t,`title`,n):void 0,"aria-describedby":i.length?i.join(` `):void 0,"aria-posinset":r===void 0?void 0:String(r),"aria-setsize":r===void 0?void 0:String(e.size),"data-first":e.first===n?``:void 0,"data-last":e.last===n?``:void 0}}),on:{keydown:(e,{el:t,api:n})=>n.internal.keydown(e,t)},bind(e,t){let n=t.api.internal.roving.bind(e,t);return()=>{n(),e.style.removeProperty(`--timeline-index`)}}}),marker:e({props:D,selects:E,state:(e,{props:t})=>w(e,t),attrs:(e,{props:t})=>({"aria-hidden":`true`,...T(e,t)})}),connector:e({props:D,selects:E,state:(e,{props:t})=>w(e,t),attrs:(e,{props:t})=>({"aria-hidden":`true`,...T(e,t)})}),time:e({props:D,selects:E,state:(e,{props:t})=>w(e,t),attrs:(e,{id:t,key:n,props:r})=>({id:S(t,`time`,n),...T(e,r)}),bind:(e,{key:t,store:n})=>p(n,`times`,t)}),title:e({props:D,selects:E,state:(e,{props:t})=>w(e,t),attrs:(e,{id:t,key:n,props:r})=>({id:S(t,`title`,n),...T(e,r)}),bind:(e,{key:t,store:n})=>p(n,`titles`,t)}),description:e({props:D,selects:E,state:(e,{props:t})=>w(e,t),attrs:(e,{id:t,key:n,props:r})=>({id:S(t,`description`,n),...T(e,r)}),bind:(e,{key:t,store:n})=>p(n,`descriptions`,t)})})})})))()}var k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{O(),r(),k=i(ce,{root:`div`,item:`div`,marker:`div`,connector:`div`,time:`time`,title:`div`,description:`div`}),A=k.Root,j=k.Item,M=k.Marker,N=k.Connector,P=k.Time,F=k.Title,I=k.Description})))()}function R(e,t,n,r){return(0,B.jsxs)(B.Fragment,{children:[e,t?(0,B.jsxs)(B.Fragment,{children:[`, `,t]}):null,n?r?(0,B.jsxs)(B.Fragment,{children:[` (from `,n,`)`]}):(0,B.jsxs)(B.Fragment,{children:[` & `,n]}):null]})}function z({events:e,variant:t=`activity`,appearance:n=`plain`,alternating:r=!1,sentFromLabel:i=`Sent from`,renderIcon:a,renderContent:o,emptyMessage:s=`No activity yet`,className:ee,...te}){if(!e.length)return(0,B.jsx)(`p`,{className:`kit-timeline__empty`,children:s});let c=n===`card`,l=c&&t===`status`,u=(e,t)=>e.dateTime||e.time||e.date?(0,B.jsx)(P,{className:t,dateTime:e.dateTime,children:e.time??e.date??e.dateTime}):null,d=e=>(0,B.jsxs)(B.Fragment,{children:[e.description?(0,B.jsx)(I,{className:`kit-timeline__description`,children:e.description}):null,e.reason?(0,B.jsx)(`p`,{className:`kit-timeline__reason`,children:e.reason}):null,e.sentFrom?(0,B.jsxs)(`div`,{className:`kit-timeline__sent-from`,children:[(0,B.jsx)(`span`,{className:`kit-timeline__sent-from-label`,children:i}),(0,B.jsx)(`span`,{children:R(e.sentFrom.name,e.sentFrom.department,e.sentFrom.stage,!0)})]}):null,e.metadata?.length?(0,B.jsx)(`dl`,{className:`kit-timeline__meta`,children:e.metadata.map((e,t)=>(0,B.jsxs)(`div`,{className:`kit-timeline__meta-row`,children:[(0,B.jsx)(`dt`,{children:e.label}),(0,B.jsx)(`dd`,{children:e.value})]},t))}):null]}),f=(e,t)=>e.actor?(0,B.jsx)(`span`,{className:t,children:R(e.actor,e.department,e.stage)}):null,p=e=>(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(`div`,{className:`kit-timeline__heading`,children:[(0,B.jsx)(F,{className:`kit-timeline__title`,children:e.title}),f(e,`kit-timeline__actor`),e.time&&e.date?(0,B.jsxs)(`span`,{className:`kit-timeline__time`,children:[e.date,`,`,` `,(0,B.jsx)(P,{dateTime:e.dateTime,children:e.time})]}):u(e,`kit-timeline__time`)]}),d(e)]}),m=e=>(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(F,{className:`kit-timeline__title`,children:e.title}),(0,B.jsxs)(`div`,{className:`kit-timeline__card`,"data-status":e.status??`neutral`,children:[f(e,`kit-timeline__people`),t===`activity`&&(e.date||e.time||e.dateTime)?(0,B.jsxs)(`div`,{className:`kit-timeline__when`,children:[e.date?(0,B.jsxs)(`span`,{className:`kit-timeline__when-part`,children:[(0,B.jsx)(ie,{}),e.date]}):null,e.time||e.dateTime?(0,B.jsxs)(`span`,{className:`kit-timeline__when-part`,children:[(0,B.jsx)(V,{}),(0,B.jsx)(P,{dateTime:e.dateTime,children:e.time??e.dateTime})]}):null]}):null,d(e)]})]});return(0,B.jsx)(A,{"aria-label":te[`aria-label`]??`Timeline`,className:ne(`kit-timeline`,ee),"data-variant":t,"data-appearance":n,"data-alternating":r&&t===`status`?``:void 0,children:e.map(e=>(0,B.jsxs)(j,{className:`kit-timeline__item`,children:[(0,B.jsx)(M,{className:`kit-timeline__marker`,"data-status":e.status??`neutral`,children:a?a(e):e.icon??(l?W[e.status??`neutral`]:null)}),(0,B.jsx)(N,{className:`kit-timeline__connector`}),(0,B.jsx)(`div`,{className:`kit-timeline__body`,children:o?o(e):c?m(e):p(e)}),l&&!o?(0,B.jsx)(`div`,{className:`kit-timeline__stamp`,children:u(e,`kit-timeline__pill`)}):null]},e.id))})}var B,V,H,U,W;function G(){return(G=e((()=>{L(),g(),B=m(),V=()=>(0,B.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:[(0,B.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`}),(0,B.jsx)(`path`,{d:`M12 7v5l3 2`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),H=()=>(0,B.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,"aria-hidden":`true`,children:(0,B.jsx)(`path`,{d:`M12 11v6M12 7.5v.01`,strokeLinecap:`round`})}),U=()=>(0,B.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,"aria-hidden":`true`,children:(0,B.jsx)(`path`,{d:`M12 7v6M12 16.5v.01`,strokeLinecap:`round`})}),W={success:(0,B.jsx)(h,{}),error:(0,B.jsx)(re,{}),pending:(0,B.jsx)(V,{}),info:(0,B.jsx)(H,{}),warning:(0,B.jsx)(U,{}),neutral:null};try{z.displayName=`Timeline`,z.__docgenInfo={description:'A vertical list of events: an activity log or a workflow\'s stages. Add\n`appearance="card"` (and `alternating` for stages) for the bordered,\nzigzag layout SWIFTO uses.',displayName:`Timeline`,filePath:`D:/owl.ai/repo/C-UI-KIT/packages/ui-kit/src/components/Timeline/Timeline.tsx`,methods:[],props:{events:{defaultValue:null,declarations:[{fileName:`C-UI-KIT/packages/ui-kit/src/components/Timeline/Timeline.tsx`,name:`TypeLiteral`}],description:``,name:`events`,required:!0,tags:{},type:{name:`T[]`}},"aria-label":{defaultValue:{value:`'Timeline'`},declarations:[{fileName:`C-UI-KIT/packages/ui-kit/src/components/Timeline/Timeline.tsx`,name:`TypeLiteral`}],description:`Accessible name of the list.`,name:`aria-label`,required:!1,tags:{default:`'Timeline'`},type:{name:`string`}},variant:{defaultValue:{value:`activity`},declarations:[{fileName:`C-UI-KIT/packages/ui-kit/src/components/Timeline/Timeline.tsx`,name:`TypeLiteral`}],description:"`activity`: dense, time first. `status`: roomier, for workflow stages.",name:`variant`,required:!1,tags:{default:`'activity'`},type:{name:`enum`,raw:`"status" | "activity"`,value:[{value:`"status"`},{value:`"activity"`}]}},appearance:{defaultValue:{value:`plain`},declarations:[{fileName:`C-UI-KIT/packages/ui-kit/src/components/Timeline/Timeline.tsx`,name:`TypeLiteral`}],description:'`plain`: text beside small markers. `card`: each event in a bordered card\ncoloured by its status. With `variant="status"`, card adds large markers\nwith a status icon and shows the time as a pill; with `activity`, a\nringed dot, a dashed line and a date and time row.',name:`appearance`,required:!1,tags:{default:`'plain'`},type:{name:`enum`,raw:`"plain" | "card"`,value:[{value:`"plain"`},{value:`"card"`}]}},alternating:{defaultValue:{value:`false`},declarations:[{fileName:`C-UI-KIT/packages/ui-kit/src/components/Timeline/Timeline.tsx`,name:`TypeLiteral`}],description:`With \`variant="status"\`: a centred line with events alternating left and
right, the time on the opposite side. Falls back to one column when the
timeline is narrower than 40rem.`,name:`alternating`,required:!1,tags:{default:`false`},type:{name:`boolean`}},sentFromLabel:{defaultValue:{value:`Sent from`},declarations:[{fileName:`C-UI-KIT/packages/ui-kit/src/components/Timeline/Timeline.tsx`,name:`TypeLiteral`}],description:"Label of the `sentFrom` block, for translation.",name:`sentFromLabel`,required:!1,tags:{default:`'Sent from'`},type:{name:`ReactNode`}},renderIcon:{defaultValue:null,declarations:[{fileName:`C-UI-KIT/packages/ui-kit/src/components/Timeline/Timeline.tsx`,name:`TypeLiteral`}],description:`Replace an event's marker content.`,name:`renderIcon`,required:!1,tags:{},type:{name:`((event: T) => ReactNode)`}},renderContent:{defaultValue:null,declarations:[{fileName:`C-UI-KIT/packages/ui-kit/src/components/Timeline/Timeline.tsx`,name:`TypeLiteral`}],description:`Replace an event's body (title, time, description, metadata).`,name:`renderContent`,required:!1,tags:{},type:{name:`((event: T) => ReactNode)`}},emptyMessage:{defaultValue:{value:`No activity yet`},declarations:[{fileName:`C-UI-KIT/packages/ui-kit/src/components/Timeline/Timeline.tsx`,name:`TypeLiteral`}],description:`Text while there are no events.`,name:`emptyMessage`,required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`C-UI-KIT/packages/ui-kit/src/components/Timeline/Timeline.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{example:`<Timeline events={[
  { id: '1', title: 'Submitted', actor: 'Aina', dateTime: '2026-11-10T09:12', time: '10 Nov, 9:12 AM', status: 'success' },
  { id: '2', title: 'Under review', status: 'pending' },
]} />
<Timeline variant="status" appearance="card" alternating events={stages} />`}}}catch{}})))()}var le=t({Activity:()=>J,ActivityCards:()=>$,AlternatingCards:()=>Z,Empty:()=>X,StageCards:()=>Q,Stages:()=>Y,__namedExportsOrder:()=>ue,default:()=>q}),K,q,J,Y,X,Z,Q,$,ue;function de(){return(de=e((()=>{g(),G(),K=m(),q={title:`Components/Data display/Timeline`,component:z,tags:[`!autodocs`],parameters:{layout:`padded`},args:{events:[{id:`1`,title:`Package submitted`,actor:`Aisyah Rahman`,dateTime:`2026-11-10T09:12`,time:`10 Nov, 9:12 AM`,status:`success`},{id:`2`,title:`Returned for changes`,actor:`Lim Wei Jie`,description:`Bill of quantities is missing the drainage items.`,dateTime:`2026-11-11T14:32`,time:`11 Nov, 2:32 PM`,status:`warning`},{id:`3`,title:`Resubmitted`,actor:`Aisyah Rahman`,dateTime:`2026-11-12T10:05`,time:`12 Nov, 10:05 AM`,status:`info`,metadata:[{label:`Version`,value:`2`},{label:`Files`,value:`3 attachments`}]},{id:`4`,title:`Awaiting approval`,status:`pending`}],variant:`activity`,"aria-label":`Package history`},argTypes:{variant:{control:`inline-radio`,options:[`activity`,`status`]},appearance:{control:`inline-radio`,options:[`plain`,`card`]},events:{control:!1}},decorators:[(e,{parameters:t})=>(0,K.jsx)(`div`,{style:{maxWidth:t.maxWidth??520},children:(0,K.jsx)(e,{})})]},J={},Y={args:{variant:`status`,"aria-label":`Approval stages`,events:[{id:`a`,title:`Drafted`,status:`success`,icon:(0,K.jsx)(h,{}),time:`3 Nov`},{id:`b`,title:`Engineer review`,status:`success`,icon:(0,K.jsx)(h,{}),time:`5 Nov`},{id:`c`,title:`Finance review`,status:`pending`,description:`With Finance since 6 Nov.`},{id:`d`,title:`Director approval`,status:`neutral`}]}},X={args:{events:[],emptyMessage:`No activity yet.`}},Z={parameters:{maxWidth:960},args:{variant:`status`,appearance:`card`,alternating:!0,"aria-label":`Work order history`,events:[{id:`1`,title:`Work order created`,actor:`Afiq Rahman`,department:`Planning Office`,stage:`Planning`,description:`Initial creation of the work order.`,dateTime:`2026-03-22T12:09`,time:`22 Mar 2026, 12:09`,status:`success`},{id:`2`,title:`Submitted for verification`,actor:`Nadia Farhana`,department:`Engineering`,stage:`Submission`,description:`Details reviewed and forwarded to verification.`,dateTime:`2026-03-23T09:30`,time:`23 Mar 2026, 09:30`,status:`success`,sentFrom:{name:`Afiq Rahman`,stage:`Planning`}},{id:`3`,title:`Work order rejected`,actor:`Nurin Izzati`,department:`Approvals Committee`,stage:`Approval`,reason:`Rejected due to missing cost breakdown and unclear scope.`,dateTime:`2026-03-24T15:02`,time:`24 Mar 2026, 15:02`,status:`error`,sentFrom:{name:`Rafidah Noor`,stage:`Verification`}},{id:`4`,title:`Awaiting resubmission`,actor:`Afiq Rahman`,department:`Planning Office`,status:`pending`,time:`Pending`}]}},Q={args:{...Z.args,alternating:!1}},$={args:{variant:`activity`,appearance:`card`,"aria-label":`Activity log`,events:[{id:`1`,title:`Inspection completed`,actor:`Lim Wei Jie`,description:`Pothole at KM 12 measured and photographed.`,date:`12 Nov 2026`,time:`10:05 AM`,dateTime:`2026-11-12T10:05`,status:`success`,metadata:[{label:`Route`,value:`R-12`},{label:`Photos`,value:`3`}]},{id:`2`,title:`Contractor notified`,description:`Notice of defect sent to the contractor.`,date:`12 Nov 2026`,time:`11:40 AM`,dateTime:`2026-11-12T11:40`,status:`info`},{id:`3`,title:`Repair overdue`,description:`No response within 48 hours.`,date:`14 Nov 2026`,time:`11:40 AM`,dateTime:`2026-11-14T11:40`,status:`warning`}]}},ue=[`Activity`,`Stages`,`Empty`,`AlternatingCards`,`StageCards`,`ActivityCards`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'status',
    'aria-label': 'Approval stages',
    events: [{
      id: 'a',
      title: 'Drafted',
      status: 'success',
      icon: <icons.CheckIcon />,
      time: '3 Nov'
    }, {
      id: 'b',
      title: 'Engineer review',
      status: 'success',
      icon: <icons.CheckIcon />,
      time: '5 Nov'
    }, {
      id: 'c',
      title: 'Finance review',
      status: 'pending',
      description: 'With Finance since 6 Nov.'
    }, {
      id: 'd',
      title: 'Director approval',
      status: 'neutral'
    }]
  }
}`,...Y.parameters?.docs?.source},description:{story:`Workflow stages: roomier, with icons in the markers.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    events: [],
    emptyMessage: 'No activity yet.'
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    maxWidth: 960
  },
  args: {
    variant: 'status',
    appearance: 'card',
    alternating: true,
    'aria-label': 'Work order history',
    events: [{
      id: '1',
      title: 'Work order created',
      actor: 'Afiq Rahman',
      department: 'Planning Office',
      stage: 'Planning',
      description: 'Initial creation of the work order.',
      dateTime: '2026-03-22T12:09',
      time: '22 Mar 2026, 12:09',
      status: 'success'
    }, {
      id: '2',
      title: 'Submitted for verification',
      actor: 'Nadia Farhana',
      department: 'Engineering',
      stage: 'Submission',
      description: 'Details reviewed and forwarded to verification.',
      dateTime: '2026-03-23T09:30',
      time: '23 Mar 2026, 09:30',
      status: 'success',
      sentFrom: {
        name: 'Afiq Rahman',
        stage: 'Planning'
      }
    }, {
      id: '3',
      title: 'Work order rejected',
      actor: 'Nurin Izzati',
      department: 'Approvals Committee',
      stage: 'Approval',
      reason: 'Rejected due to missing cost breakdown and unclear scope.',
      dateTime: '2026-03-24T15:02',
      time: '24 Mar 2026, 15:02',
      status: 'error',
      sentFrom: {
        name: 'Rafidah Noor',
        stage: 'Verification'
      }
    }, {
      id: '4',
      title: 'Awaiting resubmission',
      actor: 'Afiq Rahman',
      department: 'Planning Office',
      status: 'pending',
      time: 'Pending'
    }]
  }
}`,...Z.parameters?.docs?.source},description:{story:`SWIFTO's workflow timeline: cards, status icons, time pills, left and right.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    ...AlternatingCards.args,
    alternating: false
  }
}`,...Q.parameters?.docs?.source},description:{story:`The same cards in one column, for narrow panels.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'activity',
    appearance: 'card',
    'aria-label': 'Activity log',
    events: [{
      id: '1',
      title: 'Inspection completed',
      actor: 'Lim Wei Jie',
      description: 'Pothole at KM 12 measured and photographed.',
      date: '12 Nov 2026',
      time: '10:05 AM',
      dateTime: '2026-11-12T10:05',
      status: 'success',
      metadata: [{
        label: 'Route',
        value: 'R-12'
      }, {
        label: 'Photos',
        value: '3'
      }]
    }, {
      id: '2',
      title: 'Contractor notified',
      description: 'Notice of defect sent to the contractor.',
      date: '12 Nov 2026',
      time: '11:40 AM',
      dateTime: '2026-11-12T11:40',
      status: 'info'
    }, {
      id: '3',
      title: 'Repair overdue',
      description: 'No response within 48 hours.',
      date: '14 Nov 2026',
      time: '11:40 AM',
      dateTime: '2026-11-14T11:40',
      status: 'warning'
    }]
  }
}`,...$.parameters?.docs?.source},description:{story:`An activity log as cards: ringed dots, a dashed line, date and time.`,...$.parameters?.docs?.description}}}})))()}export{Q as a,de as c,X as i,$ as n,Y as o,Z as r,le as s,J as t};