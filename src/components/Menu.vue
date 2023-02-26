<template>
    
    <!-- <div class="h-6" /> -->
    <el-menu
      :router="true"
      :default-active="workspace"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="1">首页</el-menu-item>
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
      <el-menu-item index="/123123workspace">Note</el-menu-item>
      <el-menu-item index="4">Papers</el-menu-item>
    </el-menu>

    <router-view></router-view>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const activeIndex = ref('1')
  const activeIndex2 = ref('1')
  const handleSelect = (key, keyPath ) => {
    console.log(key, keyPath)
  }
  </script>


<style>

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
  