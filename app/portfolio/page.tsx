"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MapPin, ArrowUpRight } from "lucide-react"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { Button } from "@/components/ui/button"
import { Contact } from "@/components/Contact"

const PROJECTS = [
    {
        id: 1,
        title: "EdTech Learning Platform",
        location: "New York, USA",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
        category: "Education",
        link: "#"
    },
    {
        id: 2,
        title: "FinTech Banking App",
        location: "London, UK",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
        category: "Finance",
        link: "#"
    },
    {
        id: 3,
        title: "Healthcare Patient Portal",
        location: "Toronto, Canada",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        category: "Healthcare",
        link: "#"
    },
    {
        id: 4,
        title: "Real Estate Analytics",
        location: "Dubai, UAE",
        image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=2069&auto=format&fit=crop",
        category: "Real Estate",
        link: "#"
    },
    {
        id: 5,
        title: "E-Commerce Fashion Store",
        location: "Sydney, Australia",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
        category: "E-Commerce",
        link: "#"
    },
    {
        id: 6,
        title: "Social Networking App",
        location: "San Francisco, USA",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
        category: "Social Media",
        link: "#"
    }
]

export default function PortfolioPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Disclaimer: Removed pt-32 to allow full width hero */}

            {/* New Hero Section */}
            <section className="relative min-h-[90vh] mt-10 md:mt-0 w-full bg-[#eff6ff] overflow-hidden flex items-center mb-24 rounded-b-[50px]">
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
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1]"
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
                            <Link href="/">
                                <Button size="lg" className="bg-[#3b82f6] cursor-pointer hover:bg-[#2563eb] text-white rounded-full px-8 h-12 text-sm font-semibold shadow-blue-200 shadow-lg">
                                    OUR WORK
                                </Button>
                            </Link>

                            <Link href="/contact">
                                <Button size="lg" variant="outline" className="border-blue-200 cursor-pointer text-blue-600 hover:bg-blue-50 rounded-full px-8 h-12 text-sm font-semibold">
                                    CONTACT NOW
                                </Button>
                            </Link>
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
                            <Image
                                src="/hero.png"
                                alt="K4 Consultants Team"
                                fill
                                className="object-contain rounded-4xl"
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

            <div className="container px-4 md:px-8 max-w-7xl mx-auto pb-24">
                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 max-w-6xl mx-auto">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${index % 2 === 1 ? "md:mt-32" : ""}`}
                        >
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block cursor-pointer group">
                                {/* Image Container */}
                                <div className="relative overflow-hidden rounded-3xl aspect-16/10 mb-8 shadow-2xl shadow-slate-200 group-hover:shadow-blue-200/50 transition-all duration-500 ring-1 ring-slate-100">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
                                </div>

                                {/* Content Below */}
                                <div className="flex flex-col gap-3 px-2">
                                    <h3 className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-slate-700 font-medium">
                                            {project.location}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12 cursor-pointer">
                    <span className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                        And Many More ....
                        <ArrowUpRight className="w-4 h-4" />
                    </span>
                </div>

                <WhyChooseUs />
                <Contact />
            </div>
        </main>
    )
}
