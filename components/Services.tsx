"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import {
    Monitor,
    Gem,
    Rocket,
    Server,
    BrainCircuit,
    Smartphone,
    ArrowUpRight
} from "lucide-react"
import { useRouter } from "next/navigation"

const services = [
    {
        icon: Monitor,
        number: "01",
        title: "Website Design & Development",
        description: "We specialize in crafting cutting-edge websites that harmonize striking visuals with practical design, ensuring your online presence is not just visually stunning but also intuitive and user-focused. Whether for agile startups, expansive e-commerce ventures, or corporate titans, our tailored web solutions are designed to leave a lasting impression.",
        link: "/services/website-design-development"
    },
    {
        icon: Gem,
        number: "02",
        title: "Brand Enhancement",
        description: "Your brand encapsulates your narrative. We're here to assist you in articulating it compellingly. Through avant-garde design and strategic positioning, we sculpt your brand identity to stand out in the competitive marketplace. Our approach to branding is all about leaving an indelible, distinct, and unforgettable mark.",
        link: "/services/branding"
    },
    {
        icon: Rocket,
        number: "03",
        title: "Digital Promotion",
        description: "Navigate the digital sphere with confidence. Our data-centric digital marketing strategies are tailored to thrust you into the limelight. Whether it's SEO, SEM, content marketing, or the enchantment of social media, we possess the strategies for every narrative.",
        link: "/services/digital-marketing"
    },
    {
        icon: Server,
        number: "04",
        title: "Reliable Web Hosting",
        description: "Robust hosting solutions that guarantee performance and tranquility. Our hosting services ensure that your website is swift, secure, and consistently available because we comprehend that in the digital realm, every second counts.",
        link: "/services/web-hosting"
    },
    {
        icon: BrainCircuit,
        number: "05",
        title: "AI, ML and Generative AI",
        description: "We offer comprehensive AI, ML, and Generative AI services to drive innovation and efficiency. Our expertise spans AI strategy consulting, integrating AI-powered features into SaaS products, and automating processes for enhanced productivity.",
        link: "/services/ai-ml"
    },
    {
        icon: Smartphone,
        number: "06",
        title: "Android And IOS Development",
        description: "We deliver top-tier iOS and Android application development services. Our expert developers create robust, scalable, and user-friendly mobile applications tailored to meet the unique needs of startups and enterprises.",
        link: "/services/android-ios-development"
    }
]

export const Services = () => {
    return (
        <section className="bg-white py-24 w-full relative overflow-hidden">
            {/* Abstract Background Gradients - Light Theme */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none" />

            <div className="container px-4 md:px-8 max-w-7xl mx-auto relative z-10">

                {/* Section Header */}
                <div className="mb-20 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wider uppercase mb-4"
                    >
                        Our Services
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
                    >
                        Innovating your <span className="text-blue-600">Digital World</span>
                    </motion.h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
    const divRef = useRef<HTMLDivElement>(null)
    const [isFocused, setIsFocused] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = useState(0)
    const navigation = useRouter()

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return

        const div = divRef.current
        const rect = div.getBoundingClientRect()

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    const handleFocus = () => {
        setIsFocused(true)
        setOpacity(1)
    }

    const handleBlur = () => {
        setIsFocused(false)
        setOpacity(0)
    }

    const handleMouseEnter = () => {
        setOpacity(1)
    }

    const handleMouseLeave = () => {
        setOpacity(0)
    }

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => navigation.push(service.link)}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-8 py-10 shadow-sm hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
        >
            <div
                className="pointer-events-none absolute -inset-px transition opacity-0 group-hover:opacity-100"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.08), transparent 40%)`,
                }}
            />

            <div className="relative flex flex-col items-start gap-4 h-full">
                {/* Header: Icon and Number */}
                <div className="flex w-full justify-between items-center border-b border-slate-100 pb-4 mb-2">
                    <div className="p-3 bg-blue-50/50 rounded-xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-8 w-8" />
                    </div>
                    <span className="text-4xl font-bold text-slate-100 group-hover:text-blue-100 transition-colors select-none">
                        {service.number}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                </h3>

                <p className="text-slate-500 leading-relaxed text-sm grow">
                    {service.description}
                </p>

                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50/50 group-hover:bg-blue-100 transition-colors self-end mt-auto">
                    <ArrowUpRight className="h-6 w-6 text-blue-600 group-hover:text-blue-800 transition-colors" />
                </span>

                {/* Hover decorative line */}
                <div className="absolute -bottom-2 left-0 h-1 w-0 bg-linear-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full" />
            </div>
        </motion.div>
    )
}
