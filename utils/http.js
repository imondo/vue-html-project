/**
 * 请求配置
 */
(function(global, factory, plug) {
  return global[plug] = factory.call(global);
})(window, function() {
  const service = axios.create({
    baseURL: window.API,
    timeout: 300000,
    withCredentials: true
  });
  
  service.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  
  // 响应拦截器
  service.interceptors.response.use(
    response => {
      // 错误码处理
      if (response.status !== 200) {
        return Promise.reject(response);
      }
      return response;
    },
    error => {
      const { response } = error;
      if (response) {
        // 错误处理
        errorHandle(response);
        return Promise.reject(response);
      } else {
        // 请求超时
        if (error.message.includes('timeout')) {
          console.log('超时了');
          ELEMENT.Message({
            message: '请求已超时，请刷新或检查互联网连接',
            type: 'warning'
          });
        } else {
          console.log('断网了');
          ELEMENT.Message({
            message: '请检查网络是否已连接',
            type: 'warning'
          });
        }
      }
    }
  );
  
  const errorHandle = response => {
    const { status, data: { message = '' }} = response;
    let msg = message;
    if (!message) {
      switch (status) {
        case 401:
          msg = '您没有权限访问此操作！';
          break;
        case 403:
          msg = '您的登录状态已失效，请重新登录。';
          break;
        case 424:
          msg = response.data.error;
          break;
        default:
          msg = '服务请求异常，请刷新重试。';
      }
    }
    ELEMENT.Message({
      message: msg,
      type: 'warning'
    });
  };
  
  var httpServer = {
    get(url, data) {
      return service.get(url, {
        params: data
      }).catch(error => {
        console.log(error);
        return Promise.reject(error);
      });;
    }
  }
  return httpServer;
}, 'httpServer');