module.exports = [
    {
        text: '新手指南', link: '/guide/'
    },
	{
	    text: '海豚排行榜', link: '/rank/'
	},
    {
        text: '天下热点',
		items: [
            {text: '国内热点', link: '/hotlab/country/'},
            {text: '全球热点', link: '/hotlab/world/'},
        ]
    },
    {
        text: '工具箱',
        items: [
			{
                text: '在线编辑',
				items: [
					{text: '图片压缩', link: 'https://tinypng.com/'}
				]
            },
			{
                text: '在线服务',
				items: [
					{text: '阿里云', link: 'https://www.aliyun.com/'},
					{text: '腾讯云', link: 'https://cloud.tencent.com/'}
				]
            },
			{
                text: '博客指南',
				items: [
					{text: '掘金', link: 'https://juejin.im/'},
					{text: 'CSDN', link: 'https://blog.csdn.net/'}
				]
            }
        ]
    }
]