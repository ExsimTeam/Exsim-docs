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
        text: "Document",
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

    repo: "NagaseIori/EXSIM",

    sidebar: [
      {
        text: "API",
        prefix: "/api/",
        link: "/api/",
        children: [
          "auth"
        ]
      },
      {
        text: "Backend",
        link: "/backend/",
        prefix: "/backend/",
        children: [
          "database",
          "controller"
        ],
      },
      {
        text: "Frontend",
        link: "/frontend/",
      },
    ],

    docsRepo: "busstop12/Exsim-docs",
    docsDir: "docs/",
    iconAssets: "iconfont",
  }),
});
