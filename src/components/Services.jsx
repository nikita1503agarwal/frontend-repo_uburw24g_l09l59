import React from 'react';
import { motion } from 'framer-motion';
import { Palette, BarChart3, MousePointerClick, Rocket } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Web Design Modern',
    desc: 'Desain bersih, tipografi kuat, dan visual yang engaging. Mobile-first & cepat.',
  },
  {
    icon: BarChart3,
    title: 'SEO & Growth',
    desc: 'Riset kata kunci, optimasi teknis, dan konten yang mendorong trafik organik.',
  },
  {
    icon: MousePointerClick,
    title: 'Ads & Funnel',
    desc: 'Setup iklan yang efektif dengan landingpage high-converting dan pelacakan rapi.',
  },
  {
    icon: Rocket,
    title: 'Brand Acceleration',
    desc: 'Membangun positioning, voice, dan sistem visual yang konsisten di semua channel.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Solusi yang Fokus pada Hasil
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            Dari strategi hingga eksekusi, saya bantu bisnis Anda tumbuh dengan desain yang tepat sasaran.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-900/60 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white grid place-items-center shadow">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-zinc-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
