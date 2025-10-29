export default {
  name: 'productGrid',
  title: 'Product Grid',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{type: 'reference', to: {type: 'product'}}],
    },
  ],
}
