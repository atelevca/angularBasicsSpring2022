type Price = {
  currency: string
  value: number
  displayValue: string
}

export type IBook = {
  ISBN: number
  title: string
  author: string
  summary: string
  image: string
  price: Price
}
