const path = require('path')

module.exports = {
  title: '前端知识记录',
  description: '前端知识记录',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    nav: [
      {
        text: '开发语言',
        items: [
          { text: 'JavaScript', link: '/devLanguage/JavaScript/' },
          { text: 'Html', link: '/devLanguage/Html/' },
          { text: 'Css', link: '/devLanguage/CSS/' },
          { text: 'Nodejs', link: '/devLanguage/Nodejs/' },
        ]
      }
    ],
    sidebar: {
      '/devLanguage/JavaScript/': [
        ['', 'JavaScript介绍'],
        ['bom/', 'bom'],
        ['dom/', 'dom'],
        ['ECMAScript/', 'ECMAScript']
      ]
      // '/framework/detailDesign/': [
      //   ['components/', '公用组件']
      // ],
      // '/framework/': [
      //   ['', '核心框架'],
      //   ['versionLog.md', '版本日志'],
      //   ['generalDescription/', '总体概述'],
      //   ['environmentAndSetting.md', '环境/配置'],
      //   ['developingStanderd.md', '入门/规范约定'],
      //   ['detailDesign/', '详细设计'],
      //   ['demandAndBugLog.md', '需求/bug日志'],
      //   ['document.md', '文档编写']
      // ],
      // '/project/detailDesign/onemapApplication/': [
      //   ['components/', '公用组件'],
      //   ['oneMap/', '一张图'],
      //   ['HDLTool/', '核地类工具'],
      //   ['SpatialAnalysis/', '空间分析']
      // ],
      // '/project/': [
      //   ['generalDescription.md', '总体概述'],
      //   ['developingStanderd.md', '入门/规范约定'],
      //   ['detailDesign/onemapApplication/', '一张图应用'],
      // ]
    },
    sidebarDepth: 2
  },
  dest: './build',
  base: '/docs/'
}
