<template>
  <div class="container">
    <nav class="main">
      <span class="material-icons mt--20">
        person
      </span>
      <span class="material-icons-outlined mt--20">
        chat
      </span>
      <span class="material-icons-outlined mt--20">
        more_horiz
      </span>
      <div class="blocker">

      </div>
      <span class="material-icons-outlined trans--120" @click="fnToggleAlarm()" v-if="toggle.alarm === true">
        notifications
      </span>
      <span class="material-icons-outlined trans--120" @click="fnToggleAlarm()" v-if="toggle.alarm === false">
        notifications_off
      </span>
      <span class="material-icons-outlined trans--40">
        settings
      </span>
    </nav>
    <component :is="componentName" />
  </div>
</template>

<script>
import EventBus from '@/utils/eventBus';
export default {
  components: {
    Alarm: () => import('@/components/modal/AlarmModalComponent'),
  },
  data() {
    return {
      componentName: '',
      toggle: {
        alarm: true,
      }
    }
  },
  
  methods: {
    fnToggleAlarm() {
      this.componentName = 'Alarm'
      this.toggle.alarm = !this.toggle.alarm
      EventBus.$emit('ALARM', this.toggle.alarm)
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
  .material-icons-outlined {
    display: flex;
    width: inherit;
    height: 80px;
    font-size: 36px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &.mt--20 {
      margin-top: 20px;
    }
    &.trans--40 {
      position: absolute;
      bottom: 40px;
    }
    &.trans--120 {
      position: absolute;
      bottom: 120px;
    }
  }
  .material-icons {
    display: flex;
    width: inherit;
    height: 80px;
    font-size: 36px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &.mt--20 {
      margin-top: 20px;
    }
    &.trans--40 {
      position: absolute;
      bottom: 40px;
    }
    &.trans--120 {
      position: absolute;
      bottom: 120px;
    }
  }
}
</style>