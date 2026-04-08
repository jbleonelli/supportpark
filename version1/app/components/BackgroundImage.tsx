interface BackgroundImageProps {
  src: string
  alt?: string
  opacity?: number
  blur?: number
  position?: string
  overlayOpacity?: number
}

export default function BackgroundImage({
  src,
  alt = '',
  opacity = 0.4,
  blur = 2,
  position = 'center',
  overlayOpacity = 0.6,
}: BackgroundImageProps) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: `blur(${blur}px) saturate(0.3)`,
          objectPosition: position,
          transform: 'scale(1.1)',
        }}
        loading="eager"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, rgba(3,3,10,${overlayOpacity}) 0%, rgba(3,3,10,${overlayOpacity * 0.85}) 50%, rgba(3,3,10,${overlayOpacity}) 100%)`,
        }}
      />
    </div>
  )
}
