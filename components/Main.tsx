import Image from "next/image";
import uzbekistan from "../public/uzbekistan.jpg";
import { avatar } from "@/public";


export default function Main() {

  return (
    <div className="xl:px-[100px] mt-40">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h1 className="font-bold text-[32px]">Our Most popular Hotels</h1>
          <h1 className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            consequatur!
          </h1>
        </div>
        <button className="bg-blue-800 p-2 rounded-lg text-white">
          Barchasi
        </button>
      </div>

      {/* fro yangiliklar  */}
      <div className="flex items-center justify-between flex-wrap news">
        {/* 1 */}
        <div className="w-[300px] shadow">
          <Image src={uzbekistan} alt="uzbekitsan" className="rounded-t-2xl" />
          <h1 className="text-red-600 font-semibold">
            Uzbekistan, Farg'na Quva
          </h1>
          <h1 className="text-[20px] font-bold">Vatanparvarlik Bog'i</h1>
          <h1 className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, saepe..</h1>
          <h1 className="p-2 text-blue-500 cursor-pointer">Yana...</h1>
        </div>
        {/* 2 */}
        <div className="w-[300px] shadow">
          <Image src={uzbekistan} alt="uzbekitsan" className="rounded-t-2xl" />
          <h1 className="text-red-600 font-semibold">
            Uzbekistan, Farg'na Quva
          </h1>
          <h1 className="text-[20px] font-bold">Vatanparvarlik Bog'i</h1>
          <h1 className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, saepe..</h1>
          <h1 className="p-2 text-blue-500 cursor-pointer">Yana...</h1>
        </div>
        {/* 3 */}
        <div className="w-[300px] shadow">
          <Image src={uzbekistan} alt="uzbekitsan" className="rounded-t-2xl" />
          <h1 className="text-red-600 font-semibold">
            Uzbekistan, Farg'na Quva
          </h1>
          <h1 className="text-[20px] font-bold">Vatanparvarlik Bog'i</h1>
          <h1 className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, saepe..</h1>
          <h1 className="p-2 text-blue-500 cursor-pointer">Yana...</h1>
        </div>
        {/* 4 */}
        <div className="w-[300px] shadow">
          <Image src={uzbekistan} alt="uzbekitsan" className="rounded-t-2xl" />
          <h1 className="text-red-600 font-semibold">
            Uzbekistan, Farg'na Quva
          </h1>
          <h1 className="text-[20px] font-bold">Vatanparvarlik Bog'i</h1>
          <h1 className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, saepe..</h1>
          <h1 className="p-2 text-blue-500 cursor-pointer">Yana...</h1>
        </div>
      </div>

      {/* for swipper  */}
      <div className="mt-20">
        <h1 className="text-4xl text-center font-bold mb-14">
          Foydalanuvchilar Izholari
        </h1>
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-start justify-start flex-col bg-gray-400 p-5 rounded-2xl w-[400px]">
            <div className="flex items-center justify- w-[100%] gap-2 mb-4">
              <Image src={avatar} alt="avatar" />
              <h1 className="font-bold text-xl">Mark Edison</h1>
            </div>
            <h1 className="text-start text-gray-700">Lorem ipsum dolor sit amet consectetur, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, quo? elit. Aliquid fugiat officiis blanditiis et nam cum quis obcaecati laboriosam similique quasi.</h1>
          </div>
          <div className="flex items-start justify-start flex-col bg-gray-400 p-5 rounded-2xl w-[400px]">
            <div className="flex items-center justify- w-[100%] gap-2 mb-4">
              <Image src={avatar} alt="avatar" />
              <h1 className="font-bold text-xl">Mark Edison</h1>
            </div>
            <h1 className="text-start text-gray-700">Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, illo. elit. Aliquid fugiat officiis blanditiis et nam cum quis obcaecati laboriosam similique quasi.</h1>
          </div>
          <div className="flex items-start justify-start flex-col bg-gray-400 p-5 rounded-2xl w-[400px]">
            <div className="flex items-center justify- w-[100%] gap-2 mb-4">
              <Image src={avatar} alt="avatar" />
              <h1 className="font-bold text-xl">Mark Edison</h1>
            </div>
            <h1 className="text-start text-gray-700">Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur? elit. Aliquid fugiat officiis blanditiis et nam cum quis obcaecati laboriosam similique quasi.</h1>
          </div>
        </div>


      </div>
    </div>
  );
}
