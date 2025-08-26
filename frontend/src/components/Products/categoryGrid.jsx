import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import bottomMen from "../../assets/bottomMen.webp";
import collarTShirt from "../../assets/collarTShirt.webp";
import jacketMen from "../../assets/jacketMen.webp";
import t_shirt_man from "../../assets/t_shirt_man.webp";
import airForceCombat from "../../assets/airForceCombat.webp";
import FullSleeveMen from "../../assets/FullSleeveMen.webp";
import traksuits from "../../assets/traksuits.webp";
import WomenTights from "../../assets/WomanTights.webp";
import accessories from "../../assets/accessories.webp";
import { useNavigate } from "react-router-dom";
import {
  setFilters,
  fetchProductsByFilters,
} from "../../redux/slices/productSlice";

const CategoryGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log("search Term:", searchTerm);
    dispatch(setFilters({ search: searchTerm }));
    dispatch(fetchProductsByFilters({ search: searchTerm }));
    navigate(`/collections/all/?search=${searchTerm}`);
  };

  const categories = [
    {
      name: "Men",
      image: t_shirt_man,
      categoryAddress: "T shirt",
    },
    // {
    //   name: "Full Sleeve",
    //   image: FullSleeveMen,
    //   categoryAddress: "Round Neck",
    // },
    {
      name: "T-Shirt",
      image: collarTShirt,
      categoryAddress: "Collar T-Shirt",
    },
    // {
    //   name: "Bottom Wear Men",
    //   image:  bottomMen ,
    //   categoryAddress: "Bottom Wear Men",
    // },
    // {
    //   name: "Women",
    //   image: "https://picsum.photos/500/500?random=5",
    //   categoryAddress: "Women",
    // },
    {
      name: "Jackets",
      image: jacketMen,
      categoryAddress: "jackets",
    },
    {
      name: "Women Bottom",
      image: WomenTights,
      categoryAddress: "Women Bottom",
    },
    {
      name: "Shoes",
      image: airForceCombat,
      categoryAddress: "Shoes",
    },
    {
      name: "Accessories",
      image: accessories,
      categoryAddress: "Accessories",
    },
    {
      name: "Tracksuits",
      image: traksuits,
      categoryAddress: "Tracksuits",
    },
  ];

  
return (
  <div className="max-w-screen-xl mx-auto px-4 py-6">
    {/* Search Input */}
    <form onSubmit={handleSearch} className="mb-8 sticky top-0 bg-white z-10">
      <div className="flex items-center shadow-sm border rounded-lg overflow-hidden">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search categories..."
          className="w-full p-3 text-gray-700 focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-3 bg-black text-white font-medium hover:bg-gray-800 transition"
        >
          Search
        </button>
      </div>
    </form>

    {/* Categories */}
    <div className="overflow-x-auto lg:overflow-visible">
      <div className="flex space-x-6 lg:grid lg:grid-cols-5 lg:gap-8">
        {categories.map((cat, idx) => (
          <Link
            key={idx}
            to={`/collections/all`}
            className="flex flex-col items-center flex-shrink-0 group"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden border border-gray-200 shadow-md transform transition duration-300 group-hover:scale-105 group-hover:shadow-lg flex items-center justify-center">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="mt-3 text-sm font-medium text-gray-700 group-hover:text-black group-hover:font-semibold transition text-center">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  </div>
);


};

export default CategoryGrid;
