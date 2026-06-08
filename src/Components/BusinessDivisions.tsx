"use client";

import { Leaf, Fish, Tractor, ShieldCheck, GraduationCap, Users, BarChart3, LineChart } from "lucide-react";

export default function BusinessDivisions() {
const divisions = [
    {
    title: "Crop Production",
    icon: Leaf,
    items: ["Rice (Wet Season)", "Rice (Dry Season)", "Maize", "Sorghum", "Soybeans", "Sesame", "Cowpea"],
    },
    {
    title: "Livestock & Aquaculture",
    icon: Fish,
    items: ["Cattle", "Poultry", "Fish Farming", "Sheep & Goats", "Organic Manure"],
    },
    {
    title: "Mechanization Services",
    icon: Tractor,
    items: ["Land Clearing", "Ploughing", "Harrowing", "Planting", "Harvesting", "Threshing", "Milling", "Farm Transportation"],
    },
    {
    title: "Agricultural Consultancy",
    icon: ShieldCheck,
    items: ["Farm Assessment", "Farm Mapping", "Soil Testing", "Agronomy Support", "Farm Monitoring"],
    },
    {
    title: "Training & Capacity Development",
    icon: GraduationCap,
    items: ["Farmer Training", "Youth Empowerment", "Cooperative Development", "Agribusiness Training"],
    },
    {
    title: "Outgrower & Aggregation",
    icon: Users,
    items: ["Commodity Aggregation", "Market Linkage", "Quality Assurance", "Farmer Mobilization"],
    },
    {
    title: "Agribusiness Development",
    icon: BarChart3,
    items: ["Business Plans", "Grant Support", "Investment Advisory", "Market Expansion"],
    },
    {
    title: "Other Income Streams",
    icon: LineChart,
    items: ["Value-Added Processing", "Strategic Storage", "Logistics Operations", "Equipment Leasing"],
    },
];

return (
    <section id="services" className=" bg-white py-10 lg:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header Layout */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
        <span className="inline-block font-body text-xs font-bold tracking-widest text-[#2E7D32] uppercase bg-[#0B5D1E]/5 px-4 py-1.5 rounded-full">
            What We Do
        </span>
        <h2 className="font-header text-3xl sm:text-4xl font-bold text-[#263238] tracking-tight mt-4 mb-4">
            Our Business Divisions
        </h2>
        <div className="w-12 h-1 bg-[#2e4c33] mx-auto rounded" />
        </div>

        {/* 4-Column Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {divisions.map((division, idx) => {
            const IconComponent = division.icon;
            return (
            <div
                key={idx}
                className="group bg-white rounded-[16px] p-6 lg:p-8 border border-gray-100 shadow-[0px_10px_30px_rgba(38,50,56,0.02)] hover:shadow-[0px_20px_40px_rgba(38,50,56,0.06)] transition-all duration-300 flex flex-col justify-between items-center text-center hover:-translate-y-1"
            >
                <div className="w-full flex flex-col items-center">
                {/* Decorative Icon Container */}
                <div className="w-14 h-14 rounded-full bg-[#F5F7F5] group-hover:bg-[#0B5D1E] flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                    <IconComponent className="w-6 h-6 text-[#0B5D1E] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="font-header text-lg font-bold text-[#263238] group-hover:text-[#0B5D1E] transition-colors duration-200 mb-4 px-2">
                    {division.title}
                </h3>

                {/* Clean Inline Centered Text Block */}
                <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1.5 mb-8 max-w-xs">
                    {division.items.map((item, itemIdx) => (
                    <span 
                        key={itemIdx} 
                        className="font-body text-[13px] text-[#263238]/70 font-medium whitespace-nowrap"
                    >
                        {item}
                    </span>
                    ))}
                </div>
                </div>

                {/* Fully Centered Interactive Trigger Action Link */}
                <div className="w-full pt-4 border-t border-gray-50 flex items-center justify-center gap-2 text-xs font-header font-semibold uppercase tracking-wider text-[#0B5D1E] group-hover:text-[#2E7D32] transition-colors">
                <span>Learn More</span>
                <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
                </div>
            </div>
            );
        })}
        </div>

    </div>
    </section>
);
}