<template>
  <div>
    auth
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseUrl: 'https://kauth.kakao.com',
      code: this.$route.query.code
    }
  },
  mounted(){
    this.fnConsole();
  },
  methods: {
    fnConsole() {
      console.log('code: ' + this.code);
      this.fnSelectToken();
    },
    fnSelectToken() {
      let option = {
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
      fetch('https://kauth.kakao.com/oauth/token?'
      + 'grant_type=authorization_code'
      + '&client_id=' + process.env.VUE_APP_ACCESS_KEY
      + '&redirect_uri=http://localhost:8080/auth'
      + '&code=' + this.code
      , option)
      .then( (res) => res.json())
      .then( (data) => {
        console.log(data)
        this.$store.state.account = data
        this.$router.push('friends')
      })
    },
  }
}
</script>