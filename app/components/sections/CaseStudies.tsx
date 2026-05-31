"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Users, Eye, MessageSquare, ChevronDown, ExternalLink } from "lucide-react";
import ScrollReveal from "@/app/components/ui/ScrollReveal";
import CountUp from "@/app/components/ui/CountUp";
import GlowOrb from "@/app/components/ui/GlowOrb";

const caseStudies = [
  {
    id: "artofpresence",
    subreddit: "r/ArtofPresence",
    tagline: "Built from scratch to self-sustaining powerhouse",
    badge: "Flagship",
    badgeColor: "gold",
    metrics: [
      { icon: Users, value: 43.4, suffix: "K", label: "Members", decimals: 1 },
      { icon: Eye, value: 4.4, suffix: "M", label: "Views/Year", decimals: 1 },
      { icon: Users, value: 291, suffix: "K", label: "Weekly Visitors" },
      { icon: MessageSquare, value: 568, suffix: "K", label: "Comments Published" },
    ],
    story: [
      { milestone: "Day 1", event: "Subreddit created — 0 members, no posts, no identity" },
      { milestone: "Month 1", event: "5,000 members — community culture established, top posts going viral" },
      { milestone: "Month 3", event: "15,000 members — growth rate accelerating, self-sustaining content loops" },
      { milestone: "Month 6+", event: "43,400+ members — 4.4M annual views, 568K published comments" },
    ],
    description:
      "My most ambitious project. r/ArtofPresence was built from a blank subreddit to a community generating over 4.4 million views per year — entirely through organic strategy. No paid promotion. No shortcuts. The community now runs itself.",
    insights: [
      "Niche positioning drove organic discovery",
      "Content calendar created predictable viral moments",
      "Security systems kept engagement quality high",
      "Retention-first approach generated returning visitors",
    ],
    color: "from-gold/10",
    glowColor: "#C9A84C",
  },
  {
    id: "goingbald",
    subreddit: "r/AmIGoingBaldHelp",
    tagline: "Proof the framework works in any niche",
    badge: "High-Intent Niche",
    badgeColor: "blue",
    metrics: [
      { icon: Users, value: 2, suffix: "K+", label: "Members" },
      { icon: Eye, value: 150, suffix: "K", label: "Monthly Views" },
    ],
    story: [
      { milestone: "Challenge", event: "Sensitive, high-stakes niche requiring careful community management" },
      { milestone: "Strategy", event: "Created safe space for real conversations — trust became the growth engine" },
      { milestone: "Result", event: "2K+ engaged members generating 150K monthly views" },
    ],
    description:
      "A high-intent niche with real emotional stakes. Built a community where people dealing with hair loss could find genuine support and information. The engagement-to-subscriber ratio here is exceptional — proof that targeted, trust-based communities punch far above their size.",
    insights: [
      "High-intent niche = high retention",
      "Sensitive topic required strict moderation",
      "Medical-adjacent content drove consistent SEO traffic",
    ],
    color: "from-blue-500/10",
    glowColor: "#3B82F6",
  },
  {
    id: "influencerask",
    subreddit: "r/influencerask",
    tagline: "Fastest community launch — engagement outpaced subscribers",
    badge: "Speed Record",
    badgeColor: "emerald",
    metrics: [
      { icon: Users, value: 1.1, suffix: "K", label: "Members in 3 Weeks", decimals: 1 },
      { icon: Eye, value: 68.7, suffix: "K", label: "Views in 7 Days", decimals: 1 },
      { icon: Users, value: 14.7, suffix: "K", label: "Weekly Visitors", decimals: 1 },
      { icon: TrendingUp, value: 753, suffix: "+", label: "Members in One Week" },
    ],
    story: [
      { milestone: "Week 1", event: "+753 members — fastest 0-to-active launch recorded" },
      { milestone: "Week 2", event: "68,700 views generated — engagement far outpacing subscriber count" },
      { milestone: "Week 3", event: "1,100+ members with 14,700 weekly visitors" },
    ],
    description:
      "The fastest community launch I&apos;ve executed. r/influencerask proved that with the right launch sequence, a new subreddit can generate tens of thousands of views before most communities hit their first hundred members. Engagement was 6x higher than subscriber count in the first week.",
    insights: [
      "Launch sequence matters more than niche size",
      "Seeded content strategy drove immediate engagement",
      "68K views with <1K members = exceptional quality signal",
    ],
    color: "from-emerald-500/10",
    glowColor: "#10B981",
  },
];

function GrowthBar({
  value,
  max,
  color,
}: {
  value: number;
  max: number;
  color: string;
}) {
  return (
    <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${(value / max) * 100}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        className="absolute inset-y-0 left-0 rounded-full"
        style={{ background: color }}
      />
    </div>
  );
}

