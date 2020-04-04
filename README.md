# [www.shamrock.cc](http://www.earnbillion.cn)

> Shamrock Web based on `vue`,`bootstrap`

## Create project
```bash
vue create wwww.shamrock.cc
```
## Project setup
```bash
yarn install
```

### Compiles and hot-reloads for development
```bash
yarn serve
```

### Compiles and minifies for production
```bash
yarn build
```

### Lints and fixes files
```bash
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## main modules

- [bootstrap][bootstrap]
- [Vue][vue]
- [vuex][vuex]
- [vue-router][vue-router]
- [eslint][eslint]
- [axios][axios]
- [chart.js][chart.js]
- [BootstrapVue][BootstrapVue]

[bootstrap]: https://getbootstrap.com/docs/4.4/getting-started/introduction/
[vue]: https://vuejs.org/
[vue-router]: https://router.vuejs.org/
[vuex]: https://vuex.vuejs.org/zh/
[eslint]: https://eslint.org/
[axios]: https://github.com/axios/axios
[chart.js]: https://www.chartjs.org/
[BootstrapVue]: https://bootstrap-vue.js.org/docs/components/

## FAQ

- form表单绑定不了数据: :v-model 改为 v-model
- 点击save 提示`POST http://localhost:8080/v1/websites/devops` 前端端口, 问题定位： action请求后台接口时后面带了`/`
- 部署nginx上面之后刷新页面404：定位：nginx配置问题，请求资源在nginx配置root对应找不到资源，解决：`try_files $uri $uri/ @router; localtion {rewrite ^.*$ /index.html last;}` 
- 待解决问题：添加时前端请求后端接口2次
