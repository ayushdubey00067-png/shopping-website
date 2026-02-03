import { motion } from 'framer-motion';
import { ShoppingBag, Moon, Sun } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cart } = useCart();
  
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-black tracking-tighter text-indigo-600">MODERN.SHOP</Link>
      
      <div className="flex items-center gap-6">
        <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition">
          <ShoppingBag size={24} />
          {cart.length > 0 && (
            <motion.span 
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
            >
              {cart.reduce((acc, item) => acc + item.qty, 0)}
            </motion.span>
          )}
        </Link>
        <button className="p-2 bg-gray-100 rounded-full"><Moon size={20}/></button>
      </div>
    </nav>
  );
};
export default Navbar;