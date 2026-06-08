"use client";

import { ShieldCheck, Cpu, Leaf, Network, Layers } from "lucide-react";

export default function WhyChooseUs() {
const features = [
    {
    title: "Experienced Team",
    description: "Our skilled agronomists and industry experts bring top-tier management experience to every project.",
    icon: ShieldCheck,
    },
    {
    title: "Modern Equipment",
    description: "We use advanced agricultural machinery, automated tracking systems, and drone technology.",
    icon: Cpu,
    },
    {
    title: "Sustainable Practices",
    description: "Our methods prioritize soil health, natural resource conservation, and long-term ecosystem balance.",
    icon: Leaf,
    },
    {
    title: "Market Access",
    description: "We bridge the gap between regional production hubs and high-value corporate commodity markets.",
    icon: Network,
    },
    {
    title: "End-to-End Solutions",
    description: "From initial land clearing to industrial milling and final packaging, we manage the entire value chain.",
    icon: Layers,
    },
];

return (
    <section className="bg-[#0B5D1E] text-white py-20 lg:py-28 relative overflow-hidden">
    {/* Subtle organic geometric background accent pattern */}
    <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Typography Headers[cite: 2] */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
        <span className="inline-block font-body text-xs font-bold tracking-widest text-[#F9A825] uppercase bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
            Why Choose SGAC
        </span>
        <h2 className="font-header text-3xl sm:text-4xl font-bold tracking-tight mt-4 mb-4">
            We Deliver Value at Every Stage
        </h2>
        <div className="w-12 h-1 bg-[#F9A825] mx-auto rounded" />
        </div>

        {/* 5-Column Grid Matrix Layout[cite: 2] */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
        {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
            <div 
                key={idx}
                className="flex flex-col items-center text-center px-4 group transition-all duration-300"
            >
                {/* High-Contrast Graphic Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 group-hover:bg-[#F9A825] flex items-center justify-center mb-6 transition-all duration-300 transform group-hover:scale-105 group-hover:rotate-3 shadow-lg">
                <IconComponent className="w-7 h-7 text-white group-hover:text-[#263238] transition-colors duration-300" />
                </div>

                {/* Feature Header */}
                <h3 className="font-header text-lg font-bold text-white mb-3 tracking-tight group-hover:text-[#F9A825] transition-colors">
                {feature.title}
                </h3>

                {/* Explanatory Body Content */}
                <p className="font-body text-sm text-white/70 leading-relaxed max-w-xs">
                {feature.description}
                </p>
            </div>
            );
        })}
        </div>

    </div>
    </section>
);
}