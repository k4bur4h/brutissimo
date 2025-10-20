import { groq } from 'next-sanity'

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    logo,
    phone,
    email,
    address,
    socialLinks,
    footerText
  }
`

export const allModelsQuery = groq`
  *[_type == "model"] | order(order asc, _createdAt desc) {
    _id,
    title,
    slug,
    categories[]->{
      _id,
      title,
      slug
    },
    coverImage,
    shortDescription,
    features,
    featured
  }
`

export const featuredModelsQuery = groq`
  *[_type == "model" && featured == true] | order(order asc) [0...6] {
    _id,
    title,
    slug,
    categories[]->{
      _id,
      title,
      slug
    },
    coverImage,
    shortDescription,
    features
  }
`

export const modelBySlugQuery = groq`
  *[_type == "model" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    categories[]->{
      _id,
      title,
      slug,
      icon
    },
    coverImage,
    gallery,
    shortDescription,
    longDescription,
    specifications,
    features,
    pdfBrochure
  }
`

export const allServicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    icon,
    shortDescription,
    benefits
  }
`

export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    icon,
    shortDescription,
    content,
    benefits
  }
`

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    seoTitle,
    seoDescription,
    blocks
  }
`

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    categories[]->{
      _id,
      title,
      slug
    }
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    body,
    publishedAt,
    categories[]->{
      _id,
      title,
      slug
    }
  }
`

export const allCategoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    icon
  }
`