<template>
  <div class="room__container"
  @mouseup="fnOnMouseUp()"
  @mousedown="fnOnMouseDown($event)"
  @mousemove="fnOnMouseMove($event)"
  >
    <div class="profile">
      <div class="profile__image"
      @mouseup.stop
      @mousedown.stop
      @mousemove.stop>
        <img src="@/assets/kakaologo.png" alt="kakao.png">
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
    ></div>
    <div class="message"
    @mouseup.stop
    @mousedown.stop
    @mousemove.stop>
      <textarea class="input" v-model="message"></textarea>
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
      drag: {
        isDraggable: false,
        shiftX: 0,
        shiftY: 0,
      },
      message: '',
    }
  },
  computed: {
    fnIsGroup() {
      console.log(this.params)
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
        event.target.style.left = event.pageX - this.drag.shiftX + 'px'
        event.target.style.top = event.pageY - this.drag.shiftY + 'px'
      }
    },
    fnOnClickClose() {
      EventBus.$emit('CLOSE_ROOM' + this.params.index)
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
  position: absolute;
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
    width: 318px;
    height: 350px;
    display: flex;
    top: 70px;
    position: absolute;
    background: #B2C7D9;
    
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