import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'KLineChartPro',
  description: '开箱即用的金融图表',
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      themeConfig: {
        // nav: [
        //   { text: '指南', link: '/guide/what-is-klinechart', activeMatch: 'guide' },
        //   // { text: 'Pro', link: 'https://pro.klinecharts.com' },
        // ],
        sidebar: [
          {
            text: '介绍',
            link: '/introduction'
          },
          {
            text: '快速开始',
            link: '/getting-started'
          },
        ],
        docFooter: {
          prev: '上一篇',
          next: '下一篇'
        },
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        outlineTitle: '本页目录'
      }
    },
    'en-US': {
      label: 'English',
      lang: 'en-US',
      link: '/en-US/',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en-US/guide/what-is-klinechart', activeMatch: 'guide' },
          // { text: 'Pro', link: 'https://pro.klinecharts.com/en-US' },
        ],
        sidebar: {
          '/en-US': [
            {
              text: 'Introduction',
              collapsed: false,
              items: [
                { text: 'What is KLineChart?', link: '/en-US/guide/what-is-klinechart' },
                { text: 'Getting Started', link: '/en-US/guide/getting-started' }
              ]
            },
            {
              text: 'Basic',
              collapsed: false,
              items: [
                { text: 'Style Configuration', link: '/en-US/guide/styles' },
                { text: 'Datasource', link: '/en-US/guide/datasource' },
                { text: 'Environment', link: '/en-US/guide/environment' },
                { text: 'Hot Key', link: '/en-US/guide/hot-key' }
              ]
            },
            {
              text: 'Advanced',
              collapsed: false,
              items: [
                { text: 'Figure', link: '/en-US/guide/figure' },
                { text: 'Indicator', link: '/en-US/guide/indicator' },
                { text: 'Overlay', link: '/en-US/guide/overlay' }
              ]
            },
            {
              text: 'API',
              collapsed: false,
              items: [
                { text: 'Chart API', link: '/en-US/guide/chart-api' },
                { text: 'Instance API', link: '/en-US/guide/instance-api' }
              ]
            },
            {
              text: 'Others',
              collapsed: false,
              items: [
                { text: 'FAQ', link: '/en-US/guide/faq' },
                { text: 'V8 To V9', link: '/en-US/guide/v8-to-v9' },
                { text: 'Changelog', link: '/en-US/guide/changelog' },
                { text: 'Feedback', link: '/en-US/guide/feedback' }
              ]
            }
          ]
        }
      }
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/klinecharts/pro' }
    ],

    footer: {
      message: 'Released under the Apache License V2.',
      copyright: 'Copyright © 2018-present liihuu'
    }
  }
})
