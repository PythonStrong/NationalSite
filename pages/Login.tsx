import Image from 'next/image'
import React, { useState } from 'react'
import login from '../public/login.jpg'

export default function Login() {
  const [show, setShow] = useState(true)

  const HideBtn = () => {
    setShow(false)
  }
  return (
    <div>

      <div className='flex hero  items-center flex-col px-6 justify-center h-[80vh] xl:w-[1190px] m-auto rounded-3xl mt-10 md:mx-24'>
        <div className='relative z-50'>
          <h1 className='text-white xl:text-[60px] md:text-[30px] sm:text-[30px] font-bold  mb-20'>Tizimga Kirish</h1>
          <h4 className='text-white md:text-[16px] font-semibold xl:w-[1000px] sm:text-[14px]'>Lorem ipsum dolor sit amet consectetipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, natus. Odio itaque obcaecati possimus deserunt repellat voluptas eligendi, sapiente ut aperiam inventore. situmquam rerum ea iste nemo voluptate iure harum minus unde quod.</h4>
        </div>
        <Image src={login} alt='unnamed' className='absolute z-10 brightness-50 h-[60%] xl:ml-[530px] w-[40%]' />
      </div>

      {/* for login  */}
      <div className='flex items-center justify-center flex-col sign gap-14 w-[500px] m-auto mt-40 mb-40 '>
        <h1 className='text-4xl font-extrabold'>Tizimga Kirish</h1>
        <input type="text" placeholder='Email' className='p-2 inp w-[100%]' />
        <div className='flex items-center justify-center w-[100%]' style={{ border: '2px solid gray' }}>

           <input type={show ? 'password' : 'text'}placeholder='Parol' className='p-2 other_inp w-[100%]' />
            
          {show ? <button className='flex items-center bg-gray-500 text-white h-[40px] p-2' onClick={HideBtn}>Show</button>
            : <button className='flex items-center bg-gray-500 text-white h-[40px] p-2' onClick={() => setShow(true)}>Hide</button>}

        </div>
        <div className='flex items-center gap-[80px] inp_parent'>
          <div className='card'>captcha0212</div>
          <input type="text" placeholder='Enter Capptcha' className='p-2 amazingInp' />
        </div>
        <button className='flex items-center justify-center bg-blue-800 w-[100%] p-3 text-white rounded-md'>Ro'yhatdan O'tish</button>
      </div>

    </div>
  )
}
