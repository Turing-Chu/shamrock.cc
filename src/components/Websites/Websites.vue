<template>
  <div id="Websites">
    <b-alert v-model="alert.show" variant="danger" dismissible>
      {{alert.message}}
    </b-alert>
    <b-row cols="2" style="width: 100%">
      <b-col md=true>
      <b-nav class="flex-column position-fixed btn-light">
        <b-nav-item class="text-left" v-bind:class="{ active: index === 0 }"
            v-for="(menu, index) in menus" :key="index">
          <router-link
              active-class="router-link-active"
              class="nav-link font-weight-bolder"
              :to="menu.path|toLowerCase"
              v-on:click.native="addTypeWeight(menu.name)">
            {{menu.name}}
          </router-link>
        </b-nav-item>
      </b-nav>
    </b-col>
      <b-col md="11" style="margin-left: 10%">
        <router-view />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Websites',
  data() {
    return {
      alert: {
        message: '',
        show: false,
      },
      menus: [],
      websites: [],
    };
  },
  methods: {
    addTypeWeight(type) {
      this.$store.dispatch('addTypeWeight', { name: type }).then(() => {
        this.alert.show = false;
      }).catch((err) => {
        this.alert.message = err.toString();
        this.alert.show = true;
        console.error(err);
      });
    },
    loadTypes() {
      this.$store.dispatch('loadTypes').then((resp) => {
        this.menus = resp.data;
        this.menus.forEach((item) => {
          // eslint-disable-next-line no-param-reassign
          item.path = `/websites/${String(item.name).toLowerCase()}`;
        });
        this.alert.show = false;
      }).catch((err) => {
        this.alert.message = err.toString();
        this.alert.show = true;
        console.error(err);
      });
    },
  },
  filters: {
    toLowerCase(name) {
      return String(name).toLowerCase();
    },
  },
  created() {
    this.loadTypes();
  },
};
</script>

<style scoped>

</style>
