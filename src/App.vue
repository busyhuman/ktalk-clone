<template>
  <div class="container" @click="fnResetToggle()">
    <RouterView />
  </div>

</template>

<script>

export default {
  name: 'App',
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
