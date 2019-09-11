<template>
  <div class="sea-table">
    <el-form
      :inline="inline"
      :label-position="labelPosition"
      :label-suffix="labelSuffix"
      :size="size"
      :model="formData"
      :ref="formRef"
      :rules="rules"
    >
      <el-form-item
        class="table-filter-form-item"
        v-for="(item,index) in formObject"
        :key="index"
        :label="item.label"
        :label-width="transformUnit(item['label-width'])"
      >
        <el-input
          :style="{'width':transformUnit(item.width)}"
          v-if="item.type.toLowerCase() === 'input'"
          v-model="formData[item.prop]"
          :placeholder="item.placeholder"
          :disabled="disabled || item.disabled"
          :clearable="item.clearable"
        ></el-input>
        <el-select
          :style="{'width':transformUnit(item.width)}"
          v-if="item.type.toLowerCase() === 'select'"
          :placeholder="item.placeholder"
          :disabled="disabled || item.disabled"
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
          :style="{'width':transformUnit(item.width)}"
          v-model="formData[item.prop]"
          v-if="item.type.toLowerCase() === 'date'"
          :placeholder="item.placeholder"
          :disabled="disabled || item.disabled"
          :type="item.dateConfig && item.dateConfig.type  || 'date'"
          :format="item.dateConfig && item.dateConfig.format || 'yyyy-MM-dd'"
          :unlink-panels="item.dateConfig && item.dateConfig['unlink-panels'] || false"
          :picker-options="item.dateConfig && item.dateConfig['picker-options'] || []"
          :range-separator="item.dateConfig && item.dateConfig['range-separator'] || '-'"
          :start-placeholder="item.dateConfig && item.dateConfig['start-placeholder'] || '开始时间'"
          :end-placeholder="item.dateConfig && item.dateConfig['end-placeholder'] || '结束时间'"
        ></el-date-picker>
        <span :class="item.class" v-if="item.type.toLowerCase() === 'text'">{{formData[item.prop]}}</span>
      </el-form-item>
      <slot></slot>
    </el-form>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Model } from 'vue-property-decorator';
import { filterBlockUnit } from '../../utils/filter';
@Component({
  name: 'SeaForm',
  filters: {
    filterUnit: filterBlockUnit
  },
  props: {
    'inline': {
      type: Boolean,
      default: false
    },
    'label-position': {
      type: String,
      default: 'top'
    },
    'label-suffix': {
      type: String,
      default: ''
    },
    'size': {
      type: String,
      default: 'mini'
    },
    'form-ref': {
      type: String,
      default: ''
    },
    'rules': {
      type: Object,
      default: () => {
        return {};
      }
    },
    'form-object': {
      type: Array,
      default: () => {
        return [];
      }
    },
    'disabled': {
      type: Boolean,
      default: false
    }
  }
})
export default class SeaForm extends Vue {
  get formData() {
    return this.$props.data;
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
  public data!: object;
  public transformUnit(unit: any): string {
    return filterBlockUnit(unit);
  }
}
</script>
<style lang='less' scoped>
</style>