(function(){"use strict";var t={5764:function(t,e,s){var a=s(8935),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",on:{click:function(e){return t.fnResetToggle()}}},[s("RouterView")],1)},o=[],i={name:"App",data(){return{tokenFreePathList:["/signin","/auth","/authmore"]}},created(){0===this.tokenFreePathList.filter((t=>t===this.$route.path)).length&&(Kakao.Auth.getAccessToken()||this.$router.push("signin"))},methods:{fnResetToggle(){this.$store.state.toggle.chatSort=!1,this.$store.state.toggle.setting=!1}}},r=i,A=s(1001),c=(0,A.Z)(r,n,o,!1,null,"881f0ab2",null),l=c.exports,u=s(2809),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"body"},[s("main",{staticClass:"sign-in"},[t._m(0),s("div",{staticClass:"sign-in__form"},[s("div",{staticClass:"sign-in__submit"},[s("a",{attrs:{href:t.authorizeLink}},[s("button",{staticClass:"submit actv",attrs:{type:"button"}},[t._v("로그인")])])]),s("div",{staticClass:"auto-login no-drag"},[s("input",{attrs:{type:"checkbox",id:"autoLogin"},domProps:{checked:t.autoLogin},on:{click:function(e){return t.fnSetAutoLogin()}}}),s("label",{attrs:{for:"autoLogin"}},[t._v("자동로그인")]),s("span",{staticClass:"material-icons",on:{click:function(e){t.isCheckMessageShow=!0}}},[t._v(" help_outline ")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isCheckMessageShow,expression:"isCheckMessageShow"}],staticClass:"check__message"},[s("p",[t._v("자동로그인을 모르시나요?")])])])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"kakao__image"},[a("img",{attrs:{src:s(5393),alt:"kakao.png"}})])}],f={data(){return{autoLogin:"",authorize:{baseUrl:"https://kauth.kakao.com",redirect_uri:"https://busyhuman.github.io/ktalk-clone/auth",response_type:"code"},authorizeLink:"",isCheckMessageShow:!1}},created(){this.fnTokenExpire(),this.authorizeLink=this.authorize.baseUrl+"/oauth/authorize?client_id=f17d6c119019aed325c2d17a808aa4b2&redirect_uri="+this.authorize.redirect_uri+"&response_type="+this.authorize.response_type,this.autoLogin=JSON.parse(localStorage.getItem("autoLogin"))},methods:{fnSetAutoLogin(){this.autoLogin=!this.autoLogin,localStorage.setItem("autoLogin",this.autoLogin)},fnTokenExpire(){Kakao.Auth.getAccessToken()&&Kakao.Auth.logout()}}},h=f,d=(0,A.Z)(h,m,g,!1,null,"7a7e5b94",null),p=d.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"friendsview__container"},[a("Nav",{attrs:{selected:"friends"}}),a("div",{staticClass:"main"},[t._m(0),a("div",{staticClass:"contents"},[a("section",{staticClass:"user__profile"},[a("div",{staticClass:"profile"},[a("div",{staticClass:"profile__image"},[""!==t.user.thumbnailURL?a("img",{attrs:{src:t.user.thumbnailURL,alt:""}}):a("img",{attrs:{src:s(5393),alt:""}})]),a("div",{staticClass:"profile__textarea"},[a("div",{staticClass:"profile__name"},[t._v(" "+t._s(t.user.nickName)+" ")])])])]),a("section",{staticClass:"friends"},[a("div",{staticClass:"friends__title"},[a("span",[t._v("친구 "+t._s(t.friends.total_count))])]),a("div",{staticClass:"friend__container"},t._l(t.friends.elements,(function(t){return a("div",{key:t.id,staticClass:"friend"},[a("Profile",{attrs:{params:t}})],1)})),0)])])])],1)},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[s("span",{staticClass:"title"},[t._v(" 친구 ")]),s("div",{staticClass:"search"},[s("span",{staticClass:"material-icons-outlined"},[t._v(" search ")])]),s("div",{staticClass:"friend-add"},[s("span",{staticClass:"material-icons-outlined"},[t._v(" person_add_alt_1 ")])])])}],k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("nav",{staticClass:"main"},[s("router-link",{staticClass:"friends",class:{actv:"friends"===t.selected},attrs:{to:{path:"/friends"}}},[s("span",{staticClass:"material-icons"},[t._v(" person ")])]),s("router-link",{staticClass:"chats",class:{actv:"chats"===t.selected},attrs:{to:{path:"/chats"}}},[s("span",{staticClass:"material-icons"},[t._v(" chat_bubble ")])]),s("router-link",{staticClass:"more",class:{actv:"more"===t.selected},attrs:{to:{path:"/more"}}},[s("span",{staticClass:"material-icons"},[t._v(" more_horiz ")])]),s("div",{staticClass:"alarm"},[!0===t.fnGetAlarm?s("span",{staticClass:"material-icons-outlined",on:{click:function(e){return t.fnToggleAlarm()}}},[t._v(" notifications ")]):t._e(),!1===t.fnGetAlarm?s("span",{staticClass:"material-icons-outlined",on:{click:function(e){return t.fnToggleAlarm()}}},[t._v(" notifications_off ")]):t._e()]),s("div",{staticClass:"settings"},[s("span",{staticClass:"material-icons-outlined",on:{click:function(e){return e.stopPropagation(),t.fnToggleSetting()}}},[t._v(" settings ")]),s("NormalList",{directives:[{name:"show",rawName:"v-show",value:!0===t.fnGetSetting,expression:"fnGetSetting === true"}],staticClass:"normal__list",attrs:{params:t.normalList}})],1)],1),s(t.componentName,{tag:"component"})],1)},_=[],E=s(3180),Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"main"},[s("ul",{staticClass:"item__list"},t._l(t.params.itemList,(function(e,a){return s("li",{key:a,staticClass:"item",on:{click:function(e){return t.fnOnClickItem(a)}}},[t._v(" "+t._s(e.name)+" ")])})),0)])])},B=[],I={name:"NormalList",props:{params:Object},data(){return{}},methods:{fnOnClickItem(t){E.Z.$emit("NORMALLIST_"+this.params.title,t)}}},b=I,x=(0,A.Z)(b,Q,B,!1,null,"6ba35557",null),M=x.exports,w={components:{Alarm:()=>s.e(88).then(s.bind(s,1088)),NormalList:M},props:{selected:String},data(){return{componentName:"",normalList:{},api:{baseUrl:"https://kapi.kakao.com"}}},created(){this.normalList={title:"setting",itemList:[{name:"설정",func:""},{name:"잠금모드"},{name:"로그아웃",func:this.fnTokenExpire},{name:"종료",func:this.fnSignOut}]},E.Z.$on("NORMALLIST_"+this.normalList.title,(t=>{this.normalList.itemList[t].func()}))},computed:{fnGetAlarm(){return this.$store.state.toggle.alarm},fnGetSetting(){return this.$store.state.toggle.setting}},methods:{fnSignOut(){Kakao.API.request({url:"/v1/user/unlink",success:()=>{localStorage.setItem("autoLogin",!1),localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("scope"),this.$router.push("signin")},fail:function(){}})},fnTokenExpire(){Kakao.Auth.getAccessToken()&&Kakao.Auth.logout((()=>{localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("scope"),this.$router.push("signin")}))},fnToggleAlarm(){this.componentName="Alarm",this.$store.state.toggle.alarm=!this.$store.state.toggle.alarm,E.Z.$emit("ALARM",this.$store.state.toggle.alarm)},fnToggleSetting(){this.$store.state.toggle.setting=!this.$store.state.toggle.setting}}},N=w,U=(0,A.Z)(N,k,_,!1,null,"68a9708b",null),T=U.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"main"},[a("div",{staticClass:"profile"},[a("div",{staticClass:"profile__image"},[""!==this.params.profile_thumbnail_image?a("img",{attrs:{src:this.params.profile_thumbnail_image}}):a("img",{attrs:{src:s(5393),alt:""}})]),a("section",{staticClass:"profile__textarea"},[a("div",{staticClass:"profile__name"},[t._v(" "+t._s(this.params.profile_nickname)+" ")])])])])])},P=[],y={props:{params:Object},data(){return{}}},F=y,S=(0,A.Z)(F,L,P,!1,null,"76ea9344",null),K=S.exports,J={name:"FriendsView",components:{Nav:T,Profile:K},data(){return{user:{thumbnailURL:""},friends:{}}},created(){this.fnSelectUserProfile(),this.fnSelectFriends()},methods:{fnSelectUserProfile(){Kakao.API.request({url:"/v1/api/talk/profile",success:t=>{this.user=t},fail:function(t){console.log(t)}})},fnSelectFriends(){Kakao.API.request({url:"/v1/api/talk/friends",data:{friend_order:"nickname",limit:20},success:t=>{this.friends=t},fail:function(t){console.log(t)}})}}},D=J,j=(0,A.Z)(D,C,v,!1,null,"4c0651cf",null),Y=j.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chatview__container"},[s("Nav",{attrs:{selected:"chats"}}),s("div",{staticClass:"main"},[s("header",{staticClass:"header"},[s("span",{staticClass:"title",on:{click:function(e){return e.stopPropagation(),t.fnToggleChatSort(e)}}},[t._v(" 채팅 "),s("span",{staticClass:"arrow--down"},[t._v(" ▼ ")])]),s("NormalList",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.toggle.chatSort,expression:"this.$store.state.toggle.chatSort"}],staticClass:"normal__list",attrs:{params:t.normalList}}),t._m(0)],1),s("div",{staticClass:"chattings"},t._l(t.chatItems,(function(e){return s("div",{key:e.rindex,on:{dblclick:function(s){return t.fnSetChatRoom(e)}}},[s("Chat",{attrs:{params:e}})],1)})),0)]),t._l(t.roomItems,(function(t,e){return s("div",{key:e},[s("Room",{attrs:{params:t}})],1)}))],2)},R=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat--add"},[s("span",{staticClass:"material-symbols-outlined"},[t._v(" chat_add_on ")])])}],X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chatcomponent__container"},[s("div",{staticClass:"main"},[s("div",{staticClass:"room"},[t._m(0),s("section",{staticClass:"room__contents"},[s("div",{staticClass:"room__title"},[s("span",{staticClass:"room__type"}),s("span",{staticClass:"room__name"},[t._v(t._s(t.params.name))]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.fnIsGroup,expression:"fnIsGroup"}],staticClass:"room__member__count"},[t._v(t._s(t.params.headCount))]),s("span",{staticClass:"alarm"})]),t._m(1),t._m(2)])])])])},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"room__image"},[a("img",{attrs:{src:s(5393),alt:"kakao.png",loading:"lazy"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"room__last"},[s("span",{staticClass:"room__last__date"},[t._v("오후 3:17")]),s("span",{staticClass:"room__last__count"},[t._v("73")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"room__message"},[s("span",{staticClass:"message"},[t._v("감사합니다. 꾸벅! 잘 부탁드립니다~~ 반갑습니다!!")])])}],G={name:"ChatComponent",props:{params:Object},data(){return{}},computed:{fnIsGroup(){return this.params.headCount>1}}},V=G,H=(0,A.Z)(V,X,z,!1,null,"5fdfd96f",null),q=H.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"room__container",style:t.actv?"":"display: none",on:{mouseup:function(e){return t.fnOnMouseUp()},mousedown:function(e){return t.fnOnMouseDown(e)},mousemove:function(e){return t.fnOnMouseMove(e)}}},[a("div",{staticClass:"profile"},[a("div",{staticClass:"profile__image",on:{mouseup:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()},mousemove:function(t){t.stopPropagation()}}},[a("img",{attrs:{src:s(5393),alt:"@/assets/kakaologo.png"}})]),a("div",{staticClass:"profile__textarea",on:{mouseup:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()},mousemove:function(t){t.stopPropagation()}}},[a("span",{staticClass:"profile__name"},[t._v(t._s(this.params.name))]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.fnIsGroup,expression:"fnIsGroup"}],staticClass:"profile__headcount"},[t._v(" ("+t._s(this.params.headCount)+")")])]),a("div",{staticClass:"close",on:{mouseup:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()},mousemove:function(t){t.stopPropagation()},click:function(e){return t.fnOnClickClose()}}},[a("span",{staticClass:"material-icons-outlined"},[t._v(" close ")])])]),a("div",{staticClass:"main",on:{mouseup:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()},mousemove:function(t){t.stopPropagation()}}},t._l(t.messageList,(function(e,s){return a("div",{key:s,staticClass:"chat"},[a("div",{class:e.author},[t._m(0,!0),a("div",{staticClass:"contents"},[a("div",{staticClass:"name"},[t._v(" 이장호 ")]),a("div",{staticClass:"msg"},[t._v(" "+t._s(e.message)+" ")])])])])})),0),a("div",{staticClass:"message",on:{mouseup:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()},mousemove:function(t){t.stopPropagation()}}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"input",domProps:{value:t.message},on:{keypress:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault(),!0===t.params.isMe?t.fnInsertMessageToMe():t.fnInsertMessageToFriends()},input:function(e){e.target.composing||(t.message=e.target.value)}}}),a("button",{staticClass:"submit",attrs:{disabled:t.fnIsNull(t.message)},on:{click:function(e){!0===t.params.isMe?t.fnInsertMessageToMe():t.fnInsertMessageToFriends()}}},[t._v(" 전송 ")])])])},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile__image"},[a("img",{attrs:{src:s(8708),alt:"kakao.png"}})])}];function $(t){return""===t||"undefined"===t||"null"===t||"NULL"===t}var tt={name:"RoomComponent",props:{params:Object},data(){return{actv:!0,drag:{isDraggable:!1,shiftX:0,shiftY:0},message:"",messageList:[]}},created(){E.Z.$on("OPEN_ROOM"+this.params.rindex,(()=>{this.actv=!0}))},computed:{fnIsGroup(){return this.params.headCount>1}},methods:{fnInsertMessageToMe(){let t=this.message;this.message="";let e={url:"/v2/api/talk/memo/default/send",data:{template_object:{object_type:"text",text:t,link:{web_url:"",mobile_web_url:""},button_title:""}},success:()=>{this.messageList.push({author:"user",message:t})},fail:function(t){console.log(t)}};Kakao.API.request(e)},fnInsertMessageToFriends(){let t=this.message;this.message="";let e={url:"/v1/api/talk/friends/message/default/send",data:{receiver_uuids:this.params.uuids,template_object:{object_type:"text",text:t,link:{web_url:"",mobile_web_url:""},button_title:""}},success:()=>{this.messageList.push({author:"user",message:t})},fail:function(t){console.log(t)}};Kakao.API.request(e)},fnOnMouseDown(t){this.drag.isDraggable=!0,this.drag.shiftX=t.clientX-t.target.getBoundingClientRect().left,this.drag.shiftY=t.clientY-t.target.getBoundingClientRect().top},fnOnDragStart(){return!1},fnOnMouseUp(){this.drag.isDraggable=!1},fnOnMouseMove(t){this.drag.isDraggable&&(t.target.style.left=t.clientX-this.drag.shiftX+"px",t.target.style.top=t.clientY-this.drag.shiftY+"px")},fnOnClickClose(){this.actv=!1},fnIsNull(t){return $(t)}}},et=tt,st=(0,A.Z)(et,Z,W,!1,null,"45d1da29",null),at=st.exports,nt={name:"ChatView",components:{Nav:T,Chat:q,NormalList:M,Room:at},data(){return{normalList:{title:"CHATTING",itemList:[{name:"최신 메시지 순"},{name:"안 읽은 메시지 순"},{name:"즐겨찾기 순"},{name:"모두 읽음 처리"}]},chatItems:[{name:"현대건설",headCount:23,rindex:0,lastMessage:"",lastMessageDate:"",isRoomActive:!1,uuids:[],isMe:!1},{name:"산책방",headCount:12,rindex:1,lastMessage:"",lastMessageDate:"",isRoomActive:!1,uuids:[],isMe:!1},{name:"이장호",headCount:1,rindex:2,lastMessage:"",lastMessageDate:"",isRoomActive:!1,uuids:[],isMe:!1},{name:"권혁준",headCount:1,rindex:3,lastMessage:"",lastMessageDate:"",isRoomActive:!1,uuids:[],isMe:!1},{name:"배그",headCount:4,rindex:4,lastMessage:"",lastMessageDate:"",isRoomActive:!1,uuids:[],isMe:!1},{name:"강현대",headCount:1,rindex:6,lastMessage:"",lastMessageDate:"",isRoomActive:!1,uuids:[],isMe:!0},{name:"김준현",headCount:1,rindex:7,lastMessage:"",lastMessageDate:"",isRoomActive:!1,uuids:[],isMe:!1},{name:"호메방",headCount:9,rindex:8,lastMessage:"",lastMessageDate:"",isRoomActive:!1,uuids:[],isMe:!1}],roomItems:[]}},created(){E.Z.$on("NORMALLIST_"+this.normalList.name,(t=>{}))},methods:{fnToggleChatSort(){this.$store.state.toggle.chatSort=!this.$store.state.toggle.chatSort},fnSetChatRoom(t){if(!1===t.isRoomActive){for(let e of this.chatItems)if(t.rindex===e.rindex){e.isRoomActive=!0;break}this.roomItems.push(t)}else E.Z.$emit("OPEN_ROOM"+t.rindex)}}},ot=nt,it=(0,A.Z)(ot,O,R,!1,null,"15659f6c",null),rt=it.exports,At=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("Nav",{attrs:{selected:"more"}}),t._m(0)],1)},ct=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("header",{staticClass:"header"},[s("span",{staticClass:"title"},[t._v(" 더보기 ")]),s("div",{staticClass:"search"},[s("span",{staticClass:"material-icons-outlined"},[t._v(" search ")])])])])}],lt={name:"MoreView",components:{Nav:T}},ut=lt,mt=(0,A.Z)(ut,At,ct,!1,null,"3c216286",null),gt=mt.exports,ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div")},ht=[],dt={data(){return{autoLogin:"",authorize:{baseUrl:"https://kauth.kakao.com",redirect_uri:"https://busyhuman.github.io/ktalk-clone/authmore",response_type:"code",scope:["friends"]},authorizeLink:"",token:{baseUrl:"https://kauth.kakao.com",path:"/oauth/token",grant_type:"authorization_code",redirect_uri:"https://busyhuman.github.io/ktalk-clone/auth",code:this.$route.query.code}}},created(){this.fnInit()},methods:{fnInit(){this.fnSelectToken()},fnSelectToken(){let t={method:"POST",headers:{"Content-type":"application/x-www-form-urlencoded;charset=utf-8"}};fetch(this.token.baseUrl+this.token.path+"?grant_type="+this.token.grant_type+"&client_id=f17d6c119019aed325c2d17a808aa4b2&redirect_uri="+this.token.redirect_uri+"&code="+this.token.code,t).then((t=>t.json())).then((t=>{Kakao.Auth.setAccessToken(t.access_token),this.authorizeLink=this.authorize.baseUrl+"/oauth/authorize?client_id=f17d6c119019aed325c2d17a808aa4b2&redirect_uri="+this.authorize.redirect_uri+"&response_type="+this.authorize.response_type+"&scope="+this.authorize.scope.join(),window.location.href=this.authorizeLink}))}}},pt=dt,Ct=(0,A.Z)(pt,ft,ht,!1,null,null,null),vt=Ct.exports,kt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div")},_t=[],Et={data(){return{token:{baseUrl:"https://kauth.kakao.com",path:"/oauth/token",grant_type:"authorization_code",redirect_uri:"https://busyhuman.github.io/ktalk-clone/authmore",code:this.$route.query.code}}},created(){this.fnSelectToken()},methods:{fnSelectToken(){let t={method:"POST",headers:{"Content-type":"application/x-www-form-urlencoded;charset=utf-8"}};fetch(this.token.baseUrl+this.token.path+"?grant_type="+this.token.grant_type+"&client_id=f17d6c119019aed325c2d17a808aa4b2&redirect_uri="+this.token.redirect_uri+"&code="+this.token.code,t).then((t=>t.json())).then((t=>{Kakao.Auth.setAccessToken(t.access_token),localStorage.setItem("access_token",t.access_token),localStorage.setItem("refresh_token",t.refresh_token),localStorage.setItem("scope",t.scope),this.$router.push("friends")}))}}},Qt=Et,Bt=(0,A.Z)(Qt,kt,_t,!1,null,null,null),It=Bt.exports;a.Z.use(u.Z);const bt=new u.Z({mode:"history",routes:[{path:"/",redirect:"/signin"},{name:"auth",path:"/auth",component:vt},{name:"authmore",path:"/authmore",component:It},{name:"signin",path:"/signin",component:p},{name:"friends",path:"/friends",component:Y},{name:"chats",path:"/chats",component:rt},{name:"more",path:"/more",component:gt}]});var xt=s(4665);a.Z.use(xt.ZP);const Mt=new xt.ZP.Store({state:{toggle:{alarm:!0,setting:!1,chatSort:!1}}});a.Z.config.productionTip=!1,Kakao.init("2495bf6ebc1031589125c6fc21f9294b"),new a.Z({render:t=>t(l),store:Mt,router:bt}).$mount("#app")},3180:function(t,e,s){var a=s(8935);e["Z"]=new a.Z},8708:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhQAAAIVCAYAAACJJmZAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAABWpSURBVHhe7d3pchvXmYDhgx1cJGq1LFt22U5y4b4JX8xMTWpmEicjR85IFkWJJEBOfyBddmViRcLX6A3PU6USqV9Cn3OAt1eMvv3u+XUBAEgY3/4NALA1QQEApAkKACBNUAAAaYICAEgTFABAmqAAANIEBQCQJigAgDRBAQCkCQoAIE1QAABpggIASBMUAECaoAAA0gQFAJAmKACANEEBAKQJCgAgTVAAAGmCAgBIExQAQJqgAADSBAUAkCYoAIA0QQEApAkKACBNUAAAaYICAEgTFABAmqAAANIEBQCQJigAgDRBAQCkCQoAIE1QAABpggIASBMUAECaoAAA0gQFAJAmKACANEEBAKQJCgAgTVAAAGmCAgBIExQAQJqgAADSBAUAkCYoAIA0QQEApAkKACBNUAAAaYICAEgTFABAmqAAANIEBQCQJigAgDRBAQCkCQoAIE1QAABpggIASBMUAECaoAAA0gQFAJAmKACANEEBAKQJCgAgTVAAAGmCAgBIExQAQJqgAADSBAUAkCYoAIA0QQEApAkKACBNUAAAaYICAEgTFABAmqAAANIEBQCQJigAgDRBAQCkCQoAIE1QAABpggIASBMUAECaoAAA0gQFAJAmKACANEEBAKQJCgAgTVAAAGmCAgBIExQAQJqgAADSBAUAkCYoAIA0QQEApAkKACBNUAAAaYICAEgTFABAmqAAANIEBQCQJigAgDRBAQCkCQoAIE1QAABpggIASBMUAECaoAAA0gQFAJAmKACANEEBAKQJCgAgTVAAAGmCAgBIExQAQJqgAADSBAUAkCYoAIA0QQEApAkKACBNUAAAaYICAEgTFABAmqAAANIEBQCQJigAgDRBAQCkCQoAIE1QAABpggIASBMUAECaoAAA0gQFAJAmKACANEEBAKQJCgAgTVAAAGmCAgBIExQAQJqgAADSBAUAkCYoAIA0QQEApAkKACBNUAAAaYICAEgTFABA2ujb755f3/4M7LFJtXsxm47KeDwq8+rvn00mN79frK7Lev3L20X8fnV1XS7j369u/xHYW4IC9sy4CofDxbgs5uNNKCyrn+fT8SYothVBcbG6Ku/OrzahcX5xVc6qn6+EBuwNQQEDNxpVAbEcl6PlpPozLgdVQDTlbRUVb97Fn3U5q/6+9m4DgyUoYIAiIu4cTMrJ8aQcH07KLycw2hNvNKdn6/LqdF1ev12LCxgYQQEDEkciTo4m5e7RNHUKY9fiFMlPb1bl1ZubIxdA/wkKGIB7x5Py8GRWFrMuHIv4OOeX1+XHV5fl5en69l+APurwPgzwPnFa4/6dafnDs2X57NG8lzER4v8d//94HfF64nUB/SMooIce3L0JiacPZ5tbPYcgXke8nnhd8fqAfhEU0CNxjcTvPl+WTx/MynQyzF35eF3x+uJ1xusF+sFqhR6ICyzjtMBXny56e2rjY8XrjNcbr7vLF5gCNyxT6Li44PL3zw42f++jfX/90BeCAjoqLk589nhuD73y8xGa2B4u2oRuEhTQQYv5qHzz2bLcPbJX/muxPWK7xPYBukVQQMfErZNfP60+NPfkWomPFdsltk9sJ6A7BAV0SNzdELdOjrXEe8X2ie0U2wvoBkEBHRD98PnjuecvfKTYXrHdgPYJCmhZXGT4xaeLzXdw8PFiu31ZbT8Xa0K7BAW0KO5e+Orpohx7gFNKbL/Yjp5XAe2x/KAlsUf95ZNFOZhbhnWI7Rjb05EKaId3MmjJF59UMbGwBOsU2zO2K9A872bQgriQ8PjA8tuF2K4u1ITmeUeDhj15MHMB5o7F9o3tDDRHUECDTo4n5aFbQxsR2zm2N9AMQQENmc9G5elDh+KbFNs7tjuwe4ICGhB3Hjx7vPAEzIbF9o7t7s4P2D1BAQ2IR0QvfaFVK2K7e0Q37J6ggB27ezjxRVYti+0f4wDsjqCAHYpD7k8e2jvughgHp5xgdwQF7NDj+7Mym/gU64IYhxgPYDcEBezIYjby7aEdE+MR4wLUT1DAjsQtiz66uiXGw627sBuCAnbg7tGkHPoG0U6KcYnxAerlHQ924NGJc/VdZnygfoICanZ8OPHMiY6L8YlxAuojKKBmj05ciNkHxgnqJSigRkfLcTlcWFZ9EOMU4wXUw2qCGj10br5XjBfUR1BATaaTUTk6sKT6JMYrxg3I8+4HNTk5nnjuRM/EeMW4AXmCAmpy79hFfn1k3KAeggJqELcheqRzP8W4uc0X8gQF1ODEXm6vGT/IExRQgzsektRrxg/yBAUkzaajMq/+0F8xfjGOwPYEBST5ErBhMI6QYwVB0tHS4fIhMI6QIyggyeObh8E4Qo4VBAlx3t2592EwlpAjKCDBsyeGxXjC9gQFJMxnltCQGE/YntUDCfZoh8V4wvYEBSTYox0W4wnbs3ogYW6PdlCMJ2xPUMCWRtVnz2ziA2hIYjxjXIGPJyhgS2MfPINkXGE7ggK2NPbJM0jGFbYjKGBLY6tnkIwrbMfSgS2NnWwfJOMK2xEUsKWJ1TNIxhW2Y+nAlkb2ZAfJuMJ2BAVs6erq+vYnhsS4wnYEBWzJ584wGVfYjqCALdmTHSbjCtsRFLAlnzvDZFxhO4ICtmRPdpiMK2xHUMCW1lel+OgZlhjPGFfg4wkKSLi4lBRDYjxhe4ICEi4u7c4OifGE7QkKSLhY2aMdEuMJ2xMUkHBuj3ZQjCdsT1BAgnPuw2I8YXuCAhLeXVy502MgYhxjPIHtCApIuKo+f3wIDUOMY4wnsB1BAUln73wKDcGbt8YRMgQFJL15u779iT47e2ccIUNQQFIcoXAdRb/F+DnSBDmCApLiqx/envsw6rMYP1/hATmCAmrw0xuHy/vM+EGeoIAavDpdOe3RUzFuMX5AjqCAGsQ3VJ66OLOXYtx8wyjkCQqoyU+ngqKPjBvUQ1BATX46W7uwr2fiyESMG5AnKKAm11VMvHztXHyfbK59EYFQC0EBNXrxauUoRU/EOMV4AfUQFFCj1fraLYg9EeMU4wXUQ1BAzf728tItpB0X4xPjBNRHUEDNLlfX5bWjFJ0W4xPjBNRHUMAOxN6vaym6KcblB0cnoHaCAnbg/PK6/P0nF/x1UYzLRTU+QL0EBexIHKVwWL1bYjxcOwG7IShgR+L5Bs//7sOrS2I8PHcCdkNQwA7FUxhP3/qiiC6IcfBUTNgdQQE79tcfL3z5VMti+8c4ALsjKGDH4rz9X174MGtTbH/Xs8BuCQpowOuztbs+WvJjtd1j+wO7JSigIXFB4NsL5z6aFNv7BxfGQiMEBTQkDrj/+QfXUzQltnNsbyc6oBmCAhoU5/H/+/m5p2juWGzf2M6um4DmCApo2Nvzq/Lnv9lz3pXYrrF9YzsDzREU0ILTs3X5qzs/diK2a2xfoFmCAlry8nRdfvhfFwzWKbZnbFegeYICWvTi1ao8FxW1iLtoYnsC7RAU0LIfqw/B71+4pmJbsd1i+8XzJoD2CArogFen6/Ind398tNhesd1i+wHtEhTQEfHlVf/1P+dl5eaEDxLbKbaXL1+DbhAU0CFxq+Mfv39Xzt75kHyf2D6xndwaCt0hKKBjVuvr8p/VnrcLDP+52C6xfWI7Ad0hKKCj4hbIeNqjUyA3YjvE9nCrLXSToIAOi+sD/vj9271/tkK8/tgOrpeA7hIU0HGrqiX+8uJic5j//HK/DvPH643XHa8/tgPQXYICeiIuRPyP799tHoQ19NtL4/XF64zX6wJV6AdBAT0TD8L69z+93TzIaWhhEa8nXtfm9bkoFXpFUEAPraud9njU9L9VH7x/e7na/N5n8f+P1xGvJ15X318P7CNBAT12tfkgvtzs0ccpgotVvw5ZxP83/t/x/4/XEa8H6KfRt989H/jZWNgvB4txOTmelJOjaZl0cJchjj68erPaPC7bg6lgOAQFDNidw0m5ezQph1VkzKaj239t3uXqupxV8fDTm3V5feZ2DRgiQQF7IoLi6GBcjpdVYCzHZTrZXWDEUyzj7ozTd+vy5u3VJiiAYRMUsKfidMh8Ni6L2ags5uMyr4JjWv2ZVaHxIbFxWUVDhMOqioW4FuL84mrz3IiLyysXVcIeEhTAe0VcTCc3D9jy/RnAb3GXB/BeERHvLm6ORgD8FkEBAKQJCgAgTVAAAGmCAgBIExQAQJqgAADSBAUAkCYoAIA0QQEApAkKACBNUAAAaYICAEgTFABAmqAAANIEBQCQJigAgDRBAQCkCQoAIE1QAABpggIASBMUAECaoAAA0kbffvf8+vZnoAMmVebPZ+OymI1u/6WU2XRcppPbXyrx++RXvw/Nel3K5erq9rdSVv/w+/nldbm4vCrrX/4JaJmggJYs56NNOMymN3/H74vq7/EvHcG/cFW9e51XYfHu4iYwLlc3f8fvQLMEBTTkaDkuh8tJ9We8+ZndevPuqpxt/qw3PwO7JShgRw4WN+Hwc0Q48tCeOJLx67h4ey4woG6CAmoUAXFyPC13DiebayHoprj24vXZurw6XTl6ATURFJA0n442EXHvzqTMJg5D9M3l+rq8fH0TFxcrb4ewLUEBWxiPSzk5qiLieLI5tcEwxKmQl6dVXLxZlSsHLuCjCAr4CNPJqDy6FyExdU3EgMU1Fy9PV+XFy1VZrb1FwoewawUfIE5rfPZoXv7wxbI8uCMmhi7GN8Y5xjvGPcYfeD9BAe+xmI/K54/n5ffPlpvTGz5W9kuMd4x7jH/Mg5gPwD8nKOCfiKdUfvHJvPzus2U5ORrwIyn5YDEPYj7EvPj1U0yBG4ICfmVUfU48eTAr33y+3Nz6Cf8o5kXMj5gnMV+AG4ICbt2tPih+X31QPLw7dWqD94r5EfMk5kvMG0BQwOa7NL58sijPPplvfoYPFfMl5k3MH3OHfSco2FtxuPrxvVn5XbWXeXxgKbC9mD8xj2I+yQr2lXdR9lLsTX79ND4A3AJKPWIexXz6+rOloxXsJUHB3rl7NCnfVG/68XXhULeYVzG/Yp7BPhEU7I3Ih6cPZ+XZ47kv7mKnYn7FPIv5JlvZF95W2QubUxzVXuP9O9Pbf4Hdi/nmFAj7QlAweE5x0CanQNgXgoJBe3gydYqD1v18CiTmIwyVt1kGK55k+OT+7PY3aF/Mx5iXMESCgkGKL3KKJxlC18S8jPkJQyMoGJR4WNWXny58oRedFvMz5qnvAmFIBAWDEeepv6repI+XpjXdF/M05qvrexgKU5lB2MTE02U5WJjS9EfM15i3ooIhMI3pvZ9Pcyxmjh/TPzFvnf5gCAQFvRbvwV88WZSDualMf8X8jXkMfeZdmF6Lq+VdM8EQxDyOZ1VAX3knprc+fTDz9EEGJeZzzGvoI0FBLz06mZYHnjPBAMW8jvkNfSMo6J2T40n5xBMwGbCY3zHPoU8EBb0SV8Q/feg8M8MX89ydS/SJoKA34ra6Z58syth7LHsg5nnMd7eT0heCgt6wx8a+cUSOPhEU9EKcT77nnDJ7KOa96ynoA0FB583tpbHnYv7HOoAuExR02ua6iceum2C/ba6nqNaB6ynoMkFBpz2+NyvLuXdRiHUQ6wG6SlDQWXFBmodXwS9iPTj1QVcJCjrr04dzpzrgV2I9uJ6IrhIUdFJ8p8GRL/2C/yfWhe+woYu8Y9M5sRf2xBckwW+K9eHoHV0jKOicx/dnZTbxbgm/JdZHrBPoEkFBpyzmLsSEDxHrJNYLdIWgoFOePJgXb5Hwr8U6eXLfBZp0h6CgM5bzcTl2ISZ8sOOD8WbdQBeYiXTGo3tOdcDHsm7oCkFBJ8RDrO4cuhUOPlasG9/CSxcICjrh4cnMtROwhVg3sX6gbYKC1s2mI1/PDAmxfmIdQZsEBa17dDJ1dAISYv3EOoI2CQpaNZ3E3pU3QsiKdRTrCdoiKGhVvAl6hDDkxToS57RJUNCqkyNvgFAX64k2CQpas5yPNn+AesR68jhu2iIoaI3Ds1C/e9YVLREUtObukSvIoG7WFW0RFLTi6GDsK8phB2JdHflOHFpg1tEKF4/B7jidSBsEBY0bjRyWhV2K9RXrDJokKGjc4WLs2ROwQ7G+Yp1Bk8w4Gnd04OgE7Jp1RtMEBY07dMEY7Jx1RtPMOBoVh2IPHIqFnYt15tQiTfLOTqNir8l7HOxerDNHKWiS2UajDpfO60JTrDeaJChoVDzQCmiG9UaTzDYaM65m23JuykFTYr3FuoMmmGo0ZjFz/QQ0KdZbrDtogplGYxYzOQFNs+5oiqCgMXN7StA4646mmGk0xp4SNG9u3dEQQUFj7ClB81xDQVPMNBozm9pTgqZZdzRFUNCIefWm5jHA0LxYd6KCJggKGuE8LrTH9Us0QVDQiNnUVIO2WH80wSyjEZ7WB+2x/miCaUYjxiOHXKEt1h9NEBQ0wh4StMf6owmmGY1whwe0x/qjCYKCRoy9o0FrrD+aIChohPczaI/1RxMEBY2whwTtsf5owujb755f3/4MO/PZo3lZzL2pQRvOL67LX15c3P4GuyEoAIA0pzwAgDRBAQCkCQoAIE1QAABpggIASBMUAECaoAAA0gQFAJAmKACANEEBAKQJCgAgTVAAAGmCAgBIExQAQJqgAADSBAUAkCYoAIA0QQEApAkKACBNUAAAaYICAEgTFABAmqAAANIEBQCQJigAgDRBAQCkCQoAIE1QAABpggIASBMUAECaoAAA0gQFAJAmKACANEEBAKQJCgAgTVAAAGmCAgBIExQAQJqgAADSBAUAkCYoAIA0QQEApAkKACBNUAAAaYICAEgTFABAmqAAANIEBQCQJigAgDRBAQCkCQoAIE1QAABpggIASBMUAECaoAAA0gQFAJAmKACANEEBAKQJCgAgTVAAAGmCAgBIExQAQJqgAADSBAUAkCYoAIA0QQEApAkKACBNUAAAaYICAEgTFABAmqAAANIEBQCQJigAgDRBAQCkCQoAIE1QAABpggIASBMUAECaoAAA0gQFAJAmKACANEEBAKQJCgAgTVAAAGmCAgBIExQAQJqgAADSBAUAkCYoAIA0QQEApAkKACBNUAAAaYICAEgTFABAmqAAANIEBQCQJigAgDRBAQCkCQoAIE1QAABpggIASBMUAECaoAAA0gQFAJAmKACANEEBAKQJCgAgTVAAAGmCAgBIExQAQJqgAADSBAUAkCYoAIA0QQEApAkKACBNUAAAaYICAEgTFABAmqAAANIEBQCQJigAgDRBAQCkCQoAIE1QAABpggIASBMUAECaoAAA0gQFAJAmKACANEEBAKQJCgAgTVAAAGmCAgBIExQAQJqgAADSBAUAkCYoAIA0QQEApAkKACBNUAAAaYICAEgTFABAmqAAANIEBQCQJigAgDRBAQCkCQoAIE1QAABpggIASBMUAECaoAAA0gQFAJAmKACApFL+D/9p5iMPusFAAAAAAElFTkSuQmCC"},5393:function(t,e,s){t.exports=s.p+"img/kakaologo.fea0afc8.png"}},e={};function s(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,s),o.exports}s.m=t,function(){var t=[];s.O=function(e,a,n,o){if(!a){var i=1/0;for(l=0;l<t.length;l++){a=t[l][0],n=t[l][1],o=t[l][2];for(var r=!0,A=0;A<a.length;A++)(!1&o||i>=o)&&Object.keys(s.O).every((function(t){return s.O[t](a[A])}))?a.splice(A--,1):(r=!1,o<i&&(i=o));if(r){t.splice(l--,1);var c=n();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[a,n,o]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,a){return s.f[a](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/"+t+".f890be98.js"}}(),function(){s.miniCssF=function(t){return"css/"+t+".c342e28e.css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="ktalk-clone:";s.l=function(a,n,o,i){if(t[a])t[a].push(n);else{var r,A;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var u=c[l];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==e+o){r=u;break}}r||(A=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.setAttribute("data-webpack",e+o),r.src=a),t[a]=[n];var m=function(e,s){r.onerror=r.onload=null,clearTimeout(g);var n=t[a];if(delete t[a],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach((function(t){return t(s)})),e)return e(s)},g=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),A&&document.head.appendChild(r)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/ktalk-clone/"}(),function(){var t=function(t,e,s,a){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var o=function(o){if(n.onerror=n.onload=null,"load"===o.type)s();else{var i=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.href||e,A=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");A.code="CSS_CHUNK_LOAD_FAILED",A.type=i,A.request=r,n.parentNode.removeChild(n),a(A)}};return n.onerror=n.onload=o,n.href=e,document.head.appendChild(n),n},e=function(t,e){for(var s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var n=s[a],o=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===t||o===e))return n}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){n=i[a],o=n.getAttribute("data-href");if(o===t||o===e)return n}},a=function(a){return new Promise((function(n,o){var i=s.miniCssF(a),r=s.p+i;if(e(i,r))return n();t(a,r,n,o)}))},n={143:0};s.f.miniCss=function(t,e){var s={88:1};n[t]?e.push(n[t]):0!==n[t]&&s[t]&&e.push(n[t]=a(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}(),function(){var t={143:0};s.f.j=function(e,a){var n=s.o(t,e)?t[e]:void 0;if(0!==n)if(n)a.push(n[2]);else{var o=new Promise((function(s,a){n=t[e]=[s,a]}));a.push(n[2]=o);var i=s.p+s.u(e),r=new Error,A=function(a){if(s.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;r.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",r.name="ChunkLoadError",r.type=o,r.request=i,n[1](r)}};s.l(i,A,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,o,i=a[0],r=a[1],A=a[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(n in r)s.o(r,n)&&(s.m[n]=r[n]);if(A)var l=A(s)}for(e&&e(a);c<i.length;c++)o=i[c],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(l)},a=self["webpackChunkktalk_clone"]=self["webpackChunkktalk_clone"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(5764)}));a=s.O(a)})();
//# sourceMappingURL=app.fd86e9a0.js.map