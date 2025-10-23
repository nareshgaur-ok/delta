import React, { useState } from "react";
import Vegetables from "../assets/fruitAndVegetable.jpg";
import dairy from "../assets/dairy.jpg";
import { classNames } from "primereact/utils";

const Food = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20"> 
    <h1>hi</h1>
    </div>
  );
};

// const Food = () => {
//   const categories = [
//     { name: "Fruits & Vegetables", image: Vegetables },
//     { name: "Dairy & Bakery", image: dairy },
//     { name: "Snacks & Beverages", image: "/images/snacks.jpg" },
//     { name: "Staples", image: "/images/staples.jpg" },
//   ];

//   const products = [
//     { name: "Apple", price: 120, image: Vegetables },
//     { name: "Milk (1L)", price: 55, image: dairy },
//     { name: "Bread", price: 40, image: "/images/bread.jpg" },
//     { name: "Chips", price: 25, image: "/images/chips.jpg" },
//   ];

//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">

//       {/* Hero Banner */}
//       <section className="bg-green-100 p-10 text-center">
//         <h2 className="text-4xl font-bold text-green-700">
//           Groceries delivered in{" "}
//           <span className="text-orange-500">10 minutes</span>
//         </h2>
//         <p className="mt-4 text-gray-600">
//           Fresh produce, dairy, snacks, and more at your doorstep.
//         </p>
//         <input
//           type="text"
//           placeholder="Search for products..."
//           className="mt-6 w-1/2 p-3 border rounded-lg"
//         />
//       </section>

//       {/* Categories */}
//       <section className="p-8">
//         <h3 className="text-2xl font-semibold mb-4">Shop by Categories</h3>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {categories.map((cat, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-xl shadow hover:scale-105 transition transform cursor-pointer"
//             >
//               <img
//                 src={cat.image}
//                 alt={cat.name}
//                 className="w-full h-32 object-cover rounded-t-xl"
//               />
//               <p className="text-center py-2 font-medium">{cat.name}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Featured Products */}
//       <section className="p-8">
//         <h3 className="text-2xl font-semibold mb-4">Featured Products</h3>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {products.map((prod, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-xl shadow hover:shadow-lg p-4 flex flex-col items-center"
//             >
//               <img
//                 src={prod.image}
//                 alt={prod.name}
//                 className="h-28 w-28 object-cover rounded-lg"
//               />
//               <h4 className="mt-2 font-medium">{prod.name}</h4>
//               <p className="text-green-600 font-bold">₹{prod.price}</p>
//               <button
//                 onClick={() => addToCart(prod)}
//                 className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-white text-center p-4 mt-6 shadow-inner">
//         <p className="text-gray-600">© 2025 GrocerEase. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

export default Food;
