export interface Book {
  ISBN: number
  title: string
  author: string
  summary: string
  image : string
  price: Price
  info: Info
}

export interface Price {
  currency: string
  value: number
  displayValue: string
}

export interface Info {
  pages: number
  reviews: number
  rating: number
}
