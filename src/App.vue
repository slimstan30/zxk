<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
*{
  margin:0;
  padding: 0;
}
div /deep/ .el-dialog__title{
      color:#fff;
  }
div /deep/ .el-dialog__header{
      background: #072443;
  }
div /deep/ .el-dialog__body,div /deep/ .el-dialog__footer{
      background: #102d50;
      color:#fff;
  }
  
</style>
