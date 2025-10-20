import {defineType, defineField} from 'sanity'
import {Settings} from 'lucide-react'

export default defineType({
  name: 'siteSettings',
  title: 'Weboldal beállítások',
  type: 'document',
  icon: Settings,
  fields: [
    defineField({
      name: 'title',
      title: 'Weboldal neve',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Weboldal leírása',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Logó',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'phone',
      title: 'Telefonszám',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'E-mail cím',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Cím',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'socialLinks',
      title: 'Közösségi média linkek',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'YouTube', value: 'youtube'},
                ],
              },
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'footerText',
      title: 'Lábléc szöveg',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})