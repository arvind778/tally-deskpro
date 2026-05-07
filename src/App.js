import React, { useState, useEffect } from "react";

export default function TallyDeskProLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousemove", onMouse);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-slate-100 antialiased selection:bg-emerald-500/30 selection:text-white overflow-x-hidden font-sans">
      {/* Geist font import + custom utilities */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap');
        :root {
          --font-sans: 'Geist', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          --font-mono: 'Geist Mono', 'SFMono-Regular', Consolas, monospace;
        }
        html { scroll-behavior: smooth; }
        body, .font-sans { font-family: var(--font-sans); font-feature-settings: "ss01", "cv11"; }
        .font-mono { font-family: var(--font-mono); }

        /* Custom xs breakpoint for fine-grained mobile control (420px+) */
        @media (min-width: 420px) {
          .xs\\:text-\\[40px\\] { font-size: 40px; }
          .xs\\:text-\\[34px\\] { font-size: 34px; }
          .xs\\:text-\\[32px\\] { font-size: 32px; }
        }

        /* Tight Stripe/Mercury-style headline tracking */
        .tracking-tightest { letter-spacing: -0.045em; }
        .tracking-display { letter-spacing: -0.035em; }

        /* Subtle grid background */
        .bg-grid {
          background-image:
            linear-gradient(to right, rgba(148,163,184,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148,163,184,0.05) 1px, transparent 1px);
          background-size: 56px 56px;
        }

        /* Noise texture for premium feel */
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          opacity: 0.4;
          mix-blend-mode: overlay;
        }

        /* Soft emerald glow */
        .glow-emerald {
          box-shadow:
            0 0 0 1px rgba(16, 185, 129, 0.1),
            0 30px 80px -20px rgba(16, 185, 129, 0.25),
            0 10px 40px -10px rgba(16, 185, 129, 0.15);
        }

        /* Frosted glass card base */
        .frosted {
          background: rgba(255, 255, 255, 0.025);
          backdrop-filter: blur(20px) saturate(140%);
          -webkit-backdrop-filter: blur(20px) saturate(140%);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .frosted-strong {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* Conic gradient orbs */
        .orb {
          filter: blur(80px);
          opacity: 0.5;
          mix-blend-mode: screen;
          pointer-events: none;
        }

        /* Card hover shimmer */
        .shimmer-border {
          position: relative;
        }
        .shimmer-border::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(16,185,129,0) 0%, rgba(16,185,129,0.3) 50%, rgba(16,185,129,0) 100%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .shimmer-border:hover::before { opacity: 1; }

        /* Reveal on scroll */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .reveal { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }

        /* Floating animation for hero mockup */
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50%      { transform: translateY(-12px) rotate(-1deg); }
        }
        .float { animation: float 6s ease-in-out infinite; }

        /* Pulse for live dot */
        @keyframes pulseDot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.6); }
          50%      { box-shadow: 0 0 0 8px rgba(16,185,129,0); }
        }
        .pulse-dot { animation: pulseDot 2.4s ease-in-out infinite; }

        /* Marquee scroll for trust strip */
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee { animation: marquee 32s linear infinite; }

        /* Bar chart bars */
        @keyframes barRise {
          from { height: 0; }
        }
        .bar { animation: barRise 1.2s cubic-bezier(0.16, 1, 0.3, 1) both; }

        /* Hide scrollbar utility */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ─────────────────────────────────────────────────────────
          AMBIENT BACKGROUND
          ───────────────────────────────────────────────────────── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-40 sm:opacity-60" style={{ maskImage: "radial-gradient(ellipse at center top, black 30%, transparent 75%)" }} />
        <div className="absolute -top-40 -left-40 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] orb bg-emerald-500/20 sm:bg-emerald-500/30 rounded-full" />
        <div className="absolute top-[20%] -right-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] orb bg-blue-500/15 sm:bg-blue-500/20 rounded-full" />
        <div
          className="hidden sm:block absolute w-[400px] h-[400px] orb bg-emerald-400/15 rounded-full transition-transform duration-[2000ms] ease-out"
          style={{ left: mousePos.x - 200, top: mousePos.y - 200, opacity: 0.3 }}
        />
        <div className="absolute inset-0 bg-noise" />
      </div>

      {/* ─────────────────────────────────────────────────────────
          ANNOUNCEMENT
          ───────────────────────────────────────────────────────── */}
      <div className="relative z-10 border-b border-white/5 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2.5 flex items-center justify-center gap-2 sm:gap-3 text-[12px] sm:text-xs text-slate-300 sm:text-slate-400">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot shrink-0" />
          <span className="font-mono tracking-wide whitespace-nowrap">v1.0 NOW SHIPPING</span>
          <span className="hidden sm:inline text-slate-600">·</span>
          <span className="hidden sm:inline">Offline audit & reporting suite for Tally Prime users in India</span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────
          NAV
          ───────────────────────────────────────────────────────── */}
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "bg-[#0a0e1a]/80 backdrop-blur-2xl border-b border-white/5" : ""}`}>
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 grid place-items-center shadow-lg shadow-emerald-500/20">
              <span className="text-[#0a0e1a] font-bold text-sm tracking-tight">T</span>
              <div className="absolute -inset-px rounded-lg ring-1 ring-inset ring-white/20" />
            </div>
            <span className="font-semibold text-[15px] tracking-tight">Tally DeskPro</span>
          </a>

          <div className="hidden md:flex items-center gap-1 frosted rounded-full px-1 py-1">
            {["Product", "Modules", "Pricing", "Docs", "Customers"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-3.5 py-1.5 text-[13px] text-slate-300 hover:text-white rounded-full hover:bg-white/5 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href="#signin" className="hidden sm:block text-[13px] text-slate-300 hover:text-white px-3 py-2 transition-colors">
              Sign in
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-1.5 rounded-full bg-white text-[#0a0e1a] px-4 py-2 text-[13px] font-medium hover:bg-emerald-300 transition-colors"
            >
              Book demo
              <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* ─────────────────────────────────────────────────────────
          HERO
          ───────────────────────────────────────────────────────── */}
      <section className="relative z-10 pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 sm:gap-16 lg:gap-12 items-center">

            {/* LEFT: Value proposition */}
            <div className="reveal" style={{ animationDelay: "0.05s" }}>
              {/* Status pill */}
              <a
                href="#changelog"
                className="group inline-flex items-center gap-2 rounded-full frosted px-3 py-1.5 text-[12px] hover:border-emerald-500/30 transition-colors"
              >
                <span className="font-mono text-emerald-400">NEW</span>
                <span className="h-3 w-px bg-white/10" />
                <span className="text-slate-300">GSTR-1 reconciliation engine</span>
                <svg className="w-3 h-3 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" viewBox="0 0 12 12" fill="none">
                  <path d="M3 6h6M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              {/* Headline */}
              <h1 className="mt-6 sm:mt-7 text-[34px] xs:text-[40px] sm:text-[52px] lg:text-[68px] leading-[1.05] sm:leading-[1.0] lg:leading-[0.98] tracking-tight sm:tracking-tightest font-medium text-white">
                Tally data, turned into{" "}
                <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent italic font-light">audit-ready</span>{" "}
                business reports.
              </h1>

              {/* Sub */}
              <p className="mt-5 sm:mt-7 text-[15px] sm:text-[17px] leading-[1.65] text-slate-300 sm:text-slate-400 max-w-xl">
                A professional offline desktop suite for accountants, FMCG distributors and dealership owners. Sales, GST, inventory, salesman performance and margins — all reviewed without a single byte leaving your computer.
              </p>

              {/* CTAs */}
              <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#0a0e1a] pl-5 pr-4 py-3.5 sm:py-3 text-[15px] sm:text-[14px] font-medium hover:bg-emerald-300 transition-all hover:scale-[1.02]"
                >
                  Book personalised demo
                  <span className="grid place-items-center w-5 h-5 rounded-full bg-[#0a0e1a]/10 group-hover:bg-[#0a0e1a]/20 transition-colors">
                    <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" viewBox="0 0 12 12" fill="none">
                      <path d="M3 6h6M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/[0.08] hover:border-white/25 px-5 py-3.5 sm:py-3 text-[15px] sm:text-[14px] font-medium transition-all"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                    <path d="M5 3l8 5-8 5V3z" fill="currentColor" />
                  </svg>
                  Watch 90-second tour
                </a>
              </div>

              {/* Trust signals */}
              <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
                <div>
                  <div className="font-mono text-[11px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.18em] text-slate-400 sm:text-slate-500 uppercase mb-1.5">Privacy</div>
                  <div className="text-[14px] sm:text-[14px] text-white sm:text-slate-200 font-medium">100% offline</div>
                </div>
                <div>
                  <div className="font-mono text-[11px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.18em] text-slate-400 sm:text-slate-500 uppercase mb-1.5">Setup</div>
                  <div className="text-[14px] text-white sm:text-slate-200 font-medium">Under 5 min</div>
                </div>
                <div>
                  <div className="font-mono text-[11px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.18em] text-slate-400 sm:text-slate-500 uppercase mb-1.5">Output</div>
                  <div className="text-[14px] text-white sm:text-slate-200 font-medium">Excel · PDF</div>
                </div>
              </div>
            </div>

            {/* RIGHT: Floating product mockup */}
            <div className="relative reveal" style={{ animationDelay: "0.2s" }}>
              {/* Glow */}
              <div className="absolute inset-0 -m-8 rounded-[32px] bg-gradient-to-br from-emerald-500/20 via-transparent to-blue-500/10 blur-3xl" />

              {/* App mockup card */}
              <div className="relative float">
                <div className="relative rounded-2xl frosted-strong glow-emerald overflow-hidden">
                  {/* Window chrome */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                    </div>
                    <div className="font-mono text-[10px] text-slate-500 tracking-wide">tally-deskpro / dashboard</div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
                      <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider">Local</span>
                    </div>
                  </div>

                  {/* Inner UI */}
                  <div className="p-5 space-y-4">

                    {/* Top: company switcher */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase mb-1">Company</div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-emerald-400 to-emerald-600 grid place-items-center text-[10px] font-bold text-[#0a0e1a]">SA</div>
                          <span className="text-[13px] font-medium text-white">Satkar Agencies</span>
                          <svg className="w-3 h-3 text-slate-500" viewBox="0 0 12 12" fill="none">
                            <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase mb-1">Period</div>
                        <div className="text-[12px] text-slate-300">Apr — May 2026</div>
                      </div>
                    </div>

                    {/* KPI strip */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: "Vouchers scanned", value: "—", sub: "All clean", tone: "neutral" },
                        { label: "Exceptions", value: "•••", sub: "Awaiting review", tone: "warn" },
                        { label: "GST status", value: "Ready", sub: "GSTR-1 prepped", tone: "ok" },
                      ].map((k, i) => (
                        <div key={i} className="rounded-lg bg-white/[0.03] border border-white/5 p-3">
                          <div className="font-mono text-[8.5px] tracking-[0.15em] text-slate-500 uppercase mb-1.5">{k.label}</div>
                          <div className={`text-[15px] font-semibold ${k.tone === "ok" ? "text-emerald-400" : k.tone === "warn" ? "text-amber-300" : "text-white"}`}>
                            {k.value}
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5">{k.sub}</div>
                        </div>
                      ))}
                    </div>

                    {/* Audit trail list */}
                    <div className="rounded-lg bg-white/[0.02] border border-white/5 overflow-hidden">
                      <div className="px-3.5 py-2 flex items-center justify-between border-b border-white/5">
                        <span className="font-mono text-[10px] tracking-[0.15em] text-slate-500 uppercase">Audit checks</span>
                        <span className="font-mono text-[10px] text-slate-500">6 of 6</span>
                      </div>
                      <div className="divide-y divide-white/5">
                        {[
                          { name: "Rate variance scan", type: "Sales", status: "pass" },
                          { name: "Below-cost billing", type: "Margin", status: "review" },
                          { name: "Negative stock", type: "Inventory", status: "flag" },
                          { name: "HSN tax-rate match", type: "GST", status: "pass" },
                        ].map((row, i) => (
                          <div key={i} className="px-3.5 py-2.5 flex items-center justify-between text-[12px]">
                            <div className="flex items-center gap-2.5">
                              <span className={`w-1 h-1 rounded-full ${row.status === "pass" ? "bg-emerald-400" : row.status === "review" ? "bg-amber-400" : "bg-rose-400"}`} />
                              <span className="text-slate-200">{row.name}</span>
                              <span className="font-mono text-[10px] text-slate-500">{row.type}</span>
                            </div>
                            <span className={`font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded ${
                              row.status === "pass" ? "bg-emerald-500/10 text-emerald-400"
                              : row.status === "review" ? "bg-amber-500/10 text-amber-300"
                              : "bg-rose-500/10 text-rose-400"
                            }`}>
                              {row.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mini bar chart */}
                    <div className="rounded-lg bg-white/[0.02] border border-white/5 p-3.5">
                      <div className="flex items-baseline justify-between mb-3">
                        <span className="font-mono text-[10px] tracking-[0.15em] text-slate-500 uppercase">Monthly billing trend</span>
                        <span className="font-mono text-[10px] text-slate-400">Last 8 months</span>
                      </div>
                      <div className="flex items-end gap-1.5 h-14">
                        {[42, 58, 51, 72, 49, 66, 82, 71].map((h, i) => (
                          <div
                            key={i}
                            className="bar flex-1 rounded-sm bg-gradient-to-t from-emerald-500/40 to-emerald-300/80"
                            style={{ height: `${h}%`, animationDelay: `${0.4 + i * 0.06}s` }}
                          />
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <div className="hidden lg:block absolute -bottom-6 -left-10 frosted-strong rounded-xl px-4 py-3 shadow-2xl float" style={{ animationDelay: "1s", animationDuration: "7s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 grid place-items-center">
                    <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 16 16" fill="none">
                      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[12px] font-medium text-white">Report exported</div>
                    <div className="font-mono text-[10px] text-slate-500">audit_apr-2026.xlsx · 2.4 MB</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Customer logo strip / "trusted by" — kept honest with descriptive segments instead of fake logos */}
          <div className="mt-16 sm:mt-24 pt-8 sm:pt-10 border-t border-white/5">
            <div className="text-center font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-slate-400 uppercase mb-5 sm:mb-6">
              Built for the workflows of
            </div>
            <div className="relative overflow-hidden">
              <div className="flex marquee gap-8 sm:gap-12 whitespace-nowrap">
                {[...Array(2)].map((_, dup) => (
                  <div key={dup} className="flex gap-8 sm:gap-12 shrink-0">
                    {["FMCG distributors", "Tally Prime users", "Automobile dealers", "CA & audit firms", "Multi-branch retail", "Wholesale traders", "GST consultants", "Spare-parts traders"].map((seg) => (
                      <span key={seg} className="text-[14px] sm:text-[15px] text-slate-300 sm:text-slate-400 hover:text-white transition-colors font-medium">
                        {seg}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
              <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#0a0e1a] to-transparent" />
              <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#0a0e1a] to-transparent" />
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          BENTO FEATURE GRID
          ───────────────────────────────────────────────────────── */}
      <section id="modules" className="relative z-10 py-16 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          {/* Section head */}
          <div className="mb-12 sm:mb-16 grid lg:grid-cols-2 gap-6 lg:gap-12 items-end">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">
                <span className="h-px w-8 bg-emerald-400" />
                <span className="font-mono text-[11px] tracking-[0.2em] text-emerald-400 uppercase">Core Modules</span>
              </div>
              <h2 className="text-[30px] xs:text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.08] sm:leading-[1.02] tracking-tight sm:tracking-display font-medium text-white">
                Six focused tools that <span className="italic font-light text-emerald-300">replace</span> hours of manual Excel work.
              </h2>
            </div>
            <p className="text-[15px] sm:text-[16px] leading-[1.65] text-slate-300 sm:text-slate-400 lg:max-w-md lg:justify-self-end">
              Each module is built around the real audit and management questions that owners, accountants and CAs ask every month — nothing more, nothing less.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 lg:auto-rows-[minmax(280px,auto)]">

            {/* CARD 1 — Sales Audit (large, 3 cols, with table preview) */}
            <BentoCard className="lg:col-span-3 lg:row-span-2">
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <ModuleTag num="01" label="Sales & Purchase" />
                <ModuleIcon>
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                    <path d="M4 3h12v14l-2.5-1.5L11 17l-2.5-1.5L6 17l-2-1.5V3z" />
                    <path d="M7 7h6M7 10h6M7 13h4" />
                  </svg>
                </ModuleIcon>
              </div>
              <h3 className="text-[22px] sm:text-[26px] tracking-tight sm:tracking-display font-medium text-white leading-[1.2] sm:leading-tight mb-3">
                Catch rate-difference leakage before it hits the books.
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-slate-300 sm:text-slate-400 leading-[1.6] sm:leading-relaxed mb-5 sm:mb-6 max-w-md">
                Voucher-level review of rates, quantities and party-wise billing patterns. Surfaces the few entries that need attention out of thousands.
              </p>

              {/* Inline table preview */}
              <div className="rounded-lg bg-black/30 border border-white/5 overflow-hidden">
                <div className="px-3 py-2 border-b border-white/5 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-wider text-slate-400 uppercase">Exceptions found</span>
                  <span className="font-mono text-[10px] text-amber-400">3 review</span>
                </div>
                <div className="divide-y divide-white/5 text-[12.5px]">
                  {[
                    { p: "Sharma Stores", r: "below MRP", t: "review" },
                    { p: "Verma Traders", r: "rate +₹2.40", t: "review" },
                    { p: "Royal Mart", r: "matches", t: "ok" },
                  ].map((row, i) => (
                    <div key={i} className="px-3 py-2.5 flex items-center justify-between">
                      <span className="text-slate-200">{row.p}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[11px] text-slate-400">{row.r}</span>
                        <span className={`w-1.5 h-1.5 rounded-full ${row.t === "ok" ? "bg-emerald-400" : "bg-amber-400"}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </BentoCard>

            {/* CARD 2 — GST (3 cols) */}
            <BentoCard className="lg:col-span-3 lg:row-span-2">
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <ModuleTag num="02" label="GST Review" />
                <ModuleIcon>
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                    <rect x="3" y="3" width="14" height="14" rx="2" />
                    <path d="M7 10l2 2 4-5" />
                  </svg>
                </ModuleIcon>
              </div>
              <h3 className="text-[22px] sm:text-[26px] tracking-tight sm:tracking-display font-medium text-white leading-[1.2] sm:leading-tight mb-3">
                Filing-ready GSTR-1 in one quiet workflow.
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-slate-300 sm:text-slate-400 leading-[1.6] sm:leading-relaxed mb-5 sm:mb-6 max-w-md">
                Tax-rate validation, HSN summary, B2B/B2C reconciliation and taxable-value review — surfaced as exceptions, not as more spreadsheets.
              </p>

              {/* HSN summary preview */}
              <div className="rounded-lg bg-black/30 border border-white/5 p-3">
                <div className="grid grid-cols-4 gap-2 mb-2">
                  {["HSN", "Tax", "Match", "Status"].map((h) => (
                    <span key={h} className="font-mono text-[10px] tracking-wider text-slate-400 uppercase">{h}</span>
                  ))}
                </div>
                <div className="space-y-1.5">
                  {[
                    { h: "1905", t: "18%", m: "98.4%", s: "ok" },
                    { h: "2202", t: "12%", m: "100%", s: "ok" },
                    { h: "3304", t: "18%", m: "—", s: "review" },
                  ].map((r, i) => (
                    <div key={i} className="grid grid-cols-4 gap-2 text-[12.5px]">
                      <span className="font-mono text-slate-200">{r.h}</span>
                      <span className="text-slate-200">{r.t}</span>
                      <span className="text-slate-300">{r.m}</span>
                      <span className={`font-mono text-[10px] uppercase tracking-wider ${r.s === "ok" ? "text-emerald-400" : "text-amber-300"}`}>{r.s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </BentoCard>

            {/* CARD 3 — Inventory (2 cols) */}
            <BentoCard className="lg:col-span-2">
              <ModuleTag num="03" label="Inventory" />
              <h3 className="mt-4 sm:mt-5 text-[20px] sm:text-[20px] tracking-tight sm:tracking-display font-medium text-white leading-snug">
                Stock health, item by item.
              </h3>
              <p className="mt-2 text-[14px] sm:text-[13.5px] text-slate-300 sm:text-slate-400 leading-[1.6] sm:leading-relaxed">
                Negative stock, duplicate items, wrong units and slow-movers — flagged before year-end becomes a problem.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2 font-mono text-[11px]">
                <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-300">Negative stock</span>
                <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-300">Duplicates</span>
              </div>
            </BentoCard>

            {/* CARD 4 — Salesman performance with bars (2 cols) */}
            <BentoCard className="lg:col-span-2">
              <ModuleTag num="04" label="Sales-rep" />
              <h3 className="mt-4 sm:mt-5 text-[20px] tracking-tight sm:tracking-display font-medium text-white leading-snug">
                Line average, route performance, target vs actual.
              </h3>

              {/* Mini bars */}
              <div className="mt-5 space-y-2.5">
                {[
                  { name: "Rakesh", val: 92 },
                  { name: "Sandeep", val: 71 },
                  { name: "Vinod", val: 58 },
                ].map((r, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-[12px] text-slate-300 w-16">{r.name}</span>
                    <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full"
                        style={{ width: `${r.val}%`, transition: "width 1s ease" }}
                      />
                    </div>
                    <span className="font-mono text-[11px] text-slate-400 w-9 text-right">{r.val}%</span>
                  </div>
                ))}
              </div>
            </BentoCard>

            {/* CARD 5 — Margin (2 cols) */}
            <BentoCard className="lg:col-span-2">
              <ModuleTag num="05" label="Profit & Margin" />
              <h3 className="mt-4 sm:mt-5 text-[20px] tracking-tight sm:tracking-display font-medium text-white leading-snug">
                Item-wise margin & below-cost alerts.
              </h3>
              <p className="mt-2 text-[14px] sm:text-[13.5px] text-slate-300 sm:text-slate-400 leading-[1.6] sm:leading-relaxed">
                Catch high-discount transactions and below-cost billing while it's still recoverable.
              </p>
              {/* Donut */}
              <div className="mt-5 flex items-center gap-4">
                <svg width="60" height="60" viewBox="0 0 60 60" className="shrink-0">
                  <circle cx="30" cy="30" r="24" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
                  <circle
                    cx="30" cy="30" r="24" fill="none"
                    stroke="url(#donutGrad)" strokeWidth="6"
                    strokeDasharray={`${0.72 * 2 * Math.PI * 24} ${2 * Math.PI * 24}`}
                    strokeLinecap="round"
                    transform="rotate(-90 30 30)"
                  />
                  <defs>
                    <linearGradient id="donutGrad" x1="0" y1="0" x2="60" y2="60">
                      <stop offset="0" stopColor="#34d399" />
                      <stop offset="1" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>
                <div>
                  <div className="text-[22px] font-semibold text-white tracking-tight">72%</div>
                  <div className="font-mono text-[10px] tracking-wider text-slate-400 uppercase">Within margin band</div>
                </div>
              </div>
            </BentoCard>

            {/* CARD 6 — Reports / Export (full width) */}
            <BentoCard className="lg:col-span-6">
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-10 items-center">
                <div>
                  <ModuleTag num="06" label="Export & Share" />
                  <h3 className="mt-4 sm:mt-5 text-[24px] sm:text-[28px] tracking-tight sm:tracking-display font-medium text-white leading-[1.2] sm:leading-tight">
                    Owner-ready Excel & PDF reports.{" "}
                    <span className="text-slate-300 sm:text-slate-400 font-light italic">No extra cleanup needed.</span>
                  </h3>
                  <p className="mt-3 text-[14px] sm:text-[14.5px] text-slate-300 sm:text-slate-400 leading-[1.6] sm:leading-relaxed max-w-lg">
                    Every audit module produces a clean, structured report ready to share with the CA, accounts team, owner or auditor — straight from the desktop, on WhatsApp or email.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Excel (.xlsx)", "PDF", "WhatsApp share", "Print-ready", "Multi-company"].map((tag) => (
                      <span key={tag} className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Export preview */}
                <div className="relative">
                  <div className="absolute inset-0 -m-4 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl blur-2xl" />
                  <div className="relative space-y-2">
                    {[
                      { name: "audit_sales-apr.xlsx", size: "2.4 MB" },
                      { name: "gstr1_apr-2026.xlsx", size: "1.8 MB" },
                      { name: "stock_health.pdf", size: "640 KB" },
                    ].map((f, i) => (
                      <div key={i} className="flex items-center gap-3 frosted rounded-xl px-4 py-3 hover:border-emerald-500/30 transition-colors group">
                        <div className="w-9 h-9 rounded-lg bg-emerald-500/10 grid place-items-center font-mono text-[10px] text-emerald-300 uppercase tracking-wider">
                          {f.name.split(".").pop()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[13px] text-white font-medium truncate">{f.name}</div>
                          <div className="font-mono text-[11px] text-slate-400">{f.size}</div>
                        </div>
                        <svg className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" viewBox="0 0 16 16" fill="none">
                          <path d="M8 3v8M4 7l4 4 4-4M3 13h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </BentoCard>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          CTA
          ───────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl frosted-strong p-8 sm:p-14 lg:p-20 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/5" />
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] orb bg-emerald-500/30 rounded-full" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-px w-8 bg-emerald-400" />
                <span className="font-mono text-[11px] tracking-[0.2em] text-emerald-400 uppercase">See it on your data</span>
              </div>
              <h2 className="text-[28px] xs:text-[32px] sm:text-[44px] lg:text-[56px] tracking-tight sm:tracking-display font-medium leading-[1.1] sm:leading-[1.02] max-w-3xl mx-auto">
                Book a demo. Get your first <span className="italic font-light text-emerald-300">audit-ready</span> report this week.
              </h2>
              <p className="mt-5 sm:mt-6 text-[15px] sm:text-[16px] text-slate-300 sm:text-slate-400 max-w-lg mx-auto leading-[1.6] sm:leading-relaxed">
                Share a sample Tally export and we'll show you exactly what Tally DeskPro can surface for your business in one short call.
              </p>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 flex-wrap max-w-md sm:max-w-none mx-auto">
                <a
                  href="tel:+919999999999"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#0a0e1a] px-6 py-3.5 text-[15px] sm:text-[14px] font-medium hover:bg-emerald-300 transition-all hover:scale-[1.02]"
                >
                  Call now
                  <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/919999999999"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/[0.08] hover:border-white/25 px-6 py-3.5 text-[15px] sm:text-[14px] font-medium transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1s-.7.9-.8 1c-.2.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.5-1.8-.2-.3 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.2.2-.4.1-.1 0-.3 0-.4 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2 0 1.3.9 2.5 1.1 2.7.1.2 1.8 2.7 4.3 3.8.6.3 1.1.4 1.4.5.6.2 1.1.2 1.6.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.5-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.4 1.3 4.8L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          FOOTER
          ───────────────────────────────────────────────────────── */}
      <footer className="relative z-10 border-t border-white/5 py-12 mt-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-emerald-400 to-emerald-600 grid place-items-center">
                <span className="text-[#0a0e1a] font-bold text-xs">T</span>
              </div>
              <span className="font-semibold text-[14px] tracking-tight">Tally DeskPro</span>
              <span className="text-slate-600 mx-2">·</span>
              <span className="text-[13px] text-slate-500">Made in India · For Tally users.</span>
            </div>
            <div className="flex items-center gap-6 text-[13px] text-slate-400">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              <span className="text-slate-600">© 2026</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   REUSABLE BENTO CARD
   ───────────────────────────────────────────────────────── */
function BentoCard({ children, className = "" }) {
  return (
    <div
      className={`shimmer-border group relative rounded-2xl frosted p-5 sm:p-7 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-0.5 ${className}`}
    >
      {/* Subtle inner glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 via-transparent to-emerald-500/0 group-hover:from-emerald-500/[0.03] group-hover:to-emerald-500/[0.02] transition-all duration-700 pointer-events-none" />
      <div className="relative h-full flex flex-col">{children}</div>
    </div>
  );
}

function ModuleTag({ num, label }) {
  return (
    <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
      <span className="font-mono text-[10px] tracking-[0.18em] text-slate-400 uppercase">Module</span>
      <span className="font-mono text-[10px] text-emerald-400 tabular-nums">{num}</span>
      <span className="h-3 w-px bg-white/10" />
      <span className="text-[12px] text-slate-200">{label}</span>
    </div>
  );
}

function ModuleIcon({ children }) {
  return (
    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 grid place-items-center text-emerald-400 group-hover:bg-emerald-500/15 group-hover:scale-105 transition-all">
      <div className="w-4 h-4">{children}</div>
    </div>
  );
}
