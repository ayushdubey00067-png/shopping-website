// src/components/ProductCard.jsx
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md">
      {/* Check karein 'product.image' property sahi hai */}
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
        onError={(e) => { e.target.src = 'https://via.placeholder.com/300' }} // Fallback image
      />
      <span className="text-2xl font-bold text-indigo-600">
  {formatPrice(product.price)}
</span>
      <div className="p-4">
        <h3 className="font-bold">{product.name}</h3>
      </div>
    </div>
  );
};