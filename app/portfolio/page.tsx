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
            <section className="relative rounded-b-3xl h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden mb-24">
                <Image
                    src="/our-work-bg.png"
                    alt="Portfolio Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

                <div className="relative z-10 container px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >


                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
                            Crafting Global <br />
                            <span className="text-blue-600">
                                Digital Experiences
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            From innovative educational platforms to dynamic financial services, we’ve partnered with various industry leaders to craft exceptional digital experiences.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/#contact">
                                <Button size="lg" className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white min-w-[160px] h-14 rounded-full text-base font-semibold shadow-lg shadow-blue-500/25">
                                    Contact Us
                                </Button>
                            </Link>
                            <Link href="/about">
                                <Button size="lg" variant="outline" className="cursor-pointer border-white/30 text-black hover:bg-white/10 hover:text-white min-w-[160px] h-14 rounded-full text-base font-semibold backdrop-blur-sm">
                                    About Us
                                </Button>
                            </Link>
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
