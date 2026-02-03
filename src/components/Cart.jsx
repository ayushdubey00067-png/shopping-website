import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  // 1. Total Price Calculation
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  // 2. Formatting to Indian Rupees (Professional Way)
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(totalPrice);

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <Link to="/" className="p-2 hover:bg-gray-100 rounded-full transition">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-3xl font-bold text-gray-800">Your Shopping Cart</h1>
      </div>

      {cart.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200"
        >
          <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
          <p className="text-xl text-gray-500">Aapka cart khali hai!</p>
          <Link to="/" className="mt-4 inline-block text-indigo-600 font-semibold hover:underline">
            Abhi shopping shuru karein →
          </Link>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode='popLayout'>
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100"
                >
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                    <p className="text-gray-500 text-sm">Qty: {item.qty}</p>
                    {/* Item price also in Rupees */}
                    <p className="text-indigo-600 font-bold">₹{item.price}</p>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    onClick={() => removeFromCart(item.id)}
                    className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition"
                  >
                    <Trash2 size={20} />
                  </motion.button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-900 text-white p-6 rounded-3xl h-fit sticky top-24 shadow-2xl"
          >
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 border-b border-gray-700 pb-6">
              <div className="flex justify-between">
                <span className="text-gray-400">Subtotal</span>
                {/* Formatted subtotal */}
                <span className="font-semibold">{formattedPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Shipping</span>
                <span className="text-green-400 font-medium italic">FREE</span>
              </div>
            </div>
            <div className="flex justify-between py-6 text-xl font-bold border-t border-gray-700 mt-2">
              <span>Total Payable</span>
              {/* Final formatted total */}
              <span className="text-indigo-400">{formattedPrice}</span>
            </div>
            <Link to="/checkout">
              <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-500/30">
                Checkout Now
              </button>
            </Link>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Cart;