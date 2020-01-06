<template>
  <div class="list-group">
    <slot></slot>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import emitter from '../../utils/mixins/emitter';
@Component({
  name: 'ListGroup',
  mixins: [emitter]
})
export default class extends Vue {
  get childrenSize() {
    return this.$children.length;
  }
  get isAllChildrenSelected() {
    return this.$children.every((child: Vue) => !!child.$data.isSelect);
  }
  get selectedChildren() {
    return this.$children.reduce(
      (count: any, current: any, index: any, arr: any): any[] => {
        if (current.$data.isSelect) {
          count.push(current.$props.id);
        }
        return count;
      },
      []
    );
  }
  private selectAll() {
    const value = !this.isAllChildrenSelected;
    this.$children.forEach((child: Vue) => {
      child.$data.isSelect = value;
    });
    this.$emit('selfChange', this.selectedChildren);
  }
}
</script>
<style lang="less" scoped>
</style>
