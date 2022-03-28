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
  height: 100vh;  /** 화면에 꽉체게 설정 */
}
main {
  display: flex;
  flex-direction: column; /** 수직으로 쌓이도록 설정 */
  align-items: center;  /** 수직으로 중앙정렬 */
  margin: auto;
  width: 50vw;

  .kakao__image {
    margin: 10vh 0 0;
  }

  .sign-in__form {
    width: 100%;
    margin-top: 20px;

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
      margin-top: 5px;
      button {
        width: 100%;
        height: 30px;  
      }
    }
    .auto-login {
      justify-content: flex-start;

      input {
        display: inline-block;  /** checkbox는 블락요소가 되어야 하는데 배치는 좌->우로 되야한다. */
        margin: 0;
      }
      span {
        font-size: 12px;
      }
    }
  }
  
}
</style>