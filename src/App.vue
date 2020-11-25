<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <v-header />
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <!-- <index /> -->
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
