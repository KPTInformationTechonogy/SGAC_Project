"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, ArrowUpRight, Loader2, CheckCircle2, AlertTriangle } from "lucide-react";

export default function ContactFooter() {
const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });

// Status UX States
const [isSubmitting, setIsSubmitting] = useState(false);
const [submissionStatus, setSubmissionStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
}>({ type: null, message: "" });

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus({ type: null, message: "" });

    try {
    const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
    });

    const result = await response.json();

    if (response.ok) {
        setSubmissionStatus({
        type: "success",
        message: "Thank you! Your institutional message has been securely transmitted. Our corporate desk will review and reach out within 24 business hours.",
        });
        // Clear out state parameters upon definitive execution success
        setFormState({ name: "", email: "", phone: "", message: "" });
    } else {
        setSubmissionStatus({
        type: "error",
        message: result.error || "A gateway error occurred. Please attempt transmission once more.",
        });
    }
    } catch (err) {
    setSubmissionStatus({
        type: "error",
        message: "Network core channel pipeline failure. Check network parameters and retry.",
    });
    } finally {
    setIsSubmitting(false);
    }
};

return (
    <>
    {/* =========================================================================
        SECTION: CONTACT US (Clean Split Layout Matrix)
        ========================================================================= */}
    <section id="contact" className="bg-white py-20 lg:py-28 relative scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* COLUMN 1: Corporate Communications & Info (5 Columns) */}
            <div className="lg:col-span-5">
            <span className="inline-block font-body text-xs font-bold tracking-widest text-[#2E7D32] uppercase bg-[#0B5D1E]/5 px-4 py-1.5 rounded-full">
                Get In Touch
            </span>
            <h2 className="font-header text-3xl sm:text-4xl font-bold text-[#263238] tracking-tight mt-4 mb-6">
                Ready to Partner with SGAC?
            </h2>
            <div className="w-12 h-1 bg-[#F9A825] mb-8 rounded" />
            <p className="font-body text-sm sm:text-base text-[#263238]/70 leading-relaxed mb-10">
                Whether you are an industrial commodity buyer looking for premium supply lines or an agro-investor seeking scalable farming operations, our corporate management team is here to coordinate.
            </p>

            {/* Direct Communication Channels */}
            <div className="space-y-6">
                {[
                { icon: MapPin, title: "Headquarters Address", detail: "No. 30, Adam Ibrahim Street, Badawa Layout, Nasarawa LGA, Kano, Nigeria." },
                { icon: Phone, title: "Commercial Inquiries", detail: "+234 9078061022" },
                { icon: Mail, title: "Corporate Electronic Mail", detail: "hellokpt01@gmail.com" },
                { icon: Clock, title: "Standard Operations Desk", detail: "Monday — Saturday | 08:00 AM - 05:00 PM (WAT)" },
                ].map((item, idx) => {
                const Icon = item.icon;
                return (
                    <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[#0B5D1E]/5 group-hover:bg-[#0B5D1E] text-[#0B5D1E] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm">
                        <Icon className="w-4 h-4" />
                    </div>
                    <div>
                        <h4 className="font-header text-xs font-bold uppercase tracking-wider text-[#263238]/40 mb-0.5">
                        {item.title}
                        </h4>
                        <p className="font-body text-sm font-semibold text-[#263238]/80 group-hover:text-[#0B5D1E] transition-colors">
                        {item.detail}
                        </p>
                    </div>
                    </div>
                );
                })}
            </div>
            </div>

            {/* COLUMN 2: High-Contrast Interactive Form Block (7 Columns) */}
            <div className="lg:col-span-7 bg-[#F5F7F5] border border-gray-100 p-8 sm:p-10 rounded-[24px] shadow-[0px_15px_40px_rgba(38,50,56,0.02)]">
            <h3 className="font-header text-xl font-bold text-[#263238] mb-2">
                Send an Institutional Message
            </h3>
            <p className="font-body text-xs text-[#263238]/60 mb-8">
                Fill out the secure communication vector form below and a manager will follow up within 24 business hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label className="block font-header text-xs font-bold text-[#263238]/70 uppercase tracking-wider mb-2">Full Name</label>
                    <input 
                    type="text" required placeholder="e.g., John Doe"
                    disabled={isSubmitting}
                    className="w-full font-body text-sm bg-white border border-gray-200 focus:border-[#0B5D1E] rounded-xl px-4 py-3.5 outline-none text-[#263238] transition-colors disabled:bg-gray-100 disabled:text-gray-400"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block font-header text-xs font-bold text-[#263238]/70 uppercase tracking-wider mb-2">Email Address</label>
                    <input 
                    type="email" required placeholder="e.g., john@company.com"
                    disabled={isSubmitting}
                    className="w-full font-body text-sm bg-white border border-gray-200 focus:border-[#0B5D1E] rounded-xl px-4 py-3.5 outline-none text-[#263238] transition-colors disabled:bg-gray-100 disabled:text-gray-400"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                </div>
                </div>

                <div>
                <label className="block font-header text-xs font-bold text-[#263238]/70 uppercase tracking-wider mb-2">Phone Number</label>
                <input 
                    type="tel" placeholder="e.g., +234 803 123 4567"
                    disabled={isSubmitting}
                    className="w-full font-body text-sm bg-white border border-gray-200 focus:border-[#0B5D1E] rounded-xl px-4 py-3.5 outline-none text-[#263238] transition-colors disabled:bg-gray-100 disabled:text-gray-400"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                />
                </div>

                <div>
                <label className="block font-header text-xs font-bold text-[#263238]/70 uppercase tracking-wider mb-2">Message Body</label>
                <textarea 
                    rows={4} required placeholder="Detail your procurement, specifications, or partnership inquiry details..."
                    disabled={isSubmitting}
                    className="w-full font-body text-sm bg-white border border-gray-200 focus:border-[#0B5D1E] rounded-xl px-4 py-3.5 outline-none text-[#263238] transition-colors resize-none disabled:bg-gray-100 disabled:text-gray-400"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
                </div>

                {/* Secure Communication Status Feedback Message Banner */}
                {submissionStatus.type && (
                <div className={`p-4 rounded-xl text-sm font-body border flex items-start gap-3 animate-fadeIn ${
                    submissionStatus.type === "success"
                    ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                    : "bg-amber-50 border-amber-200 text-amber-900"
                }`}>
                    {submissionStatus.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    )}
                    <span className="leading-relaxed text-xs">{submissionStatus.message}</span>
                </div>
                )}

                <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full font-header font-bold text-xs uppercase tracking-wider text-white bg-[#0B5D1E] hover:bg-[#2E7D32] disabled:bg-gray-400 py-4 rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-2 group"
                >
                {isSubmitting ? (
                    <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Message Layer...</span>
                    </>
                ) : (
                    <>
                    <span>Transmit Secure Message</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                )}
                </button>
            </form>
            </div>

        </div>
        </div>
    </section>

    {/* =========================================================================
        SECTION: FOOTER (Full-Width Deep Emerald Canvas backdrop)
        ========================================================================= */}
    <footer className="bg-[#0B5D1E] text-white border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Multi-Column Matrix Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
            
            {/* Profile Intro Column (4 Columns Wide) */}
            <div className="lg:col-span-4 space-y-5">
            <span className="font-header text-2xl font-black tracking-tight text-white">
                SG<span className="text-[#F9A825]">AC</span>
            </span>
            <p className="font-body text-xs lg:text-sm text-white/70 leading-relaxed max-w-sm">
                Stable Green Agricultural Company (SGAC) is an institutional leader in large-scale mechanized crop cultivation, livestock management, and value-added end-to-end processing across sub-Saharan Africa.
            </p>
            {/* High-Contrast Social Link Hub */}
            <div className="flex items-center gap-3 pt-2">
                {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                ].map((social, index) => {
                const SocialIcon = social.icon;
                return (
                    <a 
                    key={index} href={social.href} target="_blank" rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F9A825] text-white hover:text-[#263238] flex items-center justify-center transition-all duration-200 shadow-sm"
                    >
                    <SocialIcon className="w-4 h-4" />
                    </a>
                );
                })}
            </div>
            </div>

            {/* Quick Links Column (2 Columns Wide) */}
            <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-header text-xs font-bold uppercase tracking-widest text-[#F9A825] mb-4">
                Navigation Links
            </h4>
            <ul className="space-y-2.5">
                {[
                { label: "Home Base", href: "#" },
                { label: "Why Choose Us", href: "#why-choose-us" },
                { label: "Product Grid", href: "#products" },
                { label: "Impact Tracking", href: "#impact" },
                ].map((link, idx) => (
                <li key={idx}>
                    <Link href={link.href} className="font-body text-xs text-white/70 hover:text-white transition-colors block py-0.5">
                    {link.label}
                    </Link>
                </li>
                ))}
            </ul>
            </div>

            {/* Operational Domains Column (3 Columns Wide) */}
            <div className="lg:col-span-3">
            <h4 className="font-header text-xs font-bold uppercase tracking-widest text-[#F9A825] mb-4">
                Core Agro-Sectors
            </h4>
            <ul className="space-y-2.5">
                {["Mechanized Grain Farming", "Industrial Rice Milling", "Commercial Livestock Complex", "Agro-Commodity Distribution", "Outgrower Network Systems"].map((sector, idx) => (
                <li key={idx} className="font-body text-xs text-white/70 block py-0.5">
                    {sector}
                </li>
                ))}
            </ul>
            </div>

            {/* Legal Disclaimers Column (3 Columns Wide) */}
            <div className="lg:col-span-3">
            <h4 className="font-header text-xs font-bold uppercase tracking-widest text-[#F9A825] mb-4">
                Regulatory Compliance
            </h4>
            <p className="font-body text-xs text-white/60 leading-relaxed">
                Fully registered and compliant with all regulatory frameworks under the Corporate Affairs Commission (CAC) and federal ministries of agriculture.
            </p>
            </div>

        </div>

        {/* Bottom Copyright Block */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-body text-white/50">
            <p>© {new Date().getFullYear()} Stable Green Agricultural Company (SGAC) Ltd. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Operations</a>
            </div>
        </div>

        </div>
    </footer>
    </>
);
}