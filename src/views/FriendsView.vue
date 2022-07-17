<template>
  <div class="friendsview__container">
    <Nav selected="friends" />
    <div class="main">
      <header class="header">
        <span class="title">
          친구
        </span>
        <!-- <div class="search">
          <span class="material-icons-outlined">
            search
          </span>
        </div>
        <div class="friend-add">
          <span class="material-icons-outlined">
            person_add_alt_1
          </span>
        </div> -->
      </header>
      <div class="contents">
        <section class="user__profile">
          <div class="profile">
            <div class="profile__image">
              <img :src="user.thumbnailURL" alt="baseprofile" v-if="user.thumbnailURL !== ''">
              <img src="@/assets/baseprofile.png" alt="baseprofile" v-else>
            </div>
            <div class="profile__textarea">
              <div class="profile__name">
                {{ user.nickName }}
              </div>
              <!-- <div class="profile__hello">
                호멤메....
              </div> -->
            </div>
          </div>
        </section>
        <section class="friends">
          <div class="friends__title">
            <span>친구 {{ friends.total_count }}</span>
          </div>
          <div class="friend__container">
            <div class="friend" v-for="item in friends.elements" :key="item.id">
              <Profile :params="item" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
/*global Kakao*/
import Nav from '@/components/NavComponent'
import Profile from '@/components/ProfileComponent'
export default {
  name: 'FriendsView',
  components: {
    Nav,
    Profile,
  },
  data() {
    return {
      user: {
        thumbnailURL: '',
      },
      friends: {},
    }
  },
  created() {
    this.fnSelectUserProfile()
    this.fnSelectFriends()
  },
  methods: {
    /**
     * 유저 프로필 가져오기
     */
    fnSelectUserProfile() {
      Kakao.API.request({
        url: '/v1/api/talk/profile',
        success: (res) => {
          this.user = res
          // if(this.user.thumbnailURL === ''){
          //   this.user.thumbnailURL = '../assets/kakaologo.png'
          // }
        },
        fail: function(error) {
          console.log(error);
        }
      });
    },
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
  }
}
</script>

<style lang="scss" scoped>
.friendsview__container {
  display: flex;
  width: 100vw;
  height: 100vh; 
  .main {
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    padding-left: 80px; /** Navigtion width에 따라 변경해야함 */
    width: calc(100% - 20px);
    height: 100%;
    .header {
      display: flex;
      position: relative;
      left: 20px;
      .title {
        font-size: 36px;
        font-weight: 500;
      }

      .search {
        .material-icons-outlined {
          display: block;
          font-size: 36px;
          position: absolute;
          right: 90px;
          
          &:hover {
            background-color: #F3F3F3;
            border-radius: 100%;
            cursor: pointer;
          }
        }
      }
      .friend-add {
        .material-icons-outlined {
          display: block;
          font-size: 36px;
          position: absolute;
          right: 40px;
          
          &:hover {
            background-color: #F3F3F3;
            border-radius: 100%;
            cursor: pointer;
          }
        }
      }
    }
    .contents {
      width: 100%;
      position: relative;
      margin-top: 10px;
      .user__profile {
        padding: 10px 20px;
        .profile {
          display: flex;
          align-items: center;
          .profile__image{
            img {
              width: 90px;
              height: 90px;
              border: 1 solid;
              border-radius: 30%;
            }
          }
          .profile__textarea{
            display: flex;
            flex-direction: column;
            margin-left: 10px;
            .profile__name {
              font-size: 13px;
              font-weight: 700;
              margin: 2px 0;
            }
            .profile__hello {
              font-size: 12px;
              font-weight: 400;
              margin: 2px 0;
            }
          }
        }
      }
      .friends {
        position: absolute;
        width: 100%;
        .friends__title {
          position: relative;
          left: 20px;
          font-size: 11px;
        }
        .friend {
          width: 100%;
        }
      }
    }
  }
}
</style>