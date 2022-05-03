<template>
  <div class="room__container"
  @mouseup="fnOnMouseUp()"
  @mousedown="fnOnMouseDown($event)"
  @mousemove="fnOnMouseMove($event)"
  :style="actv ? '' : 'display: none'"
  >
    <div class="profile"
    @mouseup.stop
    @mousedown.stop
    @mousemove.stop>
      <div class="profile__image">
        <img src="@/assets/kakaologo.png" alt="@/assets/kakaologo.png">
      </div>
      <div class="profile__textarea">
        <span class="profile__name">{{ this.params.name }}</span>
        <span class="profile__headcount" v-show="fnIsGroup"> ({{ this.params.headCount }})</span>            
      </div>
      <div class="close" @click="fnOnClickClose()">
        <span class="material-icons-outlined">
          close
        </span>
      </div>
    </div>

    <div class="main"
    @mouseup.stop
    @mousedown.stop
    @mousemove.stop
    >
      <div class="chat" v-for="(item, index) in messageList" :key="index">
        <div :class=item.author>
          <div class="profile__image">
            <img src="@/assets/baseprofile.png" alt="kakao.png">
          </div>
          <div class="contents">
            <div class="name">
              이장호
            </div>
            <div class="msg">
              {{ item.message }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="message"
    @mouseup.stop
    @mousedown.stop
    @mousemove.stop>
      <textarea class="input" v-model="message" @keypress.enter.prevent="params.isMe === true ? fnInsertMessageToMe() : fnInsertMessageToFriends()"></textarea>
      <button class="submit" :disabled="fnIsNull(message)" @click="params.isMe === true ? fnInsertMessageToMe() : fnInsertMessageToFriends()">
        전송
      </button>
    </div>
  </div>
</template>

<script>
/*global Kakao*/
import EventBus from '@/utils/eventBus'
import * as Utils from '@/utils/util'
export default {
  name: 'RoomComponent',
  props: {
    params: Object
  },
  data() {
    return {
      actv : true,
      drag: {
        isDraggable: false,
        shiftX: 0,
        shiftY: 0,
      },
      message: '',
      messageList: [],
    }
  },
  created() {
    EventBus.$on('OPEN_ROOM' + this.params.rindex, () => {
      this.actv = true
    })
  },
  computed: {
    fnIsGroup() {
      return this.params.headCount > 1
    }
  },
  methods: {
    /**
     * 나에게 메시지 보내기
     */
    fnInsertMessageToMe() {
      let message = this.message
      this.message = ''

      let option = {
        url: '/v2/api/talk/memo/default/send',
        data: {
          template_object: {
            "object_type": "text",
            "text": message,
            "link": {
              "web_url": "",
              "mobile_web_url": ""
            },
            "button_title": ""
          },
        },
        success: () => {
          this.messageList.push({
            author: 'user',
            message: message,
          })
          EventBus.$emit('ROOM' + this.params.rindex, (message))
        },
        fail: function(error) {
          console.log(error);
        },
      }
      Kakao.API.request(option)

    },
    /**
     * 친구들에게 메시지 보내기
     */
    fnInsertMessageToFriends() {
      let message = this.message
      this.message = ''

      let option = {
        url: '/v1/api/talk/friends/message/default/send',
        data: {
          receiver_uuids: this.params.uuids,
          template_object: {
            "object_type": "text",
            "text": message,
            "link": {
              "web_url": "",
              "mobile_web_url": ""
            },
            "button_title": ""
          },
        },
        success: () => {
          this.messageList.push({
            author: 'user',
            message: message,
          })
          EventBus.$emit('ROOM' + this.params.rindex, (message))
        },
        fail: function(error) {
          console.log(error);
        },
      }
      Kakao.API.request(option)
    },
    fnOnMouseDown(event) {
      this.drag.isDraggable = true
      this.drag.shiftX = event.clientX - event.target.getBoundingClientRect().left
      this.drag.shiftY = event.clientY - event.target.getBoundingClientRect().top
    },

    fnOnDragStart() {
      return false;
    },
    fnOnMouseUp() {
      this.drag.isDraggable = false
    },
    fnOnMouseMove(event) {
      if(this.drag.isDraggable){
        event.target.style.left = event.clientX - this.drag.shiftX + 'px'
        event.target.style.top = event.clientY - this.drag.shiftY + 'px'
      }
    },
    fnOnClickClose() {
      this.actv = false
    },
    fnIsNull(msg) {
      return Utils.isNull(msg)
    }
  }
}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 10px;
}
  
::-webkit-scrollbar-thumb {
  background: #8B9AA6;
}
.room__container {
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 20px;
  top: 20px;
  width: 320px;
  height: 480px;
  z-index: 600;
  background: #A9BDCE;
  border: 1px solid;
  .profile {
    display: flex;
    height: 0.1px;
    margin: 10px 0 0 10px;
    .profile__image {
      img {
        padding: 5px;
        width: 48px;
        height: 48px;
        border: 1 solid;
        border-radius: 30%;
      }
    }
    .profile__textarea{
      display: flex;
      margin-left: 10px;
      .profile__name {
        font-size: 13px;
        font-weight: 600;
        margin: 2px 0;
      }
      .profile__headcount {
        font-size: 12px;
        margin-top: 4px;
        font-weight: 300;
        margin-left: 2px;
      }
    }
    .close {
      display: flex;
      position: absolute;
      right: 2px;
      top: 2px;
      padding: 5px;
      .material-icons-outlined{
        font-size: 14px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  .main {
    display: flex;
    flex-direction: column;
    width: 318px;
    height: 330px;
    display: flex;
    top: 70px;
    position: absolute;
    padding: 10px;
    background: #B2C7D9;
    overflow-y: auto;
    overflow-x: hidden;
    .chat {
      padding: 2px;
      width: 100%;
      margin-top: 5px;

      .other {
        display: flex;
        width: 100%;
        .profile__image {
          img {
            width: 42px;
            height: 42px;
            border: 1 solid;
            border-radius: 30%;
          }
        }
        .contents {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          margin: 5px 0 0 7px;
          .name {
            font-size: 12px;
            font-weight: 500;
          }
          .msg {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            max-width: 80%;
            margin-top: 5px;
            font-size: 12px;
            background: white;
            padding: 7px;
            border-radius: 5%;
          }
        }
      }

      .user {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-start;
        width: 100%;
        .profile__image {
          img {
            width: 0;
            height: 0;
          }
        }
        .contents {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          width: 100%;
          margin: 0 0 5px 0;
          .name {
            font-size: 0;
          }
          .msg {
            display: flex;
            flex-wrap: wrap;
            max-width: 80%;
            margin-top: 5px;
            font-size: 12px;
            background: #FFEB33;
            padding: 7px;
            border-radius: 5%;
          }
        }
      }
    }
  }
  .message {
    position: absolute;
    bottom: 0;
    background: white;
    width: 318px;
    height: 80px;
    .input {
      width: 75%;
      height: 100%;
      resize: none;
      border-style: none;
      font-size: 13px;
      font-family: sans-serif;
      padding: 10px;

      &:focus {
        outline: none;
      }
    }

    .submit{
      display: flex;
      position: absolute;
      background: #FFEC42;
      right: 10px;
      top: 10px;
      border-style: none;
      padding: 5px 10px;
      font-size: 12px;
    }
  }
}


</style>