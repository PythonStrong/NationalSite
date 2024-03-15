import Navbar from '@/components/Navbar'
import Image from 'next/image'
import man from '../public/man.jpg'
import Footer from '@/components/Footer'

export default function Coment() {
    return (
        <div>
            <Navbar />

            <div className='flex hero  items-center flex-col px-6 justify-center h-[80vh] xl:w-[1190px] m-auto rounded-3xl mt-36 md:mx-24'>
                <div className='relative z-50'>
                    <h1 className='text-white xl:text-[60px] md:text-[30px] sm:text-[30px] font-bold  mb-12'>Izoh Qoldirish</h1>
                    <h4 className='text-white md:text-[16px] font-semibold xl:w-[1000px] sm:text-[14px]'>Lorem ipsum dolor sit amet consectetipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, natus. Odio itaque obcaecati possimus deserunt repellat voluptas eligendi, sapiente ut aperiam inventore. situmquam rerum ea iste nemo voluptate iure harum minus unde quod.</h4>
                </div>
                <Image src={man} alt='unnamed' className='absolute z-10 brightness-50 h-[60%] xl:ml-[530px]' />
            </div>

            {/* for coments  */}
            <div className='flex items-start justify-around mt-36 mb-36 parent_comment '>
                {/* fro text and img  */}
                <div className='flex flex-col gap-20'>
                    <h1 className='text-4xl font-extrabold'>izoh Qoldirish</h1>
                    <Image src={man} alt='man' className='w-[400px]'/>
                </div>
                <div className='flex items-center justify-center flex-col gap-10 comment '>
                    <div className='flex items-center gap-[70px] inp_parent'>
                        <input type="text" placeholder='Full Name' className='p-2'/>
                        <input type="text" placeholder='Finsweet' className='p-2'/>
                    </div>
                    <input type="text" placeholder='Email' className='p-2 w-[100%]'/>
                    <textarea cols="60" rows="10" placeholder='Message'></textarea>
                    <div className='flex items-center gap-[80px] inp_parent'>
                        <div className='card'>captcha0212</div>
                        <input type="text" placeholder='Enter Capptcha' className='p-2 amazingInp' />
                    </div>
                    <button className='flex items-center justify-center bg-blue-800 w-[100%] p-3 text-white rounded-md'>Yuborish</button>
                </div>
            </div>

            <Footer />
        </div>
    )
}
