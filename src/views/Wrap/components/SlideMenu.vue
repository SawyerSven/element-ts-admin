<template>
  <div class="slide-menu">
    <el-menu @select="goToTarget" default-active="1" class="el-menu-vertical-demo">
      <el-menu-item index="1">
        <i class="el-icon-s-order"></i>
        <span slot="title">项目详情</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-notebook-2"></i>
        <span slot="title">施工日志</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-notebook-1"></i>
        <span slot="title">上工记录</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {
  public goToTarget(e: any) {
    this.$router.push({ name: 'diary' });
  }
}
</script>

<style lang='less'>
.slide-menu {
  width: 100%;
  height: 100%;
}
</style>