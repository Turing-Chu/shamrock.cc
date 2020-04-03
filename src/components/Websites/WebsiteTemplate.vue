<template>
  <div id="WebsiteTemplate">
    <b-row cols="6">
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
      <b-card class=" mb-3" style="width: 98%; height: 80%">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img rounded="true" alt="add websites" src="/static/img/logo/add-button.svg"/>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-button variant="primary" v-on:click="loadTypes" v-b-modal.AddWebsite>Add</b-button>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-row>
    <b-modal id="AddWebsite" hide-footer title="Add website">
      <b-form @submit="save">
        <b-form-group label="Type: " label-cols-lg="3" label-size="lg" label-class="font-weight-bold pt-0"
                      class="mb-1">
          <b-form-select v-model="addForm.type" :options="menus"></b-form-select>
        </b-form-group>
        <b-form-group label="Title: " label-cols-lg="3" label-size="lg" label-class="font-weight-bold pt-0"
                      class="mb-1">
          <b-form-input v-model=addForm.title placeholder="Enter Website Title"></b-form-input>
        </b-form-group>
        <b-form-group label="Image link: " label-cols-lg="3" label-size="lg"
                      label-class="font-weight-bold pt-0" class="mb-1">
          <b-form-input v-model=addForm.img_src placeholder="Enter Website icon link"></b-form-input>
        </b-form-group>
        <b-form-group label="Website: " label-cols-lg="3" label-size="lg"
                      label-class="font-weight-bold pt-0" class="mb-1">
          <b-form-input v-model=addForm.href placeholder="Enter website address"></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-row class="justify-content-md-center">
            <b-button pill type="submit" v-on:click="save" size="lg" variant="primary">Save</b-button>
            <b-button pill type="reset" v-on:reset="reset" size="lg" variant="dark">Reset</b-button>
          </b-row>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: 'WebsiteTemplate',
  data() {
    return {
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
    // eslint-disable-next-line no-unused-vars
    save(e) {
      // eslint-disable-next-line no-unused-vars
      this.$store.dispatch('addWebsite', this.addForm).then((resp) => {
      });
      this.$router.push({ path: `/websites/${this.addForm.toLowerCase()}` });
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
  created() {
    this.loadWebsites(this.getType(this.$route.path));
  },
};
</script>

<style scoped>

</style>
