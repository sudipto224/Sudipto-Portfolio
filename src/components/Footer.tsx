'use client';

import { Mail, Github, Linkedin, Smartphone, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const SOCIALS = [
  { label: 'GitHub', url: 'https://github.com/sudipto224/', Icon: Github },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sudipto-das-7b3a4327a/', Icon: Linkedin },
  { label: 'Facebook', url: 'https://www.facebook.com/share/1UA8eedKhG/', Icon: Facebook },
  { label: 'Instagram', url: 'https://www.instagram.com/sudiptodas2468/', Icon: Instagram },
  { label: 'WhatsApp', url: 'https://wa.me/8801701054096', Icon: Smartphone },
  { label: 'Email', url: 'mailto:sudiptodas8900@gmail.com', Icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="brand">Sudipto</span>
                <span className="brand-fine"> Das</span>
              </div>
              <p className="text-sm font-medium text-white">Full Stack Developer &middot; Khulna, Bangladesh</p>
              <p className="mt-2 text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Sudipto Das. All rights reserved.
              </p>
            </motion.div>
          </div>
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-6">Quick links</h3>
              <ul className="space-y-3">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((label) => (
                  <li key={label}>
                    <a
                      href={`#${label.toLowerCase()}`}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
            >
              <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-6">Social</h3>
              <div className="flex flex-wrap gap-3">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-md border border-white/10 text-gray-400 hover:text-brand-400 hover:border-brand-400/50 hover:bg-brand-400/5 transition-colors"
                    aria-label={social.label}
                  >
                    <social.Icon size={16} strokeWidth={2} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
