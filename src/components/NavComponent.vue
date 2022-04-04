<template>
  <div class="container">
    <nav class="main">
      <router-link :to="{ path: '/friends' }" class="friends">
        <span class="material-icons-outlined">
          person
        </span>
      </router-link>
      <router-link :to="{ path: '/chat' }" class="chat">
        <span class="material-icons-outlined">
          chat_bubble
        </span>
      </router-link>
      <router-link :to="{ path: '/more' }" class="more">
        <span class="material-icons-outlined">
          more_horiz
        </span>
      </router-link>
      <div class="alarm">
        <span class="material-icons-outlined" @click="fnToggleAlarm()" v-if="toggle.alarm === true">
          notifications
        </span>
        <span class="material-icons-outlined" @click="fnToggleAlarm()" v-if="toggle.alarm === false">
          notifications_off
        </span>
      </div>
      <div class="settings">
        <span class="material-icons-outlined" @click="fnToggleSetting()">
          settings
        </span>
        <NormalList v-show="toggle.setting === true" class="normal__list" />
      </div>
    </nav>
    <component :is="componentName" />
  </div>
</template>

<script>
import EventBus from '@/utils/eventBus';
import NormalList from '@/components/NormalListComponent'
export default {
  components: {
    Alarm: () => import('@/components/modal/AlarmModalComponent'),
    NormalList,
  },
  data() {

    return {
      componentName: '',
      toggle: {
        alarm: true,
        setting: false,
      }
    }
  },
  
  methods: {
    fnToggleAlarm() {
      this.componentName = 'Alarm'
      this.toggle.alarm = !this.toggle.alarm
      EventBus.$emit('ALARM', this.toggle.alarm)
    },

    fnToggleSetting() {
      this.toggle.setting = !this.toggle.setting;
      console.log('NormalList')
    },
    
    fnConsole() {
      console.log('wowow');
    }
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

  .chat {
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 20px;
    width: 100%;
    height: 80px;
    cursor: pointer;

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