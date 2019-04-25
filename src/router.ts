import Vue from 'vue';
import Router, { RouterOptions } from 'vue-router';
import Home from './views/Home.vue';
import Mobx from './views/Mobx.vue';

Vue.use(Router);

const routerOptions: RouterOptions = {
  mode: 'history',
  // base: '',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import('./views/About.vue'),
    },
    {
      path: '/mbox',
      name: 'mobx',
      component: Mobx,
    }
  ],
};

const router: Router = new Router(routerOptions);

export default router;
