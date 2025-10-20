import {defineType, defineField} from 'sanity'
import {Wrench} from 'lucide-react'

export default defineType({
  name: 'service',
  title: 'Szolgáltatások',
  type: 'document',
  icon: Wrench,
  fields: [
    defineField({
      name: 'title',
      title: 'Szolgáltatás neve',
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
      name: 'icon',
      title: 'Ikon',
      type: 'string',
      options: {
        list: [
          {title: 'Telepítés', value: 'truck'},
          {title: 'Szerviz', value: 'wrench'},
          {title: 'Üzemeltetés', value: 'settings'},
          {title: 'Tanácsadás', value: 'users'},
          {title: 'Támogatás', value: 'headphones'},
        ],
      },
    }),
    defineField({
      name: 'shortDescription',
      title: 'Rövid leírás',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required().max(150),
    }),
    defineField({
      name: 'content',
      title: 'Tartalom',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),
    defineField({
      name: 'benefits',
      title: 'Előnyök',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.max(6),
    }),
    defineField({
      name: 'order',
      title: 'Sorrend',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'shortDescription',
    },
  },
  orderings: [
    {
      title: 'Sorrend',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})