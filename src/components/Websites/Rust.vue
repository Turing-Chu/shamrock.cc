<template>
  <div id="Frontend">
    <div class="row row-cols-6">
      <div class="col-sm-2" v-for="item in websites" :key="item.href">
        <div class="card mb-3" style="max-width: 540px">
          <a class="row no-gutters" target="_blank" :href=item.href>
            <div class="col-md-4">
              <img class="rounded" :src=item.imgSrc :alt="item.title" width="80" height="80">
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
          title: 'Rust-Lang',
          imgSrc: 'https://www.rust-lang.org/static/images/rust-logo-blk.svg',
          href: 'https://www.rust-lang.org/'
        }, {
          title: 'Rust Doc',
          imgSrc: 'https://www.rust-lang.org/static/images/rust-logo-blk.svg',
          href: 'https://doc.rust-lang.org/rustdoc/index.html'
        }, {
          title: 'Rust Doc Chinese',
          imgSrc: 'https://kaisery.github.io/trpl-zh-cn/favicon.png',
          href: 'https://kaisery.github.io/trpl-zh-cn/'
        }, {
          title: 'Rust STD LIB',
          imgSrc: 'https://www.rust-lang.org/static/images/rust-logo-blk.svg',
          href: 'https://doc.rust-lang.org/std/index.html'
        }, {
          title: 'Cargo',
          imgSrc: 'https://doc.rust-lang.org/cargo/images/Cargo-Logo-Small.png',
          href: 'https://doc.rust-lang.org/cargo/index.html'
        }, {
          title: 'Crate',
          imgSrc: 'https://crates.io/assets/Cargo-Logo-Small-c39abeb466d747f3be442698662c5260.png',
          href: 'https://crates.io/'
        }, {
          title: 'Diesel',
          imgSrc: '/static/img/logo/diesel.svg',
          href: 'http://diesel.rs/'
        }, {
          title: 'Rocket',
          imgSrc: 'https://rocket.rs/v0.4/images/logo.svg',
          href: 'https://rocket.rs/'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
