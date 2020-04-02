<template>
  <div id="WebsiteTemplate">
    <b-row cols="6" v-if="this.type !== 'add'">
      <b-col sm="2" v-for="item in websites" :key="item.href">
        <b-card class=" mb-3" style="width: 98%; height: 80%">
          <b-link class="row no-gutters" target="_blank" :href=item.href
                  v-on:click="addWebWeight(item.type, item.id)">
            <div class="col-md-4">
              <img class="rounded" :src=item.img_src alt="" width="80" height="80">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-text justify-content-center">{{item.title}}</h5>
              </div>
            </div>
          </b-link>
        </b-card>
      </b-col>
      <b-card mb="3" style="max-width: 540px">
        <router-link class="row no-gutters" to="add">
          <b-col md="4">
            <b-img rounded="true" src="/static/img/logo/add-button.svg" alt="add websites" width="80"
                   height="80"/>
          </b-col>
          <b-col md="8">
            <b-card-body>
              <b-card-text text-tag="h5" class="justify-content-center">Add</b-card-text>
            </b-card-body>
          </b-col>
        </router-link>
      </b-card>
    </b-row>
    <b-card id="AddWebsite" v-else class="mb-3" bg-variant="light" style="width: 50%; height:100%;">
      <b-card-body title="Add website">
        <b-form @submit="save">
          <b-form-group label="Type: " label-cols-lg="3" label-size="lg" label-class="font-weight-bold pt-0"
                        class="mb-1">
            <b-form-select v-model="addForm.type" :options="menus"></b-form-select>
          </b-form-group>
          <b-form-group label="Title: " label-cols-sm="3" label-size="sm" label-class="font-weight-bold pt-0"
                        class="mb-1">
            <b-form-input v-model=addForm.title placeholder="Enter Website Title"></b-form-input>
          </b-form-group>
          <b-form-group label="Image link: " label-cols-sm="3" label-size="sm"
                        label-class="font-weight-bold pt-0" class="mb-1">
            <b-form-input v-model=addForm.img_src placeholder="Enter Website icon link"></b-form-input>
          </b-form-group>
          <b-form-group label="Website: " label-cols-sm="3" label-size="sm"
                        label-class="font-weight-bold pt-0" class="mb-1">
            <b-form-input v-model=addForm.title placeholder="Enter website address"></b-form-input>
          </b-form-group>
        </b-form>
      </b-card-body>
    </b-card>
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
      lastPath: '', // ??
      addForm: {
        type: '',
        title: '',
        img_src: '',
        href: '',
      },
    };
  },
  methods: {
    save(e) {
      this.addForm.type = this.addForm.type.toLowerCase();
      // eslint-disable-next-line no-unused-vars
      this.$store.dispatch('addWebsite', this.addForm).then((resp) => {
        this.$router.push({ path: 'frontend' });
      });
      e.preventDefault();
    },
    reset(e) {
      e.preventDefault();
      // Reset our form values
      this.addForm.type = '';
      this.addForm.title = '';
      this.addForm.img_src = '';
      this.addForm.href = '';
    },
    loadTypes() {
      this.$store.dispatch('loadTypes').then((resp) => {
        resp.data.forEach((item) => {
          this.menus.push({ value: item.name, text: item.name, weight: item.weight });
        });
      });
    },
    loadWebsites(type) {
      this.$store.dispatch({ type: 'loadWebsites', item: String(type).toLowerCase() }).then((resp) => {
        this.websites = resp.data;
      });
    },
    addWebWeight(type, id) {
      this.$store.dispatch('addWebWeight', { type, id }).then(() => {
      });
    },
    getType(path) {
      const splitTo = String(path).split('/');
      return splitTo[splitTo.length - 1].toLowerCase();
    },
  },
  watch: {
    $route(to, from) {
      const type = this.getType(to.path);
      this.lastPath = from.path;
      console.log(from.path);
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
