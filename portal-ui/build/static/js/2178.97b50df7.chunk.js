"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[2178],{32178:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var i,a=n(23430),r=n(18489),o=n(50390),s=n(34424),l=n(65771),d=n(81378),c=n(18201),m=n(46981),g=n(86509),u=n(62449),p=n(4285),x=n(66946),h=n(12066),f=n(25594);!function(e){e.unknown="unknown",e.form="form",e.redirect="redirect",e.serviceAccount="service-account"}(i||(i={}));var v=n(44149),j=n(30324),Z=n(24442),b=n(18221),y=n(45980),w=n(28948),S=n(52813),P=n(72462),N=n(62559),I=(0,u.Z)((function(e){return(0,g.Z)({root:{"& .MuiOutlinedInput-root":{paddingLeft:0,"& svg":{height:16,color:e.palette.primary.main},"& input":{padding:5,paddingLeft:0,"&::placeholder":{fontSize:12},"@media (max-width: 900px)":{padding:10}},"& fieldset":{border:"none",borderBottom:"1px solid #EAEAEA",borderRadius:0},"&.Mui-focused fieldset":{borderBottom:"1px solid #000000",borderRadius:0},"& fieldset:hover":{borderBottom:"2px solid #000000",borderRadius:0}}}})}));function L(e){var t=I();return(0,N.jsx)(h.Z,(0,r.Z)({classes:{root:t.root},variant:"standard"},e))}var C=(0,s.$j)((function(e){return{loggedIn:e.loggedIn}}),{userLoggedIn:v.nD,setErrorSnackMessage:v.Ih})((0,p.Z)((function(e){return(0,g.Z)((0,r.Z)({form:{width:"100%"},submit:{margin:"30px 0px 16px",height:40,boxShadow:"none",padding:"16px 30px"},loginPage:{height:"100%",display:"flex",flexFlow:"column",alignItems:"stretch",position:"relative",padding:84,"@media (max-width: 900px)":{padding:0}},shadowBox:{boxShadow:"rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.125) 0px 15px 50px 0px",height:"100%"},loginContainer:{flex:1,height:"100%","& .right-items":{padding:50,flex:1,height:"100%",display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center",maxWidth:"33%","@media (max-width: 900px)":{maxWidth:"100%",margin:"auto"}},"& .consoleTextBanner":{fontWeight:300,fontSize:"calc(3vw + 3vh + 1.5vmin)",lineHeight:1.15,color:"#ffffff",flex:1,textAlign:"center",height:"100%",display:"flex",justifyContent:"flex-start",margin:"auto",flexFlow:"column",background:"linear-gradient(120deg,#081c42,#073052)","& .logoLine":{display:"flex",alignItems:"center",fontSize:18,marginTop:40},"& .left-items":{margin:"auto",textAlign:"left",paddingRight:240,paddingBottom:200,"@media (max-width: 1400px)":{paddingBottom:120,paddingRight:50},"@media (max-width: 900px)":{paddingBottom:0,paddingRight:0},"@media (max-width: 600px)":{paddingBottom:0,paddingRight:0}},"& .left-logo":{"& .min-icon":{width:108},marginBottom:10},"& .text-line1":{font:" 100 70px 'Lato'","@media (max-width: 600px)":{fontSize:35},"@media (max-width: 800px)":{fontSize:45}},"& .text-line2":{fontSize:100,fontWeight:100,textTransform:"uppercase","@media (max-width: 600px)":{fontSize:35,marginLeft:0},"@media (max-width: 800px)":{fontSize:55,marginLeft:0}},"& .logo-console":{display:"flex",alignItems:"center","@media (max-width: 900px)":{marginTop:20,flexFlow:"column","& svg":{width:"50%"}}}}},"@media (max-width: 900px)":{loginContainer:{display:"flex",flexFlow:"column","& .consoleTextBanner":{margin:0,flex:2,"& .left-items":{alignItems:"center",textAlign:"center"},"& .logoLine":{justifyContent:"center"}}}},loadingLoginStrategy:{textAlign:"center"},headerTitle:{marginRight:"auto",marginBottom:15},submitContainer:{textAlign:"right"},linearPredef:{height:10},loaderAlignment:{display:"flex",width:"100%",height:"100%",justifyContent:"center",alignItems:"center",flexDirection:"column"},retryButton:{alignSelf:"flex-end"}},P.bK))}))((function(e){var t=e.classes,n=e.userLoggedIn,r=e.setErrorSnackMessage,s=(0,o.useState)(""),g=(0,a.Z)(s,2),u=g[0],p=g[1],h=(0,o.useState)(""),v=(0,a.Z)(h,2),P=v[0],I=v[1],C=(0,o.useState)(""),A=(0,a.Z)(C,2),B=A[0],E=A[1],k=(0,o.useState)({loginStrategy:i.unknown,redirect:""}),F=(0,a.Z)(k,2),T=F[0],z=F[1],R=(0,o.useState)(!1),M=(0,a.Z)(R,2),W=M[0],K=M[1],H=(0,o.useState)(!0),O=(0,a.Z)(H,2),_=O[0],D=O[1],V={form:"/api/v1/login","service-account":"/api/v1/login/operator"},q={form:{accessKey:u,secretKey:B},"service-account":{jwt:P}},G=function(e){e.preventDefault(),K(!0),j.Z.invoke("POST",V[T.loginStrategy]||"/api/v1/login",q[T.loginStrategy]).then((function(){n(!0),T.loginStrategy===i.form&&localStorage.setItem("userLoggedIn",(0,w.ug)(u));var e="/";localStorage.getItem("redirect-path")&&""!==localStorage.getItem("redirect-path")&&(e="".concat(localStorage.getItem("redirect-path")),localStorage.setItem("redirect-path","")),Z.Z.push(e)})).catch((function(e){K(!1),r(e)}))};(0,o.useEffect)((function(){_&&j.Z.invoke("GET","/api/v1/login").then((function(e){z(e),D(!1)})).catch((function(e){r(e),D(!1)}))}),[_,r]);var J=null;switch(T.loginStrategy){case i.form:J=(0,N.jsx)(o.Fragment,{children:(0,N.jsxs)("form",{className:t.form,noValidate:!0,onSubmit:G,children:[(0,N.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,N.jsx)(f.ZP,{item:!0,xs:12,className:t.spacerBottom,children:(0,N.jsx)(L,{fullWidth:!0,id:"accessKey",className:t.inputField,value:u,onChange:function(e){return p(e.target.value)},placeholder:"Username",name:"accessKey",autoComplete:"username",disabled:W,variant:"outlined",InputProps:{startAdornment:(0,N.jsx)(l.Z,{position:"start",className:t.iconColor,children:(0,N.jsx)(S.oy,{})})}})}),(0,N.jsx)(f.ZP,{item:!0,xs:12,children:(0,N.jsx)(L,{fullWidth:!0,className:t.inputField,value:B,onChange:function(e){return E(e.target.value)},name:"secretKey",type:"password",id:"secretKey",autoComplete:"current-password",disabled:W,placeholder:"Password",variant:"outlined",InputProps:{startAdornment:(0,N.jsx)(l.Z,{position:"start",className:t.iconColor,children:(0,N.jsx)(S.mB,{})})}})})]}),(0,N.jsx)(f.ZP,{item:!0,xs:12,className:t.submitContainer,children:(0,N.jsx)(x.Z,{type:"submit",variant:"contained",color:"primary",className:t.submit,disabled:""===B||""===u||W,children:"Login"})}),(0,N.jsx)(f.ZP,{item:!0,xs:12,className:t.linearPredef,children:W&&(0,N.jsx)(d.Z,{})})]})});break;case i.redirect:J=(0,N.jsx)(o.Fragment,{children:(0,N.jsx)(x.Z,{component:"a",href:T.redirect,type:"submit",variant:"contained",color:"primary",className:t.submit,children:"Login with SSO"})});break;case i.serviceAccount:J=(0,N.jsx)(o.Fragment,{children:(0,N.jsxs)("form",{className:t.form,noValidate:!0,onSubmit:G,children:[(0,N.jsx)(f.ZP,{container:!0,spacing:2,children:(0,N.jsx)(f.ZP,{item:!0,xs:12,children:(0,N.jsx)(L,{required:!0,className:t.inputField,fullWidth:!0,id:"jwt",value:P,onChange:function(e){return I(e.target.value)},name:"jwt",autoComplete:"off",disabled:W,placeholder:"Enter JWT",variant:"outlined",InputProps:{startAdornment:(0,N.jsx)(l.Z,{position:"start",children:(0,N.jsx)(S.mB,{})})}})})}),(0,N.jsx)(f.ZP,{item:!0,xs:12,className:t.submitContainer,children:(0,N.jsx)(x.Z,{type:"submit",variant:"contained",color:"primary",className:t.submit,disabled:""===P||W,children:"Login"})}),(0,N.jsx)(f.ZP,{item:!0,xs:12,className:t.linearPredef,children:W&&(0,N.jsx)(d.Z,{})})]})});break;default:J=(0,N.jsx)("div",{className:t.loaderAlignment,children:_?(0,N.jsx)(c.Z,{className:t.loadingLoginStrategy}):(0,N.jsxs)(o.Fragment,{children:[(0,N.jsx)("div",{children:(0,N.jsx)("p",{children:"An error has occurred, the backend cannot be reached."})}),(0,N.jsx)("div",{children:(0,N.jsx)(x.Z,{onClick:function(){D(!0)},endIcon:(0,N.jsx)(b.default,{}),color:"primary",variant:"outlined",className:t.retryButton,children:"Retry"})})]})})}var U=T.loginStrategy===i.serviceAccount?"Operator":"Console";return(0,N.jsx)(o.Fragment,{children:(0,N.jsxs)(m.Z,{className:t.loginPage,children:[(0,N.jsx)(y.Z,{}),(0,N.jsx)("div",{className:t.shadowBox,children:(0,N.jsxs)(f.ZP,{container:!0,className:t.loginContainer,children:[(0,N.jsx)(f.ZP,{item:!0,className:"consoleTextBanner",children:(0,N.jsxs)("div",{className:"left-items",children:[(0,N.jsx)("div",{className:"left-logo",children:(0,N.jsx)(S.BH,{})}),(0,N.jsx)("div",{className:"text-line1",children:"Welcome to"}),(0,N.jsx)("div",{className:"text-line2",children:U})]})}),(0,N.jsx)(f.ZP,{item:!0,className:"right-items",children:J})]})})]})})})))},65771:function(e,t,n){n.d(t,{Z:function(){return b}});var i=n(36222),a=n(1048),r=n(32793),o=n(50390),s=n(44977),l=n(50076),d=n(91442),c=n(35477),m=n(14478),g=n(23060),u=n(8208),p=n(10594);function x(e){return(0,p.Z)("MuiInputAdornment",e)}var h=(0,n(43349).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),f=n(15573),v=n(62559),j=["children","className","component","disablePointerEvents","disableTypography","position","variant"],Z=(0,u.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["position".concat((0,d.Z)(n.position))],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:t.palette.action.active},"filled"===n.variant&&(0,i.Z)({},"&.".concat(h.positionStart,"&:not(.").concat(h.hiddenLabel,")"),{marginTop:16}),"start"===n.position&&{marginRight:8},"end"===n.position&&{marginLeft:8},!0===n.disablePointerEvents&&{pointerEvents:"none"})})),b=o.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiInputAdornment"}),i=n.children,u=n.className,p=n.component,h=void 0===p?"div":p,b=n.disablePointerEvents,y=void 0!==b&&b,w=n.disableTypography,S=void 0!==w&&w,P=n.position,N=n.variant,I=(0,a.Z)(n,j),L=(0,g.Z)()||{},C=N;N&&L.variant,L&&!C&&(C=L.variant);var A=(0,r.Z)({},n,{hiddenLabel:L.hiddenLabel,size:L.size,disablePointerEvents:y,position:P,variant:C}),B=function(e){var t=e.classes,n=e.disablePointerEvents,i=e.hiddenLabel,a=e.position,r=e.size,o=e.variant,s={root:["root",n&&"disablePointerEvents",a&&"position".concat((0,d.Z)(a)),o,i&&"hiddenLabel",r&&"size".concat((0,d.Z)(r))]};return(0,l.Z)(s,x,t)}(A);return(0,v.jsx)(m.Z.Provider,{value:null,children:(0,v.jsx)(Z,(0,r.Z)({as:h,ownerState:A,className:(0,s.Z)(B.root,u),ref:t},I,{children:"string"!==typeof i||S?(0,v.jsxs)(o.Fragment,{children:["start"===P?(0,v.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}}):null,i]}):(0,v.jsx)(c.Z,{color:"text.secondary",children:i})}))})}))}}]);
//# sourceMappingURL=2178.97b50df7.chunk.js.map