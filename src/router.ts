import Vue from 'vue';
import Router, { RouterOptions } from 'vue-router';
import Home from './views/Home.vue';

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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
};

const router: Router = new Router(routerOptions);

export default router;
