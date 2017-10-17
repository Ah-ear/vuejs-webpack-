var html = require('html-withimg-loader!../index.html');
import './assets/css/base.css';
import 'element-ui/lib/theme-default/index.css';
import 'font-awesome/css/font-awesome.min.css';
import './plugins/flexible.js';

import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import routes from './routes/index';


Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({
  routes
})
new Vue({
  router,
  el: '#app',
  render: h => h(App),
  created(){
    var scale=1/devicePixelRatio;
    document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale='+scale+',maximum-scale='+scale+',minimum-scale='+scale+',user-scalable=no');
    
  }
})
