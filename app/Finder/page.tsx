"use client";
import { ChevronLeft, MapPinned, Locate } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
    const [fromLocation, setFromLocation] = useState<string | null>(null);
    const [toLocation, setToLocation] = useState<string | null>(null);

    const handleFromChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFromLocation(e.target.value);
    };

    const handleToChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setToLocation(e.target.value);
    };

    return (
        <div className="flex justify-center text-black">
            <div className="w-96 min-h-screen bg-white p-7 overflow-x-hidden">
                <Link href={"/Map"} className="flex items-center">
                    <ChevronLeft size={30} />
                    <p>Map</p>
                </Link>
                <p className="text-4xl text-center mb-4">ค้นหาเส้นทาง</p>

                {/* From Location Dropdown */}
                <div className="flex items-center gap-2 mb-2">
                    <MapPinned size={20} strokeWidth={1} />
                    <div className="w-full h-8 border-2 rounded-xl p-1">
                        <select
                            value={fromLocation || ""}
                            onChange={handleFromChange}
                            className="w-full h-full bg-white border-none p-2 rounded-xl"
                        >
                            <option value="" disabled>
                                จาก เลือกตำแหน่ง
                            </option>
                            <option value="Boolean Bastet">Boolean Bastet</option>
                            <option value="Memory Montu">Memory Montu</option>
                            <option value="Driver Dedun">Driver Dedun</option>
                        </select>
                    </div>
                </div>

                {/* To Location Dropdown */}
                <div className="flex items-center gap-2 mb-4">
                    <Locate size={20} strokeWidth={1} />
                    <div className="w-full h-8 border-2 rounded-xl p-1">
                        <select
                            value={toLocation || ""}
                            onChange={handleToChange}
                            className="w-full h-full bg-white border-none p-2 rounded-xl"
                        >
                            <option value="" disabled>
                                ถึง พิมพ์สถานที่ที่ต้องการ
                            </option>
                            <option value="KMITL">KMITL</option>
                        </select>
                    </div>
                </div>

                {/* Display selected values */}
                {(fromLocation || toLocation) && (
                    <div className="bg-gray-100 p-4 rounded-xl mb-4">
                        <h3 className="font-medium mb-2">Selected Route:</h3>
                        {fromLocation && (
                            <p className="mb-1">
                                <span className="font-medium">From:</span> {fromLocation}
                            </p>
                        )}
                        {toLocation && (
                            <p>
                                <span className="font-medium">To:</span> {toLocation}
                            </p>
                        )}
                    </div>
                )}

                {/* Display images based on selected dropdown values */}
                {fromLocation && toLocation && (
                    <div>
                        <div className="mt-5 w-full bg-zinc-300 rounded-2xl flex justify-center items-center">
                            <Image
                                src="/route5.png"
                                className="rounded-2xl"
                                alt="map"
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="mt-5 w-full bg-zinc-300 rounded-2xl flex justify-center items-center">
                            <Image
                                src="/route4.png"
                                className="rounded-2xl"
                                alt="map"
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="mt-5 w-full bg-zinc-300 rounded-2xl flex justify-center items-center">
                            <Image
                                src="/route3.png"
                                className="rounded-2xl"
                                alt="map"
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="mt-5 w-full bg-zinc-300 rounded-2xl flex justify-center items-center">
                            <Image
                                src="/route2.png"
                                className="rounded-2xl"
                                alt="map"
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="mt-5 w-full bg-zinc-300 rounded-2xl flex justify-center items-center">
                            <Image
                                src="/route.png"
                                className="rounded-2xl"
                                alt="map"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}