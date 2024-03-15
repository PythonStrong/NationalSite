import Image from 'next/image'
import React from 'react'
import unnamed from '../public/unnamed.jpg'
import man from '../public/man.jpg'

export default function Hero() {
    return (
        <div >
            {/* for texts  */}
            <div className='flex hero  items-center flex-col px-6 justify-center h-[80vh] xl:w-[1190px] m-auto rounded-3xl mt-36 md:mx-24'>
                <div className='relative z-50 flex items-center'>
                    <h1 className='absolute z-[-1] vertical_text text-[100px] text-gray-600 select-none '>Uzbekistan</h1>
                    <div>
                        <h1 className='text-white xl:text-[60px] md:text-[30px] sm:text-[30px] font-bold  mb-12'>Milliy madaniyat va <br /> hunarmandchilik</h1>
                        <h4 className='text-white md:text-[16px] font-semibold xl:w-[1000px] sm:text-[14px]'>Lorem ipsum dolor sit amet consectetipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, natus. Odio itaque obcaecati possimus deserunt repellat voluptas eligendi, sapiente ut aperiam inventore. situmquam rerum ea iste nemo voluptate iure harum minus unde quod.</h4>
                    </div>
                </div>
                <Image src={man} alt='unnamed' className='absolute z-10 brightness-50 h-[60%] xl:ml-[530px]' />
            </div>


            {/* for map and texts  */}
            <div className='flex  justify-around mt-24 map'>
                <Image src={unnamed} alt='map' className='rounded-2xl cursor-pointer flip_img' />

                <div className='xl:h-96 bg-gray-400 w-0.5'></div>

                <div className='flex  flex-col xl:w-[500px] gap-6'>
                    <h1 className='text-2xl font-bold'>Chust Shaxri Haqida</h1>
                    <h1 className='text-gray-400'>Lorem ipsum dolor sit amet consectetdsahsyyubs jdhfuhyuyurb hfuyurbhubd fdbausugfvuh jsdnuhyubhs ndbhyberhefnui hjbdfgyuygsat7vquurint ut doloremque eaque unde harum autem veniam, pariatur temporibus quaerat, adipisci blanditiis veritatis obcaecati praesentium repellat nisi rem sit atque ad. Quas earum libero cupiditate deleniti molestias et perspiciatis esse delectus atque eos, vel ab magni expedita tempora quae distinctio, nam facere.</h1>
                    <button className='flex items-center justify-center bg-blue-600 w-24 p-2 rounded-xl text-white'>Batafsil</button>
                </div>
            </div>

        </div>
    )
}
