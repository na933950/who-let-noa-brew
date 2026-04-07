import { useState, useEffect } from 'react'
import { MenuItem } from '../types/index'

interface RecipeModalProps {
  item: MenuItem | null
  isOpen: boolean
  onClose: () => void
}

const isInstagramEmbed = (value: string) => value.trim().startsWith('<blockquote')

export default function RecipeModal({ item, isOpen, onClose }: RecipeModalProps) {
  const [activeTab, setActiveTab] = useState<'recipe' | 'video'>('recipe')

  useEffect(() => {
    const hasInstagram =
      item?.instagramReel ||
      (item?.videoUrl && isInstagramEmbed(item.videoUrl))
    if (isOpen && hasInstagram && (window as any).instgrm) {
      (window as any).instgrm.Embeds.process()
    }
  }, [isOpen, item])

  if (!isOpen || !item) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-4 md:p-0">
      {/* Modal Container */}
      <div className="bg-wlnb-cream w-full md:w-full md:max-w-2xl rounded-t-3xl md:rounded-3xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom-5 md:slide-in-from-center-0 duration-300">
        {/* Close Button */}
        <div className="sticky top-0 bg-wlnb-cream border-b border-wlnb-beige flex items-center justify-between p-6 z-10">
          <h2 className="text-2xl font-medium text-wlnb-brown">{item.title}</h2>
          <button
            onClick={onClose}
            className="text-wlnb-tan hover:text-wlnb-brown transition-colors text-2xl w-8 h-8 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Image */}
          <div className="mb-8">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 md:h-80 object-cover rounded-2xl"
            />
          </div>

          {/* Info */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-wlnb-accent uppercase tracking-wide">
                {item.type === 'beverage' ? '☕ Beverage' : '🍰 Food'}
              </span>
              <span className="text-2xl font-semibold text-wlnb-accent">{item.price}</span>
            </div>
            <p className="text-lg text-wlnb-tan leading-relaxed">{item.description}</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-wlnb-beige">
            <button
              onClick={() => setActiveTab('recipe')}
              className={`py-3 px-4 font-medium text-sm transition-colors ${
                activeTab === 'recipe'
                  ? 'text-wlnb-accent border-b-2 border-wlnb-accent -mb-px'
                  : 'text-wlnb-tan hover:text-wlnb-brown'
              }`}
            >
              Recipe
            </button>
            {(item.instagramReel || item.videoUrl) && (
              <button
                onClick={() => setActiveTab('video')}
                className={`py-3 px-4 font-medium text-sm transition-colors ${
                  activeTab === 'video'
                    ? 'text-wlnb-accent border-b-2 border-wlnb-accent -mb-px'
                    : 'text-wlnb-tan hover:text-wlnb-brown'
                }`}
              >
                How to Make
              </button>
            )}
          </div>

          {/* Tab Content */}
          {activeTab === 'recipe' && item.recipe && (
            <div>
              <pre className="bg-wlnb-light p-6 rounded-xl text-wlnb-brown text-sm leading-relaxed whitespace-pre-wrap break-words font-sans">
                {item.recipe}
              </pre>
            </div>
          )}

          {activeTab === 'video' && (item.instagramReel || item.videoUrl) && (
            <div className="space-y-6">
              {item.videoUrl && (
                <div>
                  <h3 className="text-lg font-medium text-wlnb-brown mb-4">Video Guide</h3>
                  <div className="flex justify-center">
                    {isInstagramEmbed(item.videoUrl) ? (
                      <div className="w-full max-w-sm" dangerouslySetInnerHTML={{ __html: item.videoUrl }} />
                    ) : (
                      <div className="w-full max-w-xs">
                        <div className="aspect-[9/16] bg-wlnb-light rounded-xl overflow-hidden">
                          <iframe
                            src={item.videoUrl}
                            title={`${item.title} - Video Guide`}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {item.instagramReel && (
                <div>
                  <h3 className="text-lg font-medium text-wlnb-brown mb-4">Instagram Reel</h3>
                  <div className="flex justify-center">
                    <div className="w-full max-w-sm">
                      <blockquote
                        className="instagram-media"
                        data-instgrm-permalink={item.instagramReel}
                        data-instgrm-version="14"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Close Button at Bottom (Mobile) */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 bg-wlnb-brown text-white font-medium py-3 px-6 rounded-full hover:bg-wlnb-dark transition-all text-center"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
