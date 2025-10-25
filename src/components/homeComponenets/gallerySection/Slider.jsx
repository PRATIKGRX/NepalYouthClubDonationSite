// 

import { useMemo, useState, useRef, useEffect } from 'react'
import './Slider.css'

export default function Slider({
  images = [],
  visibleCount = 3,
  // autoplay props
  autoplay = false,
  autoplayInterval = 3000,
  pauseOnHover = true,
}) {
  const [index, setIndex] = useState(0)
  const viewportRef = useRef(null)

  // Enforce a maximum of 5 images visible at once (defensive)
  const MAX_VISIBLE = 5
  const clampedVisible = Math.min(Math.max(Number(visibleCount) || 1, 1), MAX_VISIBLE)

  const itemWidthPercent = useMemo(() => 100 / clampedVisible, [clampedVisible])

  const maxIndex = Math.max(0, images.length - clampedVisible)

  useEffect(() => {
    // clamp index when visibleCount or images change
    setIndex((i) => Math.min(i, Math.max(0, images.length - clampedVisible)))
  }, [images.length, clampedVisible])


  // helper wrappers that also trigger a temporary autoplay pause
  const pauseAfterInteractionRef = useRef(null)
  const isPausedRef = useRef(false)

  const pauseAutoplayTemporarily = () => {
    if (!autoplay) return
    isPausedRef.current = true
    if (pauseAfterInteractionRef.current) clearTimeout(pauseAfterInteractionRef.current)
    pauseAfterInteractionRef.current = setTimeout(() => {
      isPausedRef.current = false
    }, autoplayInterval)
  }

  const prev = () => {
    setIndex((i) => {
      // wrap-around to end
      const nextI = i - 1
      return nextI < 0 ? Math.max(0, images.length - clampedVisible) : nextI
    })
    pauseAutoplayTemporarily()
  }

  const next = () => {
    setIndex((i) => {
      const nextI = i + 1
      // wrap to start when past end
      if (nextI > Math.max(0, images.length - clampedVisible)) {
        return 0
      }
      return Math.min(Math.max(0, images.length - clampedVisible), nextI)
    })
    pauseAutoplayTemporarily()
  }

  // keyboard navigation: left/right arrows
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [maxIndex])

  const pageCount = Math.max(1, Math.ceil(images.length / clampedVisible))
  const activePage = Math.floor(index / clampedVisible)

  const goToPage = (p) => {
    setIndex(Math.min(maxIndex, p * clampedVisible))
    pauseAutoplayTemporarily()
  }

  const transformStyle = {
    transform: `translateX(-${index * (100 / clampedVisible)}%)`,
  }

  // autoplay effect (looping)
  useEffect(() => {
    if (!autoplay) return
    if (images.length <= clampedVisible) return
    const id = setInterval(() => {
      if (!isPausedRef.current) {
        // advance by 1; wrap to 0 at end
        setIndex((i) => {
          const nextI = i + 1
          if (nextI > Math.max(0, images.length - clampedVisible)) return 0
          return nextI
        })
      }
    }, autoplayInterval)
    return () => clearInterval(id)
  }, [autoplay, autoplayInterval, images.length, clampedVisible])

  useEffect(() => {
    return () => {
      if (pauseAfterInteractionRef.current) clearTimeout(pauseAfterInteractionRef.current)
    }
  }, [])

  return (
    <div
      className="slider-wrapper"
      onMouseEnter={() => {
        if (pauseOnHover && autoplay) isPausedRef.current = true
      }}
      onMouseLeave={() => {
        if (pauseOnHover && autoplay) isPausedRef.current = false
      }}
    >
      <button className="arrow left" onClick={prev} disabled={index === 0} aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="slider">
        <div className="slider-viewport" ref={viewportRef} style={transformStyle}>
          {images.map((img) => (
            <div className="slide" key={img.id} style={{ width: `${itemWidthPercent}%` }}>
              <img src={img.url} alt={img.title || 'image'} />
            </div>
          ))}
        </div>
      </div>

      <button className="arrow right" onClick={next} disabled={index >= maxIndex} aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="dots" role="tablist" aria-label="Pagination">
        {Array.from({ length: pageCount }).map((_, p) => (
          <div
            key={p}
            className={`dot ${p === activePage ? 'active' : ''}`}
            onClick={() => goToPage(p)}
            role="tab"
            aria-selected={p === activePage}
            title={`Go to page ${p + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
