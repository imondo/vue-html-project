// 后台请求接口
const debugging = true;

function getApi() {
  const index = window.location.href.indexOf('/static');
  console.log(index);
  return window.location.href.substring(0, index);
}

window.API = debugging ? 'http://192.168.2.81:8086/lib3school' : getApi();

