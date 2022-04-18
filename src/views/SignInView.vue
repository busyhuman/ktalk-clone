<template>
  <div class="body">
    <main class="sign-in">
      <div class="kakao__image">
        <img src="@/assets/kakaologo.png" alt="kakao.png">
      </div>
      <div class="sign-in__form">
        <div class="sign-in__id">
          <input type="text" placeholder="카카오계정 (이메일 또는 전화번호)">
        </div>
        <div class="sign-in__password">
          <input type="password">
        </div>
        <div class="sign-in__submit">
          <button class="submit actv" type="button" @click="fnAuthorize()">로그인</button>
        </div>
          <div class="auto-login no-drag">
          <input type="checkbox" id="autoLogin">
          <label for="autoLogin">자동로그인</label>
          <span class="material-icons">
            help_outline
          </span>
        </div>
      </div>
      <div class="check__message">
        <p>카카오 계정 또는 비밀번호를 다시 확인해 주세요.</p>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  },
  methods: {
    fnAuthorize() {
      fetch('https://kauth.kakao.com/oauth/authorize?client_id=f17d6c119019aed325c2d17a808aa4b2&redirect_uri=http://localhost:8080/auth&response_type=code')
      .then( (res) => {
        console.log(res.json())
      })
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
        margin: 0;
        cursor: pointer;
      }
      span {
        margin-left: 2px;
        cursor: pointer;
      }
    }
  }
  .check__message{
    margin-top: 20px;
    color: #FF753E;
  }
  
}
</style>