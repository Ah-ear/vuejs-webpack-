import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import Index1 from './component/index.vue'
import './assets/css/app.css'
Vue.use(VueRouter);
// Vue.use(ElementUI);

const routes = [
  {path:'*',component:Index1}
]

const router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
