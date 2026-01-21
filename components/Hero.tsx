"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] mt-10 md:mt-0 w-full bg-[#eff6ff] overflow-hidden flex items-center">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 rounded-bl-[100px] z-0" />

            <div className="container px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6 items-start"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block"
                    >
                        <span className="bg-white px-4 py-1.5 rounded-full text-blue-600 text-xs font-bold tracking-wider shadow-sm border border-blue-100 uppercase">
                            Business Services
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-4xl md:text-5xl  lg:text-6xl font-bold text-slate-900 leading-[1.1]"
                    >
                        Boost your digital presence with <br />
                        <span className="text-slate-900">K4Consultants</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="space-y-4"
                    >
                        <p className="text-lg font-semibold text-slate-500">
                            Revolutionary Online Solutions | Strategic Brand Development | Dynamic Digital Marketing
                        </p>

                        <p className="text-slate-500 leading-relaxed max-w-xl">
                            Welcome to K4Consultants, where your vision converges with our innovation to forge digital experiences that yield impactful outcomes. As pioneers of the online landscape, we recognize that your digital impression serves as the primary introduction to your audience.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="flex flex-wrap gap-4 mt-2"
                    >
                        <Button size="lg" className="bg-[#3b82f6] cursor-pointer hover:bg-[#2563eb] text-white rounded-full px-8 h-12 text-sm font-semibold shadow-blue-200 shadow-lg">
                            OUR WORK
                        </Button>
                        <Button size="lg" variant="outline" className="border-blue-200 cursor-pointer text-blue-600 hover:bg-blue-50 rounded-full px-8 h-12 text-sm font-semibold">
                            CONTACT NOW
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Right Column: Image and Floating Elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative flex justify-center items-center"
                >
                    {/* Main Illustration */}
                    <div className="relative w-full max-w-[600px] aspect-square">
                        {/* Abstract Blue Shape Background matching screenshot */}
                        {/* <div className="absolute top-[10%] right-[-10%] w-[90%] h-[90%] bg-[#4f81ff] rounded-tl-[150px] rounded-br-[50px] rounded-bl-[50px] -z-10 opacity-90" /> */}

                        <Image
                            src="/hero.png"
                            alt="K4 Consultants Team"
                            fill
                            className="object-contain rounded-4xl" // Use contain to respect the generated image aspect ratio
                            priority
                        />

                        {/* Floating 'Business Growth' Card */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 4,
                                ease: "easeInOut"
                            }}
                            className="absolute bottom-10 left-0 bg-white p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center gap-4 max-w-[240px]"
                        >
                            <div className="bg-blue-50 p-2.5 rounded-lg">
                                <span className="text-blue-600 font-bold text-xl">15K</span>
                            </div>
                            <div className="space-y-1.5 flex-1">
                                <p className="text-xs font-bold text-slate-900">Business Growth</p>
                                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full w-[80%] bg-blue-500 rounded-full" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
