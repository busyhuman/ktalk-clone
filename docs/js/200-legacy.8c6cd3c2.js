"use strict";(self["webpackChunkktalk_clone"]=self["webpackChunkktalk_clone"]||[]).push([[200],{9200:function(n,i,t){t.r(i),t.d(i,{default:function(){return d}});var e=function(){var n=this,i=n.$createElement,t=n._self._c||i;return t("div",{staticClass:"chattadd__container"},[t("div",{staticClass:"main"},[n._m(0),t("div",{staticClass:"friend__list"},n._l(n.chosenFriendList,(function(i,e){return t("div",{key:e,staticClass:"friend--name"},[n._v(" "+n._s(i.name)+" ")])})),0),t("section",{staticClass:"friends"},[t("div",{staticClass:"friends__title"},[t("span",[n._v("친구 "+n._s(n.friends.total_count))])]),t("div",{staticClass:"friend__container"},n._l(n.friends.elements,(function(i){return t("div",{key:i.id,staticClass:"friend",on:{click:function(t){return n.fnToggleFriend(i)}}},[t("Profile",{attrs:{params:i}})],1)})),0)]),t("div",{staticClass:"footer"},[t("button",{staticClass:"confirm",attrs:{disabled:0===n.chosenFriendList.length},on:{click:function(i){return n.fnOnClickConfirm()}}},[n._v("확인")]),t("button",{staticClass:"cancel",on:{click:function(i){return n.fnOnClickCancel()}}},[n._v("취소")])])])])},s=[function(){var n=this,i=n.$createElement,t=n._self._c||i;return t("div",{staticClass:"header"},[t("div",{staticClass:"title"},[n._v(" 대화상대 선택 ")])])}],c=(t(7327),t(1539),t(1270)),r=t(3180),a={components:{Profile:c.Z},data:function(){return{chosenFriendList:[],friends:{},FRIEND_LIMIT_COUNT:5}},created:function(){this.fnSelectFriends()},methods:{fnSelectFriends:function(){var n=this;Kakao.API.request({url:"/v1/api/talk/friends",data:{friend_order:"nickname",limit:20},success:function(i){n.friends=i},fail:function(n){console.log(n)}})},fnToggleFriend:function(n){var i=!1;if(this.chosenFriendList=this.chosenFriendList.filter((function(t){var e=t.uuid!==n.uuid;return!1===e&&(i=!0),e})),!1===i&&this.chosenFriendList.length<this.FRIEND_LIMIT_COUNT){var t=n.profile_nickname,e=n.uuid;this.chosenFriendList.push({name:t,uuid:e})}},fnOnClickConfirm:function(){r.Z.$emit("CHATADD_CONFIRM",this.chosenFriendList)},fnOnClickCancel:function(){r.Z.$emit("CHATADD_CANCEL")}}},l=a,o=t(1001),f=(0,o.Z)(l,e,s,!1,null,"a6e6dba8",null),d=f.exports}}]);
//# sourceMappingURL=200-legacy.8c6cd3c2.js.map