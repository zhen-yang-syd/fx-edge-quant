import React, { useState, useEffect } from 'react'
import { navItem } from '@/utils/constants'
import { Logo } from '@/public'
import { useRouter } from 'next/router'
import { Divider } from 'antd'
import { NavItem } from '@/components'

const TopNavbar = () => {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`z-[80] w-full flex flex-col justify-center items-center py-5 fixed 
    ${scrolled ? "bg-gray-400 bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-xl border-b-[1px]" : "bg-transparent"} 
    transition duration-150 ease-in-out
    `}
    >
      <div className='w-[1200px] flex flex-row justify-between'>
        <div className='flex flex-row gap-5  items-center'>
          <img src={Logo.src} alt="" className='w-auto h-[50px]' />
          <div className='flex flex-col text-white'>
            <span className='font-bold text-xl'>EDGE</span>
            <span className='text-sm'>QUANT</span>
          </div>
          <Divider type='vertical' className='h-[40px]' />
        </div>
        <div className='flex flex-row gap-5 items-center'>
          {
            navItem.map((item, index) => (
              <NavItem key={index} index={index} item={item} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TopNavbar