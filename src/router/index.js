/*
* 路由器对象
* */
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const index = require('../pages/Index/Index.vue').default;
const blog = require('../pages/Blog/Blog.vue').default;
const flight = require('../pages/Flight/Flight.vue').default;
const places = require('../pages/Places/Places.vue').default;
const hotel = require('../pages/Hotel/Hotel.vue').default;
const profile = require('../pages/Profile/Profile.vue').default;
const orders = require('../pages/Orders/Orders.vue').default;
export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [{
        path:'/index',
        name:'Home',
        component: index,
        data: function(){
            return {
                contentStyleObj: {
                    height: window.innerHeight - 210 + 'px',
                },
            };
        }
    },{
        path:'/',
        redirect:'/index'
    },{
        path:'/places',
        name:'Places',
        component: places,
    },{
        path:'/flight',
        name:'Flight',
        component: flight,
    },{
        path:'/hotel',
        name:'Hotel',
        component: hotel,
    },{
        path:'/blog',
        name:'Blog',
        component: blog,
    },{
        path:'/profile',
        component: profile,
    },{
        path:'/orders',
        component: orders,
    }
    ]
})
