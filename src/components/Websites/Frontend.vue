<template>
  <div id="Frontend">
    <div class="row row-cols-6">
      <div class="col-sm-2" v-for="item in websites" :key="item.href">
        <div class="card mb-3" style="max-width: 540px">
          <a class="row no-gutters" :href=item.href>
            <div class="col-md-4">
              <img :src=item.imgSrc alt="" width="80" height="80">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h4 class="card-text justify-content-center">{{item.title}}</h4>
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
          imgSrc: '/static/img/logo/bootstrap.svg',
          href: 'https://getbootstrap.com/docs/4.4/getting-started/introduction/'
        }, {
          title: 'Bootstrap',
          imgSrc: '/static/img/logo/bootstrap.svg',
          href: 'https://getbootstrap.com/docs/4.4/getting-started/introduction/'
        }, {
          title: 'Bootstrap',
          imgSrc: '/static/img/logo/bootstrap.svg',
          href: 'https://getbootstrap.com/docs/4.4/getting-started/introduction/'
        }, {
          title: 'Bootstrap',
          imgSrc: '/static/img/logo/bootstrap.svg',
          href: 'https://getbootstrap.com/docs/4.4/getting-started/introduction/'
        }, {
          title: 'Bootstrap',
          imgSrc: '/static/img/logo/bootstrap.svg',
          href: 'https://getbootstrap.com/docs/4.4/getting-started/introduction/'
        }, {
          title: 'Bootstrap',
          imgSrc: '/static/img/logo/bootstrap.svg',
          href: 'https://getbootstrap.com/docs/4.4/getting-started/introduction/'
        }, {
          title: 'Bootstrap',
          imgSrc: '/static/img/logo/bootstrap.svg',
          href: 'https://getbootstrap.com/docs/4.4/getting-started/introduction/'
        }

      ]
    }
  }
}
</script>

<style scoped>

</style>
