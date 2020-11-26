<template>
  <!-- <div class="sidebar"> -->
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    @select="handleSelect"
    text-color="#000"
    active-text-color="#ffd04b"
  >
    <template v-for="(item,index) in menu" :index="index">
      <template v-if="item.children.length>0">
        <el-submenu :index="item.url" :key="index">
          <template slot="title">{{item.name}}</template>
          <template v-for="(childItem,childIndex) in item.children">
            <el-menu-item
              :index="childItem.url"
              :key="childIndex"
              @click="getMenu(childItem.url)"
            >{{childItem.name}}</el-menu-item>
          </template>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item v-bind:index="item.url" :key="index" @click="getMenu(item.url)">{{item.name}}</el-menu-item>
      </template>
    </template>
  </el-menu>
  <!-- </div> -->
</template>

<script>
import menuJson from "./menu.json";
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      menu: []
    };
  },
  mounted() {
    this.menu = menuJson.menu;
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
<style lang="less" scoped>
// .sidebar {
//   background: rgba(29, 74, 105, 1);
//   min-height: 100%;
// }
.el-menu-demo {
  background: rgba(29, 74, 105, 1);
  min-height: 100%;
  width: 120px;
}
</style>