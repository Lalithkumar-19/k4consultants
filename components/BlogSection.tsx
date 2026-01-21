"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, User } from "lucide-react"
import { BLOG_POSTS } from "@/lib/blog-data"
import { Button } from "@/components/ui/button"

export const BlogSection = () => {
    return (
        <section className="bg-slate-50 py-24 w-full relative overflow-hidden">
            <div className="container px-4 md:px-8 max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-16 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-4">
                        Latest News & Insights
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                        Our Latest <span className="text-blue-600">Blogs</span>
                    </h2>
                    <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
                        Stay updated with the latest trends in technology, business, and management.
                    </p>
                </div>

                {/* Blogs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {BLOG_POSTS.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
                        >
                            {/* Image */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase tracking-wide">
                                    {post.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col grow">
                                <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        <span>Oct 24, 2024</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User className="h-3 w-3" />
                                        <span>Admin</span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-slate-500 text-sm mb-6 line-clamp-3 grow">
                                    {post.excerpt}
                                </p>

                                <Link href={`/blog/${post.slug}`} className="mt-auto">
                                    <Button variant="link" className="p-0 h-auto cursor-pointer text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
                                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
