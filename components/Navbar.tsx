import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '../public/codehydra.png'
import Link from 'next/link'

export default function Navbar() {
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(!show)
    const handleHide = () => setShow(false)
    const [isSticky, setIsStciky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsStciky(true)
            }
            else {
                setIsStciky(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.addEventListener('scroll', handleScroll)
        }
    })

    return (
        <div className={`flex fixed w-[100%] h-[80px] z-[999] top-0 items-center base: px-4 justify-between md:px-28  ${isSticky ? "bg-[#021934] duration-400" : ""}`}>
            <Image src={logo} alt='logo' className='w-[60px] h-[50px] rounded-full' />

            <div className='navbar flex items-center justify-center gap-16 font-semibold'>
                <Link href='/' className={`nav_link ${isSticky ? 'text-white' : ''}`}>Bosh Saxifa <span></span></Link>
                <Link href='/Second' className={`nav_link ${isSticky ? 'text-white' : ''}`}>Milliy Do'ppi <span></span></Link>
                <Link href='/Third' className={`nav_link ${isSticky ? 'text-white' : ''}`}>Milliy Pichoq <span></span></Link>
            </div>

            <div className='flex items-center justify-center gap-5'>
                <Link href='/Login'><button className={`flex items-center ${isSticky ? 'text-white' : 'text-sky-500'} justify-center hover:bg-sky-500 hover:text-white duration-300 border-2 border-sky-500 w-[70px] p-1 rounded-lg text-sky-500`}>Kirish</button></Link>
                <Link href='/Sign'><button className='flex items-center justify-center bg-sky-500 p-1.5 rounded-lg text-white'>Ro'yhatdan O'tish</button></Link>
            </div>

            {/* for mobile menu  */}
            <div className='md:hidden flex items-center justify-center flex-col gap-1 cursor-pointer' onClick={handleShow}>
                <div className={`${isSticky ? 'w-6 h-1 bg-white' : 'w-6 h-1 bg-black'}`}></div>
                <div className={`${isSticky ? 'w-5 h-1 bg-white' : 'w-5 h-1 bg-black'}`}></div>
                <div className={`${isSticky ? 'w-6 h-1 bg-white' : 'w-6 h-1 bg-black'}`}></div>
            </div>

            {show ? <div className='fixed top-0 left-0  w-full h-full hero flex flex-col justify-center items-center gap-10 z-[999]'>
                <div className='flex items-center justify-center gap-4 absolute top-6 left-6 cursor-pointer' onClick={handleHide}>
                    <Image src={logo} alt='logo' className='w-[120px] h-[70px] rounded-3xl' />
                </div>
                <div className='flex items-center justify-center gap-4 absolute top-10 right-8 cursor-pointer' onClick={handleHide}>
                    <div className='bg-white h-6 rotate-45 w-1'></div>
                    <div className='bg-white h-6 rotate-[-50deg] absolute w-1'></div>
                </div>
                <div className='flex items-center justify-center gap-16 font-semibold flex-col'>
                    <Link href='/' className='text-3xl text-white'>Bosh Saxifa</Link>
                    <Link href='/Second' className='text-3xl text-white'>Milliy Do'ppi</Link>
                    <Link href='/Third' className='text-3xl text-white'>Milliy Pichoq</Link>
                </div>
            </div> : ''}
        </div>
    )
}
