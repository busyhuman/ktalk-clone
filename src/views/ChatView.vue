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
        <div v-for="(item) in chatItems" :key="item.rindex" @dblclick="fnSetChatRoom(item)">
          <Chat :params="item" />
        </div>
      </div>
    </div>
    <div v-for="(item, index) in roomItems" :key="index">
      <Room :params="item" />
    </div>

  </div>
</template>

<script>
import Nav from '@/components/NavComponent'
import Chat from '@/components/ChatComponent'
import NormalList from '@/components/NormalListComponent'
import Room from '@/components/RoomComponent'
import EventBus from '@/utils/eventBus'
export default {
  name: 'ChatView',
  components: {
    Nav,
    Chat,
    NormalList,
    Room,
  },
  data() {
    return {
      normalList: {
        title: 'CHATTING',
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
          name: '현대건설',
          headCount: 23,
          rindex: 0,
          lastMessage: '',
          lastMessageDate: '',
          isRoomActive: false,
        },
        {
          name: '산책방',
          headCount: 12,
          rindex: 1,
          lastMessage: '',
          lastMessageDate: '',
          isRoomActive: false,
        },
        {
          name: '이장호',
          headCount: 1,
          rindex: 2,
          lastMessage: '',
          lastMessageDate: '',
          isRoomActive: false,
        },
        {
          name: '권혁준',
          headCount: 1,
          rindex: 3,
          lastMessage: '',
          lastMessageDate: '',
          isRoomActive: false,
        },
        {
          name: '배그',
          headCount: 4,
          rindex: 4,
          lastMessage: '',
          lastMessageDate: '',
          isRoomActive: false,
        },
        {
          name: '코딩방',
          headCount: 3,
          rindex: 5,
          lastMessage: '',
          lastMessageDate: '',
          isRoomActive: false,
        },
        {
          name: '강현대',
          headCount: 1,
          rindex: 6,
          lastMessage: '',
          lastMessageDate: '',
          isRoomActive: false,
        },
        {
          name: '김준현',
          headCount: 1,
          rindex: 7,
          lastMessage: '',
          lastMessageDate: '',
          isRoomActive: false,
        },
        {
          name: '호메방',
          headCount: 9,
          rindex: 8,
          lastMessage: '',
          lastMessageDate: '',
          isRoomActive: false,
        },
      ],
      roomItems: [],
    }
  },
  created() {
    EventBus.$on('NORMALLIST_' + this.normalList.name, (index) => {
      /**
       * TODO:
       * index에 따라 채팅목록 Sort
       */
      index
    })
  },
  methods: {
    /**
     * 채팅창 정렬 LIST 토글
     */
    fnToggleChatSort() {
      this.$store.state.toggle.chatSort = !this.$store.state.toggle.chatSort
    },
    /**
     * 채팅방 셋팅하기
     */
    fnSetChatRoom(item) {
      if(item.isRoomActive === false){  // 채팅방이 이미 횔성화 되어있지 않다면
        for(let chatItem of this.chatItems) {
          if(item.rindex === chatItem.rindex){
            chatItem.isRoomActive = true
            break
          }
        }
        this.roomItems.push(item);
      }
      else{
        EventBus.$emit('OPEN_ROOM' + item.rindex)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.chatview__container {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .main {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    width: 100%;
    padding-left: 80px; /** Navigtion width에 따라 변경해야함 */

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
    .chattings {
      width: 100%;
      overflow-y: auto;
    }
  }
}
</style>