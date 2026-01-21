"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, ChevronRight } from "lucide-react"
import { Contact } from "@/components/Contact"

const SERVICES_LIST = [
    "UI UX Design",
    "Website Development",
    "Social Media Marketing",
    "eCommerce Store Development",
    "Tech Support"
]

const WHY_CHOOSE_US = [
    {
        title: "Best Quality Designs",
        description: "Exceptional designs tailored to your needs."
    },
    {
        title: "24x7 Live Support",
        description: "Dedicated support whenever you need it."
    },
    {
        title: "Result-Oriented Projects",
        description: "Our focus is on achieving your desired outcomes."
    },
    {
        title: "Award-Winning Support Team",
        description: "Expert assistance to guide you through."
    },
    {
        title: "Best ROI Techniques",
        description: "Strategies aimed at maximizing your return on investment."
    },
    {
        title: "Experienced Professionals",
        description: "Seasoned experts dedicated to your success."
    }
]

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen pt-4 pb-20">
            {/* Header / Breadcrumb */}
            <div className="bg-slate-50 border-y border-slate-100 py-12 mb-16">
                <div className="container px-4 md:px-8 max-w-7xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-4 font-medium uppercase tracking-wide">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-blue-600">About</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900">About Us</h1>
                </div>
            </div>

            <div className="container px-4 md:px-8 max-w-7xl mx-auto space-y-24">

                {/* Introduction Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
                            alt="Team working together"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >
                        <div>
                            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Who Are We?</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Welcome to <span className="font-semibold text-slate-900">K4Consultants</span>, your trusted partner for an array of web and digital services.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                We specialize in delivering world-class services in web design and development, branding, digital marketing, and web hosting. Our mission is to empower businesses with innovative digital solutions that drive growth and success.
                            </p>
                        </div>

                        {/* What We Do List */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mt-4">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">What We Do</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {SERVICES_LIST.map((service, index) => (
                                    <li key={index} className="flex items-center gap-2 text-slate-700 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </section>

                {/* Why Choose Us Section */}
                <section>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Value Proposition</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Our <span className="text-blue-600">Services</span></h2>
                        <p className="text-slate-600 text-lg">We create experiences that are attractive, simple to use, and drive results for your company.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {WHY_CHOOSE_US.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>
            <Contact />
        </main>
    )
}
