<template>
  <div>
    <el-table empty-text="暂无数据"
              :data="tableData"
              style="width: 100%"
              border
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
                       height=""
                       width="120">
        <template slot-scope="scope">
          <span style="color:#409EFF;cursor:pointer;"
                @click="() => editOrgInfo(scope.$index, scope.row)">修改</span>

          <span style="color:red;padding-left:10px;cursor:pointer;"
                @click="delInOrgTable(scope.row)">删除</span>
        </template>
      </el-table-column>
    </el-table>

    <div class="pageBox">
      <el-pagination class="block"
                     layout="sizes,prev, pager, next"
                     :total="userPage.total"
                     :page-size="userPage.pageSize"
                     @size-change="handleUserSizeChange"
                     :page-sizes="this.$store.state.pageData.pages"
                     :current-page="userPage.pageNo" />
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
          label: '名称'
        }, {
          prop: 'orgNameShort',
          label: '简称'
        }, {
          prop: 'orgType',
          label: '类型'
        }, {
          prop: 'userName',
          label: '接口人'
        }, {
          prop: 'cellPhone',
          label: '电话号码',
          width: '120'
        }, {
          prop: 'email',
          label: '邮箱'
        }, {
          prop: 'path',
          label: '机构路径'
        }
      ],
      // 行数据
      tableData: [
        {
          orgName: '名字'
        }
      ],
      userPage: {
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
    handleUserSizeChange (val) {
      this.$set(this.userPage, 'pageSize', val)
    }
  }
}
</script>

<style>
</style>
