'use client'
import Link from 'next/link'

const Nav = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <nav className="absolute top-0 left-0 w-full p-4 bg-transparent text-white flex justify-between items-center border-b-white-10 border-b-1 z-50">
      <div className="text-base flex flex-row items-baseline space-x-4 md:text-lg">
        <p className="font-oswald ">Brian Wheeler</p>
        <p className="hidden md:block">FullStack Developer | UI/UX</p>
      </div>

      <div className="space-x-4">
        <Link
          href="#projects"
          onClick={(e) => scrollToSection(e, 'projects')}
          className="hover:underline cursor-pointer"
        >
          Projects
        </Link>
        <Link
          href="#bio"
          onClick={(e) => scrollToSection(e, 'intro')}
          className="hover:underline cursor-pointer"
        >
          About
        </Link>
        <Link
          href="#contact"
          onClick={(e) => scrollToSection(e, 'contact')}
          className="hover:underline cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Nav
