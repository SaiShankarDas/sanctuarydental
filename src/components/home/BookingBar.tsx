import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  date: z.string().min(1, 'Please select a date'),
});

type FormData = z.infer<typeof formSchema>;

export default function BookingBar() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // n8n Webhook placeholder
      // await fetch('https://your-n8n-webhook-url.com/webhook/appointment', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });
      
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form data submitted:', data);
      
      setIsSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
      
      // Trigger WhatsApp silently or redirect
      // window.open(`https://wa.me/1234567890?text=Hi! I just booked an appointment for ${data.service} on ${data.date}. Name: ${data.name}`);
    } catch (error) {
      console.error('Error submitting form', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="relative -mt-12 lg:-mt-16 z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-32">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="bg-white rounded-2xl shadow-xl shadow-teal-900/5 p-6 md:p-8"
      >
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-6 text-center animate-in fade-in zoom-in">
            <CheckCircle className="w-16 h-16 text-primary mb-4" />
            <h3 className="text-2xl font-serif font-bold text-secondary mb-2">Booking Confirmed!</h3>
            <p className="text-gray-500">We will contact you shortly to confirm your {errors && ''} appointment details.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row gap-4 items-start lg:items-end">
            
            <div className="w-full lg:w-1/4">
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Patient Name</label>
              <input 
                type="text" 
                placeholder="Full Name" 
                {...register('name')}
                className={`w-full px-4 py-3 bg-gray-50 border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-primary'} rounded-lg focus:outline-none focus:ring-2 transition-all`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1 absolute">{errors.name.message}</p>}
            </div>

            <div className="w-full lg:w-1/4">
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Phone Number</label>
              <input 
                type="tel" 
                placeholder="+1 (555) 000-0000" 
                {...register('phone')}
                className={`w-full px-4 py-3 bg-gray-50 border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-primary'} rounded-lg focus:outline-none focus:ring-2 transition-all`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1 absolute">{errors.phone.message}</p>}
            </div>

            <div className="w-full lg:w-1/4">
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Doctor Service</label>
              <select 
                {...register('service')}
                className={`w-full px-4 py-3 bg-gray-50 border ${errors.service ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-primary'} rounded-lg focus:outline-none focus:ring-2 transition-all appearance-none`}
              >
                <option value="">Select Service</option>
                <option value="General Cleaning">General Cleaning</option>
                <option value="Root Canal">Root Canal</option>
                <option value="Dental Implants">Dental Implants</option>
                <option value="Invisalign/Braces">Invisalign/Braces</option>
                <option value="Laser Whitening">Laser Whitening</option>
              </select>
              {errors.service && <p className="text-red-500 text-xs mt-1 absolute">{errors.service.message}</p>}
            </div>

            <div className="w-full lg:w-1/4">
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Booking Date</label>
              <input 
                type="date" 
                {...register('date')}
                className={`w-full px-4 py-3 bg-gray-50 border ${errors.date ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-primary'} rounded-lg focus:outline-none focus:ring-2 transition-all`}
              />
              {errors.date && <p className="text-red-500 text-xs mt-1 absolute">{errors.date.message}</p>}
            </div>

            <div className="w-full lg:w-auto mt-4 lg:mt-0">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={isSubmitting}
                className="w-full lg:w-32 h-[50px] bg-secondary text-white rounded-lg hover:bg-secondary-light transition-colors font-medium flex items-center justify-center disabled:opacity-70 shadow-lg shadow-secondary/20"
              >
                {isSubmitting ? <Loader2 className="animate-spin w-5 h-5" /> : 'Submit Now'}
              </motion.button>
            </div>

          </form>
        )}
      </motion.div>
    </section>
  );
}
