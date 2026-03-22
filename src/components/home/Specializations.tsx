import { motion } from 'framer-motion';
import { Shield, Droplet, Layers, Sparkles, Activity, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Droplet className="w-6 h-6 text-primary" />,
    title: 'Deep Cleaning',
    description: 'Painless ultrasonic scaling and polishing to keep your gums healthy and breath fresh.',
    isDark: false,
  },
  {
    icon: <Activity className="w-6 h-6 text-primary" />,
    title: 'Root Canal',
    description: 'Advanced micro-endodontic treatments focused on saving your natural teeth with zero pain.',
    isDark: false,
  },
  {
    icon: <Layers className="w-6 h-6 text-primary" />,
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacements using high-grade biocompatible titanium.',
    isDark: false,
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: 'Invisalign/Braces',
    description: 'Precision tech invisible aligners to straighten your smile without metal wires.',
    isDark: false,
  },
  {
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    title: 'Laser Whitening',
    description: 'Up to 8 shades lighter in just 45 minutes with our clinical-grade laser technology.',
    isDark: false,
  },
];

export default function Specializations() {
  return (
    <section id="specialists" className="py-20 lg:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-4">World-Class Specializations</h2>
            <p className="text-gray-500 text-lg">
              We combine restorative precision with cosmetic artistry to deliver results that are as healthy as they are beautiful.
            </p>
          </div>
          <button className="text-secondary font-medium hover:text-primary transition-colors flex items-center gap-2 border-b-2 border-secondary hover:border-primary pb-1 shrink-0">
            View all services <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">{service.description}</p>
              <button className="text-sm font-bold text-secondary-light flex items-center gap-2 group-hover:text-primary transition-colors">
                Learn More <ArrowRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
              </button>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-secondary p-8 rounded-2xl shadow-lg flex flex-col justify-center text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Not sure what you need?</h3>
            <p className="text-gray-300 mb-8 max-w-sm">
              Book a comprehensive 3D scan and consultation with our specialists.
            </p>
            <button 
              onClick={() => {
                const el = document.querySelector('#booking');
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
              }}
              className="bg-white text-secondary px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors w-max active:scale-95 transform duration-200 shadow-lg"
            >
              Get a Consultation
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
