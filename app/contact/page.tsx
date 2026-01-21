"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
    return (
        <main className="bg-white min-h-screen pt-4 pb-0">
            {/* Header / Breadcrumb */}
            <div className="bg-slate-50 border-y border-slate-100 py-12 mb-16">
                <div className="container px-4 md:px-8 max-w-7xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-4 font-medium uppercase tracking-wide">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-blue-600">Contact</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Contact Us</h1>
                </div>
            </div>

            <div className="container px-4 md:px-8 max-w-7xl mx-auto mb-24">
                <section className="w-full h-[450px] relative bg-slate-100 mb-20">
                    <iframe
                        title="K4 Consultants Location"
                        src="https://maps.google.com/maps?q=K4%20Consultancy%202.10,%2091Springboard,%20Building%20Number%20145,%20Sector%2044,%20Gurugram,%20Haryana%20122003&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-8"
                    >
                        <div>
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wider uppercase mb-4">
                                GET IN TOUCH
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                                Contact & Reach Us <br /> For More <span className="text-blue-600">Information</span>
                            </h2>
                            <p className="text-slate-500 text-lg leading-relaxed">
                                For inquiries, assistance, or partnership opportunities across our range of services, feel free to reach out. We are here to bring your digital aspirations to life.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 mt-4">
                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-lg text-blue-600 shrink-0">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Address</h4>
                                    <p className="text-slate-600 leading-relaxed max-w-xs">
                                        K4Consultants 2.10, 91 Springboard, Building Number 145, Sector 44, Gurugram, Haryana 122003
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-lg text-blue-600 shrink-0">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                                    <p className="text-slate-600">
                                        info@k4consultants.com
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-lg text-blue-600 shrink-0">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                                    <div className="text-slate-600 flex flex-col gap-1">
                                        <p><span className="font-medium text-slate-800">(INDIA)</span> +91 9255109400</p>
                                        <p><span className="font-medium text-slate-800">(CANADA)</span> +1 (437) 766-7774</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-lg"
                    >
                        <form className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="John Doe"
                                        className="h-12 px-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="john@example.com"
                                        className="h-12 px-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="subject" className="text-sm font-semibold text-slate-700">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="How can we help you?"
                                    className="h-12 px-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                                <textarea
                                    id="message"
                                    placeholder="Tell us about your project..."
                                    rows={4}
                                    className="p-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 resize-none"
                                />
                            </div>

                            <Button className="h-14 mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-lg shadow-lg shadow-blue-600/20 w-full transition-all hover:scale-[1.02]">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Map Section */}

        </main>
    )
}
