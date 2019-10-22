const HTML_ROUTES = new VueRouter({
  routes: [
    {
      path: '/',
      component: httpVueLoader('./pages/home.vue')
    },
    {
      path: '/query',
      name: 'Query',
      component: httpVueLoader('./pages/query.vue')
    },
    {
      path: '/error',
      name: 'ErrorPage',
      component: httpVueLoader('./pages/error.vue')
    },
  ]
});
