import { Link } from "react-router-dom";
import delta3 from "../../assets/delta3.png";
import delta2 from "../../assets/delta2.png";

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container ms-auto flex flex-col md:flex-row gap-8">
        {/* women collection */}
        <div className="relative flex-1">
          <Link
            to="/"
            className="text-gray-900 underline"
          >
            <img
              src={delta3}
              alt="Women-collection"
              className="w-full h-[700px] object-fill"
            />
          </Link>
          <div className="absolute bottom-0 left-8 bg-white bg-opacity-90 py-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Air Compressor type 1
            </h2>
            <Link
              to="/contactUs"
              className="text-gray-900 underline"
            >
              Call Us
            </Link>
          </div>
        </div>
        {/* men's collection */}
        <div className="relative flex-1">
          <Link to="/contactUs">
            <img
              src={delta2}
              alt="Men-collection"
              className="w-full h-[700px] object-fill"
            />
          </Link>
          <div className="absolute bottom-0 left-8 bg-white bg-opacity-90 py-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Air Compressor type 2
            </h2>
            <Link
              to="/contactUs"
              className="text-gray-900 underline"
            >
              Call Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
