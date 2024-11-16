'use client'
import SearchBar from "@/components/SearchBar";
import Car from "@/components/Car";
import { Diamond, MapPin } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [activePopover, setActivePopover] = useState<number | null>(null);
  const [activeMapPinPopover, setActiveMapPinPopover] = useState<boolean>(false);

  const togglePopover = (index: number) => {
    setActivePopover(activePopover === index ? null : index);
  };

  const toggleMapPinPopover = () => {
    setActiveMapPinPopover(!activeMapPinPopover);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-96 min-h-screen bg-[url('/map.png')] p-7 overflow-x-hidden relative">
        <SearchBar />
        <Car />
        
        <MapPin
          size={32}
          strokeWidth={2}
          color="#5c2075"
          className="relative top-[270px] left-[170px] cursor-pointer"
          onClick={toggleMapPinPopover}
        />
        {activeMapPinPopover && (
          <div
            className="absolute bg-white border rounded-md shadow-lg p-3"
            style={{
              top: "calc(390px + 32px)",
              left: "170px",
            }}
          >
            <p className="text-center">คุณอยู่ที่นี่</p>
          </div>
        )}

        {[ 
          { top: "175px", left: "65px" },
          { top: "250px", left: "-10px" },
          { top: "500px", left: "170px" },
        ].map((position, index) => (
          <div key={index} className="relative">
            <Diamond
              size={32}
              strokeWidth={2}
              color="#5c2075"
              className={`absolute top-[${position.top}] left-[${position.left}] cursor-pointer`}
              onClick={() => togglePopover(index)}
            />
            {activePopover === index && (
              <div
                className="absolute bg-white border rounded-md shadow-lg p-3 "
                style={{
                  top: `calc(${position.top} + 40px)`,
                  left: position.left,
                }}
              >
                <p>ป้ายบ้าน x {index + 1}</p>
                <p>ห่างจากคุณ x เมตร(xนาที)</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
