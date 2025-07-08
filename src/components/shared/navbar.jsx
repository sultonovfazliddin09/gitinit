import { useState } from 'react'
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
  UserIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'About', path: '/about' },
  { name: 'Latest', path: '/latest' },
  { name: 'Pages', path: '/pages' },
  { name: 'Contact', path: '/contact' }
]

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)



  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800">
             <a href="/">  Time <span className="text-red-600">Zone</span></a>
            </h1>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((nav) => (
              <a
                key={nav.name}
                href={nav.path}
                className="text-gray-700 hover:text-blue-600 transition font-medium"
              >
                {nav.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-2.5 pointer-events-none" />
            </div>
            <UserIcon className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
            <ShoppingBagIcon className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((nav) => (
              <a
                key={nav.name}
                href={nav.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-100"
              >
                {nav.name}
              </a>
            ))}

            <div className="flex flex-col gap-3 border-t pt-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-2.5 pointer-events-none" />
              </div>

              <div className="flex justify-around items-center">
                <UserIcon className="w-6 h-6 text-gray-600" />
                <ShoppingBagIcon className="w-6 h-6 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
