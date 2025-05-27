'use client';

import React from 'react';
import { motion } from 'framer-motion';
// import { Star } from 'lucide-react'; // Example icon

const testimonials = [
  {
    name: 'Helen Blackwood',
    text: "You don't get many offers while looking for a quick styling and cut. Thanks for the wonderful experience at Nelson Salon.",
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Samantha Edison',
    text: "I am happy that I have used some of your premium products and feel absolutely great. Your hairdressers are the best. Keep it up.",
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Emma Graceland',
    text: "Everything about this place is simply great! I loved the atmosphere and friendly staff. Incredible job, I wish you luck!",
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Fiona Willson',
    text: "Being in the business for almost a decade, I can tell that this place is absolutely worth your time and money. Thank you so much!",
    image: 'https://randomuser.me/api/portraits/women/43.jpg',
  },
];

const TestimonialsSection = () => (
  <section className="py-20 section-soft">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gold font-serif text-center mb-12">What clients say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="card-soft shadow-lg flex flex-col h-full items-center text-center">
            <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full object-cover border-4 border-gold shadow-md -mt-10 mb-4 bg-[#23262f]" />
            <p className="text-lg mb-6 text-[#e5e7eb]">"{t.text}"</p>
            <div className="mt-auto">
              <span className="text-gold font-serif text-lg font-semibold">{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection; 