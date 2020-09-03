<template>
  <div>
    <el-table empty-text="暂无数据"
              :data="tableData"
              style="width: 100%"
              border
              header-cell-class-name="orgHeaders"
              stripe
              class="formShow">
      <el-table-column v-for="item in tableHeaderData"
                       :key="item.prop"
                       :prop="item.prop"
                       header-align="center"
                       show-overflow-tooltip
                       :width="item.width||''"
                       :align="item.align||'center'"
                       :label="item.label"></el-table-column>
      <!-- 操作列 -->
      <el-table-column fixed="right"
                       header-align="center"
                       align="center"
                       label="操作"
                       height=''
                       width="120">
        <template slot-scope="scope">
          <span style="color:#409EFF;cursor:pointer;"
                @click="() => editOrgInfo(scope.$index, scope.row)">修改</span>

          <span style="color:red;padding-left:10px;cursor:pointer;"
                @click="delInOrgTable(scope.row)">删除</span>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="pageBox">
      <el-pagination class="block"
                     layout="sizes,prev, pager, next"
                     :total="orgPage.total"
                     :page-size="orgPage.pageSize"
                     @size-change="handleOrgSizeChange"
                     :page-sizes="this.$store.state.pageData.pages"
                     :current-page="orgPage.pageNo" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 表格头
      tableHeaderData: [
        {
          prop: 'orgName',
          label: '机构名'
        }, {
          prop: 'account',
          label: '工号'
        }, {
          prop: 'userName',
          label: '姓名'
        }, {
          prop: 'cellPhone',
          label: '电话号码',
          width: '120'
        }, {
          prop: 'email',
          label: '邮箱'
        }
      ],
      // 行数据
      tableData: [
        {
          orgName: '名字'
        },
        {
          orgName: '名字'
        },
        {
          orgName: '名字'
        }, {
          orgName: '名字'
        }
      ],
      // 分页数据
      orgPage: {
        total: 100,
        pageSize: 1,
        pageNo: 1
      }
    }
  },
  methods: {
    // 点击修改
    editOrgInfo () {

    },
    // 点击删除
    delInOrgTable () {

    },
    // 更换页面条数
    handleOrgSizeChange (val) {
      this.$set(this.orgPage, 'pageSize', val)
    }
  },
  mounted () {
    console.log(this.$store)
  }
}
</script>

<style scoped lang="less">
// /deep/.orgHeaders {
//   background-color: #62adfb;
//   color: white;
// }
</style>
