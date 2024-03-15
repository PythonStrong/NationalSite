import Image from "next/image";
import duppi from '../public/duppi.jpg'
import Card from "./Card";

export default function SecondMain() {
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
                    <Card inforMax={'Interpersonal and National Skills - Work Better then With Others!'} inforMin={'Tanah Air Team'} ShowBtn={"Ko'rish"} image={duppi} />
                    <Card inforMax={'Interpersonal and National Skills - Work Better then With Others!'} inforMin={'Tanah Air Team'} ShowBtn={"Ko'rish"} image={duppi} />
                    <Card inforMax={'Interpersonal and National Skills - Work Better then With Others!'} inforMin={'Tanah Air Team'} ShowBtn={"Ko'rish"} image={duppi} />
                </div>

                {/* for yangiliklar 2  */}
                <div className="flex items-center justify-between flex-wrap news mt-20">
                    <Card inforMax={'Interpersonal and National Skills - Work Better then With Others!'} inforMin={'Tanah Air Team'} ShowBtn={"Ko'rish"} image={duppi} />
                    <Card inforMax={'Interpersonal and National Skills - Work Better then With Others!'} inforMin={'Tanah Air Team'} ShowBtn={"Ko'rish"} image={duppi} />
                    <Card inforMax={'Interpersonal and National Skills - Work Better then With Others!'} inforMin={'Tanah Air Team'} ShowBtn={"Ko'rish"} image={duppi} />
                </div>
            </div>
        </div>
    )
}
