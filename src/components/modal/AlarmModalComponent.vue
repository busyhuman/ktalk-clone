<template>
  <div class="container play" ref="target">
    <div class="main">
      <span class="material-icons-outlined" v-show="toggle === true">
        notifications
      </span>

      <span class="material-icons-outlined" v-show="toggle === false">
        notifications_off
      </span>
    </div>
  </div>
</template>

<script>
import EventBus from '@/utils/eventBus';
export default {
  data() {
    return {
      toggle: false,
    }
  },
  created() {
    EventBus.$on('ALARM', (toggle) => {
      this.toggle = toggle
      this.$refs.target.classList.remove("play")
      void this.$refs.target.offsetWidth;
      this.$refs.target.classList.add("play")
    })
    
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100px;
  height: 100px;
  position: fixed;
  top: 45vh;
  left: 45vw;
  background: black;
  padding: 10px;
  z-index: 1000;
  opacity: 0;

  &.play {
    animation-name: alarm;
    animation-duration: 2.0s;
    animation-iteration-count: 1;
  }
  @keyframes alarm {
    0% {
      opacity: 0.8;
    }

    70% {
      opacity: 0.8;
    }
    100% {
      opacity: 0;
    }
  }
  .main {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    .material-icons-outlined {
      font-size: 72px;
    }
  }
}
</style>