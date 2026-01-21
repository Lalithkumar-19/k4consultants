"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Lightbulb } from "lucide-react"
import Link from "next/link"


export const About = () => {

    return (
        <section className="bg-white py-10 w-full relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 transform origin-top-right z-0" />

            <div className="container px-4 md:px-8 max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center md:items-start gap-6"
                    >
                        <div className="text-center md:text-left">
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wider uppercase mb-4">
                                Introduction of Us
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                                Why Choose <br className="hidden md:block" />
                                <span className="text-blue-600"> K4Consultants?</span>
                            </h2>
                        </div>

                        <p className="text-slate-600 text-lg leading-relaxed text-center md:text-left">
                            Because we believe in forging alliances, not just executing projects. Our collaborative methodology ensures that we walk with you at every phase, ensuring your digital strategy aligns seamlessly with your business objectives. With K4Consultants, it's not just about embracing digitalization—it's about leading the digital revolution.
                        </p>

                        <div className="pt-4">
                            <Link href="/about">
                                <Button className="rounded-full cursor-pointer px-8 h-12 w-60 bg-blue-600 hover:bg-blue-700 text-white font-semibold group">
                                    MORE ABOUT US
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Column: Mission & Vision Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Mission Card */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Target className="h-24 w-24 text-blue-600" />
                            </div>
                            <div className="flex items-start gap-4 relative z-10">
                                <div className="p-3 bg-blue-50 rounded-lg text-blue-600 shrink-0">
                                    <Target className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
                                    <p className="text-slate-500 leading-relaxed">
                                        World-class services in web design and development, branding, digital marketing, and web hosting.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Vision Card */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Lightbulb className="h-24 w-24 text-blue-600" />
                            </div>
                            <div className="flex items-start gap-4 relative z-10">
                                <div className="p-3 bg-blue-50 rounded-lg text-blue-600 shrink-0">
                                    <Lightbulb className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h3>
                                    <p className="text-slate-500 leading-relaxed">
                                        Your trusted partner for an array of web and digital services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-20 w-full bg-blue-600 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative Circles */}
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-center relative z-10">
                        <div className="col-span-1 lg:col-span-1 text-center md:text-left">
                            <h3 className="text-2xl font-bold text-white mb-2">Projects For <br /> Our Clients</h3>
                            <div className="h-1 w-12 bg-white/30 rounded-full mx-auto md:mx-0" />
                        </div>

                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-4xl md:text-5xl font-bold text-white mb-1">45+</span>
                            <span className="text-blue-100 font-medium">Projects Completed</span>
                        </div>

                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-4xl md:text-5xl font-bold text-white mb-1">15</span>
                            <span className="text-blue-100 font-medium">dedicated Employees</span>
                        </div>

                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-4xl md:text-5xl font-bold text-white mb-1">18+</span>
                            <span className="text-blue-100 font-medium">Services Offered</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
