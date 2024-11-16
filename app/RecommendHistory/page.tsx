import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function page() {
    return (
      <div className="flex justify-center">
          <div className="w-96 min-h-screen bg-white p-7 overflow-x-hidden">
            <Link href={'/UserProfile'} className=" flex items-center"><ChevronLeft size={30}/><p>User Setting</p></Link>
            <div className="flex flex-col justify-center">
                <p className="text-5xl mb-2">Topic</p>
                <p>&emsp;(Bus Number)</p>
                <div className="w-full h-44 bg-zinc-300 rounded-2xl flex justify-center items-center">img</div>
                <p>Ticket Number: xx-xx</p>
                <p>DateTime: xx/xx/xx xx:xx</p>
                <div className="py-2"></div>
                <p className="text-4xl mb-2">Comment</p>
                <div className="w-full h-96 bg-zinc-300 rounded-2xl flex justify-center items-center">commend</div>
            </div>
            </div>
      </div>
    )
  }