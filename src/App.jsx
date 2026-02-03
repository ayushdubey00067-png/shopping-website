import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; 
import { CartProvider } from './context/CartContext';

// Components Imports
import Navbar from './components/Navbar';
import PortfolioHero from './components/PortfolioHero';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <CartProvider>
      {/* Step 1: Added basename. 
        This tells React Router that the app lives at /shopping-website/ 
      */}
      <Router basename="/shopping-website">
        <div className="min-h-screen bg-white text-gray-900 selection:bg-indigo-100">
          <Navbar />

          <main>
            <AnimatePresence mode="wait">
              <Routes>
                {/* Home Page Route */}
                <Route 
                  path="/" 
                  element={
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <PortfolioHero />
                      <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mt-12 mb-8">
                          Featured Products
                        </h2>
                        <ProductList />
                      </div>
                    </motion.div>
                  } 
                />

                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </AnimatePresence>
          </main>

          <footer className="py-10 text-center text-gray-400 text-sm border-t mt-20">
            © 2026 Modern Shop Portfolio Project
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;