import { type SchemaTypeDefinition } from 'sanity'

const localeString = {
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true },
    },
  ],
  fields: [
    {
      title: 'English',
      name: 'en',
      type: 'string',
    },
    {
      title: 'Spanish',
      name: 'es',
      type: 'string',
      fieldset: 'translations',
    },
  ],
}

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
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
    },
    localeString,
    {
      name: 'category',
      type: 'document',
      title: 'Categories',
      fields: [
        {
          name: 'name',
          type: 'localeString',
        },
      ],
      preview: { select: { title: 'name.en' } },
    },
    {
      name: 'flag',
      type: 'document',
      title: 'Flags',
      fields: [
        {
          name: 'name',
          type: 'localeString',
        },
        {
          name: 'description',
          type: 'localeString',
        },
        {
          name: 'icon',
          type: 'image',
        },
      ],
      preview: { select: { title: 'name.en' } },
    },
    {
      name: 'location',
      type: 'object',
      fields: [
        {
          name: 'address',
          type: 'string',
        },
        {
          name: 'city',
          type: 'string',
        },
        {
          name: 'state',
          type: 'string',
        },
        {
          name: 'zip',
          type: 'string',
        },
        {
          name: 'country',
          type: 'string',
        },
        {
          name: 'business',
          type: 'reference',
          to: [{ type: 'business' }],
        },
      ],
    },
    {
      name: 'complaint',
      type: 'document',
      title: 'Complaints',
      fields: [
        {
          name: 'business',
          type: 'reference',
          to: [{ type: 'business' }],
        },
        {
          name: 'location',
          type: 'reference',
          to: [{ type: 'location' }],
        },
        {
          name: 'description',
          type: 'text',
        },
        {
          name: 'date',
          type: 'date',
        },
      ],
    },
  ],
}
