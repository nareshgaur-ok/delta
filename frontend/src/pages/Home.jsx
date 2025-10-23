import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import { useDispatch } from "react-redux"; 
import { fetchProductsByFilters } from "../redux/slices/productSlice";                       
import axios from "axios";
import { useEffect} from "react";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //fetch product from specific collection
    dispatch(
      fetchProductsByFilters({
        gender: "Men",
        category: "Top Wear",
        limit: 8,
      })
    );
    // fetch best seller product
    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );
        // console.log("hm",response.data)

        setBestSellerProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBestSeller();
  }, [dispatch]);

  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
    </div>
  );
};

export default Home;