export default function CaseStudies() {
  const [expanded, setExpanded] = useState<string | null>("artofpresence");

  return (
    <section id="case-studies" className="relative py-32 overflow-hidden">
      <GlowOrb size="xl" className="-right-48 top-1/3" opacity={0.05} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal direction="up">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-gold/40" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">
              Proven Results
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Case Studies
          </h2>
          <p className="text-[#777] text-lg max-w-2xl mb-16">
            Three communities. Three different niches. One consistent outcome: real
            growth, real engagement, real results.
          </p>
        </ScrollReveal>

        {/* Case study cards */}
        <div className="space-y-4">
          {caseStudies.map((cs, i) => {
            const isOpen = expanded === cs.id;
            const badgeColors: Record<string, string> = {
              gold: "bg-gold/15 text-gold border-gold/30",
              blue: "bg-blue-500/15 text-blue-400 border-blue-500/30",
              emerald: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
            };

            return (
              <ScrollReveal key={cs.id} delay={i * 0.1} direction="up">
                <motion.div
                  layout
                  className={`rounded-2xl glass border transition-all duration-500 overflow-hidden ${
                    isOpen ? "border-white/15" : "border-white/8 hover:border-white/12"
                  }`}
                >
                  {/* Header */}
                  <button
                    onClick={() => setExpanded(isOpen ? null : cs.id)}
                    className="w-full p-6 md:p-8 flex items-start md:items-center justify-between gap-4 text-left"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 flex-1">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${badgeColors[cs.badgeColor]}`}
                          >
                            {cs.badge}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {cs.subreddit}
                        </h3>
                        <p className="text-[#666] text-sm mt-1">{cs.tagline}</p>
                      </div>

                      {/* Quick metrics preview */}
                      <div className="flex gap-6 md:ml-auto">
                        {cs.metrics.slice(0, 2).map((m) => (
                          <div key={m.label} className="text-center md:text-left">
                            <p className="text-xl font-black text-white">
                              <CountUp
                                end={m.value}
                                suffix={m.suffix}
                                decimals={m.decimals ?? 0}
                              />
                            </p>
                            <p className="text-[#555] text-xs">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center flex-shrink-0 text-[#666]"
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                      >
                        <div className="px-6 md:px-8 pb-8 border-t border-white/8">
                          <div className="pt-8 grid md:grid-cols-3 gap-8">
                            {/* All metrics */}
                            <div className="md:col-span-1">
                              <p className="text-xs font-semibold tracking-widest uppercase text-[#555] mb-5">
                                Key Metrics
                              </p>
                              <div className="space-y-4">
                                {cs.metrics.map((m) => (
                                  <div key={m.label}>
                                    <div className="flex items-center justify-between mb-1.5">
                                      <div className="flex items-center gap-2">
                                        <m.icon size={13} className="text-[#555]" />
                                        <span className="text-[#777] text-xs">
                                          {m.label}
                                        </span>
                                      </div>
                                      <span className="text-white font-bold text-sm">
                                        <CountUp
                                          end={m.value}
                                          suffix={m.suffix}
                                          decimals={m.decimals ?? 0}
                                        />
                                      </span>
                                    </div>
                                    <GrowthBar
                                      value={m.value}
                                      max={
                                        cs.id === "artofpresence"
                                          ? 570
                                          : cs.id === "goingbald"
                                          ? 150
                                          : 70
                                      }
                                      color={cs.glowColor}
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Story */}
                            <div className="md:col-span-1">
                              <p className="text-xs font-semibold tracking-widest uppercase text-[#555] mb-5">
                                Growth Story
                              </p>
                              <div className="relative pl-4 border-l border-white/10 space-y-4">
                                {cs.story.map((s, j) => (
                                  <motion.div
                                    key={j}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: j * 0.08 }}
                                    className="relative"
                                  >
                                    <div
                                      className="absolute -left-[17px] top-1.5 w-2 h-2 rounded-full"
                                      style={{ background: cs.glowColor }}
                                    />
                                    <p
                                      className="text-xs font-bold mb-0.5"
                                      style={{ color: cs.glowColor }}
                                    >
                                      {s.milestone}
                                    </p>
                                    <p className="text-[#888] text-sm leading-relaxed">
                                      {s.event}
                                    </p>
                                  </motion.div>
                                ))}
                              </div>
                            </div>

                            {/* Insights */}
                            <div className="md:col-span-1">
                              <p className="text-xs font-semibold tracking-widest uppercase text-[#555] mb-5">
                                What Worked
                              </p>
                              <div className="space-y-3 mb-6">
                                {cs.insights.map((insight, j) => (
                                  <motion.div
                                    key={j}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: j * 0.07 }}
                                    className="flex items-start gap-2"
                                  >
                                    <div
                                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                      style={{ background: cs.glowColor }}
                                    />
                                    <p className="text-[#888] text-sm">{insight}</p>
                                  </motion.div>
                                ))}
                              </div>
                              <p className="text-[#777] text-sm leading-relaxed">
                                {cs.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.3} direction="up">
          <div className="mt-12 text-center">
            <p className="text-[#666] text-sm mb-4">
              Want results like these for your community?
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gold/30 text-gold font-semibold text-sm hover:bg-gold/5 transition-all duration-300"
            >
              Start Your Growth Journey
              <ExternalLink size={14} />
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
