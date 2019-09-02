<template>
  <el-container class="wrap">
    <el-header :height="headerHeight + 'px'" class="wrap-header">
      <div class="org-select">
        <ProjectSelect></ProjectSelect>
      </div>
      <div class="login-control">
        <span>娇娇</span>
        <el-button type="text">退出</el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside class="wrap-slide-menu" width="200px" :style="{height:slideHeight}">
        <SideMenu></SideMenu>
      </el-aside>
      <el-main class="wrap-main">
        <router-view name="main"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getViewport } from '@/utils/index';
import ProjectSelect from './components/TheProjectSelect.vue';
import SideMenu from './components/SideMenu.vue';
/* setting Component & prop */
@Component({
  components: {
    ProjectSelect,
    SideMenu
  }
})
export default class Home extends Vue {
  /* initial data */
  private headerHeight = 80;

  /* Ajax请求的例子，get_dict方法定义在src/core/network/instance */
  private async getDict() {
    const res = await this.$http.get_dict({ getAll: true });
  }

  get slideHeight() {
    return getViewport().height - this.headerHeight + 'px';
  }
}
</script>
<style lang="less">
.wrap {
  .wrap-header {
    padding-left: 200px;
    min-width: 1334px;
    #flex(space-between, center);
    // background: @main-color;
    background: #fff;
    border-bottom: 1px solid #ccc;
    .login-control {
      width: 200px;
      color: #555;
      span {
        margin-right: 40px;
      }
    }
  }
  &-slide-menu {
    border-right: 1px solid #ccc;
  }
  &-main {
    .ele-minwidth(200px);
    .ele-minheight(80px);
  }
}
</style>
