(this["webpackJsonpkardian-frontend"]=this["webpackJsonpkardian-frontend"]||[]).push([[6],{260:function(e,t,n){"use strict";var a=n(4),r=(n(0),n(24)),i=n(240),o=Object(i.a)((function(e){var t,n;return{h100:Object(r.a)({height:"100%"},e.breakpoints.down("xs"),{height:"max-content"}),baseContainer:Object(r.a)({backgroundImage:e.palette.banner.background,width:"100%",minHeight:"100vh"},e.breakpoints.down("xs"),{justifyContent:"center",padding:"1rem"}),divider:(t={background:e.palette.primary.main},Object(r.a)(t,e.breakpoints.up("sm"),{width:"1px",height:"100%"}),Object(r.a)(t,e.breakpoints.down("xs"),{width:"100%",height:"1px",margin:"3rem 0"}),t),presentationContainer:Object(r.a)({},e.breakpoints.down("sm"),{justifyContent:"center"}),loginContainer:(n={background:e.palette.border.light,width:"100%",height:"100%",textAlign:"center"},Object(r.a)(n,e.breakpoints.down("sm"),{justifyContent:"center",padding:"3rem 2rem"}),Object(r.a)(n,e.breakpoints.down("xs"),{justifyContent:"center",padding:"3rem 1rem"}),n),paper:Object(r.a)({padding:e.spacing(5),display:"flex",flexDirection:"column"},e.breakpoints.down("xs"),{padding:e.spacing(3)}),logoContainer:{alignSelf:"center",paddingBottom:"1rem"},logo:Object(r.a)({width:"25rem",height:"7rem",margin:"auto",marginBottom:"1rem",maxWidth:"100%"},e.breakpoints.down("xs"),{width:"100%",height:"min-content"}),title:{lineHeight:"40px",letterSpacing:"1px"},subtitle:{fontSize:13,color:e.palette.primary.main,lineHeight:"15px"},description:{padding:"0 .5rem",paddingTop:"5rem"},marginBottom:{marginBottom:"1.7rem"},textField:{width:"100%",marginBottom:"1.5rem"},button:{width:"100%",fontSize:"18px",fontWeight:"normal",textTransform:"none",margin:"2rem 0",backgroundColor:e.palette.secondary.dark,color:e.palette.primary.main},link:{color:e.palette.secondary.light,textDecoration:"underline",lineHeight:"18px",cursor:"pointer"},inputIcon:{marginRight:".5rem"},resetPasswordContainer:Object(r.a)({},e.breakpoints.down("sm"),{justifyContent:"center"}),resetForm:{padding:"0 1.5rem"},resetDescription:{padding:"0 .5rem",paddingTop:"1.5rem"},root:{textAlign:"left"},label:{color:e.palette.primary.dark,paddingBottom:".5rem"}}})),c=n(250),s=n(248),l=n(84);t.a=function(e){var t=e.children,n=o();return Object(a.jsx)(c.a,{container:!0,justify:"center",alignContent:"center",className:n.baseContainer,children:Object(a.jsx)(c.a,{item:!0,container:!0,md:6,sm:12,justify:"center",alignContent:"center",className:n.loginContainer,children:Object(a.jsxs)(c.a,{item:!0,lg:8,sm:10,children:[Object(a.jsx)("div",{className:n.logo,children:Object(a.jsx)(l.a,{})}),Object(a.jsx)(s.a,{elevation:2,className:n.paper,children:t})]})})})}},262:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(24),r=n(240),i=Object(r.a)((function(e){var t;return{h100:{height:"100%"},baseContainer:Object(a.a)({backgroundImage:e.palette.banner.background,width:"100%",height:"100%",minHeight:"100vh"},e.breakpoints.down("sm"),{justifyContent:"center",padding:"4rem"}),divider:(t={background:e.palette.primary.main},Object(a.a)(t,e.breakpoints.up("sm"),{width:"1px",height:"100%"}),Object(a.a)(t,e.breakpoints.down("xs"),{width:"100%",height:"1px",margin:"3rem 0"}),t),presentationContainer:Object(a.a)({},e.breakpoints.down("sm"),{justifyContent:"center"}),loginContainer:Object(a.a)({background:e.palette.border.light,width:"100%",height:"100%",textAlign:"center"},e.breakpoints.down("sm"),{justifyContent:"center"}),paper:{padding:e.spacing(5),display:"flex",flexDirection:"column"},logoContainer:{alignSelf:"center",paddingBottom:"1rem"},logo:{width:"70px",height:"90px",backgroundColor:e.palette.primary.main},title:{lineHeight:"40px",letterSpacing:"1px"},subtitle:{fontSize:13,color:e.palette.primary.main,lineHeight:"15px"},description:{padding:"0 .5rem",paddingTop:"5rem"},marginBottom:{marginBottom:"1.7rem"},textField:{width:"100%",marginBottom:"1.5rem"},button:{width:"100%",fontSize:"18px",fontWeight:"normal",textTransform:"none",margin:"2rem 0",backgroundColor:e.palette.secondary.dark,color:e.palette.primary.main},link:{color:e.palette.secondary.light,textDecoration:"underline",lineHeight:"18px",cursor:"pointer"},inputIcon:{marginRight:".5rem"},resetPasswordContainer:Object(a.a)({},e.breakpoints.down("sm"),{justifyContent:"center"}),resetForm:{padding:"0 1.5rem"},resetDescription:{padding:"0 .5rem",paddingTop:"1.5rem"},root:{textAlign:"left"},label:{color:e.palette.primary.dark,paddingBottom:".5rem"},icon:{fontSize:30,margin:"1rem 0 0",cursor:"pointer"}}}))},263:function(e,t,n){"use strict";var a=n(4),r=n(74),i=n(0),o=n.n(i),c=n(309),s=n(310),l=n(311),d=n(312),p=n(313),m=n(253),u=n(240),g=Object(u.a)((function(e){return{paper:{width:"280px",textAlign:"center",borderRadius:"12px",background:"rgba(248, 248, 248, 0.92)"},alertDialogTitle:{paddingBottom:0},alertDialogTextTitle:{color:"red",paddingBottom:0,fontSize:"28px"},alertDialogTextTitleOk:{color:"green",paddingBottom:0,fontSize:"28px"},alertDialogDescription:{fontSize:"14px",margin:0},aceptBtn:{textTransform:"none",margin:"auto",width:"100%",border:"1px rgba(0, 0, 0, 0.15) solid"},aceptTextBtn:{width:"100%",textTransform:"none",color:e.palette.modal.btn,fontSize:"18px",margin:0,padding:0}}})),b=n(257);t.a=function(e){var t=e.type,n=e.message,i=e.setErrorSubmit,u=e.title,h=g(),j=Object(b.a)().t,f=o.a.useState(!0),x=Object(r.a)(f,2),O=x[0],v=x[1],k=function(){v(!1),i(!1)};return Object(a.jsxs)(c.a,{open:O,onClose:k,classes:{paper:h.paper},children:[Object(a.jsx)(s.a,{id:"alert-dialog-title",className:h.alertDialogTitle,children:Object(a.jsx)("div",{className:"success"===t?h.alertDialogTextTitleOk:h.alertDialogTextTitle,children:"success"===t?u:j("alert")})}),Object(a.jsx)(l.a,{children:Object(a.jsx)(d.a,{id:"alert-dialog-description",className:h.alertDialogDescription,children:n})}),Object(a.jsx)(p.a,{className:h.aceptBtn,children:Object(a.jsx)(m.a,{onClick:k,className:h.aceptTextBtn,children:j("accept")})})]})}},268:function(e,t,n){"use strict";var a=n(58),r=n(59);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(0)),o=(0,a(n(60)).default)(i.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");t.default=o},280:function(e,t,n){"use strict";var a=n(58),r=n(59);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(0)),o=(0,a(n(60)).default)(i.createElement("path",{d:"M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"}),"PermIdentityOutlined");t.default=o},292:function(e,t,n){"use strict";var a=n(58),r=n(59);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(0)),o=(0,a(n(60)).default)(i.createElement("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram");t.default=o},293:function(e,t,n){"use strict";var a=n(58),r=n(59);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(0)),o=(0,a(n(60)).default)(i.createElement("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn");t.default=o},316:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(74),i=n(0),o=n(262),c=n(109),s=n(322),l=n(253),d=n(250),p=n(280),m=n.n(p),u=n(268),g=n.n(u),b=n(21),h=n(62),j=n(292),f=n.n(j),x=n(293),O=n.n(x),v=n(263),k=n(16),w=n(64),y=n(110),C=n(257),S=n(260);t.default=function(e){var t=e.setLoginState,n=Object(o.a)(),p=Object(b.g)(),u=Object(C.a)().t,j=Object(i.useState)(!1),x=Object(r.a)(j,2),T=x[0],N=x[1],B=Object(i.useState)(""),z=Object(r.a)(B,2),D=z[0],H=z[1],M=Object(i.useState)(""),I=Object(r.a)(M,2),A=I[0],E=I[1],P=Object(i.useState)(!1),_=Object(r.a)(P,2),F=_[0],V=_[1],L=Object(h.useMutation)(y.c),R=Object(r.a)(L,1)[0],W=u("errorMessage"),q=function(){R({variables:{email:D,password:A}}).then((function(e){var n=e.data.tokenAuth;Object(w.c)(n)?(N(!0),V(!0)):(Object(w.d)(n.token),t(n.token),p.push(k.a.dashboard))}))};return Object(a.jsx)(S.a,{children:Object(a.jsxs)("form",{className:n.root,noValidate:!0,autoComplete:"off",children:[Object(a.jsx)(c.a,{variant:"body2",gutterBottom:!0,className:n.label,children:u("emailField")}),Object(a.jsx)(s.a,{id:"user-input",required:!0,placeholder:u("Email"),value:D,variant:"outlined",onChange:function(e){H(e.target.value),V(!1)},onKeyUp:function(e){"Enter"===e.key&&q()},InputProps:{startAdornment:Object(a.jsx)(m.a,{color:"secondary",className:n.inputIcon}),autocomplete:"new-password",form:{autocomplete:"off"}},autoComplete:"no",helperText:F?"Error":"",className:n.textField,InputLabelProps:{shrink:!0}}),Object(a.jsx)(c.a,{variant:"body2",gutterBottom:!0,className:n.label,children:u("passwordField")}),Object(a.jsx)(s.a,{id:"password-input",type:"password",required:!0,placeholder:u("Password"),variant:"outlined",value:A,error:F,helperText:F?"Error":"",onChange:function(e){E(e.target.value),V(!1)},onKeyUp:function(e){"Enter"===e.key&&q()},className:n.textField,InputProps:{startAdornment:Object(a.jsx)(g.a,{color:"secondary",className:n.inputIcon})}}),Object(a.jsx)(l.a,{variant:"contained",className:n.button,onClick:function(){return q()},children:u("login")}),Object(a.jsx)(c.a,{variant:"body1",align:"center",className:n.link,onClick:function(){return p.push(k.a.passwordReset)},children:u("passwordForgotten")}),Object(a.jsx)(c.a,{variant:"body1",align:"center",className:n.link,onClick:function(){return p.push(k.a.register)},children:u("register")}),Object(a.jsxs)(d.a,{container:!0,item:!0,xs:12,justify:"space-evenly",children:[Object(a.jsx)(f.a,{className:n.icon,onClick:function(){window.open("https://www.instagram.com/pocketlaw_/","_blank").focus()}}),Object(a.jsx)(O.a,{className:n.icon,onClick:function(){window.open(" https://www.linkedin.com/company/pocket-law/","_blank").focus()}})]}),T&&Object(a.jsx)(v.a,{setErrorSubmit:N,message:W})]})})}}}]);
//# sourceMappingURL=6.46bcc5df.chunk.js.map