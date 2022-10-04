# Getting Start

## Prerequisites
Install Node.js 10+ on your computer with npm.
* [Node.js 10+](https://nodejs.org/)

## Quick Start
Run the following command to install dependecies:
```bash
npm install
```

Serve the documentation site in the loacal server by the following command, which will open a server at [http://localhost:8080](http://localhost:8080)
```bash
npm run docs:dev
```

Build the documentation site by the following command, which will generates a dist folder at `/docs/.vuepress/`
```bash
npm run docs:build
```

## Directory Structure
The directory structure example is as follows:
```
.
├── docs
│   ├── .vuepress
│   │   └── config.js
│   │ 
│   ├── README.md
│   ├── api
│   │   ├── README.md
│   │   └── auth
│   │       ├── README.md
│   │       └── login.md
│   └── README.md
│ 
└── package.json
```

* `docs/.vuepress`: Used to store global configuration, components, static resources, etc.
* `docs/.vuepress/config.js`: Entry file of configuration, can also be `yml` or `toml`.

## Page Routing
For the above directory structure, the default page routing paths are as follows:

| Relative Path         | Page Routing      |
|-----------------------|-------------------|
| `/README.md`          | `/`               |
| `/api/README.md`      | `/api/`           |
| `/api/auth/README.md` | `/api/auth/`      |
| `/api/auth/login.md`  | `/api/auth/login` |

## Add a Document
### Add a `.md` file in `/docs` folder
