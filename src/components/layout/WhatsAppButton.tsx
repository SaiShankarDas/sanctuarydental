import { motion } from 'framer-motion';
import WhatsAppIcon from '../common/WhatsAppIcon';

export default function WhatsAppButton() {
  const handleWhatsApp = () => {
    // Format the number and message
    const number = "1234567890";
    const message = encodeURIComponent("Hi, I want to book a dental appointment");
    window.open(`https://wa.me/${number}?text=${message}`, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-[#25D366]/30 flex items-center justify-center animate-bounce-slow"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-max pointer-events-none before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-2 before:border-8 before:border-transparent before:border-l-white">
        Chat with us
      </div>
    </motion.button>
  );
}
