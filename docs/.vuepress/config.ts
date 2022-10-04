import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

export default defineUserConfig({
  locales: {
    "/": {
      lang: "en-US",
      title: "Vuepress-hope-template",
      description: "Yet another template.",
    },
  },
  title: "Vuepress-hope-template",
  description: "Yet another template.",
  theme: hopeTheme({
    logo: '/icon.svg',
    plugins: {
      mdEnhance: {
        imageMark: true,
        imageSize: true,
        katex: true,
        align: true,
        container: true,
      },
    },
    hostname: "https://nageseiori.github.io",

    navbar: [
      {
        text: "Homepage",
        link: "/",
      },
      {
        text: "Document",
        children: [
          {
            text: "API",
            children: [
              {
                text: "Auth",
                link: "/api/auth/README.md"
              }
            ]
          },
          {
            text: "Frontend",
            link: "/frontend/"
          },
          {
            text: "Backend",
            link: "/backend/"
          },
        ]
      },
      {
        text: "FAQ",
        link: "/FAQ",
      },
      {
        text: "About",
        link: "/about",
      },
    ],

    repo: "NagaseIori/Vuepress-hope-template",

    sidebar: [
      {
        text: "API",
        prefix: "/api/",
        collapsable: true,
        children: [
          {
            text:"Authentication",
            link:"auth"
          }
        ]
      },
      {
        text: "Backend",
        link: "/backend/",
      },
      {
        text: "Frontend",
        link: "/frontend/",
      },
    ],

    docsRepo: "NagaseIori/Vuepress-hope-template-docs",
    docsDir: "docs/",
    iconAssets: "iconfont",
  }),
});
