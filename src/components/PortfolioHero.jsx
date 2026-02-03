import { motion } from 'framer-motion';

const PortfolioHero = () => (
  <section className="py-20 px-6 text-center bg-gradient-to-b from-indigo-50 to-white">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="text-6xl font-extrabold text-gray-900 mb-6"
    >
      Summer Collection <span className="text-indigo-600">2026</span>
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
      className="text-gray-600 text-xl max-w-2xl mx-auto"
    >
      Experience the future of shopping with smooth animations and minimalist design.
    </motion.p>
  </section>
);
export default PortfolioHero;