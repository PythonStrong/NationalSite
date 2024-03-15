import Image from 'next/image'
import React from 'react'

export default function Card({image, inforMax, inforMin, ShowBtn}) {
    return (
        <div>
            <div className="w-[350px] shadow">
                <Image src={image} alt="uzbekitsan" className="rounded-t-2xl" />
                <button className="top-28 left-[110px] hidden  absolute justify-center bg-blue-500 w-[120px] p-2 text-white rounded-lg btn">{ShowBtn}</button>
                <h1 className="text-[22px] font-bold mb-7 mt-6">{inforMax}</h1>
                <h1 className="text-red-600 font-semibold ">{inforMin}</h1>
            </div>
        </div>
    )
}
