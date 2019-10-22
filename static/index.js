new Vue({
  el: '#app',
  router: HTML_ROUTES,
  components: {
    'ly-head': httpVueLoader('../static/components/Head/index.vue'),
  },
  data: {
    hasError: false
  },
  methods: {}
});
