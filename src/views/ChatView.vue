<template>
  <div class="container" @click="fnResetToggle()">
    <Nav selected="chats" />
    <div class="main" >
      <header class="header">
        <span class="title" @click.stop="fnToggleChatSort($event)">
          채팅
          <span class="arrow--down">
            ▼
          </span>
        </span>
        <NormalList class="normal__list" v-show="fnGetChatSort"/>
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
import NormalList from '@/components/NormalListComponent'
export default {
  name: 'ChatView',
  components: {
    Nav,
    Chat,
    NormalList,
  },
  data() {
    return {
      // toggle: {
      //   chatSort: false,
      // }
    }
  },

  computed: {
    fnGetChatSort(){
      return this.$store.state.toggle.chatSort;
    }
  },
  methods: {
    fnToggleChatSort() {
      this.$store.state.toggle.chatSort = !this.$store.state.toggle.chatSort
    },
    fnResetToggle() {
      console.log(process.env)
      this.$store.state.toggle.chatSort = false;
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
      display: flex;
      font-size: 36px;
      font-weight: 500;
      cursor: pointer;
      .arrow--down {
        display: flex;
        font-size: 12px;
        align-items: center;
      }
    }
    .normal__list {
      position: absolute;
      top: 50px;
    }
    .search {
      .material-icons-outlined {
        display: inline-block;
        font-size: 36px;
        position: absolute;
        right: 90px;
        padding: 5px;
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