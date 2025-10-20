import {defineType, defineField} from 'sanity'
import {FileText} from 'lucide-react'

export default defineType({
  name: 'post',
  title: 'Blog bejegyzések',
  type: 'document',
  icon: FileText,
  fields: [
    defineField({
      name: 'title',
      title: 'Cím',
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
      name: 'excerpt',
      title: 'Kivonat',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
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
      name: 'body',
      title: 'Tartalom',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
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
      name: 'publishedAt',
      title: 'Publikálás dátuma',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'categories',
      title: 'Kategóriák',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const {publishedAt} = selection
      return {
        ...selection,
        subtitle: publishedAt ? new Date(publishedAt).toLocaleDateString('hu-HU') : 'Piszkozat',
      }
    },
  },
  orderings: [
    {
      title: 'Publikálás dátuma, új→régi',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
})