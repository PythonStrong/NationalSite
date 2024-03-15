import Image from 'next/image'
import React from 'react'
import knife from '../public/knife.jpg'
import Card from './Card'

export default function ThirdMain() {
    return (
        <div>
            <div className="xl:px-[100px] mt-40">
                <div className="flex items-end justify-between mb-10">
                    <div>
                        <h1 className="font-bold text-[32px]">Ishlardan Namunalar</h1>
                    </div>
                </div>

                {/* fro yangiliklar  */}
                <div className="flex items-center justify-between flex-wrap news">
                    <Card inforMax={'Interpersonal Skills - Work Better With Others!'} inforMin={'Tanah Air Team'} ShowBtn={"Ko'rish"} image={knife} />
                    <Card inforMax={'Interpersonal Skills - Work Better With Others!'} inforMin={'Tanah Air Team'} ShowBtn={"Ko'rish"} image={knife} />
                    <Card inforMax={'Interpersonal Skills - Work Better With Others!'} inforMin={'Tanah Air Team'} ShowBtn={"Ko'rish"} image={knife} />
                </div>

                {/* for yangiliklar 2  */}
                <div className="flex items-center justify-between flex-wrap news mt-20">
                    <Card inforMax={'Interpersonal Skills - Work Better With Others!'} inforMin={'Tanah Air Team'} ShowBtn={"Ko'rish"} image={knife} />
                    <Card inforMax={'Interpersonal Skills - Work Better With Others!'} inforMin={'Tanah Air Team'} ShowBtn={"Ko'rish"} image={knife} />
                    <Card inforMax={'Interpersonal Skills - Work Better With Others!'} inforMin={'Tanah Air Team'} ShowBtn={"Ko'rish"} image={knife} />
                </div>
            </div>
        </div>
    )
}
