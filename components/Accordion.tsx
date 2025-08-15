// components/ProjectAccordion.tsx
'use client'

import { Accordion } from '@ark-ui/react/accordion'
import { ChevronDownIcon } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

// Small parallax hook for subtle scroll-based translate
function useParallax(factor = 0.02) {
  const [y, setY] = useState(0)
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        setY(window.scrollY * factor)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [factor])
  return {
    transform: `translateY(${y.toFixed(1)}px)`,
    willChange: 'transform' as const,
  }
}

const projects = [
  {
    id: '1',
    title: 'Cat Rescue Website',
    description:
      'A full-stack mock site with adopt pages, donation forms, and contact features built with ShadCN and Tailwind.',
    link: 'https://cat-rescue-155d.vercel.app/',
  },
  {
    id: '2',
    title: 'Coffee Shop Landing Page',
    description:
      'A clean, responsive landing page for a fictional indie coffee brand with featured products and contact form.',
    link: '#',
  },
]

export default function ProjectAccordion() {
  // call hooks at the top level of the component
  const styleA = useParallax(0.02)
  const styleB = useParallax(-0.015)

  return (
    <div
      className="w-full max-w-4xl rounded-3xl shadow-2xl p-8 border border-gray-800"
      style={{
        background: 'linear-gradient(135deg, #232946 0%, #16161a 100%)',
        boxShadow: '0 8px 32px 0 rgba(44, 44, 84, 0.37)',
      }}
    >
      <Accordion.Root className="space-y-4" collapsible>
        {projects.map((project) => (
          <Accordion.Item
            key={project.id}
            value={project.id}
            className="border border-gray-700 overflow-hidden bg-white/10 backdrop-blur-lg rounded-2xl"
          >
            <Accordion.ItemTrigger className="flex justify-between items-center w-full px-6 py-4 text-lg font-semibold text-gray-100 bg-gray-900/40 cursor-pointer hover:bg-gray-900/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50">
              {project.title}
              <Accordion.ItemIndicator className="transition-transform duration-300 ease-in-out data-[state=open]:rotate-180">
                <ChevronDownIcon className="w-5 h-5 text-gray-400" />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>

            <Accordion.ItemContent className="px-6 py-5 bg-gray-900/60 text-sm text-gray-200 border-t border-gray-700">
              {/* Screenshot section with consistent aspect ratio + subtle parallax and stagger */}
              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="relative w-full aspect-[16/10] overflow-hidden rounded-xl shadow-md group animate-fade-up"
                  style={{ ...styleA, animationDelay: '80ms' }}
                >
                  <Image
                    src="/success-story.png"
                    alt={`${project.title} screenshot 1`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={project.id === '1'}
                  />
                </div>
                <div
                  className="relative w-full aspect-[16/10] overflow-hidden rounded-xl shadow-md group animate-fade-up"
                  style={{ ...styleB, animationDelay: '160ms' }}
                >
                  <Image
                    src="/cat-rescue.png"
                    alt={`${project.title} screenshot 2`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <p
                className="mb-3 leading-relaxed text-gray-200/90 animate-fade-up"
                style={{ animationDelay: '220ms' }}
              >
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 underline-offset-4 hover:underline animate-fade-up"
                style={{ animationDelay: '280ms' }}
              >
                View Project
                <span aria-hidden>↗</span>
              </a>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  )
}
