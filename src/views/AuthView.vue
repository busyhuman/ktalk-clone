<template>
  <div>
    auth
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  data() {
    return {
      token: {
        baseUrl: 'https://kauth.kakao.com',
        path: '/oauth/token',
        grant_type: 'authorization_code',
        redirect_uri: 'https://localhost:8080/auth',
        code: this.$route.query.code
      },
    }
  },
  created(){
    this.fnSelectToken();
  },
  methods: {
    /**
     * 토큰 발급받기
     */
    fnSelectToken() {
      let option = {
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
      fetch(this.token.baseUrl + this.token.path
      + '?grant_type=' + this.token.grant_type
      + '&client_id=' + process.env.VUE_APP_REST_KEY
      + '&redirect_uri=' + this.token.redirect_uri
      + '&code=' + this.token.code
      , option)
      .then( (res) => res.json() )
      .then( (data) => {
        Kakao.Auth.setAccessToken(data.access_token)
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('refresh_token', data.refresh_token)
        localStorage.setItem('scope', data.scope)
        this.$router.push('friends')
      })
    },
  }
}
</script>