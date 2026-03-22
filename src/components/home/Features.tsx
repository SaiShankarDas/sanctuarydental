import { motion } from 'framer-motion';
import { Wifi, Clock, Users, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck size={28} className="text-secondary" />,
    title: 'Pain-Free',
    desc: 'Advanced techniques ensuring maximum comfort.',
  },
  {
    icon: <Users size={28} className="text-secondary" />,
    title: 'Expert Dentists',
    desc: 'Providing targeted care with empathy.',
  },
  {
    icon: <Wifi size={28} className="text-secondary" />,
    title: 'Modern Tech',
    desc: 'Pioneering technology to ensure reliable results.',
  },
  {
    icon: <Clock size={28} className="text-secondary" />,
    title: '24/7 Support',
    desc: 'Patient care team flexible to your routine.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left: grid of 4 cards */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-6 md:p-8 rounded-3xl shadow-sm text-center flex flex-col items-center justify-center border border-gray-100"
              >
                <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-secondary mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-12"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-6 leading-tight">
              Patient Care Reimagined for the Modern World.
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              We've reinvented the patient visit. From the start of the many visits, gentle 
              soothing, chairs with vibrating controls. Step into a clinic that feels 
              like a wellness spa, powered by the world's leading dental technologies.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-secondary font-medium">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                Comprehensive Digital Smile Design
              </li>
              <li className="flex items-center gap-3 text-secondary font-medium">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                In-House Sedation Specialists
              </li>
              <li className="flex items-center gap-3 text-secondary font-medium">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                24/7 Dental Emergency Support
              </li>
            </ul>

            <button 
              onClick={() => {
                const el = document.querySelector('#specialists');
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
              }}
              className="bg-secondary text-white px-8 py-3.5 rounded-lg hover:bg-secondary-light transition-colors font-medium active:scale-95 transform duration-200 shadow-md"
            >
              Discover our private clinics
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
