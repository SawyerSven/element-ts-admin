<template>
  <div class="table-control" :style="{height}"></div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'TableFilter',
  props: {
    height: [String, Number]
  },

})
export default class Home extends Vue {}
</script>

<style lang='less' scoped>
.table-control {
  width: 100%;
  height: 100px;
}
</style>