<template>
  <el-container>
    <!-- {{dat.firstTitle}} -->
    <!-- 侧边 -->
    <el-aside ref="elAside"
              width='asideWidth'>
      <h1>
        {{firstTitle}}
        <transition name="netTitle">
          <img v-if="bigMenu"
               :src="leftMenuSrc"
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
        <div v-for="menu in menuList"
             :key="menu.index">
          <el-menu-item class="el-submenu__title"
                        v-if="menu.type==='oneline'"
                        :index="'/'+menu.index">
            <i :class="menu.icon"></i>
            <span slot="title">{{menu.name}}</span>
          </el-menu-item>
          <el-submenu v-else
                      :index="menu.index">
            <template slot="title">
              <i :class="menu.icon"></i>
              <span>{{menu.name}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="menuItem in menu.item"
                            :key="menuItem.index"
                            :index="'/'+menuItem.index">{{menuItem.value}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </div>
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
            <!-- 展开与缩小面板时图标 -->
            <transition>
              <i v-if="bigMenu"
                 class="el-icon-d-arrow-left"
                 @click="arrowClick"></i>
              <i v-else
                 class="el-icon-d-arrow-right"
                 @click="arrowClick"></i>
            </transition>
            <div class="headerLeftText">
              <h2>{{titleBig}}</h2>
              <span class="littleTitle">{{titleSmall}}</span>
            </div>
          </el-row>
          <!-- 左侧结束 -->
          <!-- 右侧用户 -->
          <el-row type="flex"
                  align="middle">
            <div class="headPic">
              <img src="../../assets/img/menu/leftLog.png"
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
import dat from '@/assets/js/frameBasic'
export default {
  mounted () {
    this.$refs.elAside.$el.style.width = ''
    // 添加默认tab
    this.tabsList.push({
      label: this.$route.meta.title,
      name: this.$route.meta.map || this.$route.path
    })

    this.tabsActive = this.$route.meta.map || this.$route.path
    this.menuActive = this.$route.meta.map || this.$route.path
    console.log('tabList', this.tabsList)
  },
  data () {
    return {
      menuList: dat.menuList,
      firstTitle: dat.firstTitle,
      leftMenuSrc: dat.leftMenuSrc,
      titleBig: dat.titleBig,
      titleSmall: dat.titleSmall,
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
      this.menuActive = to.meta.map || to.path
      // 让tab可以对应
      this.tabsActive = to.meta.map || to.path
      console.log(this.tabsActive)

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

<style lang=less scoped src="./frameBasic.less"></style>
