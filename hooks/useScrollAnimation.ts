'use client'
import { useEffect, useRef } from 'react'

export default function useScrollAnimation() {
  const ref = useRef(null)
  
  useEffect(() => {
    // Add initial hidden state when component mounts
    if (ref.current) {
      ref.current.classList.add('opacity-0', 'translate-y-10')
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Remove hidden state and add animation
          entry.target.classList.remove('opacity-0', 'translate-y-10')
          entry.target.classList.add('animate-fade-up')
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])
  
  return ref
}