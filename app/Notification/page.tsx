'use client'
import { Timer, CheckCircle, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
    // Initial state for each button, default is false (Timer icon)
    const [clickedButtons, setClickedButtons] = useState<boolean[]>(new Array(5).fill(false));

    const handleClick = (index: number) => {
        const newClickedButtons = [...clickedButtons];
        newClickedButtons[index] = !newClickedButtons[index]; // Toggle the state for the specific button
        setClickedButtons(newClickedButtons);
    };

    return (
        <div className="flex justify-center">
            <div className="w-96 min-h-screen bg-white p-7 overflow-x-hidden">
                <Link href={'/Map'} className=" flex items-center"><ChevronLeft size={30}/><p>Map</p></Link>
                <p className="text-5xl">Notification</p>
                <p className="mb-4">Bus ETA (Estimate time of arrival)</p>
                <div className="flex flex-col gap-4">
                    {Array(5)
                        .fill(null)
                        .map((_, index) => (
                            <div key={index} className="flex gap-4 items-center">
                                517
                                <div className="w-48 bg-gray-500 p-2">
                                    <p>Start</p>
                                    <p>Destination</p>
                                </div>
                                <button
                                    className="flex items-center"
                                    onClick={() => handleClick(index)} // Pass the button index to handleClick
                                >
                                    {clickedButtons[index] ? (
                                        <CheckCircle size={40} strokeWidth={1} color="#5c2075" />
                                    ) : (
                                        <Timer size={40} strokeWidth={1} color="#5c2075" />
                                    )}
                                </button>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
