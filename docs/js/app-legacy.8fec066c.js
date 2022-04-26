(function(){"use strict";var t={9998:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var a=n(8935),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",on:{click:function(e){return t.fnResetToggle()}}},[n("RouterView")],1)},o=[],i=(n(7327),n(1539),{name:"App",data:function(){return{tokenFreePathList:["/auth","/authmore","/signin"]}},created:function(){var t=this;0===this.tokenFreePathList.filter((function(e){return e===t.$route.path})).length&&(Kakao.Auth.getAccessToken()||this.$router.push("signin"))},methods:{fnResetToggle:function(){this.$store.state.toggle.chatSort=!1,this.$store.state.toggle.setting=!1}}}),r=i,c=n(1001),A=(0,c.Z)(r,s,o,!1,null,"2d260988",null),u=A.exports,l=n(2809),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body"},[n("main",{staticClass:"sign-in"},[t._m(0),n("div",{staticClass:"sign-in__form"},[n("div",{staticClass:"sign-in__submit"},[n("a",{attrs:{href:t.authorizeLink}},[n("button",{staticClass:"submit actv",attrs:{type:"button"}},[t._v("로그인")])])]),n("div",{staticClass:"auto-login no-drag"},[n("input",{attrs:{type:"checkbox",id:"autoLogin"},domProps:{checked:t.autoLogin},on:{click:function(e){return t.fnSetAutoLogin()}}}),n("label",{attrs:{for:"autoLogin"}},[t._v("자동로그인")]),n("span",{staticClass:"material-icons",on:{click:function(e){t.isCheckMessageShow=!0}}},[t._v(" help_outline ")])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isCheckMessageShow,expression:"isCheckMessageShow"}],staticClass:"check__message"},[n("p",[t._v("자동로그인을 모르시나요?")])])])])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"kakao__image"},[a("img",{attrs:{src:n(5393),alt:"kakao.png"}})])}],g={data:function(){return{autoLogin:"",authorize:{baseUrl:"https://kauth.kakao.com",redirect_uri:"https://busyhuman.github.io/ktalk-clone/auth",response_type:"code"},authorizeLink:"",isCheckMessageShow:!1}},created:function(){this.fnTokenExpire(),this.authorizeLink=this.authorize.baseUrl+"/oauth/authorize?client_id=f17d6c119019aed325c2d17a808aa4b2&redirect_uri="+this.authorize.redirect_uri+"&response_type="+this.authorize.response_type,this.autoLogin=JSON.parse(localStorage.getItem("autoLogin"))},methods:{fnSetAutoLogin:function(){this.autoLogin=!this.autoLogin,localStorage.setItem("autoLogin",this.autoLogin)},fnTokenExpire:function(){Kakao.Auth.getAccessToken()&&Kakao.Auth.logout()}}},d=g,h=(0,c.Z)(d,m,f,!1,null,"7a7e5b94",null),p=h.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"friendsview__container"},[a("Nav",{attrs:{selected:"friends"}}),a("div",{staticClass:"main"},[t._m(0),a("div",{staticClass:"contents"},[a("section",{staticClass:"user__profile"},[a("div",{staticClass:"profile"},[a("div",{staticClass:"profile__image"},[""!==t.user.thumbnailURL?a("img",{attrs:{src:t.user.thumbnailURL,alt:""}}):a("img",{attrs:{src:n(5393),alt:""}})]),a("div",{staticClass:"profile__textarea"},[a("div",{staticClass:"profile__name"},[t._v(" "+t._s(t.user.nickName)+" ")])])])]),a("section",{staticClass:"friends"},[a("div",{staticClass:"friends__title"},[a("span",[t._v("친구 "+t._s(t.friends.total_count))])]),a("div",{staticClass:"friend__container"},t._l(t.friends.elements,(function(t){return a("div",{key:t.id,staticClass:"friend"},[a("Profile",{attrs:{params:t}})],1)})),0)])])])],1)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("span",{staticClass:"title"},[t._v(" 친구 ")]),n("div",{staticClass:"search"},[n("span",{staticClass:"material-icons-outlined"},[t._v(" search ")])]),n("div",{staticClass:"friend-add"},[n("span",{staticClass:"material-icons-outlined"},[t._v(" person_add_alt_1 ")])])])}],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("nav",{staticClass:"main"},[n("router-link",{staticClass:"friends",class:{actv:"friends"===t.selected},attrs:{to:{path:"/friends"}}},[n("span",{staticClass:"material-icons"},[t._v(" person ")])]),n("router-link",{staticClass:"chats",class:{actv:"chats"===t.selected},attrs:{to:{path:"/chats"}}},[n("span",{staticClass:"material-icons"},[t._v(" chat_bubble ")])]),n("router-link",{staticClass:"more",class:{actv:"more"===t.selected},attrs:{to:{path:"/more"}}},[n("span",{staticClass:"material-icons"},[t._v(" more_horiz ")])]),n("div",{staticClass:"alarm"},[!0===t.fnGetAlarm?n("span",{staticClass:"material-icons-outlined",on:{click:function(e){return t.fnToggleAlarm()}}},[t._v(" notifications ")]):t._e(),!1===t.fnGetAlarm?n("span",{staticClass:"material-icons-outlined",on:{click:function(e){return t.fnToggleAlarm()}}},[t._v(" notifications_off ")]):t._e()]),n("div",{staticClass:"settings"},[n("span",{staticClass:"material-icons-outlined",on:{click:function(e){return e.stopPropagation(),t.fnToggleSetting()}}},[t._v(" settings ")]),n("NormalList",{directives:[{name:"show",rawName:"v-show",value:!0===t.fnGetSetting,expression:"fnGetSetting === true"}],staticClass:"normal__list",attrs:{params:t.normalList}})],1)],1),n(t.componentName,{tag:"component"})],1)},_=[],E=(n(8783),n(3948),n(3180)),Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"main"},[n("ul",{staticClass:"item__list"},t._l(t.params.itemList,(function(e,a){return n("li",{key:a,staticClass:"item",on:{click:function(e){return t.fnOnClickItem(a)}}},[t._v(" "+t._s(e.name)+" ")])})),0)])])},B=[],I={name:"NormalList",props:{params:Object},data:function(){return{}},methods:{fnOnClickItem:function(t){E.Z.$emit("NORMALLIST_"+this.params.title,t)}}},x=I,b=(0,c.Z)(x,Q,B,!1,null,"6ba35557",null),M=b.exports,N={components:{Alarm:function(){return n.e(88).then(n.bind(n,1088))},NormalList:M},props:{selected:String},data:function(){return{componentName:"",normalList:{},api:{baseUrl:"https://kapi.kakao.com"}}},created:function(){var t=this;this.normalList={title:"setting",itemList:[{name:"설정",func:""},{name:"잠금모드"},{name:"로그아웃",func:this.fnTokenExpire},{name:"종료",func:this.fnSignOut}]},E.Z.$on("NORMALLIST_"+this.normalList.title,(function(e){t.normalList.itemList[e].func()}))},computed:{fnGetAlarm:function(){return this.$store.state.toggle.alarm},fnGetSetting:function(){return this.$store.state.toggle.setting}},methods:{fnSignOut:function(){var t=this;Kakao.API.request({url:"/v1/user/unlink",success:function(){localStorage.setItem("autoLogin",!1),localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("scope"),t.$router.push("signin")},fail:function(){}})},fnTokenExpire:function(){var t=this;Kakao.Auth.getAccessToken()&&Kakao.Auth.logout((function(){localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("scope"),t.$router.push("signin")}))},fnToggleAlarm:function(){this.componentName="Alarm",this.$store.state.toggle.alarm=!this.$store.state.toggle.alarm,E.Z.$emit("ALARM",this.$store.state.toggle.alarm)},fnToggleSetting:function(){this.$store.state.toggle.setting=!this.$store.state.toggle.setting}}},w=N,U=(0,c.Z)(w,k,_,!1,null,"68a9708b",null),T=U.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"main"},[a("div",{staticClass:"profile"},[a("div",{staticClass:"profile__image"},[""!==this.params.profile_thumbnail_image?a("img",{attrs:{src:this.params.profile_thumbnail_image}}):a("img",{attrs:{src:n(5393),alt:""}})]),a("section",{staticClass:"profile__textarea"},[a("div",{staticClass:"profile__name"},[t._v(" "+t._s(this.params.profile_nickname)+" ")])])])])])},P=[],L={props:{params:Object},data:function(){return{}}},F=L,S=(0,c.Z)(F,y,P,!1,null,"76ea9344",null),K=S.exports,J={name:"FriendsView",components:{Nav:T,Profile:K},data:function(){return{user:{thumbnailURL:""},friends:{}}},created:function(){this.fnSelectUserProfile(),this.fnSelectFriends()},methods:{fnSelectUserProfile:function(){var t=this;Kakao.API.request({url:"/v1/api/talk/profile",success:function(e){t.user=e},fail:function(t){console.log(t)}})},fnSelectFriends:function(){var t=this;Kakao.API.request({url:"/v1/api/talk/friends",data:{friend_order:"nickname",limit:20},success:function(e){t.friends=e},fail:function(t){console.log(t)}})}}},D=J,j=(0,c.Z)(D,C,v,!1,null,"4c0651cf",null),Y=j.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chatview__container"},[n("Nav",{attrs:{selected:"chats"}}),n("div",{staticClass:"main"},[n("header",{staticClass:"header"},[n("span",{staticClass:"title",on:{click:function(e){return e.stopPropagation(),t.fnToggleChatSort(e)}}},[t._v(" 채팅 "),n("span",{staticClass:"arrow--down"},[t._v(" ▼ ")])]),n("NormalList",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.toggle.chatSort,expression:"this.$store.state.toggle.chatSort"}],staticClass:"normal__list",attrs:{params:t.normalList}}),t._m(0)],1),n("div",{staticClass:"chattings"},t._l(t.chatItems,(function(e){return n("div",{key:e.rindex,on:{dblclick:function(n){return t.fnSetChatRoom(e)}}},[n("Chat",{attrs:{params:e}})],1)})),0)]),t._l(t.roomItems,(function(t,e){return n("div",{key:e},[n("Room",{attrs:{params:t}})],1)}))],2)},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat--add"},[n("span",{staticClass:"material-symbols-outlined"},[t._v(" chat_add_on ")])])}],X=n(7965),z=(n(8309),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chatcomponent__container"},[n("div",{staticClass:"main"},[n("div",{staticClass:"room"},[t._m(0),n("section",{staticClass:"room__contents"},[n("div",{staticClass:"room__title"},[n("span",{staticClass:"room__type"}),n("span",{staticClass:"room__name"},[t._v(t._s(t.params.name))]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.fnIsGroup,expression:"fnIsGroup"}],staticClass:"room__member__count"},[t._v(t._s(t.params.headCount))]),n("span",{staticClass:"alarm"})]),t._m(1),t._m(2)])])])])}),G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"room__image"},[a("img",{attrs:{src:n(5393),alt:"kakao.png",loading:"lazy"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"room__last"},[n("span",{staticClass:"room__last__date"},[t._v("오후 3:17")]),n("span",{staticClass:"room__last__count"},[t._v("73")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"room__message"},[n("span",{staticClass:"message"},[t._v("감사합니다. 꾸벅! 잘 부탁드립니다~~ 반갑습니다!!")])])}],V={name:"ChatComponent",props:{params:Object},data:function(){return{}},computed:{fnIsGroup:function(){return this.params.headCount>1}}},H=V,q=(0,c.Z)(H,z,G,!1,null,"5fdfd96f",null),Z=q.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"room__container",style:t.actv?"":"display: none",on:{mouseup:function(e){return t.fnOnMouseUp()},mousedown:function(e){return t.fnOnMouseDown(e)},mousemove:function(e){return t.fnOnMouseMove(e)}}},[a("div",{staticClass:"profile"},[a("div",{staticClass:"profile__image",on:{mouseup:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()},mousemove:function(t){t.stopPropagation()}}},[a("img",{attrs:{src:n(5393),alt:"@/assets/kakaologo.png"}})]),a("div",{staticClass:"profile__textarea",on:{mouseup:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()},mousemove:function(t){t.stopPropagation()}}},[a("span",{staticClass:"profile__name"},[t._v(t._s(this.params.name))]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.fnIsGroup,expression:"fnIsGroup"}],staticClass:"profile__headcount"},[t._v(" ("+t._s(this.params.headCount)+")")])]),a("div",{staticClass:"close",on:{mouseup:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()},mousemove:function(t){t.stopPropagation()},click:function(e){return t.fnOnClickClose()}}},[a("span",{staticClass:"material-icons-outlined"},[t._v(" close ")])])]),a("div",{staticClass:"main",on:{mouseup:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()},mousemove:function(t){t.stopPropagation()}}},t._l(t.messageList,(function(e,n){return a("div",{key:n,staticClass:"chat"},[a("div",{class:e.author},[t._m(0,!0),a("div",{staticClass:"contents"},[a("div",{staticClass:"name"},[t._v(" 이장호 ")]),a("div",{staticClass:"msg"},[t._v(" "+t._s(e.message)+" ")])])])])})),0),a("div",{staticClass:"message",on:{mouseup:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()},mousemove:function(t){t.stopPropagation()}}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"input",domProps:{value:t.message},on:{keypress:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault(),!0===t.params.isMe?t.fnInsertMessageToMe():t.fnInsertMessageToFriends()},input:function(e){e.target.composing||(t.message=e.target.value)}}}),a("button",{staticClass:"submit",attrs:{disabled:t.fnIsNull(t.message)},on:{click:function(e){!0===t.params.isMe?t.fnInsertMessageToMe():t.fnInsertMessageToFriends()}}},[t._v(" 전송 ")])])])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile__image"},[a("img",{attrs:{src:n(8708),alt:"kakao.png"}})])}];function tt(t){return""===t||"undefined"===t||"null"===t||"NULL"===t}var et={name:"RoomComponent",props:{params:Object},data:function(){return{actv:!0,drag:{isDraggable:!1,shiftX:0,shiftY:0},message:"",messageList:[]}},created:function(){var t=this;E.Z.$on("OPEN_ROOM"+this.params.rindex,(function(){t.actv=!0}))},computed:{fnIsGroup:function(){return this.params.headCount>1}},methods:{fnInsertMessageToMe:function(){var t=this,e=this.message;this.message="";var n={url:"/v2/api/talk/memo/default/send",data:{template_object:{object_type:"text",text:e,link:{web_url:"",mobile_web_url:""},button_title:""}},success:function(){t.messageList.push({author:"user",message:e})},fail:function(t){console.log(t)}};Kakao.API.request(n)},fnInsertMessageToFriends:function(){var t=this,e=this.message;this.message="";var n={url:"/v1/api/talk/friends/message/default/send",data:{receiver_uuids:this.params.uuids,template_object:{object_type:"text",text:e,link:{web_url:"",mobile_web_url:""},button_title:""}},success:function(){t.messageList.push({author:"user",message:e})},fail:function(t){console.log(t)}};Kakao.API.request(n)},fnOnMouseDown:function(t){this.drag.isDraggable=!0,this.drag.shiftX=t.clientX-t.target.getBoundingClientRect().left,this.drag.shiftY=t.clientY-t.target.getBoundingClientRect().top},fnOnDragStart:function(){return!1},fnOnMouseUp:function(){this.drag.isDraggable=!1},fnOnMouseMove:function(t){this.drag.isDraggable&&(t.target.style.left=t.clientX-this.drag.shiftX+"px",t.target.style.top=t.clientY-this.drag.shiftY+"px")},fnOnClickClose:function(){this.actv=!1},fnIsNull:function(t){return tt(t)}}},nt=et,at=(0,c.Z)(nt,W,$,!1,null,"45d1da29",null),st=at.exports,ot={name:"ChatView",components:{Nav:T,Chat:Z,NormalList:M,Room:st},data:function(){return{normalList:{title:"CHATTING",itemList:[{name:"최신 메시지 순"},{name:"안 읽은 메시지 순"},{name:"즐겨찾기 순"},{name:"모두 읽음 처리"}]},chatItems:[{name:"현대건설",headCount:23,rindex:0,lastMessage:"",lastMessageDate:"",isRoomActive:!1,uuids:[],isMe:!1},{name:"산책방",headCount:12,rindex:1,lastMessage:"",lastMessageDate:"",isRoomActive:!1,uuids:[],isMe:!1},{name:"이장호",headCount:1,rindex:2,lastMessage:"",lastMessageDate:"",isRoomActive:!1,uuids:[],isMe:!1},{name:"권혁준",headCount:1,rindex:3,lastMessage:"",lastMessageDate:"",isRoomActive:!1,uuids:[],isMe:!1},{name:"배그",headCount:4,rindex:4,lastMessage:"",lastMessageDate:"",isRoomActive:!1,uuids:[],isMe:!1},{name:"강현대",headCount:1,rindex:6,lastMessage:"",lastMessageDate:"",isRoomActive:!1,uuids:[],isMe:!0},{name:"김준현",headCount:1,rindex:7,lastMessage:"",lastMessageDate:"",isRoomActive:!1,uuids:[],isMe:!1},{name:"호메방",headCount:9,rindex:8,lastMessage:"",lastMessageDate:"",isRoomActive:!1,uuids:[],isMe:!1}],roomItems:[]}},created:function(){E.Z.$on("NORMALLIST_"+this.normalList.name,(function(t){}))},methods:{fnToggleChatSort:function(){this.$store.state.toggle.chatSort=!this.$store.state.toggle.chatSort},fnSetChatRoom:function(t){if(!1===t.isRoomActive){var e,n=(0,X.Z)(this.chatItems);try{for(n.s();!(e=n.n()).done;){var a=e.value;if(t.rindex===a.rindex){a.isRoomActive=!0;break}}}catch(s){n.e(s)}finally{n.f()}this.roomItems.push(t)}else E.Z.$emit("OPEN_ROOM"+t.rindex)}}},it=ot,rt=(0,c.Z)(it,O,R,!1,null,"15659f6c",null),ct=rt.exports,At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Nav",{attrs:{selected:"more"}}),t._m(0)],1)},ut=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("header",{staticClass:"header"},[n("span",{staticClass:"title"},[t._v(" 더보기 ")]),n("div",{staticClass:"search"},[n("span",{staticClass:"material-icons-outlined"},[t._v(" search ")])])])])}],lt={name:"MoreView",components:{Nav:T}},mt=lt,ft=(0,c.Z)(mt,At,ut,!1,null,"3c216286",null),gt=ft.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},ht=[],pt=(n(9600),{data:function(){return{autoLogin:"",authorize:{baseUrl:"https://kauth.kakao.com",redirect_uri:"https://busyhuman.github.io/ktalk-clone/authmore",response_type:"code",scope:["friends"]},authorizeLink:"",token:{baseUrl:"https://kauth.kakao.com",path:"/oauth/token",grant_type:"authorization_code",redirect_uri:"https://busyhuman.github.io/ktalk-clone/auth",code:this.$route.query.code}}},created:function(){this.fnInit()},methods:{fnInit:function(){this.fnSelectToken()},fnSelectToken:function(){var t=this,e={method:"POST",headers:{"Content-type":"application/x-www-form-urlencoded;charset=utf-8"}};fetch(this.token.baseUrl+this.token.path+"?grant_type="+this.token.grant_type+"&client_id=f17d6c119019aed325c2d17a808aa4b2&redirect_uri="+this.token.redirect_uri+"&code="+this.token.code,e).then((function(t){return t.json()})).then((function(e){Kakao.Auth.setAccessToken(e.access_token),t.authorizeLink=t.authorize.baseUrl+"/oauth/authorize?client_id=f17d6c119019aed325c2d17a808aa4b2&redirect_uri="+t.authorize.redirect_uri+"&response_type="+t.authorize.response_type+"&scope="+t.authorize.scope.join(),window.location.href=t.authorizeLink}))}}}),Ct=pt,vt=(0,c.Z)(Ct,dt,ht,!1,null,null,null),kt=vt.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},Et=[],Qt={data:function(){return{token:{baseUrl:"https://kauth.kakao.com",path:"/oauth/token",grant_type:"authorization_code",redirect_uri:"https://busyhuman.github.io/ktalk-clone/authmore",code:this.$route.query.code}}},created:function(){this.fnSelectToken()},methods:{fnSelectToken:function(){var t=this,e={method:"POST",headers:{"Content-type":"application/x-www-form-urlencoded;charset=utf-8"}};fetch(this.token.baseUrl+this.token.path+"?grant_type="+this.token.grant_type+"&client_id=f17d6c119019aed325c2d17a808aa4b2&redirect_uri="+this.token.redirect_uri+"&code="+this.token.code,e).then((function(t){return t.json()})).then((function(e){Kakao.Auth.setAccessToken(e.access_token),localStorage.setItem("access_token",e.access_token),localStorage.setItem("refresh_token",e.refresh_token),localStorage.setItem("scope",e.scope),t.$router.push("friends")}))}}},Bt=Qt,It=(0,c.Z)(Bt,_t,Et,!1,null,null,null),xt=It.exports,bt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Mt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"not-found"},[n("div",{staticClass:"status"},[t._v(" 404 ")]),n("div",{staticClass:"message"},[t._v(" Page Not Found! ")])])}],Nt={},wt=(0,c.Z)(Nt,bt,Mt,!1,null,"5a0b1f0c",null),Ut=wt.exports;a.Z.use(l.Z);var Tt=new l.Z({mode:"history",routes:[{path:"/",redirect:"/signin"},{name:"auth",path:"/auth",component:kt},{name:"authmore",path:"/authmore",component:xt},{name:"signin",path:"/signin",component:p},{name:"friends",path:"/friends",component:Y},{name:"chats",path:"/chats",component:ct},{name:"more",path:"/more",component:gt},{path:"/:pathMatch(.*)*",name:"NotFound",component:Ut}]}),yt=n(4665);a.Z.use(yt.ZP);var Pt=new yt.ZP.Store({state:{toggle:{alarm:!0,setting:!1,chatSort:!1}}});a.Z.config.productionTip=!1,Kakao.init("2495bf6ebc1031589125c6fc21f9294b"),new a.Z({render:function(t){return t(u)},store:Pt,router:Tt}).$mount("#app")},3180:function(t,e,n){var a=n(8935);e["Z"]=new a.Z},8708:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhQAAAIVCAYAAACJJmZAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAABWpSURBVHhe7d3pchvXmYDhgx1cJGq1LFt22U5y4b4JX8xMTWpmEicjR85IFkWJJEBOfyBddmViRcLX6A3PU6USqV9Cn3OAt1eMvv3u+XUBAEgY3/4NALA1QQEApAkKACBNUAAAaYICAEgTFABAmqAAANIEBQCQJigAgDRBAQCkCQoAIE1QAABpggIASBMUAECaoAAA0gQFAJAmKACANEEBAKQJCgAgTVAAAGmCAgBIExQAQJqgAADSBAUAkCYoAIA0QQEApAkKACBNUAAAaYICAEgTFABAmqAAANIEBQCQJigAgDRBAQCkCQoAIE1QAABpggIASBMUAECaoAAA0gQFAJAmKACANEEBAKQJCgAgTVAAAGmCAgBIExQAQJqgAADSBAUAkCYoAIA0QQEApAkKACBNUAAAaYICAEgTFABAmqAAANIEBQCQJigAgDRBAQCkCQoAIE1QAABpggIASBMUAECaoAAA0gQFAJAmKACANEEBAKQJCgAgTVAAAGmCAgBIExQAQJqgAADSBAUAkCYoAIA0QQEApAkKACBNUAAAaYICAEgTFABAmqAAANIEBQCQJigAgDRBAQCkCQoAIE1QAABpggIASBMUAECaoAAA0gQFAJAmKACANEEBAKQJCgAgTVAAAGmCAgBIExQAQJqgAADSBAUAkCYoAIA0QQEApAkKACBNUAAAaYICAEgTFABAmqAAANIEBQCQJigAgDRBAQCkCQoAIE1QAABpggIASBMUAECaoAAA0gQFAJAmKACANEEBAKQJCgAgTVAAAGmCAgBIExQAQJqgAADSBAUAkCYoAIA0QQEApAkKACBNUAAAaYICAEgTFABAmqAAANIEBQCQJigAgDRBAQCkCQoAIE1QAABpggIASBMUAECaoAAA0gQFAJAmKACANEEBAKQJCgAgTVAAAGmCAgBIExQAQJqgAADSBAUAkCYoAIA0QQEApAkKACBNUAAAaYICAEgTFABA2ujb755f3/4M7LFJtXsxm47KeDwq8+rvn00mN79frK7Lev3L20X8fnV1XS7j369u/xHYW4IC9sy4CofDxbgs5uNNKCyrn+fT8SYo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"},5393:function(t,e,n){t.exports=n.p+"img/kakaologo.fea0afc8.png"}},e={};function n(a){var s=e[a];if(void 0!==s)return s.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,a,s,o){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],s=t[u][1],o=t[u][2];for(var r=!0,c=0;c<a.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(r=!1,o<i&&(i=o));if(r){t.splice(u--,1);var A=s();void 0!==A&&(e=A)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[a,s,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"-legacy.e75e04d7.js"}}(),function(){n.miniCssF=function(t){return"css/"+t+".c342e28e.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="ktalk-clone:";n.l=function(a,s,o,i){if(t[a])t[a].push(s);else{var r,c;if(void 0!==o)for(var A=document.getElementsByTagName("script"),u=0;u<A.length;u++){var l=A[u];if(l.getAttribute("src")==a||l.getAttribute("data-webpack")==e+o){r=l;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",e+o),r.src=a),t[a]=[s];var m=function(e,n){r.onerror=r.onload=null,clearTimeout(f);var s=t[a];if(delete t[a],r.parentNode&&r.parentNode.removeChild(r),s&&s.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/ktalk-clone/"}(),function(){var t=function(t,e,n,a){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var o=function(o){if(s.onerror=s.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=r,s.parentNode.removeChild(s),a(c)}};return s.onerror=s.onload=o,s.href=e,document.head.appendChild(s),s},e=function(t,e){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var s=n[a],o=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(o===t||o===e))return s}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){s=i[a],o=s.getAttribute("data-href");if(o===t||o===e)return s}},a=function(a){return new Promise((function(s,o){var i=n.miniCssF(a),r=n.p+i;if(e(i,r))return s();t(a,r,s,o)}))},s={143:0};n.f.miniCss=function(t,e){var n={88:1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=a(t).then((function(){s[t]=0}),(function(e){throw delete s[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,a){var s=n.o(t,e)?t[e]:void 0;if(0!==s)if(s)a.push(s[2]);else{var o=new Promise((function(n,a){s=t[e]=[n,a]}));a.push(s[2]=o);var i=n.p+n.u(e),r=new Error,c=function(a){if(n.o(t,e)&&(s=t[e],0!==s&&(t[e]=void 0),s)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;r.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",r.name="ChunkLoadError",r.type=o,r.request=i,s[1](r)}};n.l(i,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,o,i=a[0],r=a[1],c=a[2],A=0;if(i.some((function(e){return 0!==t[e]}))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(c)var u=c(n)}for(e&&e(a);A<i.length;A++)o=i[A],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},a=self["webpackChunkktalk_clone"]=self["webpackChunkktalk_clone"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(9998)}));a=n.O(a)})();
//# sourceMappingURL=app-legacy.8fec066c.js.map