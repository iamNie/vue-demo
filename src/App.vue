<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <div class="menu">
      <v-header />
    </div>
    <div style="clear:both;height:0px;display:block;overflow:hidden"></div>
    <div class="content-box">
      <div class="content">
        <transition>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from "./components/common/header.vue";
export default {
  name: "App",
  components: {
    vHeader
  }
};
</script>

<style style="less" >
#app {
  text-align: center;
  color: #2c3e50;
  /* display: flex; */
  /* margin-top: 60px; */
}
.menu {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  /* width: 100px; */
  overflow-y: scroll;
}
.content-box {
  position: absolute;
  left: 120px;
  right: 0;
  top: 2rem;
  bottom: 0;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  background: #fff;
  width: calc(100% - 120px);
  /* height: 100%; */
}
.content {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
