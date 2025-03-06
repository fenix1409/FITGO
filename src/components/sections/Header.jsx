import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../assets/Icons'
import Button from '../ui/Button'

const Header = () => {
    const items = [
        {
            id: 1,
            title: "Home",
            href: "/"
        },
        {
            id: 2,
            title: "About",
            href: "/"
        },
        {
            id: 3,
            title: "Service",
            href: "/"
        },
        {
            id: 4,
            title: "Trainers",
            href: "/"
        },
        {
            id: 5,
            title: "Contact",
            href: "/"
        },
    ]
    return (
        <header className='py-5 flex items-center justify-between mx-[80px]'>
            <Link to={'/'}><Logo /></Link>
            <ul className='flex items-center gap-[40px]'>
                {items.map(item => (
                    <Link key={item.id} to={item.href} className='text-[14px] leading-[100%] text-white'>{item.title}</Link>
                ))}
            </ul>
            <div className="flex items-center gap-[12px]">
                <Button extraStyle={'text-white border-white bg-transparent'} title={"Log In"}/>
                <Button extraStyle={'text-[#303030] border-white bg-white !w-[111px]'} title={"Sign Up"}/>
            </div>
        </header>
    )
}

export default Header