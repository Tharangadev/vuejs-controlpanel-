import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:()=>import('@/pages/Home')
        },
        {
            path:'/chat',
            name:'chat',
            component:()=>import('@/pages/Chat_page')
        },
        {
            path:'/todo',
            name:'chat',
            component:()=>import('@/pages/todo')
        },
        {
            path:'/map',
            name:'map',
            component:()=>import('@/pages/map')
        }
    ]
})
