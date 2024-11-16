import Link from "next/link";
import { CircleUserRound , ChevronLeft, BellRing} from "lucide-react";
export default function SearchBar() {
  return (
    <div>
        <div className="flex gap-2">
            <Link href={'/'} className="flex items-center"><ChevronLeft size={30}/></Link>
            <Link href={'/Finder'} className="w-full bg-white rounded-xl border-2 p-2 flex items-center text-gray-400" aria-label="Search">ค้นหาปลายทาง....</Link>
            <Link href={'/UserProfile'} className='w-16 aspect-square rounded-full bg-white border-2 justify-center items-center flex'><CircleUserRound size={40} color="#5c2075"/></Link>
        </div>
        <Link href={'/Notification'} className="flex justify-end p-2"><BellRing color="#5c2075" size={30}/></Link>
    </div>
  )
}
