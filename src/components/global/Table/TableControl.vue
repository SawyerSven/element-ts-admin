<template>
  <div class="table-control" :style="{height:h}">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'TableFilter',
  props: {
    'height': {
      type: [String, Number],
      default: 50
    },
    'title': {
      type: String,
      default: ''
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