/*
* 入口JS
* */
/*
* 引入Bootstrap 和 Bootstrap-vue
* */
import Vue from 'vue';
import router from './router/index.js';
Vue.use(router);
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import './custom.scss';
import App from './App'

Vue.config.productionTip = false;

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app');
