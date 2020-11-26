import Vue from 'vue'
import Router from 'vue-router'


//组件模块
import index from './components/index.vue'
import pageOne from './components/views/pageOne.vue'
import pageTwo from './components/views/pageTwo.vue'
import pageThree from './components/views/pageThree.vue'

//子菜单
import subPageOne from './components/views/subPageOne.vue'

Vue.use(Router)

// router文件夹-->index.js文件
//cv以下代码解决路由地址重复的报错问题(一劳永逸)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default new Router({
    routes: [
        { path: '/', name: 'index', component: index },
        { path: '/index', name: 'index', component: index },
        { path: '/pageOne', name: 'pageOne', component: pageOne },
        {
            path: '/pageTwo', name: 'pageTwo', component: pageTwo, redirect: '/pageTwo',
            children: [
                {
                    path: '/pageTwo/subPageOne', name: 'subPageOne', component: subPageOne
                }
            ]
        },
        { path: '/pageThree', name: 'pageThree', component: pageThree },
    ]
})