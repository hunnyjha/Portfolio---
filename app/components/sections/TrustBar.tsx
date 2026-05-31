"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/app/components/ui/ScrollReveal";

const clients = [
  {
    name: "BeFreed",
    description: "Wellness & Mindfulness",
    initial: "B",
  },
  {
    name: "Eugenix Hair Science",
    description: "Medical & Health",
    initial: "E",
  },
  {
    name: "Private Client",
    description: "Australia — Independent Founder",
    initial: "P",
  },
];

export default function TrustBar() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Top border */}
      <div className="section-divider mb-16" />

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up">
          <p className="text-center text-[#555] text-xs font-semibold tracking-widest uppercase mb-10">
            Trusted by founders, brands, and growing communities
          </p>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          {clients.map((client, i) => (
            <ScrollReveal key={client.name} delay={i * 0.1} direction="up">
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(201,168,76,0.3)" }}
                className="group flex items-center gap-4 px-6 py-4 rounded-2xl glass border border-white/8 transition-all duration-300 min-w-[220px]"
              >
                {/* Avatar */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-bold text-sm">
                    {client.initial}
                  </span>
                </div>

                <div>
                  <p className="font-semibold text-white text-sm group-hover:text-gold transition-colors duration-300">
                    {client.name}
                  </p>
                  <p className="text-[#555] text-xs">{client.description}</p>
                </div>

                {/* Verified badge */}
                <div className="ml-auto">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="8" fill="#C9A84C20" />
                    <path
                      d="M5 8l2 2 4-4"
                      stroke="#C9A84C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats summary line */}
        <ScrollReveal delay={0.4} direction="up">
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-center">
            {[
              { value: "45K+", label: "Members Grown" },
              { value: "4.4M+", label: "Annual Views" },
              { value: "100%", label: "Organic Growth" },
              { value: "3+", label: "Communities Built" },
            ].map((item) => (
              <div key={item.label} className="px-6">
                <p className="text-2xl font-black gold-text">{item.value}</p>
                <p className="text-[#555] text-xs font-medium mt-0.5">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom border */}
      <div className="section-divider mt-16" />
    </section>
  );
}
