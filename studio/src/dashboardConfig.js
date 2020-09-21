export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f681971d18439be33289803',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-mmi3sgvc',
                  apiId: '020c72a2-7e46-4069-82da-1f4481443b2a'
                },
                {
                  buildHookId: '5f6819726ac815911d3ec3a0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-uvyqkrnp',
                  apiId: '704f4d11-fb44-423d-95c3-4e9bd17487ba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/geethikasimhadri/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-uvyqkrnp.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
