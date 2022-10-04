---
home: true
title: EXSIM
heroText: EXSIM
tagline: "Excel simulator."
actions:
  - text: Getting Started
    link: /guide/getting-started.html
    type: primary
  - text: Latest Release
    link: /
    type: secondary
heroImage: /icon.svg
features:
  - title: This is a feature.
    icon: emoji
    details: This is not a bug but a feature.

footer: Fucked up Licensed | Copyright © 2022
---


## 🚀 Install & Build

```bash
# install pnpm
corepack enable
corepack prepare pnpm@7.11.0 --activate

# run
pnpm install
pnpm docs:dev
pnpm docs:build
```
