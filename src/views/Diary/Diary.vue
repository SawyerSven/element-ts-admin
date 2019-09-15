<template>
  <div class="diary">
    <TableFilter @search="search" :filter-list="searchList" v-model="searchResult"></TableFilter>
    <TableMain :data="tableData" :tableObject="tableObject" style="margin-top:20px">
      <template #control>
        <TableControl :select-all="true"></TableControl>
      </template>
    </TableMain>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { SeaInfo } from '@/core/constraint';
@Component({
  name: 'Diary'
})
export default class Diary extends Vue {
  private searchList: Array<
    | SeaInfo.InputComponent
    | SeaInfo.RadioComponent
    | SeaInfo.CheckboxComponet
    | SeaInfo.SelectComponent
    | SeaInfo.DateComponent
    | SeaInfo.TextComponent
  > = [
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

  private tableObject = {
    isShowpagination: true,
    paginationOptions: {
      sizeChange: (e: any) => {
        // console.log(e);
      }
    },
    selection: {
      open: true,
      width: '100',
      handle: (e: any) => {
        // console.log(this)
      }
    },
    tableDataInfo: [
      {
        name: '日期',
        prop: 'date'
      },
      {
        name: '姓名',
        prop: 'name'
      },
      {
        name: '地址',
        prop: 'address'
      }
    ],
    tableControl: {
      title: '操作',
      type: 'buttons',
      commands: [
        {
          name: '查看施工日志',
          hasAuth: () => true,
          isShow: () => true,
          handle: (row: any, index: number) => {
            // console.log(this)
          }
        },
        {
          name: '编辑',
          hasAuth: () => true,
          isShow: () => true,
          handle: (row: any, index: number) => {
            // console.log(this)
          }
        },
        {
          name: '删除',
          hasAuth: () => true,
          isShow: () => true,
          handle: (row: any, index: number) => {
            // console.log(row, index);
          }
        },
        {
          name: '发布',
          hasAuth: () => true,
          isShow: () => true,
          handle: (row: any, index: number) => {
            // console.log(row, index);
          }
        },
        {
          name: '确认做完',
          hasAuth: () => true,
          isShow: () => true,
          handle: (row: any, index: number) => {
            // console.log(row, index);
          }
        },
        {
          name: '做工安排',
          hasAuth: () => true,
          isShow: () => true,
          handle: (row: any, index: number) => {
            // console.log(row, index);
          }
        },
        {
          name: '提交',
          hasAuth: () => true,
          isShow: () => true,
          handle: (row: any, index: number) => {
            // console.log(row, index);
          }
        }
      ]
    }
  };

  private tableData = [
    {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    },
    {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    },
    {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    },
    {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }
  ];

  private search() {
    // // console.log(this.searchResult);
  }
}
</script>

<style lang='less'>
</style>