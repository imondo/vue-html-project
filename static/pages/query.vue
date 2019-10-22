<template>
  <div class="search-wap" v-show="visible">
    <ly-search v-model="name" @click="handleClick"></ly-search>
    <div v-show="!isDetail">
      <p class="search-tips">
        检索词：
        <span class="tips">{{keywords}}</span>，检索到：
        <span class="tips">{{total}}</span> 条结果
      </p>
      <div class="search-content">
        <template v-for="(book, index) in list">
          <div class="book el-col-12" :key="index">
            <el-image
              class="book-image pointer"
              src="/static/images/no_pic.png"
              @click="handleDetail(book)"
            ></el-image>
            <div class="book-info">
              <h3 class="book-title pointer" @click="handleDetail(book)">{{book.title}}</h3>
              <p class="book-item">著者: {{book.author}}</p>
              <p class="book-item">出版社: {{book.publishingName}}</p>
              <p class="book-item">出版日期: {{book.publishingTime}}</p>
            </div>
          </div>
        </template>
      </div>
      <el-pagination
        v-show="total > 0"
        class="pagination"
        background
        layout="prev, pager, next"
        :page-size="14"
        :total="total"
        @current-change="handleChange"
      ></el-pagination>
    </div>
    <ly-book v-show="isDetail" :book="book" />
  </div>
</template>

<script>
module.exports = {
  components: {
    'ly-search': httpVueLoader('../static/components/Search/index.vue'),
    'ly-book': httpVueLoader('./book.vue')
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  inject: ['home'],
  data: function() {
    return {
      isDetail: false,
      total: 0,
      name: '',
      keywords: '',
      list: [],
      book: {}
    };
  },
  watch: {
    visible: {
      handler(val) {
        if (val) {
          this.name = this.home.name;
          this.keywords = this.home.name;
          this.getList(this.home.name, {});
        }
      },
      immediate: true
    }
  },
  methods: {
    handleClick(val) {
      this.keywords = val;
      this.isDetail = false;
      this.book = {};
      this.getList(val, {});
    },
    getList(keywords, { pageNo = 1, pageSize = 14 }) {
      httpServer
        .get(`/opac/directories/${keywords}`, { pageNo, pageSize })
        .then(res => {
          const { data } = res;
          this.list = data.list;
          this.total = data.count;
          this.backTop();
        });
    },
    handleChange(val) {
      this.getList(this.name, {
        pageNo: val
      });
    },
    handleDetail(book) {
      this.isDetail = true;
      this.book = book;
    },
    backTop() {
      window.scrollBy(0, -100);

      scrolldelay = setTimeout(this.backTop, 10);

      let sTop = document.documentElement.scrollTop + document.body.scrollTop;

      if (sTop === 0) {
        clearTimeout(scrolldelay);
      }
    }
  }
};
</script>

<style scoped>
.search-wap {
  padding: 20px;
}
.search-tips {
  padding-bottom: 10px;
}
.search-tips .tips {
  color: #d9001b;
}
.search-content {
  overflow: hidden;
}
.pagination {
  padding: 20px 0;
}
.book-image {
  width: 120px;
  height: 168px;
}
.book-title {
  width: 220px;
}
.book-item {
  width: 142px;
}
.book {
  margin-bottom: 15px;
}
</style>