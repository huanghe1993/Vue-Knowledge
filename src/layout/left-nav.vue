<template>
  <div>
    <el-col>
      <!--设置当前激活菜单的 index	-->
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <!-- 导航下面的内容 -->
        <el-submenu index = '1'>
            <template slot = 'title'>
                <i class="el-icon-menu"></i>
                <span slot="title">导航一</span>
            </template>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">子导航一</span>
            </el-menu-item>
        </el-submenu>
        <!-- 导航下面的选项 -->
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="4" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {};
</script>

<style>
.el-menu-item {
    border: none;
}
</style>