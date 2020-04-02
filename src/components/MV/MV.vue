<template>
  <b-row id="MV" cols="4">
    <b-col md="3" v-for="mv in mvs" :key="mv.name">
      <a target="_blank" :href="mv.path">
        <b-card :title=mv.name img-height="300" :img-src=mv.imgSrc :img-alt=mv.name img-top />
      </a>
    </b-col>

  </b-row>
</template>

<script>
export default {
  name: 'MV',
  data() {
    return {
      mvs: [
        {
          name: '子弥 - 夜笙歌',
          path: '/static/video/1d85c86fa1da8185894d90f3493fec81.mp4',
          imgSrc: '/static/img/1d85c86fa1da8185894d90f3493fec81.jpeg',
        }, {
          name: '欣小萌 - 桃花笑(横屏版)',
          path: '/static/video/5c7f0498d2de7cb57335a6fc39f9080d.mp4',
          imgSrc: '/static/img/5c7f0498d2de7cb57335a6fc39f9080d.jpeg',
        }, {
          name: '欣小萌 - 桃花笑(竖屏版)',
          path: '/static/video/86f6cd3d74327c5c3eb19cdffef8f785.mp4',
          imgSrc: '/static/img/86f6cd3d74327c5c3eb19cdffef8f785.jpeg',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
