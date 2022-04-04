<template>
  <div class="container">
    <Nav />
    <div class="main">
      <header class="header">
        <span class="title">
          더보기
        </span>
        <div class="search">
          <span class="material-icons-outlined">
            search
          </span>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/NavComponent'
export default {
  name: 'MoreView',
  components: {
    Nav,
  },
}
</script>

<style lang="scss" scoped>

</style>