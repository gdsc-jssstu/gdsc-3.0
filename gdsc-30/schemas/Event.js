export default {
    name: 'events',
    type: 'document',
    title: 'Events',
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
          name: 'date',
          type: 'date',
          title: 'Date',
          options: {
              dateFormat: 'DD-MM-YYYY'
          }
      },
      {
        name: 'images',
        type: 'array',
        of: [
            {
                name: 'image',
                type: 'image',
                title: 'Image',
                options: {
                    hotspot: true
                }
            }
        ],
        title: 'Images',
      }
    ]
  }