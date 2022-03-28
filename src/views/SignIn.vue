<template>
  <div class="body">
    <main class="sign-in">
      <div class="kakao__image">
        <img src="@/assets/logo.png" alt="kakao.png">
      </div>
      <div class="sign-in__form">
        <div class="sign-in__id">
          <input type="text" placeholder="카카오계정 (이메일 또는 전화번호)">
        </div>
        <div class="sign-in__password">
          <input type="password">
        </div>
        <div class="sign-in__submit">
          <button class="submit">로그인</button>
        </div>
          <div class="auto-login">
          <input type="checkbox">
          <span>자동로그인</span>
          <span class="material-icons">
            help_outline
          </span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  date() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.body {
  background-color: #FFEB33;
  height: 100vh;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 40vw;

  .kakao__image {
    margin: 10vh 0 30px;
  }

  .sign-in__form {
    width: 90%;
    
    .sign-in__id {
      input {
        width: 100%;
        height: 30px;  
      }
    }
    .sign-in__password {
      input {
        width: 100%;
        height: 30px;  
      }
    }
    .sign-in__submit {
      button {
        width: 100%;
        height: 30px;  
      }
    }
    .auto-login {
      justify-content: flex-start;
    }
  }
  
}
</style>