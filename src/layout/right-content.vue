<template>
  <div>
    <div class="content-title-box">右边内容</div>
    <div class="content-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {routes} from '../router'
export default {
    mounted(){
        console.log(1111);
        console.log(routes);
    }
};
</script>

<style lang="scss">
.content-container {
  padding: 10px;
}
.content-title-box {
  padding: 10px;
  border-bottom: solid 1px #e6e6e6;
}
</style>