import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: "The most relaxing dental experience I've ever had. Dr. Sterling and her team are absolute pros. I actually look forward to my cleanings now.",
    author: "Alice M.",
    role: "Verified Patient",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&q=80",
    rating: 5,
  },
  {
    text: "I was terrified of root canals until I came here. The procedure was truly painless. The clinic feels more like a 5-star hotel than a medical office.",
    author: "David R.",
    role: "Verified Patient",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&q=80",
    rating: 5,
  },
  {
    text: "Sanctuary Dental completely fixed my bite after a bad accident. The attention to aesthetic detail is incredible. Worth every penny for the confidence boost.",
    author: "Sarah L.",
    role: "Verified Patient",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-4">Patient Stories</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-yellow-500" fill="currentColor" />)}
          </div>
          <p className="text-gray-600 font-medium">4.9/5 Based on 1,200+ Reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full"
            >
              <div className="flex text-yellow-500 mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 mb-8 italic flex-grow text-sm leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
                <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-secondary text-sm">{review.author}</h4>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
