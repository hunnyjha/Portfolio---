"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Reddit", href: "#", icon: "R" },
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "Twitter", href: "#", icon: "X" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/8 overflow-hidden">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-dim flex items-center justify-center text-black font-bold text-sm">
                A
              </div>
              <span className="font-bold text-white">Aryan</span>
            </div>
            <p className="text-[#666] text-sm leading-relaxed max-w-xs mb-6">
              Reddit Community Growth Strategist. Building thriving, high-engagement
              communities for brands, founders, and creators — 100% organically.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-[#555] hover:text-gold hover:border-gold/30 transition-all duration-300 text-xs font-bold"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[#555] text-xs font-semibold tracking-widest uppercase mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-[#777] text-sm hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#555] text-xs font-semibold tracking-widest uppercase mb-5">
              Contact
            </p>
            <div className="space-y-4">
              <a
                href="mailto:aryan00099988000@gmail.com"
                className="flex items-start gap-3 group"
              >
                <Mail
                  size={14}
                  className="text-gold mt-0.5 flex-shrink-0"
                />
                <span className="text-[#777] text-sm group-hover:text-white transition-colors duration-200 break-all">
                  aryan00099988000@gmail.com
                </span>
              </a>
              <a
                href="tel:+917260054409"
                className="flex items-center gap-3 group"
              >
                <Phone size={14} className="text-gold flex-shrink-0" />
                <span className="text-[#777] text-sm group-hover:text-white transition-colors duration-200">
                  +91 72600 54409
                </span>
              </a>
            </div>

            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg btn-primary text-black font-bold text-xs"
              >
                Book Consultation
                <ExternalLink size={12} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#444] text-xs">
            © {new Date().getFullYear()} Aryan. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-[#333] text-xs">
              Reddit Community Growth Strategist
            </p>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[#444] text-xs">Available for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
