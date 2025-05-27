'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Haircut',
    description: 'Any cut to your taste followed by a relaxing wash and expert finish for a flawless look.',
    href: '/services/haircut',
    icon: '✂️',
  },
  {
    title: 'Styling',
    description: 'Keep looking your best with our professional stylists who create the perfect style for any occasion.',
    href: '/services/styling',
    icon: '✨',
  },
  {
    title: 'Color',
    description: 'For premium results, at our barbershop, we combine advanced techniques and top-quality products for vibrant, lasting color.',
    href: '/services/color',
    icon: '🎨',
  },
  {
    title: 'Treatment',
    description: 'Looking to try something new with your hair? Experience our nourishing treatments for healthy, beautiful hair.',
    href: '/services/treatment',
    icon: '🌿',
  },
];

const ServiceExpectationSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 md:py-24 section-soft font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nelson-text-heading dark:text-nelson-text-heading-dark mb-4 font-serif">
            Service beyond expectation
          </h2>
          <p className="text-lg text-nelson-text dark:text-nelson-text-dark max-w-2xl mx-auto mb-6">
            Our Hair Salon is the place created for women who appreciate high quality, perfect service and first-class look. Welcome to Nelson!
          </p>
          <Link 
            href="/about"
            className="text-nelson-blue dark:text-nelson-teal hover:text-nelson-blue-dark dark:hover:text-nelson-blue font-medium transition-colors text-sm uppercase tracking-wider"
          >
            Read more about us
          </Link>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="card-soft text-center flex flex-col items-center"
              variants={cardItemVariants}
            >
              <div className="mb-5 text-4xl">
                <span>{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gold mb-3 font-serif">
                {service.title}
              </h3>
              <p className="text-nelson-text dark:text-nelson-text-dark text-sm mb-4">
                {service.description}
              </p>
              <Link 
                href={service.href}
                className="btn-dark text-xs font-medium uppercase tracking-wider mt-auto"
              >
                Read more
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Prices Section */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h3 className="text-3xl font-bold text-center text-nelson-text-heading dark:text-nelson-text-heading-dark mb-8 font-serif">
            Our Prices
          </h3>
          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex justify-between border-b pb-2 text-lg font-medium">
              <span>Haircut short hair</span>
              <span className="text-gold">40$</span>
            </div>
            <div className="flex justify-between border-b pb-2 text-lg font-medium">
              <span>highlights</span>
              <span className="text-gold">35$</span>
            </div>
            <div className="flex justify-between border-b pb-2 text-lg font-medium">
              <span>Haircut + styling</span>
              <span className="text-gold">70$</span>
            </div>
            <div className="flex justify-between border-b pb-2 text-lg font-medium">
              <span>perm</span>
              <span className="text-gold">95$</span>
            </div>
            <div className="flex justify-between border-b pb-2 text-lg font-medium">
              <span>Haircut long hair</span>
              <span className="text-gold">80$</span>
            </div>
            <div className="flex justify-between border-b pb-2 text-lg font-medium">
              <span>Styling</span>
              <span className="text-gold">35$</span>
            </div>
            <div className="flex justify-between border-b pb-2 text-lg font-medium">
              <span>Haircut + Coloring</span>
              <span className="text-gold">70$</span>
            </div>
            <div className="flex justify-between border-b pb-2 text-lg font-medium">
              <span>Lamination</span>
              <span className="text-gold">115$</span>
            </div>
          </div>
        </motion.div>

        {/* Shop the gifts Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h3 className="text-3xl font-bold text-center text-nelson-text-heading dark:text-nelson-text-heading-dark mb-8 font-serif">
            Shop the gifts
          </h3>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Shampoo For Colored Hair */}
            <div className="card-soft text-center flex flex-col items-center bg-[#faf7f2] dark:bg-[#23262f] rounded-2xl shadow-md border border-gold/10 p-8">
              <img src="/shampoo-for-colored-hair.png" alt="Shampoo For Colored Hair" className="w-20 h-20 object-cover rounded-xl mb-5 shadow" />
              <h3 className="text-xl font-semibold text-gold mb-3 font-serif">Shampoo For Colored Hair</h3>
              <p className="text-nelson-text dark:text-nelson-text-dark text-sm mb-4">Keep your hair looking clean and vibrant with our gentle, color-safe shampoo.</p>
              <span className="text-lg font-extrabold text-gold mb-4">$41.00</span>
              <button className="btn-dark text-xs font-medium uppercase tracking-wider mt-auto">Shop now</button>
            </div>
            {/* Face & Hands Cream */}
            <div className="card-soft text-center flex flex-col items-center bg-[#faf7f2] dark:bg-[#23262f] rounded-2xl shadow-md border border-gold/10 p-8">
              <img src="/face-hands-cream.png" alt="Face & Hands Cream" className="w-20 h-20 object-cover rounded-xl mb-5 shadow" />
              <h3 className="text-xl font-semibold text-gold mb-3 font-serif">Face & Hands Cream</h3>
              <p className="text-nelson-text dark:text-nelson-text-dark text-sm mb-4">Nourish and hydrate your skin with our rich, soothing face and hands cream.</p>
              <span className="text-lg font-extrabold text-gold mb-4">$17.00</span>
              <button className="btn-dark text-xs font-medium uppercase tracking-wider mt-auto">Shop now</button>
            </div>
            {/* Hair Spray */}
            <div className="card-soft text-center flex flex-col items-center bg-[#faf7f2] dark:bg-[#23262f] rounded-2xl shadow-md border border-gold/10 p-8">
              <img src="/hair-spray.png" alt="Hair Spray" className="w-20 h-20 object-cover rounded-xl mb-5 shadow" />
              <h3 className="text-xl font-semibold text-gold mb-3 font-serif">Hair Spray</h3>
              <p className="text-nelson-text dark:text-nelson-text-dark text-sm mb-4">Tame your flyaways, add shine, and hold your style all day with our premium hair spray.</p>
              <span className="text-lg font-extrabold text-gold mb-4">$23.00</span>
              <button className="btn-dark text-xs font-medium uppercase tracking-wider mt-auto">Shop now</button>
            </div>
            {/* Lavender Balm with Discount */}
            <div className="card-soft text-center flex flex-col items-center bg-[#faf7f2] dark:bg-[#23262f] rounded-2xl shadow-md border border-gold/10 p-8 relative">
              <span className="absolute top-4 right-4 bg-gold text-white text-xs font-bold px-2 py-1 rounded-full">-43%</span>
              <img src="/lavender-balm.png" alt="Lavender Balm" className="w-20 h-20 object-cover rounded-xl mb-5 shadow" />
              <h3 className="text-xl font-semibold text-gold mb-3 font-serif">Lavender Balm</h3>
              <p className="text-nelson-text dark:text-nelson-text-dark text-sm mb-4">Moisture plus magic manages dryness and soothes your skin for a soft, healthy feel.</p>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-base line-through text-gray-400">$21.00</span>
                <span className="text-lg font-extrabold text-gold">$12.00</span>
              </div>
              <button className="btn-dark text-xs font-medium uppercase tracking-wider mt-auto">Shop now</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceExpectationSection;