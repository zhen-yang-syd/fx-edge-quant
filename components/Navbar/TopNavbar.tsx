import React, { useState, useEffect } from 'react'
import { navItem } from '@/utils/constants'
import { Logo } from '@/public'
import { useRouter } from 'next/router'
import { Divider, Drawer } from 'antd'
import { NavItem } from '@/components'
import { MenuFoldOutlined } from '@ant-design/icons'

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
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className={`z-[80] w-full flex flex-col justify-center items-center py-5 fixed 
    ${scrolled ? "bg-gray-400 bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-xl border-b-[1px]" : "bg-transparent"} 
    transition duration-150 ease-in-out
    `}
    >
      <div className='w-full max-w-[1200px] flex flex-row justify-between px-6'>
        <div className='flex flex-row gap-5 items-center cursor-pointer' onClick={() => { router.push('/'), setOpen(false) }}>
          <img src={Logo.src} alt="" className='w-auto h-[50px]' />
          <div className='flex flex-col text-white'>
            <span className='font-bold text-xl'>Midas Markets</span>
            {/* <span className='text-sm'>QUANT</span> */}
          </div>
          <Divider type='vertical' className='h-[40px]' />
        </div>
        <div className='sm:flex flex-row gap-5 items-center hidden'>
          {
            navItem.map((item, index) => (
              <NavItem key={index} index={index} item={item} />
            ))
          }
        </div>
        <MenuFoldOutlined className='text-white text-2xl sm:hidden hover:cursor-pointer' onClick={showDrawer} />
        <Drawer placement="right" onClose={onClose} open={open} closable={false}>
          {navItem.map((item, index) => (
            <div key={index} className='w-full text-center mb-3 text-lg text-gray-500'>
              <div className='cursor-pointer shadow-lg border-b-[1px] border-gray-300' onClick={() => { router.push(item.path), setOpen(false) }}>{item.name}</div>
              <div className='w-full flex flex-col gap-2 mt-2'>
                {item.subItems ? item.subItems.map((subItem, index) => (
                  <div key={subItem.path} className='flex flex-col mx-5 cursor-pointer shadow-lg border-b-[1px] border-gray-300' onClick={() => { router.push(subItem.path), setOpen(false) }}>{subItem.name}</div>
                )) : null}
              </div>
            </div>
          ))}
        </Drawer>
      </div>
    </div>
  )
}

export default TopNavbar