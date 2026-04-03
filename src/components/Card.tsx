import { Link } from 'react-router-dom'
import { CardProps } from '../types/index'

export default function Card({ title, description, image, link }: CardProps) {
  const content = (
    <div className="group bg-white rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col border border-chai-beige/50">
      <div className="h-56 bg-chai-tan overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-display font-semibold text-chai-deep mb-2 group-hover:text-chai-rust transition">{title}</h3>
        <p className="text-sm text-chai-brown leading-relaxed flex-grow">{description}</p>
      </div>
    </div>
  )

  if (link) {
    return <Link to={link} className="block h-full">{content}</Link>
  }

  return content
}
