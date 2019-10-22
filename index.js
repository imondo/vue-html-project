new Vue({
  el: '#app',
  router: HTML_ROUTES,
  components: {
    'ly-head': httpVueLoader('./components/Head/index.vue'),
  },
  data: {
    hasError: false
  },
  methods: {}
});
