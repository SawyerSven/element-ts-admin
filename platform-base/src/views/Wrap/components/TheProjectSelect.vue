<template>
  <div class="project">
    <el-icon class="el-icon-s-order project-icon"></el-icon>
    <el-dropdown szie="medium" @command="selectProject">
      <div class="project-name">
        <span class="project-name-content oneline-text">{{currentProject.name}}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
      <el-dropdown-menu class="project-dropdown" slot="dropdown">
        <el-dropdown-item
          :disabled="currentProject.id === item.id"
          :command="item"
          v-for="item in projectList"
          :key="item.id"
        >{{item.name}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'SelectProject'
})
export default class Home extends Vue {
  private currentProject = {
    name: '中交第二公路工程局有限公司',
    id: 1
  };
  private projectList = [
    {
      name: '中交第二公路工程局有限公司',
      id: 1
    },
    {
      name: '四川辉鸿建筑工程有限公司西藏分公司',
      id: 2
    },
    {
      name: '西藏瑞汐工贸有限公司',
      id: 3
    },
    {
      name: '拉萨丰华劳务有限公司',
      id: 4
    },
    {
      name: '江西省群力建设有限公司西藏分公司',
      id: 5
    }
  ];
  private selectProject(e: any): void {
    this.currentProject = e;
  }
}
</script>

<style lang='less'>
.project {
  min-width: 400px;
  padding: 0 20px;
  height: 60px;
  #flex(flex-start, center);
  &-icon {
    font-size: 30px;
  }
  &-name {
    #center;
    &-content {
      max-width: 500px;
      font-size: 24px;
      margin-left: 20px;
    }
  }
  &-dropdown {
    max-width: 500px;
  }
}
</style>