import Vue from 'vue';
import Router from 'vue-router';
import joblist from './components/joblist.vue';
import jobdetail from './components/jobdetail.vue';



Vue.use(Router);


export default new Router({
    mode: 'history',
    base: '/',
    routes: [
      

        {
            path: '/joblist',
            name: 'joblist',
            component: joblist,
        },
        {
            path: '/jobdetail/:jobId',
            name: 'job',
            component: jobdetail,
            props: true
        },
        {
            path: '*',
            component: joblist,
        }
    ]
})

