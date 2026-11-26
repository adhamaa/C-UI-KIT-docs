import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{a as r,n as i}from"./Display-84K7g_Kk.js";var a=t({Collapsed:()=>u,CustomSeparator:()=>d,Playground:()=>l,WithRouterLink:()=>f,__namedExportsOrder:()=>p,default:()=>c});function o({href:e,className:t,children:n}){return(0,s.jsx)(`a`,{href:e,className:t,onClick:t=>{t.preventDefault(),console.log(`navigate to`,e)},children:n})}var s,c,l,u,d,f,p;function m(){return(m=e((()=>{r(),s=n(),c={title:`Components/Navigation/Breadcrumb`,component:i,tags:[`!autodocs`],parameters:{layout:`padded`},args:{items:[{label:`Home`,href:`#home`},{label:`Packages`,href:`#packages`},{label:`Selangor`,href:`#selangor`},{label:`PKG-004`}]},argTypes:{items:{control:!1},linkComponent:{control:!1},separator:{control:`text`}}},l={},u={args:{maxItems:3,items:[{label:`Home`,href:`#home`},{label:`Packages`,href:`#packages`},{label:`Selangor`,href:`#selangor`},{label:`Petaling`,href:`#petaling`},{label:`PKG-004`,href:`#pkg-004`},{label:`Route R-12`}]}},d={args:{separator:`/`}},f={args:{linkComponent:o}},p=[`Playground`,`Collapsed`,`CustomSeparator`,`WithRouterLink`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    maxItems: 3,
    items: [{
      label: 'Home',
      href: '#home'
    }, {
      label: 'Packages',
      href: '#packages'
    }, {
      label: 'Selangor',
      href: '#selangor'
    }, {
      label: 'Petaling',
      href: '#petaling'
    }, {
      label: 'PKG-004',
      href: '#pkg-004'
    }, {
      label: 'Route R-12'
    }]
  }
}`,...u.parameters?.docs?.source},description:{story:"`maxItems` collapses the middle when the trail is long.",...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    separator: '/'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    linkComponent: RouterLink
  }
}`,...f.parameters?.docs?.source}}}})))()}export{f as a,l as i,u as n,m as o,d as r,a as t};