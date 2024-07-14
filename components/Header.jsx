'use client'
import Logo from './Logo'
import Nav from './Nav'
import Mobilenavigation from './Mobilenavigation'

import ThemeToggler from './ThemeToggler'
import React,{ useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {

  const [header ,setHeader]=useState(false);
  const pathname=usePathname();

  useEffect(()=>{
    const scrollYpos =window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    })

    // remove Events
    return ()=> window.removeEventListener('scroll',scrollYpos)
  })
  return (
    <header
    className={`${
      header ? 'py-4 bg-tertiary shadow-lg dark:bg-accent'
    : 'py-6 dark:bg-transparent'}
     sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fff]' }`}
    >
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          {/* Logo Section */}
          <Logo/>
          <div className='flex items-center gap-x-6'>
            {/* Nav Section */}
            <Nav containerStyles='hidden xl:flex gap-x-8 items-center'
            linkStyles='relative hover:text-primary transition-all'
            underlineStyles='absolute left-0 top top-full h-[2px] bg-primary w-full'
            />

            {/* Theme Tooggler */}
            <ThemeToggler />

             {/* Mobile navigation */}
             <div className='xl:hidden'>
             <Mobilenavigation/>
             </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header