<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
      <a class="navbar-brand" href="/">Shamrock</a>
      <button class="navbar-toggler" type="button"
              data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-fixed-top">
          <li class="nav-item">
            <router-link class="nav-link active" to="/websites">Websites</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/mv">MV</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/kline">KLine</router-link>
          </li>
        </ul>
        <form class="form-inline flex-row ml-md-auto d-none d-md-flex">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <router-view class="container-fluid">
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
