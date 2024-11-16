import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex justify-center">
        <div className="w-96 min-h-screen p-7 bg-gradient-to-b from-[#2E073F] to-[#EBD3F8] overflow-x-hidden flex flex-col justify-center gap-4">
            <Image className="rounded-3xl" src="/logo.png" alt="map" width={1000} height={1000} />
            <h1 className="text-7xl text-center font-serif text-[#2E073F]">BUSBRO</h1>
            <div className="flex justify-center w-full">
                <Link href={'/Map'} className="w-48 h-14 flex justify-center items-center text-white text-3xl rounded-full bg-[#2E073F]">Login</Link>
            </div>
        </div>
    </div>
  );
}
