import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'KLineChart Pro',
  description: '基于KLineChart构建的开箱即用的金融图表',
  outDir: '../website',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],
  markdown: {
    theme: {
      dark: 'material-theme-palenight',
      light: 'github-light'
    }  
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      themeConfig: {
        nav: [{ text: '预览', link: 'https://preview.klinecharts.com' }],
        sidebar: [
          {
            text: '介绍',
            link: '/introduction'
          },
          {
            text: '快速开始',
            link: '/getting-started'
          },
          {
            text: '数据说明',
            link: '/data-description'
          },
          {
            text: '数据接入',
            link: '/data-access'
          },
          {
            text: 'API',
            link: '/api'
          },
          {
            text: '定制主题',
            link: '/theme'
          },
          {
            text: '国际化',
            link: '/i18n'
          }
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
        nav: [{ text: 'Preview', link: 'https://preview.klinecharts.com/#en-US' }],
        sidebar: [
          {
            text: 'Introduction',
            link: '/en-US/introduction'
          },
          {
            text: 'Getting Started',
            link: '/en-US/getting-started'
          },
          {
            text: 'Data Description',
            link: '/en-US/data-description'
          },
          {
            text: 'Data access',
            link: '/en-US/data-access'
          },
          {
            text: 'API',
            link: '/en-US/api'
          },
          {
            text: 'Theme',
            link: '/en-US/theme'
          },
          {
            text: 'Internationalization',
            link: '/en-US/i18n'
          }
        ]
      }
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/klinecharts/pro' }
    ],

    footer: {
      message: 'Released under the Apache License V2.',
      copyright: 'Copyright © 2018-present liihuu'
    }
  }
})
