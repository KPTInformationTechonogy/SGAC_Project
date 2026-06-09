"use client";

import Link from "next/link";
import { Users, Trees, MapPin, Briefcase } from "lucide-react";

export default function ImpactGallery() {
const metrics = [
    { 
    value: "5,000+", 
    label: "Farmers Supported", 
    icon: Users,
    iconBg: "bg-[#0B5D1E]/10 text-[#0B5D1E]"
    },
    { 
    value: "10,000+", 
    label: "Hectares Managed", 
    icon: Trees,
    iconBg: "bg-[#2E7D32]/10 text-[#2E7D32]"
    },
    { 
    value: "50+", 
    label: "Communities Reached", 
    icon: MapPin,
    iconBg: "bg-[#F9A825]/10 text-[#F9A825]"
    },
    { 
    value: "100+", 
    label: "Jobs Created", 
    icon: Briefcase,
    iconBg: "bg-[#263238]/10 text-[#263238]"
    },
];

const galleryItems = [
    {
    title: "Commercial Rice Farms",
    category: "Crop Production",
    image: "data:image/jpeg;base64,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",
    gridClass: "md:col-span-2 md:row-span-2",
    },
    {
    title: "Advanced Tractor Operations",
    category: "Mechanization Services",
    image: "data:image/jpeg;base64,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",
    gridClass: "md:col-span-1 md:row-span-1",
    },
    {
    title: "Commercial Livestock Setup",
    category: "Livestock & Aquaculture",
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=600",
    gridClass: "md:col-span-1 md:row-span-1",
    },
    {
    title: "Farmer Capacity Training",
    category: "Training & Capacity Development",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=600",
    gridClass: "md:col-span-2 md:row-span-1",
    },
];

return (
    <section className="bg-white">
    
    {/* 1. TOP BLOCK: Premium Dark Green Canvas Wrap[cite: 2] */}
    <div className="bg-[#0B5D1E] text-white py-20 lg:py-24 relative overflow-hidden">
        {/* Subtle geometric overlay pattern line */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
            <path d="M60 0H0v60h60V0z M1 1h58v58H1V1z" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Typographic Headings[cite: 2] */}
            <div className="lg:col-span-5 max-w-xl text-center lg:text-left">
            <span className="inline-block font-body text-xs font-bold tracking-widest text-[#F9A825] uppercase bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
                Our Impact
            </span>
            <h2 className="font-header text-3xl sm:text-4xl font-bold text-white tracking-tight mt-4 mb-6 leading-tight">
                Driving Productivity. Improving Livelihoods. Building Communities.
            </h2>
            <div className="w-12 h-1 bg-[#F9A825] mb-6 rounded mx-auto lg:mx-0" />
            <p className="font-body text-sm text-white/80 leading-relaxed mb-6">
                Through proactive dedication, smart mechanization networks, and strategic community outgrower frameworks, we are steadily scaling food security parameters across sub-Saharan ecosystems.
            </p>
            <Link
                href="#about"
                className="inline-flex items-center gap-2 font-header text-xs font-semibold uppercase tracking-wider text-[#F9A825] hover:text-white transition-colors"
            >
                <span>Learn More About Our Work</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </Link>
            </div>

            {/* Compact, Center-Aligned, Fully Rounded Cards over Dark Green Wrapper[cite: 2] */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-5 max-w-xl mx-auto w-full">
            {metrics.map((metric, idx) => {
                const IconComponent = metric.icon;
                return (
                <div
                    key={idx}
                    className="bg-[#F5F7F5] border border-white/10 p-5 rounded-[24px] shadow-lg flex flex-col items-center text-center group hover:bg-white transition-all duration-300"
                >
                    {/* Rounded Icon Element */}
                    <div className={`w-10 h-10 rounded-full ${metric.iconBg} flex items-center justify-center mb-3 shadow-sm`}>
                    <IconComponent className="w-4 h-4" />
                    </div>
                    
                    {/* Dynamic Data Numbers */}
                    <span className="font-header text-2xl lg:text-3xl font-bold text-[#0B5D1E] tracking-tight mb-0.5">
                    {metric.value}
                    </span>
                    <span className="font-body text-[11px] sm:text-xs font-bold text-[#263238]/60 uppercase tracking-wider">
                    {metric.label}
                    </span>
                </div>
                );
            })}
            </div>

        </div>
        </div>
    </div>

    {/* 2. BOTTOM BLOCK: Infrastructure Gallery Canvas (Now set to Pure White background)[cite: 2] */}
    <div className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-[240px]">
            {galleryItems.map((item, idx) => (
            <div
                key={idx}
                className={`group relative rounded-[24px] overflow-hidden bg-gray-50 shadow-md ${item.gridClass}`}
            >
                <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="font-body text-[10px] font-bold tracking-widest text-[#F9A825] uppercase mb-1.5">
                    {item.category}
                </span>
                <h3 className="font-header text-lg font-bold text-white tracking-tight">
                    {item.title}
                </h3>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>

    </section>
);
}