import type { SchemaTypeDefinition } from 'sanity'

export const business: SchemaTypeDefinition = {
  title: 'Businesses',
  name: 'business',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'locations',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'location' }] }],
    },
    {
      name: 'complaints',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'complaint' }] }],
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'flags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'flag' }] }],
    },
    {
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
      initialValue: {
        _type: 'reference',
        _ref: '67a052dd-d20f-42d8-bfaf-51254b7e04d9',
      },
    },
    {
      name: 'social',
      type: 'object',
      fields: [
        {
          name: 'website',
          type: 'url',
        },
        {
          name: 'google',
          type: 'url',
        },
        {
          name: 'facebook',
          type: 'url',
        },
        {
          name: 'twitter',
          type: 'url',
        },
        {
          name: 'instagram',
          type: 'url',
        },
      ],
    },
  ],
}
