<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark navbar-fixed-top"
         style="background-color: #e3f2fd;">
      <a class="navbar-brand font-weight-bolder text-dark" href="/">Shamrock</a>
      <button class="navbar-toggler" type="button"
              data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-fixed-top">
          <li class="nav-item">
            <router-link class="nav-link active" to="/" hidden />
          </li>
          <li class="nav-item" v-for="menu in menus" :key="menu.name">
            <router-link class="nav-link font-weight-bolder" :to="menu.path">{{menu.name}}</router-link>
          </li>
        </ul>
        <form class="form-inline flex-row ml-md-auto d-none d-md-flex">
          <input class="form-control mr-sm-2"
                 type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0"
                  type="submit">Search</button>
        </form>
      </div>
    </nav>
    <router-view class="container-fluid" style="margin-top: 5px"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      menus: [
        {
          name: 'Websites',
          path: '/websites',
        }, {
          name: 'MV',
          path: '/mv',
        }, {
          name: 'KLine',
          path: '/kline',
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  min-height: 100%;
  background-image: url("../public/static/img/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 0;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;

}
</style>
