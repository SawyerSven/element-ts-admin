<template>
  <div class="table-filter">
    <el-card>
      <el-form class="table-filter-form" :inline="true" ref="filter">
        <el-form-item
          class="table-filter-form-item"
          v-for="(item,index) in filterList"
          :key="index"
          :label="item.label + ':'"
        >
          <el-input
            v-if="item.type.toLowerCase() === 'input'"
            v-model="formData[item.prop]"
            :placeholder="item.placeholder"
            :disabled="item.disabled"
            :clearable="item.clearable"
          ></el-input>
          <el-select
            v-if="item.type.toLowerCase() === 'select'"
            :placeholder="item.placeholder"
            :disabled="item.disabled"
            v-model="formData[item.prop]"
            :clearable="item.clearable || true"
            :multiple="item.multiple"
          >
            <el-option
              v-for="(option,index) in item.options"
              :key="index"
              :label="isObject(option)?option.label:option"
              :value="isObject(option)?option.value:index"
            ></el-option>
          </el-select>
          <el-date-picker
            v-model="formData[item.prop]"
            v-if="item.type.toLowerCase() === 'date'"
            :placeholder="item.placeholder"
            :disabled="item.disabled"
            :type="item.dateConfig && item.dateConfig.type  || 'date'"
            :format="item.dateConfig && item.dateConfig.format || 'yyyy-MM-dd'"
            :unlink-panels="item.dateConfig && item.dateConfig['unlink-panels'] || false"
            :picker-options="item.dateConfig && item.dateConfig['picker-options'] || []"
            :range-separator="item.dateConfig && item.dateConfig['range-separator'] || '-'"
            :start-placeholder="item.dateConfig && item.dateConfig['start-placeholder'] || '开始时间'"
            :end-placeholder="item.dateConfig && item.dateConfig['end-placeholder'] || '结束时间'"
          ></el-date-picker>
        </el-form-item>
        <el-form-item class="filter-button-group">
          <el-button type="primary" @click="setFilter">查询</el-button>
          <el-button style="margin-right:10px;" @click="clearFilter">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Model } from 'vue-property-decorator';
import { isObject } from '../utils';
@Component({
  name: 'TableFilter',
  props: {
    'filter-list': {
      type: Array,
      default(): [] {
        return [];
      }
    }
  }
})
export default class TableFilter extends Vue {
  get formData() {
    return this.form;
  }
  set formData(newVal) {
    this.$emit('updateData', newVal);
  }
  @Model('updateData', {
    type: Object,
    default: () => {
      return {};
    }
  })
  public form!: object;
  public isObject = isObject;

  public clearFilter() {
    this.$set(this, 'formData', {});
    this.setFilter();
  }
  public setFilter() {
    this.$emit('search');
  }
}
</script>

<style lang='less'>
.table-filter-form {
  #flex(flex-start, center, row, wrap);
  .table-filter-form-item {
    font-size: 12px;
    flex-shrink: 0;
  }
}
.filter-button-group {
  margin-left: 30px;
}
</style>