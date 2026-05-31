"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import ScrollReveal from "@/app/components/ui/ScrollReveal";
import GlowOrb from "@/app/components/ui/GlowOrb";

const plans = [
  {
    name: "Growth Audit",
    price: "$500",
    period: "one-time",
    tagline: "Understand exactly what's holding your community back.",
    description:
      "A deep-dive audit of your existing subreddit — or a complete strategy for launching a new one.",
    features: [
      "Full community health analysis",
      "Growth bottleneck identification",
      "Security vulnerability report",
      "90-day action roadmap",
      "1x strategy call (60 min)",
      "Written recommendations deck",
    ],
    cta: "Get Your Audit",
    featured: false,
    badge: null,
  },
  {
    name: "Subreddit Launch & Growth",
    price: "$2,500",
    period: "project",
    tagline: "From zero to a thriving community with real engagement.",
    description:
      "Full-service launch and growth package — everything needed to take a community from blank subreddit to active, self-sustaining hub.",
    features: [
      "Everything in Growth Audit",
      "Subreddit setup & branding",
      "Full launch sequence",
      "90-day active management",
      "Content strategy & calendar",
      "Security infrastructure setup",
      "Mod team recruitment",
      "Weekly progress reports",
      "Bi-weekly strategy calls",
    ],
    cta: "Start Your Community",
    featured: true,
    badge: "Best Value",
  },
  {
    name: "Ongoing Management",
    price: "$1,500",
    period: "month",
    tagline: "Hands-on management so you can focus on your business.",
    description:
      "Monthly retainer for communities that need consistent expert management, moderation, and growth strategy.",
    features: [
      "Daily moderation & curation",
      "Growth strategy iteration",
      "Monthly performance report",
      "Security monitoring",
      "Community events & campaigns",
      "2x strategy calls/month",
    ],
    cta: "Retain Aryan",
    featured: false,
    badge: null,
  },
];

export default function Pricing() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <GlowOrb size="xl" className="-right-40 bottom-20" opacity={0.06} />
      <GlowOrb size="lg" className="-left-20 top-20" opacity={0.05} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal direction="up">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-gold/40" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">
              Investment
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Transparent Pricing
          </h2>
          <p className="text-[#777] text-lg max-w-2xl mb-16">
            No retainers for retainers&apos; sake. Every package is designed to
            deliver clear, measurable outcomes.
          </p>
        </ScrollReveal>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1} direction="up">
              <motion.div
                whileHover={plan.featured ? {} : { y: -4 }}
                className={`relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-400 ${
                  plan.featured
                    ? "border-2 border-gold/40 bg-gradient-to-b from-gold/10 to-[#111]"
                    : "glass border border-white/8 hover:border-white/15"
                }`}
                style={{
                  boxShadow: plan.featured
                    ? "0 0 60px rgba(201,168,76,0.2), 0 20px 60px rgba(0,0,0,0.5)"
                    : undefined,
                }}
              >
                {/* Featured badge */}
                {plan.badge && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dim via-gold to-gold-light" />
                )}

                <div className="p-8 flex flex-col h-full">
                  {/* Plan name & badge */}
                  <div className="flex items-start justify-between mb-2">
                    <p
                      className={`text-xs font-semibold tracking-widest uppercase ${
                        plan.featured ? "text-gold" : "text-[#555]"
                      }`}
                    >
                      {plan.name}
                    </p>
                    {plan.badge && (
                      <span className="px-2.5 py-1 rounded-md bg-gold/20 text-gold text-xs font-bold border border-gold/30 flex items-center gap-1">
                        <Zap size={10} />
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mb-2">
                    <span
                      className={`text-5xl font-black ${
                        plan.featured ? "gold-text" : "text-white"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-[#555] text-sm ml-2">/{plan.period}</span>
                  </div>

                  {/* Tagline */}
                  <p className="text-[#888] text-sm mb-6 leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-white/8 mb-6" />

                  {/* Features */}
                  <div className="space-y-3 flex-grow mb-8">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            plan.featured
                              ? "bg-gold/20 border border-gold/30"
                              : "bg-white/5 border border-white/10"
                          }`}
                        >
                          <Check
                            size={11}
                            className={plan.featured ? "text-gold" : "text-[#777]"}
                          />
                        </div>
                        <span className="text-[#888] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={scrollToContact}
                    className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 ${
                      plan.featured
                        ? "btn-primary text-black"
                        : "border border-white/15 text-white hover:border-gold/30 hover:text-gold hover:bg-gold/5"
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom note */}
        <ScrollReveal delay={0.4} direction="up">
          <p className="text-center text-[#555] text-sm mt-8">
            All prices in USD. Custom enterprise packages available.{" "}
            <button
              onClick={scrollToContact}
              className="text-gold hover:underline transition-all"
            >
              Let&apos;s talk.
            </button>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
