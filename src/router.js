import Vue from 'vue'
import Router from 'vue-router'


//组件模块
import index from './components/index.vue'
import pageOne from './components/views/pageOne.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'index', component: index },
        { path: '/index', name: 'index', component: index },
        { path: '/pageOne', name: 'pageOne', component: pageOne },
    ]
})