<template>
  <div class="chatview__container">
    <Nav selected="chats" />
    <div class="main" >
      <header class="header">
        <span class="title" @click.stop="fnToggleChatSort($event)">
          채팅
          <span class="arrow--down">
            ▼
          </span>
        </span>
        <NormalList class="normal__list"
        v-show="this.$store.state.toggle.chatSort" 
        :params="normalList"
        />
        <div class="search">
          <span class="material-icons-outlined">
            search
          </span>
        </div>
      </header>
      <div class="chattings">
        <div v-for="(item, index) in chatItems" :key="index">
          <Chat :params="item.chatParams" />
        </div>
      </div>
    </div>
    <component :is="componentName" />
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
    Room: () => import('@/components/RoomComponent'),
  },
  data() {
    return {
      componentName: '',
      normalList: {
        itemList: [
          {
            name: '최신 메시지 순'
          },
          {
            name: '안 읽은 메시지 순'
          },
          {
            name: '즐겨찾기 순'
          },
          {
            name: '모두 읽음 처리'
          }
        ]
      },
      chatItems: [
        {
          chatParams: {
            name: '현대건설',
            headCount: 23,
            index: 0,
          }
        },
        {
          chatParams: {
            name: '산책방',
            headCount: 12,
            index: 1,
          }
        },
        {
          chatParams: {
            name: '이장호',
            headCount: 1,
            index: 2,
          }
        },
        {
          chatParams: {
            name: '권혁준',
            headCount: 1,
            index: 3,
          }
        },
        {
          chatParams: {
            name: '배그',
            headCount: 4,
            index: 4,
          }
        },
        {
          chatParams: {
            name: '코딩방',
            headCount: 3,
            index: 5,
          }
        },
        {
          chatParams: {
            name: '강현대',
            headCount: 1,
            index: 6,
          }
        },
        {
          chatParams: {
            name: '김준현',
            headCount: 1,
            index: 7,
          }
        },
        {
          chatParams: {
            name: '호메방',
            headCount: 9,
            index: 8,
          }
        },
      ]

    }
  },
  methods: {
    fnToggleChatSort() {
      this.$store.state.toggle.chatSort = !this.$store.state.toggle.chatSort
    },

  }
}
</script>

<style lang="scss" scoped>
.chatview__container {
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
        right: 40px;
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