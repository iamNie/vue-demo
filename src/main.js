import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
//引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
