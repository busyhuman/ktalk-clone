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
      <span class="material-icons trans--120">
        notifications
      </span>
      <span class="material-icons-outlined trans--40">
        settings
      </span>
    </nav>
  </div>
</template>

<script>
export default {
  
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