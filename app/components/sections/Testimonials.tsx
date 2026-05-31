"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import ScrollReveal from "@/app/components/ui/ScrollReveal";
import GlowOrb from "@/app/components/ui/GlowOrb";

const testimonials = [
  {
    quote:
      "You are the fastest growing moderator I have ever seen.",
    author: "BeFreed",
    role: "Wellness & Mindfulness Platform",
    initial: "B",
    stars: 5,
    highlight: true,
  },
  {
    quote:
      "I think you are the best in terms of growth — like 200% ahead of others.",
    author: "Eugenix Hair Science",
    role: "Medical Hair Restoration",
    initial: "E",
    stars: 5,
    highlight: false,
  },
  {
    quote:
      "Approaching you for my work is the best thing I've done.",
    author: "Independent Founder",
    role: "Australia — Private Client",
    initial: "P",
    stars: 5,
    highlight: false,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.635l3.455-.505L7 1z"
            fill="#C9A84C"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <GlowOrb size="xl" className="-left-40 top-1/4" opacity={0.06} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal direction="up">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-gold/40" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">
              Client Feedback
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            What Clients Say
          </h2>
          <p className="text-[#777] text-lg max-w-2xl mb-16">
            Unsolicited feedback from the people who&apos;ve seen the work up close.
          </p>
        </ScrollReveal>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.author} delay={i * 0.12} direction="up">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`relative group p-8 rounded-2xl h-full flex flex-col overflow-hidden transition-all duration-400 ${
                  t.highlight
                    ? "bg-gradient-to-br from-gold/12 to-gold/4 border border-gold/30"
                    : "glass border border-white/8 hover:border-white/15"
                }`}
                style={{
                  boxShadow: t.highlight
                    ? "0 0 40px rgba(201,168,76,0.12), 0 8px 32px rgba(0,0,0,0.5)"
                    : undefined,
                }}
              >
                {/* Quote icon */}
                <div className="flex justify-between items-start mb-6">
                  <StarRating count={t.stars} />
                  <Quote
                    size={28}
                    className={t.highlight ? "text-gold/40" : "text-white/10"}
                  />
                </div>

                {/* Quote text */}
                <blockquote className="flex-grow">
                  <p
                    className={`text-lg md:text-xl font-medium leading-relaxed mb-8 ${
                      t.highlight ? "text-white" : "text-white"
                    }`}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-6 border-t border-white/8">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                      t.highlight
                        ? "bg-gold/20 text-gold border border-gold/30"
                        : "bg-white/8 text-white border border-white/10"
                    }`}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.author}</p>
                    <p className="text-[#555] text-xs">{t.role}</p>
                  </div>
                </div>

                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-px ${
                    t.highlight
                      ? "bg-gradient-to-r from-transparent via-gold/50 to-transparent"
                      : "bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  }`}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Social proof bar */}
        <ScrollReveal delay={0.4} direction="up">
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 p-8 rounded-2xl border border-white/8 glass">
            <div className="text-center">
              <p className="text-3xl font-black gold-text">3+</p>
              <p className="text-[#555] text-xs mt-1">Satisfied Clients</p>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div className="text-center">
              <p className="text-3xl font-black gold-text">100%</p>
              <p className="text-[#555] text-xs mt-1">Client Retention</p>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div className="text-center">
              <p className="text-3xl font-black gold-text">200%</p>
              <p className="text-[#555] text-xs mt-1">Ahead of Competition</p>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div className="text-center">
              <p className="text-3xl font-black gold-text">4.4M+</p>
              <p className="text-[#555] text-xs mt-1">Annual Views Delivered</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
