import {defineType, defineField} from 'sanity'
import {FileText} from 'lucide-react'

export default defineType({
  name: 'page',
  title: 'Oldalak',
  type: 'document',
  icon: FileText,
  fields: [
    defineField({
      name: 'title',
      title: 'Oldal címe',
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
      name: 'seoTitle',
      title: 'SEO cím',
      type: 'string',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO leírás',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'blocks',
      title: 'Tartalom blokkok',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'hero',
          title: 'Hero szekció',
          fields: [
            defineField({name: 'heading', title: 'Főcím', type: 'string'}),
            defineField({name: 'subheading', title: 'Alcím', type: 'text', rows: 2}),
            defineField({name: 'image', title: 'Háttérkép', type: 'image', options: {hotspot: true}}),
            defineField({
              name: 'cta',
              title: 'CTA gombok',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({name: 'text', title: 'Szöveg', type: 'string'}),
                    defineField({name: 'url', title: 'Link', type: 'string'}),
                    defineField({
                      name: 'style',
                      title: 'Stílus',
                      type: 'string',
                      options: {
                        list: [
                          {title: 'Elsődleges', value: 'primary'},
                          {title: 'Másodlagos', value: 'secondary'},
                        ],
                      },
                    }),
                  ],
                },
              ],
            }),
          ],
        },
        {
          type: 'object',
          name: 'features',
          title: 'Jellemzők szekció',
          fields: [
            defineField({name: 'heading', title: 'Cím', type: 'string'}),
            defineField({
              name: 'items',
              title: 'Jellemzők',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({name: 'icon', title: 'Ikon', type: 'string'}),
                    defineField({name: 'title', title: 'Cím', type: 'string'}),
                    defineField({name: 'description', title: 'Leírás', type: 'text', rows: 2}),
                  ],
                },
              ],
            }),
          ],
        },
        {
          type: 'object',
          name: 'content',
          title: 'Szöveges tartalom',
          fields: [
            defineField({
              name: 'content',
              title: 'Tartalom',
              type: 'array',
              of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}],
            }),
          ],
        },
        {
          type: 'object',
          name: 'cta',
          title: 'CTA szekció',
          fields: [
            defineField({name: 'heading', title: 'Cím', type: 'string'}),
            defineField({name: 'description', title: 'Leírás', type: 'text', rows: 2}),
            defineField({name: 'buttonText', title: 'Gomb szöveg', type: 'string'}),
            defineField({name: 'buttonUrl', title: 'Gomb link', type: 'string'}),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
})