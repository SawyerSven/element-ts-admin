<template>
  <div class="table-control" :style="{height:h}">
    <slot>
      <h3>施工记录</h3>
      <div class="table-control-group">
        <el-button
          v-if="selectAll"
          @click="toggleSelectAll"
          class="table-control-group-btn"
          type="text"
        >全选</el-button>
        <el-button class="table-control-group-btn">批量提交</el-button>
        <el-button class="table-control-group-btn" type="primary">新增施工日志</el-button>
      </div>
    </slot>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import EventBus from '@/components/utils/bus';

@Component({
  name: 'TableFilter',
  props: {
    'height': {
      type: [String, Number],
      default: 50
    },
    'select-all': {
      type: Boolean,
      default: false
    }
  }
})
export default class TableControl extends Vue {
  get h() {
    const height = this.$props.height;
    return typeof height === 'string' ? height : `${height}px`;
  }
  public toggleSelectAll() {
    EventBus.$emit('toggle-select-all');
  }
}
</script>

<style lang='less' scoped>
.table-control {
  width: 100%;
  height: 100px;
  #flex(space-between, center);
  .table-control-group {
    max-width: 50%;
    height: 100%;
    #center;
    .table-control-group-btn {
      margin: 0 10px;
    }
  }
}
</style>