<template>
  <el-container class="wrap">
    <el-header height="80px" class="wrap-header">
      <div class="org-select"></div>
      <div class="login-control">
        <span>娇娇</span>
        <el-button style="color:#fff;" type="text">退出</el-button>
      </div>
    </el-header>
    <el-aside class="test">1</el-aside>
    <el-main>3</el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {
  public mounted() {
    this.$http.get_dict({ getAll: true }).then((res: any) => {
      console.log(res);
    });
  }
}
</script>
<style lang="less">
.wrap {
  &-header {
    min-width: 1334px;
    #flex(space-between, center);
    background: @main-color;
    .login-control {
      width: 200px;
      color: #fff;
      span {
        margin-right: 40px;
      }
    }
  }
}
</style>
