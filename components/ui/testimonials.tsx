"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"
import { motion } from "framer-motion"

interface Testimonial {
    image: string
    name: string
    username: string
    text: string
    social: string
}

interface TestimonialsProps {
    testimonials: Testimonial[]
    className?: string
    title?: string
    description?: string
    maxDisplayed?: number
}

export function Testimonials({
    testimonials,
    className,
    title = "Read what people are saying",
    description = "Dummy feedback from virtual customers using our component library.",
    maxDisplayed = 6,
}: TestimonialsProps) {
    const [showAll, setShowAll] = useState(false)

    const openInNewTab = (url: string) => {
        window.open(url, "_blank")?.focus()
    }

    return (
        <div className={className}>
            <div className="flex flex-col items-center justify-center pt-5">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex flex-col gap-5 mb-12"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wider uppercase text-center w-fit mx-auto">
                        Testimonials
                    </span>
                    <h2 className="text-center text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">{title}</h2>
                    <p className="text-center text-slate-500 max-w-2xl mx-auto">
                        {description.split("<br />").map((line, i) => (
                            <span key={i}>
                                {line}
                                {i !== description.split("<br />").length - 1 && <br />}
                            </span>
                        ))}
                    </p>
                </motion.div>
            </div>

            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className={cn(
                        "flex justify-center items-center gap-5 flex-wrap",
                        !showAll &&
                        testimonials.length > maxDisplayed &&
                        "max-h-[720px] overflow-hidden",
                    )}
                >
                    {testimonials
                        .slice(0, showAll ? undefined : maxDisplayed)
                        .map((testimonial, index) => (
                            <Card
                                key={index}
                                className="w-80 h-auto p-5 relative bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={50}
                                        height={50}
                                        className="rounded-full object-cover h-[50px] w-[50px]"
                                    />
                                    <div className="flex flex-col pl-4">
                                        <span className="font-semibold text-base text-slate-900">
                                            {testimonial.name}
                                        </span>
                                        <span className="text-sm text-slate-500">
                                            {testimonial.username}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-5 mb-5">
                                    <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                        {testimonial.text}
                                    </p>
                                </div>
                            </Card>
                        ))}
                </motion.div>

                {testimonials.length > maxDisplayed && !showAll && (
                    <>
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white to-transparent" />
                        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                            <Button variant="secondary" onClick={() => setShowAll(true)} className="bg-white border border-slate-200 shadow-sm text-slate-700 hover:bg-slate-50">
                                Load More
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
