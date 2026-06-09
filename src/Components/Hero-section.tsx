"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "5,000+", label: "Farmers Empowered" },
    { value: "10,000+", label: "Hectares Managed" },
    { value: "50+", label: "Agricultural Services" },
    { value: "100+", label: "Partners & Clients" },
];

return (
    <section className="relative min-h-[90vh] lg:min-h-screen bg-[#263238] flex flex-col justify-between pt-32 lg:pt-20 overflow-hidden">
    
    {/* 1. Background Imagery & Dark Overlay Mask */}
    <div className="absolute inset-0 z-0">
        <Image
        src="https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&q=80&w=2000"
        alt="Modern tractor working a vast farm field with an agricultural monitoring drone overhead"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        />
        {/* Deep overlay to make white text highly visible for investors/NGOs */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-transparent lg:bg-black/55" />
    </div>

    {/* 2. Main Hero Content Layout Container */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex items-center w-full py-12 lg:py-24">
        <div className="max-w-3xl">
        
        {/* Section Breadcrumb Indicator */}
        <span className="inline-flex items-center gap-2 font-body text-xs font-semibold tracking-widest text-[#F9A825] uppercase mb-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded">
            <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse" />
            Stable Green Agricultural Company
        </span>

        {/* Core Corporate Headline */}
        <h1 className="font-header text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-6">
            Building Sustainable Agriculture Through Production, <span className="text-[#F9A825]">Smart Mechanization</span> & Agribusiness Solutions
        </h1>

        {/* Subtext Paragraph */}
        <p className="font-body text-base sm:text-lg text-white/90 leading-relaxed mb-10 max-w-2xl">
            We provide heavy tractor field operations, smart drone precision farming, crop production, and commodity aggregation that scale industrial crop yields and empower agricultural networks across Nigeria.
        </p>

        {/* Integrated Multi-Action Button Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
            href="#services"
            className="font-header font-semibold text-sm text-center uppercase tracking-wider bg-[#0B5D1E] hover:bg-[#2E7D32] text-white px-8 py-4 rounded-md shadow-lg transition-all duration-200"
            >
            Explore Our Services
            </Link>
            
            {/* Split Video Trigger Inline Button */}
            <button
            type="button"
            onClick={() => alert("Launch Video Player Embed")}
            className="font-header font-semibold text-sm text-center uppercase tracking-wider border border-white/30 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-md transition-all duration-200 flex items-center justify-center gap-3 backdrop-blur-sm group"
            >
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#F9A825] group-hover:scale-110 transition-transform duration-200">
                <svg className="w-3 h-3 text-[#263238] fill-current translate-x-[1px]" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
                </svg>
            </span>
            Watch Video
            </button>
        </div>

        </div>
    </div>

    {/* 3. Floating Institutional Performance Metrics Row */}
    <div className="relative z-10 bg-white border-t border-gray-100 shadow-xl w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 divide-y md:divide-y-0 lg:divide-x divide-gray-100">
            {stats.map((stat, idx) => (
            <div 
                key={idx} 
                className={`flex flex-col items-center text-center lg:px-4 ${
                idx > 1 ? "pt-4 md:pt-0" : ""
                } ${idx === 2 ? "col-span-2 md:col-span-1 pt-4 md:pt-0" : ""}`}
            >
                <span className="font-header text-3xl lg:text-4xl font-bold text-[#0B5D1E] tracking-tight mb-1">
                {stat.value}
                </span>
                <span className="font-body text-xs lg:text-sm font-medium text-[#263238]/70 uppercase tracking-wide">
                {stat.label}
                </span>
            </div>
            ))}
        </div>
        </div>
    </div>

    </section>
);
}