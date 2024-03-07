"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[499],{4499:function(e,n,r){r.r(n),r.d(n,{SignMessage:function(){return p}});var o=r(7891),t=r(1805),a=r(9980),i=r(1263),s=r(2919),c=r(5593),u=r(697),l=r.n(u),d=r(2363),f=r(1033),p=function(){var e=(0,c.O)(),n=e.publicKey,r=e.signMessage,u=(0,f.d)(),p=(0,d.useCallback)((0,o.Z)((function(){var e,o,a;return(0,t.__generator)(this,(function(t){switch(t.label){case 0:if(t.trys.push([0,2,,3]),!n)throw new Error("Wallet not connected!");if(!r)throw new Error("Wallet does not support message signing!");return e=(new TextEncoder).encode("".concat(window.location.host," wants you to sign in with your Solana account:\n").concat(n.toBase58(),"\n\nPlease sign in.")),[4,r(e)];case 1:if(o=t.sent(),!s.UN.verify(o,e,n.toBytes()))throw new Error("Message signature invalid!");return u("success","Message signature: ".concat(l().encode(o))),[3,3];case 2:return a=t.sent(),u("error","Sign Message failed: ".concat(null===a||void 0===a?void 0:a.message)),[3,3];case 3:return[2]}}))})),[n,r,u]);return(0,a.jsx)(i.Z,{variant:"contained",color:"secondary",onClick:p,disabled:!n||!r,children:"Sign Message"})}},1033:function(e,n,r){r.d(n,{d:function(){return N}});var o=r(9980),t=(0,r(2526).Z)((0,o.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"Launch"),a=r(892),i=r(9276),s=r(2363),c=r(8640),u=r(1697),l=r(8428),d=r(38),f=r(5921),p=r(5083),h=r(2097),g=r(2693),m=r(3356),v=r(1677);function b(e){return(0,v.Z)("MuiLink",e)}var y=(0,m.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),x=r(6846),w=r(2442);const Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var k=({theme:e,ownerState:n})=>{const r=(e=>Z[e]||e)(n.color),o=(0,x.DW)(e,`palette.${r}`,!1)||n.color,t=(0,x.DW)(e,`palette.${r}Channel`);return"vars"in e&&t?`rgba(${t} / 0.4)`:(0,w.Fq)(o,.4)};const S=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],M=(0,d.ZP)(g.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,n[`underline${(0,l.Z)(r.underline)}`],"button"===r.component&&n.button]}})((({theme:e,ownerState:n})=>(0,i.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&(0,i.Z)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:k({theme:e,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${y.focusVisible}`]:{outline:"auto"}})));var C=s.forwardRef((function(e,n){const r=(0,f.Z)({props:e,name:"MuiLink"}),{className:t,color:d="primary",component:g="a",onBlur:m,onFocus:v,TypographyClasses:y,underline:x="always",variant:w="inherit",sx:k}=r,C=(0,a.Z)(r,S),{isFocusVisibleRef:D,onBlur:V,onFocus:L,ref:j}=(0,p.Z)(),[N,_]=s.useState(!1),A=(0,h.Z)(n,j),B=(0,i.Z)({},r,{color:d,component:g,focusVisible:N,underline:x,variant:w}),E=(e=>{const{classes:n,component:r,focusVisible:o,underline:t}=e,a={root:["root",`underline${(0,l.Z)(t)}`,"button"===r&&"button",o&&"focusVisible"]};return(0,u.Z)(a,b,n)})(B);return(0,o.jsx)(M,(0,i.Z)({color:d,className:(0,c.Z)(E.root,t),classes:y,component:g,onBlur:e=>{V(e),!1===D.current&&_(!1),m&&m(e)},onFocus:e=>{L(e),!0===D.current&&_(!0),v&&v(e)},ref:A,ownerState:B,variant:w,sx:[...Object.keys(Z).includes(d)?[]:[{color:d}],...Array.isArray(k)?k:[k]]},C))})),D=r(9473),V=(0,d.ZP)("span")((function(){return{display:"flex",alignItems:"center"}})),L=(0,d.ZP)(C)((function(){return{color:"#ffffff",display:"flex",alignItems:"center",marginLeft:16,textDecoration:"underline","&:hover":{color:"#000000"}}})),j=(0,d.ZP)(t)((function(){return{fontSize:20,marginLeft:8}}));function N(){var e=(0,D.Ds)().enqueueSnackbar;return(0,s.useCallback)((function(n,r,t){e((0,o.jsxs)(V,{children:[r,t&&(0,o.jsxs)(L,{href:"https://explorer.solana.com/tx/".concat(t,"?cluster=devnet"),target:"_blank",children:["Transaction",(0,o.jsx)(j,{})]})]}),{variant:n})}),[e])}}}]);