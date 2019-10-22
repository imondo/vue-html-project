# vue-html-project

项目使用原生`html` + `element` + `vue`方式构建

**注意**

* 使用`http-vue-loader`加载组件


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

1. 项目可采用前后端统一部署，直接将**static文件夹放入后端程序中**

2. 也可单独部署 
