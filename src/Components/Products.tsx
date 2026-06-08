"use client";

import Link from "next/link";

export default function Products() {
const products = [
    {
    name: "Rice Paddy",
    description: "High-grade, premium moisture-controlled long-grain processing paddy harvested across regional outgrower schemes.",
    image: "https://images.unsplash.com/photo-1536304997881-a372c179924b?auto=format&fit=crop&q=80&w=600",
    },
    {
    name: "Maize",
    description: "Premium quality yellow and white industrial maize kernels optimized for livestock feed production and grain milling.",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=600",
    },
    {
    name: "Soybeans",
    description: "High-oil content, protein-rich non-GMO soybeans sorted and cleaned to international manufacturing standards.",
    image: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?auto=format&fit=crop&q=80&w=600",
    },
    {
    name: "Sesame",
    description: "Premium white and mixed export-grade sesame seeds with excellent purity rates and low seed moisture levels.",
    image: "https://images.unsplash.com/photo-1536638317175-32449e112c58?auto=format&fit=crop&q=80&w=600",
    },
    {
    name: "Cowpea",
    description: "Nutritious, high-yield clean iron beans and cowpeas sourced directly from optimized cultivation fields.",
    image: "https://images.unsplash.com/photo-1547058881-aa0edd92aab3?auto=format&fit=crop&q=80&w=600",
    },
    {
    name: "Live Cattle",
    description: "Healthy, fully vaccinated, grass-fed and feedlot-finished commercial cattle managed under strict biosecurity standards.",
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=600",
    },
    {
    name: "Poultry",
    description: "Premium broilers and high-productivity layers bred within clean, automated commercial poultry facilities.",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=600",
    },
    {
    name: "Fish",
    description: "Freshly harvested commercial catfish and tilapia reared using premium, balanced floating feed formulations.",
    image: "https://images.unsplash.com/photo-1522044822214-b84411321c86?auto=format&fit=crop&q=80&w=600",
    },
    {
    name: "Organic Manure",
    description: "Fully composted, nutrient-dense organic fertilizer designed to rebuild topsoil microbial activity safely.",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=600",
    },
];

return (
    <section id="products" className="bg-white py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left Content & Right Action Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-20">
        <div className="max-w-2xl">
            <span className="inline-block font-body text-xs font-bold tracking-widest text-[#2E7D32] uppercase bg-[#0B5D1E]/5 px-4 py-1.5 rounded-full">
            Featured Products
            </span>
            <h2 className="font-header text-3xl sm:text-4xl font-bold text-[#263238] tracking-tight mt-4">
            Our Agricultural Products
            </h2>
            <div className="w-12 h-1 bg-[#F9A825] mt-4 rounded" />
        </div>
        
        <div>
            <Link
            href="#all-products"
            className="inline-flex items-center gap-2 font-header font-semibold text-xs uppercase tracking-wider text-[#0B5D1E] hover:text-[#2E7D32] border-2 border-[#0B5D1E] hover:border-[#2E7D32] px-6 py-3 rounded-md transition-all duration-200"
            >
            <span>View All Products</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            </Link>
        </div>
        </div>

        {/* 3-Column Grid Platform Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, idx) => (
            <div
            key={idx}
            className="group bg-white rounded-[16px] border border-gray-100 overflow-hidden shadow-[0px_10px_30px_rgba(38,50,56,0.02)] hover:shadow-[0px_20px_40px_rgba(38,50,56,0.06)] transition-all duration-300 flex flex-col h-full"
            >
            {/* Product Frame Image */}
            <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                />
                {/* Decorative Accent Tag */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-[11px] font-header font-bold text-[#0B5D1E] tracking-wider uppercase shadow-sm">
                Premium Quality
                </div>
            </div>

            {/* Informational Text Content Box */}
            <div className="p-6 lg:p-8 flex flex-col justify-between flex-grow">
                <div>
                <h3 className="font-header text-xl font-bold text-[#263238] group-hover:text-[#0B5D1E] transition-colors duration-200 mb-3">
                    {product.name}
                </h3>
                <p className="font-body text-sm text-[#263238]/70 leading-relaxed mb-6">
                    {product.description}
                </p>
                </div>

                {/* Bottom Interactive Trigger Action Link */}
                <div className="pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-header font-semibold uppercase tracking-wider text-[#0B5D1E] group-hover:text-[#2E7D32] transition-colors mt-auto">
                <span>Learn More</span>
                <div className="w-8 h-8 rounded-full bg-[#F5F7F5] group-hover:bg-[#0B5D1E] flex items-center justify-center transition-colors duration-300">
                    <svg 
                    className="w-4 h-4 text-[#0B5D1E] group-hover:text-white transform group-hover:translate-x-0.5 transition-all duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>

    </div>
    </section>
);
}