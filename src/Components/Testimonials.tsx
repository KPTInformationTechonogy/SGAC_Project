"use client";
import Image from "next/image";
import Aliyu from "@/images/aliyu.jpg";
import Ismail from "@/images/ismail.jpg";

import { Star, Quote } from "lucide-react";

export default function Testimonials() {
const testimonials = [
    {
    quote: "SGAC has completely transformed our supply chain predictability. Their premium rice paddy consistently hits our milling moisture targets, and their delivery schedules are flawlessly reliable.",
    author: "Ismail Aliyu Abubakar",
    role: "Managing Director",
    company: "Kano Process Trading Company",
    image: Ismail,
    },
    {
    quote: "Partnering with their outgrower schemes has allowed us to hit our corporate social responsibility targets while securing thousands of tons of high-protein, non-GMO industrial soybeans.",
    author: "Aliyu Muktar",
    role: "Head of Procurement",
    company: "Kanbuild Trading Circuit Limited",
    image: Aliyu,
    },
    {
    quote: "Their agricultural mechanization support helped our local cooperative clear and cultivate over 500 hectares of maize efficiently. The yield increase this season has been life-changing.",
    author: "Salim Abdussalam",
    role: "Sales & Marketing Manager",
    company: "KPTC",
    image: Aliyu,
    },
];

return (
    <section id="testimonials" className="bg-[#F5F7F5] py-20 lg:py-28 relative overflow-hidden">
    {/* Decorative subtle abstract curves for a premium look */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B5D1E]/5 rounded-full filter blur-3xl -mr-20 -mt-20 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F9A825]/5 rounded-full filter blur-3xl -ml-20 -mb-20 pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
        <span className="inline-block font-body text-xs font-bold tracking-widest text-[#2E7D32] uppercase bg-[#0B5D1E]/5 px-4 py-1.5 rounded-full">
            What Our Clients Say
        </span>
        <h2 className="font-header text-3xl sm:text-4xl font-bold text-[#263238] tracking-tight mt-4">
            Trusted by Industrial Buyers & Local Farmers
        </h2>
        <div className="w-12 h-1 bg-[#F9A825] mx-auto mt-4 rounded" />
        </div>

        {/* 3-Column Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((item, idx) => (
            <div
            key={idx}
            className="bg-white rounded-[24px] border border-gray-100 p-8 shadow-[0px_10px_30px_rgba(38,50,56,0.02)] hover:shadow-[0px_20px_40px_rgba(38,50,56,0.05)] transition-all duration-300 flex flex-col justify-between relative group"
            >
            {/* Giant decorative quotation mark icon */}
            <div className="absolute top-6 right-8 text-gray-100 group-hover:text-[#0B5D1E]/10 transition-colors duration-300">
                <Quote className="w-12 h-12 transform rotate-180" />
            </div>

            <div>
                {/* 5-Star High-Contrast Rating Row */}
                <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F9A825] text-[#F9A825]" />
                ))}
                </div>

                {/* Main Client Testimonial Content - Fixed Quotes Expression */}
                <p className="font-body text-sm sm:text-base text-[#263238]/80 leading-relaxed italic relative z-10 mb-8">
                &ldquo;{item.quote}&rdquo;
                </p>
            </div>

            {/* Author Profile Metadata Block */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#0B5D1E]/20 group-hover:border-[#0B5D1E] transition-colors duration-300">
                <Image
                    src={item.image}
                    alt={item.author}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
                </div>
                <div>
                <h4 className="font-header text-sm font-bold text-[#263238]">
                    {item.author}
                </h4>
                <p className="font-body text-[11px] text-[#263238]/60 font-medium">
                    {item.role}, <span className="text-[#0B5D1E] font-semibold">{item.company}</span>
                </p>
                </div>
            </div>

            </div>
        ))}
        </div>

    </div>
    </section>
);
}