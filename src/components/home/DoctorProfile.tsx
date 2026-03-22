import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function DoctorProfile() {
  return (
    <section className="bg-secondary text-white py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch">
          
          {/* Left: Image (Stretches to bottom) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 pt-16 lg:pt-0 relative flex items-end justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-full">
              <div className="absolute bottom-0 left-0 w-full h-3/4 bg-white/5 rounded-t-[40px] -z-10 blur-xl"></div>
              <img 
                src="/doctor_portrait.png" 
                alt="Dr. Julianne Sterling" 
                className="w-full h-auto object-cover rounded-t-[3rem] border-t-8 border-x-8 border-white/10 relative z-10 bottom-0 block align-bottom mt-16 lg:mt-32 max-h-[600px] object-top"
              />
              
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-10 -right-6 md:-right-10 bg-white text-secondary p-5 rounded-2xl shadow-2xl z-20 flex items-center gap-4 border border-gray-100"
              >
                <div className="bg-teal-50 text-primary p-3 rounded-full">
                  <Award size={28} />
                </div>
                <div>
                  <p className="font-bold text-xl">20+</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Years Experience</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12 py-20 lg:py-32 lg:pl-20 flex flex-col justify-center"
          >
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Lead Surgeon</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Dr. Julianne Sterling</h2>
            
            <p className="text-xl md:text-2xl font-serif italic text-gray-300 mb-12 leading-relaxed opacity-90 border-l-4 border-primary pl-6 py-2">
              "Our mission is to integrate our premier clinical excellence and emotional comfort. Your smile is our signature. And your comfort is our priority."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="font-bold text-white mb-3 text-lg">Qualifications</h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  DDS, Harvard Medical School.<br/>
                  Master of Aesthetic Dentistry.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-3 text-lg">Philosophy</h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Minimally invasive approach with maximum aesthetic impact.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
