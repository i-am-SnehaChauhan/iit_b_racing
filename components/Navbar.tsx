"use client"
import Link from 'next/link'
import Image from 'next/image'
import {Popover} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/20/solid'

const Navbar = () => {
  return (
    <header className="w-full absolute z-10 ">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-16 py-4">
             <Link href="/" className="flex justify-center items-center ">
                 <Image 
                     src="/logo.svg"
                        alt="logo"
                        width={118}
                        height={18}
                        className="object-contain"
                    />
             </Link>
              <div className="grow">
             <div className="hidden sm:flex items-center justify-center gap-2 md:gap-8">
             <Link href="/cars" className="text-lg font-bold text-[#00004D]">Cars</Link>
              <Link href="/about" className="text-lg font-bold text-[#00004D]">About</Link>
              <Link href="/team" className="text-lg font-bold text-[#00004D]">Team</Link>
              <Link href="/" className="text-lg font-bold text-[#00004D]">Achievement</Link>
              <Link href="/" className="text-lg font-bold text-[#00004D]">Sponsors</Link>
              <Link href="/login" className="text-lg font-bold text-[#00004D]">Gallery</Link>
              <Link href="/contact" className="text-lg font-bold text-[#00004D]">Contact Us</Link>
              </div>
              </div>
              <Popover className="flex grow items-center justify-end sm:hidden">
               
                <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-[#00004D] bg-[#F5F5F5] focus:ring-2 focus:ring-[#00004D] focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                      <div className='px-5 pt-5 pb-6'>
                         <div className="flex items-center justify-between">
                          <h1 className='font-bold text-[#00004D] text-lg'>Menu</h1>
                          <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-[#00004D] bg-[#F5F5F5] focus:ring-2 focus:ring-[#00004D] focus:outline-none">
                            <span className="sr-only">Close main menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                         </div>
                      
                    </div>
                    <div className='m-6 items-center justify-center'>
                      <nav className='grid gap-y-8'>
                        <Link href="/cars" className="text-lg font-bold text-[#00004D]">Cars</Link>
                        <Link href="/about" className="text-lg font-bold text-[#00004D]">About</Link>
                        <Link href="/team" className="text-lg font-bold text-[#00004D]">Team</Link>
                        <Link href="/" className="text-lg font-bold text-[#00004D]">Achievement</Link>
                        <Link href="/" className="text-lg font-bold text-[#00004D]">Sponsors</Link>
                        <Link href="/login" className="text-lg font-bold text-[#00004D]">Gallery</Link>
                        <Link href="/contact" className="text-lg font-bold text-[#00004D]">Contact Us</Link>
                      </nav>

                    </div>
                    </div>
                    
                </Popover.Panel>
                </Popover>

              
              
                  
                
        </nav>
    </header>

  )
}

export default Navbar