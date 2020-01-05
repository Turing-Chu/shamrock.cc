<template>
  <div id="WebsiteTemplate">
    <div v-if="this.type !== 'add'" class="row row-cols-6">
      <div class="col-sm-2" v-for="item in websites" :key="item.href">
        <div class="card mb-3" style="max-width: 540px">
          <a class="row no-gutters" target="_blank" :href=item.href v-on:click="addWebWeight(item.type, item.id)">
            <div class="col-md-4">
              <img class="rounded" :src=item.img_src alt="" width="80" height="80">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-text justify-content-center">{{item.title}}</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="card mb-3" style="max-width: 540px">
        <router-link class="row no-gutters" to="add">
          <div class="col-md-4">
            <img class="rounded" src="/static/img/logo/add-button.svg" alt="add websites" width="80" height="80">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-text justify-content-center">Add</h5>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div id="AddWebsite" v-else class="card" style="width: 50rem;">
      <form @submit="save" action="/websites" method="post" class="card-body">
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Type</label>
          <div class="col-sm-10">
            <select class="form-control">
              <option v-for="menu in menus" :key="menu.id" :value="menu.id">{{menu.name}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Title</label>
          <div class="col-sm-10"><input type="text" class="form-control"></div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Image link:</label>
          <div class="col-sm-10"><input type="text" class="form-control"></div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Website</label>
          <div class="col-sm-10"><input type="url" class="form-control"></div>
        </div>
        <div class="form-group row">
          <div class="col-sm-6">
            <button type="submit" v-on:submit="save" class="btn btn-primary">Save</button>
          </div>
          <div class="col-sm-6">
            <button type="reset" class="btn btn-primary">Reset</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>

export default {
  name: 'WebsiteTemplate',
  data() {
    return {
      type: '',
      menus: [],
      websites: [],
    };
  },
  methods: {
    save() {
      // eslint-disable-next-line no-unused-vars
      this.$store.dispatch('addWebsite').then((resp) => {
        this.$router.push('https://www.baidu.com/');
      });
    },
    loadTypes() {
      this.$store.dispatch('loadTypes').then((resp) => {
        this.menus = resp.data;
      });
    },
    loadWebsites(type) {
      this.$store.dispatch({ type: 'loadWebsites', item: String(type).toLowerCase() }).then((resp) => {
        this.websites = resp.data;
      });
    },
    addWebWeight(type, id) {
      this.$store.dispatch('addWebWeight', { type, id }).then(() => {});
    },
    getType(path) {
      const splitTo = String(path).split('/');
      return splitTo[splitTo.length - 1].toLowerCase();
    },

  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      const type = this.getType(to.path);
      if (type === 'add') {
        this.type = 'add';
        this.loadTypes();
      } else {
        this.type = '';
        this.loadWebsites(type);
      }
    },
  },
  created() {
    this.loadWebsites(this.getType(this.$route.path));
  },
};
</script>

<style scoped>

</style>
