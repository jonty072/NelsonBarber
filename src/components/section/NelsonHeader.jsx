'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ShoppingCart, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const NelsonHeader = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinks = [
    {
      name: 'Home',
      dropdown: [
        { name: 'Hair Salon', href: '/home/hair-salon' },
        { name: 'Hair Salon Calendar', href: '/home/hair-salon-calendar' },
        { name: 'Beauty Salon', href: '/home/beauty-salon' },
        { name: 'Barbershop Video background', href: '/home/barbershop-video' },
        { name: 'Nails Artist', href: '/home/nails-artist' },
      ],
    },
    { name: 'Services', href: '/services' },
    { name: 'About us', href: '/about' },
    {
      name: 'Pages',
      dropdown: [
        {
          name: 'Tools',
          subItems: [
            { name: 'Shortcodes', href: '/pages/tools/shortcodes' },
            { name: 'Typography', href: '/pages/tools/typography' },
            { name: 'Service Plus', href: '/pages/tools/service-plus' },
            { name: 'Privacy Policy', href: '/pages/tools/privacy-policy' },
            { name: 'FAQ', href: '/pages/tools/faq' },
          ],
        },
        { name: 'Gallery', href: '/pages/gallery' },
        { name: 'Simple Gallery', href: '/pages/simple-gallery' },
        {
          name: 'Our Team',
          subItems: [
            { name: 'Team Members', href: '/pages/team/members' },
            { name: 'Team Member 1', href: '/pages/team/member1' },
            { name: 'Team Member 2', href: '/pages/team/member2' },
          ],
        },
      ],
    },
    {
      name: 'News',
      dropdown: [
        { name: 'All Posts', href: '/news/all' },
        {
          name: 'Classic',
          subItems: [
            { name: 'Classic 2 columns', href: '/news/classic/2-cols' },
            { name: 'Classic 3 columns', href: '/news/classic/3-cols' },
          ],
        },
        {
          name: 'Portfolio',
          subItems: [
            { name: 'Portfolio 2 columns', href: '/news/portfolio/2-cols' },
            { name: 'Portfolio 3 columns', href: '/news/portfolio/3-cols' },
            { name: 'Portfolio 4 columns', href: '/news/portfolio/4-cols' },
          ],
        },
        {
          name: 'Chess',
          subItems: [
            { name: 'Chess 2 columns', href: '/news/chess/2-cols' },
            { name: 'Chess 4 columns', href: '/news/chess/4-cols' },
            { name: 'Chess 6 columns', href: '/news/chess/6-cols' },
          ],
        },
      ],
    },
    { name: 'Shop', href: '/shop' },
    { name: 'Contacts', href: '/contacts' },
    { name: 'Appointment', href: '/appointment', isButton: true },
  ];

  const toggleDropdown = (itemName) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
    if (openDropdown !== itemName) setHoveredLink(null);
  };

  const renderDropdown = (items, level = 0) => (
    <ul
      className={`absolute ${level > 0 ? 'left-full -top-1' : 'top-full left-0'} mt-1 bg-[#23262f] shadow-lg rounded-md py-2 z-20 min-w-[220px] border border-[#23262f]`}
    >
      {items.map((item) => (
        <li key={item.name} className="relative group/sub">
          {item.href ? (
            <Link
              href={item.href}
              className="block px-4 py-2 text-sm text-[#e5e7eb] hover:text-gold hover:bg-[#181b1f] whitespace-nowrap font-sans transition-colors"
              onClick={() => setOpenDropdown(null)}
            >
              {item.name}
            </Link>
          ) : (
            <button
              onClick={() => item.subItems && toggleDropdown(item.name + '-sub')}
              className="w-full text-left px-4 py-2 text-sm text-[#e5e7eb] hover:text-gold hover:bg-[#181b1f] flex justify-between items-center whitespace-nowrap font-sans transition-colors"
            >
              {item.name}
              {item.subItems && <ChevronDown size={16} className={`ml-2 transition-transform ${openDropdown === item.name + '-sub' ? 'rotate-180' : ''} text-gray-400 dark:text-gray-500`} />}
            </button>
          )}
          {item.subItems && openDropdown === item.name + '-sub' && renderDropdown(item.subItems, level + 1)}
        </li>
      ))}
    </ul>
  );

  return (
    <header className="bg-[#181b1f] border-b border-[#23262f] shadow-md sticky top-0 z-50 font-sans">
      {/* Top bar */}
      <div className="bg-nelson-light dark:bg-nelson-light-dark py-2 text-xs text-nelson-text dark:text-nelson-text-dark border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center space-x-6">
          <div className="flex items-center space-x-1.5">
            <Phone size={14} className="text-gray-500 dark:text-gray-400" />
            <span>1.800.218.20.20</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <MapPin size={14} className="text-gray-500 dark:text-gray-400" />
            <span>128 Winston st, New York</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="https://hair.nelson.themerex.net/wp-content/uploads/2020/04/Logo-Salon.png"
                alt="Nelson Logo"
                width={160}
                height={50}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2 items-center">
            {navLinks.map((link) => {
              const isDropdown = !!link.dropdown;
              const isHoverDropdown = link.name === 'Home' || link.name === 'Pages';
              return (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => {
                    if (isDropdown && isHoverDropdown) setOpenDropdown(link.name);
                    setHoveredLink(link.name);
                  }}
                  onMouseLeave={() => {
                    if (isDropdown && isHoverDropdown) setOpenDropdown(null);
                    setHoveredLink(null);
                  }}
                >
                  {link.isButton ? (
                    <motion.div whileHover={{ scale: 1.05, y: -1 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href={link.href}
                        className="btn-primary text-sm font-medium uppercase tracking-wider block"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ) : link.href ? (
                    <Link
                      href={link.href}
                      className="px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wider relative block z-10 text-[#e5e7eb] hover:text-gold group"
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#eab308] transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors uppercase tracking-wider relative z-10 text-[#e5e7eb] hover:text-gold group"
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#eab308] transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <ChevronDown size={16} className={`ml-1 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''} text-gold relative z-10`} />
                    </button>
                  )}
                  {isDropdown && openDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-1 min-w-[220px] rounded-lg py-2 z-20 bg-[#23262f] border border-[#23262f] shadow-xl">
                      {renderDropdown(link.dropdown)}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Cart Icon */}
          <div className="ml-4 flex items-center">
            <Link href="/cart" className="group text-gold hover:text-gold p-2 relative transition-all duration-200">
              <span className="inline-flex items-center justify-center">
                <ShoppingCart size={26} className="drop-shadow-lg transition-transform duration-200 group-hover:scale-110" style={{ filter: 'drop-shadow(0 2px 8px #eab30888)' }} />
              </span>
              <span className="absolute top-0.5 right-0.5 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-gold rounded-full transform translate-x-1/2 -translate-y-1/2 shadow-lg border-2 border-[#23262f]">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NelsonHeader; 