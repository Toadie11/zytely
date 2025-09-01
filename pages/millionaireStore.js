import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Millionaire's Mug",
    description: "Start your day with a cup of ambition!",
    price: 19.99,
    image: "/part1/pc.png",
  },
  {
    id: 2,
    name: "Success T-Shirt",
    description: "Wear your goals. Be the goal.",
    price: 29.99,
    image: "/part3/dollar.png",
  },
  {
    id: 3,
    name: "Productivity Poster",
    description: "Motivation for your workspace.",
    price: 14.99,
    image: "/part3/maintenance.png",
  },
];

export default function MillionaireStore() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Millionaire Store</h1>
      <p className="mb-8 text-center text-lg">
        Buy these products and join the path to millions!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 flex flex-col items-center"
          >
            <img src={product.image} alt={product.name} className="h-24 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="mb-2 text-gray-600">{product.description}</p>
            <span className="mb-4 font-bold">${product.price.toFixed(2)}</span>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <button
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg"
        onClick={() => setShowCart(!showCart)}
      >
        🛒 Cart ({cart.length})
      </button>
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowCart(false)}
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul className="mb-4">
                {cart.map((item, idx) => (
                  <li key={idx} className="flex justify-between mb-2">
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="font-bold text-lg mb-4">
              Total: ${total.toFixed(2)}
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
              disabled
            >
              Checkout (Coming Soon)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
