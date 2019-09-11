<template>
  <div class="sea-form">
    <SeaForm
      label-position="left"
      label-suffix="："
      :inline="false"
      form-ref="form"
      :disabled="formDisabled"
      :data="formData"
      :form-object="formObject"
    ></SeaForm>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { FilterObject } from '../../core/constraint';
@Component({
  name: 'FormPage'
})
export default class FormPage extends Vue {
  public labelSuffix = 'asdasd';
  public formData = {};
  public formDisabled = false;
  public formObject: FilterObject[] = [
    {
      label: '日期',
      type: 'date',
      prop: 'name',
      width: '100%'
    },
    {
      label: '选择机构',
      type: 'input',
      prop: 'orgId',
      width: '100%'
    },
    {
      label: '只读数据',
      type: 'text',
      prop: 'orgId',
      width: '测试',
      class: 'text'
    }
  ];
}
</script>
<style lang='less'>
.sea-form {
  padding: 20px;
}
.text {
  font-size: 80px;
}
</style>