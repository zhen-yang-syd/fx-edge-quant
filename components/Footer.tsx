import React from 'react'
import { navItem } from '@/utils/constants'
import { Logo } from '@/public'
import { useRouter } from 'next/router'
import { EnvironmentOutlined, MailOutlined } from '@ant-design/icons'
import Link from 'next/link'

const Footer = () => {
    const router = useRouter()
    return (
        <>
            <div className='w-full text-white bg-[#373737] cursor-default'>
                <div className='footer-container'>
                    {/* icon */}
                    <div className='flex flex-row gap-5 items-center'>
                        <img src={Logo.src} alt="" className='w-auto h-[50px]' />
                        <div className='flex flex-col text-white'>
                            <span className='font-bold text-xl'>EDGE</span>
                            <span className='text-sm'>QUANT</span>
                        </div>
                    </div>
                    {/* nav bar */}
                    <div className='flex flex-col gap-5 items-left'>
                        {
                            navItem.map((item, index) => (
                                <div key={index}
                                    className='text-white text-sm font-semibold hover:text-gray-400 cursor-pointer flex items-center gap-1
                                            transition duration-300 ease-in-out'
                                    onClick={() => router.push(item.path)}
                                >
                                    {item.name}
                                </div>
                            ))
                        }
                    </div>
                    {/* location */}
                    <div className='flex flex-col gap-4'>
                        <div>Contact Us</div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2 items-center'>
                                <div className='flex items-center gap-3'><EnvironmentOutlined />Our Office</div>
                                <Link href='https://www.google.com/maps/place/201+Elizabeth+St,+Sydney+NSW+2000/@-33.8736163,151.2068352,17z/data=!4m15!1m8!3m7!1s0x6b12ae3e05804f1b:0xacfdc35de2fcb29a!2s201+Elizabeth+St,+Sydney+NSW+2000!3b1!8m2!3d-33.8736163!4d151.2094155!16s%2Fg%2F11b8v6z6r1!3m5!1s0x6b12ae3e05804f1b:0xacfdc35de2fcb29a!8m2!3d-33.8736163!4d151.2094155!16s%2Fg%2F11b8v6z6r1'
                                    className='text-blue-300'>201 Elizabeth Street Sydney 2000</Link>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className='flex items-center gap-3'><MailOutlined />Official Email</div>
                                <Link href='mailto:info@edgecademy.org' className="text-blue-300">info@edgecademy.org</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-[#223342] text-white cursor-default'>
                <div className='footer-container'>
                    <div className='w-full flex flex-col gap-2 text-center px-4 sm:px-0'>
                        <div>Copyright © 2023 Edge Ark Pty Ltd. AFSL CAR No: 001303224, ACN: 664 994 503. All rights reserved.</div>
                        <Link href='/disclaimer' className='capitlize'>Privacy Policy | Disclaimer </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer