<template>
  <div>
    <ul>
      <li v-for="i in data" :key="i">{{i}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'mv',
  data: function () {
    return {
      data: [1, 3, 3]
    }
  }
}
</script>

<style scoped>

</style>
