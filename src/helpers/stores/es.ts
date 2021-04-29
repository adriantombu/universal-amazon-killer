import { Store, Category } from '../stores'

export const stores: Store[] = [
  {
    title: 'feedbooks.com',
    url: 'http://www.feedbooks.com/search?lang=es&query=%1$s',
    categories: [Category.DIGITAL_TEXT],
  },
  {
    title: 'ethicalbooksearch.com',
    url: 'https://www.ethicalbooksearch.com/es?source=amazon-alternatives-extension&query=%1$s',
    categories: [Category.ENGLISH_BOOKS, Category.STRIPBOOKS, Category.BOOKS, Category.DIGITAL_TEXT],
  },
]
