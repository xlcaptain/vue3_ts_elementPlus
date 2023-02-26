<template>
    <div class="common-layout">
      <el-container >
        <el-header >
            <el-menu
              :router="true"
              :default-active="home"
              class="el-menu-demo"
              mode="horizontal"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              @select="handleSelect"
            >
              <el-menu-item index="/home">首页</el-menu-item>
              <el-sub-menu index="2">
                <template #title>Workspace</template>
                <el-menu-item index="/workspace">实体识别</el-menu-item>
                <el-menu-item index="2-2">实体抽取</el-menu-item>
                <el-menu-item index="2-3">翻译</el-menu-item>
                <el-sub-menu index="2-4">
                  <template #title>相似度计算</template>
                  <el-menu-item index="2-4-1">item one</el-menu-item>
                  <el-menu-item index="2-4-2">item two</el-menu-item>
                  <el-menu-item index="2-4-3">item three</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-menu-item index="3">Note</el-menu-item>
              <el-menu-item index="4">Papers</el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>
</template>

<script setup>


</script>

<style>
.el-header{
    margin:0;
    padding:0;
    border: 0;
    height: 20%;
}

.common-layout{
  background:url("../assets/image/cool-background.png");
  width:100%;
  height:100%;			
  position:fixed;
  background-size:100% 100%;
}
.el-main{
  float: left;
}

.el-menu{
    margin-top:0px;
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
    border: 0 !important;
    width: 100%px;
}


.el-sub-menu, .el-menu-item {
    padding-right: 2.5% ;
    padding-left: 2.5% ;
}
</style>
  