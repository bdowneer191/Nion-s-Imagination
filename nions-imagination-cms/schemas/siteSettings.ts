export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
    },
    {
      name: 'analyticsHeadCode',
      title: 'Analytics Head Code',
      type: 'text',
      description: 'Code to be injected into the <head> tag.',
    },
    {
      name: 'analyticsBodyCode',
      title: 'Analytics Body Code',
      type: 'text',
      description: 'Code to be injected at the beginning of the <body> tag.',
    },
  ],
}
