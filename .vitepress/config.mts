import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Project xx",
  description: "pretty",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //       { text: 'Demo Examples', link: '/content/demo' },
    //       { text: 'Demo2 Examples', link: '/content/demo2' },
    //     ]
    //   }
    // ],

    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/content/': [
        {
          text: 'Level 1',
          items: [
            { text: 'Level 2',
              items: [
                {
                  text: 'Level 3',
                  items: [
                    { text: 'demo', link: '/content/demo' },
                    { text: 'demo2', link: '/content/demo2' },
                  ]
                }
              ]
            }
          ]
        }
      ],
      '/demo/': [{
        text: 'Demo',
        items: [
          { text: 'api1', link: '/demo/api-examples' },
          { text: 'demo', link: '/content/demo' },
          { text: 'demo2', link: '/content/demo2' },
        ]
      }]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
