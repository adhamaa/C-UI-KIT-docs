import{n as e}from"./rolldown-runtime-sJBDdmOt.js";function t(e,t=`Site photo ${e}`){let n=[28,200,130,260,350],r=n[e%n.length],i=`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="hsl(${r} 55% 62%)"/><stop offset="1" stop-color="hsl(${r+40} 45% 32%)"/>
  </linearGradient></defs>
  <rect width="800" height="600" fill="url(#g)"/>
  <path d="M0 470 L260 300 L420 420 L560 330 L800 480 L800 600 L0 600Z" fill="rgba(0,0,0,.25)"/>
  <circle cx="620" cy="150" r="60" fill="rgba(255,255,255,.55)"/>
  <text x="40" y="70" font-family="sans-serif" font-size="36" fill="white">${t}</text>
</svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`}function n(e){let t=`<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
  <rect width="96" height="96" fill="hsl(${e} 50% 78%)"/>
  <circle cx="48" cy="38" r="18" fill="hsl(${e} 35% 42%)"/>
  <path d="M14 96c4-22 18-32 34-32s30 10 34 32z" fill="hsl(${e} 35% 42%)"/>
</svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(t)}`}function r(){return(r=e((()=>{})))()}export{t as n,n as r,r as t};