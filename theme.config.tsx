import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <img src="/icon.png" alt="icon" width={30} height={30} />,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="google-site-verification" content="J6YnI9xY16DJUeUeOmfUdAIIASTi9GYngREv0oROUDI" />
      <meta property="og:title" content="The Complete Manual of Suicide" />
      <link rel="icon" type="image/png" href="/icon.png"></link>
    </>
  ),
  project: {
    link: 'https://github.com/Yapper689/CompleteSuicideManual',
  },
  toc: {
    float: true,
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – ▼▼⧨▽▽'
      }
    }
  },
  footer: {
    text: (
      <span>
        By Tsurumi Wataru © 1993.<br />
        Site by Yapper689 • CCO 1.0 2025.<br />
        Powered by <a href="https://nextra.site" target="_blank">Nextra</a> • MIT 2025.<br />
        Reading on {new Date().toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}.
      </span>
    ),
  },
  editLink: {
    text: ''
  },
  feedback: {
    content: '',
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'vn', text: 'Tiếng Việt' },
    { locale: 'zh', text: '中文' }
  ]
}

export default config
