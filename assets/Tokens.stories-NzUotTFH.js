import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{a as r,i,o as a}from"./iframe-DEC_WJ0k.js";var o=t({Colors:()=>f,ControlHeights:()=>y,Radius:()=>m,Shadows:()=>g,Typography:()=>_,__namedExportsOrder:()=>b,default:()=>c}),s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{r(),s=n(),c={title:`Tokens`,tags:[`!autodocs`,`!dev`],parameters:{layout:`padded`,docs:{description:{component:`Swatches for the Tokens docs page. They read the live CSS variables, so\r
they follow the Theme and Scheme toolbar switches.`}}}},l=[{title:`Base`,tokens:[`background`,`foreground`,`muted`,`mutedForeground`]},{title:`Lines and focus`,tokens:[`border`,`input`,`ring`,`ringBorder`,`overlay`]},{title:`Brand`,tokens:[`primary`,`primaryForeground`,`primarySoft`,`primarySoftForeground`]},{title:`Status`,tokens:[`destructive`,`destructiveForeground`,`success`,`successForeground`,`warning`,`warningForeground`,`info`,`infoForeground`]},{title:`Surfaces`,tokens:[`surface`,`surfaceRaised`]},{title:`Table`,tokens:[`tableHeader`,`tableHeaderForeground`,`tableRowHover`]}],u={fontSize:13,fontWeight:600},d={fontFamily:`var(--ui-font-mono)`,fontSize:12,color:`var(--ui-muted-foreground)`},f={render:()=>(0,s.jsx)(`div`,{style:{display:`grid`,gap:24},children:l.map(e=>(0,s.jsxs)(`section`,{children:[(0,s.jsx)(`h3`,{style:{margin:`0 0 8px`,fontSize:14},children:e.title}),(0,s.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(180px, 1fr))`,gap:12},children:e.tokens.map(e=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:6},children:[(0,s.jsx)(`div`,{style:{height:56,borderRadius:`var(--ui-radius)`,background:`var(${i[e]})`,border:`1px solid var(--ui-border)`}}),(0,s.jsx)(`span`,{style:u,children:e}),(0,s.jsx)(`span`,{style:d,children:i[e]})]},e))})]},e.title))})},p=[`radiusSm`,`radius`,`radiusLg`],m={render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`},children:p.map(e=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:6},children:[(0,s.jsx)(`div`,{style:{width:96,height:64,background:`var(--kit-primary-soft)`,border:`1px solid var(--ui-primary)`,borderRadius:`var(${a[e]})`}}),(0,s.jsx)(`span`,{style:u,children:e}),(0,s.jsx)(`span`,{style:d,children:a[e]})]},e))})},h=[`shadow`,`shadowLg`],g={render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,gap:32,flexWrap:`wrap`},children:h.map(e=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:6},children:[(0,s.jsx)(`div`,{style:{width:140,height:80,background:`var(--kit-surface-raised)`,borderRadius:`var(--ui-radius)`,boxShadow:`var(${a[e]})`}}),(0,s.jsx)(`span`,{style:u,children:e}),(0,s.jsx)(`span`,{style:d,children:a[e]})]},e))})},_={render:()=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`div`,{style:{fontFamily:`var(--ui-font-sans)`,fontSize:20},children:`The quick brown fox jumps over the lazy dog 0123456789`}),(0,s.jsx)(`span`,{style:u,children:`fontSans`}),` `,(0,s.jsx)(`span`,{style:d,children:`--ui-font-sans`})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`div`,{style:{fontFamily:`var(--ui-font-mono)`,fontSize:16},children:[`PKG-004 · 12,480.50 · `,`{ status: "draft" }`]}),(0,s.jsx)(`span`,{style:u,children:`fontMono`}),` `,(0,s.jsx)(`span`,{style:d,children:`--ui-font-mono`})]})]})},v=[`xs`,`sm`,`md`,`lg`],y={render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,gap:16,alignItems:`flex-end`},children:v.map(e=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:6,justifyItems:`center`},children:[(0,s.jsx)(`div`,{style:{width:64,height:`var(--kit-h-${e})`,background:`var(--kit-primary-soft)`,border:`1px solid var(--ui-primary)`,borderRadius:`var(--kit-radius-sm)`}}),(0,s.jsx)(`span`,{style:u,children:e}),(0,s.jsxs)(`span`,{style:d,children:[`--kit-h-`,e]})]},e))})},b=[`Colors`,`Radius`,`Shadows`,`Typography`,`ControlHeights`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 24
  }}>\r
      {colorGroups.map(group => <section key={group.title}>\r
          <h3 style={{
        margin: '0 0 8px',
        fontSize: 14
      }}>{group.title}</h3>\r
          <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
        gap: 12
      }}>\r
            {group.tokens.map(token => <div key={token} style={{
          display: 'grid',
          gap: 6
        }}>\r
                <div style={{
            height: 56,
            borderRadius: 'var(--ui-radius)',
            background: \`var(\${colorTokenVars[token]})\`,
            border: '1px solid var(--ui-border)'
          }} />\r
                <span style={label}>{token}</span>\r
                <span style={code}>{colorTokenVars[token]}</span>\r
              </div>)}\r
          </div>\r
        </section>)}\r
    </div>
}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap'
  }}>\r
      {radii.map(token => <div key={token} style={{
      display: 'grid',
      gap: 6
    }}>\r
          <div style={{
        width: 96,
        height: 64,
        background: 'var(--kit-primary-soft)',
        border: '1px solid var(--ui-primary)',
        borderRadius: \`var(\${scalarTokenVars[token]})\`
      }} />\r
          <span style={label}>{token}</span>\r
          <span style={code}>{scalarTokenVars[token]}</span>\r
        </div>)}\r
    </div>
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    flexWrap: 'wrap'
  }}>\r
      {shadows.map(token => <div key={token} style={{
      display: 'grid',
      gap: 6
    }}>\r
          <div style={{
        width: 140,
        height: 80,
        background: 'var(--kit-surface-raised)',
        borderRadius: 'var(--ui-radius)',
        boxShadow: \`var(\${scalarTokenVars[token]})\`
      }} />\r
          <span style={label}>{token}</span>\r
          <span style={code}>{scalarTokenVars[token]}</span>\r
        </div>)}\r
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 16
  }}>\r
      <div>\r
        <div style={{
        fontFamily: 'var(--ui-font-sans)',
        fontSize: 20
      }}>\r
          The quick brown fox jumps over the lazy dog 0123456789\r
        </div>\r
        <span style={label}>fontSans</span>{' '}\r
        <span style={code}>--ui-font-sans</span>\r
      </div>\r
      <div>\r
        <div style={{
        fontFamily: 'var(--ui-font-mono)',
        fontSize: 16
      }}>\r
          PKG-004 · 12,480.50 · {'{ status: "draft" }'}\r
        </div>\r
        <span style={label}>fontMono</span>{' '}\r
        <span style={code}>--ui-font-mono</span>\r
      </div>\r
    </div>
}`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'flex-end'
  }}>\r
      {heights.map(size => <div key={size} style={{
      display: 'grid',
      gap: 6,
      justifyItems: 'center'
    }}>\r
          <div style={{
        width: 64,
        height: \`var(--kit-h-\${size})\`,
        background: 'var(--kit-primary-soft)',
        border: '1px solid var(--ui-primary)',
        borderRadius: 'var(--kit-radius-sm)'
      }} />\r
          <span style={label}>{size}</span>\r
          <span style={code}>--kit-h-{size}</span>\r
        </div>)}\r
    </div>
}`,...y.parameters?.docs?.source}}}})))()}export{o as a,g as i,y as n,_ as o,m as r,x as s,f as t};