export interface MenuItem {
  id: string
  title: string
  description: string
  image: string
  type: 'beverage' | 'food'
  price: string
  isSignature?: boolean
  recipe?: string
  instagramReel?: string
  videoUrl?: string
}

export interface HeroProps {
  title: string
  subtitle: string
  backgroundImage?: string
}

export interface CardProps {
  id?: string
  title: string
  description: string
  image: string
  link?: string
}

