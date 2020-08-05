<template>
  <div class="box">
    <m-nav></m-nav>


  </div>

</template>

<script>
  import mNav from '@/components/nav.vue'
  export default {
    name: 'app',
    components: {
      mNav
    }
  }
</script>

<style lang="scss" scoped>
  // @import '../../../static/css/bootstrap.min.css'
  .box {
    background: #383838;
    padding-top: 10px;
  }
</style>
