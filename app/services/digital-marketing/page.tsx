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
        title: "SEO",
        description: "Top SERP Rankings: Use our well-trained SEO techniques to rise to the top of search results. Both on-page and off-page SEO are comprehensive SEO strategies that maximize every facet of your internet visibility. Continuous Optimization: Constantly adjusting SEO to stay on top of market trends and algorithm changes."
    },
    {
        id: "02",
        title: "Social Media Marketing (SMM)",
        description: "Brand Engagement: Use engaging content to increase your brand's social media presence. Targeted Campaigns: Use clever campaigns on all the main social media channels to identify your target audience. Community Building: By maintaining a regular and active social media presence, you can cultivate a devoted following around your brand."
    },
    {
        id: "03",
        title: "Search Engine Marketing (SEM)",
        description: "Success with Paid Advertising: Make the most of paid search to increase your visibility right away and boost traffic. Custom campaigns created to maximize return on investment are known as ROI-driven campaigns. A/B testing: Extensive testing to improve targeting, bidding, and ad copy for best results."
    },
    {
        id: "04",
        title: "Content Writing",
        description: "Content that Engages: Provide informational, entertaining, and persuasive content for your target audience. SEO-Enhanced Writing: Write web content, blogs, and articles with search engine and reader optimization in mind. Content strategy is the deliberate planning of content to support your brand's message and objectives."
    }
]

export default function DigitalMarketingPage() {
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
                        <span className="text-blue-600">Digital Marketing</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 max-w-4xl mx-auto leading-tight">
                        Digital Marketing
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
                            Welcome To Our <span className="text-blue-600">Digital Services</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            Having a strong online presence is not only advantageous in the digital age, but also necessary.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            Comprehensive digital marketing strategies that enhance your brand are our specialty at <span className="font-semibold text-slate-900">K4Consultants</span>.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We can handle all of your digital needs, from content creation to targeted advertising, from social engagement to organic search.
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
                            src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop"
                            alt="Digital Marketing"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                    </motion.div>
                </section>

                {/* Sub Services Grid */}
                <section className="mb-24">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">What We Offer</span>
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

                <WhyChooseUs />

            </div>

            <Contact />
        </main>
    )
}
