<template>
  <div class="Upload">
    <SeaUpload :limit="10" action="#" type="img"></SeaUpload>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'UploadVue'
})
export default class extends Vue {}
</script>
<style lang="less">
</style>
