<template>
  <div class="table">
    <el-card class="table-content">
      <div class="table-content-header">
        <TableControl :height="1000"></TableControl>
      </div>
    </el-card>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import TableControl from './TableControl.vue';

@Component({
  components: {
    TableControl
  },
  name: 'TableMain'
})
export default class Home extends Vue {}
</script>

<style lang='less' scoped>
.table {
  &-content {
    &-header {
      width: 100%;
    }
  }
}
</style>