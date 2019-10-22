<template>
  <div>
    <div class="home-wap">
      <h2>OPAC检索</h2>
      <el-input
        placeholder="题名  ISBN  著者  丛书名   出版社"
        v-model="name"
        autofocus
        class="input-with-select"
        @keyup.enter.native="handleClick"
      >
        <el-button type="primary" slot="append" @click="handleClick">搜索</el-button>
      </el-input>
      <p class="tip">多个关键词以空格相隔，可进行组合查询。例如：红楼梦 曹雪芹 人民文学出版社。</p>
    </div>
  </div>
</template>

<script>
module.exports = {
  provide() {
    return {
      home: this
    }
  },
  data: function() {
    return {
      name: '',
      isSearch: false
    };
  },
  methods: {
    handleClick() {
      this.$router.push({ name: 'Query' });
    }
  }
};
</script>

<style scoped>
.home-wap {
  width: 600px;
  margin: 0 auto;
  text-align: center;
}
.home-wap h2 {
  padding-top: 54px;
  font-size: 30px;
  color: #666;
  padding-bottom: 48px;
  font-weight: 500;
  line-height: 1.1;
}
.home-wap .tip {
  margin: 5px 0 0;
  color: #999;
  text-align: left;
}
</style>