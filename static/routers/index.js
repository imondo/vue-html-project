const HTML_ROUTES = new VueRouter({
  routes: [
    {
      path: '/',
      component: httpVueLoader('/static/pages/home.vue')
    },
    {
      path: '/query',
      name: 'Query',
      component: httpVueLoader('/static/pages/query.vue')
    },
    {
      path: '/error',
      name: 'ErrorPage',
      component: httpVueLoader('/static/pages/error.vue')
    },
  ]
});
