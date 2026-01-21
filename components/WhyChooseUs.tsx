"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const DEFAULT_REASONS = [
    {
        title: "Customization",
        content: "We believe that every business is unique. That’s why we work closely with our clients to tailor solutions that match their specific requirements and goals."
    },
    {
        title: "Experienced Team",
        content: "Our team comprises experienced designers, developers, and digital marketing experts who are dedicated to delivering high-quality results."
    },
    {
        title: "Affordability",
        content: "We guarantee high uptime, keeping your website accessible to visitors around the clock."
    },
    {
        title: "Transparency",
        content: "We keep you in the loop throughout the development process, providing regular updates and clear communication."
    }
]

interface WhyChooseUsProps {
    features?: { title: string; content: string }[]
    imageSrc?: string
    title?: React.ReactNode
}

export const WhyChooseUs = ({
    features = DEFAULT_REASONS,
    imageSrc = "/our-work.png",
    title = <span className="text-slate-900">Why Choose Our <br /> <span className="text-blue-600">Services</span></span>
}: WhyChooseUsProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="py-24 bg-blue-50/50 w-full mt-24 rounded-3xl overflow-hidden">
            <div className="container px-4 md:px-8 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Image */}
                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={imageSrc}
                            alt="Why Choose Us"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
                    </div>

                    {/* Right Column: Content */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                {title}
                            </h2>
                        </div>

                        <div className="flex flex-col gap-4">
                            {features.map((reason, index) => {
                                const isOpen = openIndex === index
                                return (
                                    <div
                                        key={index}
                                        className={cn(
                                            "bg-white cursor-pointer rounded-xl overflow-hidden transition-all duration-300 border",
                                            isOpen ? "border-blue-200 shadow-md" : "border-transparent shadow-sm"
                                        )}
                                    >
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="cursor-pointer w-full flex items-center justify-between p-5 text-left"
                                        >
                                            <span className={cn("font-bold text-lg", isOpen ? "text-blue-600" : "text-slate-800")}>
                                                {reason.title}
                                            </span>
                                            <ChevronDown
                                                className={cn(
                                                    "w-5 h-5 text-slate-400 transition-transform duration-300",
                                                    isOpen && "rotate-180 text-blue-600"
                                                )}
                                            />
                                        </button>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed">
                                                        {reason.content}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
