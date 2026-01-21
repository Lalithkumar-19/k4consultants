import Link from "next/link"
import { Mail, MapPin, Phone, CircuitBoard } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white pt-20 pb-10">
            <div className="container px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 mb-16">

                    {/* Column 1: About Company (Services) */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="bg-blue-600 p-1.5 rounded-lg">
                                <CircuitBoard className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                K4 CONSULTANTS
                            </span>
                        </div>
                        <h3 className="text-lg font-bold text-blue-500 uppercase tracking-wider mb-2">
                            About Company
                        </h3>
                        <ul className="flex flex-col gap-3 text-slate-400">
                            <li>UI UX Design</li>
                            <li>Website Development</li>
                            <li>Marketing</li>
                            <li>Social Media</li>
                            <li>eCommerce Store</li>
                        </ul>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-lg font-bold text-blue-500 uppercase tracking-wider mb-2">
                            Quick Links
                        </h3>
                        <ul className="flex flex-col gap-3">
                            <li className="group">
                                <Link href="/" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                                    <span className="h-1 w-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Home
                                </Link>
                            </li>
                            <li className="group">
                                <Link href="/portfolio" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                                    <span className="h-1 w-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Our Work
                                </Link>
                            </li>
                            <li className="group">
                                <Link href="/about-us" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                                    <span className="h-1 w-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    About Us
                                </Link>
                            </li>
                            <li className="group">
                                <Link href="/#contact" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                                    <span className="h-1 w-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Contact Us
                                </Link>
                            </li>
                            <li className="group">
                                <Link href="#" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                                    <span className="h-1 w-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-lg font-bold text-blue-500 uppercase tracking-wider mb-2">
                            Contact Information
                        </h3>
                        <p className="text-slate-400 mb-4">
                            Feel free to contact & reach us !
                        </p>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-blue-600 shrink-0 mt-1" />
                                <span className="text-slate-300 text-sm leading-relaxed">
                                    K4Consultants 2.10, 91 Springboard, Building Number 145, Sector 44, Gurugram, Haryana 122003
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-blue-600 shrink-0" />
                                <span className="text-slate-300 text-sm">
                                    info@k4consultants.com
                                </span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone className="h-5 w-5 text-blue-600 shrink-0 mt-1" />
                                <div className="text-slate-300 text-sm flex flex-col gap-1">
                                    <span>(INDIA) +91 9255109400</span>
                                    <span>(CANADA) +1 (437) 766-7774</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>
                        © {new Date().getFullYear()} K4 Consultants. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
