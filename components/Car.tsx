"use client";
import React, { useEffect, useState } from "react";
import CarModal from "./CarModal";

export default function Car() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Trigger the animation when the page loads
      setIsVisible(true);
    }, []);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            <div
                onClick={toggleModal}
                className={`flex items-center absolute top-[440px] cursor-pointer transition-all duration-[2000ms] ease-out ${
                    isVisible ? "left-10" : "left-[20rem]"
                }`}
            >
                <span className="text-2xl scale-x-[-1]">&#9655;</span>
                <div className="w-12 text-center bg-[#5c2075] text-white border-2 p-1 rounded-lg">
                    517
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                    <CarModal closeModal={toggleModal} />
                </div>
            )}
        </div>
    );
}
