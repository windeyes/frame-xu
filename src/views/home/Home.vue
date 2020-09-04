<template>
  <el-container>
    <!-- 侧边 -->
    <el-aside ref="elAside"
              width='asideWidth'>
      <h1>
        宠物
        <transition name="netTitle">
          <img v-if="bigMenu"
               src="../../assets/menu/leftLog.png"
               alt="">
          <div v-else></div>
        </transition>
      </h1>
      <!-- 菜单开始 -->
      <el-menu :default-active="menuActive"
               class="el-menu-vertical-demo"
               :collapse="!bigMenu"
               router
               unique-opened>
        <el-submenu v-for="menu in menuList"
                    :key="menu.index"
                    :index="menu.index">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{menu.name}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="menuItem in menu.item"
                          :key="menuItem.index"
                          :index="'/home/'+menuItem.index">{{menuItem.value}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <!-- 菜单结束 -->
    </el-aside>
    <el-container>
      <el-header>
        <el-row type="flex"
                justify="space-between">
          <!-- 左侧开始 -->
          <el-row type="flex"
                  align="middle"
                  class="headerLeft">
            <transition>
              <i v-if="bigMenu"
                 class="el-icon-d-arrow-left"
                 @click="arrowClick"></i>
              <i v-else
                 class="el-icon-d-arrow-right"
                 @click="arrowClick"></i>
            </transition>
            <div class="headerLeftText">
              <h2>专业的宠物网站</h2>
              <span class="littleTitle">一流的技术服务</span>
            </div>
          </el-row>
          <!-- 左侧结束 -->
          <!-- 右侧用户 -->
          <el-row type="flex"
                  align="middle">
            <div class="headPic">
              <img src="../../assets/menu/leftLog.png"
                   alt="">
            </div>
            <div class="username">用户的名字</div>
          </el-row>
          <!-- 右侧结束 -->
        </el-row>
      </el-header>
      <!-- tab栏ks -->
      <el-tabs v-model="tabsActive"
               class="firstTab"
               @tab-click="tabClick"
               :closable="!(tabsList.length === 1)"
               @tab-remove="removeTab"
               type="card">
        <el-tab-pane v-for="item in tabsList"
                     :key="item.label"
                     :label="item.label"
                     :name="item.name" />
      </el-tabs>
      <!-- tab栏js -->
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  mounted () {
    this.$refs.elAside.$el.style.width = ''
    // 添加默认tab
    this.tabsList.push({
      label: this.$route.meta.title,
      name: this.$route.path
    })

    this.tabsActive = this.$route.path
    this.menuActive = this.$route.path
  },
  data () {
    return {
      menuList: [
        {
          name: '犬类',
          index: 'dog',
          item: [
            {
              index: 'dog1',
              value: '西洋犬'
            },
            {
              index: 'dog2',
              value: '哮天犬'
            }, {
              index: 'dog3',
              value: '狂犬'
            }
          ]
        }
      ],
      menuActive: '',
      showLeft: true,
      bigMenu: true, // 大菜单
      tabsActive: '',
      tabsList: []// tabs
    }
  },
  methods: {
    arrowClick () {
      const aside = this.$refs.elAside.$el
      this.bigMenu = !this.bigMenu
      aside.offsetWidth === 50 ? aside.style.width = '200px' : aside.style.width = '50px'
    },
    // tab点击
    tabClick (data) {
      this.$router.push(data.name)
    },
    removeTab (targetName) {
      if (targetName === this.tabsList) {
        this.tabsList.forEach((item, index) => {
          if (item.name === targetName) {
            this.tabsActive = this.tabsList[index + 1] ? this.tabsList[index + 1].name : this.tabsList[index - 1].name
            this.tabsList.splice(index, 1)
          }
        })
      }
      this.tabsList = this.tabsList.filter(item => item.name !== targetName)
    }
  },
  watch: {
    $route (to, from) {
      // 让菜单栏可以对应
      this.menuActive = to.path
      // 让tab可以对应
      this.tabsActive = to.path
      // 判断是否需要添加，不需要则返回
      const exit = this.tabsList.some(item =>
        to.meta.title === item.label
      )
      if (exit) {
        return
      }
      this.tabsList.push({
        label: to.meta.title,
        name: to.path
      })
    }
  }
}
</script>

<style lang=less scoped src="./home.less"></style>
