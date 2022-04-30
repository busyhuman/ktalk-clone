<template>
  <div class="chattadd__container">
    <ModalBack />
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
          <div class="friend" v-for="item in friends.elements" :key="item.id" @click="chosenFriendList.push({ name: item.profile_nickname})">
            <Profile :params="item" />
          </div>
        </div>
      </section>
      <div class="footer">
        <button class="confirm actv">확인</button>
        <button class="cancel">취소</button>
      </div>
    </div>
  </div>
</template>

<script>
/*global Kakao*/
import Profile from '@/components/ProfileComponent'
import ModalBack from '@/components/modal/ModalBackComponent'
export default {
  components: {
    Profile,
    ModalBack
  },
  data() {
    return {
      chosenFriendList: [],
      friends: {},
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
          this.friends.elements.push({
            favorite: false,
            id: 2118344788,
            profile_nickname: "이장호",
            profile_thumbnail_image: "https://p.kakaocdn.net/th/talkp/wmXf663frN/2XBwJdejzzUqjtZDyob2Tk/7lo1ya_110x110_c.jpg",
            uuid: "s4a2jr-IvY2hkKSSpZyrmaGXu4y_jrmOutA",
          })
          this.friends.elements.push({
            favorite: false,
            id: 2218344828,
            profile_nickname: "이장호2",
            profile_thumbnail_image: "https://p.kakaocdn.net/th/talkp/wmXf663frN/2XBwJdejzzUqjtZDyob2Tk/7lo1ya_110x110_c.jpg",
            uuid: "s4a2jr-IvY2hkKSSpZyrmaGXu4y_jrmOutA",
          })
          this.friends.elements.push({
            favorite: false,
            id: 2218364828,
            profile_nickname: "이장호3",
            profile_thumbnail_image: "https://p.kakaocdn.net/th/talkp/wmXf663frN/2XBwJdejzzUqjtZDyob2Tk/7lo1ya_110x110_c.jpg",
            uuid: "s4a2jr-IvY2hkKSSpZyrmaGXu4y_jrmOutA",
          })
          this.friends.elements.push({
            favorite: false,
            id: 2218394828,
            profile_nickname: "이장호4",
            profile_thumbnail_image: "https://p.kakaocdn.net/th/talkp/wmXf663frN/2XBwJdejzzUqjtZDyob2Tk/7lo1ya_110x110_c.jpg",
            uuid: "s4a2jr-IvY2hkKSSpZyrmaGXu4y_jrmOutA",
          })
        },
        fail: function(error) {
          console.log(error);
        }
      });


    },
  }
}
</script>

<style lang="scss" scoped>
.chattadd__container {
  display: flex;
  flex-direction: column;
  width: 30vw;
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

        &.actv{
          cursor: pointer;
          background-color: #423630;
          color: white;
        }
      }
      .cancel {
        width: 20%;
        height: 50%;
        margin-right: 5px;
        border: none;
      }
    }
  }
}
</style>