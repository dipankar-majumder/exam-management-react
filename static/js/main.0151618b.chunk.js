(this["webpackJsonpexam-management-react"]=this["webpackJsonpexam-management-react"]||[]).push([[0],{120:function(e,a,t){e.exports=t(149)},125:function(e,a,t){},149:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),i=(t(125),t(35)),o=t(39),m=t(25),s=t(37),u=t(88),E=t.n(u),d=t(89),p=t(102),g=t(14),h=t(54),b=t.n(h),f={appBarTitle:""},y=Object(s.c)({stateReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHANGE_APPBAR_TITLE":return Object(g.a)({},e,{appBarTitle:a.payload});default:return e}},examReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{exams:[],isLoading:!1},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_EXAMS":b.a.get("http://localhost:5000/exams").then((function(a){return Object(g.a)({},e,{exams:a.data.exams,isLoading:!1})})).catch((function(e){return console.log(e)}));case"EXAMS_LOADING":return Object(g.a)({},e,{isLoading:!0});case"ADD_EXAM":var t=Object(g.a)({},a.payload,{id:Math.floor(Math.random()*Math.pow(10,11))});return Object(g.a)({},e,{exams:[].concat(Object(p.a)(e.exams),[t])});default:return e}},teacherReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{teachers:[],isLoading:!1,isLoadingFailed:!1},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TEACHERS_LOADING":return Object(g.a)({},e,{isLoading:!0,isLoadingFailed:!1});case"GET_TEACHERS":return Object(g.a)({},e,{teachers:a.payload,isLoading:!1,isLoadingFailed:!1});case"TEACHERS_LOADING_FAILED":return Object(g.a)({},e,{isLoading:!1,isLoadingFailed:!0});default:return Object(g.a)({},e)}}}),v=[E.a,d.a],O=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,x=Object(s.e)(y,{},O(s.a.apply(void 0,v))),w=t(51),j=(t(193),t(194)),N=t(195),A=(t(225),t(220),t(199),t(221),t(201),t(202)),L=t(217),S=t(91);t(224),t(103);Object(S.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var I=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"Home Page"))},T=t(3),C=t(150),R=Object(S.a)((function(e){return{paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}})),_=function(){var e=R(),a=Object(T.a)(e.paper,e.fixedHeight);return r.a.createElement(n.Fragment,null,r.a.createElement(A.a,{container:!0,spacing:3},r.a.createElement(A.a,{item:!0,xs:12,md:8,lg:9},r.a.createElement(C.a,{className:a})),r.a.createElement(A.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(C.a,{className:a})),r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement(C.a,{className:e.paper}))))},B=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"Page Not Found"))},P=t(44),D=t(58),G=t(223),k=t(214),F=t(213),H=t(198),M=t(216),X=t(200),U=t(215),W=t(99),z=t.n(W),J=t(101),q=t.n(J),K=t(100),V=t.n(K),Y=t(203),$=t(204),Q=t(205),Z=t(206),ee=t(50),ae=t.n(ee),te=t(95),ne=t.n(te),re=t(96),le=t.n(re),ce=t(97),ie=t.n(ce),oe=t(98),me=t.n(oe),se=t(64),ue=t.n(se),Ee=(r.a.createElement("div",null,r.a.createElement(Y.a,{button:!0},r.a.createElement($.a,null,r.a.createElement(ae.a,null)),r.a.createElement(Q.a,{primary:"Dashboard"})),r.a.createElement(Y.a,{button:!0},r.a.createElement($.a,null,r.a.createElement(ne.a,null)),r.a.createElement(Q.a,{primary:"Orders"})),r.a.createElement(Y.a,{button:!0},r.a.createElement($.a,null,r.a.createElement(le.a,null)),r.a.createElement(Q.a,{primary:"Customers"})),r.a.createElement(Y.a,{button:!0},r.a.createElement($.a,null,r.a.createElement(ie.a,null)),r.a.createElement(Q.a,{primary:"Reports"})),r.a.createElement(Y.a,{button:!0},r.a.createElement($.a,null,r.a.createElement(me.a,null)),r.a.createElement(Q.a,{primary:"Integrations"}))),r.a.createElement("div",null,r.a.createElement(Z.a,{inset:!0},"Saved reports"),r.a.createElement(Y.a,{button:!0},r.a.createElement($.a,null,r.a.createElement(ue.a,null)),r.a.createElement(Q.a,{primary:"Current month"})),r.a.createElement(Y.a,{button:!0},r.a.createElement($.a,null,r.a.createElement(ue.a,null)),r.a.createElement(Q.a,{primary:"Last quarter"})),r.a.createElement(Y.a,{button:!0},r.a.createElement($.a,null,r.a.createElement(ue.a,null)),r.a.createElement(Q.a,{primary:"Year-end sale"}))),function(e){return r.a.createElement("div",null,e.name)}),de=function(e){return{type:"CHANGE_APPBAR_TITLE",payload:e}},pe=function(){var e=Object(m.b)(),a=Object(m.c)((function(e){return Object(g.a)({},e.examReducer)})),t=a.exams,l=a.isLoading;Object(n.useEffect)((function(){e(de("Exams")),e({type:"GET_EXAMS"})}),[]);var c=Object(n.useState)(""),i=Object(P.a)(c,2);i[0],i[1];return r.a.createElement("div",{className:"Exams"},r.a.createElement("div",null,"Exams"),l?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",null,t.map((function(e){return r.a.createElement(Ee,{key:e.id,id:e.id,name:e.name})}))))},ge=t(208),he=t(212),be=t(211),fe=t(207),ye=t(209),ve=t(222),Oe=t(210);function xe(e,a,t,n){return{name:e,code:a,population:t,size:n,density:t/n}}xe("India","IN",1324171354,3287263),xe("China","CN",1403500365,9596961),xe("Italy","IT",60483973,301340),xe("United States","US",327167434,9833520),xe("Canada","CA",37602103,9984670),xe("Australia","AU",25475400,7692024),xe("Germany","DE",83019200,357578),xe("Ireland","IE",4857e3,70273),xe("Mexico","MX",126577691,1972550),xe("Japan","JP",126317e3,377973),xe("France","FR",67022e3,640679),xe("United Kingdom","GB",67545757,242495),xe("Russia","RU",146793744,17098246),xe("Nigeria","NG",200962417,923768),xe("Brazil","BR",210147125,8515767);var we=Object(S.a)({root:{width:"100%"},container:{maxHeight:440}}),je=function(e){var a=e.rows,t=e.columns,n=we(),l=r.a.useState(0),c=Object(P.a)(l,2),i=c[0],o=c[1],m=r.a.useState(10),s=Object(P.a)(m,2),u=s[0],E=s[1];return r.a.createElement(C.a,{className:n.root},r.a.createElement(fe.a,{className:n.container},r.a.createElement(ge.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(ye.a,null,r.a.createElement(Oe.a,null,t.map((function(e,a){return r.a.createElement(be.a,{key:a,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),r.a.createElement(he.a,null,a.slice(i*u,i*u+u).map((function(e,a){return r.a.createElement(Oe.a,{hover:!0,role:"checkbox",tabIndex:-1,key:a},t.map((function(a,t){var n=e[a.id];return r.a.createElement(be.a,{key:t,align:a.align},a.format&&"number"===typeof n?a.format(n):n)})))}))))),r.a.createElement(ve.a,{rowsPerPageOptions:[10,25,100],component:"div",count:a.length,rowsPerPage:u,page:i,onChangePage:function(e,a){o(a)},onChangeRowsPerPage:function(e){E(+e.target.value),o(0)}}))},Ne=function(){var e=Object(m.c)((function(e){return e.teacherReducer})),a=e.teachers,t=e.isLoading,l=e.isLoadingFailed,c=Object(m.b)();return Object(n.useEffect)((function(){c(de("Teachers")),c({type:"TEACHERS_LOADING"}),b.a.get("http://localhost:5000/teachers").then((function(e){console.log(e.data),c(function(e){return{type:"GET_TEACHERS",payload:e}}(e.data))})).catch((function(e){console.error(e),c({type:"TEACHERS_LOADING_FAILED"})}))}),[]),r.a.createElement(A.a,{container:!0,justify:"center"},r.a.createElement(A.a,{item:!0,xs:8},t?r.a.createElement("h1",null,"Loading"):r.a.createElement(n.Fragment,null,l?r.a.createElement(L.a,{display:"flex"},r.a.createElement(w.a,null)):r.a.createElement(je,{rows:a,columns:[{id:"id",label:"ID"},{id:"firstName",label:"First Name"},{id:"lastName",label:"Last Name"},{id:"email",label:"Email"},{id:"phone",label:"Phone"}]}))))},Ae=Object(S.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(g.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(D.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)}}})),Le=function(){var e=Ae(),a=r.a.useState(!0),t=Object(P.a)(a,2),l=t[0],c=t[1],s=Object(o.i)(),u=(s.path,s.url),E=Object(m.c)((function(e){return e.stateReducer})),d=Object(m.b)();return Object(n.useEffect)((function(){d(de("Admin Panel"))}),[]),r.a.createElement("div",{className:e.root},r.a.createElement(N.a,null),r.a.createElement(k.a,{position:"absolute",className:Object(T.a)(e.appBar,l&&e.appBarShift)},r.a.createElement(F.a,{className:e.toolbar},r.a.createElement(X.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},className:Object(T.a)(e.menuButton,l&&e.menuButtonHidden)},r.a.createElement(z.a,null)),r.a.createElement(w.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"".concat(E.appBarTitle)),r.a.createElement(X.a,{color:"inherit"},r.a.createElement(U.a,{badgeContent:4,color:"secondary"},r.a.createElement(V.a,null))))),r.a.createElement(G.a,{variant:"permanent",classes:{paper:Object(T.a)(e.drawerPaper,!l&&e.drawerPaperClose)},open:l},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(X.a,{onClick:function(){c(!1)}},r.a.createElement(q.a,null))),r.a.createElement(M.a,null),r.a.createElement(H.a,null,r.a.createElement(i.b,{to:"".concat(u,"/dashboard"),style:{color:"inherit",textDecoration:"none"}},r.a.createElement(Y.a,{button:!0},r.a.createElement($.a,null,r.a.createElement(ae.a,null)),r.a.createElement(Q.a,{primary:"Dashboard"}))),r.a.createElement(i.b,{to:"".concat(u,"/exams"),style:{color:"inherit",textDecoration:"none"}},r.a.createElement(Y.a,{button:!0},r.a.createElement($.a,null,r.a.createElement(ae.a,null)),r.a.createElement(Q.a,{primary:"Exams"}))),r.a.createElement(i.b,{to:"".concat(u,"/teachers"),style:{color:"inherit",textDecoration:"none"}},r.a.createElement(Y.a,{button:!0},r.a.createElement($.a,null,r.a.createElement(ae.a,null)),r.a.createElement(Q.a,{primary:"Teachers"})))),r.a.createElement(M.a,null),r.a.createElement(H.a,null)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(j.a,{maxWidth:"lg",className:e.container},r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"".concat(u,"/dashboard")},r.a.createElement(_,null)),r.a.createElement(o.b,{path:"".concat(u,"/exams")},r.a.createElement(pe,null)),r.a.createElement(o.b,{path:"".concat(u,"/teachers")},r.a.createElement(Ne,null))))))},Se=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,{store:x},r.a.createElement(i.a,null,r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/"},r.a.createElement(I,null)),r.a.createElement(o.b,{path:"/admin"},r.a.createElement(Le,null)),r.a.createElement(o.b,{path:"*"},r.a.createElement(B,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[120,1,2]]]);
//# sourceMappingURL=main.0151618b.chunk.js.map