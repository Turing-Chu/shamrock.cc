<template>
  <div id="Frontend">
    <div class="row row-cols-6">
      <div class="col-sm-2" v-for="item in websites" :key="item.href">
        <div class="card mb-3" style="max-width: 540px">
          <a class="row no-gutters" target="_blank" :href=item.href>
            <div class="col-md-4">
              <img class="rounded" :src=item.imgSrc alt="" width="80" height="80">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-text justify-content-center">{{item.title}}</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Frontend',
  data: function () {
    return {
      websites: [
        {
          title: 'Bootstrap',
          imgSrc: 'https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg',
          href: 'https://getbootstrap.com/docs/4.4/getting-started/introduction/'
        }, {
          title: 'VUE',
          imgSrc: 'https://cn.vuejs.org/images/logo.png',
          href: 'https://cn.vuejs.org/v2/guide/'
        }, {
          title: 'Chart.js',
          imgSrc: 'https://www.chartjs.org/img/chartjs-logo.svg',
          href: 'http://www.chartjs.org/'
        }, {
          title: 'Yarn',
          imgSrc: '/static/img/logo/yarn.svg',
          href: 'https://yarnpkg.com/en/docs/getting-started'
        }, {
          title: 'WebAssembly',
          imgSrc: 'https://webassembly.org/css/webassembly.svg',
          href: 'https://webassembly.org/'
        }, {
          title: 'iView',
          imgSrc: 'https://file.iviewui.com/icon/viewlogo.png',
          href: 'https://www.iviewui.com/'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
