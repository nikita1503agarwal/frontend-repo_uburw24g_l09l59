import React from 'react';
import { Rocket, User, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 dark:bg-zinc-900/60 border-b border-white/20 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 grid place-items-center rounded-md bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white">
              <Rocket size={18} />
            </div>
            <span className="font-semibold tracking-tight text-zinc-900 dark:text-white">Farhan Alfaizi</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-700 dark:text-zinc-300">
            <a href="#services" className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-2"><User size={16}/>Tentang</a>
            <a href="#portfolio" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Portofolio</a>
            <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Kontak</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@farhanalfaizi.com"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 text-sm font-medium shadow-sm hover:shadow transition-all"
            >
              <Mail size={16} /> Hubungi Farhan
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
