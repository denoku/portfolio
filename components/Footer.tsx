'use client'

import { Mail, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(80% 60% at 50% 0%, rgba(99,102,241,0.25) 0%, rgba(99,102,241,0) 60%)',
        }}
      />

      <div className="relative z-10 px-6 py-10 md:px-10 md:py-12 grid gap-8 md:grid-cols-2 text-gray-100">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold font-raleway">
            Let’s build something great
          </h3>
          <p className="mt-2 text-sm md:text-base text-gray-300/90 max-w-prose">
            I’m open to freelance work and collaborations. If you have a project
            in mind or just want to say hi, drop me a line.
          </p>
          <a
            id="contact"
            href="mailto:wheelerb228@gmail.com"
            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-pink-500/60 bg-pink-500/10 px-4 py-2 text-pink-200 hover:bg-pink-500/20 transition-colors"
          >
            <Mail className="h-4 w-4" />
            wheelerb228@gmail.com
          </a>
        </div>

        <div className="md:justify-self-end">
          <ul className="space-y-3">
            <li>
              <a
                href="#projects"
                className="hover:underline underline-offset-4"
              >
                View projects
              </a>
            </li>
            <li>
              <a href="#bio" className="hover:underline underline-offset-4">
                About / bio
              </a>
            </li>
            <li>
              <a href="#home" className="hover:underline underline-offset-4">
                Back to top
              </a>
            </li>
          </ul>

          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://github.com/denoku"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/brianwheeeler/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 px-6 py-4 text-xs text-gray-400/90 md:px-10">
        © {new Date().getFullYear()} Brian Wheeler. All rights reserved.
      </div>
    </footer>
  )
}
