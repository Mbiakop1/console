"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9924],{39924:function(e,n,a){a.r(n);var t=a(23430),r=a(18489),o=a(50390),s=a(76352),l=a(25594),c=a(66946),i=a(66964),d=a(86509),u=a(4285),h=a(72462),f=a(34424),m=a(24442),x=a(28948),Z=a(44149),p=a(85204),j=a(62559),v={setModalErrorSnackMessage:Z.zb},C=(0,f.$j)(null,v);n.default=C((0,u.Z)((function(e){return(0,d.Z)((0,r.Z)((0,r.Z)({},h.ID),h.DF))}))((function(e){var n=e.modalOpen,a=e.folderName,r=e.bucketName,d=e.onClose,u=e.setModalErrorSnackMessage,h=e.classes,f=e.existingFiles,Z=(0,o.useState)(""),v=(0,t.Z)(Z,2),C=v[0],b=v[1],g=(0,o.useState)(!1),k=(0,t.Z)(g,2),P=k[0],w=k[1],F="".concat(r,"/").concat((0,x.le)(a)),E=function(){var e="";if(""!==a){var n=(0,x.le)(a);e=n.endsWith("/")?n:"".concat(n,"/")}if(-1===f.findIndex((function(n){return n.name===e+C}))){var t="/buckets/".concat(r,"/browse/").concat((0,x.ug)("".concat(e).concat(C)),"/");m.Z.push(t),d()}else u({errorMessage:"Folder cannot have the same name as an existing file",detailedError:""})};(0,o.useEffect)((function(){var e=!0;0===C.trim().length&&(e=!1),w(e)}),[C]);return(0,j.jsx)(o.Fragment,{children:(0,j.jsx)(s.Z,{modalOpen:n,title:"Choose or create a new path",onClose:d,titleIcon:(0,j.jsx)(p.Z9,{}),children:(0,j.jsxs)(l.ZP,{container:!0,children:[(0,j.jsxs)(l.ZP,{item:!0,xs:12,className:h.formFieldRow,children:["Current Path: ",F]}),(0,j.jsx)(l.ZP,{item:!0,xs:12,className:h.formFieldRow,children:(0,j.jsx)(i.Z,{value:C,label:"New Folder Path",id:"folderPath",name:"folderPath",placeholder:"Enter the new Folder Path",onChange:function(e){b(e.target.value)},onKeyPress:function(e){"Enter"===e.code&&""!==C&&E()},required:!0})}),(0,j.jsxs)(l.ZP,{item:!0,xs:12,className:h.modalButtonBar,children:[(0,j.jsx)(c.Z,{type:"button",color:"primary",variant:"outlined",onClick:function(){b("")},children:"Clear"}),(0,j.jsx)(c.Z,{type:"submit",variant:"contained",color:"primary",disabled:!P,onClick:E,children:"Create"})]})]})})})})))}}]);
//# sourceMappingURL=9924.3cf3061d.chunk.js.map