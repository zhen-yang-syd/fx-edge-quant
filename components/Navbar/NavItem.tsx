import { FC, useState, useEffect } from 'react'
import { DownOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import { Tooltip } from 'antd'
type Props = {
    index: number,
    item: {
        name: string,
        path: string,
        subItems?: {
            name: string,
            path: string
        }[]
    }
}

const NavItem: FC<Props> = ({ index, item }) => {
    const router = useRouter()
    return (
        <>
            <div key={index}
                className='text-white text-sm font-semibold hover:text-gray-400 cursor-pointer flex items-center gap-1
              transition duration-300 ease-in-out relative'
                onClick={() => router.push(item.path)}
            >
                <Tooltip
                    arrow={false}
                    color='gray'
                    title={item.subItems &&
                        item.subItems.map((subItem, index) => (
                            <div key={index}
                                className='text-white text-sm font-semibold hover:text-[#111111] cursor-pointer flex items-center gap-1'
                                onClick={() => router.push(subItem.path)}
                            >
                                {subItem.name}
                            </div>
                        ))
                    } placement='bottom'>{item.name}</Tooltip>
                {item.subItems && <DownOutlined className='animate-bounce pt-2' />}
            </div>
        </>
    )
}

export default NavItem