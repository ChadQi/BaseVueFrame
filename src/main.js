import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import './css/mui.min.css';
import Routers from './routers.js';

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: Routers,
})
router.beforeEach((to,from,next)=>{
   window.document.title = to.meta.title;
   next();
});
router.afterEach((to,from,next)=>{
    window.scrollTo(0,0);
})
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})