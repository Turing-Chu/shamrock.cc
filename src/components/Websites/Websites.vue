<template>
  <div id="Websites" class="row row-cols-2">
    <div class="col col-md-1">
      <nav class="nav flex-column position-fixed btn-light">
        <li class="nav-item" v-bind:class="{ active: menu.name === 'Frontend' }" v-for="menu in menus" :key="`menu=${menu.name}`">
          <router-link class="nav-link" :to=menu.path>{{menu.name}}</router-link>
        </li>
      </nav>
    </div>
    <div class="col col-md-11">
      <router-view />
    </div>
  </div>
</template>

<script>
import Frontend from './Frontend.vue';

export default {
  el: '#Websites',
  name: 'Websites',
  components: [
    Frontend,
  ],
  data() {
    return {
      menus: [
        {
          name: 'Frontend',
          path: '/websites/frontend',
        }, {
          name: 'Language',
          path: '/websites/language',
        }, {
          name: 'Python',
          path: '/websites/python',
        }, {
          name: 'Rust',
          path: '/websites/rust',
        }, {
          name: 'GO',
          path: '/websites/golang',
        }, {
          name: 'Database',
          path: '/websites/database',
        }, {
          name: 'DevOps',
          path: '/websites/devops',
        }, {
          name: 'Other',
          path: '/websites/other',
        }, {
          name: 'Life',
          path: '/websites/life',
        }, {
          name: 'Shamrock',
          path: '/websites/shamrock',
        }, {
          name: 'Design',
          path: '/websites/design',
        }, {
          name: 'BlockChain',
          path: '/websites/blockchain',
        },
      ],
    };
  },
  methods: {
  },
};
</script>

<style scoped>

</style>
