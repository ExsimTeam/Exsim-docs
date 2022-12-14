import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  locales: {
    "/": {
      lang: "en-US",
      title: "EXSIM",
      description: "Yet another template.",
    },
  },
  title: "EXSIM",
  description: "Yet another template.",
  theme: hopeTheme({
    logo: "/icon.svg",
    plugins: {
      mdEnhance: {
        imageMark: true,
        imageSize: true,
        katex: true,
        align: true,
        container: true,
        tabs: true
      },
    },
    hostname: "https://busstop12.github.io",
    headerDepth: 1,

    navbar: [
      {
        text: "Homepage",
        link: "/",
      },
      {
        text: "Documentation",
        children: [
          {
            text: "API",
            link: "/api/"
          },
          {
            text: "Frontend",
            link: "/frontend/",
          },
          {
            text: "Backend",
            link: "/backend/",
          },
        ],
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

    repo: "ExsimTeam",

    sidebar: [
      {
        text: "API",
        prefix: "/api/",
        collapsable: true,
        link: "/api/",
        children: [
          "auth",
          "user",
          "file",
          "websocket"
        ]
      },
      {
        text: "Backend",
        link: "/backend/",
        prefix: "/backend/",
        collapsable: true,
        children: [
          "database",
          "controller"
        ],
      },
      {
        text: "Frontend",
        link: "/frontend/",
      },
      {
        text: "Others",
        prefix: "/other/",
        collapsable: true,
        children: [
          "recaptcha"
        ]
      }
    ],

    docsRepo: "ExsimTeam/Exsim-docs",
    docsDir: "docs/",
    iconAssets: "iconfont",
  }),
});
