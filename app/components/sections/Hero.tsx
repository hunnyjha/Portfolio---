"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, TrendingUp, Users, Eye, Zap } from "lucide-react";
import CountUp from "@/app/components/ui/CountUp";
import GlowOrb from "@/app/components/ui/GlowOrb";

const stats = [
  {
    icon: Users,
    value: 45,
    suffix: "K+",
    label: "Members Built",
    color: "from-gold/20 to-gold/5",
  },
  {
    icon: Eye,
    value: 4.4,
    suffix: "M+",
    label: "Annual Views",
    color: "from-blue-500/20 to-blue-500/5",
    decimals: 1,
  },
  {
    icon: TrendingUp,
    value: 3,
    suffix: "",
    label: "Communities from Scratch",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    icon: Zap,
    value: 100,
    suffix: "%",
    label: "Organic Growth",
    color: "from-purple-500/20 to-purple-500/5",
  },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Glow orbs */}
      <GlowOrb
        size="xl"
        opacity={0.08}
        className="-top-32 -left-32"
      />
      <GlowOrb
        size="xl"
        opacity={0.06}
        className="-bottom-32 -right-32"
      />
      <GlowOrb
        size="md"
        color="white"
        opacity={0.03}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Animated gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20"
      >
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gold/20 text-gold text-sm font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-gold" />
            Reddit Community Growth Strategist
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6"
          >
            <span className="block text-white">From</span>
            <span className="block gold-text">0 Members</span>
            <span className="block text-white">to Millions</span>
            <span className="block text-white/60">of Views.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl mb-4"
          >
            Organic Reddit Growth for{" "}
            <span className="text-white font-medium">Brands</span>,{" "}
            <span className="text-white font-medium">Founders</span>, and{" "}
            <span className="text-white font-medium">Communities</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-base text-[#666] max-w-xl mb-12"
          >
            Hi, I&apos;m <span className="text-white font-semibold">Aryan</span>. I grow Reddit
            communities from zero into thriving, high-engagement audiences —
            100% organically.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("contact")}
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl btn-primary text-black font-bold text-base transition-all duration-300 min-w-[200px]"
            >
              Book a Consultation
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("case-studies")}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass border border-white/10 text-white font-semibold text-base hover:border-gold/30 hover:text-gold transition-all duration-300 min-w-[200px]"
            >
              View Case Studies
            </motion.button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                className="stat-card relative group p-5 rounded-2xl glass border border-white/8 hover:border-gold/25 transition-all duration-500 overflow-hidden"
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative">
                  <stat.icon
                    size={18}
                    className="text-gold mb-2 opacity-70"
                  />
                  <div className="text-3xl md:text-4xl font-black text-white mb-1">
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals ?? 0}
                      duration={2}
                    />
                  </div>
                  <p className="text-[#666] text-xs font-medium leading-tight">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <p className="text-[#444] text-xs tracking-widest uppercase">
              Scroll
            </p>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-px h-12 bg-gradient-to-b from-gold/40 to-transparent"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
