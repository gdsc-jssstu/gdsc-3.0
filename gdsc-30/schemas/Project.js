export default {
    name: 'projects',
    type: 'document',
    title: 'Project',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Project title'
      },
      {
          name: 'content',
          type: 'string',
          title: 'Content'
      },
      {
          name: 'img',
          type: 'image',
          title: 'Image'
      },
      {
          name: 'links',
          type: 'array',
          of : [
              {
                  name: 'github',
                  type: 'url',
                  title: 'Github link'
              },
              {
                  name: 'youtube',
                  type: 'url',
                  title: 'Youtube link'
              },
              {
                  name: 'extern',
                  type: 'url',
                  title: 'Website link'
              }
          ],
          title: 'Links'
      }
    ]
  }