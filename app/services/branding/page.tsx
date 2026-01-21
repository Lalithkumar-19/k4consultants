"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Contact } from "@/components/Contact"

const SUB_SERVICES = [
    {
        id: "01",
        title: "Logo & Brand Identity",
        description: "Enhance your brand’s impact through our specialized design solutions. In today’s competitive business landscape, a unique logo and cohesive brand identity are paramount, transcending mere visual appeal. They serve as a compelling narrative, conveying your brand’s essence, values, and aspirations."
    },
    {
        id: "02",
        title: "Graphic Design",
        description: "In the realm of business, graphic design is more than just aesthetics; it’s a communication tool that bridges your brand with your audience. Our graphic design services are dedicated to creating visually stunning and strategically crafted designs that convey your message, embody your brand values, and resonate with your target audience."
    },
    {
        id: "03",
        title: "Videos",
        description: "In the dynamic world of digital content, animation stands out as a powerful storytelling tool. Our video production services specialize in 2D animation, 3D animation, and whiteboard animation, each offering unique ways to engage your audience. Whether you're simplifying a complex idea or creating an immersive experience, our animations are designed to captivate, inform, and inspire."
    },
    {
        id: "04",
        title: "Print design",
        description: "Brand Engagement: Use engaging content to increase your brand's social media presence. Targeted Campaigns: Use clever campaigns on all the main social media channels to identify your target audience. Community Building: By maintaining a regular and active social media presence, you can cultivate a devoted following around your brand."
    }
]

export default function BrandingPage() {
    return (
        <main className="bg-white min-h-screen pt-4 pb-0">
            {/* Header / Breadcrumb */}
            <div className="bg-slate-50 border-y border-slate-100 py-12 mb-16">
                <div className="container px-4 md:px-8 max-w-7xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-4 font-medium uppercase tracking-wide">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-slate-500">Services</span>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-blue-600">Branding</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 max-w-4xl mx-auto leading-tight">
                        Branding
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
                            Our Expertise
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                            Crafting Identities That <span className="text-blue-600">Resonate and Endure</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            At <span className="font-semibold text-slate-900">K4Consultants</span>, we believe branding is more than a logo and color scheme. It’s about creating a unique identity that attracts people and lasts.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Our branding services are designed to create a consistent image that expresses your company’s values and creates a deeper connection with your audience.
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
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                            alt="Branding and Design"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                    </motion.div>
                </section>

                {/* Sub Services Grid */}
                <section>
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">What We Offer</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Comprehensive <span className="text-blue-600">Brand Strategy</span></h2>
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

            </div>

            <Contact />
        </main>
    )
}
