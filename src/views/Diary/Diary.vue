<template>
  <div class="diary">
    <TableFilter @search="search" :filter-list="searchList" v-model="searchResult"></TableFilter>
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
      label: '测试搜索',
      prop: 'search',
      type: 'input',
      placeholder: '搜索你要的东西'
    },
    {
      label: '测试下拉框',
      prop: 'select',
      type: 'select',
      placeholder: '搜索你要的东西',
      options: ['a', 'b', 'c']
    },
    {
      label: '测试搜索',
      prop: 'search',
      type: 'input',
      placeholder: '搜索你要的东西'
    },
    {
      label: '测试搜索',
      prop: 'search',
      type: 'input',
      placeholder: '搜索你要的东西'
    }
  ];
  private searchResult = {};

  private search() {
    console.log(123);
  }
}
</script>

<style lang='less'>
</style>