<template>
  <div class="diary">
    <TableFilter @search="search" :filter-list="searchList" v-model="searchResult"></TableFilter>
    <TableMain style="margin-top:20px"></TableMain>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { FilterObject } from '@/core/constraint';
@Component({
  name: 'Diary'
})
export default class Home extends Vue {
  private searchList: FilterObject[] = [
    {
      label: '时间',
      prop: 'daterange',
      type: 'date',
      options: ['a', 'b', 'c'],
      dateConfig: {
        'type': 'daterange',
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
  ];
  private searchResult = {};

  private search() {
    // console.log(this.searchResult);
  }
}
</script>

<style lang='less'>
</style>