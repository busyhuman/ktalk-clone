<template>
  <div class="body">
    <main class="sign-in">
      <div class="kakao__image">
        <img src="@/assets/kakaologo.png" alt="kakao.png">
      </div>
      <div class="sign-in__form">
        <!-- <div class="sign-in__id">
          <input type="text" placeholder="카카오계정 (이메일 또는 전화번호)">
        </div>
        <div class="sign-in__password">
          <input type="password">
        </div> -->
        <div class="sign-in__submit">
          <button class="submit actv" type="button" @click="fnLogin()">로그인</button>
        </div>
          <div class="auto-login">
          <input type="checkbox" id="autoLogin" :checked="autoLogin" @click="fnSetAutoLogin()">
          <label for="autoLogin">자동로그인</label>
          <span class="material-icons" @click="isCheckMessageShow=true">
            help_outline
          </span>
        </div>
      </div>
      <div class="check__message" v-show="isCheckMessageShow">
        <p>자동로그인을 모르시나요?</p>
      </div>
    </main>
  </div>
</template>

<script>
/*global Kakao*/
export default {
  data() {
    return {
      autoLogin: '',
      authorize: {
        baseUrl: 'https://kauth.kakao.com',
        redirect_uri: process.env.VUE_APP_BASE_URL + '/auth',
        response_type: 'code',
      },
      authorizeLink: '',
      isCheckMessageShow: false,
    }
  },
  created() {
    this.fnTokenExpire()
    this.authorizeLink = this.authorize.baseUrl + '/oauth/authorize' + '?' + 'client_id=' + process.env.VUE_APP_REST_KEY + '&' + 'redirect_uri=' + this.authorize.redirect_uri + '&' + 'response_type=' + this.authorize.response_type
    this.autoLogin = JSON.parse(localStorage.getItem('autoLogin'))  // JSON.parse를 해야 문자열로된 boolean값을 boolean으로 변환할 수 있다.

    if(this.autoLogin === true) {
      this.fnLogin()
    }
  },
  methods: {
    fnSetAutoLogin () {
      this.autoLogin = !this.autoLogin
      localStorage.setItem('autoLogin', this.autoLogin)
    },
    fnTokenExpire() {
      if (!Kakao.Auth.getAccessToken()) {
        return;
      }
      Kakao.Auth.logout();
    },
    fnLogin() {
      location.href = this.authorizeLink
    }
  }
}
</script>

<style lang="scss" scoped>
.body {
  background-color: #FFEB33;
  height: 100vh;  /** 화면에 꽉체게 설정 */
}
main {
  display: flex;
  flex-direction: column; /** 수직으로 쌓이도록 설정 */
  margin: auto;
  width: 50vw;
  font-size: 12px;

  .kakao__image {
    text-align: center;
    margin: 120px 0 0;
    img {
       width: 120px;
       height: 120px;
    }
  }

  .sign-in__form {
    width: 100%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    .sign-in__id {
      input {
        width: 100%;
        height: 30px;
        padding: 10px;
        border-style: none;
      }
    }
    .sign-in__password {
      margin-top: 1px;
      input {
        width: 100%;
        height: 30px;
        padding: 10px;
        border-style: none; 
      }
    }
    .sign-in__submit {
      margin-top: 5px;
      button {
        width: 100%;
        height: 35px;
        background-color: #F6F6F6;
        color: #C9ACAC;
        border-style: none;
        &.actv{
          cursor: pointer;
          background-color: #423630;
          color: white;
        }
      }
    }
    .auto-login {
      justify-content: flex-start;
      input[type='checkbox'] {
        margin: 5px 0 0 0;
        cursor: pointer;
      }
      label {
        font-size:14px;
        margin: 0;
        cursor: pointer;
      }
      span {
        font-size: 14px;
        margin-left: 2px;
        cursor: pointer;
      }
    }
  }
  .check__message{
    margin-top: 20px;
    font-size: 12px;
    color: #FF753E;
  }
  
}
</style>