"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
const [isScrolled, setIsScrolled] = useState(false);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// Monitors page scroll distance to toggle between transparent and solid styling
useEffect(() => {
    const handleScroll = () => {
    if (window.scrollY > 30) {
        setIsScrolled(true);
    } else {
        setIsScrolled(false);
    }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

const menuItems = [
    { label: "Home", path: "#" },
    { label: "About Us", path: "#about" },
    { label: "Services", path: "#services" },
    { label: "Products", path: "#products" },
    { label: "Projects", path: "#projects" },
    { label: "Training", path: "#training" },
    { label: "Blog", path: "#blog" },
    { label: "Contact", path: "#contact" },
];

return (
    <nav
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
        ? "bg-white shadow-md py-3 border-b border-gray-100"
        : "bg-transparent py-5"
    }`}
    >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        
        {/* Brand Identity / Logo Area */}
        <Link href="/" className="flex flex-col justify-center select-none group">
            <span className="font-header text-xl font-bold tracking-tight leading-none">
            <span className={isScrolled ? "text-[#0B5D1E]" : "text-white"}>Stable </span>
            <span className="text-[#F9A825]">Green</span>
            </span>
            <span className={`font-body text-[9px] font-semibold tracking-widest mt-0.5 uppercase ${
            isScrolled ? "text-[#263238]/70" : "text-white/80"
            }`}>
            Agribusiness Co.
            </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-7">
            {menuItems.map((item) => (
            <Link
                key={item.label}
                href={item.path}
                className={`font-body text-[14px] font-medium tracking-wide transition-colors duration-200 relative py-2 block hover:text-[#F9A825] ${
                isScrolled ? "text-[#263238]" : "text-white"
                }`}
            >
                {item.label}
            </Link>
            ))}
        </div>

        {/* Interactive Action Button */}
        <div className="hidden lg:block">
            <Link
            href="#contact"
            className={`font-header font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-md transition-all duration-200 hover:shadow-md active:translate-y-px ${
                isScrolled
                ? "bg-[#0B5D1E] text-white hover:bg-[#2E7D32]"
                : "bg-white text-[#0B5D1E] hover:bg-[#F5F7F5]"
            }`}
            >
            Get Started
            </Link>
        </div>

        {/* Mobile Screen Toggle */}
        <div className="flex lg:hidden">
            <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className={`p-2 rounded-md transition-colors ${
                isScrolled ? "text-[#263238] hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle Menu Navigation"
            >
            {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            )}
            </button>
        </div>

        </div>
    </div>

    {/* Mobile Drawer Overlay Panel */}
    <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
    >
        <div className="px-4 pt-3 pb-6 space-y-2 bg-white shadow-xl border-t border-gray-100">
        {menuItems.map((item) => (
            <Link
            key={item.label}
            href={item.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md font-body text-base font-medium text-[#263238] hover:bg-[#F5F7F5] hover:text-[#0B5D1E] transition-colors"
            >
            {item.label}
            </Link>
        ))}
        <div className="pt-4 border-t border-gray-100 px-3">
            <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center font-header font-semibold text-xs uppercase tracking-wider text-white bg-[#0B5D1E] hover:bg-[#2E7D32] py-3.5 rounded-md shadow"
            >
            Get Started
            </Link>
        </div>
        </div>
    </div>
    </nav>
);
}