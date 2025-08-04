'use client'
import ProjectAccordion from '@/components/Accordion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const fadeStart = 5
      const fadeEnd = 600

      const newOpacity = Math.min(
        1,
        Math.max(0, (scrollY - fadeStart) / (fadeEnd - fadeStart))
      )
      setOpacity(newOpacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative w-full min-h-screen">
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/laskyline.jpg')" }}
        aria-hidden="true"
      />

      {/* Fade Overlay */}
      <div
        className="fixed inset-0 bg-gradient-to-bl from-slate-800 to-indigo-950 z-10 pointer-events-none transition-opacity duration-300"
        style={{ opacity }}
        aria-hidden="true"
      />

      {/* Page Content */}
      <div className="relative z-20 p-6 pt-20 text-white">
        <h1 className="lg:text-[18vw] text-[17vw] mb-6 font-montserrat leading-none -rotate-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-700 to-orange-600 animate-fade-up lg:mt-0">
          Developer
        </h1>

        <section id="bio" className="mb-20 pb-10 space-y-6">
          <h2 className="text-2xl font-semibold font-poppins mb-4">About Me</h2>
          <p className="text-lg leading-relaxed max-w-3xl font-poppins text-gray-200">
            I&apos;m a full-stack developer based in Los Angeles with years of
            experience designing and building custom web interfaces and internal
            tools for modern businesses. From sleek frontend dashboards to
            complex backend systems, I love turning product ideas into intuitive
            digital experiences.
            <br />
            <br />
            Outside of work, I&apos;m passionate about Japanese curry, lived in
            Tokyo, and spend way too much time with my pets.
          </p>

          <Link href={'#footer'} className="justify-end flex">
            <button
              type="button"
              className="mt-4 relative text-[2.125rem] px-6 py-2 bg-transparent border border-pink-600 rounded-2xl text-white shadow-lg hover:opacity-90 transition-opacity duration-300 font-medium font-poppins hover:animate-pulse cursor-pointer"
            >
              contact me
            </button>
          </Link>
        </section>
        <section
          id="intro"
          className="text-xl leading-relaxed text-gray-200 font-poppins pt-10"
        >
          <div
            id="wrapper"
            className="flex flex-col md:flex-row md:justify-around md:items-center gap-8 animate-fade-up"
          >
            {/* Images stack on mobile, side-by-side on desktop */}

            {/* Cat image + label */}
            <div className="flex flex-col items-center mt-38">
              <Image
                src={'/coworker.jpg'}
                alt="cat sitting on a desk next to a monitor"
                width={820}
                height={520}
                style={{ width: '100%', height: 'auto' }}
                className="rounded-3xl shadow-2xl animate-fade-up object-cover "
              />
              <span className="mt-2 text-xs md:text-sm font-poppins text-pink-400 text-center">
                Cat-stack co-worker 🐾 💻
              </span>
            </div>

            {/* Curry image + label */}
            <div className="flex flex-col items-center mb-38">
              <Image
                src={'/curry.jpg'}
                alt="plate of Japanese curry"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                className="rounded-xl shadow-lg object-cover animate-fade-up "
              />
              <span className="mt-2 text-xs md:text-sm font-poppins text-yellow-300 text-center">
                My fuel source 🔥🍛
              </span>
            </div>

            {/* Text section: full width on mobile, limited width on desktop */}
            <div className="w-full md:max-w-[35vw] animate-fade-up px-2 md:px-0">
              <h2 className="lowercase font-roboto-condensed text-3xl md:text-8xl mb-4 md:mb-6 text-center md:text-left">
                I&apos;m Brian Wheeler.
              </h2>
              <p className="text-base md:text-lg text-center md:text-left">
                I use my passion for clean, scalable design to build digital
                experiences that support real business needs. With years of
                experience as a full-stack developer, I've created tools that
                streamline internal processes, increase revenue, and help users
                find exactly what they’re looking for.
              </p>

              <p className="text-base md:text-lg text-center md:text-left">
                At my current role, I’ve led the development of a sales margin
                calculator that makes it easy to apply discounts, rebates, and
                cost overrides, while giving the team full visibility into
                profit margins. I also built a custom chamber configurator for
                our main site — an interactive tool that helps customers choose
                exactly the right temperature chamber for their needs.
              </p>

              <p className="text-base md:text-lg text-center md:text-left">
                Internally, I’ve delivered secure apps using Next.js, Auth.js,
                and Prisma, and worked extensively with Tailwind, ShadCN, and
                Drizzle. I enjoy working at the intersection of thoughtful
                design and code that performs.
              </p>

              <p className="text-base md:text-lg text-center md:text-left">
                I’m currently expanding my portfolio with independent projects
                like a cat rescue site to showcase my frontend skills — with the
                goal of partnering with agencies, businesses, and nonprofits in
                the near future.
              </p>
            </div>
          </div>
        </section>
        {/* <section id="terminal">
          <div className="w-full max-w-xl mx-auto my-12 rounded-xl bg-gray-900/80 border border-gray-700 shadow-lg text-green-400 font-mono text-lg p-6 relative">
            <div className="flex items-center mb-4 space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
              <span className="ml-4 text-gray-400 text-xs">~/portfolio</span>
            </div>
            <div>
              <span className="text-green-400">$</span> whoami
              <br />
              <span className="text-white">
                Brian Wheeler — FullStack Developer
              </span>
              <br />
              <span className="text-green-400">$</span> echo "Building scalable
              web apps & beautiful UIs"
              <br />
              <span className="text-white">
                Building scalable web apps & beautiful UIs
              </span>
            </div>
          </div>
        </section> */}
        <section id="projects" className="mb-20 mt-4">
          <h2 className="uppercase text-7xl font-semibold font-raleway mb-4">
            Projects
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl font-poppins text-gray-200 mb-6">
            I&apos;m currently working on a few projects to showcase my skills.
            Check back soon for updates, or reach out if you&apos;d like to chat
            about potential collaborations!
          </p>
          <ProjectAccordion />
        </section>
      </div>
    </section>
  )
}
