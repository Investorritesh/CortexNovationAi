"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { servicesData } from "@/data/services";
import {
  Mail,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building2,
  Phone,
  Sparkles,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: servicesData[0].title,
    budget: "$25,000 - $50,000",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const budgetOptions = [
    "< $15,000",
    "$15,000 - $35,000",
    "$35,000 - $75,000",
    "$75,000 - $150,000+",
    "Enterprise Retainer / Custom",
  ];

  const handleNext = () => {
    setErrorMsg("");
    if (currentStep === 1) {
      if (!formData.name.trim() || !formData.email.trim() || !formData.email.includes("@")) {
        setErrorMsg("Please provide your name and a valid corporate email.");
        return;
      }
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setErrorMsg("");
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim()) {
      setErrorMsg("Please enter a short description of your project.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Trigger celebratory micro-animation confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#2D8CFF", "#22D3EE", "#8B5CF6", "#10B981"],
        });
      } catch {
        // Confetti fallback
      }
    }, 1000);
  };

  return (
    <div className="pt-32 pb-24 bg-[#050B1F] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 text-xs font-semibold uppercase tracking-wider text-cyan-400 shimmer-badge">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Direct Architectural Inquiries</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Let’s Build Something <br />
            <span className="text-gradient">Great Together</span>
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Connect directly with our engineering leadership to scope architectures, timelines, and milestones.
          </p>
        </div>

        {/* Split Layout: Contact Info & Multi-Step Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact & Guarantees */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel-glow p-8 rounded-3xl bg-[#0A1330]/90 border border-blue-500/30 space-y-6">
              <h2 className="text-2xl font-bold text-white">Engineering Response Promise</h2>
              
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-blue-950/60 border border-blue-800/40">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">4-Hour Response Window</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Our technical directors personally review all inquiries. You receive architectural feedback within four business hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-blue-950/60 border border-blue-800/40">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">Mutual NDA & Zero-IP Leakage</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    All conversations and shared schemas are protected under our bilateral NDA. 100% intellectual property ownership is guaranteed.
                  </p>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="pt-4 border-t border-blue-900/40 space-y-3.5 text-xs text-slate-300">
                <a
                  href="mailto:cortexnovationai@gmail.com"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-blue-950/40 border border-blue-500/20 hover:border-cyan-400 hover:text-cyan-300 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-white">cortexnovationai@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 px-1">
                  <Building2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Global Operations & Engineering Centers</span>
                </div>
                <div className="flex items-center gap-3 px-1">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Priority Line: Available to active enterprise contracts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Multi-Step Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-glow p-8 sm:p-10 rounded-3xl bg-[#091230]/95 border border-blue-500/30 relative">
              
              {isSubmitted ? (
                /* Celebratory Success State */
                <div className="text-center py-12 space-y-6 animate-fade-in">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-extrabold text-white">Inquiry Dispatched!</h2>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-cyan-300">{formData.name}</strong>. A Principal Systems Architect has been assigned to your project and will reach out to <strong className="text-cyan-300">{formData.email}</strong> shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setCurrentStep(1);
                    }}
                    className="btn-secondary-glow px-6 py-2.5 text-xs font-semibold rounded-xl text-white"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* Multi-Step Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step Progress Indicators */}
                  <div className="flex items-center justify-between pb-6 border-b border-blue-900/40">
                    <div className="space-y-1">
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        STEP 0{currentStep} OF 03
                      </span>
                      <h2 className="text-lg font-bold text-white">
                        {currentStep === 1 && "Contact & Company Details"}
                        {currentStep === 2 && "Primary Service of Interest"}
                        {currentStep === 3 && "Budget Range & Project Scope"}
                      </h2>
                    </div>

                    {/* Step pills */}
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3].map((step) => (
                        <div
                          key={step}
                          className={`w-7 h-1.5 rounded-full transition-all ${
                            step === currentStep
                              ? "bg-cyan-400 w-10 shadow-[0_0_8px_#22D3EE]"
                              : step < currentStep
                              ? "bg-blue-600"
                              : "bg-blue-950"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-xs text-red-300">
                      {errorMsg}
                    </div>
                  )}

                  {/* Step 1: Contact Details */}
                  {currentStep === 1 && (
                    <div className="space-y-4 animate-fade-in">
                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full px-4 py-3 rounded-xl bg-blue-950/50 border border-blue-500/25 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                          Work Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sarah@enterprise.com"
                          className="w-full px-4 py-3 rounded-xl bg-blue-950/50 border border-blue-500/25 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                          Organization or Startup Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Apex Health Systems"
                          className="w-full px-4 py-3 rounded-xl bg-blue-950/50 border border-blue-500/25 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Service of Interest */}
                  {currentStep === 2 && (
                    <div className="space-y-3 animate-fade-in">
                      <label className="text-xs font-semibold text-slate-300 block">
                        Select Primary Area of Engineering:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {servicesData.map((svc) => (
                          <button
                            key={svc.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, service: svc.title })}
                            className={`p-3 rounded-xl text-left text-xs font-semibold transition-all border ${
                              formData.service === svc.title
                                ? "bg-blue-600/30 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.3)]"
                                : "bg-blue-950/40 border-blue-900/40 text-slate-300 hover:text-white"
                            }`}
                          >
                            {svc.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Budget & Message */}
                  {currentStep === 3 && (
                    <div className="space-y-4 animate-fade-in">
                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                          Estimated Investment Budget
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {budgetOptions.map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget: b })}
                              className={`p-2.5 rounded-lg text-center text-xs font-medium border ${
                                formData.budget === b
                                  ? "bg-blue-600/40 border-cyan-400 text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                                  : "bg-blue-950/40 border-blue-900/40 text-slate-300 hover:text-white"
                              }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                          Project Description & Vision *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about the business problem, architectural bottlenecks, current stack, and desired launch timeline..."
                          className="w-full px-4 py-3 rounded-xl bg-blue-950/50 border border-blue-500/25 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 resize-none"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-blue-900/40">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="btn-secondary-glow px-5 py-2.5 text-xs font-semibold rounded-xl text-white flex items-center gap-1.5"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Previous</span>
                      </button>
                    ) : (
                      <div />
                    )}

                    {currentStep < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn-primary-glow px-6 py-2.5 text-xs font-bold rounded-xl text-white flex items-center gap-1.5"
                      >
                        <span>Continue</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary-glow px-8 py-3 text-xs font-bold rounded-xl text-white flex items-center gap-2 shadow-xl"
                      >
                        <span>{isSubmitting ? "Dispatching..." : "Submit Inquiry"}</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
