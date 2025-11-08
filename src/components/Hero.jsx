import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white"
              >
                Farhan Alfaizi
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500">Web Designer & Digital Marketer</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300 max-w-2xl"
              >
                Menggabungkan desain yang berani dengan strategi digital yang tepat sasaran. Saya membantu brand tampil standout dan menghasilkan konversi.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-6 py-3 text-base font-medium text-white shadow-lg shadow-fuchsia-500/30 hover:shadow-indigo-500/40 transition-shadow"
                >
                  Mulai Proyek
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 px-6 py-3 text-base font-medium text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  Lihat Karya
                </a>
              </motion.div>
            </div>
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="rounded-2xl border border-white/40 dark:border-white/10 bg-white/40 dark:bg-zinc-900/40 backdrop-blur p-6 shadow-xl"
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Webflow / React', value: 'Desain ke Development' },
                    { label: 'Brand Strategy', value: 'Positioning & Voice' },
                    { label: 'SEO & Ads', value: 'Traffic yang Berkualitas' },
                    { label: 'Conversion', value: 'Landingpage Cepat & Jelas' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 p-4">
                      <p className="text-xs uppercase tracking-wide text-zinc-500">{item.label}</p>
                      <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white dark:from-zinc-950/60 dark:via-transparent dark:to-zinc-950"></div>
    </section>
  );
};

export default Hero;
