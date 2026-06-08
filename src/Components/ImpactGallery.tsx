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
    image: "https://images.unsplash.com/photo-1536304997881-a372c179924b?auto=format&fit=crop&q=80&w=800",
    gridClass: "md:col-span-2 md:row-span-2",
    },
    {
    title: "Advanced Tractor Operations",
    category: "Mechanization Services",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=600",
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