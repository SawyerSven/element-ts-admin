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
import { SeaInfo } from '../../core/constraint';
@Component({
  name: 'FormPage'
})
export default class FormPage extends Vue {
  public labelSuffix = 'asdasd';
  public formData = {
    checkbox: []
  };
  public formDisabled = false;
  public formObject: Array<
    | SeaInfo.InputComponent
    | SeaInfo.RadioComponent
    | SeaInfo.CheckboxComponet
    | SeaInfo.SelectComponent
    | SeaInfo.DateComponent
    | SeaInfo.TextComponent
  > = [
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
      width: '100px',
      class: 'text'
    },
    // options为对象时，如果没有指定value,则会用label作为value
    // 为单选框添加禁用，需要option为一个disable属性
    {
      label: '单选框',
      type: 'radio',
      prop: ' radio',
      width: '100px',
      options: [
        {
          label: '备选项'
        },
        {
          label: '禁用的选项',
          disabled: true,
          value: 2
        },
        {
          label: '只设定label值是label'
        }
      ]
    },
    // 使用options前需要在data里初始化对应的Prop
    {
      label: '多选框',
      type: 'checkbox',
      prop: 'checkbox',
      text: '选项',
      trueValue: '真的',
      falseValue: '假的',
      max: 5,
      min: 1,
      options: [
        {
          label: 1,
          disabled: true,
          text: '测试1'
        },
        {
          label: 2,
          text: '测试2'
        }
      ]
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