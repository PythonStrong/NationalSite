import Image from 'next/image'
import React from 'react'
import logo from '../public/codehydra.png'
import { FaInstagram, FaPhoneAlt, FaTelegram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { CiLocationOn } from 'react-icons/ci'


export default function Footer() {
    return (
        <div className='pt-20 mt-20 w-[100%] text-white bg-[#021934] h-[100%] p-6'>
            <div className='w-[80%] m-auto flex items-start justify-between footer'>

                <div className='xl:w-[400px] flex gap-10 flex-col'>
                    <h1 className='font-extrabold text-3xl'>Milliy Hunar</h1>
                    <h1 className='text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat dignissimos unde vitae adipisci nostrum, ea sed reprehenderit quae maxime.</h1>
                </div>

                <div className='flex flex-col gap-4 footerPage'>
                    <h1 className='font-bold text-2xl'>Saxifalar</h1>
                    <h1 className='text-gray-300 cursor-pointer'>Bosh Saxifa</h1>
                    <h1 className='text-gray-300 cursor-pointer'>Miliy doppi</h1>
                    <h1 className='text-gray-300 cursor-pointer'>Bosh Pichoq</h1>
                </div>

                <div className='flex items-start justify-center flex-col gap-6'>
                    <h1 className='text-xl'>Ijtimioy Tarmoqlar</h1>
                    <div className='flex items-center justify-center gap-2'>
                        <div><FaTelegram size={45}/></div>
                        <div><FaInstagram size={45}/></div>
                        <div><FaWhatsapp size={45}/></div>
                        <div><FaYoutube size={45}/> </div>
                    </div>
                    <div className='flex items-center gap-3'>
                       <FaPhoneAlt size={30}/> 
                        <h1>998(90) 123 45 67</h1>
                    </div>
                    <div className='flex items-center gap-1'>
                    <div><CiLocationOn size={40}/> </div>
                        <h1>Fargona Quva Sanoatchilar</h1>
                    </div>
                </div>
            </div>

            <hr style={{ marginTop: '40px' }} />
            <div className='flex items-center gap-5 w-[80%] m-auto mt-4'>
                <h1 className='text-gray-400 font-bold cursor-pointer'>Privacy Policy</h1>
                <h1 className='text-gray-400 font-bold cursor-pointer'>Terms and Condition</h1>
            </div>
        </div>
    )
}
