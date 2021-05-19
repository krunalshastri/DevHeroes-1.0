(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a(21),n=a.n(r),c=a(3),l=a(7),o=(a(45),a(5)),i=a(6),u=a.n(i),j=a(10),b=a(11),d=a.n(b),p=a(36),m=a.n(p),h="SET_ALERT",f="REMOVE_ALERT",x="REGISTER_SUCCESS",O="REGISTER_FAIL",g="USER_LOADED",v="AUTH_ERROR",y="LOGIN_SUCCESS",N="LOGIN_FAIL",k="LOGOUT",w="GET_PROFILE",C="GET_PROFILES",S="CLEAR_PROFILE",L="PROFILE_ERROR",A="ACCOUNT_DELETED",E=function(e,t){return function(){var a=Object(j.a)(u.a.mark((function a(s){var r;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=m()(),s({type:h,payload:{msg:e,alertType:t,id:r}}),setTimeout((function(){s({type:f,payload:r})}),5e3);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()};var P=function(e){e?d.a.defaults.headers.common["x-auth-token"]=e:delete d.a.defaults.headers.common["x-auth-token"]},R=function(){return function(){var e=Object(j.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&P(localStorage.token),e.prev=1,e.next=4,d.a.get("/dev/auth");case 4:a=e.sent,t({type:g,payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:v});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},D=a(0),I=Object(o.b)((function(e){return{auth:e.auth}}),{logout:function(){return function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:S}),t({type:k});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=Object(D.jsxs)("ul",{children:[Object(D.jsx)("li",{children:Object(D.jsx)(c.b,{to:"/profiles",children:"Developers"})}),Object(D.jsx)("li",{children:Object(D.jsx)(c.b,{to:"/register",children:"Register"})}),Object(D.jsx)("li",{children:Object(D.jsx)(c.b,{to:"/login",children:"Login"})})]});var a=Object(D.jsxs)("ul",{children:[Object(D.jsx)("li",{children:Object(D.jsx)(c.b,{to:"/profiles",children:"Developers"})}),Object(D.jsx)("li",{children:Object(D.jsxs)(c.b,{to:"/dashboard",children:[" ",Object(D.jsx)("i",{className:"fas fa-user"})," ",Object(D.jsx)("span",{className:"hide-sm",children:"Dashboard "})," "]})}),Object(D.jsx)("li",{children:Object(D.jsxs)("a",{href:"#!",onClick:function(){e.logout()},children:[Object(D.jsx)("i",{className:"fas fa-sign-out-alt"})," ",Object(D.jsx)("span",{className:"hide-sm",children:"Logout "})," "]})})]});return Object(D.jsxs)("nav",{className:"navbar bg-dark",children:[Object(D.jsx)("h1",{children:Object(D.jsxs)(c.b,{to:e.auth.isAuth?"/dashboard":"/",children:[Object(D.jsx)("i",{className:"fas fa-code"})," DevHeroes"]})}),!e.auth.loading&&Object(D.jsxs)(s.Fragment,{children:[e.auth.isAuth?a:t," "]})]})})),T=Object(o.b)((function(e){return{isAuth:e.auth.isAuth}}))((function(e){return e.isAuth?Object(D.jsx)(l.a,{to:"/dashboard"}):Object(D.jsx)("section",{className:"landing",children:Object(D.jsx)("div",{className:"dark-overlay",children:Object(D.jsxs)("div",{className:"landing-inner",children:[Object(D.jsx)("h1",{className:"x-large",children:"Developer Connector"}),Object(D.jsx)("p",{className:"lead",children:"Create a developer profile/portfolio, share posts and get help from other developers"}),Object(D.jsxs)("div",{className:"buttons",children:[Object(D.jsx)(c.b,{to:"/register",className:"btn btn-primary",children:"Sign Up"}),Object(D.jsx)(c.b,{to:"/login",className:"btn btn-light",children:"Login"})]})]})})})})),F=a(15),U=a(2),_=a(16),G=Object(o.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e){var t=e.email,a=e.password;return function(){var e=Object(j.a)(u.a.mark((function e(s){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.post("/dev/auth",{email:t,password:a});case 3:r=e.sent,s({type:y,payload:r.data}),s(R()),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),(n=e.t0.response.data.errors).length>0&&n.forEach((function(e){s(E(e.msg,"danger"))})),s({type:N});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=Object(s.useState)({email:"",password:""}),a=Object(_.a)(t,2),r=a[0],n=a[1],o=r.email,i=r.password;function u(e){n(Object(U.a)(Object(U.a)({},r),{},Object(F.a)({},e.target.name,e.target.value)))}return e.isAuth?Object(D.jsx)(l.a,{to:"/dashboard"}):Object(D.jsxs)(s.Fragment,{children:[Object(D.jsx)("h1",{className:"large text-primary",children:"Sign Up"}),Object(D.jsxs)("p",{className:"lead",children:[Object(D.jsx)("i",{className:"fas fa-user"})," Create Your Account"]}),Object(D.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),e.login(r)},children:[Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("input",{type:"email",placeholder:"Email Address",name:"email",value:o,onChange:u}),Object(D.jsx)("small",{className:"form-text",children:"This site uses Gravatar so if you want a profile image, use a Gravatar email"})]}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"password",placeholder:"Password",name:"password",minLength:"4",value:i,onChange:u})}),Object(D.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Login"})]}),Object(D.jsxs)("p",{className:"my-1",children:["Don't have an account? ",Object(D.jsx)(c.b,{to:"/register",children:"Sign Up"})]})]})})),M=Object(o.b)((function(e){return{isAuth:e.auth.isAuth}}),{setAlert:E,register:function(e){var t=e.name,a=e.email,s=e.password;return function(){var e=Object(j.a)(u.a.mark((function e(r){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.post("/dev/users",{name:t,email:a,password:s});case 3:n=e.sent,r({type:x,payload:n.data}),r(R()),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),(c=e.t0.response.data.errors).length>0&&c.forEach((function(e){r(E(e.msg,"danger"))})),r({type:O});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=Object(s.useState)({name:"",email:"",password:"",password2:""}),a=Object(_.a)(t,2),r=a[0],n=a[1],o=r.name,i=r.email,u=r.password,j=r.password2;function b(e){n(Object(U.a)(Object(U.a)({},r),{},Object(F.a)({},e.target.name,e.target.value)))}return e.isAuth?Object(D.jsx)(l.a,{to:"/dashboard"}):Object(D.jsxs)(s.Fragment,{children:[Object(D.jsx)("h1",{className:"large text-primary",children:"Sign Up"}),Object(D.jsxs)("p",{className:"lead",children:[Object(D.jsx)("i",{className:"fas fa-user"})," Create Your Account"]}),Object(D.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),u!==j?e.setAlert("Passwords do not match!","danger"):e.register({name:o,email:i,password:u})},children:[Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"text",placeholder:"Name",name:"name",value:o,onChange:b,required:!0})}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("input",{type:"email",placeholder:"Email Address",name:"email",value:i,onChange:b,required:!0}),Object(D.jsx)("small",{className:"form-text",children:"This site uses Gravatar so if you want a profile image, use a Gravatar email"})]}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"password",placeholder:"Password",name:"password",minLength:"4",value:u,onChange:b})}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"password",placeholder:"Confirm Password",name:"password2",minLength:"4",value:j,onChange:b})}),Object(D.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Register"})]}),Object(D.jsxs)("p",{className:"my-1",children:["Already have an account? ",Object(D.jsx)(c.b,{to:"/login",children:"Sign In"})]})]})}));var B=Object(o.b)((function(e){return{alert:e.alert}}))((function(e){return null!==e.alert&&e.alert.length>0&&e.alert.map((function(e){return Object(D.jsx)("div",{className:"alert alert-".concat(e.alertType),children:e.msg},e.id)}))})),J=function(){return function(){var e=Object(j.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/dev/profile");case 3:a=e.sent,t({type:w,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:L,payload:{msg:e.t0.response.data,status:e.t0.response.status}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},Y=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var s=Object(j.a)(u.a.mark((function s(r){var n,c;return u.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,d.a.post("/dev/profile",e);case 3:n=s.sent,r({type:w,payload:n.data}),r(E(a?"Profile Updated!":"Profile Created!","success")),a||t.push("/dashboard"),s.next=14;break;case 9:s.prev=9,s.t0=s.catch(0),(c=s.t0.response.data.errors).length>0&&c.forEach((function(e){r(E(e.msg,"danger"))})),r({type:L,payload:{msg:s.t0.response.data,status:s.t0.response.status}});case 14:case"end":return s.stop()}}),s,null,[[0,9]])})));return function(e){return s.apply(this,arguments)}}()},H=function(){return Object(D.jsx)("div",{class:"dash-buttons",children:Object(D.jsxs)(c.b,{to:"/edit-profile",class:"btn btn-light",children:[Object(D.jsx)("i",{class:"fas fa-user-circle text-primary"})," Edit Profile"]})})},q=Object(o.b)((function(e){return{auth:e.auth,profile:e.profile}}),{getCurrentProfile:J,deleteAccount:function(){return function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure want to delete your account?")){e.next=12;break}return e.prev=1,e.next=4,d.a.delete("/dev/profile");case 4:t({type:S}),t({type:A}),t(E("Your account has been successfully deleted!","success")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:L,payload:{msg:e.t0.response.data,status:e.t0.response.status}});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){return Object(s.useEffect)((function(){e.getCurrentProfile()}),[e.getCurrentProfile]),Object(D.jsxs)(s.Fragment,{children:[Object(D.jsx)("h1",{className:"large text-primary",children:" Dashboard "}),Object(D.jsxs)("p",{className:"lead",children:[Object(D.jsx)("i",{className:"fas fa-user"})," Welcome"," ",e.auth.user&&e.auth.user.name]}),!e.profile.loading&&(null!==e.profile.profile?Object(D.jsx)(s.Fragment,{children:Object(D.jsx)(H,{})}):Object(D.jsxs)(s.Fragment,{children:[Object(D.jsx)("p",{children:"You haven't added a profile yet."}),Object(D.jsxs)(c.b,{to:"/create-profile",className:"btn btn-primary my-1",children:[" ","Create Profile"," "]})]})),Object(D.jsx)("div",{className:e.profile.loading||null===e.profile.profile?"my-1":"my-2",children:Object(D.jsxs)("button",{className:"btn btn-danger",onClick:function(){return e.deleteAccount()},children:[Object(D.jsx)("i",{className:"fas fas-user-minus"})," Delete My Account"]})})]})})),W=a(40),V=Object(o.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,s=a.isAuth,r=a.loading,n=Object(W.a)(e,["component","auth"]);return Object(D.jsx)(l.b,Object(U.a)(Object(U.a)({},n),{},{render:function(e){return s||r?Object(D.jsx)(t,Object(U.a)({},e)):Object(D.jsx)(l.a,{to:"/login"})}}))})),z=Object(o.b)(null,{createProfile:Y})((function(e){var t=Object(s.useState)({company:"",website:"",location:"",bio:"",status:"",githubusername:"",skills:"",youtube:"",facebook:"",twitter:"",instagram:"",linkedin:""}),a=Object(_.a)(t,2),r=a[0],n=a[1],o=r.company,i=r.website,u=r.location,j=r.bio,b=r.status,d=r.githubusername,p=r.skills,m=r.youtube,h=r.facebook,f=r.twitter,x=r.instagram,O=r.linkedin,g=Object(s.useState)(!1),v=Object(_.a)(g,2),y=v[0],N=v[1],k=Object(l.g)();function w(e){n(Object(U.a)(Object(U.a)({},r),{},Object(F.a)({},e.target.name,e.target.value)))}return Object(D.jsxs)(s.Fragment,{children:[Object(D.jsx)("h1",{className:"large text-primary",children:"Create Your Profile"}),Object(D.jsxs)("p",{className:"lead",children:[Object(D.jsx)("i",{className:"fas fa-user"})," Let's get some information to make your profile stand out"]}),Object(D.jsx)("small",{children:"* = required field"}),Object(D.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),e.createProfile(r,k)},children:[Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsxs)("select",{name:"status",value:b,onChange:w,children:[Object(D.jsx)("option",{value:"0",children:"* Select Professional Status"}),Object(D.jsx)("option",{value:"Developer",children:"Developer"}),Object(D.jsx)("option",{value:"Junior Developer",children:"Junior Developer"}),Object(D.jsx)("option",{value:"Senior Developer",children:"Senior Developer"}),Object(D.jsx)("option",{value:"Manager",children:"Manager"}),Object(D.jsx)("option",{value:"Student or Learning",children:"Student or Learning"}),Object(D.jsx)("option",{value:"Instructor",children:"Instructor or Teacher"}),Object(D.jsx)("option",{value:"Intern",children:"Intern"}),Object(D.jsx)("option",{value:"Other",children:"Other"})]}),Object(D.jsx)("small",{className:"form-text",children:"Give us an idea of where you are at in your career"})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("input",{type:"text",placeholder:"Company",name:"company",value:o,onChange:w}),Object(D.jsx)("small",{className:"form-text",children:"Could be your own company or one you work for"})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("input",{type:"text",placeholder:"Website",name:"website",value:i,onChange:w}),Object(D.jsx)("small",{className:"form-text",children:"Could be your own or a company website"})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("input",{type:"text",placeholder:"Location",name:"location",value:u,onChange:w}),Object(D.jsx)("small",{className:"form-text",children:"City & state suggested (eg. Boston, MA)"})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("input",{type:"text",placeholder:"* Skills",name:"skills",value:p,onChange:w}),Object(D.jsx)("small",{className:"form-text",children:"Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("input",{type:"text",placeholder:"Github Username",name:"githubusername",value:d,onChange:w}),Object(D.jsx)("small",{className:"form-text",children:"If you want your latest repos and a Github link, include your username"})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("textarea",{placeholder:"A short bio of yourself",name:"bio",value:j,onChange:w}),Object(D.jsx)("small",{className:"form-text",children:"Tell us a little about yourself"})]}),Object(D.jsxs)("div",{className:"my-2",children:[Object(D.jsx)("button",{type:"button",className:"btn btn-light",onClick:function(){return N(!y)},children:"Add Social Network Links"}),Object(D.jsx)("span",{children:"Optional"})]}),y&&Object(D.jsxs)(s.Fragment,{children:[Object(D.jsxs)("div",{className:"form-group social-input",children:[Object(D.jsx)("i",{className:"fab fa-twitter fa-2x"}),Object(D.jsx)("input",{type:"text",placeholder:"Twitter URL",name:"twitter",value:f,onChange:w})]}),Object(D.jsxs)("div",{className:"form-group social-input",children:[Object(D.jsx)("i",{className:"fab fa-facebook fa-2x"}),Object(D.jsx)("input",{type:"text",placeholder:"Facebook URL",name:"facebook",value:h,onChange:w})]}),Object(D.jsxs)("div",{className:"form-group social-input",children:[Object(D.jsx)("i",{className:"fab fa-youtube fa-2x"}),Object(D.jsx)("input",{type:"text",placeholder:"YouTube URL",name:"youtube",value:m,onChange:w})]}),Object(D.jsxs)("div",{className:"form-group social-input",children:[Object(D.jsx)("i",{className:"fab fa-linkedin fa-2x"}),Object(D.jsx)("input",{type:"text",placeholder:"Linkedin URL",name:"linkedin",value:O,onChange:w})]}),Object(D.jsxs)("div",{className:"form-group social-input",children:[Object(D.jsx)("i",{className:"fab fa-instagram fa-2x"}),Object(D.jsx)("input",{type:"text",placeholder:"Instagram URL",name:"instagram",value:x,onChange:w})]})]}),Object(D.jsx)("input",{type:"submit",className:"btn btn-primary my-1"}),Object(D.jsx)(c.b,{className:"btn btn-light my-1",to:"/dashboard",children:"Go Back"})]})]})})),K=Object(o.b)((function(e){return{profile:e.profile}}),{createProfile:Y,getCurrentProfile:J})((function(e){var t=e.profile,a=t.profile,r=t.loading,n=e.createProfile,o=e.getCurrentProfile,i=Object(s.useState)({company:"",website:"",location:"",bio:"",status:"",githubusername:"",skills:"",youtube:"",facebook:"",twitter:"",instagram:"",linkedin:""}),u=Object(_.a)(i,2),j=u[0],b=u[1],d=j.company,p=j.website,m=j.location,h=j.bio,f=j.status,x=j.githubusername,O=j.skills,g=j.youtube,v=j.facebook,y=j.twitter,N=j.instagram,k=j.linkedin,w=Object(s.useState)(!1),C=Object(_.a)(w,2),S=C[0],L=C[1],A=Object(l.g)();function E(e){b(Object(U.a)(Object(U.a)({},j),{},Object(F.a)({},e.target.name,e.target.value)))}return Object(s.useEffect)((function(){o(),null!==a&&console.log(a),b({company:r||!a.company?"":a.company,website:r||!a.website?"":a.website,location:r||!a.location?"":a.location,status:r||!a.status?"":a.status,skills:r||!a.skills?"":a.skills,githubusername:r||!a.githubusername?"":a.githubusername,bio:r||!a.bio?"":a.bio,twitter:!r&&a.social&&a.social.twitter?a.social.twitter:"",facebook:!r&&a.social&&a.social.facebook?a.social.facebook:"",linkedin:!r&&a.social&&a.social.linkedin?a.social.linkedin:"",youtube:!r&&a.social&&a.social.youtube?a.social.youtube:"",instagram:!r&&a.social&&a.social.instagram?a.social.instagram:""})}),[r,o]),Object(D.jsxs)(s.Fragment,{children:[Object(D.jsx)("h1",{className:"large text-primary",children:"Create Your Profile"}),Object(D.jsxs)("p",{className:"lead",children:[Object(D.jsx)("i",{className:"fas fa-user"})," Let's get some information to make your profile stand out"]}),Object(D.jsx)("small",{children:"* = required field"}),Object(D.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),n(j,A,!0)},children:[Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsxs)("select",{name:"status",value:f,onChange:E,children:[Object(D.jsx)("option",{value:"0",children:"* Select Professional Status"}),Object(D.jsx)("option",{value:"Developer",children:"Developer"}),Object(D.jsx)("option",{value:"Junior Developer",children:"Junior Developer"}),Object(D.jsx)("option",{value:"Senior Developer",children:"Senior Developer"}),Object(D.jsx)("option",{value:"Manager",children:"Manager"}),Object(D.jsx)("option",{value:"Student or Learning",children:"Student or Learning"}),Object(D.jsx)("option",{value:"Instructor",children:"Instructor or Teacher"}),Object(D.jsx)("option",{value:"Intern",children:"Intern"}),Object(D.jsx)("option",{value:"Other",children:"Other"})]}),Object(D.jsx)("small",{className:"form-text",children:"Give us an idea of where you are at in your career"})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("input",{type:"text",placeholder:"Company",name:"company",value:d,onChange:E}),Object(D.jsx)("small",{className:"form-text",children:"Could be your own company or one you work for"})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("input",{type:"text",placeholder:"Website",name:"website",value:p,onChange:E}),Object(D.jsx)("small",{className:"form-text",children:"Could be your own or a company website"})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("input",{type:"text",placeholder:"Location",name:"location",value:m,onChange:E}),Object(D.jsx)("small",{className:"form-text",children:"City & state suggested (eg. Boston, MA)"})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("input",{type:"text",placeholder:"* Skills",name:"skills",value:O,onChange:E}),Object(D.jsx)("small",{className:"form-text",children:"Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("input",{type:"text",placeholder:"Github Username",name:"githubusername",value:x,onChange:E}),Object(D.jsx)("small",{className:"form-text",children:"If you want your latest repos and a Github link, include your username"})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("textarea",{placeholder:"A short bio of yourself",name:"bio",value:h,onChange:E}),Object(D.jsx)("small",{className:"form-text",children:"Tell us a little about yourself"})]}),Object(D.jsxs)("div",{className:"my-2",children:[Object(D.jsx)("button",{type:"button",className:"btn btn-light",onClick:function(){return L(!S)},children:"Add Social Network Links"}),Object(D.jsx)("span",{children:"Optional"})]}),S&&Object(D.jsxs)(s.Fragment,{children:[Object(D.jsxs)("div",{className:"form-group social-input",children:[Object(D.jsx)("i",{className:"fab fa-twitter fa-2x"}),Object(D.jsx)("input",{type:"text",placeholder:"Twitter URL",name:"twitter",value:y,onChange:E})]}),Object(D.jsxs)("div",{className:"form-group social-input",children:[Object(D.jsx)("i",{className:"fab fa-facebook fa-2x"}),Object(D.jsx)("input",{type:"text",placeholder:"Facebook URL",name:"facebook",value:v,onChange:E})]}),Object(D.jsxs)("div",{className:"form-group social-input",children:[Object(D.jsx)("i",{className:"fab fa-youtube fa-2x"}),Object(D.jsx)("input",{type:"text",placeholder:"YouTube URL",name:"youtube",value:g,onChange:E})]}),Object(D.jsxs)("div",{className:"form-group social-input",children:[Object(D.jsx)("i",{className:"fab fa-linkedin fa-2x"}),Object(D.jsx)("input",{type:"text",placeholder:"Linkedin URL",name:"linkedin",value:k,onChange:E})]}),Object(D.jsxs)("div",{className:"form-group social-input",children:[Object(D.jsx)("i",{className:"fab fa-instagram fa-2x"}),Object(D.jsx)("input",{type:"text",placeholder:"Instagram URL",name:"instagram",value:N,onChange:E})]})]}),Object(D.jsx)("input",{type:"submit",className:"btn btn-primary my-1"}),Object(D.jsx)(c.b,{className:"btn btn-light my-1",to:"/dashboard",children:"Go Back"})]})]})})),Q=function(e){var t=e.profile,a=t.user,s=a._id,r=a.name,n=a.avatar,l=t.status,o=t.company,i=t.location,u=t.skills;return Object(D.jsxs)("div",{className:"profile bg-light",children:[Object(D.jsx)("img",{src:n,alt:"",className:"round-img"}),Object(D.jsxs)("div",{children:[Object(D.jsx)("h2",{children:r}),Object(D.jsxs)("p",{children:[l," ",o&&Object(D.jsxs)("span",{children:["at ",o]})]}),Object(D.jsx)("p",{className:"my-1",children:i&&Object(D.jsx)("span",{children:i})}),Object(D.jsx)(c.b,{to:"/profiles/".concat(s),className:"btn btn-primary",children:"View Profile"})]}),Object(D.jsx)("ul",{children:u.slice(0,7).map((function(e,t){return Object(D.jsxs)("li",{className:"text-primary",children:[Object(D.jsx)("i",{className:"fa fa-check-circle"})," ",e]},t)}))})]})},X=Object(o.b)((function(e){return{profile:e.profile}}),{getProfiles:function(){return function(){var e=Object(j.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/dev/profile/all");case 3:a=e.sent,t({type:C,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:L,payload:{msg:e.t0.response.data,status:e.t0.response.status}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.getProfiles,a=e.profile,r=a.profiles,n=a.loading;return Object(s.useEffect)((function(){t()}),[t]),Object(D.jsx)(s.Fragment,{children:n?Object(D.jsx)("p",{children:"Loading...."}):Object(D.jsxs)(s.Fragment,{children:[" ",Object(D.jsx)("h1",{className:"large text-primary",children:"Developers"}),Object(D.jsxs)("p",{className:"lead",children:[" ",Object(D.jsx)("i",{className:"fa fa-connectdevelop"})," Browse and connect with developers"]}),Object(D.jsx)("div",{className:"profiles",children:r.length>0?r.map((function(e){return Object(D.jsx)(Q,{profile:e},e._id)})):Object(D.jsx)("h4",{children:"No profiles found...."})})]})})})),Z=Object(o.b)(null)((function(e){var t=e.profile,a=t.status,s=t.company,r=t.website,n=t.location,c=t.social,l=t.user,o=l.name,i=l.avatar;return Object(D.jsxs)("div",{className:"profile-top bg-primary p-2",children:[Object(D.jsx)("img",{className:"round-img my-1",src:i,alt:""}),Object(D.jsx)("h1",{className:"large",children:o}),Object(D.jsxs)("p",{className:"lead",children:[a," ",s&&Object(D.jsxs)("span",{children:["at ",s]})]}),Object(D.jsx)("p",{className:"loca",children:n&&Object(D.jsx)("span",{children:n})}),Object(D.jsxs)("div",{className:"icons my-1",children:[r&&Object(D.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:Object(D.jsx)("i",{className:"fas fa-globe fa-2x"})}),c&&c.twitter&&Object(D.jsx)("a",{href:c.twitter,target:"_blank",rel:"noopener noreferrer",children:Object(D.jsx)("i",{className:"fab fa-twitter fa-2x"})}),c&&c.facebook&&Object(D.jsx)("a",{href:c.facebook,target:"_blank",rel:"noopener noreferrer",children:Object(D.jsx)("i",{className:"fab fa-facebook fa-2x"})}),c&&c.linkedin&&Object(D.jsx)("a",{href:c.linkedin,target:"_blank",rel:"noopener noreferrer",children:Object(D.jsx)("i",{className:"fab fa-linkedin fa-2x"})}),c&&c.youtube&&Object(D.jsx)("a",{href:c.youtube,target:"_blank",rel:"noopener noreferrer",children:Object(D.jsx)("i",{className:"fab fa-youtube fa-2x"})}),c&&c.instagram&&Object(D.jsx)("a",{href:c.instagram,target:"_blank",rel:"noopener noreferrer",children:Object(D.jsx)("i",{className:"fab fa-instagram fa-2x"})})]})]})})),$=function(e){var t=e.profile,a=t.bio,r=t.skills,n=t.user;n.name,n.avatar;return Object(D.jsxs)("div",{className:"profile-about bg-light p-2",children:[a&&Object(D.jsxs)(s.Fragment,{children:[Object(D.jsx)("h2",{className:"text-primary",children:"Bio"}),Object(D.jsx)("p",{children:a}),Object(D.jsx)("div",{className:"line"})]}),Object(D.jsx)("h2",{className:"text-primary",children:"Skill Set"}),Object(D.jsx)("div",{className:"skills",children:r.map((function(e){return Object(D.jsxs)("div",{className:"p-1",children:[Object(D.jsx)("i",{className:"fa fa-check"})," ",e]})}))})]})},ee=Object(o.b)((function(e){return{profile:e.profile,auth:e.auth}}),{getProfileById:function(e){return function(){var t=Object(j.a)(u.a.mark((function t(a){var s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get("/dev/profile/user/".concat(e));case 3:s=t.sent,a({type:w,payload:s.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:L,payload:{msg:t.t0.response.data,status:t.t0.response.status}});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.getProfileById,a=e.match,r=e.profile,n=r.profile,l=r.loading,o=e.auth;return Object(s.useEffect)((function(){t(a.params.id)}),[t,a.params.id]),Object(D.jsx)(s.Fragment,{children:null===n||l?Object(D.jsx)("p",{children:"Loading....."}):Object(D.jsxs)(s.Fragment,{children:[Object(D.jsx)(c.b,{to:"/profiles",className:"btn btn-light",children:"Back To Profiles"}),o.isAuth&&!o.loading&&o.user._id===n.user._id&&Object(D.jsx)(c.b,{to:"/edit-profile",className:"btn btn-dark",children:"Edit Profile"}),Object(D.jsxs)("div",{class:"profile-grid my-1",children:[Object(D.jsx)(Z,{profile:n}),Object(D.jsx)($,{profile:n})]})]})})})),te=a(18),ae=a(37),se=a(38),re=a(39),ne=[];var ce={token:localStorage.getItem("token"),isAuth:null,loading:!0,user:null};var le={profile:null,profiles:[],loading:!0,error:{}};var oe=Object(te.combineReducers)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0,a=t.type,s=t.payload;switch(a){case h:return[].concat(Object(re.a)(e),[s]);case f:return e.filter((function(e){return e.id!==s}));default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0,a=t.type,s=t.payload;switch(a){case g:return Object(U.a)(Object(U.a)({},e),{},{user:s,isAuth:!0,loading:!1});case x:case y:return localStorage.setItem("token",s),Object(U.a)(Object(U.a)({},e),{},{token:s,isAuth:!0,loading:!1});case O:case v:case N:case k:case A:return localStorage.removeItem("token"),Object(U.a)(Object(U.a)({},e),{},{token:null,isAuth:!1,loading:!1});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0,a=t.type,s=t.payload;switch(a){case w:return Object(U.a)(Object(U.a)({},e),{},{profile:s,loading:!1});case L:return Object(U.a)(Object(U.a)({},e),{},{error:s,loading:!1});case S:return Object(U.a)(Object(U.a)({},e),{},{profile:null,loading:!1});case C:return Object(U.a)(Object(U.a)({},e),{},{profiles:s,loading:!1});default:return e}}}),ie=[se.a],ue=Object(te.createStore)(oe,{},Object(ae.composeWithDevTools)(te.applyMiddleware.apply(void 0,ie)));localStorage.token&&P(localStorage.token);var je=function(){return Object(s.useEffect)((function(){ue.dispatch(R())}),[]),Object(D.jsx)(o.a,{store:ue,children:Object(D.jsx)(c.a,{children:Object(D.jsxs)(s.Fragment,{children:[Object(D.jsx)(I,{}),Object(D.jsx)(l.b,{exact:!0,path:"/",component:T}),Object(D.jsxs)("section",{className:"container",children:[Object(D.jsx)(B,{}),Object(D.jsxs)(l.d,{children:[Object(D.jsx)(l.b,{exact:!0,path:"/login",component:G}),Object(D.jsx)(l.b,{exact:!0,path:"/register",component:M}),Object(D.jsx)(l.b,{exact:!0,path:"/profiles",component:X}),Object(D.jsx)(l.b,{exact:!0,path:"/profiles/:id",component:ee}),Object(D.jsx)(V,{exact:!0,path:"/dashboard",component:q}),Object(D.jsx)(V,{exact:!0,path:"/create-profile",component:z}),Object(D.jsx)(V,{exact:!0,path:"/edit-profile",component:K})]})]})]})})})};n.a.render(Object(D.jsx)(je,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.84c42b37.chunk.js.map