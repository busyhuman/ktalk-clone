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
      tokenFreePathList: ['/auth', '/authmore', '/signin'],
    }
  },
  created() {
    // this.tokenFreePathList.forEach( (item) => {
    //   let path = location.href
    //   const idx = path.indexOf(item)
    //   console.log(path, idx, location.href )
    //   if( idx !== -1 && idx !== 0){
    //     if(path[idx-1] !== '#'){
    //       let p = ''
    //       p += path.substr(0,idx)
    //       p += '/#'
    //       p += path.substr(idx, path.length);
    //       location.href = p
    //     }
    //   }
    // })
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
