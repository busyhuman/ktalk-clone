<template>
  <div class="container">
    <div class="main">
      <div class="profile">
        <div class="profile__image">
          <img src="@/assets/kakaologo.png" alt="kakao.png">
        </div>
        <section class="profile__textarea">
          <div class="profile__name">
            이장호
          </div>
          <div class="profile__hello">
            안녕하세용
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  &:hover{
    background-color: #F8F8F8;
  }
  &.actv{
    background-color: #F2F2F2;
  }
}
.main {

  padding: 10px 20px;
  .profile {
    display: flex;
    align-items: center;
    .profile__image{

      img {
        width: 64px;
        height: 64px;
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
</style>