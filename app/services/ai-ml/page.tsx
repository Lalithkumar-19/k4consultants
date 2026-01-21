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
        title: "Artificial Intelligence and Machine Learning",
        description: "Our AI and ML services empower businesses to innovate and excel. From strategy consulting to advanced ML solutions, we provide end-to-end support to transform your operations and enhance decision-making capabilities."
    },
    {
        id: "02",
        title: "Generative AI",
        description: "Our team harnesses advanced machine learning algorithms such as RNNs, Transformers, Markov Chains, GANs, and Autoencoders to develop bespoke generative AI models tailored to your business needs."
    }
]

export default function AiMlPage() {
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
                        <span className="text-blue-600">AI & ML</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 max-w-4xl mx-auto leading-tight">
                        AI & ML
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
                            Future Ready
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                            Welcome to AI, ML and <span className="text-blue-600">Generative AI Services</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            At K4Consultants, we offer comprehensive AI, ML, and Generative AI services to drive innovation and efficiency.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Our expertise spans AI strategy consulting, integrating AI-powered features into SaaS products, and automating processes for enhanced productivity.
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
                            src="/ai-ml.png"
                            alt="AI and Machine Learning"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                    </motion.div>
                </section>

                {/* Sub Services Grid */}
                <section className="mb-24">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Capabilities</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Advanced <span className="text-blue-600">Solutions</span></h2>
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
                            title: "Expertise Across Technologies",
                            content: "Our team excels in advanced AI, ML, and Generative AI technologies, including Python, OpenAI APIs, Langchain, and more."
                        },
                        {
                            title: "Comprehensive Support",
                            content: "From strategy consulting to model development and deployment, we offer end-to-end services ensuring seamless integration and superior performance."
                        },
                        {
                            title: "Innovation and Efficiency",
                            content: "Our services enhance decision-making, automate processes, and drive innovation, keeping your business competitive and forward-thinking."
                        }
                    ]}
                    title={<span className="text-slate-900">Why Choose Us for AI, ML, <br /> and <span className="text-blue-600">Generative AI Services</span></span>}
                    imageSrc="/our-work.png"
                />

            </div>

            <Contact />
        </main>
    )
}
