<template>
  <div class="container" @click="fnResetToggle()">
    <RouterView />
  </div>

</template>

<script>
/*global Kakao*/
export default {
  name: 'App',
  data() {
    return {
      tokenFreePathList: ['/signin', '/auth', '/authmore'],
    }
  },
  created() {
    if(this.tokenFreePathList.filter( item => item === this.$route.path).length === 0 ){  // token이 필요한 path라면
      if (!Kakao.Auth.getAccessToken()) { // 토큰이 없다면
          this.$router.push('signin')
        }
    }
  },
  methods: {
    fnResetToggle() {
      this.$store.state.toggle.chatSort = false;
      this.$store.state.toggle.setting = false;
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("@/scss/common.scss");
</style>
