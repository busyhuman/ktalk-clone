<template>
  <div class="chattadd__container">
    <div class="main">
      <div class="header">
        <div class="title">
          대화상대 선택
        </div>
      </div>
      <div class="friend__list">
        <div class="friend--name" v-for="(item, index) in chosenFriendList" :key="index">
          {{ item.name }}
        </div>
      </div>
      <section class="friends">
        <div class="friends__title">
          <span>친구 {{ friends.total_count }}</span>
        </div>
        <div class="friend__container">
          <div class="friend" v-for="item in friends.elements" :key="item.id" @click="fnToggleFriend(item)">
            <Profile :params="item" />
          </div>
        </div>
      </section>
      <div class="footer">
        <button class="confirm" :disabled="chosenFriendList.length === 0" @click="fnOnClickConfirm()">확인</button>
        <button class="cancel" @click="fnOnClickCancel()">취소</button>
      </div>
    </div>
  </div>
</template>

<script>
/*global Kakao*/
import Profile from '@/components/ProfileComponent'
import EventBus from '@/utils/eventBus'
export default {
  components: {
    Profile,
  },
  data() {
    return {
      chosenFriendList: [],
      friends: {},
      FRIEND_LIMIT_COUNT: 5,
    }
  },
  created() {
    this.fnSelectFriends()
  },
  methods: {
    /**
     * 친구 목록 가져오기
     */
    fnSelectFriends() {
      Kakao.API.request({
        url: '/v1/api/talk/friends',
        data: {
          friend_order: 'nickname',
          limit: 20,
        },
        success: (res) => {
          this.friends = res
        },
        fail: function(error) {
          console.log(error);
        }
      });
    },
    /**
     * 친구 토글
     */
    fnToggleFriend(item) {
      let isToggled = false
      this.chosenFriendList = this.chosenFriendList.filter( (it) => {
        const isUuidSame = it.uuid !== item.uuid
        if( isUuidSame === false){
          isToggled = true
        }
        return isUuidSame
      })

      if( isToggled === false && this.chosenFriendList.length < this.FRIEND_LIMIT_COUNT){
        let name = item.profile_nickname
        let uuid = item.uuid
        this.chosenFriendList.push({
          name,
          uuid
        })
      }
    },
    /**
     * 확인버튼 클릭
     */
    fnOnClickConfirm() {
      EventBus.$emit('CHATADD_CONFIRM', this.chosenFriendList)
    },
    /**
     * 취소버튼 클릭
     */
    fnOnClickCancel() {
      EventBus.$emit('CHATADD_CANCEL')
    }
  }
}
</script>

<style lang="scss" scoped>
.chattadd__container {
  display: flex;
  flex-direction: column;
  width: 30vw;
  min-width: 250px;
  height: 60vh;
  background: white;
  position: fixed;
  z-index: 900;
  left: 35vw;
  top: 20vh;
  border: 1px solid black;
  border-radius: 5%;
  .main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .header {
      width: 100%;
      height: 10%;
      padding: 20px;
      .title{
        font-size: 14px;
      }
    }
    .friend__list {
      width: 100%;
      height: 10%;
      position: relative;
      margin: 5px 0;
      padding: 0 20px;
      max-height: 60px;
      overflow-y: auto;
      display: flex;
      flex-wrap: wrap;

      .friend--name {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 5px;
        margin-right: 5px;
        border: 1px solid;
        border-radius: 40px;
        height: 50%;
        font-size: 11px;
      }
    }
    .friends {
      width: 100%;
      height: 60%;
      .friends__title {
        position: relative;
        left: 20px;
        font-size: 11px;
        height: 5%;
      }
      .friend__container {
        width: 100%;
        height: 95%;
        overflow-y: auto;
      }
    }

    .footer {
      width: 100%;
      height: 15%;
      padding: 0 20px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      border-top: 0.5px solid gray;
      .confirm {
        width: 20%;
        height: 50%;
        margin-right: 5px;
        border: none;
        background: #FEE500;
        cursor: pointer;
      }
      .cancel {
        width: 20%;
        height: 50%;
        margin-right: 5px;
        border: none;
        cursor: pointer;
      }
    }
  }
}
</style>