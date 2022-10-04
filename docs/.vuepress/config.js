module.exports = {
  title: "Exsim Docs",

  themeConfig: {
    sidebar: [
      '/',
      {
        title: 'API Reference',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          {
            title: 'Authentication',
            collapsable: true,
            sidebarDepth: 1,
            children: [
              '/api/auth/',
              '/api/auth/login',
              '/api/auth/sendVerify',
              '/api/auth/setPassword'
            ]
          }
        ]
      },
      {
        title: 'Front End',
        children: [
          '/frontend/'
        ]
      },
      {
        title: 'Back End',
        children: [
          '/backend/',
          '/backend/database',
          '/backend/controller'
        ]
      }
    ]
  }
}