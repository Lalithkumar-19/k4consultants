import { BLOG_POSTS } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BlogPostPageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params
    const post = BLOG_POSTS.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    return (
        <article className="min-h-screen bg-white pb-24 pt-32">
            {/* Header/Hero */}
            <div className="container px-4 md:px-8 max-w-4xl mx-auto">
                <Link href="/">
                    <Button variant="ghost" className="mb-8 text-slate-500 hover:text-blue-600 pl-0 -ml-4">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                    </Button>
                </Link>

                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Oct 24, 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>By Admin</span>
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-8">
                    {post.title}
                </h1>
            </div>

            {/* Featured Image */}
            <div className="w-full h-[400px] md:h-[500px] relative mb-16 bg-slate-100">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content */}
            <div className="container px-4 md:px-8 max-w-3xl mx-auto">
                <div
                    className="prose prose-lg prose-slate prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-blue-600 max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>
        </article>
    )
}

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }))
}
