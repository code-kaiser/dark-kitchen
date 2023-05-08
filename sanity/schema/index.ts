import { type SchemaTypeDefinition } from 'sanity'

import { business } from './business'

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
    business,
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
