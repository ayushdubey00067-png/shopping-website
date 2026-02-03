export default function Checkout() {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Checkout</h2>

      <input className="w-full p-3 mb-3 border rounded" placeholder="Full Name" />
      <input className="w-full p-3 mb-3 border rounded" placeholder="Address" />
      <input className="w-full p-3 mb-3 border rounded" placeholder="Card Number" />

      <button className="w-full bg-green-600 text-white py-3 rounded">
        Pay Now
      </button>
    </div>
  );
}

