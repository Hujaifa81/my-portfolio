"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Terminal, Zap, Radio, Waves, ArrowUpRight, Copy, Check, Mail, MapPin, Clock, Github, Twitter, Facebook, Linkedin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

// Signal wave animation component
function SignalWave({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.5, 0] }}
      transition={{ duration: 3, delay, repeat: Infinity, ease: "easeOut" }}
    >
      <svg className="w-full h-full" viewBox="0 0 200 50" preserveAspectRatio="none">
        <motion.path
          d="M0,25 Q25,10 50,25 T100,25 T150,25 T200,25"
          fill="none"
          stroke="url(#signalGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="signalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#00F0FF" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

// Floating particle effect
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-neon-cyan/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Transmission status indicator
function TransmissionStatus({ status }: { status: "idle" | "sending" | "sent" | "error" }) {
  const statusConfig = {
    idle: { color: "bg-zinc-500", text: "STANDBY", pulse: false },
    sending: { color: "bg-neon-cyan", text: "TRANSMITTING", pulse: true },
    sent: { color: "bg-neon-cyan", text: "DELIVERED", pulse: false },
    error: { color: "bg-red-500", text: "FAILED", pulse: true },
  };

  const config = statusConfig[status];

  return (
    <div className="flex items-center gap-2 font-mono text-xs">
      <div className="relative">
        <div className={cn("w-2 h-2 rounded-full", config.color)} />
        {config.pulse && (
          <div className={cn("absolute inset-0 w-2 h-2 rounded-full animate-ping", config.color)} />
        )}
      </div>
      <span className="text-zinc-500">{config.text}</span>
    </div>
  );
}

// Interactive input field with terminal styling
function TerminalInput({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  isTextarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextarea?: boolean;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-neon-cyan font-mono text-sm">$</span>
        <label className="text-xs font-mono uppercase tracking-widest text-zinc-500">
          {label}
        </label>
      </div>
      <div className={cn(
        "relative rounded-lg border transition-all duration-300",
        isFocused
          ? "border-neon-cyan/50 bg-neon-cyan/5"
          : "border-white/10 bg-white/[0.02]"
      )}>
        {isTextarea ? (
          <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            rows={4}
            className="w-full bg-transparent px-4 py-3 font-mono text-sm text-white placeholder:text-zinc-600 focus:outline-none resize-none"
          />
        ) : (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full bg-transparent px-4 py-3 font-mono text-sm text-white placeholder:text-zinc-600 focus:outline-none"
          />
        )}

        {/* Cursor blink effect when focused */}
        {isFocused && (
          <motion.div
            className="absolute right-4 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-neon-cyan"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        )}
      </div>
    </motion.div>
  );
}

