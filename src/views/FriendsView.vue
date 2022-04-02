<template>
  <div class="container">
    <Nav />
    <div class="main">
      <header class="header">
        <span class="title">
          친구
        </span>
        <div class="search">

        </div>
        <div class="friend-add">

        </div>
      </header>

      <section class="user">
        <div class="profile">
          <div class="profile__image">
            <img src="@/assets/kakaologo.png" alt="kakao.png">
          </div>
          <div class="profile__textarea">
            <div class="profile__name">
              강현대
            </div>
            <div class="profile__hello">
              호멤메....
            </div>
          </div>
        </div>
      </section>
      <section class="friends">
        <div class="friends__title">
          <span>친구 238</span>
          <span>^</span>
        </div>
        <div class="friend__container">
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
        </div>

      </section>
    </div>
  </div>
</template>

<script>

import Nav from '@/components/NavComponent'
import Profile from '@/components/ProfileComponent'
export default {
  name: 'FriendsView',
  components: {
    Nav,
    Profile,
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
.main {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  overflow-x: hidden;
  overflow-y: auto;
  padding-left: 80px; /** Navigtion width에 따라 변경해야함 */
  .header {
    position: relative;
    left: 20px;
    .title {
      font-size: 36px;
      font-weight: 500;
    }
  }
  .user {
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
    .friends__title {
      position: relative;
      left: 20px;
      font-size: 11px;
    }

  }
}
</style>