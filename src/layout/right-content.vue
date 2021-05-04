<template>
  <div>
    
    <div class="header-part">右边内容</div>
    <div class="content">
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
</style>