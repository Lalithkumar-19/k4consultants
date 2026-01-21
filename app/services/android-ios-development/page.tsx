"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Contact } from "@/components/Contact"
import { WhyChooseUs } from "@/components/WhyChooseUs"

const SUB_SERVICES = [
    {
        id: "01",
        title: "Android Application Development",
        description: "We provide comprehensive Android mobile application development services tailored to your specific business requirements. Our expert developers guide clients through the journey of conceptualizing and building enterprise-grade Android applications."
    },
    {
        id: "02",
        title: "iOS Application Development",
        description: "We deliver highly functional and feature-rich iOS applications tailored to the needs of both startups and enterprises. Our team of skilled iOS app development experts excels in programming languages such as Swift, Objective-C, React Native, Flutter, and Ionic, ensuring industry-leading iOS solutions."
    }
]

export default function AndroidIosPage() {
    return (
        <main className="bg-white min-h-screen pt-2 pb-0">
            {/* Header / Breadcrumb */}
            <div className="bg-slate-50 border-y border-slate-100 py-12 mb-16">
                <div className="container px-4 md:px-8 max-w-7xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-4 font-medium uppercase tracking-wide">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-slate-500">Services</span>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-blue-600">Android & iOS Development</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 max-w-4xl mx-auto leading-tight">
                        Android & iOS Development
                    </h1>
                </div>
            </div>

            <div className="container px-4 md:px-8 max-w-7xl mx-auto mb-24">

                {/* Intro Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">
                            Mobile Solutions
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                            Welcome To Android & <span className="text-blue-600">iOS Development Services</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            At K4Consultants, we deliver top-tier iOS and Android application development services.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            Our expert developers create robust, scalable, and user-friendly mobile applications tailored to meet the unique needs of startups and enterprises.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We focus on exceptional UI/UX design and comprehensive end-to-end solutions, ensuring seamless performance and a memorable user experience across all devices.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
                            alt="Mobile App Development"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                    </motion.div>
                </section>

                {/* Sub Services Grid */}
                <section className="mb-24">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">What We Develop</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our <span className="text-blue-600">Services</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {SUB_SERVICES.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-10 font-black text-6xl text-blue-600 select-none group-hover:opacity-20 transition-opacity">
                                    {service.id}
                                </div>

                                <div className="text-4xl font-bold text-blue-600 mb-6 group-hover:scale-110 transition-transform origin-left inline-block">
                                    {service.id}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <WhyChooseUs
                    features={[
                        {
                            title: "Expert Developers",
                            content: "Our team is skilled in the latest technologies, ensuring robust and scalable mobile solutions."
                        },
                        {
                            title: "Tailored Solutions",
                            content: "We deliver customized applications designed to meet your unique business requirements."
                        },
                        {
                            title: "Exceptional UI/UX",
                            content: "We create intuitive and visually appealing designs that provide an excellent user experience across all devices"
                        },
                        {
                            title: "Comprehensive Support",
                            content: "From initial consultation to deployment and maintenance, we offer end-to-end services for seamless and effective implementation"
                        }
                    ]}
                    title={<span className="text-slate-900">Why Choose K4Consultants for Your <br /> <span className="text-blue-600">Android and iOS App Development?</span></span>}
                    imageSrc="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop"
                />

            </div>

            <Contact />
        </main>
    )
}
