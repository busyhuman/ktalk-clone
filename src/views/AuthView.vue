<template>
  <div>
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
        redirect_uri: 'https://localhost:8080/authmore',
        response_type: 'code',
        scope: ['friends']
      },
      authorizeLink: '',
      token: {
        baseUrl: 'https://kauth.kakao.com',
        path: '/oauth/token',
        grant_type: 'authorization_code',
        redirect_uri: 'https://localhost:8080/auth',
        code: this.$route.query.code
      },
    }
  },
  created() {
    this.fnInit()
  },
  methods: {
    fnInit() {
      this.fnSelectToken();
    },
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
        this.authorizeLink = this.authorize.baseUrl + '/oauth/authorize' + '?' + 'client_id=' + process.env.VUE_APP_REST_KEY + '&' + 'redirect_uri=' + this.authorize.redirect_uri + '&' + 'response_type=' + this.authorize.response_type + '&' + 'scope=' + this.authorize.scope.join() // 친구목록 동적 동의 화면으로 이동
        window.location.href = this.authorizeLink
      })
    },
  }
}
</script>