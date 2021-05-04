<template>
  <div>
    <el-container>
      <!--头部内容 -->
      <el-header id = 'admin-header'>顶部内容</el-header>
      <el-container>
        <!-- 导航内容 -->
        <el-aside id="left-menu-list-box" width="200px">
          <left-menu></left-menu>
        </el-aside>
        <el-container>
          <!-- 主内容区域 -->
          <el-main>
            <div class="content">
              <router-view></router-view>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
    mounted(){
        const leftMenu = document.getElementById("left-menu-list-box")
        const adminHeader = document.getElementById("admin-header")
        const dy = window.innerHeight - adminHeader.offsetHeight
        if (leftMenu && adminHeader){
            leftMenu.style.height = dy+ 'px'
        }
        
    }
};
</script>

<style lang = 'scss'>
.el-header {
  background-color: #a8c5ec;
  color: #333;
  text-align: center;
  line-height: 46px;
  height: 46px !important; 
}

.el-aside {
  line-height: 200px;
}

.el-main {
  background-color: aliceblue;
  color: #333;
  text-align: center;
}
</style>