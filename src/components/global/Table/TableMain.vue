<template>
  <div class="table">
    <div class="table-content">
      <!-- <el-card class="table-content-header"> -->
      <slot name="control"></slot>
      <!-- </el-card> -->
      <el-card class="table-content-body">
        <el-table
          ref="sea-table"
          :data="dataComputed"
          @selection-change="handleSelect($event)"
          style="width:100%"
          fit
        >
          <el-table-column
            v-if="tableObject.selection && tableObject.selection.open"
            type="selection"
            :width="tableObject.selection.width"
          ></el-table-column>
          <!-- <el-table-column type="index" width="50"></el-table-column> -->
          <el-table-column
            v-for="(column, index) in tableObject.tableDataInfo"
            :key="index"
            :label="column.name"
            :width="column.width"
            tooltip-effect="light"
          >
            <template v-slot="scope">
              <!-- 直接输出传递过来的值 -->
              <el-image
                fit="scale-down"
                :src="scope.row[column.prop]"
                v-if="column.type === 'img'"
                style="width:50px;height:50px"
                :preview-src-list="scope.row['srcList'] || []"
              >
                <div slot="error" class="image-slot">
                  <img
                    style="width:50px;height:50px"
                    src="../../../assets/fail.jpeg"
                  />
                </div>
              </el-image>
              <template v-else-if="column.type === 'tag'">
                <el-popover trigger="hover" placement="top">
                  <el-tag
                    style="margin:5px"
                    v-for="(tag, index) in scope.row[column.prop]"
                    :key="index"
                    >{{ tag }}</el-tag
                  >
                  <div slot="reference" class="name-wrapper">
                    <el-tag
                      style="margin:5px"
                      v-for="(tag, index) in scope.row[column.prop].slice(0, 2)"
                      :key="index"
                      >{{ tag }}</el-tag
                    >
                  </div>
                </el-popover>
              </template>
              <template v-else-if="column.type === 'dict'">
                <span v-html="column.dict[scope.row[column.prop]]"></span>
              </template>
              <span v-else v-html="scope.row[column.prop]"></span>
            </template>
          </el-table-column>
          <el-table-column
            v-if="tableObject.tableControl"
            :label="tableObject.tableControl.title"
            :width="tableObject.tableControl.width"
          >
            <template
              v-if="tableObject.tableControl.type === 'buttons'"
              v-slot="scope"
            >
              <el-button
                v-show="
                  column.hasAuth(scope.row, scope.$index) &&
                    column.isShow(scope.row, scope.$index)
                "
                v-for="(column, index) in tableObject.tableControl.commands"
                :key="index"
                @click="column.handle(scope.row, scope.$index)"
                type="text"
                size="small"
                >{{ column.name }}</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <el-card
          v-if="
            tableObject.isShowpagination ||
              (tableObject.isShowpagination !== undefined && false)
          "
          shadow="never"
          class="table-pagination"
        >
          <!--@current-change="handleCurrentChange"
          :current-page.sync="currentPage1"-->
          <el-pagination
            style="width:500px"
            :page-size="tableObject.paginationOptions.size || 10"
            layout="total, prev, pager, next"
            :total="tableObject.paginationOptions.total || 0"
            @current-change="tableObject.paginationOptions.currentChange"
            :current-page.sync="tableObject.paginationOptions.page"
          ></el-pagination>
        </el-card>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
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
  public currentPage = 1;
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

<style lang="less" scoped>
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
