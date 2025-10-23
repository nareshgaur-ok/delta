import { Link } from "react-router-dom"; 
import heroImg from "../../assets/delta1.jpg";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Air Compressor"
        className="w-full h-auto md:h-[600px] lg:h-[750px] object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center text-center p-6">
        {/* <h1 className="text-white text-xl md:text-5xl font-bold mb-4 max-w-3xl mt-8">
          Reliable & Efficient Air <br/> Compressors for Your Business
        </h1> */}
        {/* <p className="text-white text-lg md:text-xl mb-6 max-w-xl">
          Quality products with exceptional service to keep your operations running smoothly.
        </p> */}
        {/* <Link
          to="/collections/all"
          className="bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
        >
          Shop Now
        </Link> */}
        <div className="mt-8 text-white text-lg md:text-xl">
          <p>Contact: <span className="font-semibold">Naresh Gaur</span></p>
          <p>Phone: <a href="tel:+916376524440" className="underline hover:text-gray-300">+91 63765 24440</a></p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
