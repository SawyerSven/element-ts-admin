<template>
  <div class="List">
    <el-card>
      <sea-list
        type="selection"
        v-for="item in list"
        :key="item"
        :content="item.content"
        :footer="item.footer"
      ></sea-list>
    </el-card>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Provide } from 'vue-property-decorator';
@Component({
  name: 'ListVue'
})
export default class extends Vue {
  public list = [
    {
      content: '订单详情 王小波于2019-09-09 12：12：12支付订单成功',
      footer: '2018-05-12 15:30'
    },
    {
      content: '订单详情 王小波于2019-09-09 12：12：12支付订单成功',
      footer: '2018-05-12 15:30'
    },
    {
      content: '订单详情 王小波于2019-09-09 12：12：12支付订单成功',
      footer: '2018-05-12 15:30'
    },
    {
      content: '订单详情 王小波于2019-09-09 12：12：12支付订单成功',
      footer: '2018-05-12 15:30'
    },
    {
      content: '订单详情 王小波于2019-09-09 12：12：12支付订单成功',
      footer: '2018-05-12 15:30'
    },
    {
      content: '订单详情 王小波于2019-09-09 12：12：12支付订单成功',
      footer: '2018-05-12 15:30'
    }
  ];
}
</script>
<style lang="less">
</style>
