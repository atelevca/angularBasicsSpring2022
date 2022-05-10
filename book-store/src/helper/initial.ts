import { Book } from 'src/model/Book.model';

export const initialValue: Book = {
  ISBN: 0,
  title: '',
  author: '',
  summary: '',
  image: '',
  info: {
    pages: 30,
    reviews: 30,
    rating: 30,
  },
  price: {
    currency: '',
    value: 30,
    displayValue: ''
  }
}
