import {defineType, defineField} from 'sanity'
import {Package} from 'lucide-react'

export default defineType({
  name: 'model',
  title: 'Automata modellek',
  type: 'document',
  icon: Package,
  fields: [
    defineField({
      name: 'title',
      title: 'Modell neve',
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
      name: 'categories',
      title: 'Kategóriák',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'coverImage',
      title: 'Borítókép',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Képgaléria',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternatív szöveg',
              type: 'string',
            }),
            defineField({
              name: 'caption',
              title: 'Képaláírás',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'shortDescription',
      title: 'Rövid leírás',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'longDescription',
      title: 'Részletes leírás',
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
      name: 'specifications',
      title: 'Specifikációk',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'group',
              title: 'Csoport',
              type: 'string',
              options: {
                list: [
                  {title: 'Méretek', value: 'dimensions'},
                  {title: 'Kapacitás', value: 'capacity'},
                  {title: 'Energia', value: 'energy'},
                  {title: 'Funkciók', value: 'features'},
                  {title: 'Egyéb', value: 'other'},
                ],
              },
            }),
            defineField({
              name: 'items',
              title: 'Adatok',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Megnevezés',
                      type: 'string',
                    }),
                    defineField({
                      name: 'value',
                      title: 'Érték',
                      type: 'string',
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'features',
      title: 'Főbb jellemzők',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.max(6),
    }),
    defineField({
      name: 'pdfBrochure',
      title: 'PDF prospektus',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
    defineField({
      name: 'order',
      title: 'Sorrend',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'featured',
      title: 'Kiemelt',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      featured: 'featured',
    },
    prepare(selection) {
      const {title, featured} = selection
      return {
        ...selection,
        subtitle: featured ? '⭐ Kiemelt' : '',
      }
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