<template>
  <div class="container book-wap">
    <div class="book">
        <el-image class="book-image" src="/static/images/no_pic.png"></el-image>
        <div class="book-info">
          <h3 class="book-title">{{book.title}}</h3>
          <p class="book-item">ISBN: {{book.isbn}}</p>
          <p class="book-item">著者: {{book.author}}</p>
          <p class="book-item">出版社: {{book.publishingName}}</p>
          <p class="book-item">出版日期: {{book.publishingTime}}</p>
          <p class="book-item content">摘要/简介: {{book.content}}</p>
          <p class="book-item">主题词: {{book.subject}}</p>
          <p class="book-item">版次: {{book.edition}}</p>
        </div>
      </div>
    <div class="book-num">
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane :label="`可借数量(${tableData.length})`" name="num">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="ASS_NO" label="索书号">
              <template slot-scope="{row}">
                {{book.librarsortCode}}/{{book.tanejiNo}}:{{row.ASS_NO}}
              </template>
            </el-table-column>
            <el-table-column prop="SITE_NAME" label="所在图书馆"></el-table-column>
            <el-table-column prop="SITE_NAME" label="馆藏地点"></el-table-column>
            <el-table-column prop="NUM" label="可借数量"></el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: {
    book: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data: function() {
    return {
      name: '',
      activeName: 'num',
      tableData: []
    };
  },
  watch: {
    book: {
      handler(val) {
        console.log(val);
        if (val.id) {
          this.getBook(val.id);
        }
      },
      immediate: true
    }
  },
  methods: {
    handleClick(val) {
      this.$router.push({
        name: 'Search',
        params: {
          keywords: val
        }
      });
    },
    getBook(directoryId) {
      httpServer.get(`/opac/directories/${directoryId}/copies`).then(res => {
        const { data } = res;
        this.tableData = data;
      });
    }
  }
};
</script>

<style scoped>
.book-image {
  width: 160px;
  height: 222px;
}
.book-title {
  font-size: 24px;
}
.book-num {
  padding: 20px 0;
}
.book .content {
  max-width: 450px;
  text-overflow: inherit;
  white-space: inherit;
}
</style>