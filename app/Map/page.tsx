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
          { top: 150, left: 65 },
          { top: 250, left: -10 },
          { top: 500, left: 170 },
        ].map((position, index) => (
          <div key={index} className="relative">
            <Diamond
              size={32}
              strokeWidth={2}
              color="#5c2075"
              className="absolute cursor-pointer"
              style={{
                top: `${position.top}px`,
                left: `${position.left}px`,
              }}
              onClick={() => togglePopover(index)}
            />
            {activePopover === index && (
              <div
                className="absolute bg-white border rounded-md shadow-lg p-3"
                style={{
                  top: `${position.top + 40}px`,
                  left: `${position.left}px`,
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
