"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, CheckCircle2, ArrowRight } from "lucide-react";
import ScrollReveal from "@/app/components/ui/ScrollReveal";
import GlowOrb from "@/app/components/ui/GlowOrb";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <GlowOrb size="xl" className="left-1/2 -translate-x-1/2 top-0" opacity={0.07} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal direction="up">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-gold/40" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            Let&apos;s Build a Community People Actually{" "}
            <span className="gold-text">Want to Participate In.</span>
          </h2>
          <p className="text-[#777] text-lg max-w-2xl mb-16">
            Whether you&apos;re starting from zero or looking to unlock a stalled
            community — let&apos;s talk about what&apos;s possible.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left — Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal direction="left" delay={0.1}>
              <motion.a
                href="mailto:aryan00099988000@gmail.com"
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-5 rounded-2xl glass border border-white/8 hover:border-gold/25 group transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/15 transition-colors duration-300">
                  <Mail size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-[#555] text-xs font-semibold tracking-widest uppercase mb-0.5">
                    Email
                  </p>
                  <p className="text-white font-medium text-sm group-hover:text-gold transition-colors duration-300">
                    aryan00099988000@gmail.com
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="ml-auto text-[#333] group-hover:text-gold group-hover:translate-x-1 transition-all duration-300"
                />
              </motion.a>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.15}>
              <motion.a
                href="tel:+917260054409"
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-5 rounded-2xl glass border border-white/8 hover:border-gold/25 group transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/15 transition-colors duration-300">
                  <Phone size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-[#555] text-xs font-semibold tracking-widest uppercase mb-0.5">
                    Phone
                  </p>
                  <p className="text-white font-medium text-sm group-hover:text-gold transition-colors duration-300">
                    +91 72600 54409
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="ml-auto text-[#333] group-hover:text-gold group-hover:translate-x-1 transition-all duration-300"
                />
              </motion.a>
            </ScrollReveal>

            {/* What to expect */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="p-6 rounded-2xl border border-white/8 glass">
                <p className="text-white font-semibold mb-4 text-sm">
                  What Happens Next
                </p>
                <div className="space-y-4">
                  {[
                    {
                      step: "01",
                      text: "I review your message within 24 hours",
                    },
                    {
                      step: "02",
                      text: "We schedule a 30-min discovery call",
                    },
                    {
                      step: "03",
                      text: "I send a custom strategy proposal",
                    },
                    {
                      step: "04",
                      text: "We start building your community",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <span className="text-gold font-black text-xs mt-0.5">
                        {item.step}
                      </span>
                      <p className="text-[#777] text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="relative p-8 rounded-2xl glass border border-white/10 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mb-6">
                      <CheckCircle2 size={30} className="text-gold" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Message Received
                    </h3>
                    <p className="text-[#777] text-sm max-w-xs">
                      I&apos;ll review your message and get back to you within 24
                      hours with next steps.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[#555] text-xs font-semibold tracking-widest uppercase mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#444] text-sm focus:outline-none focus:border-gold/40 transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-[#555] text-xs font-semibold tracking-widest uppercase mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#444] text-sm focus:outline-none focus:border-gold/40 transition-colors duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#555] text-xs font-semibold tracking-widest uppercase mb-2">
                        Company / Project
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company or project name"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#444] text-sm focus:outline-none focus:border-gold/40 transition-colors duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-[#555] text-xs font-semibold tracking-widest uppercase mb-2">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-gold/40 transition-colors duration-300 appearance-none"
                      >
                        <option value="" className="bg-[#111]">
                          Select a service...
                        </option>
                        <option value="audit" className="bg-[#111]">
                          Growth Audit ($500)
                        </option>
                        <option value="launch" className="bg-[#111]">
                          Subreddit Launch & Growth ($2,500)
                        </option>
                        <option value="management" className="bg-[#111]">
                          Ongoing Management ($1,500/mo)
                        </option>
                        <option value="consulting" className="bg-[#111]">
                          Growth Consulting
                        </option>
                        <option value="other" className="bg-[#111]">
                          Not sure yet
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[#555] text-xs font-semibold tracking-widest uppercase mb-2">
                        Tell Me About Your Community
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Where are you starting from? What's the goal? Any context helps..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#444] text-sm focus:outline-none focus:border-gold/40 transition-colors duration-300 resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: loading ? 1 : 1.02 }}
                      whileTap={{ scale: loading ? 1 : 0.98 }}
                      className="w-full py-4 rounded-xl btn-primary text-black font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={15} />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
