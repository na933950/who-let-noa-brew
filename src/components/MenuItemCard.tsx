import { Link } from 'react-router-dom'

interface MenuItemCardProps {
  id: string
  title: string
  description: string
  price: string
  isSignature?: boolean
}

export default function MenuItemCard({ id, title, description, price, isSignature }: MenuItemCardProps) {
  return (
    <Link to={`/item/${id}`}>
      <div className="flex flex-col p-6 rounded-2xl bg-white border border-wlnb-beige hover:border-wlnb-accent/30 transition-colors relative overflow-hidden group cursor-pointer h-full">
        {isSignature && (
          <div className="absolute top-0 right-0 bg-wlnb-accent text-white text-[10px] font-medium px-2 py-1 rounded-bl-lg uppercase tracking-wider">Signature</div>
        )}
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-lg font-medium tracking-tight group-hover:text-wlnb-accent transition-colors">{title}</h4>
          <span className="text-sm font-medium text-wlnb-tan">{price}</span>
        </div>
        <p className="text-sm text-wlnb-tan mb-6 flex-grow">{description}</p>
      </div>
    </Link>
  )
}
