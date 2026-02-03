import React, { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

import traffic from "@/assets/animation/traffic.json";
import scale from "@/assets/animation/scale.json";
import retention from "@/assets/animation/retention.json";
import Network from "@/assets/animation/conversion.json";

export const InteractiveGrowth = () => {
  const [activeActivity, setActiveActivity] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const activities = [
    {
      title: "Attract The Right Eyes",
      description:
        "Targeted campaigns across Meta, Google, and emerging platforms. I find your audience where they actually spend time.",
      lottieSrc: traffic,
      mobSrc: traffic,
    },
    {
      title: "Turn Clicks Into Customers",
      description:
        "Optimized landing pages, compelling offers, and frictionless checkout flows. Every touchpoint engineered to convert.",
      lottieSrc: Network,
      mobSrc: Network,
    },
    {
      title: "Keep Them Coming Back",
      description:
        "Email sequences, loyalty programs, and personalized retargeting. The real profit is in repeat customers.",
      lottieSrc: retention,
      mobSrc: retention,
    },
    {
      title: "Multiply What Works",
      description:
        "Once the system proves ROI, we pour fuel on the fire. Systematic scaling with maintained efficiency.",
      lottieSrc: scale,
      mobSrc: scale,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    const interval = setInterval(() => {
      setActiveActivity((prev) => (prev + 1) % activities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black py-20 lg:py-28 relative overflow-hidden">
      {/* Cyan glow background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* ================= HEADER (MATCHES IMAGE) ================= */}
        <div className="text-center mb-24">
          

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="text-white">How I Build </span>
            <span className="relative text-cyan-500">
              <span className="absolute inset-0 blur-2xl bg-cyan-500/30 -z-10" />
              Growth
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-4">
            Real results from real brands. Here's how I've helped businesses scale.
          </p>
        </div>

        {/* ================= MOBILE VIEW ================= */}
        <div className="md:hidden">
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white/5 backdrop-blur rounded-2xl border border-white/10 hover:border-cyan-500/40 transition"
              >
                <div className="h-72 flex items-center justify-center">
                  {isLoaded ? (
                    <Player autoplay loop src={activity.mobSrc} style={{ width: 240 }} />
                  ) : (
                    <div className="w-56 h-56 bg-white/10 rounded-lg animate-pulse" />
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {activity.description}
                  </p>
                  <div className="w-12 h-1 bg-cyan-500 rounded-full mt-4" />
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 mt-4">
            Swipe to explore →
          </p>
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden md:grid md:grid-cols-2 gap-12">
          {/* Animation */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md h-80">
              <Player
                autoplay
                loop
                src={activities[activeActivity].lottieSrc}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Steps */}
          <div className="flex flex-col justify-center space-y-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                onClick={() => setActiveActivity(index)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  index === activeActivity
                    ? "bg-cyan-500/10 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.25)]"
                    : "bg-white/5 border-white/10 hover:border-cyan-500/40"
                }`}
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {activity.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
