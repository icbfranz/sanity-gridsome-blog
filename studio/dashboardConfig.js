export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '601882f0942f580ee57bfac6',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-3s826rwo',
                  apiId: 'be05e3ff-32c4-45ff-8370-b71ea18a577b'
                },
                {
                  buildHookId: '601882f0942f580c4e7bfbd2',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-jdwiczvj',
                  apiId: '8069c583-c298-47a4-a8ac-fb10abf4e407'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/icbfranz/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-jdwiczvj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
