import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import WhatsAppIcon from '../common/WhatsAppIcon';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Emergency Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-secondary rounded-3xl p-8 md:p-12 shadow-xl mb-24 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="mb-6 md:mb-0 max-w-xl">
            <h3 className="text-3xl font-serif font-bold text-white mb-3">Need Immediate Assistance?</h3>
            <p className="text-gray-300">
              We offer priority bookings for patients in pain or requiring emergency advice. We're here right now.
            </p>
          </div>
          <div className="flex gap-4 shrink-0 w-full md:w-auto">
            <a 
              href="tel:1234567890"
              className="flex-1 md:flex-none justify-center bg-teal-200 text-teal-900 px-6 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-teal-300 transition-colors active:scale-95 transform duration-200"
            >
              <Phone size={20} /> 123-456-7890
            </a>
            <button 
              onClick={() => window.open('https://wa.me/1234567890?text=Hi,%20I%20want%20to%20book%20a%20dental%20appointment', '_blank')}
              className="flex-1 md:flex-none justify-center bg-white/10 text-white border border-white/20 px-6 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-white/20 transition-colors active:scale-95 transform duration-200"
            >
              <WhatsAppIcon className="w-5 h-5" /> Chat Now
            </button>
          </div>
        </motion.div>

        {/* Location Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-10">Visit Our Sanctuary</h2>
            
            <div className="flex gap-6 mb-10">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                <MapPin className="text-secondary" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-secondary mb-1">Address</h4>
                <p className="text-gray-500 max-w-xs">123 Sanctuary Wellness Drive, Suite 101, Beverly Hills, CA 90210</p>
              </div>
            </div>

            <div className="flex gap-6 mb-10">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                <div className="w-5 h-5 rounded-full border-2 border-secondary flex items-center justify-center">
                  <div className="w-1 h-2 bg-secondary rounded-sm translate-y-[-2px] translate-x-[1px] rotate-45"></div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-secondary mb-1">Operating Hours</h4>
                <p className="text-gray-500">Mon - Fri: 8:00 AM - 8:00 PM</p>
                <p className="text-gray-500">Sat - Sun: 9:00 AM - 5:00 PM</p>
              </div>
            </div>

            <button 
              onClick={() => window.open('https://maps.app.goo.gl/samplelink', '_blank')}
              className="bg-secondary text-white px-8 py-3 rounded-lg font-bold hover:bg-secondary-light transition-colors mt-4 active:scale-95 transform duration-200 shadow-md flex items-center gap-2"
            >
              <MapPin size={18} /> Get Directions
            </button>
          </div>

          <div className="h-[400px] w-full rounded-3xl overflow-hidden shadow-sm bg-gray-100 relative">
            {/* Simple map placeholder or iframe if available */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16614719.21025549!2d72.10238164674932!3d20.75686803182216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e1!3m2!1sen!2sin!4v1774199338299!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0" 
              loading="lazy" 
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
