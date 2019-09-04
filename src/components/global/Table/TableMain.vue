<template>
  <div class="table">
    <div class="table-content">
      <el-card class="table-content-header">
        <slot name="control"></slot>
      </el-card>
      <el-card class="table-content-body">
        <el-table
          ref="sea-table"
          :data="dataComputed"
          border
          @selection-change="handleSelect($event)"
          style="width:100%"
        >
          <el-table-column
            v-if="tableObject.selection.open"
            type="selection"
            :width="tableObject.selection.width"
          ></el-table-column>
          <el-table-column
            v-for="(column,index) in tableObject.tableDataInfo"
            :key="index"
            :label="column.name"
          >
            <template v-slot="scope">
              <!-- 直接输出传递过来的值 -->
              <span v-html="scope.row[column.prop]"></span>
            </template>
          </el-table-column>
          <el-table-column
            v-if="tableObject.tableControl"
            :label="tableObject.tableControl.title"
            :width="tableObject.tableControl.width"
          >
            <template v-if="tableObject.tableControl.type === 'buttons'" v-slot="scope">
              <el-button
                v-show="column.hasAuth() && column.isShow()"
                v-for="(column,index) in tableObject.tableControl.commands"
                :key="index"
                @click="column.handle(scope.row,scope.$index)"
                type="text"
                size="small"
              >{{column.name}}</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-card
          v-if="tableObject.isShowpagination || (tableObject.isShowpagination !== undefined && false)"
          shadow="never"
          class="table-pagination"
        >
          <!--            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"-->
          <el-pagination
            style="width:500px"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="1000"
          ></el-pagination>
        </el-card>
      </el-card>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import EventBus from '@/components/utils/bus';

@Component({
  components: {},
  props: {
    tableObject: {
      type: Object,
      default: () => {
        return {
          tableDataInfo: []
        };
      }
    },
    data: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  name: 'TableMain'
})
export default class TableMain extends Vue {
  public handleSelect(e: any) {
    if (
      this.$props.tableObject.selection &&
      this.$props.tableObject.selection.handle
    ) {
      this.$props.tableObject.selection.handle(e);
    }
  }
  public created() {
    EventBus.$on('toggle-select-all', () => {
      (this.$refs['sea-table'] as any).toggleAllSelection();
    });
  }
  public beforeDestroy() {
    EventBus.$off('toggle-select-all');
  }
  get dataComputed() {
    return this.$props.data;
  }
}
</script>

<style lang='less' scoped>
.table {
  &-content {
    &-header {
      width: 100%;
      margin-bottom: 20px;
    }
    &-body {
      width: 100%;
      min-height: 300px;
    }
  }
}
.table-pagination {
  margin-top: 10px;
  #flex(flex-end, center);
}
</style>