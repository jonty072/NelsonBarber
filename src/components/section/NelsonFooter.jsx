'use client';

import React, { useEffect, useRef } from 'react';

const NelsonFooter = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    if (footerRef.current) {
      footerRef.current.classList.add('animate-fadein-footer');
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-br from-[#181b1f] via-[#23262f] to-[#1c2230] border-t border-[#23262f] pt-14 pb-8 text-[#e5e7eb] shadow-2xl animate-fadein-footer"
      style={{ boxShadow: '0 -8px 32px 0 rgba(14,165,233,0.10)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 rounded-2xl bg-[#23262f]/80 backdrop-blur-md border border-gold/20 shadow-lg py-8 md:py-12">
        {/* Logo & About */}
        <div className="flex flex-col justify-between mb-6 md:mb-0">
          <div className="flex items-center mb-3">
            <span
              className="text-4xl mr-3 drop-shadow-lg"
              role="img"
              aria-label="scissors"
              style={{ color: '#eab308' }}
            >✂️</span>
            <span className="text-4xl font-extrabold font-serif tracking-wide text-gold drop-shadow-lg">
              Nelson
            </span>
          </div>
          <div className="bg-[#23262f]/70 border-l-4 border-gold/70 rounded-xl px-5 py-4 shadow-lg">
            <p className="text-base text-[#f3f4f6] font-light leading-relaxed">
              Experience the ultimate in hair care and styling at <span className="text-gold font-semibold">Nelson</span>. High quality, perfect service, and a first-class look.
            </p>
          </div>
        </div>
        {/* Navigation */}
        <div className="mb-6 md:mb-0">
          <div className="font-semibold text-gold mb-3 text-lg tracking-wide">Navigation</div>
          <ul className="space-y-3 pl-2 border-l-4 border-gold/60 bg-[#23262f]/60 rounded-xl py-4">
            <li><a href="/" className="inline-block px-5 py-2 rounded-full border border-gold/30 bg-[#181b1f]/60 text-[#e5e7eb] font-semibold shadow-sm hover:bg-gold/10 hover:text-gold hover:border-gold transition-all duration-200 ease-in-out tracking-wide">Home</a></li>
            <li><a href="/services" className="inline-block px-5 py-2 rounded-full border border-gold/30 bg-[#181b1f]/60 text-[#e5e7eb] font-semibold shadow-sm hover:bg-gold/10 hover:text-gold hover:border-gold transition-all duration-200 ease-in-out tracking-wide">Services</a></li>
            <li><a href="/about" className="inline-block px-5 py-2 rounded-full border border-gold/30 bg-[#181b1f]/60 text-[#e5e7eb] font-semibold shadow-sm hover:bg-gold/10 hover:text-gold hover:border-gold transition-all duration-200 ease-in-out tracking-wide">About us</a></li>
            <li><a href="/shop" className="inline-block px-5 py-2 rounded-full border border-gold/30 bg-[#181b1f]/60 text-[#e5e7eb] font-semibold shadow-sm hover:bg-gold/10 hover:text-gold hover:border-gold transition-all duration-200 ease-in-out tracking-wide">Shop</a></li>
            <li><a href="/contacts" className="inline-block px-5 py-2 rounded-full border border-gold/30 bg-[#181b1f]/60 text-[#e5e7eb] font-semibold shadow-sm hover:bg-gold/10 hover:text-gold hover:border-gold transition-all duration-200 ease-in-out tracking-wide">Contacts</a></li>
          </ul>
        </div>
        {/* Contact */}
        <div className="mb-6 md:mb-0">
          <div className="font-semibold text-gold mb-3 text-lg tracking-wide">Contact</div>
          <div className="mb-4 rounded-xl overflow-hidden border-2 border-gold/40 shadow-lg">
            <iframe
              title="Nelson Location Map"
              src="https://www.google.com/maps?q=128+Winston+st,+New+York&output=embed"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <ul className="space-y-2 text-base">
            <li>
              <a href="https://www.google.com/maps/search/?api=1&query=128+Winston+st,+New+York" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors underline underline-offset-4 font-medium">
                128 Winston st, New York
              </a>
            </li>
            <li>Call: <a href="tel:18002182020" className="hover:text-gold transition-colors font-medium underline underline-offset-4">1.800.218.20.20</a></li>
            <li>Email: <a href="mailto:hello@example.com" className="hover:text-gold transition-colors font-medium underline underline-offset-4">hello@example.com</a></li>
          </ul>
        </div>
        {/* Working Hours */}
        <div className="mb-6 md:mb-0">
          <div className="font-semibold text-gold mb-3 text-lg tracking-wide">Working Hours</div>
          <ul className="space-y-2 text-base">
            <li>Mon – Sat: <span className="text-gold font-semibold">9am – 8pm</span></li>
            <li>Sun: <span className="text-gold font-semibold">9am – 6pm</span></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 sm:mt-12 border-t border-[#23262f]/60 pt-6 text-center text-sm text-[#a1a1aa] tracking-wide">
        ThemeREX © {new Date().getFullYear()}. All Rights Reserved.
      </div>
    </footer>
  );
};

// Fade-in animation for the footer
// Add this to your global CSS if not present:
// @keyframes fadein-footer { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none;} }
// .animate-fadein-footer { animation: fadein-footer 1.2s cubic-bezier(0.22, 1, 0.36, 1); }

export default NelsonFooter;