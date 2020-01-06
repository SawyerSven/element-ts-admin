<template>
  <div class="sea-table">
    <el-form
      :inline="inline"
      :label-position="labelPosition"
      :label-suffix="labelSuffix"
      :label-width="labelWidth"
      :size="size"
      :model="formData"
      :ref="formRef"
      :rules="rules"
    >
      <el-form-item
        class="table-filter-form-item"
        v-for="(item, index) in formObject"
        :key="index"
        :label="item.label"
        :label-width="labelWidth || transformUnit(item['label-width'])"
        :prop="item.prop"
        :rules="item.rules"
      >
        <el-input
          :style="{ width: transformUnit(item.width) }"
          v-if="item.type.toLowerCase() === 'input'"
          v-model="formData[item.prop]"
          :placeholder="item.placeholder"
          :disabled="disabled || item.disabled"
          :clearable="item.clearable"
          :show-word-limit="item.showLimit"
          :maxlength="item.max"
          :type="item.inputType || 'text'"
        >
          <template v-if="item.append" slot="append">{{
            item.append
          }}</template></el-input
        >
        <el-input
          :style="{ width: transformUnit(item.width) }"
          v-if="item.type.toLowerCase() === 'inputnumber'"
          :type="item.inputType"
          v-model.number="formData[item.prop]"
          :placeholder="item.placeholder"
          :disabled="disabled || item.disabled"
          :clearable="item.clearable"
          :show-word-limit="item.showLimit"
          :maxlength="item.max"
        >
          <template v-if="item.append" slot="append">{{
            item.append
          }}</template></el-input
        >
        <el-input
          :style="{ width: transformUnit(item.width) }"
          v-if="item.type.toLowerCase() === 'textarea'"
          type="textarea"
          :autosize="item.autosize || { minRows: 4, maxRows: 10 }"
          v-model="formData[item.prop]"
          :placeholder="item.placeholder"
          :disabled="disabled || item.disabled"
          :clearable="item.clearable"
          :show-word-limit="item.showLimit"
          :maxlength="item.max"
        ></el-input>
        <el-radio-group
          :disabled="disabled || item.disabled"
          v-if="item.type.toLowerCase() === 'radio'"
          v-model="formData[item.prop]"
        >
          <el-radio
            v-for="(option, index) in item.options"
            :key="index"
            :disabled="option.disabled"
            :label="isObject(option) ? option.value || option.label : index"
            >{{ isObject(option) ? option.label : option }}</el-radio
          >
        </el-radio-group>
        <el-checkbox-group
          :disabled="item.disabled || disabled"
          v-if="item.type.toLowerCase() === 'checkbox' && item.options"
          v-model="formData[item.prop]"
        >
          <el-checkbox
            v-for="(option, index) in item.options"
            :key="index"
            :label="option.label"
            :disabled="option.disabled"
            >{{ option.text }}</el-checkbox
          >
        </el-checkbox-group>
        <el-checkbox
          :disabled="item.disabled || disabled"
          v-if="item.type.toLowerCase() === 'checkbox' && !item.options"
          v-model="formData[item.prop]"
          :true-label="item.trueValue"
          :false-label="item.falseValue"
          >{{ item.text }}</el-checkbox
        >
        <el-switch
          v-if="item.type.toLowerCase() === 'switch'"
          :disabled="item.disabled || disabled"
          v-model="formData[item.prop]"
          :width="item.width || 40"
          :active-value="item.activeValue || true"
          :inactive-value="item.inactiveValue || false"
        ></el-switch>
        <el-select
          :style="{ width: transformUnit(item.width) }"
          v-if="item.type.toLowerCase() === 'select'"
          :placeholder="item.placeholder"
          :disabled="disabled || item.disabled"
          v-model="formData[item.prop]"
          :clearable="item.clearable || true"
          :multiple="item.multiple"
          @change="item.onChange && item.onChange($event)"
        >
          <el-option
            v-for="(option, index) in item.options"
            :key="index"
            :label="isObject(option) ? option.label : option"
            :value="isObject(option) ? option.value : index"
          ></el-option>
        </el-select>
        <el-date-picker
          :style="{ width: transformUnit(item.width) }"
          v-model="formData[item.prop]"
          v-if="item.type.toLowerCase() === 'date'"
          :placeholder="item.placeholder"
          :value-format="
            (item.dateConfig && item.dateConfig['value-format']) || 'yyyy-MM-dd'
          "
          :disabled="disabled || item.disabled"
          :type="(item.dateConfig && item.dateConfig.type) || 'date'"
          :format="(item.dateConfig && item.dateConfig.format) || 'yyyy-MM-dd'"
          :unlink-panels="
            (item.dateConfig && item.dateConfig['unlink-panels']) || false
          "
          :picker-options="
            (item.dateConfig && item.dateConfig['picker-options']) || []
          "
          :range-separator="
            (item.dateConfig && item.dateConfig['range-separator']) || '-'
          "
          :start-placeholder="
            (item.dateConfig && item.dateConfig['start-placeholder']) ||
              '开始时间'
          "
          :end-placeholder="
            (item.dateConfig && item.dateConfig['end-placeholder']) ||
              '结束时间'
          "
        ></el-date-picker>
        <span :class="item.class" v-if="item.type.toLowerCase() === 'text'">{{
          formData[item.prop]
        }}</span>
        <p class="tips" v-if="item.tips">{{ item.tips }}</p>
      </el-form-item>
      <slot></slot>
    </el-form>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator';
import { filterBlockUnit } from '../../utils/filter';
import { isObject } from '../../utils/index';
@Component({
  name: 'SeaForm',
  filters: {
    filterUnit: filterBlockUnit
  },
  props: {
    inline: {
      type: Boolean,
      default: false
    },
    'label-width': {
      type: String
    },
    'label-position': {
      type: String,
      default: 'top'
    },
    'label-suffix': {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'mini'
    },
    'form-ref': {
      type: String,
      default: ''
    },
    rules: {
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
    disabled: {
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
  public isObject(target: any) {
    return isObject(target);
  }
}
</script>
<style lang="less" scoped>
.tips {
  font-size: 12px;
  color: #409eff;
}
</style>
