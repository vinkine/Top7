module.exports = {
  title: 'Hello Welcome to Haitun',
  description: 'follow me to a new world',
  themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'External', link: 'https://baidu.com' },
      ]
    }
}


module.exports = {
   title: '海豚导航',
   description: 'follow me to a new world',
    dest: './dist',
    port: '8080',
    head: [
        ['link', {rel: 'icon', href: '/img/logo.png'}],
		['link', {rel: 'stylesheet', href: '/css/style.css'}],
		["script", { charset: "utf-8", src: "/js/main.js" }],
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}