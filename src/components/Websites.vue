<template>
  <div id="Websites" class="row row-cols-2">
    <div class="col col-md-1">
      <nav class="nav flex-column position-fixed btn-light">
        <li class="nav-item" v-bind:class="{ active: menu === 'Frontend' }" v-for="(menu,index) in menus" :key="`menu=${index}`">
          <router-link class="nav-link" to="/websites/frontend">{{menu}}</router-link>
        </li>
      </nav>
    </div>
    <div class="col col-md-11">
      <router-view style=""></router-view>
    </div>
  </div>
</template>

<script>
import Frontend from './Websites/Frontend'

export default {
  el: '#Websites',
  name: 'Websites',
  components: [
    Frontend
  ],
  data: function () {
    return {
      menus: [
        'Frontend', 'Language', 'Python', 'Rust', 'GO', 'Database', 'DevOps'
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
