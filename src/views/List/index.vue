<template>
  <div class="List">
    <el-button @click="selectAll">123</el-button>
    <el-card>
      <sea-list-group ref="listGroup" @selfChange="selfChange">
        <sea-list
          type="selection"
          v-for="(item,index) in list"
          :key="index"
          :id="item.id"
          :content="item.content"
          :footer="item.footer"
        ></sea-list>
      </sea-list-group>
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
      id: 1,
      content: '订单详情 王小波于2019-09-09 12：12：12支付订单成功',
      footer: '2018-05-12 15:30'
    },
    {
      id: 2,
      content: '订单详情 王小波于2019-09-09 12：12：12支付订单成功',
      footer: '2018-05-12 15:30'
    },
    {
      id: 3,
      content: '订单详情 王小波于2019-09-09 12：12：12支付订单成功',
      footer: '2018-05-12 15:30'
    },
    {
      id: 4,
      content: '订单详情 王小波于2019-09-09 12：12：12支付订单成功',
      footer: '2018-05-12 15:30'
    },
    {
      id: 5,
      content: '订单详情 王小波于2019-09-09 12：12：12支付订单成功',
      footer: '2018-05-12 15:30'
    },
    {
      id: 6,
      content: '订单详情 王小波于2019-09-09 12：12：12支付订单成功',
      footer: '2018-05-12 15:30'
    }
  ];
  public selfChange(e) {
    console.log(e);
  }
  public selectAll() {
    (this.$refs.listGroup as any).selectAll();
  }
}
</script>
<style lang="less">
</style>
