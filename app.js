import Vue from 'vue';
import Main from './components/Main.vue';
import router from './router';
import VueResource from 'vue-resource';
import moment from 'moment';


Vue.config.productionTip = false;
Vue.use(VueResource);

// Filters

Vue.filter('to-uppercase',function(value){
return value.toUpperCase();
});

Vue.filter('to-lowercase',function(value){
    return value.toLowerCase() ;
});

Vue.filter('formatDate', function (value) {
    if (!value) return ''
    return moment(value.toString()).format('MM/DD/YYYY hh:mm')
  })

  


new Vue({
    render: h => h(Main),
    router: router
}).$mount('#app');
