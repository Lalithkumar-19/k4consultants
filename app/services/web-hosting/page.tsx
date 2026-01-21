"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Contact } from "@/components/Contact"
import { WhyChooseUs } from "@/components/WhyChooseUs"

const HOSTING_PLANS = [
    {
        title: "Linux Hosting",
        description: "Ideal for those who prefer a Linux environment, offering stability, security, and flexibility with cPanel for easy management."
    },
    {
        title: "Reseller Hosting",
        description: "Perfect for web developers or agencies looking to offer hosting services to their clients. Our reseller plans come with customizable packages and white-label options."
    },
    {
        title: "WordPress Hosting",
        description: "Specially optimized for WordPress websites, ensuring faster load times, enhanced security, and easy management with one-click installations."
    },
    {
        title: "Windows Hosting",
        description: "Tailored for those who require a Windows-based hosting environment, supporting technologies like ASP.NET and MSSQL."
    }
]



export default function WebHostingPage() {
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
                        <span className="text-blue-600">Web Hosting</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 max-w-4xl mx-auto leading-tight">
                        Web Hosting
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
                            Our Solutions
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                            Dependable Hosting Options for <span className="text-blue-600">Any Situation</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            In the digital era, a robust web hosting service is the backbone of any successful online presence.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Our web hosting solutions cater to a variety of needs, whether you’re running a personal blog, a bustling e-commerce site, or managing clients’ websites. With our Linux, Reseller, WordPress, and Windows hosting options, we ensure that your website is fast, secure, and consistently online.
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
                            src="/server-room.png"
                            alt="Server Room Web Hosting"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                    </motion.div>
                </section>

                {/* Hosting Plans Grid */}
                <section className="mb-24">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Choose Your Plan</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our <span className="text-blue-600">Web Hosting Plans</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {HOSTING_PLANS.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group"
                            >
                                <h3 className="text-2xl font-bold text-blue-600 mb-4 group-hover:text-blue-700 transition-colors">
                                    {plan.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {plan.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <WhyChooseUs
                    features={[
                        {
                            title: "Diverse Hosting Options",
                            content: "Whether you prefer Linux or Windows, need WordPress-specific solutions, or want to start your own hosting business, we have you covered."
                        },
                        {
                            title: "High Performance",
                            content: "Experience fast loading times and optimal performance, ensuring a seamless user experience."
                        },
                        {
                            title: "Reliable Uptime",
                            content: "We guarantee high uptime, keeping your website accessible to visitors around the clock."
                        },
                        {
                            title: "Scalable Solutions",
                            content: "Our hosting plans grow with your website, offering scalability to meet increasing demands."
                        }
                    ]}
                    imageSrc="/our-work.png"
                    title={<span className="text-slate-900">Why Choose Our <br /> <span className="text-blue-600">Hosting Services</span></span>}
                />

            </div>

            <Contact />
        </main>
    )
}
