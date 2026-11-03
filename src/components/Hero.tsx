'use client';

import { useLenis } from '@studio-freight/react-lenis';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const { profile } = portfolioData;

export default function Hero() {
  const lenis = useLenis();

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-emerald-500/[0.06] rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/[0.05] rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="container relative z-10 px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [-1, 2, -1] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative w-[260px] h-[310px] md:w-[350px] md:h-[420px] lg:w-[410px] lg:h-[490px] object-contain mx-auto md:mx-0 shrink-0 drop-shadow-[0_0_35px_rgba(34,211,238,0.4)] md:drop-shadow-[0_0_50px_rgba(6,182,212,0.55)]"
          >
            <img
              src="/robot.png"
              alt="Bowing and greeting futuristic robot"
              className="w-full h-full object-contain block"
              aria-label="Futuristic greeting robot"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-2xl"
          >
            <p className="text-3xl text-gray-300">Hi, I am</p>
            <h1 className="text-7xl md:text-8xl font-bold font-sans mt-4 mb-2 tracking-tight bg-gradient-to-r from-cyan-400 via-emerald-500 to-cyan-400 bg-clip-text text-transparent">
              Sudipto Das
            </h1>
            <p className="text-xl tracking-[0.3em] text-cyan-400 font-bold mt-4">FULL STACK DEVELOPER</p>
            <p className="mt-6 text-gray-400 leading-relaxed">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector('#projects');
                  if (el) {
                    lenis?.scrollTo(el as HTMLElement, { offset: -80 });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-400 text-[#050505] font-bold rounded-full text-sm tracking-wide hover:bg-brand-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300"
              >
                View Projects <ArrowRight size={18} strokeWidth={2} stroke="currentColor" fill="none" />
              </a>
              <a
                href={profile.cv}
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/10 text-white font-bold rounded-full text-sm tracking-wide hover:bg-white/5 hover:border-white/30 hover:shadow-lg transition-all duration-300"
              >
                Resume <Download size={18} strokeWidth={2} stroke="currentColor" fill="none" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
