"use client"

import * as React from "react"
import Link from "next/link"
import { CircuitBoard, Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const components: { title: string; href: string }[] = [
    {
        title: "Website Design & Development",
        href: "/services/website-design-development",
    },
    {
        title: "Branding",
        href: "/services/branding",
    },
    {
        title: "Digital Marketing",
        href: "/services/digital-marketing",
    },
    {
        title: "Web Hosting",
        href: "/services/web-hosting",
    },
    {
        title: "AI & ML",
        href: "/services/ai-ml",
    },
    {
        title: "Android & IOS Development",
        href: "/services/android-ios-development",
    },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen]);

    const router = useRouter();

    return (
        <div className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm border-b">
            <div className="flex h-20 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="bg-slate-900 rounded-full p-1.5">
                        <CircuitBoard className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-slate-900">
                        K4<span className="text-slate-700">CONSULTANTS</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="/" className={cn("text-sm cursor-pointer font-bold transition-colors hover:text-blue-600 text-slate-700")}>
                        HOME
                    </Link>

                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-sm font-bold text-slate-700 hover:text-blue-700 focus:text-blue-700 data-[state=open]:text-blue-700 bg-transparent hover:bg-transparent focus:bg-transparent data-active:bg-transparent data-[state=open]:bg-transparent h-auto p-0">
                                    SERVICES
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[250px] gap-1 p-2 bg-white rounded-md ">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            />
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Link href="/portfolio" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                        OUR WORK
                    </Link>

                    <Link href="/about" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                        ABOUT US
                    </Link>

                    <Link href="/contact" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                        CONTACT US
                    </Link>
                </div>

                {/* Desktop CTA Button */}
                <div
                    onClick={() => router.push('/contact')}
                    className="hidden md:block">

                    <Button
                        className="bg-[#3b82f6] cursor-pointer hover:bg-[#2563eb] text-white font-semibold rounded-full px-8 py-5">
                        GET A QUOTE
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <div

                    className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 cursor-pointer focus:outline-none">
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white border-b shadow-xl p-4 flex flex-col gap-4 overflow-y-auto z-50 pb-20">
                    <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-bold text-slate-700 hover:text-blue-600 py-2 border-b border-slate-100"
                    >
                        HOME
                    </Link>

                    <div className="flex flex-col gap-2 py-2 border-b border-slate-100">
                        <span className="text-sm font-bold text-slate-900 mb-2">SERVICES</span>
                        {components.map((component) => (
                            <Link
                                key={component.title}
                                href={component.href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm text-slate-600 hover:text-blue-600 pl-4 py-1"
                            >
                                {component.title}
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="/portfolio"
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-bold text-slate-700 hover:text-blue-600 py-2 border-b border-slate-100"
                    >
                        OUR WORK
                    </Link>

                    <Link
                        href="/about"
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-bold text-slate-700 hover:text-blue-600 py-2 border-b border-slate-100"
                    >
                        ABOUT US
                    </Link>

                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-bold text-slate-700 hover:text-blue-600 py-2 border-b border-slate-100"
                    >
                        CONTACT US
                    </Link>

                    <div
                        onClick={() => router.push('/contact')}
                        className="mt-4 pb-4">
                        <Button className="cursor-pointer w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold rounded-full py-6">
                            GET A QUOTE
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-blue-600 focus:bg-slate-100 focus:text-blue-600 text-slate-600 font-medium text-sm",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
