<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1" @click="getMenu('/index')">菜单一</el-menu-item>
    <el-submenu index="2">
      <template slot="title">菜单二</template>
      <el-menu-item index="2-1" @click="getMenu('/pageOne')">子菜单一</el-menu-item>
      <el-menu-item index="2-2">子菜单二</el-menu-item>
      <el-menu-item index="2-3">子菜单三</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">菜单四</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getMenu(url) {
      this.$router.push({
        path: url
      });
    }
  }
};
</script>