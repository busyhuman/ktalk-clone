<template>
  <div class="container">
    <div class="main">
      <ul class="item__list">
        <li class="item" v-for="(item, index) in params.itemList" :key="index" >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'NormalList',
  props: {
    params: Object
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-width: 140px;
  max-width: 210px;
  position: fixed;
  z-index: 200;
  border: 1px solid;

  .main {
    width: 100%;
    background: white;
    .item__list {
      padding: 2px 0;
      .item {
        display: flex;
        align-items: center;
        font-size: 12px;
        height: 25px;
        margin: 0px 0;
        padding: 5px 10px;
        &:hover {
          background: #F0F0F0;
        }
      }
    }
  }
}
</style>