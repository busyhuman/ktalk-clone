<template>
  <div class="chatcomponent__container"
  @dblclick="componentName = 'Room'"
  >
    <div class="main">
      <div class="room">
        <div class="room__image">
          <img src="@/assets/kakaologo.png" alt="kakao.png">
        </div>
        <section class="room__contents">
          <div class="room__title">
            <span class="room__type"></span>
            <span class="room__name">{{ params.name }}</span>
            <span class="room__member__count" v-show="fnIsGroup">{{ params.headCount }}</span>
            <span class="alarm"></span>
          </div>
          <div class="room__last">
            <span class="room__last__date">오후 3:17</span>
            <span class="room__last__count">73</span>
          </div>
          <div class="room__message">
            <span class="message">감사합니다. 꾸벅! 잘 부탁드립니다~~ 반갑습니다!!</span>
          </div>
        </section>
      </div>
    </div>
    <component :is="componentName" :params="params" />
  </div>
</template>

<script>
import EventBus from '@/utils/eventBus'
export default {
  name: 'ChatComponent',
  components: {
    Room: () => import('@/components/RoomComponent')
  },
  props: {
    params: Object
  },
  data() {
    return {
      componentName: '',
      roomList: [],
    }
  },
  created() {
    EventBus.$on('CLOSE_ROOM' + this.params.index, () => {
      this.componentName = ''
    });
  },
  computed: {
    fnIsGroup() {
      console.log(this.params)
      return this.params.headCount > 1
    }
  },
}
</script>

<style lang="scss" scoped>
.chatcomponent__container{
  display: flex;
}
.main {
  width: 100%;
  padding: 10px 20px;
  position: relative;

  &:hover{
    background-color: #F8F8F8;
  }
  &.actv{
    background-color: #F2F2F2;
  }
  .room {
    display: flex;
    align-items: center;
    max-width: 80%;
    .room__image {
      img {
        width: 64px;
        height: 64px;
        border: 1 solid;
        border-radius: 30%;
      }
    }
    .room__last {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      position: absolute;
      top: 30px;
      right: 20px;

      .room__last__date {
        font-size: 11px;
      }
      .room__last__count {
        display: block;
        text-align: center;
        padding: 4px 8px;
        color: white;
        margin-top: 5px;
        font-size: 12px;
        font-weight: 600;
        background: #FF5442;
        border-radius: 10px;
      }
    }
    .room__contents {
      margin-left: 10px;
      .room__title {
        display: flex;

        .room__name {
          font-size: 14px;
          font-weight: 600;
        }
        .room__member__count {
          display: flex;
          align-items: center;
          font-size: 11px;
          margin-left: 5px;
          color: #8094BB;
        }

        .alarm {
          margin-left: 5px;
        }
      }

      .room__message {
        margin-top: 5px;

        .message {
          font-size: 12px;
          color: #A2738B;
        }
      }
    }
  }
}
</style>