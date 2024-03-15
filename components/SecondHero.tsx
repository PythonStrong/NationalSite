import Image from 'next/image'
import React from 'react'
import duppi from '../public/duppi.jpg'

export default function SecondHero() {
  return (
    <div >
      {/* for texts  */}
      <div className='flex hero  items-center flex-col px-6 justify-center h-[80vh] xl:w-[1190px] m-auto rounded-3xl mt-36 md:mx-24'>
        <div className='relative z-50'>
          <h1 className='text-white xl:text-[60px] md:text-[30px] sm:text-[30px] font-bold  mb-12'>Chust milliy <br /> do'ppisi</h1>
          <h4 className='text-white md:text-[16px] font-semibold xl:w-[1000px] sm:text-[14px]'>Lorem ipsum dolor sit amet consectetipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, natus. Odio itaque obcaecati possimus deserunt repellat voluptas eligendi, sapiente ut aperiam inventore. situmquam rerum ea iste nemo voluptate iure harum minus unde quod.</h4>
        </div>
        <Image src={duppi} alt='unnamed' className='absolute z-10 brightness-50 h-[60%] xl:ml-[530px]' />
      </div>


      {/* for map and texts  */}
      <div className='flex  justify-around mt-24 map'>
        <div className='flex  flex-col xl:w-[500px] gap-6'>
          <h1 className='text-2xl font-bold'>Chust Do'ppisi Haqida</h1>
          <h1 className='text-gray-400'>Lorem ipsum dolor sit amet consectetdsahsyyubs jdhfuhyuyurb hfuyurbhubd fdbausugfvuh jsdnuhyubhs ndbhyberhefnui hjbdfgyuygsat7vquurint ut doloremque eaque unde harum autem veniam, pariatur temporibus quaerat, adipisci blanditiis veritatis obcaecati praesentium repellat nisi rem sit atque ad. Quas earum libero cupiditate deleniti molestias et perspiciatis esse delectus atque eos, vel ab magni expedita tempora quae distinctio, nam facere.</h1>
          <button className='flex items-center justify-center bg-blue-600 w-24 p-2 rounded-xl text-white'>Batafsil</button>
        </div>


        <Image src={duppi} alt='map' className='rounded-2xl cursor-pointer brightness-75 flip_img' />
      </div>

    </div>
  )
}
