import Image from "next/image";
import HeroBg from "../public/images/herobg.png"


export default function Home() {

  return (
    <div className="">
      <div className="relative h-[700px] w-full">
      <Image className="absolute inset-0 w-full h-full object-cover from-blue-600 to-blue-400" src={HeroBg} alt="Hero Background"/>
      <div className="relative z-10 text-white p-8 my-auto h-[700px] flex flex-col justify-center items-start">
        <h1 className="text-4xl font-bold text-[50px]">Innovative Education Solution</h1>
        <p className="mt-4 text-[30px]">Empowering learning with Modern</p>
        <p className="text-[30px]">Tools and Strategies</p>
        <button className=" bg-blue-500 transition-colors border-none px-5 py-3 rounded-sm hover:bg-blue-700">Book Your Free consultaion</button>
      </div>
    </div>
    <div className="h-[500px] grid grid-cols-2">
    <div className='flex flex-1 items-center justyfy-center'>
            MOin
        </div>
    <div className='flex flex-1 items-center justyfy-center'>
        Moin
        </div>
    </div> 
    </div>
  );
}
