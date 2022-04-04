<template>
  <div class="container">
    <Nav />
    <div class="main">
      <header class="header">
        <span class="title">
          채팅
        </span>
        <div class="search">
          <span class="material-icons-outlined">
            search
          </span>
        </div>
      </header>
      <div class="chattings">
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/NavComponent'
import Chat from '@/components/ChatComponent'
export default {
  name: 'ChatView',
  components: {
    Nav,
    Chat,
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
.main {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  overflow-x: hidden;
  overflow-y: auto;
  padding-left: 80px; /** Navigtion width에 따라 변경해야함 */
  width: 100vw;
  .header {
    display: flex;
    position: relative;
    left: 20px;
    .title {
      font-size: 36px;
      font-weight: 500;
    }
    .search {
      .material-icons-outlined {
        display: block;
        font-size: 36px;
        position: absolute;
        right: 90px;
        
        &:hover {
          background-color: #F3F3F3;
          border-radius: 100%;
          cursor: pointer;
        }
      }
    }
  }
}
</style>