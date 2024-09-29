import Image from "next/image";
import { TbWorld } from "react-icons/tb";
import { GoPersonFill } from "react-icons/go";
import { IoReorderThreeSharp } from "react-icons/io5";

export default function Navbar() {
    return (
        <div>
            <div className="flex flex-row justify-between items-center">
                <Image src = "https://shorturl.at/RsAFZ" alt = "airbnb-logo" height={110} width={110}/>


                <div className="flex flex-row items-center space-x-6">
                    <div className=" border border-transparent hover:bg-gray-500 p-2 rounded-xl" >
                        <h1 className="text-gray-500 hover:text-white "> Stays </h1>
                    </div>
                    <div className=" border border-transparent hover:bg-gray-500 p-2 rounded-xl" >
                        <h1 className="text-gray-500 hover:text-white "> Experiences </h1>
                    </div>
                    
                </div>

                
                <div className="flex flex-row items-center space-x-5">
                    <div className="border border-transparent hover:bg-gray-500 p-2 rounded-xl">
                        <h1 > Airbnb your home </h1>
                    </div>
                    <TbWorld  className="h-7 w-7" />
                    <div className="flex flex-row items-center space-x-2 border rounded-3xl h-14 w-20 p-1">
                        <IoReorderThreeSharp  className="h-7 w-7" />

                        <GoPersonFill  className="h-7 w-7" />   
                    </div>
                </div>
            </div>
        </div>
    )
}