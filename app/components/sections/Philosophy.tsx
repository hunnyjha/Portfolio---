"use client";

import { motion } from "framer-motion";
import { BarChart3, Leaf, Lock, RefreshCw } from "lucide-react";
import ScrollReveal from "@/app/components/ui/ScrollReveal";
import GlowOrb from "@/app/components/ui/GlowOrb";

const principles = [
  {
    letter: "A",
    icon: BarChart3,
    title: "Engagement Over Vanity Metrics",
    description:
      "A community with 1,000 daily active commenters beats one with 100,000 passive subscribers. I optimize for comments, return visits, and post engagement — not just subscriber count.",
    metric: "568K comments",
    metricLabel: "on r/ArtofPresence",
  },
  {
    letter: "B",
    icon: Leaf,
    title: "Organic Growth Only",
    description:
      "Paid growth creates fragile communities that collapse when the ad spend stops. Every member I grow is genuinely interested — which is why retention stays high and engagement compounds.",
    metric: "100%",
    metricLabel: "organic across all projects",
  },
  {
    letter: "C",
    icon: Lock,
    title: "Security Is Part of Growth",
    description:
      "Spam, bad actors, and coordinated attacks erode trust and drive away real members. Security infrastructure isn't overhead — it's the foundation that lets communities scale.",
    metric: "Zero",
    metricLabel: "successful spam campaigns",
  },
  {
    letter: "D",
    icon: RefreshCw,
    title: "Built To Run Without Me",
    description:
      "My goal is to make myself unnecessary. A community that collapses without active management isn't a success — it's a dependency. I build systems, culture, and mod teams that sustain.",
    metric: "Self-sustaining",
    metricLabel: "communities at handoff",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-32 overflow-hidden">
      <GlowOrb size="lg" className="left-1/2 -translate-x-1/2 top-1/4" opacity={0.05} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal direction="up">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-gold/40" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">
              How I Think
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Growth Philosophy
          </h2>
          <p className="text-[#777] text-lg max-w-2xl mb-16">
            Four principles that shape every decision I make — from launch strategy
            to long-term community health.
          </p>
        </ScrollReveal>

        {/* Principles grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((p, i) => (
            <ScrollReveal key={p.letter} delay={i * 0.1} direction="up">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative p-8 rounded-2xl glass border border-white/8 hover:border-gold/20 transition-all duration-400 overflow-hidden"
              >
                {/* Large letter background */}
                <div className="absolute top-6 right-6 text-[120px] font-black leading-none pointer-events-none select-none text-white/[0.025] group-hover:text-white/[0.04] transition-colors duration-500">
                  {p.letter}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/15 transition-colors duration-300">
                        <p.icon size={18} className="text-gold" />
                      </div>
                      <span className="text-gold font-black text-xs tracking-widest">
                        PRINCIPLE {p.letter}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {p.title}
                  </h3>

                  <p className="text-[#777] text-sm leading-relaxed mb-6">
                    {p.description}
                  </p>

                  {/* Metric callout */}
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/8">
                    <div>
                      <p className="text-white font-black text-lg leading-none mb-0.5">
                        {p.metric}
                      </p>
                      <p className="text-[#555] text-xs">{p.metricLabel}</p>
                    </div>
                  </div>
                </div>

                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Philosophy quote */}
        <ScrollReveal delay={0.4} direction="up">
          <div className="mt-16 p-10 rounded-2xl border border-gold/20 bg-gold/5 text-center relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative z-10">
              <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">
                The Core Belief
              </p>
              <p className="text-2xl md:text-3xl font-black text-white max-w-3xl mx-auto leading-tight">
                &ldquo;A community that grows organically, engages authentically, and
                runs independently — that&apos;s the only kind worth building.&rdquo;
              </p>
              <p className="text-gold font-semibold mt-6">— Aryan</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
