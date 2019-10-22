<template>
  <el-input placeholder="题名  ISBN  著者  丛书名   出版社" v-model="name" class="search-select" @keyup.enter.native="handleClick">
    <el-button type="primary" slot="append" @click="handleClick">搜索</el-button>
  </el-input>
</template>

<script>
module.exports = {
  props: ['value'],
  computed: {
    name: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit('click', this.name);
    }
  }
};
</script>

<style>
.search-select {
  width: 350px;
  padding: 10px 0;
}
</style>