// Contact info card
function ContactInfoCard({
  icon: Icon,
  label,
  value,
  href,
  delay,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  delay: number;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const content = (
    <motion.div
      className="group relative flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-neon-cyan/30 hover:bg-neon-cyan/5 transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ x: 5 }}
      onClick={!href ? handleCopy : undefined}
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-neon-cyan/30 group-hover:bg-neon-cyan/10 transition-all duration-300">
        <Icon className="w-5 h-5 text-zinc-400 group-hover:text-neon-cyan transition-colors" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1">{label}</p>
        <p className="text-white font-medium truncate group-hover:text-neon-cyan transition-colors">{value}</p>
      </div>
      <div className="flex-shrink-0 self-center">
        {href ? (
          <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-neon-cyan transition-colors" />
        ) : copied ? (
          <Check className="w-4 h-4 text-neon-cyan" />
        ) : (
          <Copy className="w-4 h-4 text-zinc-600 group-hover:text-neon-cyan transition-colors" />
        )}
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/5 to-neon-violet/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setStatus("sent");

    // Reset after showing success
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setStatus("idle");
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-12 bg-void-black overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Unified Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        {/* Radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,240,255,0.1)_0%,transparent_60%)]" />

        {/* Floating particles */}
        <FloatingParticles />
      </div>

      {/* Ambient glows */}
      <motion.div
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-violet/20 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 top-1/3 w-[400px] h-[400px] bg-neon-cyan/15 rounded-full blur-[120px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 mb-6 backdrop-blur-sm"
            variants={{
              hidden: { opacity: 0, scale: 0.8, rotate: -15 },
              visible: { opacity: 1, scale: 1, rotate: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Radio className="w-4 h-4 text-neon-cyan" />
            <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan">
              Open Channel
            </span>
          </motion.div>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="font-display text-5xl font-bold uppercase text-white md:text-7xl mb-6"
          >
            Initiate <span className="text-neon-cyan">Transmission</span>
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="text-zinc-400 text-lg max-w-xl mx-auto"
          >
            Ready to collaborate on your next digital venture. Send a signal.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-stretch">
          {/* Contact Form - Takes 3 columns */}
          <motion.div
            className="lg:col-span-3 flex"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative flex-1 flex flex-col rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Terminal className="w-4 h-4 text-zinc-500" />
                    <span className="font-mono text-xs text-zinc-500">new_transmission.sh</span>
                  </div>
                </div>
                <TransmissionStatus status={status} />
              </div>

              {/* Signal wave animation */}
              <div className="absolute top-14 left-0 right-0 h-12 overflow-hidden opacity-50">
                <SignalWave delay={0} />
                <SignalWave delay={1} />
                <SignalWave delay={2} />
              </div>

              {/* Form content */}
              <form ref={formRef} onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6 flex-1 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <TerminalInput
                    label="identifier"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <TerminalInput
                    label="frequency"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <TerminalInput
                  label="message_payload"
                  name="message"
                  placeholder="Describe your project or idea..."
                  value={formData.message}
                  onChange={handleChange}
                  isTextarea
                />

                {/* Submit section - pushed to bottom */}
                <div className="mt-auto space-y-6">
                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={status === "sending" || status === "sent"}
                    className={cn(
                      "group relative w-full py-4 rounded-xl font-mono text-sm uppercase tracking-widest overflow-hidden transition-all duration-300",
                      status === "sent"
                        ? "bg-neon-cyan/20 border border-neon-cyan/50 text-neon-cyan"
                        : "bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan hover:text-void-black"
                    )}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {/* Button scanning effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={status === "sending" ? { x: "100%" } : {}}
                      transition={{ duration: 1, repeat: status === "sending" ? Infinity : 0 }}
                    />

                    <span className="relative flex items-center justify-center gap-3">
                      {status === "idle" && (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Transmit Signal</span>
                        </>
                      )}
                      {status === "sending" && (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Waves className="w-4 h-4" />
                          </motion.div>
                          <span>Establishing Connection...</span>
                        </>
                      )}
                      {status === "sent" && (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Transmission Complete</span>
                        </>
                      )}
                    </span>
                  </motion.button>

                  {/* Terminal prompt */}
                  <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                    <span className="text-neon-cyan font-mono text-sm">→</span>
                    <span className="text-zinc-600 font-mono text-xs">
                      Response time: typically within 24 hours
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info - Takes 2 columns */}
          <motion.div
            className="lg:col-span-2 flex flex-col justify-between gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Quick info cards */}
            <div className="space-y-4">
              <ContactInfoCard
                icon={Mail}
                label="Email"
                value="hello@example.com"
                delay={0.3}
              />
              <ContactInfoCard
                icon={Phone}
                label="Phone"
                value="+91 98765 43210"
                delay={0.35}
              />
              <ContactInfoCard
                icon={MapPin}
                label="Location"
                value="Remote / Worldwide"
                delay={0.4}
              />
              <ContactInfoCard
                icon={Clock}
                label="Timezone"
                value="IST (UTC +5:30)"
                delay={0.5}
              />
            </div>

            {/* Social links */}
            <motion.div
              className="relative p-6 rounded-xl border border-white/10 bg-white/[0.02]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-neon-violet" />
                <span className="font-mono text-xs uppercase tracking-widest text-neon-violet">
                  Connect
                </span>
              </div>
              <div className="flex items-center gap-3">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Facebook, href: "#", label: "Facebook" },
                ].map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ y: -3 }}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 text-zinc-400 group-hover:text-neon-cyan transition-colors" />
                    {/* Glow on hover */}
                    <div className="absolute inset-0 rounded-lg bg-neon-cyan/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
