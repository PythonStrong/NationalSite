import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
        <Navbar />

        <div className='h-[80vh] flex items-center justify-center flex-col w-[100%] gap-20 select-none'>
          <h1 className='text-3xl'>Mavjud Bolmagan Saxifaga Murojat Qildingiz</h1>
          <Link href='/'>
          <button className='bg-blue-900 text-white p-3 rounded-2xl'>Bosh Saxifaga Qaytish</button>
          </Link>
        </div>
    </div>
  )
}
