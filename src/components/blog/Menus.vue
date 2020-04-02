<template>
  <b-row cols="2" id="menus" style="width: 100%">
    <b-col md=true>
      <b-nav class="flex-column position-fixed btn-light">
        <b-nav-item class="text-left" v-bind:class="{ active: index === 0 }"
            v-for="(menu, index) in menus" :key="index" style="background-color: #2D2220">
          <router-link class="text-white font-weight-bolder" :to="menu.name">
            {{menu.name}}
          </router-link>
        </b-nav-item>
      </b-nav>
    </b-col>
    <b-col md="11" style="margin-left: 10%">
      <router-view />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'menus',
  data() {
    return {
      menus: [
        {
          name: 'Introduction',
        }, {
          name: 'Algorithm',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
