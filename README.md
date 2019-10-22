# 图书检索机

项目使用原生`html` + `element` + `vue`方式构建

**注意**

* 访问地址需要加上`orgId`才能访问，例如：`http://127.0.0.1:8080/static/?9787542232588`

* 使用`http-vue-loader`加载组件

* 进入首页判断是否存在`orgId`或者该学校是否存在权限，没有跳到`error页面`

* 成功进入首页**20**分钟再次请求**sessionId**

* 为了在检索机上地址不改变，**不使用router来改变地址**，全局使用组件实现功能


## 目录结构

```
.
|-- static                // 源码目录
|   |-- plugins           // 项目插件
|   |-- index.js          // 项目入口
|   |-- config.default.js // 项目配置文件
...
|-- README.md             // 项目说明
|-- version.txt						// 版本说明
.
```

## 启动

```
cd 根目录

npm i live-server -g 

live-server
```

## 开发

开发方式与`vue`方式一样，需要**注意**

1. 组件引入需要`httpVueLoader`支持

```
// src/pages/query.vue

components: {
  'ly-search': httpVueLoader('../static/components/Search/index.vue')
}
```

## 部署

本项目采用前后端统一部署，直接将**static文件夹放入后端程序中**

