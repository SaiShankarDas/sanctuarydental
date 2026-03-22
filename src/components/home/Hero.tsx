import { motion } from 'framer-motion';
import { Calendar, Star, CheckCircle } from 'lucide-react';
import WhatsAppIcon from '../common/WhatsAppIcon';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-8 pb-16 lg:pt-10 lg:pb-20 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-50/80 via-white to-primary/5">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[100px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, -2, 0] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-teal-200/20 blur-[100px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-teal-100/50 text-teal-700 text-sm font-bold mb-6 tracking-wide uppercase"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
              </span>
              24/7 Emergency Care Available
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-[4rem] font-serif font-extrabold text-secondary leading-[1.1] mb-5 tracking-tight">
              <span className="block mb-1">Transform Your</span>
              <span className="block mb-1">Smile With</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-primary to-blue-600 inline-block drop-shadow-sm pb-2">
                World-Class Care
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed font-light">
              Experience the pinnacle of dental excellence. We combine cutting-edge technology with a tranquil environment to curate the perfect smile for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => {
                  const el = document.querySelector('#booking');
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
                }}
                className="group relative overflow-hidden bg-gradient-to-r from-teal-600 to-primary text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 text-lg active:scale-95 transform duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 border border-transparent"
              >
                <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                <Calendar size={22} className="relative z-10" />
                <span className="relative z-10">Book Appointment</span>
              </button>
              <button 
                onClick={() => window.open('https://wa.me/1234567890?text=Hi,%20I%20want%20to%20book%20a%20dental%20appointment', '_blank')}
                className="bg-white border-2 border-gray-100 text-secondary px-8 py-4 rounded-xl hover:bg-gray-50 hover:border-gray-200 transition-all font-semibold flex items-center justify-center gap-3 text-lg active:scale-95 transform duration-300 shadow-sm hover:shadow-md"
              >
                <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
                WhatsApp Us
              </button>
            </div>

            {/* Testimonial preview */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center gap-5 border-t border-gray-200/60 pt-6"
            >
              <div className="flex -space-x-3">
                <img className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-sm bg-gray-100" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100" alt="Patient" />
                <img className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-sm bg-gray-100" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100" alt="Patient" />
                <img className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-sm bg-gray-100" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" alt="Patient" />
              </div>
              <div>
                <div className="flex text-amber-400 mb-1.5 drop-shadow-sm">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-sm font-semibold text-secondary">
                  4.9/5 <span className="text-gray-500 font-medium tracking-wide">from 1,200+ Reviews</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative lg:h-[500px] w-full mt-6 lg:mt-0"
          >
            {/* Glowing backdrop */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-teal-400 to-primary opacity-30 blur-2xl rounded-[2.5rem] -z-10" />
            
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50">
              <img 
                src="/hero_dental_care.png" 
                alt="Dentist treating patient in an advanced clinic" 
                className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-10 -left-6 md:-left-12 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-xl flex items-center gap-4 border border-white max-w-[260px]"
            >
              <div className="bg-gradient-to-br from-teal-100 to-teal-50 text-teal-600 p-3 rounded-xl shrink-0 shadow-inner">
                <CheckCircle size={28} />
              </div>
              <div>
                <p className="font-extrabold text-secondary text-[15px] tracking-tight">99% SATISFIED</p>
                <p className="text-xs text-gray-500 mt-1 font-medium leading-relaxed">Painless procedures & stunning results.</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
