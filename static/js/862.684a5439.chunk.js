"use strict";(self.webpackChunkmy_course_fd=self.webpackChunkmy_course_fd||[]).push([[862],{905:function(e,n,o){o.d(n,{i:function(){return z}});var t=o(1413),r=o(9439),i=o(9164),a=o(5299),c=o(4554),s=o(890),l=o(6314),d=o(3433),u=o(4942),p=o(3366),m=o(7462),h=o(2791),f=o(8182),x=o(4419),v=o(4036),y=o(6934),g=o(1402),b=o(3031),Z=o(8047),j=o(5878),w=o(1217);function k(e){return(0,w.Z)("MuiLink",e)}var S=(0,j.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),C=o(8529),L=o(2065),F={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},H=function(e){var n=e.theme,o=e.ownerState,t=function(e){return F[e]||e}(o.color),r=(0,C.DW)(n,"palette.".concat(t),!1)||o.color,i=(0,C.DW)(n,"palette.".concat(t,"Channel"));return"vars"in n&&i?"rgba(".concat(i," / 0.4)"):(0,L.Fq)(r,.4)},A=o(184),D=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],W=(0,y.ZP)(s.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,n["underline".concat((0,v.Z)(o.underline))],"button"===o.component&&n.button]}})((function(e){var n=e.theme,o=e.ownerState;return(0,m.Z)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&(0,m.Z)({textDecoration:"underline"},"inherit"!==o.color&&{textDecorationColor:H({theme:n,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===o.component&&(0,u.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(S.focusVisible),{outline:"auto"}))})),E=h.forwardRef((function(e,n){var o=(0,g.Z)({props:e,name:"MuiLink"}),t=o.className,i=o.color,a=void 0===i?"primary":i,c=o.component,s=void 0===c?"a":c,l=o.onBlur,u=o.onFocus,y=o.TypographyClasses,j=o.underline,w=void 0===j?"always":j,S=o.variant,C=void 0===S?"inherit":S,L=o.sx,H=(0,p.Z)(o,D),E=(0,b.Z)(),M=E.isFocusVisibleRef,_=E.onBlur,R=E.onFocus,T=E.ref,B=h.useState(!1),U=(0,r.Z)(B,2),V=U[0],N=U[1],P=(0,Z.Z)(n,T),z=(0,m.Z)({},o,{color:a,component:s,focusVisible:V,underline:w,variant:C}),I=function(e){var n=e.classes,o=e.component,t=e.focusVisible,r=e.underline,i={root:["root","underline".concat((0,v.Z)(r)),"button"===o&&"button",t&&"focusVisible"]};return(0,x.Z)(i,k,n)}(z);return(0,A.jsx)(W,(0,m.Z)({color:a,className:(0,f.Z)(I.root,t),classes:y,component:s,onBlur:function(e){_(e),!1===M.current&&N(!1),l&&l(e)},onFocus:function(e){R(e),!0===M.current&&N(!0),u&&u(e)},ref:P,ownerState:z,variant:C,sx:[].concat((0,d.Z)(Object.keys(F).includes(a)?[]:[{color:a}]),(0,d.Z)(Array.isArray(L)?L:[L]))},H))})),M=o(1009),_=o(1638),R=o(1087),T=function(e){var n=e.toBackLink;return(0,A.jsx)(c.Z,{sx:{display:"inline-flex"},children:(0,A.jsx)(_.E.div,{whileHover:{scale:[null,1,1.1]},transition:{type:"spring"},children:(0,A.jsxs)(s.Z,{component:R.rU,to:n,color:"secondary",sx:{display:"inline-flex"},children:[(0,A.jsx)(M.Z,{color:"secondary"}),(0,A.jsx)(s.Z,{variant:"h6",component:"span",fontWeight:"bold",color:"secondary",children:"BACK"})]})})})},B=o(4570),U=o(2169),V={offscreen:{y:200,rotate:-6},onscreen:{y:-10,rotate:-2,transition:{type:"spring",duration:1}}},N=function(e){var n=e.img;e.index;return(0,A.jsx)(i.Z,{sx:{overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",paddingTop:{xs:6,md:8}},children:(0,A.jsx)(_.E.div,{initial:"offscreen",whileInView:"onscreen",viewport:{once:!1,amount:.6},children:(0,A.jsx)(_.E.div,{className:"card",variants:V,children:(0,A.jsx)(B.Z,{sx:{p:2,borderRadius:4,width:{xs:"calc(100vw - 72px)"},maxWidth:{xs:296,sm:446,md:680},backgroundColor:"#ffffff"},children:(0,A.jsx)(U.Z,{component:"img",image:n,sx:{borderRadius:2,height:{xs:186,sm:328,md:468},transform:"rotate(2deg)",objectFit:"contain"}})})})})})},P=o(7689),z=function(e){var n,o,d=e.data,u=(0,h.useState)(!1),p=(0,r.Z)(u,2),m=p[0],f=p[1],x=null!==(n=null===(o=(0,P.TH)().state)||void 0===o?void 0:o.from)&&void 0!==n?n:"/";(0,h.useEffect)((function(){f(!0)}),[]),(0,h.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]);var v=d.title,y=d.description,g=d.pageUrl,b=d.sourceUrl,Z=d.imgs;return(0,A.jsxs)(i.Z,{id:"work",sx:{pt:2,pb:6},children:[(0,A.jsx)(T,{toBackLink:x}),(0,A.jsx)(a.Z,(0,t.Z)((0,t.Z)({in:m},m?{timeout:1e3}:{}),{},{children:(0,A.jsxs)(c.Z,{pt:2,children:[(0,A.jsx)(s.Z,{variant:"h1",component:"span",fontFamily:"League-gothic",children:v}),(0,A.jsx)(s.Z,{variant:"h6",component:"p",children:y}),Z.map((function(e,n){return(0,A.jsx)(N,{img:e,index:n},n)})),(0,A.jsxs)(l.Z,{direction:"row",pt:6,children:[(0,A.jsx)(_.E.div,{whileHover:{scale:[null,1,1.1]},transition:{type:"spring"},children:(0,A.jsx)(E,{variant:"h1",href:g,fontFamily:"League-gothic",lineHeight:1,color:"secondary",sx:{textDecoration:"none",cursor:"pointer"},children:"PAGE"})}),(0,A.jsx)(s.Z,{variant:"h1",fontFamily:"League-gothic",lineHeight:1,color:"text",sx:{ml:{xs:2,md:5},mr:{xs:2,md:5}},children:"|"}),(0,A.jsx)(_.E.div,{whileHover:{scale:[null,1,1.1]},transition:{type:"spring"},children:(0,A.jsx)(E,{variant:"h1",href:b,fontFamily:"League-gothic",lineHeight:1,color:"secondary",sx:{textDecoration:"none",cursor:"pointer"},children:"SOURCE"})})]})]})}))]})}},8705:function(e,n,o){o.r(n),o.d(n,{default:function(){return a}});var t=o(905),r={title:"HTML/CSS | WebStudio",pageUrl:"https://yourockit.github.io/my-course/my-html-css/my-hw-8/",sourceUrl:"https://github.com/yourockit/my-course/tree/master/my-html-css/my-hw-8",description:"Used HTML, CSS, SASS. Mobile First. Adaptive layout.",imgs:[o.p+"static/media/WebStudio_phone.4ed743231611aa78becc.png",o.p+"static/media/Portfolio_phone.78d3882b3cdf757d57fd.png",o.p+"static/media/WebStudio_desktop.49f30b06927caef0fba4.png",o.p+"static/media/Portfolio_desktop.686490b3703f2b806cce.png",o.p+"static/media/WebStudio_code.77be8c7e3ee8218d7b26.jpg"]},i=o(184),a=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.i,{data:r})})}},1009:function(e,n,o){var t=o(4836);n.Z=void 0;var r=t(o(5649)),i=o(184),a=(0,r.default)((0,i.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");n.Z=a}}]);
//# sourceMappingURL=862.684a5439.chunk.js.map