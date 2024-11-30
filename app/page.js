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
    <div className="h-[500px] grid grid-cols-2 justify-center items-center">
    <div className='flex items-center justyfy-center '>
            <div className="flex p-10 flex-col flex-1 w-[300px] justify-center items-center border border-black-500 shadow-md">
              <div className="flex gap-10">
                <p className="font-bold text-[20px]">Choose Services</p>
                <input type="text" className="border" placeholder="Search Services" />
              </div>
              <div className="flex flex-col w-32">

                  <select>
                    <option>Default</option>
                    <option>moin</option>
                    <option>Islam</option>
                    <option>Akash</option>
                    <option>Dhaka</option>
                    <option>Bangladesh</option>
                  </select>
                <select>
                    <option >Tutoring</option>
                    <option >SAT</option>
                    <option >Math</option>
                    <option >English</option>
                </select>

              </div>
            </div>
        </div>
    <div className="flex justify-center items-center">
    <div className='flex flex-1 flex-col items-center justyfy-center shadow-md w-52'>
        <div className=" font-bold text-[20px] ">
          Booking Details
        </div>
        <ul>
          <li className="border-b border-black">Service</li>
          <li className="border-b border-black">Employee</li>
          <li className="border-b border-black">Location</li>
          <li className="border-b border-black">Date and Time</li>
        </ul>
    </div>
    </div>
    </div> 
    </div>
  );
}
