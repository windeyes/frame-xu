<template>
  <div class="container">
    <el-row type="flex"
            justify="space-between">
      <!-- 左侧菜单栏开始 -->
      <div class="left">
        <el-tree :data="treeData"
                 :props="defaultProps"
                 @node-click="handleNodeClick">
          <div class="custom-tree-node"
               slot-scope="{ node }">
            <el-row type="flex"
                    justify="space-between">
              <span>{{ node.label }}</span>
              <span>+</span>
            </el-row>
          </div>
        </el-tree>
      </div>
      <!-- 左侧菜单栏结束 -->
      <!-- 右侧菜单栏开始 -->
      <div class="right">
        <!-- 标签栏 -->
        <el-tabs v-model="tabActiveName"
                 @tab-click="handleClick">
          <el-tab-pane label="机构信息"
                       name="org">
            <orgTable />
          </el-tab-pane>
          <el-tab-pane label="用户管理"
                       name="user">
            <userTable />
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 右侧菜单栏结束 -->
    </el-row>
  </div>
</template>

<script>
import orgTable from './orgTable'
import userTable from './userTable'
export default {
  data () {
    return {
      treeData: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      tabActiveName: 'org'// tab的激活项
    }
  },
  mounted () {

  },
  methods: {
    // 树形图的点击事件
    handleNodeClick (data) {

    },
    handleClick (name) {

    }
  },
  components: {
    orgTable, userTable
  }

}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  background-color: #e9eef3;
  height: calc(100vh - 110px);
  box-sizing: border-box;
  padding: 10px;
  @boxHeight: calc(100vh - 130px);
  .left {
    width: 19%;
    height: @boxHeight;
    background-color: #fff;
    .custom-tree-node {
      width: 100%;
      box-sizing: border-box;
      padding-right: 10px;
    }
  }
  .right {
    width: 80%;
    height: @boxHeight;
    background-color: #fff;
    box-sizing: border-box;
    padding: 10px;
  }
}
</style>
