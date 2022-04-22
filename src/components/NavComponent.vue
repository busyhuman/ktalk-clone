<template>
  <div class="container">
    <nav class="main">
      <router-link :to="{ path: '/friends' }" class="friends" :class="{ actv: selected === 'friends'}">
        <span class="material-icons">
          person
        </span>
      </router-link>
      <router-link :to="{ path: '/chats' }" class="chats" :class="{ actv: selected === 'chats'}">
        <span class="material-icons">
          chat_bubble
        </span>
      </router-link>
      <router-link :to="{ path: '/more' }" class="more" :class="{ actv: selected === 'more'}">
        <span class="material-icons">
          more_horiz
        </span>
      </router-link>
      <div class="alarm">
        <span class="material-icons-outlined" @click="fnToggleAlarm()" v-if="fnGetAlarm === true">
          notifications
        </span>
        <span class="material-icons-outlined" @click="fnToggleAlarm()" v-if="fnGetAlarm === false">
          notifications_off
        </span>
      </div>
      <div class="settings">
        <span class="material-icons-outlined" @click.stop="fnToggleSetting()">
          settings
        </span>
        <NormalList v-show="fnGetSetting === true" class="normal__list" :params="normalList" />
      </div>
    </nav>
    <component :is="componentName" />
  </div>
</template>

<script>
/*global Kakao*/
import EventBus from '@/utils/eventBus'
import NormalList from '@/components/NormalListComponent'
export default {
  components: {
    Alarm: () => import('@/components/modal/AlarmModalComponent'),
    NormalList,
  },
  props: {
    selected: String,
  },
  data() {
    return {
      componentName: '',
      normalList: {},
      api: {
        baseUrl: 'https://kapi.kakao.com',
      },
    }
  },
  created() {
    this.normalList = {
      title: 'setting',
      itemList: [
        {
          name: '설정',
          func: '',
        },
        {
          name: '잠금모드'
        },
        {
          name: '로그아웃',
          func: this.fnTokenExpire
        },
        {
          name: '종료',
          func: this.fnSignOut
        }
      ]
    }

    EventBus.$on('NORMALLIST_' + this.normalList.title, (index) => {
      this.normalList.itemList[index].func()
    })  
  },
  computed: {
    fnGetAlarm() {
      return this.$store.state.toggle.alarm;
    },
    fnGetSetting() {
      return this.$store.state.toggle.setting;
    },
  },
  methods: {
    fnSignOut() {
      Kakao.API.request({
        url: '/v1/user/unlink',
        success: (response) => {
          console.log(response);
          localStorage.setItem('autoLogin', false)
          this.$router.push('signin')
        },
        fail: function(error) {
          console.log(error);
        },
      })
    },
    fnTokenExpire() {
      if (!Kakao.Auth.getAccessToken()) {
        console.log('Not logged in.');
        return;
      }
      Kakao.Auth.logout(() => {
        console.log(Kakao.Auth.getAccessToken());
        this.$router.push('signin')
      });
    },
    fnToggleAlarm() {
      this.componentName = 'Alarm'
      this.$store.state.toggle.alarm = !this.$store.state.toggle.alarm
      EventBus.$emit('ALARM', this.$store.state.toggle.alarm)
    },

    fnToggleSetting() {
      this.$store.state.toggle.setting = !this.$store.state.toggle.setting
    },
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #ECECED;
  width: 80px;
  height: 100vh;
  z-index: 100;
  position: fixed;

  .friends {
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 20px;
    width: 100%;
    height: 80px;
    cursor: pointer;
    color: #ACADB1;
    &.actv {
      color: black;
    }
    &:hover:not(.actv) {
      color: #909297;
    }
    .material-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 36px;
    }
    .material-icons-outlined {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 36px;
    }
  }

  .chats {
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 20px;
    width: 100%;
    height: 80px;
    cursor: pointer;
    color: #ACADB1;
    &.actv {
      color: black;
    }
    &:hover:not(.actv) {
      color: #909297;
    }
    .material-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 36px;
    }
    .material-icons-outlined {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 36px;
    }
  }

  .more {
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 20px;
    width: 100%;
    height: 80px;
    cursor: pointer;
    color: #ACADB1;
    &.actv {
      color: black;
    }
    &:hover:not(.actv) {
      color: #909297;
    }
    .material-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 42px;
    }
    .material-icons-outlined {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 42px;
    }
  }

  .alarm {
    position: absolute;
    bottom: 120px;
    cursor: pointer;
    .material-icons-outlined {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 36px;
      padding: 5px;
      &:hover {
        background-color: #E1E1E3;
        border-radius: 100%;
      }
    }
  }

  .settings {
    position: absolute;
    bottom: 40px;
    cursor: pointer;

    .material-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 36px;
      padding: 5px;
      &:hover {
        background-color: #E1E1E3;
        border-radius: 100%;
      }
    }
    .material-icons-outlined {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 36px;
      padding: 5px;
      &:hover {
        background-color: #E1E1E3;
        border-radius: 100%;
      }
    }

    .normal__list {
      position: absolute;
      left: 50px;
      bottom: 10px;
    }
  }
}
</style>