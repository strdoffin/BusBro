"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CircleUserRoundIcon, ChevronDown, ChevronUp , ChevronLeft , ChevronRight} from "lucide-react";

export default function UserProfile() {
    const [isFAQOpen, setIsFAQOpen] = useState(false);
    const [isGuideOpen, setIsGuideOpen] = useState(false);

    const accordionVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: { height: "auto", opacity: 1 },
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-96 min-h-screen overflow-x-hidden bg-white">
                <div className=" py-6 bg-[#2E073F] text-white rounded-b-xl flex items-center flex-col mb-4">
                    <Link href={'/Map'} className="self-start ml-4 flex items-center"><ChevronLeft size={30}/><p>Map</p></Link>
                    <CircleUserRoundIcon size={64} strokeWidth={1} />
                    <h3 className="mt-2 text-xl">USERNAME</h3>
                </div>
                <div className="flex flex-col gap-4 p-2">
                    <div className="text-center p-2 rounded-xl h-44 bg-zinc-300">History</div>
                    <div className="text-center p-2 rounded-xl h-44 bg-zinc-300">Favorite</div>
                    <Link href={'/RecommendHistory'} className="text-xl font-semibold p-2 rounded-xl bg-zinc-300 flex justify-between">
                        <span>Recommend History</span><span><ChevronRight size={30}/></span>
                    </Link>

                    {/* FAQ Accordion */}
                    <div className="col-span-2 rounded-xl bg-zinc-300">
                        <button
                            className="text-2xl p-2 w-full flex justify-between items-center"
                            onClick={() => setIsFAQOpen(!isFAQOpen)}
                        >
                            <span>คำถามที่พบบ่อย</span>
                            {isFAQOpen ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
                        </button>
                        <motion.div
                            className="overflow-hidden px-2 pb-2"
                            initial="hidden"
                            animate={isFAQOpen ? "visible" : "hidden"}
                            variants={accordionVariants}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <p className="text-start text-base mt-2">
                                กหฟก่ฟหกนหฟาฟหก (Example FAQ content here)
                            </p>
                        </motion.div>
                    </div>

                    {/* Guide Accordion */}
                    <div className="col-span-2 rounded-xl bg-zinc-300">
                        <button
                            className="text-2xl p-2 w-full flex justify-between items-center"
                            onClick={() => setIsGuideOpen(!isGuideOpen)}
                        >
                            <span>วิธีใช้</span>
                            {isGuideOpen ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
                        </button>
                        <motion.div
                            className="overflow-hidden px-2 pb-2"
                            initial="hidden"
                            animate={isGuideOpen ? "visible" : "hidden"}
                            variants={accordionVariants}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <p className="text-start text-base mt-2">
                                กหฟก่ฟหกนหฟาฟหก (Example guide content here)
                            </p>
                        </motion.div>
                    </div>

                    <Link href={'/'} className="col-span-2 text-2xl p-2 rounded-xl bg-zinc-300 mb-4">
                        <p className="text-red-500">ออกจากระบบ</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
