<template>
  <div id="Websites" class="row row-cols-2">
    <div class="col col-md-1">
      <nav class="nav flex-column position-fixed btn-light">
        <li class="nav-item" v-bind:class="{ active: index === 0 }"
            v-for="(menu, index) in menus" :key="`menu=${menu.id}`">
          <router-link active-class="router-link-active" class="nav-link font-weight-bolder" :to="menu.path|toLowerCase">{{menu.name}}</router-link>
        </li>
      </nav>
    </div>
    <div class="col col-md-11" style="margin-left: 10%">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Websites',
  data() {
    return {
      menus: [],
      websites: [],
    };
  },
  methods: {
    loadTypes() {
      this.$store.dispatch('loadTypes').then((resp) => {
        this.menus = resp.data;
        this.menus.forEach((item) => {
          // eslint-disable-next-line no-param-reassign
          item.path = `/websites/${String(item.name).toLowerCase()}`;
        });
      });
    },
  },
  filters: {
    toLowerCase(name) {
      return String(name).toLowerCase();
    },
  },
  mounted() {
    this.loadTypes();
  },
};
</script>

<style scoped>

</style>
