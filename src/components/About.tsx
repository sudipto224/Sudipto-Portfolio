'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const { profile, education } = portfolioData;

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-24">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
                <img
                  src={profile.photo}
                  alt={`Professional portrait of ${profile.name}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-bold text-white mb-1">{profile.name}</h2>
                <p className="text-sm text-brand-400 font-medium">{profile.title}</p>
                <p className="mt-2 text-xs text-gray-500">{profile.location}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-8 space-y-8"
          >
            <div>
              <div className="kicker mb-3"><span>01</span> About me</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Clean code.<br />
                <span className="text-brand-400 italic">Better ideas.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">{profile.intro}</p>
              <p className="text-gray-400 leading-relaxed">
                {profile.about}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="rounded-xl border border-white/10 bg-black/30 p-6">
                <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Profile</h3>
                <dl className="space-y-3 text-sm">
                  {[['Role', profile.title], ['Location', profile.location], ['Availability', profile.availability]].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 border-b border-white/5 pb-2 last:border-0 last:pb-0">
                      <dt className="text-gray-500 leading-relaxed">{k}</dt>
                      <dd className="text-gray-300 leading-relaxed mt-1">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-6">
                <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Contact</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="text-gray-500">Email</div>
                    <a href={`mailto:${profile.email}`} className="text-brand-400 hover:underline">{profile.email}</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-gray-500">Phone</div>
                    <a href={`tel:${profile.phone}`} className="text-gray-300 hover:text-white">{profile.phone}</a>
                  </div>
                  <div className="flex gap-4 pt-2">
                    <a href={profile.cv} download className="flex items-center gap-2 text-xs font-bold text-brand-400 hover:text-brand-300 transition-colors">
                      <Download size={16} strokeWidth={2} /> CV
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 p-6">
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Education</h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.degree} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-white">{edu.degree}</span>
                      <span className="text-xs text-brand-400 font-medium">{edu.period}</span>
                    </div>
                    <p className="text-xs text-gray-500">{edu.institution}</p>
                    <p className="text-xs text-gray-500">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a href="/projects" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-400 hover:text-brand-300 transition-colors">
                View Projects <ArrowRight size={16} strokeWidth={2} stroke="currentColor" fill="none" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
