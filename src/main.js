import Vue from 'vue'
import App from './App.vue'

import './assets/css/common.css'

import $ from 'jquery'
//引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
//引入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import router from './router'

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
