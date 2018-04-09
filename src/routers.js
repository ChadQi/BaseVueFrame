const Routers = [

    {
        path: '/index',
        component: (resolve) => require(['./template/index.vue'], resolve),
        meta:{
            title:'首页',
        }
    },
    {
        path: '/about',
        component: (resolve) => require(['./template/about.vue'], resolve),
        meta:{
            title:'关于',
        }
    },
    {
        path: '/user/:id',
        component: (resolve) => require(['./template/user.vue'], resolve),
        meta:{
            title:'个人主页',
        }
    },
    {
        path: '*',
        redirect: '/index'
    }
];
export default Routers;