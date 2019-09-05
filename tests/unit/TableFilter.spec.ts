import chai from 'chai';
import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Element from 'element-ui';
Vue.use(Element);
import TableFilter from '../../src/components/global/TableFilter.vue';
const expect = chai.expect;

describe('测试TableFilter组件', () => {
  describe('测试初始化传入的值', () => {
    const instance: any = shallowMount(TableFilter, {
      propsData: {
        form: {},
        'filter-list': [
          {
            label: '时间',
            prop: 'daterange',
            type: 'date',
            options: ['a', 'b', 'c'],
            dateConfig: {
              type: 'daterange',
              'range-separator': '-',
              'start-placeholder': '开始时间',
              'end-placeholder': '结束时间'
            }
          },
          {
            label: '施工日志编号',
            prop: 'code',
            type: 'select',
            placeholder: '请选择施工日志编号',
            options: [1, 2, 3, 4, 5, 6, 7, 8, 9]
          },
          {
            label: '施工日志状态',
            prop: 'status',
            type: 'select',
            placeholder: '请选择施工日志状态',
            options: [
              {
                label: '全部',
                value: -1
              },
              {
                label: '待发布',
                value: 1
              },
              {
                label: '待安排工人',
                value: 2
              },
              {
                label: '进行中',
                value: 3
              },
              {
                label: '完工',
                value: 4
              },
              {
                label: '待提交',
                value: 5
              },
              {
                label: '已提交',
                value: 6
              }
            ]
          }
        ]
      }
    });
    console.log(instance.vm.$props);
  });
});
