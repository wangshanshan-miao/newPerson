<template>
    <div class="box">
        <m-nav></m-nav>
    </div>
</template>

<script>
import mNav from '@/components/nav.vue'
export default {
  name: 'app',
  components: { mNav }
}
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .box {
    padding-top: 0px;
  }
}
@media (min-width: 768px) {
  .box {
    padding-top: 10px;
  }
    
}
.box {
    background: #383838;
    // padding-top: 10px;
}
</style>
