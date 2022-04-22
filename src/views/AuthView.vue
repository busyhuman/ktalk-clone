<template>
  <div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      autoLogin: '',
      authorize: {
        baseUrl: 'https://kauth.kakao.com',
        redirect_uri: 'https://localhost:8080/authmore',
        response_type: 'code',
        scope: 'friends'
      },
      authorizeLink: ''
    }
  },
  created() {
    this.fnInit()
  },
  methods: {
    fnInit() {
      this.authorizeLink = this.authorize.baseUrl + '/oauth/authorize' + '?' + 'client_id=' + process.env.VUE_APP_REST_KEY + '&' + 'redirect_uri=' + this.authorize.redirect_uri + '&' + 'response_type=' + this.authorize.response_type + '&' + 'scope=' + this.authorize.scope
      window.location.href = this.authorizeLink
    }
  }
}
</script>