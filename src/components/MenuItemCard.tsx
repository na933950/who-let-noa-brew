interface MenuItemCardProps {
  title: string
  description: string
  price: string
  image: string
  isSignature?: boolean
  onClick: () => void
}

export default function MenuItemCard({
  title,
  description,
  price,
  image,
  isSignature,
  onClick,
}: MenuItemCardProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col p-0 rounded-2xl bg-white border border-wlnb-beige hover:border-wlnb-accent/30 transition-all overflow-hidden h-full group cursor-pointer shadow-sm hover:shadow-lg"
    >
      {/* Image Container */}
      <div className="relative h-48 bg-wlnb-light overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isSignature && (
          <div className="absolute top-0 right-0 bg-wlnb-accent text-white text-xs font-bold px-3 py-2 rounded-bl-lg uppercase tracking-wider">
            ★ Signature
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-2 mb-3">
          <h4 className="text-lg font-medium tracking-tight text-wlnb-brown group-hover:text-wlnb-accent transition-colors text-left">
            {title}
          </h4>
          <span className="text-sm font-semibold text-wlnb-accent whitespace-nowrap">{price}</span>
        </div>
        <p className="text-sm text-wlnb-tan leading-relaxed flex-grow text-left">{description}</p>

        {/* CTA */}
        <div className="mt-4 pt-4 border-t border-wlnb-beige">
          <p className="text-xs font-medium text-wlnb-accent uppercase tracking-wide">
            Tap to see recipe →
          </p>
        </div>
      </div>
    </button>
  )
}

