<template>
  <div>
      <!--设置当前激活菜单的 index	-->
      <el-menu default-active="1" class="el-menu-vertical">
        
        <template v-for="(item,index) in menuList">
          <!-- 添加路由进行跳转 -->
          <router-link :to="item.path" v-if="!item.children" :key="index">
               <!-- 没有子菜单的 -->
              <el-menu-item :index="(index+1).toString()" >
                <i :class=item.icon></i>
                <span slot="title">{{item.name}}</span>
              </el-menu-item>
          </router-link>
          <!-- 存在子菜单的情况 -->
          <el-submenu v-else :index="(index+1).toString()" :key="index">
            <template slot = 'title'>
                  <i :class=item.icon></i>
                  <span slot="title">{{item.name}}</span>
            </template>
            <!-- 子级路由 -->
            <router-link :to="item.path+'/'+subItem.path"  v-for="(subItem,subIndex) in item.children" :key="subIndex">
               <el-menu-item :index="index+'_'+subIndex">
                <i :class=subItem.icon></i>
                <span slot="title">{{subItem.name}}</span>
              </el-menu-item>
            </router-link>
          </el-submenu>
        </template>
      </el-menu>
  </div>
</template>

<script>
import { routes } from "../router";
export default {
  data() {
    return {
      menuList: [],
    };
  },
  mounted() {
    let menuList = routes[0];
    this.menuList = menuList.children;
    console.log(menuList);
  },
};
</script>

<style>
.el-menu-item {
  border: none;
}
.el-menu-vertical a{
  text-decoration:none
}
</style>