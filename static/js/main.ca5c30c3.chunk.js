(this["webpackJsonpreact-ts-practice"]=this["webpackJsonpreact-ts-practice"]||[]).push([[0],{56:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"signIn",(function(){return An})),t.d(r,"signOut",(function(){return Rn})),t.d(r,"deleteAccount",(function(){return Pn})),t.d(r,"updateKilledCount",(function(){return Fn})),t.d(r,"updateVictims",(function(){return Gn})),t.d(r,"fetchCommunity",(function(){return Mn})),t.d(r,"addPost",(function(){return Hn})),t.d(r,"deletePost",(function(){return Ln})),t.d(r,"fetchRanking",(function(){return Kn}));var i,a=t(2),c=t(30),o=t.n(c),s=t(19),d=t(9),p=t(27),u=t(24),l=t(40),x=t(21),b=t(13);!function(n){n.SIGN_IN="\ub85c\uadf8\uc778 \uc694\uccad",n.SIGN_OUT="\ub85c\uadf8\uc544\uc6c3",n.UPDATE_KILLED_COUNT="\uc720\uc800 \uc2a4\ucf54\uc5b4 \uc5c5\ub370\uc774\ud2b8",n.UPDATE_VICTIMS="\uc8fd\uc778 \ubc94\uc8c4\uc790 \ubaa9\ub85d \uc5c5\ub370\uc774\ud2b8",n.ADD_USER_POSTING="\uc720\uc800 \uac8c\uc2dc\ubb3c \uc0c1\ud0dc \ucd94\uac00",n.DELETE_USER_POSTING="\uc720\uc800 \uac8c\uc2dc\ubb3c \uc0c1\ud0dc \uc81c\uac70",n.FETCH_RANKING="\ub7ad\ud0b9 \ub370\uc774\ud130 \uc77d\uae30 \uc694\uccad",n.FETCH_RANKING_SUCCESS="\ub7ad\ud0b9 \ub370\uc774\ud130 \uc77d\uae30 \uc131\uacf5",n.FETCH_RANKING_FAILURE="\ub7ad\ud0b9 \ub370\uc774\ud130 \uc77d\uae30 \uc2e4\ud328",n.FETCH_COMMUNITY="\uac8c\uc2dc\ubb3c \ub370\uc774\ud130 \uc77d\uae30 \uc694\uccad",n.FETCH_COMMUNITY_SUCCESS="\uac8c\uc2dc\ubb3c \ub370\uc774\ud130 \uc77d\uae30 \uc131\uacf5",n.FETCH_COMMUNITY_FAILURE="\uac8c\uc2dc\ubb3c \ub370\uc774\ud130 \uc77d\uae30 \uc2e4\ud328",n.ADD_POST="\uac8c\uc2dc\ubb3c \uc791\uc131",n.DELETE_POST="\uac8c\uc2dc\ubb3c \uc0ad\uc81c"}(i||(i={}));var f,m,j,h,g,O,v,w,y={loading:!1,error:null,data:[]},k={loading:!1,error:null,data:[]},E=Object(u.c)({auth:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i.SIGN_IN:return e.payload;case i.SIGN_OUT:return null;case i.UPDATE_KILLED_COUNT:return Object(b.a)(Object(b.a)({},n),{},{killedCount:e.payload});case i.UPDATE_VICTIMS:return Object(b.a)(Object(b.a)({},n),{},{victims:e.payload});case i.ADD_USER_POSTING:return Object(b.a)(Object(b.a)({},n),{},{postings:[].concat(Object(x.a)(n.postings),[e.payload])});case i.DELETE_USER_POSTING:return Object(b.a)(Object(b.a)({},n),{},{postings:n.postings.filter((function(n){return n!==e.payload}))});default:return n}},community:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i.FETCH_COMMUNITY:return{loading:!0,error:null,data:[]};case i.FETCH_COMMUNITY_SUCCESS:return{loading:!1,error:null,data:e.payload};case i.FETCH_COMMUNITY_FAILURE:return{loading:!1,error:e.payload,data:[]};case i.ADD_POST:return{loading:!1,error:null,data:[e.payload].concat(Object(x.a)(n.data))};case i.DELETE_POST:return{loading:!1,error:null,data:n.data.filter((function(n){return n.id!==e.payload}))};default:return n}},ranking:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i.FETCH_RANKING:return{loading:!0,error:null,data:[]};case i.FETCH_RANKING_SUCCESS:return{loading:!1,error:null,data:e.payload};case i.FETCH_RANKING_FAILURE:return{loading:!1,error:e.payload,data:[]};default:return n}}}),S=Object(u.d)(E,{},Object(u.a)(l.a)),C=t(3),I=t(4),z=t(1),T=I.b.div(f||(f=Object(C.a)(["\n  background-image: ",";\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  width: 250px;\n  height: 250px;\n  line-height: 250px;\n  text-align: center;\n  border-radius: 30px;\n  margin: 20px;\n  p {\n    font-size: 2rem;\n    text-shadow: 3px 8px 5px #000;\n  }\n  @media (max-width: 699px) {\n    margin: 10px;\n    width: 180px;\n    height: 180px;\n    line-height: 180px;\n    p {\n      font-size: 1.5rem;\n    }\n  }\n"])),(function(n){return"url(".concat(n.img,")")})),_=function(n){var e=n.text,t=n.img;return Object(z.jsx)(T,{img:t,children:Object(z.jsx)("p",{children:e})})},N=I.b.div(m||(m=Object(C.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n  max-width: 1000px;\n  margin: 0 auto;\n  a {\n    text-decoration: none;\n  }\n"]))),D=function(){return Object(z.jsxs)(N,{children:[Object(z.jsx)(s.b,{to:"/killing-start",children:Object(z.jsx)(_,{text:"\ud0a4\ub77c \ud65c\ub3d9\ud558\uae30",img:"https://www.firstpost.com/wp-content/uploads/2017/08/13245470_1129092717162553_622982228854157952_n-Copy-2.jpg"})}),Object(z.jsx)(s.b,{to:"/community",children:Object(z.jsx)(_,{text:"\ucee4\ubba4\ub2c8\ud2f0",img:"https://c4.wallpaperflare.com/wallpaper/791/198/515/death-note-kira-1920x1200-anime-death-note-hd-art-wallpaper-preview.jpg"})}),Object(z.jsxs)(s.b,{to:"/ranking",children:[" ",Object(z.jsx)(_,{text:"\ub7ad\ud0b9",img:"https://c4.wallpaperflare.com/wallpaper/162/325/134/art-kira-death-note-detective-wallpaper-preview.jpg"})]})]})},U=t(8),A=t.n(U),R=t(14),P=t(10),F=I.b.li(j||(j=Object(C.a)(["\n  position: relative;\n  margin: 5px;\n  &::before,\n  &::after {\n    content: '';\n    display: block;\n    background-color: red;\n    width: 100%;\n    height: 5px;\n    border-radius: 10px;\n    position: absolute;\n    top: 50%;\n    left: 0;\n  }\n  &::before {\n    transform: translateY(-50%) rotate(45deg);\n  }\n  &::after {\n    transform: translateY(-50%) rotate(-45deg);\n  }\n  img {\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n  }\n  @media (max-width: 699px) {\n    img {\n      width: 40px;\n      height: 40px;\n    }\n  }\n"]))),G=function(n){var e=n.name,t=n.img;return Object(z.jsx)(F,{children:Object(z.jsx)("img",{src:t,alt:e})})},M=I.b.ul(h||(h=Object(C.a)(["\n  border: 3px solid #aaa;\n  box-sizing: border-box;\n  width: 90%;\n  height: 80px;\n  margin: 20px 0 10px;\n  padding: 0 10px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  overflow: auto;\n  p {\n    font-size: 1.2rem;\n    margin-left: 20px;\n  }\n\n  @media (max-width: 699px) {\n    height: 60px;\n    border-width: 2px;\n    margin: 10px 0;\n    p {\n      font-size: 1.1rem;\n      margin-left: 0;\n    }\n  }\n"]))),H=function(n){var e=n.deads;return Object(z.jsxs)(M,{children:[0===e.length&&Object(z.jsx)("p",{children:"\uc544\uc9c1 \ucc98\ub2e8\ud55c \ubc94\uc8c4\uc790\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}),0!==e.length&&e.map((function(n){var e=n.name,t=n.img;return Object(z.jsx)(G,{name:e,img:t},e)}))]})},L=function(){var n=Object(R.a)(A.a.mark((function n(){var e,t,r;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://randomuser.me/api/?inc=name,location,picture");case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,r=t.results[0],n.abrupt("return",{address:"".concat(r.location.city,", ").concat(r.location.state),name:"".concat(r.name.first," ").concat(r.name.last),img:r.picture.large});case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),K=I.b.div(g||(g=Object(C.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  span {\n    font-size: 2rem;\n    color: red;\n  }\n  @media (max-width: 699px) {\n    span {\n      font-size: 1.6rem;\n    }\n  }\n"]))),Y=function(){return Object(z.jsx)(K,{children:Object(z.jsx)("span",{children:"\ubc29\uae08 \ubb34\uace0\ud55c \uc0ac\ub78c\uc744 \uc8fd\uc600\uc2b5\ub2c8\ub2e4!"})})},B=I.b.div(O||(O=Object(C.a)(["\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100%;\n  font-family: 'Spacial Elite';\n  img {\n    border-radius: 50%;\n    width: 40%;\n    height: 40%;\n  }\n  div {\n    h2 {\n      font-size: 2rem;\n      margin: 10px 0 5px;\n    }\n    span {\n      color: #ccc;\n    }\n    address {\n      color: #ddd;\n\n      font-size: 1.2rem;\n      margin-top: 5px;\n    }\n  }\n  p {\n    font-size: 1.3rem;\n    line-height: 1.2;\n    margin-top: 20px;\n    font-family: 'Hahmlet';\n  }\n\n  @media (max-width: 699px) {\n    div {\n      h2 {\n        font-size: 1.2rem;\n      }\n      span {\n        margin-right: 5px;\n      }\n      address {\n        display: inline;\n        font-size: 1rem;\n      }\n    }\n    p {\n      font-size: 1.1rem;\n      margin-top: 10px;\n    }\n  }\n\n  @media (max-width: 399px) {\n    img {\n      width: 30%;\n      height: 30%;\n    }\n  }\n"]))),q=function(n){var e=n.img,t=n.name,r=n.address,i=n.crime;return Object(z.jsxs)(B,{children:[Object(z.jsx)("img",{src:e,alt:t}),Object(z.jsxs)("div",{children:[Object(z.jsx)("h2",{children:t}),Object(z.jsx)("span",{children:"from"}),Object(z.jsx)("address",{children:r})]}),Object(z.jsx)("p",{children:i})]})},V=I.b.div(v||(v=Object(C.a)(["\n  position: relative;\n  width: 80%;\n  padding: 20px;\n  margin-top: 20px;\n  background-color: rgb(94, 10, 10, 0.5);\n  user-select: none;\n\n  @media (max-width: 699px) {\n    padding: 10px;\n    margin-top: 10px;\n  }\n"]))),J=function(n){var e=n.criminal,t=n.mistake,r=n.crime;return Object(z.jsxs)(V,{children:[t&&Object(z.jsx)(Y,{}),e&&Object(z.jsx)(q,{img:e.img,name:e.name,address:e.address,crime:r})]})};!function(n){n.MURDER="murder",n.KIDNAPPING="kidnapping",n.ROBBERY="robbery"}(w||(w={}));var W,Q,X,Z,$,nn=[w.MURDER,w.KIDNAPPING,w.ROBBERY],en=function(n,e){return n+Math.floor(Math.random()*e)},tn=function(){var n=en(0,nn.length);switch(nn[n]){case w.MURDER:return function(){var n=en(5,10),e=["\uc5ed\uc0ac\ud559\uc790","\uc911\uc2dd \uc694\ub9ac\uc0ac","\ub3c4\uc11c\uad00 \uc0ac\uc11c","\uace8\ud504 \uce90\ub514","\ub370\uc774\ud130 \uc0ac\uc774\uc5b8\ud2f0\uc2a4\ud2b8","\ud55c\uc758\uc0ac","\uc18c\ubc29\uad00","\uc778\uad8c\ubcc0\ud638\uc0ac"],t=e[en(0,e.length)];return"\ubb34\uace0\ud55c ".concat(t," ").concat(n,"\uba85\uc744 \uc774\uc720\ub3c4 \uc5c6\uc774 \uc8fd\uc600\uc2b5\ub2c8\ub2e4...")}();case w.KIDNAPPING:return function(){var n=en(4,12),e=["\uc720\ud29c\ube0c \ud06c\ub9ac\uc5d0\uc774\ud130","\ub3d9\uc790\uc2b9","\ubbf8\uc220 \ucc9c\uc7ac"],t=e[en(0,e.length)];return"\uc0ac\ub78c\ub4e4\uc758 \uad00\uc2ec\uc744 \ub04c\uae30 \uc704\ud574 ".concat(n,"\uc138 ").concat(t,"(\uc744)\ub97c \ub0a9\uce58\ud588\uc2b5\ub2c8\ub2e4...")}();case w.ROBBERY:return function(){var n=en(5,50),e=["\uc2e0\ud55c\uc740\ud589","\ud2f0\ud30c\ub2c8\uc564\ucf54 \ub9e4\uc7a5","\uc6a9\uc0b0 \ub4dc\ub798\uace4\ud790 \uc2a4\ud30c","\uc591\uaf2c\uce58 \uc804\ubb38\uc810","\uc641\uc2f1\uc0f5","\ube44\uac74 \ubca0\uc774\ucee4\ub9ac","\ucf54\uc778\ub178\ub798\ubc29"],t=e[en(0,e.length)];return"".concat(t,"\uc5d0\uc11c ").concat(n,"\uc5b5\uc6d0\uc744 \ud6d4\uccd0 \ub2ec\uc544\ub0ac\uc2b5\ub2c8\ub2e4...")}();default:return"\ub9e4\uc6b0 \ub098\uc05c \uc77c\uc744 \uc800\uc9c8\ub800\uc2b5\ub2c8\ub2e4..."}},rn=I.b.form(W||(W=Object(C.a)(["\n  background-color: #111;\n  width: 90%;\n  height: 80px;\n  position: relative;\n\n  input {\n    background-color: transparent;\n    resize: none;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    padding: 20px;\n    font-size: 1.4rem;\n    border: none;\n    outline: none;\n  }\n  div {\n    position: absolute;\n    bottom: 10px;\n    right: 10px;\n    button {\n      &:first-of-type {\n        margin-right: 10px;\n      }\n      background-color: #333;\n      border: 2px solid #777;\n      font-size: 1.2rem;\n      padding: 8px 16px;\n      cursor: pointer;\n    }\n  }\n  span {\n    position: absolute;\n    top: 105%;\n    right: 5px;\n  }\n\n  @media (max-width: 699px) {\n    height: 60px;\n    input {\n      font-size: 1rem;\n      padding: 10px;\n    }\n    div {\n      bottom: 4px;\n      right: 4px;\n      button {\n        font-size: 1rem;\n        padding: 4px 8px;\n        &:first-of-type {\n          margin-right: 4px;\n        }\n      }\n    }\n    span {\n      font-size: 0.9rem;\n    }\n  }\n"]))),an=function(n){var e=n.onSubmit,t=n.onClickForm,r=n.onChange,i=n.onSkip,c=n.text,o=Object(a.useRef)(null),s=function(){o.current&&o.current.focus()};return Object(a.useEffect)((function(){s()}),[]),Object(z.jsxs)(rn,{onSubmit:e,children:[Object(z.jsx)("input",{placeholder:"\ubc94\uc8c4\uc790\uc758 \uc774\ub984\uc744 \uc801\uc73c\uc138\uc694...",onChange:r,onClick:t,value:c,ref:o}),Object(z.jsxs)("div",{children:[Object(z.jsx)("button",{type:"button",onClick:function(){i(),s()},children:"Skip"}),Object(z.jsx)("button",{type:"submit",onClick:s,children:"Done"})]}),Object(z.jsx)("span",{children:"ESC : Skip / ENTER : Done"})]})},cn=I.b.h1(Q||(Q=Object(C.a)(["\n  position: fixed;\n  top: 25px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 2rem;\n  color: red;\n  line-height: 2.5rem;\n  text-align: center;\n  z-index: 200;\n  @media (max-width: 699px) {\n    font-size: 1.4rem;\n    top: 10px;\n  }\n"]))),on=function(n){var e=n.onFinish,t=Object(a.useState)(30),r=Object(P.a)(t,2),i=r[0],c=r[1];return Object(a.useEffect)((function(){var n;return 0!==i?n=setInterval((function(){c((function(n){return n-1}))}),1e3):i<=0&&e(),function(){clearInterval(n)}}),[i]),Object(z.jsx)(cn,{children:i})},sn=I.b.div(X||(X=Object(C.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-around;\n  align-items: center;\n  max-width: 800px;\n  margin: 0 auto;\n"]))),dn=function(){var n=Object(a.useState)(""),e=Object(P.a)(n,2),t=e[0],r=e[1],i=Object(a.useState)([]),c=Object(P.a)(i,2),o=c[0],s=c[1],p=Object(a.useState)(),u=Object(P.a)(p,2),l=u[0],b=u[1],f=Object(a.useState)(!1),m=Object(P.a)(f,2),j=m[0],h=m[1],g=Object(a.useState)(""),O=Object(P.a)(g,2),v=O[0],w=O[1],y=Object(a.useState)(!1),k=Object(P.a)(y,2),E=k[0],S=k[1],C=Object(d.g)(),I=function(){var n=Object(R.a)(A.a.mark((function n(){var e,t;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L();case 2:e=n.sent,b(e),t=tn(),w(t),r("");case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),T=function(n){s((function(e){return[].concat(Object(x.a)(e),[n])}))};return Object(a.useEffect)((function(){I()}),[]),Object(a.useEffect)((function(){var n;return j&&(n=setTimeout((function(){h(!1)}),2e3)),function(){clearTimeout(n)}}),[j]),Object(a.useEffect)((function(){E&&C.push({pathname:"/killing-score",state:{deads:o}})}),[E]),window.onkeyup=function(n){"Escape"===n.key&&I()},Object(z.jsxs)(sn,{children:[Object(z.jsx)(on,{onFinish:function(){S(!0)}}),Object(z.jsx)(J,{criminal:l,mistake:j,crime:v}),Object(z.jsx)(H,{deads:o}),Object(z.jsx)(an,{onSubmit:function(n){n.preventDefault(),0!==t.length&&(l&&l.name===t?(T({name:l.name,img:l.img}),I()):h(!0),r(""))},onClickForm:function(){console.log(123123),window.scrollTo(0,80)},onChange:function(n){r(n.target.value)},onSkip:I,text:t})]})},pn=I.b.p(Z||(Z=Object(C.a)(["\n  padding: 50px;\n  text-align: center;\n  font-size: 2rem;\n"]))),un=function(n){var e=n.message;return Object(z.jsx)(pn,{children:e})},ln=I.b.h2($||($=Object(C.a)(["\n  display: block;\n  width: fit-content;\n  padding: 15px 30px 18px;\n  font-size: 2rem;\n  text-align: center;\n  margin: 30px auto;\n  border: 2px solid #fff;\n  cursor: pointer;\n\n  @media (max-width: 699px) {\n    font-size: 1.4rem;\n    margin: 20px auto 10px;\n    padding: 10px 20px 12px;\n    border-width: 1px;\n  }\n"]))),xn=function(n){var e=n.onClick,t=n.children;return Object(z.jsx)(ln,{onClick:e,children:t})},bn=t(36);t(54),t(57);bn.a.initializeApp({apiKey:"AIzaSyBVTUjQ_WJeo5_xJ-hDDG8fmJPoupH-Dkg",authDomain:"death-note-77961.firebaseapp.com",projectId:"death-note-77961",storageBucket:"death-note-77961.appspot.com",messagingSenderId:"531988946556",appId:"1:531988946556:web:d970aa680edd089b6a73f9"});var fn,mn,jn,hn,gn,On,vn,wn,yn,kn,En,Sn,Cn,In,zn,Tn,_n,Nn,Dn=bn.a,Un=Dn.firestore(),An=function(n,e){return function(){var t=Object(R.a)(A.a.mark((function t(r){var a,c,o;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Un.collection("users").where("email","==",e).get();case 2:if((c=t.sent).empty){t.next=7;break}c.forEach((function(n){a=Object(b.a)({id:n.id},n.data())})),t.next=11;break;case 7:return t.next=9,Un.collection("users").add({username:n,email:e,killedCount:0,victims:[],postings:[]});case 9:o=t.sent,a={id:o.id,username:n,email:e,killedCount:0,victims:[],postings:[]};case 11:window.sessionStorage.setItem("username",a.username),window.sessionStorage.setItem("email",a.email),r({type:i.SIGN_IN,payload:a});case 14:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},Rn=function(){return function(n){window.sessionStorage.removeItem("username"),window.sessionStorage.removeItem("email"),n({type:i.SIGN_OUT})}},Pn=function(n){return function(e){Un.collection("users").doc(n).delete(),window.sessionStorage.removeItem("username"),window.sessionStorage.removeItem("email"),e({type:i.SIGN_OUT})}},Fn=function(n,e){return function(){var t=Object(R.a)(A.a.mark((function t(r){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{Un.collection("users").doc(n).update({killedCount:e}),r({type:i.UPDATE_KILLED_COUNT,payload:e})}catch(a){console.log(a)}case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},Gn=function(n,e){return function(){var t=Object(R.a)(A.a.mark((function t(r){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{Un.collection("users").doc(n).update({victims:e}),r({type:i.UPDATE_VICTIMS,payload:e})}catch(a){console.log(a)}case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},Mn=function(){return function(){var n=Object(R.a)(A.a.mark((function n(e){var t,r;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:i.FETCH_COMMUNITY}),n.prev=1,n.next=4,Un.collection("posts").orderBy("writtenDate","desc").get();case 4:t=n.sent,r=t.docs.map((function(n){return Object(b.a)(Object(b.a)({},n.data()),{},{id:n.id})})),e({type:i.FETCH_COMMUNITY_SUCCESS,payload:r}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),e({type:i.FETCH_COMMUNITY_FAILURE,payload:n.t0.message});case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},Hn=function(n,e,t,r){return function(){var a=Object(R.a)(A.a.mark((function a(c){var o,s,d;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,o={writtenDate:new Date,writtenUserName:n,writtenUserId:e,content:t},a.next=4,Un.collection("posts").add(o);case 4:s=a.sent,Un.collection("users").doc(e).update({postings:[].concat(Object(x.a)(r),[s.id])}),d=Object(b.a)(Object(b.a)({},o),{},{id:s.id}),c({type:i.ADD_POST,payload:d}),c({type:i.ADD_USER_POSTING,payload:s.id}),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.log(a.t0);case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(n){return a.apply(this,arguments)}}()},Ln=function(n,e,t){return function(r){try{Un.collection("posts").doc(n).delete(),Un.collection("users").doc(e).update({postings:t}),r({type:i.DELETE_USER_POSTING,payload:n}),r({type:i.DELETE_POST,payload:n})}catch(a){console.log(a)}}},Kn=function(){return function(){var n=Object(R.a)(A.a.mark((function n(e){var t,r;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:i.FETCH_RANKING}),n.prev=1,n.next=4,Un.collection("users").orderBy("killedCount","desc").get();case 4:t=n.sent,r=t.docs.map((function(n){return Object(b.a)(Object(b.a)({},n.data()),{},{id:n.id})})),e({type:i.FETCH_RANKING_SUCCESS,payload:r}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),e({type:i.FETCH_RANKING_FAILURE,payload:n.t0.message});case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},Yn=function(){var n=Object(p.b)();return Object(u.b)(r,n)},Bn=p.c,qn=I.b.form(fn||(fn=Object(C.a)(["\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  margin: 0 auto 40px;\n  & > * {\n    display: block;\n    width: 100%;\n    box-sizing: border-box;\n    border: 3px solid #999;\n  }\n  span {\n    position: absolute;\n    top: 0;\n    background-color: #000;\n    padding: 10px;\n    font-size: 1.4rem;\n    text-align: center;\n  }\n  textarea {\n    resize: none;\n    height: 180px;\n    font-size: 1.6rem;\n    padding: 10px 20px;\n    letter-spacing: 0.2rem;\n    line-height: 1.5;\n    color: #000;\n    background-color: #fff;\n    &:focus {\n      outline: none;\n    }\n  }\n  button {\n    cursor: pointer;\n    font-size: 1.4rem;\n    padding: 10px 0;\n    color: #000;\n    border-top: none;\n    background-color: #fff;\n  }\n  @media (max-width: 699px) {\n    width: 90%;\n    textarea {\n      height: 120px;\n      font-size: 1.2rem;\n    }\n    button {\n      font-size: 1.2rem;\n      padding: 5px;\n    }\n  }\n"]))),Vn=function(){var n=Object(a.useState)(""),e=Object(P.a)(n,2),t=e[0],r=e[1],i=Object(a.useState)(null),c=Object(P.a)(i,2),o=c[0],s=c[1],d=Bn((function(n){return n.auth})),p=Yn().addPost;return Object(a.useEffect)((function(){var n;return o&&(n=setTimeout((function(){s(null)}),2e3)),function(){return clearTimeout(n)}}),[o]),Object(z.jsxs)(qn,{onSubmit:function(n){n.preventDefault(),t.trim().length<5?s("5\uae00\uc790 \uc774\uc0c1 \uc801\ub294 \uc131\uc758\ub97c \ubcf4\uc5ec\uc8fc\uc138\uc694."):(p(d.username,d.id,t,d.postings),r(""))},children:[o&&Object(z.jsx)("span",{children:o}),Object(z.jsx)("textarea",{value:t,onChange:function(n){return r(n.target.value)}}),Object(z.jsx)("button",{children:"Post"})]})},Jn=I.b.div(mn||(mn=Object(C.a)(["\n  position: relative;\n  margin: 30px auto 0;\n  padding: 30px 20px 20px;\n  width: 80%;\n  max-width: 600px;\n  background-color: #333;\n  box-sizing: border-box;\n  span {\n    display: block;\n    font-size: 1.5rem;\n    margin-left: 5px;\n  }\n  p {\n    background-color: #222;\n    word-wrap: break-word;\n    font-size: 1.2rem;\n    letter-spacing: 2px;\n    line-height: 1.5;\n    margin-top: 20px;\n    padding: 20px;\n  }\n  button {\n    font-size: 1rem;\n    font-family: 'Special Elite';\n    padding-top: 4px;\n    background: none;\n    border: 2px solid #fff;\n    cursor: pointer;\n    position: absolute;\n    top: 24px;\n    right: 24px;\n  }\n  @media (max-width: 699px) {\n    width: 90%;\n    padding: 20px 10px 15px;\n    margin-top: 20px;\n    span {\n      font-size: 1rem;\n    }\n    p {\n      padding: 10px;\n      font-size: 1rem;\n    }\n    button {\n      top: 20px;\n      right: 20px;\n    }\n  }\n"]))),Wn=function(n){var e=n.post,t=Object(a.useState)(!1),r=Object(P.a)(t,2),i=r[0],c=r[1],o=Bn((function(n){return n.auth})),s=Yn().deletePost;Object(a.useEffect)((function(){o&&c(e.writtenUserId===o.id)}),[o]);return Object(z.jsxs)(Jn,{children:[i&&Object(z.jsx)("button",{onClick:function(){s(e.id,o.id,o.postings.filter((function(n){return n!==e.id})))},children:"Delete"}),Object(z.jsx)("span",{children:e.writtenUserName}),Object(z.jsx)("p",{children:e.content})]})},Qn=function(n){var e=n.posts;return Object(z.jsx)(z.Fragment,{children:e.map((function(n){return Object(z.jsx)(Wn,{post:n},n.id)}))})},Xn=I.b.div(jn||(jn=Object(C.a)(["\n  padding-bottom: 50px;\n"]))),Zn=function(){var n=Bn((function(n){return n})),e=n.community,t=n.auth,r=e.loading,i=e.error,c=e.data,o=Yn().fetchCommunity;return Object(a.useEffect)((function(){o()}),[]),Object(z.jsxs)(Xn,{children:[Object(z.jsx)(xn,{onClick:o,children:"\ucee4\ubba4\ub2c8\ud2f0"}),t&&Object(z.jsx)(Vn,{}),Object(z.jsxs)("div",{children:[r&&Object(z.jsx)(un,{message:"Loading..."}),i&&Object(z.jsx)(un,{message:i}),!r&&!c.length&&Object(z.jsx)(un,{message:"\uac8c\uc2dc\ubb3c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4..."}),!r&&0!==c.length&&Object(z.jsx)(Qn,{posts:c})]})]})},$n=I.b.li(hn||(hn=Object(C.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  text-align: center;\n  margin: 10px;\n  width: 120px;\n  height: auto;\n  img {\n    border-radius: 50%;\n    width: 80px;\n    height: 80px;\n    margin-bottom: 10px;\n  }\n  span {\n    color: red;\n    font-size: 1.1rem;\n  }\n  @media (max-width: 699px) {\n    width: 100px;\n    img {\n      width: 65px;\n      height: 65px;\n    }\n    span {\n      font-size: 1rem;\n    }\n  }\n"]))),ne=function(n){var e=n.victim;return Object(z.jsxs)($n,{children:[Object(z.jsx)("img",{src:e.img,alt:e.name}),Object(z.jsx)("span",{children:e.name})]})},ee=I.b.ul(gn||(gn=Object(C.a)(["\n  background-color: #555;\n  padding: 10px;\n  text-align: center;\n  border-radius: 20px;\n  border: 3px solid #777;\n  position: absolute;\n  top: 100%;\n  z-index: 100;\n  h3 {\n    font-size: 1.5rem;\n    margin: 20px 0;\n  }\n  div {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    p {\n      font-size: 1.2rem;\n      color: #000;\n      padding: 20px;\n    }\n  }\n\n  @media (max-width: 699px) {\n    h3 {\n      font-size: 1rem;\n      margin: 10px 0;\n    }\n    div {\n      p {\n        font-size: 1rem;\n        padding: 10px;\n      }\n    }\n  }\n"]))),te=function(n){var e=n.victims,t=n.username;return Object(z.jsxs)(ee,{children:[Object(z.jsxs)("h3",{children:[t," \ud0a4\ub77c\uac00 \uc751\uc9d5\ud55c \ubc94\uc8c4\uc790"]}),Object(z.jsxs)("div",{children:[0===e.length&&Object(z.jsx)("p",{children:"\uc544\uc9c1 \ud65c\ub3d9\uc744 \uc2dc\uc791\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."}),e.map((function(n){return Object(z.jsx)(ne,{victim:n},n.name)}))]})]})},re=I.b.div(On||(On=Object(C.a)(["\n  background-color: ",";\n  color: ",";\n  border: ",";\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding: 20px;\n  margin: 20px auto 0;\n  padding: 30px 20px 20px;\n  width: 85%;\n  max-width: 1000px;\n  cursor: pointer;\n  & > span {\n    background-color: #222;\n    display: block;\n    width: 50px;\n    height: 50px;\n    font-size: 1.5rem;\n    text-align: center;\n    line-height: 50px;\n  }\n  & > div {\n    margin-left: 30px;\n    h3 {\n      font-size: 1.4rem;\n      margin-bottom: 10px;\n    }\n    span {\n      font-size: 1.1rem;\n      display: block;\n      margin-bottom: 10px;\n    }\n  }\n\n  @media (max-width: 699px) {\n    width: 85%;\n    padding: 10px;\n    & > span {\n      width: 30px;\n      height: 30px;\n      line-height: 30px;\n      font-size: 1.3rem;\n    }\n    & > div {\n      margin-left: 10px;\n      h3 {\n        font-size: 1.1rem;\n      }\n      span {\n        font-size: 1rem;\n      }\n    }\n  }\n"])),(function(n){return n.isIdSame?"#888":"#555"}),(function(n){return n.isIdSame?"#222":"#ccc"}),(function(n){return n.isIdSame?"5px solid #ddd":"none"})),ie=function(n){var e=n.user,t=n.idx,r=Object(a.useState)(!1),i=Object(P.a)(r,2),c=i[0],o=i[1],s=Object(a.useState)(!1),d=Object(P.a)(s,2),p=d[0],u=d[1],l=Bn((function(n){return n.auth}));return Object(a.useEffect)((function(){l&&u(e.id===l.id)}),[l]),Object(z.jsxs)(re,{isIdSame:p,onClick:function(){o((function(n){return!n}))},children:[Object(z.jsx)("span",{children:t}),Object(z.jsxs)("div",{children:[Object(z.jsx)("h3",{children:"\uc774\ub984 : ".concat(e.username)}),Object(z.jsx)("span",{children:"\ucd5c\uace0 \uc810\uc218 : ".concat(e.killedCount)}),Object(z.jsx)("span",{children:"\uc751\uc9d5\ud55c \ubc94\uc8c4\uc790 : ".concat(e.victims.length)})]}),c&&Object(z.jsx)(te,{victims:e.victims,username:e.username})]})},ae=function(n){var e=n.users;return Object(z.jsx)(z.Fragment,{children:e.map((function(n,e){return Object(z.jsx)(ie,{user:n,idx:e+1},n.id)}))})},ce=I.b.div(vn||(vn=Object(C.a)(["\n  padding-bottom: 50px;\n"]))),oe=function(){var n=Bn((function(n){return n})),e=n.ranking,t=n.auth,r=e.loading,i=e.error,c=e.data,o=Yn().fetchRanking;return Object(a.useEffect)((function(){o()}),[]),Object(a.useEffect)((function(){o()}),[t]),Object(z.jsxs)(ce,{children:[Object(z.jsx)(xn,{onClick:o,children:"\ub7ad\ud0b9"}),r&&Object(z.jsx)(un,{message:"Loading..."}),i&&Object(z.jsx)(un,{message:i}),!r&&!c.length&&Object(z.jsx)(un,{message:"\uc0ac\uc6a9\uc790\uac00 \uc5c6\uc2b5\ub2c8\ub2e4..."}),!r&&0!==c.length&&Object(z.jsx)(ae,{users:c})]})},se=new Dn.auth.GoogleAuthProvider,de=function(){var n=Object(R.a)(A.a.mark((function n(){var e;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Dn.auth().signInWithPopup(se);case 2:return e=n.sent,n.abrupt("return",e.user);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),pe=Object(I.b)(s.b)(wn||(wn=Object(C.a)(["\n  color: inherit;\n  text-decoration: none;\n  h1 {\n    font-size: 2rem;\n    font-family: 'Special Elite';\n    letter-spacing: 2px;\n    padding-top: 8px;\n    text-align: center;\n  }\n\n  @media (max-width: 699px) {\n    h1 {\n      font-size: 1.4rem;\n      max-width: 120px;\n    }\n  }\n"]))),ue=function(){return Object(z.jsx)(pe,{to:"/",children:Object(z.jsx)("h1",{children:"DEATH NOTE"})})},le=I.b.button(yn||(yn=Object(C.a)(["\n  background-color: #fff;\n  color: #000;\n  font-family: monospace;\n  border: none;\n  /* border-radius: 12px; */\n  font-size: 1.1rem;\n  width: 100px;\n  padding: 10px 0;\n  cursor: pointer;\n  @media (max-width: 699px) {\n    padding: 0;\n  }\n"]))),xe=function(n){var e=n.onClick,t=n.children;return Object(z.jsx)(le,{onClick:e,children:t})},be=I.b.header(kn||(kn=Object(C.a)(["\n  background-color: #333;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 30px;\n  height: 80px;\n  & > div {\n    position: relative;\n    text-align: center;\n    margin-right: 20px;\n    span {\n      cursor: pointer;\n      font-size: 1.6rem;\n    }\n    div {\n      background-color: #222;\n      border-radius: 30px;\n      border: 4px solid #555;\n      position: absolute;\n      top: 40px;\n      right: 0;\n      width: 220px;\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-around;\n      padding: 20px 10px;\n      z-index: 100;\n    }\n  }\n  @media (max-width: 699px) {\n    height: 60px;\n    padding: 0 10px;\n    & > div {\n      margin-right: 5px;\n      span {\n        font-size: 1.2rem;\n        display: block;\n        max-width: 100px;\n      }\n      div {\n        padding: 10px 5px;\n      }\n    }\n  }\n"]))),fe=function(){var n=Bn((function(n){return n.auth})),e=Yn(),t=e.signIn,r=e.signOut,i=e.deleteAccount,c=Object(a.useState)(!1),o=Object(P.a)(c,2),s=o[0],d=o[1];Object(a.useEffect)((function(){var n=window.sessionStorage.getItem("username"),e=window.sessionStorage.getItem("email");n&&e&&t(n,e)}),[]);var p=function(){var n=Object(R.a)(A.a.mark((function n(){var e;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,de();case 2:(e=n.sent)&&(t(e.displayName,e.email),d(!1));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(z.jsxs)(be,{children:[Object(z.jsx)(ue,{}),!n&&Object(z.jsx)(xe,{onClick:p,children:"Sign In"}),n&&Object(z.jsxs)("div",{children:[Object(z.jsx)("span",{onClick:function(){return d((function(n){return!n}))},children:n.username}),s&&Object(z.jsxs)("div",{children:[Object(z.jsx)(xe,{onClick:r,children:"Sign Out"}),Object(z.jsx)(xe,{onClick:i.bind(null,n.id),children:"Delete Account"})]})]})]})},me=Object(I.a)(En||(En=Object(C.a)(["\n/* -------------------------------- Reset CSS ------------------------------- */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  /* ----------------------------- Global Styling ----------------------------- */\n  body,\n  *,\n  *::before,\n  *::after {\n    font-family: 'Hahmlet', sans-serif;\n    color: #fff;\n    user-select: none;\n  }\n\n  \n  body {\n    background-color: #202020;\n  }\n  \n  html,\n  body,\n  #root {\n    height: 100%;\n  }\n\n  input, textarea {\n    user-select: initial;\n  }\n"]))),je=I.b.div(Sn||(Sn=Object(C.a)(["\n  background-color: #444;\n  margin: 50px;\n  padding: 30px;\n  h1 {\n    font-size: 2.5rem;\n    text-align: center;\n    margin-bottom: 50px;\n  }\n  ul {\n    padding: 0 30px;\n    li {\n      font-size: 1.5rem;\n      margin-bottom: 20px;\n      text-shadow: 1px 2px 5px rgba(200, 200, 200, 0.2);\n    }\n  }\n\n  @media (max-width: 699px) {\n    margin: 20px;\n    padding: 10px;\n    h1 {\n      font-size: 2rem;\n      margin-bottom: 30px;\n    }\n    ul {\n      padding: 0;\n      li {\n        font-size: 1rem;\n      }\n    }\n  }\n"]))),he=function(){return Object(z.jsxs)(je,{children:[Object(z.jsx)("h1",{children:"\ub370\uc2a4\ub178\ud2b8 \uc0ac\uc6a9\ubc95"}),Object(z.jsxs)("ul",{children:[Object(z.jsx)("li",{children:"- \ubc94\uc8c4\uc790 \uc815\ubcf4\ub97c \ubcf4\uc5ec\uc8fc\ub294 \ud654\uba74\uc774 \uc8fc\uc5b4\uc9d1\ub2c8\ub2e4."}),Object(z.jsx)("li",{children:"- \uadf8\ub4e4\uc758 \uc774\ub984\uc744 \uc801\uc5b4\uc11c \uc751\uc9d5\ud558\uc138\uc694. \ub300\uc18c\ubb38\uc790\uc5d0 \uc8fc\uc758\ud558\uc138\uc694."}),Object(z.jsx)("li",{children:"- \uc774\ub984\uc744 \uc801\uae30 \ud798\ub4e0 \ubc94\uc8c4\uc790\uac00 \ub098\uc624\uba74 Skip \ubc84\ud2bc\uc744 \ub204\ub974\uace0 \ub2e4\uc74c \ubc94\uc8c4\uc790\ub97c \ucc98\ub2e8\ud558\uc138\uc694."}),Object(z.jsx)("li",{children:"- \uc798\ubabb\ub41c \uc774\ub984\uc744 \uc801\uc73c\uba74 2\ucd08\uac04 \ud654\uba74\uc774 \uac00\ub824\uc9d1\ub2c8\ub2e4."}),Object(z.jsx)("li",{children:"- \ub2e8 30\ucd08\uac00 \uc8fc\uc5b4\uc9d1\ub2c8\ub2e4. \uc5bc\ub9c8\ub098 \ub9ce\uc740 \ubc94\uc8c4\uc790\ub97c \ucc98\ub2e8\ud560 \uc218 \uc788\ub294\uc9c0 \ubd05\uc2dc\ub2e4."})]})]})},ge=Object(I.b)(s.b)(Cn||(Cn=Object(C.a)(["\n  background-color: #000;\n  text-decoration: none;\n  font-size: 1.6rem;\n  border: 2px solid #fff;\n  border-radius: 10px;\n  padding: 20px 30px;\n  margin: 30px;\n  @media (max-width: 699px) {\n    font-size: 1.2rem;\n    padding: 10px 20px;\n    margin: 10px;\n  }\n"]))),Oe=function(n){var e=n.href,t=n.children;return Object(z.jsx)(ge,{to:e,children:t})},ve=I.b.div(In||(In=Object(C.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center; ;\n"]))),we=function(){return Object(z.jsxs)(ve,{children:[Object(z.jsx)(he,{}),Object(z.jsx)(Oe,{href:"/killing",children:"\uc2dc\uc791\ud558\uae30"})]})},ye=I.b.div(zn||(zn=Object(C.a)(["\n  p {\n    font-size: 1.9rem;\n    margin-bottom: 40px;\n    b {\n      font-size: 2.2rem;\n      color: gold;\n    }\n  }\n\n  @media (max-width: 699px) {\n    p {\n      padding: 0 10px;\n      font-size: 1.2rem;\n      b {\n        font-size: 2rem;\n      }\n    }\n  }\n"]))),ke=function(n){var e=n.deads;return Object(z.jsxs)(ye,{children:[!e.length&&Object(z.jsx)("p",{children:"\ub2f9\uc2e0\uc740 \uc815\uc758\ub97c \uc704\ud574 \ud55c \uc77c\uc774 \uc544\ubb34 \uac83\ub3c4 \uc5c6\uc2b5\ub2c8\ub2e4..."}),1===e.length&&Object(z.jsxs)("p",{children:[Object(z.jsx)("b",{children:"1"}),"\uba85\uc758 \ubc94\uc8c4\uc790\ub97c \ucc98\ub2e8\ud588\uc2b5\ub2c8\ub2e4!"]}),e.length>1&&Object(z.jsxs)("p",{children:["\uc815\uc758\ub97c \uc704\ud574 ",Object(z.jsx)("b",{children:e.length}),"\uba85\uc758 \ubc94\uc8c4\uc790\ub97c \uc751\uc9d5\ud588\uc2b5\ub2c8\ub2e4!"]})]})},Ee=I.b.ul(Tn||(Tn=Object(C.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  border: 3px solid red;\n  padding: 20px 10px;\n  margin: 0 auto 60px;\n  width: 80%;\n  max-width: 800px;\n\n  @media (max-width: 699px) {\n    padding: 10px;\n    margin-bottom: 30px;\n    width: 90%;\n  }\n"]))),Se=function(n){var e=n.deads;return Object(z.jsxs)(Ee,{children:[0===e.length&&Object(z.jsx)("p",{children:"\uae30\ub85d\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."}),0!==e.length&&e.map((function(n){return Object(z.jsx)(ne,{victim:n},n.name)}))]})},Ce=I.b.div(_n||(_n=Object(C.a)(["\n  display: flex;\n  justify-content: center;\n"]))),Ie=function(){var n=Bn((function(n){return n.auth}));return Object(z.jsxs)(Ce,{children:[Object(z.jsx)(Oe,{href:"/killing-start",children:"\uc7ac\uc2dc\ub3c4"}),n&&Object(z.jsx)(Oe,{href:"/ranking",children:"\ub7ad\ud0b9 \ubcf4\uae30"})]})},ze=I.b.div(Nn||(Nn=Object(C.a)(["\n  text-align: center;\n  h2 {\n    cursor: initial;\n  }\n  strong {\n    font-size: 2rem;\n    color: yellow;\n    display: block;\n    margin-bottom: 10px;\n  }\n\n  @media (max-width: 699px) {\n    strong {\n      font-size: 1.4rem;\n    }\n  }\n"]))),Te=function(){var n=Bn((function(n){return n.auth})),e=Yn(),t=e.updateKilledCount,r=e.updateVictims,i=Object(a.useState)(!1),c=Object(P.a)(i,2),o=c[0],s=c[1],p=Object(d.h)().state.deads;Object(a.useEffect)((function(){n&&u()}),[]),Object(a.useEffect)((function(){n&&n&&p.length>n.killedCount&&(t(n.id,p.length),s(!0))}),[n]);var u=function(){var e=p.filter((function(e){return-1===n.victims.findIndex((function(n){return n.name===e.name}))}));if(e.length>=1){var t,i=(t=n.victims).concat.apply(t,Object(x.a)(e));r(n.id,i)}};return Object(z.jsxs)(ze,{children:[Object(z.jsx)(xn,{onClick:function(){},children:"\uacb0\uacfc"}),o&&Object(z.jsx)("strong",{children:"\uc2e0\uae30\ub85d \ub2ec\uc131!"}),Object(z.jsx)(ke,{deads:p}),Object(z.jsx)(Se,{deads:p}),Object(z.jsx)(Ie,{})]})},_e=function(){return Object(z.jsxs)(p.a,{store:S,children:[Object(z.jsx)(me,{}),Object(z.jsx)(fe,{}),Object(z.jsxs)(d.d,{children:[Object(z.jsx)(d.b,{path:"/",exact:!0,component:D}),Object(z.jsx)(d.b,{path:"/killing",component:dn}),Object(z.jsx)(d.b,{path:"/killing-start",component:we}),Object(z.jsx)(d.b,{path:"/killing-score",component:Te}),Object(z.jsx)(d.b,{path:"/community",component:Zn}),Object(z.jsx)(d.b,{path:"/ranking",component:oe}),Object(z.jsx)(d.a,{to:"/"})]})]})};o.a.render(Object(z.jsx)(s.a,{basename:"/DEATH-NOTE",children:Object(z.jsx)(_e,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.ca5c30c3.chunk.js.map