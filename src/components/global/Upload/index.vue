<template>
  <div class="Upload">
    <el-upload
      class="upload-demo"
      :action="action"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :multiple="mulitiple"
      :limit="limit"
      :list-type="listType"
      :on-exceed="handleExceed"
      :file-list="fileList"
      :auto-upload="false"
    >
      <slot>
        <i v-if="listType === 'picture-card'" class="el-icon-plus"></i>
        <el-button v-else size="small" type="primary">点击上传</el-button>
      </slot>
      <div v-if="listType === 'picture-card'" slot="file" slot-scope="{file}">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
        <span class="el-upload-list__item-actions">
          <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
            <i class="el-icon-zoom-in"></i>
          </span>
          <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
            <i class="el-icon-download"></i>
          </span>
          <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
    </el-upload>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'Upload',
  props: {
    type: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    },
    mulitiple: {
      type: Boolean,
      default: true
    },
    limit: {
      type: Number,
      default: 1
    }
  },
  computed: {
    listType() {
      return this.$props.type === 'file' ? 'text' : 'picture-card';
    }
  }
})
export default class extends Vue {
  public fileList = [];
  public disabled = false;
  public handleRemove(file: any, fileList: any) {
    console.log(file, fileList);
  }
  public handlePreview(file: any) {
    console.log(file);
  }
  public handleExceed(files: any, fileList: any) {
    this.$message.warning(
      `当前限制选择 1 个文件，本次选择了 ${
        files.length
      } 个文件，共选择了 ${files.length + fileList.length} 个文件`
    );
  }
  public beforeRemove(file: any, fileList: any) {
    return this.$confirm(`确定移除 ${file.name}？`);
  }
}
</script>
<style lang="less">
</style>
