import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Terima kasih! Pesanmu sudah terkirim.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Siap Tingkatkan Bisnis?</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">Ceritakan kebutuhan project Anda. Saya akan balas dalam 24 jam.</p>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-10 max-w-2xl rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-zinc-600 dark:text-zinc-300">Nama</label>
              <input required name="name" className="mt-1 w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2" />
            </div>
            <div>
              <label className="text-sm text-zinc-600 dark:text-zinc-300">Email</label>
              <input required type="email" name="email" className="mt-1 w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-zinc-600 dark:text-zinc-300">Pesan</label>
            <textarea required name="message" rows={5} className="mt-1 w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2" />
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-6 py-3 text-white font-medium shadow hover:shadow-lg transition-shadow">
              <Send size={16}/> Kirim
            </button>
            {status && <p className="text-sm text-emerald-600 dark:text-emerald-400">{status}</p>}
          </div>
        </motion.form>

        <p className="mt-8 text-center text-sm text-zinc-500">Atau email langsung ke hello@farhanalfaizi.com</p>
      </div>
    </section>
  );
};

export default Contact;
