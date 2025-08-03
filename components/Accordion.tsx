// components/ProjectAccordion.tsx
'use client'

import { Accordion } from '@ark-ui/react/accordion'
import { ChevronDownIcon } from 'lucide-react'
import Image from 'next/image'

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
            <Accordion.ItemTrigger className="flex justify-between items-center w-full px-6 py-4 text-lg font-semibold text-gray-100 bg-gray-900/40 cursor-pointer hover:bg-gray-900/60 focus:outline-none">
              {project.title}
              <Accordion.ItemIndicator className="transition-transform duration-300 ease-in-out data-[state=open]:rotate-180">
                <ChevronDownIcon className="w-5 h-5 text-gray-400" />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>

            <Accordion.ItemContent className="px-6 py-4 bg-gray-900/60 text-sm text-gray-200 border-t border-gray-700">
              {/* Screenshot section */}
              <div className="mb-4 flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Image
                    src="/success-story.png"
                    alt={`${project.title} screenshot 1`}
                    width={400}
                    height={250}
                    className="rounded-xl shadow-md object-cover w-full"
                  />
                </div>
                <div className="flex-1">
                  <Image
                    src="/cat-rescue.png"
                    alt={`${project.title} screenshot 2`}
                    width={400}
                    height={250}
                    className="rounded-xl shadow-md object-cover w-full"
                  />
                </div>
              </div>
              <p className="mb-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-medium"
              >
                View Project
              </a>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  )
}
