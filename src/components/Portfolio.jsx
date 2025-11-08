import React from 'react';
import { motion } from 'framer-motion';

const works = [
  {
    title: 'SaaS Dashboard',
    tag: 'UI/UX + Webflow',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'E-commerce Landing',
    tag: 'Design + Conversion',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Personal Brand',
    tag: 'Strategy + Visual System',
    img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Pilihan Karya</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">Cuplikan proyek yang berorientasi pada hasil.</p>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-full border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800">Minta Studi Kasus</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <motion.a
              key={w.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={w.img} alt={w.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                  <span className="text-xs text-zinc-200">{w.tag}</span>
                  <h3 className="text-lg font-semibold text-white">{w.title}</h3>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
