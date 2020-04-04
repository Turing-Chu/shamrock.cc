<template>
  <b-container fluid class="p-4 bg-dark">
    <b-row>
      <b-col>
        <b-link href="/pictures/manjusaka">
          <b-img-lazy alt="Manjusaka" fluid src="/static/img/manjusaka/shamrock.jpg"
                      style="max-height: 200px;max-width: 200px;" thumbnail />>
        </b-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import Manjusaka from './Manjusaka.vue';

export default {
  name: 'Images',
  comments: {
    Manjusaka,
  },
};
</script>

<style scoped>

</style>
