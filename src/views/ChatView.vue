<template>
  <div class="chatview__container">
    <ModalBack v-show="componentName !== ''" />
    <Nav selected="chats" />
    <div class="main" >
      <header class="header">
        <span class="title">
          채팅
          <!-- <span class="arrow--down">
            ▼
          </span> -->
        </span>
        <NormalList class="normal__list"
        v-show="this.$store.state.toggle.chatSort" 
        :params="normalList"
        />
        <div class="chat--add" @click="componentName = 'chatAdd'">
          <span class="material-symbols-outlined">
            chat_add_on
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
    <component :is="componentName" />
  </div>
</template>

<script>
/*global Kakao*/
import Nav from '@/components/NavComponent'
import Chat from '@/components/ChatComponent'
import NormalList from '@/components/NormalListComponent'
import Room from '@/components/RoomComponent'
import ModalBack from '@/components/modal/ModalBackComponent'
import EventBus from '@/utils/eventBus'
export default {
  name: 'ChatView',
  components: {
    Nav,
    Chat,
    NormalList,
    Room,
    ModalBack,
    chatAdd: () => import('@/components/ChatAddComponent'),
  },
  data() {
    return {
      ui: {
        chatAdd: false,
      },
      user: {},
      componentName: '',
      cureentRindex: 1, // 0 (본인)
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
      chatItems: [],
      roomItems: [],
    }
  },
  created() {
    this.fnSelectUserProfile()
    EventBus.$on('NORMALLIST_' + this.normalList.name, (index) => {
      /**
       * TODO:
       * index에 따라 채팅목록 Sort
       */
      index
    })
    EventBus.$on('CHATADD_CONFIRM', (item) => {
      let name = ''
      let uuid = []
      item.forEach( (it, idx) => {
        if(idx > 0){
          name += ', '
        }
        name += it.name
        uuid.push(it.uuid)
      }) 
      this.chatItems.push({
        name: name,
        headCount: uuid.length,
        rindex: this.cureentRindex,
        lastMessage: ' ',
        lastMessageDate: '',
        isRoomActive: false,
        uuids: uuid,
        isMe: false,
      })
      this.cureentRindex++
      this.componentName = ''
    })

    EventBus.$on('CHATADD_CANCEL', () => {
      this.componentName = ''
    })
  },
  methods: {
    /**
     * 유저 프로필 가져오기
     */
    fnSelectUserProfile() {
      Kakao.API.request({
        url: '/v1/api/talk/profile',
        success: (res) => {
          this.user = res
          // if(this.user.thumbnailURL === ''){
          //   this.user.thumbnailURL = '../assets/kakaologo.png'
          // }
          this.chatItems.push({
            name: `${this.user.nickName} (본인)`,
            headCount: 1,
            rindex: 0,
            lastMessage: '',
            lastMessageDate: '',
            isRoomActive: false,
            uuids: [],
            isMe: true,
          })
        },
        fail: function(error) {
          console.log(error);
        }
      });
    },
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
      .chat--add {
        .material-symbols-outlined {
          display: inline-block;
          font-size: 36px;
          position: absolute;
          right: 40px;
          padding: 5px;
        }
        &:hover {
          background-color: #F3F3F3;
          border-radius: 100%;
          cursor: pointer;
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