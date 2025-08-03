import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="absolute top-0 left-0 w-full p-4 bg-transparent text-white flex justify-between items-center border-b-white-10 border-b-1 z-50">
      <div className="text-base flex flex-row items-baseline space-x-4 md:text-lg">
        <p className="font-oswald ">Brian Wheeler</p>
        <p className="hidden md:block">FullStack Developer | UI/UX</p>
      </div>

      <div className="space-x-4">
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Nav
