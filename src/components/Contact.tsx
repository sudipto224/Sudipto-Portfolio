'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Smartphone, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const { profile, socials } = portfolioData;

const CONTACT_ITEMS = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone}`, Icon: Smartphone },
  { label: 'GitHub', value: 'sudipto224', href: 'https://github.com/sudipto224/', Icon: Github },
  { label: 'LinkedIn', value: 'Sudipto Das', href: 'https://www.linkedin.com/in/sudipto-das-7b3a4327a/', Icon: Linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="section relative">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="kicker inline-block mb-4"><span>04</span> Let's connect</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Have an idea?<br /><span className="text-brand-400 italic">Let's make it real.</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Interested in working together? I'm open to internships, junior developer roles,
              freelance work, and collaborative opportunities.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Get in touch</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                The best ways to reach me are listed below. I read every message and respond as
                soon as I can.
              </p>
              <div className="space-y-5">
                {CONTACT_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === 'Email' || item.label === 'Phone' ? undefined : '_blank'}
                    rel={item.label === 'Email' || item.label === 'Phone' ? undefined : 'noreferrer'}
                    className="group flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-black/30 hover:border-brand-400/50 hover:bg-brand-400/5 transition-all duration-300"
                  >
                    <div className="flex shrink-0 items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-black/40 text-brand-400 group-hover:bg-brand-400 group-hover:text-[#0a0a0a] transition-all">
                      <item.Icon size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white group-hover:text-brand-400 transition-colors">{item.label}</p>
                      <p className="text-xs text-gray-500 truncate">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 p-6">
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Social profiles</h3>
              <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                Say hello on any of the platforms below.
              </p>
              <div className="space-y-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/10 text-sm text-gray-300 hover:text-brand-400 hover:border-brand-400/50 hover:bg-brand-400/5 transition-all"
                  >
                    <span className="w-20 text-xs font-medium">{social.label}</span>
                    <span className="ml-auto text-xs text-gray-500 truncate">{social.url.replace('https://', '').replace('http://', '')}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-8 text-center shadow-xl">
                <h3 className="text-lg font-bold text-white mb-3">Ready to talk?</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Send an email or message me on WhatsApp to get started.
                </p>
                <div className="space-y-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="block w-full px-6 py-3 bg-brand-400 text-[#0a0a0a] font-bold rounded-xl text-sm tracking-wide hover:bg-brand-300 transition-all"
                  >
                    Email me <ArrowRight size={16} strokeWidth={2} stroke="currentColor" fill="none" />
                  </a>
                  <a
                    href={profile.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full px-6 py-3 border border-white/10 text-white font-bold rounded-xl text-sm tracking-wide hover:bg-white/5 hover:border-white/20 transition-all"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${profile.phone}`}
                    className="block mt-4 text-xs font-medium text-gray-500 hover:text-white transition-colors"
                  >
                    Call {profile.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
