"use client"

import { Testimonials } from "@/components/ui/testimonials"

const testimonials = [
    {
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'Working with K4Consultants was a transformative experience. They not only designed a beautiful website but also aligned it perfectly with our brand identity.',
        name: 'Robert Fox',
        username: 'CEO at Biffco Enterprises',
        social: '#'
    },
    {
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop',
        text: 'Their digital marketing strategies have significantly boosted our online presence. We saw a 200% increase in leads within the first 3 months!',
        name: 'Cameron Williamson',
        username: 'Marketing Director at Slack',
        social: '#'
    },
    {
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
        text: 'The mobile app they developed for us is top-notch. Stable, fast, and user-friendly. Our customers love the new experience.',
        name: 'Jenny Wilson',
        username: 'CTO at Cyberdyne Systems',
        social: '#'
    },
    {
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop',
        text: 'Professional, responsive, and incredibly talented. They understood our vision from day one and delivered beyond our expectations.',
        name: 'Kristin Watson',
        username: 'Founder of Google',
        social: '#'
    },
    {
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop',
        text: 'Web hosting services are rock solid. We haven\'t experienced any downtime since we switched to K4Consultants.',
        name: 'Guy Hawkins',
        username: 'VP of Engineering at Uber',
        social: '#'
    },
    {
        image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1780&auto=format&fit=crop',
        text: 'Their branding expertise gave our startup the professional edge we needed to attract investors. Highly recommended!',
        name: 'Annette Black',
        username: 'Co-Founder of Stripe',
        social: '#'
    }
];

export function TestimonialsSection() {
    return (
        <section className="bg-white py-24 w-full relative overflow-hidden">
            {/* Abstract background blobs for visual interest */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 z-0 pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl -translate-y-1/2 z-0 pointer-events-none" />

            <div className="container relative z-10 px-4 md:px-8 max-w-7xl mx-auto">
                <Testimonials
                    testimonials={testimonials}
                    title="Review's From Our Trusted Happy Clients !"
                    description="Our clients' success is our greatest achievement. Here is what they have to say about their experience working with us."
                />
            </div>
        </section>
    )
}
