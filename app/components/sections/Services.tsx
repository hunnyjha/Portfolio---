"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Shield,
  Users,
  BarChart3,
  Megaphone,
  Lightbulb,
} from "lucide-react";
import ScrollReveal from "@/app/components/ui/ScrollReveal";
import GlowOrb from "@/app/components/ui/GlowOrb";

const services = [
  {
    icon: TrendingUp,
    title: "0-to-Scale Subreddit Growth",
    description:
      "Full-cycle launch and growth from blank subreddit to thriving community. Includes positioning strategy, content architecture, and launch sequencing.",
    deliverables: [
      "Subreddit positioning & naming",
      "Content strategy & calendar",
      "Launch sequence execution",
      "First 90-day growth roadmap",
    ],
    featured: false,
  },
  {
    icon: Users,
    title: "Community Management",
    description:
      "Ongoing hands-on management that keeps your community active, engaged, and growing. Daily moderation, content curation, and member nurturing.",
    deliverables: [
      "Daily moderation & curation",
      "Member engagement programs",
      "Weekly performance reports",
      "Community health monitoring",
    ],
    featured: false,
  },
  {
    icon: Shield,
    title: "Subreddit Security Audits",
    description:
      "Comprehensive security review to protect your community from spam, ban evasion, brigading, and coordinated attacks that kill engagement.",
    deliverables: [
      "Full security vulnerability scan",
      "Automod ruleset optimization",
      "Mod queue workflow redesign",
      "Emergency response playbook",
    ],
    featured: false,
  },
  {
    icon: Megaphone,
    title: "Brand Community Building",
    description:
      "Build a Reddit presence for your brand that creates genuine community ownership — not just another marketing channel.",
    deliverables: [
      "Brand-to-community positioning",
      "Editorial calendar for brand voice",
      "Community ambassador programs",
      "Cross-platform integration",
    ],
    featured: true,
  },
  {
    icon: BarChart3,
    title: "Moderator Team Leadership",
    description:
      "Build, train, and lead a moderator team that can scale your community beyond what any single person can manage.",
    deliverables: [
      "Mod recruitment & vetting",
      "Training documentation",
      "Team leadership structure",
      "Escalation protocols",
    ],
    featured: false,
  },
  {
    icon: Lightbulb,
    title: "Growth Consulting",
    description:
      "Strategic advisory for founders and brands who already have a Reddit presence but need expert guidance to unlock the next level.",
    deliverables: [
      "Deep community audit",
      "Growth bottleneck analysis",
      "Custom strategy playbook",
      "Implementation guidance",
    ],
    featured: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <GlowOrb size="lg" className="-right-20 top-20" opacity={0.06} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal direction="up">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-gold/40" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">
              Services
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                What I Do
                <br />
                <span className="gold-text">Exceptionally Well.</span>
              </h2>
            </div>
            <p className="text-[#777] text-base max-w-md md:text-right">
              Each service is outcome-driven. I don&apos;t bill for hours — I build
              systems that generate results.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.07} direction="up">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`relative group p-7 rounded-2xl h-full flex flex-col transition-all duration-400 overflow-hidden ${
                  service.featured
                    ? "bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/30"
                    : "glass border border-white/8 hover:border-white/15"
                }`}
                style={{
                  boxShadow: service.featured
                    ? "0 0 30px rgba(201,168,76,0.15), 0 8px 32px rgba(0,0,0,0.4)"
                    : undefined,
                }}
              >
                {service.featured && (
                  <div className="absolute top-5 right-5">
                    <span className="px-2.5 py-1 rounded-md bg-gold/20 text-gold text-xs font-bold border border-gold/30">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                    service.featured
                      ? "bg-gold/20 border border-gold/40"
                      : "bg-white/5 border border-white/10 group-hover:bg-gold/10 group-hover:border-gold/20"
                  }`}
                >
                  <service.icon
                    size={22}
                    className={
                      service.featured
                        ? "text-gold"
                        : "text-[#888] group-hover:text-gold transition-colors duration-300"
                    }
                  />
                </div>

                {/* Title */}
                <h3
                  className={`font-bold text-lg mb-3 ${
                    service.featured ? "text-white" : "text-white"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#777] text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2">
                  <p className="text-[#555] text-xs font-semibold tracking-widest uppercase">
                    Includes
                  </p>
                  {service.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2">
                      <div
                        className={`w-1 h-1 rounded-full flex-shrink-0 ${
                          service.featured ? "bg-gold" : "bg-[#444]"
                        }`}
                      />
                      <span className="text-[#888] text-xs">{d}</span>
                    </div>
                  ))}
                </div>

                {/* Hover line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-500 ${
                    service.featured
                      ? "bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-100"
                      : "bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100"
                  }`}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.3} direction="up">
          <div className="mt-16 p-8 rounded-2xl border border-white/8 glass text-center">
            <p className="text-white font-bold text-xl mb-2">
              Not sure which service fits your needs?
            </p>
            <p className="text-[#777] text-sm mb-6">
              Let&apos;s talk through your situation. First consultation is free.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-primary text-black font-bold text-sm"
            >
              Book Free Discovery Call
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
