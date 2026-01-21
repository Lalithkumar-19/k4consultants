"use client"

import { motion } from "framer-motion"

// Placeholder SVG Components for the logos based on the screenshot
const Logos = {
    Codiga: () => (
        <svg viewBox="0 0 140 40" className="h-8 w-auto fill-slate-600 hover:fill-slate-900 transition-colors">
            <path d="M15 20L25 10V14L18 20L25 26V30L15 20ZM125 20L115 10V14L122 20L115 26V30L125 20ZM35 20C35 14.5 39.5 10 45 10C48 10 50.5 11.2 52 13L50 15C48.8 13.8 47 12.8 45 12.8C41 12.8 38 16 38 20C38 24 41 27.2 45 27.2C47.2 27.2 49 26.2 50.5 25L52 27C50.5 28.8 48 30 45 30C39.5 30 35 25.5 35 20ZM65 20C65 14.5 69.5 10 75 10C80.5 10 85 14.5 85 20C85 25.5 80.5 30 75 30C69.5 30 65 25.5 65 20ZM68 20C68 24 71.2 27.2 75 27.2C78.8 27.2 82 24 82 20C82 16 78.8 12.8 75 12.8C71.2 12.8 68 16 68 20ZM95 10H100V27H106V30H95V27H98V13H95V10ZM57 10H60V30H57V10Z" />
        </svg>
    ),
    Boss: () => (
        <svg viewBox="0 0 100 30" className="h-7 w-auto fill-slate-600 hover:fill-slate-900 transition-colors">
            <path d="M10 5 H25 V25 H10 V5 Z M13 8 V22 H22 V8 H13 Z M30 5 H40 L42 7 L40 9 H33 V12 H40 C43 12 45 14 45 17 V22 C45 25 43 27 40 27 H30 V5 Z M33 24 H40 V15 H33 V24 Z M50 5 H60 L62 7 L60 9 H53 V12 H60 C63 12 65 14 65 17 V22 C65 25 63 27 60 27 H50 V5 Z M53 24 H60 V15 H53 V24 Z M70 5 H85 V8 H73 V12 H82 V15 H73 V19 H85 V22 H73 V27 H70 V5 Z" />
        </svg>
    ),
    Cubase: () => (
        <svg viewBox="0 0 120 30" className="h-7 w-auto fill-slate-600 hover:fill-slate-900 transition-colors">
            {/* Logo Icon */}
            <path d="M5 15 L15 5 L25 15 L15 25 Z M12 15 L15 12 L18 15 L15 18 Z" />
            {/* Text */}
            <path d="M35 10 H40 V25 H45 V10 H50 V27 H35 V10 Z M55 10 H60 V22 H65 V10 H70 V27 H55 V10 Z M75 10 H85 C88 10 90 12 90 15 V17 C90 19 88 20 86 20 H90 C93 20 95 22 95 25 V27 H75 V10 Z M80 24 H87 V22 H80 V24 Z M80 17 H85 V13 H80 V17 Z M100 10 H105 L110 27 H105 L104 22 H101 L100 27 H95 L100 10 Z M102 15 L103 19 H102 V15 Z" transform="translate(10, 0)" />
        </svg>
    ),
    Unreal: () => (
        <svg viewBox="0 0 120 30" className="h-7 w-auto fill-slate-600 hover:fill-slate-900 transition-colors">
            {/* Logo Icon */}
            <circle cx="15" cy="15" r="12" fillOpacity="0.2" />
            <path d="M12 10 V18 C12 20 18 20 18 18 V10" stroke="currentColor" strokeWidth="3" fill="none" />
            {/* Text */}
            <text x="35" y="22" fontFamily="Arial" fontWeight="bold" fontSize="18">UNREAL</text>
        </svg>
    ),
    Addison: () => (
        <svg viewBox="0 0 120 30" className="h-6 w-auto fill-slate-600 hover:fill-slate-900 transition-colors">
            <text x="0" y="22" fontFamily="Arial" fontWeight="900" fontSize="20" letterSpacing="-1">ADDISON</text>
        </svg>
    )
}

const clients = [
    { name: "Codiga", Logo: Logos.Codiga },
    { name: "Boss", Logo: Logos.Boss },
    { name: "Cubase", Logo: Logos.Cubase },
    { name: "Unreal", Logo: Logos.Unreal },
    { name: "Addison", Logo: Logos.Addison },
    // Repeat for smoother scroll loop
    { name: "Codiga", Logo: Logos.Codiga },
    { name: "Boss", Logo: Logos.Boss },
    { name: "Cubase", Logo: Logos.Cubase },
    { name: "Unreal", Logo: Logos.Unreal },
    { name: "Addison", Logo: Logos.Addison },
]

export const Clients = () => {
    return (
        <section className="bg-white py-12 w-full border-t border-slate-50">
            <div className="container px-4 md:px-8 mx-auto">
                {/* Header */}
                <div className="flex items-center justify-center gap-4 mb-10 opacity-80">
                    <div className="h-px w-12 md:w-24 bg-linear-to-r from-transparent to-blue-200" />
                    <span className="text-sm font-bold tracking-widest text-slate-500 uppercase whitespace-nowrap">
                        Trusted Partners & Clients
                    </span>
                    <div className="h-px w-12 md:w-24 bg-linear-to-l from-transparent to-blue-200" />
                </div>

                {/* Marquee */}
                <div className="relative w-full overflow-hidden mask-gradient">
                    {/* Gradient masks for smooth fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white to-transparent z-10" />

                    <motion.div
                        className="flex items-center gap-16 md:gap-24 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30
                        }}
                    >
                        {/* Render standard list */}
                        {clients.map((client, i) => (
                            <div key={i} className="shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer grayscale hover:grayscale-0">
                                <client.Logo />
                            </div>
                        ))}
                        {/* Duplicate list for seamless loop */}
                        {clients.map((client, i) => (
                            <div key={`dup-${i}`} className="shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer grayscale hover:grayscale-0">
                                <client.Logo />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
