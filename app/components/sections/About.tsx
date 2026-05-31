"use client";

import { motion } from "framer-motion";
import { Shield, TrendingUp, Users, Heart } from "lucide-react";
import ScrollReveal from "@/app/components/ui/ScrollReveal";
import GlowOrb from "@/app/components/ui/GlowOrb";

const traits = [
  {
    icon: TrendingUp,
    title: "Organic Growth Specialist",
    description:
      "No paid ads, no shortcuts. Every member I bring in is genuinely interested — which is why retention and engagement stay consistently high.",
  },
  {
    icon: Users,
    title: "Community Architect",
    description:
      "I don't just grow numbers. I design communities with culture, rules, and rhythm — spaces people want to return to every day.",
  },
  {
    icon: Shield,
    title: "Security-First Moderator",
    description:
      "Spam, ban evasion, and coordinated attacks are growth killers. I build security systems that protect communities as they scale.",
  },
  {
    icon: Heart,
    title: "Long-Term Focus",
    description:
      "Vanity metrics are easy. Sustainable engagement is hard. I build communities that thrive long after I hand them off.",
  },
];

const timeline = [
  { year: "Month 1", event: "r/ArtofPresence — 0 to 5K members", highlight: true },
  { year: "Month 3", event: "Reached 15K members organically" },
  { year: "Month 6", event: "4.4M annual view run rate established", highlight: true },
  { year: "Month 8", event: "Eugenix Hair Science partnership begins" },
  { year: "Month 10", event: "r/influencerask — 1.1K in 3 weeks", highlight: true },
  { year: "Today", event: "43K+ members, 3 communities, 100% organic" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <GlowOrb size="lg" className="-left-32 top-1/4" opacity={0.07} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal direction="up">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-gold/40" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">
              About
            </span>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Story */}
          <div>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
                I don&apos;t just{" "}
                <span className="gold-text">grow communities.</span>
                <br />I build audiences.
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="space-y-5 text-[#A0A0A0] text-base leading-relaxed">
                <p>
                  Most Reddit "growth" strategies rely on luck, cross-posting spam,
                  or buying members from shady services. I built{" "}
                  <span className="text-white font-medium">
                    r/ArtofPresence from zero to 43,400 members
                  </span>{" "}
                  with zero paid promotion — and it now generates over{" "}
                  <span className="text-white font-medium">4.4 million views per year.</span>
                </p>
                <p>
                  My approach is systematic. I study the niche, architect the
                  community structure, establish posting rhythms, recruit early
                  advocates, and implement security systems that keep toxic actors
                  out while letting genuine members in.
                </p>
                <p>
                  The result: communities that{" "}
                  <span className="text-white font-medium">
                    grow, engage, and sustain themselves
                  </span>{" "}
                  — long after the initial launch push.
                </p>
                <p>
                  I&apos;ve worked with wellness brands, medical companies, and
                  independent founders across continents. Every project is treated
                  like a flagship — because it is.
                </p>
              </div>
            </ScrollReveal>

            {/* Timeline */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="mt-10">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#555] mb-6">
                  Growth Timeline
                </p>
                <div className="relative pl-6 border-l border-white/10 space-y-5">
                  {timeline.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="relative"
                    >
                      <div
                        className={`absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full border-2 ${
                          item.highlight
                            ? "bg-gold border-gold shadow-gold-sm"
                            : "bg-[#2A2A2A] border-[#444]"
                        }`}
                      />
                      <p
                        className={`text-xs font-semibold mb-0.5 ${
                          item.highlight ? "text-gold" : "text-[#555]"
                        }`}
                      >
                        {item.year}
                      </p>
                      <p
                        className={`text-sm ${
                          item.highlight ? "text-white font-medium" : "text-[#777]"
                        }`}
                      >
                        {item.event}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Traits */}
          <div className="space-y-4 lg:pt-8">
            {traits.map((trait, i) => (
              <ScrollReveal key={trait.title} direction="left" delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 4, borderColor: "rgba(201,168,76,0.25)" }}
                  className="group p-6 rounded-2xl glass border border-white/8 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/15 transition-colors duration-300">
                      <trait.icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1.5 text-base">
                        {trait.title}
                      </h3>
                      <p className="text-[#777] text-sm leading-relaxed">
                        {trait.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}

            {/* Quote */}
            <ScrollReveal direction="left" delay={0.4}>
              <div className="p-6 rounded-2xl border border-gold/20 bg-gold/5 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl text-gold/10 font-serif leading-none">
                  &ldquo;
                </div>
                <p className="text-white font-medium text-base leading-relaxed relative z-10">
                  &ldquo;You are the fastest growing moderator I have ever seen.&rdquo;
                </p>
                <p className="text-gold text-sm font-semibold mt-3">— BeFreed</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
