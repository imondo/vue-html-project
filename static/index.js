console.log(location);

/**
 * 1. 进入首页判断是否存在orgId或者该学校是否存在权限，没有跳到error页面
 * 2. 成功进入首页20分钟再次请求sessionId
 */
const MAX_TIME = 1200000; // 20分钟

new Vue({
  el: '#app',
  components: {
    'ly-head': httpVueLoader('../static/components/Head/index.vue'),
    'ly-home': httpVueLoader('../static/pages/home.vue'),
    'error-page': httpVueLoader('../static/pages/error.vue'),
  },
  data: {
    hasError: false
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      const OPAC_AUTH_ORGID = this.getOrgId();
      if (OPAC_AUTH_ORGID) {
        localStorage.setItem('OPAC_AUTH_ORGID', OPAC_AUTH_ORGID);
        this.getAuth(OPAC_AUTH_ORGID);
      } else {
        ELEMENT.Message({
          message: '请正确打开连接地址',
          type: 'warning'
        });
        this.hasError = true;
      }
    },
    getAuth(orgId) {
      const timer = setTimeout(() => {
        this.getAuth(orgId);
      }, MAX_TIME);
      httpServer.get(`/opac/${orgId}`).then(res => {
        if (!res.data) {
          this.hasError = true;
        } else {
          console.log(res.data);
        }
      }).catch(error => {
        this.hasError = true;
        clearTimeout(timer);
      });
    },
    getOrgId() {
      const orgId = location.href.substr(location.href.indexOf('?') + 1);
      return location.href.indexOf('?') > -1 ? orgId : null;
    }
  }
});
