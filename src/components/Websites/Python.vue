<template>
  <div id="Python">
    <div class="row row-cols-6">
      <div class="col-sm-2" v-for="item in websites" :key="item.href">
        <div class="card mb-3" style="max-width: 540px">
          <a class="row no-gutters" :href=item.href>
            <div class="col-md-4">
              <img :src=item.imgSrc class="rounded" :alt="item.title" width="80" height="80">
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
  name: 'Python',
  data: function () {
    return {
      websites: [
        {
          title: 'TIOBE',
          imgSrc: 'https://www.tiobe.com/images/logo.png',
          href: 'https://www.tiobe.com/tiobe-index/'
        }, {
          title: 'Linux',
          imgSrc: 'https://linux.die.net/style/logo.svg',
          href: 'https://linux.die.net/man/'
        }, {
          title: 'Swift',
          imgSrc: 'https://swift.org/assets/images/swift.svg',
          href: 'https://swift.org/'
        }, {
          title: 'Yarn',
          imgSrc: '/static/img/logo/yarn.svg',
          href: 'https://yarnpkg.com/en/docs/getting-started'
        }, {
          title: 'Python',
          imgSrc: 'https://www.python.org/static/img/python-logo-large.c36dccadd999.png',
          href: 'https://docs.python.org/3/py-modindex.html'
        }, {
          title: 'Rust',
          imgSrc: 'https://www.rust-lang.org/static/images/rust-logo-blk.svg',
          href: 'https://www.rust-lang.org/'
        }, {
          title: 'Golang',
          imgSrc: 'https://golang.org/lib/godoc/images/home-gopher.png',
          href: 'https://golang.org/'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
