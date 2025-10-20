import {defineType, defineField} from 'sanity'
import {Tag} from 'lucide-react'

export default defineType({
  name: 'category',
  title: 'Kategóriák',
  type: 'document',
  icon: Tag,
  fields: [
    defineField({
      name: 'title',
      title: 'Kategória neve',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL cím',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Leírás',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'icon',
      title: 'Ikon',
      type: 'string',
      options: {
        list: [
          {title: 'Kávé', value: 'coffee'},
          {title: 'Ital', value: 'bottle'},
          {title: 'Snack', value: 'cookie'},
          {title: 'Étel', value: 'utensils'},
          {title: 'Kombó', value: 'layout-grid'},
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})