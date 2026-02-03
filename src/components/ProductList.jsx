import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: "Neural Watch", price: 299, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
  { id: 2, name: "Aero Headphones", price: 199, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
  { id: 3, name: "Smart Bottle", price: 49, image: "shopping/src/components/LARQ - Self-Cleaning _ Purifying Smart Water Bottle.jpg" },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
      {products.map((product) => (
        <motion.div 
          key={product.id}
          whileHover={{ y: -10 }}
          className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100"
        >
          <img src={product.image} className="rounded-2xl h-64 w-full object-cover mb-4" />
          <h3 className="font-bold text-xl">{product.name}</h3>
          <div className="flex justify-between items-center mt-4">
            <span className="text-2xl font-bold">${product.price}</span>
            <button 
              onClick={() => addToCart(product)}
              className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
export default ProductList;