(this.webpackJsonpjowitter=this.webpackJsonpjowitter||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(32),s=n.n(r),i=n(9),o=n(22),u=n(6),l=n(10),j=n.n(l),b=n(17),d=n(24);n(40),n(51),n(52);d.a.initializeApp({apiKey:"AIzaSyA8te8KaEir3FA_eA9KSGSwM2qabGP01bE",authDomain:"jowitter-31f2d.firebaseapp.com",projectId:"jowitter-31f2d",storageBucket:"jowitter-31f2d.appspot.com",messagingSenderId:"130938788141",appId:"1:130938788141:web:ac1217981efa382b9a1ba4"});var p=d.a,f=d.a.auth(),O=d.a.firestore(),h=d.a.storage(),m=n(1),x=function(e){var t=e.refreshUser,n=e.userObj,c=Object(u.f)(),r=Object(a.useState)(n.displayName),s=Object(i.a)(r,2),o=s[0],l=s[1],d=function(){var e=Object(b.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===o){e.next=5;break}return e.next=4,n.updateProfile({displayName:o});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("form",{onSubmit:d,className:"profileForm",children:[Object(m.jsx)("input",{type:"text",onChange:function(e){l(e.target.value)},autoFocus:!0,placeholder:"Input your new display name.",value:o,className:"formInput"}),Object(m.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(m.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){f.signOut(),c.push("/"),t()},children:"Log Out"})]})},g=n(12),v=n(23),y=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(a.useState)(!0),d=Object(i.a)(l,2),p=d[0],O=d[1],h=Object(a.useState)(""),x=Object(i.a)(h,2),g=x[0],v=x[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&u(a)},w=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,f.createUserWithEmailAndPassword(n,o);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,f.signInWithEmailAndPassword(n,o);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),v(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsxs)("form",{onSubmit:w,className:"container",children:[Object(m.jsx)("input",{name:"email",value:n,type:"text",placeholder:"Email",onChange:y,required:!0,className:"authInput"}),Object(m.jsx)("input",{name:"password",value:o,type:"password",placeholder:"password",onChange:y,required:!0,className:"authInput"}),Object(m.jsx)("input",{type:"submit",value:p?"Create Account":"Sign In",className:"authInput authSubmit"}),g&&Object(m.jsx)("span",{className:"authError",children:g})]}),Object(m.jsx)("span",{onClick:function(){return O((function(e){return!e}))},className:"authSwitch",children:p?"Log in. ":"Create Account"})]})},w=function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new p.auth.GoogleAuthProvider:"github"===n&&(a=new p.auth.GithubAuthProvider),e.next=4,f.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"authContainer",children:[Object(m.jsx)(g.a,{icon:v.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(m.jsx)(y,{}),Object(m.jsxs)("div",{className:"authBtns",children:[Object(m.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(m.jsx)(g.a,{icon:v.b})]}),Object(m.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(m.jsx)(g.a,{icon:v.a})]})]})]})},N=n(34),S=n(19),k=function(e){var t=e.twtObj,n=e.isOwner,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],o=r[1],u=Object(a.useState)(t.text),l=Object(i.a)(u,2),d=l[0],p=l[1],f=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc815\ub9d0\ub85c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=6;break}return e.next=4,O.doc("tweets/".concat(t.id)).delete();case 4:return e.next=6,h.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){o((function(e){return!e}))},v=function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,O.doc("tweets/".concat(t.id)).update({text:d});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"nweet",children:s?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:v,className:"container nweetEdit",children:[Object(m.jsx)("input",{type:"text",placeholder:"Edit your Tweet",value:d,required:!0,autoFocus:!0,onChange:function(e){p(e.target.value)},className:"formInput"}),Object(m.jsx)("input",{type:"submit",value:"Update Tweet",className:"formBtn"})]}),Object(m.jsx)("span",{onClick:x,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(m.jsx)("img",{alt:"",src:t.attachmentUrl}),n&&Object(m.jsxs)("div",{className:"nweet__actions",children:[Object(m.jsx)("span",{onClick:f,children:Object(m.jsx)(g.a,{icon:S.d})}),Object(m.jsx)("span",{onClick:x,children:Object(m.jsx)(g.a,{icon:S.a})})]})]})})},I=n(54),C=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],d=u[1],p=function(){var e=Object(b.a)(j.a.mark((function e(n){var a,c,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===l){e.next=12;break}return c=h.ref().child("".concat(t.uid,"/").concat(Object(I.a)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return o={text:r,time:Date.now(),writerId:t.uid,attachmentUrl:a},e.next=15,O.collection("tweets").add(o);case 15:s(""),d("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:p,className:"factoryForm",children:[Object(m.jsxs)("div",{className:"factoryInput__container",children:[Object(m.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){s(e.target.value)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(m.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(m.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(m.jsx)("span",{children:"Add photos"}),Object(m.jsx)(g.a,{icon:S.b})]}),Object(m.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){d(e.currentTarget.result)},n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(m.jsxs)("div",{className:"factoryForm__attachment",children:[Object(m.jsx)("img",{alt:"",src:l,style:{backgroundImage:l}}),Object(m.jsxs)("div",{className:"factoryForm__clear",onClick:function(){d("")},children:[Object(m.jsx)("span",{children:"Remove"}),Object(m.jsx)(g.a,{icon:S.c})]})]})]})})},F=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){O.collection("tweets").orderBy("time","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(N.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(C,{userObj:t}),Object(m.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(m.jsx)(k,{twtObj:e,isOwner:e.writerId===t.uid},e.id)}))})]})},A=function(e){var t=e.userObj;return Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{to:"/",style:{marginRight:10},children:Object(m.jsx)(g.a,{icon:v.c,color:"#04AAFF",size:"2x"})})}),Object(m.jsx)("li",{children:Object(m.jsxs)(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(m.jsx)(g.a,{icon:S.e,color:"#04AAFF",size:"2x"}),Object(m.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},_=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(m.jsxs)(o.a,{children:[n&&Object(m.jsx)(A,{userObj:a}),Object(m.jsx)(u.c,{children:Object(m.jsx)(m.Fragment,{children:n?Object(m.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(m.jsx)(u.a,{exact:!0,path:"/",children:Object(m.jsx)(F,{userObj:a})}),Object(m.jsx)(u.a,{exact:!0,path:"/profile",children:Object(m.jsx)(x,{userObj:a,refreshUser:t})})]}):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(u.a,{exact:!0,path:"/",children:Object(m.jsx)(w,{})})})})})]})},U=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(i.a)(r,2),o=s[0],u=s[1];Object(a.useEffect)((function(){f.onAuthStateChanged((function(e){u(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]);return Object(m.jsxs)(m.Fragment,{children:[n?Object(m.jsx)(_,{isLoggedIn:Boolean(o),userObj:o,refreshUser:function(){var e=f.currentUser;u({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})}}):"Initializing...",Object(m.jsxs)("footer",{style:{display:"flex",justifyContent:"center",marginTop:"4rem"},children:["\xa9 ",(new Date).getFullYear()," Jowitter"]})]})};n(49);s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(U,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.815d9295.chunk.js.map