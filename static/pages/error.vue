<template>
  <div class="errPage-container">
    <el-row>
      <el-col :span="12">
        <img src="./images/401.gif" width="313" height="428" alt="Girl has dropped her ice cream." />
      </el-col>
      <el-col :span="12">
        <h2 style="padding-bottom: 10px;">报错啦，请点击按钮刷新重试</h2>
        <el-button type="primary" @click="handleReload">返回刷新</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {};
  },
  methods: {
    handleReload() {
      this.$router.push({
        path: '/'
      });
      window.location.reload();
    }
  }
};
</script>

<style scoped>
.head {
  background: #0eb48e;
  height: 60px;
}
</style>