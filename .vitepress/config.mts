import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GPTs ハッカソン",
  description: "Knowledge Base",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'ハッカソン',
        link: '/hackathon/',
        collapsed: false,
        items: [
          { text: '事前準備', link: '/hackathon/prepare' },
        ]
      },
      {
        text: 'セミナー',
        link: '/seminar/',
        collapsed: false,
        items: [
          { text: '生成AIのはじめかた', link: '/seminar/how-to-start-gen-ai' },
          { text: 'ChatGPTの使い方', link: '/seminar/chatgpt' },
          { text: 'GPTsの作り方', link: '/seminar/gpts' },
        ]
      }
    ],
    footer: {
      copyright: "&copy; 2024 paycloud inc."
    }
  }
})
