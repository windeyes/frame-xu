export default {
  firstTitle: '宠物网站', // h1标题（不显示被隐藏）
  leftMenuSrc: require('@/assets/img/menu/leftLog.png'), // 主要图片
  titleBig: '专业的宠物网站', // 菜单右侧标题大
  titleSmall: '一流的技术服务', // 菜单右侧标题小
  menuList: [
    {
      name: '首页',
      type: 'oneline',
      index: 'home',
      icon: 'el-icon-setting'
    },
    {
      name: '犬类',
      index: 'dog',
      icon: 'el-icon-location',
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
  ]
}
