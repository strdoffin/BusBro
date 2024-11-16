import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
interface CarModalProps {
    closeModal: () => void;
}

const CarModal: React.FC<CarModalProps> = ({ closeModal }) => {
    const [activePage, setActivePage] = useState("driverInfo");

    const renderPageContent = () => {
        switch (activePage) {
            case "driverInfo":
                return (
                    <p>
                        คนขับ : นาย บูลีน บาสเต็ต <br />
                        Name : Boolean Bastet <br />
                        อายุ : 49 ปี <br />
                        รหัส : 6969
                    </p>
                );
            case "carCondition":
                return <p>ตรวจเช็คล่าสุด : 06/08/2068</p>;
            case "comments":
                return (
                    <div className="flex flex-col gap-2">
                        <div className="w-full bg-zinc-300 rounded-2xl p-2">
                            <p className="text-2xl">Unknown</p>
                            <p>(ความสะอาดและสภาพภายในรถ)</p>
                            <p>รถสะอาดมากค่ะ สภาพรถดีเหมือนใหม่เลยค่ะ</p>
                            <div className="flex gap-1">
                                <Star size={30} fill="#5c2075"/>
                                <Star size={30} fill="#5c2075"/>
                                <Star size={30} fill="#5c2075"/>
                                <Star size={30} fill="#5c2075"/>
                                <Star size={30} fill="#5c2075"/>
                            </div>
                        </div>
                        <div className="w-full bg-zinc-300 rounded-2xl p-2">
                            <p className="text-2xl">Unknown</p>
                            <p>(ความสะอาดและสภาพภายในรถ)</p>
                            <p>รถสะอาดมากค่ะ สภาพรถดีเหมือนใหม่เลยค่ะ</p>
                            <div className="flex gap-1">
                                <Star size={30} fill="#5c2075"/>
                                <Star size={30} fill="#5c2075"/>
                                <Star size={30} fill="#5c2075"/>
                                <Star size={30} fill="#5c2075"/>
                                <Star size={30} fill="#5c2075"/>
                            </div>
                        </div>
                        <div className="w-full bg-zinc-300 rounded-2xl p-2">
                            <p className="text-2xl">Unknown</p>
                            <p>(ความสะอาดและสภาพภายในรถ)</p>
                            <p>รถสะอาดมากค่ะ สภาพรถดีเหมือนใหม่เลยค่ะ</p>
                            <div className="flex gap-1">
                                <Star size={30} fill="#5c2075"/>
                                <Star size={30} fill="#5c2075"/>
                                <Star size={30} fill="#5c2075"/>
                                <Star size={30} fill="#5c2075"/>
                                <Star size={30} fill="#5c2075"/>
                            </div>
                        </div>
                        <div className="w-full bg-zinc-300 rounded-2xl p-2">
                            <p className="text-2xl">Unknown</p>
                            <p>(ความสะอาดและสภาพภายในรถ)</p>
                            <p>รถสะอาดมากค่ะ สภาพรถดีเหมือนใหม่เลยค่ะ</p>
                            <div className="flex gap-1">
                                <Star size={30} fill="#5c2075"/>
                                <Star size={30} fill="#5c2075"/>
                                <Star size={30} fill="#5c2075"/>
                                <Star size={30} fill="#5c2075"/>
                                <Star size={30} fill="#5c2075"/>
                            </div>
                        </div>


                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <motion.div
            className="bg-white w-96 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <h2 className="text-xl text-center mb-4">
                517 (1-26)
                <button className="relative float-end " onClick={closeModal}>
                    x
                </button>
            </h2>

            <div className="grid grid-cols-3 h-10 w-full border-2">
                <button
                    className={`flex items-center justify-center transition-transform duration-300 ${
                        activePage === "driverInfo"
                            ? "bg-gray-200 scale-105"
                            : "hover:scale-105"
                    }`}
                    onClick={() => setActivePage("driverInfo")}
                >
                    <p>ข้อมูลคนขับ</p>
                </button>
                <button
                    className={`border-x-2 flex items-center justify-center transition-transform duration-300 ${
                        activePage === "carCondition"
                            ? "bg-gray-200 scale-105"
                            : "hover:scale-105"
                    }`}
                    onClick={() => setActivePage("carCondition")}
                >
                    <p>สภาพรถ</p>
                </button>
                <button
                    className={`flex items-center justify-center transition-transform duration-300 ${
                        activePage === "comments"
                            ? "bg-gray-200 scale-105"
                            : "hover:scale-105"
                    }`}
                    onClick={() => setActivePage("comments")}
                >
                    <p>ความคิดเห็น</p>
                </button>
            </div>
            <div className="border-x-2 border-b-2 h-96 p-4 overflow-auto">
                {renderPageContent()}
            </div>
        </motion.div>
    );
};

export default CarModal;
