<template>
  <div class="profile__container">
    <div class="main">
      <div class="profile">
        <div class="profile__image">
          <img :src="this.params.profile_thumbnail_image" alt="profile" v-if="this.params.profile_thumbnail_image !== ''">
          <img src="@/assets/baseprofile.png" alt="baseprofile" v-else>
        </div>
        <section class="profile__textarea">
          <div class="profile__name">
            {{ this.params.profile_nickname }}
          </div>
          <!-- <div class="profile__hello">
            안녕하세용
          </div> -->
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    params: Object
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.profile__container {
  width: 100%;
  height: 100%;
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