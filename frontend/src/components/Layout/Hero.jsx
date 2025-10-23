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
      <div className="absolute inset-24 right-2 bottom-2 bg-black bg-opacity-0 lg:inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center text-center p-2">
        <h1 className="text-white text-xl md:text-5xl font-bold mb-4 max-w-3xl mt-2">
          Reliable & Efficient Air <br />{" "}
          <span className="hidden md:block">
            {" "}
            Compressors for Your Business
          </span>
        </h1>
        <p className="hidden md:block text-white text-lg md:text-xl mb-6 max-w-xl">
          Quality products with exceptional service to keep your operations
          running smoothly.
        </p>
        <Link
          to="/contactUs"
          className="bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
        >
          Contact Us
        </Link>
        <div className="mt-8 text-white text-lg md:text-xl">
          <p>
            Contact: <span className="font-semibold">Naresh Gaur</span>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+916376524440"
              className="underline hover:text-gray-300"
            >
              +91 63765 24440
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
