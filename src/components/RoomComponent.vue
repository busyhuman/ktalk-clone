<template>
  <div class="room__container"
  @mouseup="fnOnMouseUp()"
  @mousedown="fnOnMouseDown($event)"
  @mousemove="fnOnMouseMove($event)"
  :style="actv ? '' : 'display: none'"
  >
    <div class="profile">
      <div class="profile__image"
      @mouseup.stop
      @mousedown.stop
      @mousemove.stop>
        <img src="@/assets/kakaologo.png" alt="@/assets/kakaologo.png">
      </div>
      <div class="profile__textarea"
      @mouseup.stop
      @mousedown.stop
      @mousemove.stop>
        <span class="profile__name">{{ this.params.name }}</span>
        <span class="profile__headcount" v-show="fnIsGroup"> ({{ this.params.headCount }})</span>            
      </div>
      <div class="close"
      @mouseup.stop
      @mousedown.stop
      @mousemove.stop
      @click="fnOnClickClose()">
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
      <div class="chat">
        <div class="other">
          <div class="profile__image">
            <img src="@/assets/baseprofile.png" alt="kakao.png">
          </div>
          <div class="contents">
            <div class="name">
              강현대
            </div>
            <div class="msg">
              뭐하누? ㅋ
            </div>
          </div>
        </div>
      </div>
      <div class="chat">
        <div class="user">
          <div class="profile__image">
            <img src="@/assets/baseprofile.png" alt="kakao.png">
          </div>
          <div class="contents">
            <div class="name">
              이장호
            </div>
            <div class="msg">
              나는.. 일하는중..
            </div>
          </div>
        </div>
      </div>
      <div class="chat">
        <div class="other">
          <div class="profile__image">
            <img src="@/assets/baseprofile.png" alt="kakao.png">
          </div>
          <div class="contents">
            <div class="name">
              강현대
            </div>
            <div class="msg">
               백포블 하자... ㅋㅋㅋㅋ ㅋㅋㅋㅋㅋㅋ  ㅋㅋㅋㅋㅋㅋㅋㅋㅋ ㅋㅋㅋㅋㅋ
            </div>
          </div>
        </div>
      </div>
      <div class="chat">
        <div class="other">
          <div class="profile__image">
            <img src="@/assets/baseprofile.png" alt="kakao.png">
          </div>
          <div class="contents">
            <div class="name">
              강현대
            </div>
            <div class="msg">
              호옹찡.. 싫누?
            </div>
          </div>
        </div>
      </div>
      <div class="chat">
        <div class="user">
          <div class="profile__image">
            <img src="@/assets/baseprofile.png" alt="kakao.png">
          </div>
          <div class="contents">
            <div class="name">
              이장호
            </div>
            <div class="msg">
              머른다
            </div>
          </div>
        </div>
      </div>
      <div class="chat">
        <div class="other">
          <div class="profile__image">
            <img src="@/assets/baseprofile.png" alt="kakao.png">
          </div>
          <div class="contents">
            <div class="name">
              강현대
            </div>
            <div class="msg">
              아는게 머노?
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="message"
    @mouseup.stop
    @mousedown.stop
    @mousemove.stop>
      <textarea class="input" v-model="message" @keypress.enter.prevent="fnEnterMessage()"></textarea>
      <button class="submit" :disabled="fnIsNull(message)">
        전송
      </button>
    </div>
  </div>
</template>

<script>
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
    }
  },
  created() {
    EventBus.$on('OPEN_ROOM' + this.params.rindex, () => {
      console.log(this.params.rindex)
      this.actv = true
    })
  },
  computed: {
    fnIsGroup() {
      return this.params.headCount > 1
    }
  },
  methods: {
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
    fnEnterMessage() {
      console.log('wow')
      this.message = ''
    },
    fnIsNull(msg) {
      return Utils.isNull(msg)
    }
  }
}
</script>

<style lang="scss" scoped>
.room__container {
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 300px;
  top: 60px;
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

            .msg__date {

            }
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

            .msg__date {

            }
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