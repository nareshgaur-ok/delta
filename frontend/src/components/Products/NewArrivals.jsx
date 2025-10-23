import oilLubricatedImg from "../../assets/delta1.jpg";
import portableImg from "../../assets/delta2.png";
import oilFreeImg from "../../assets/delta3.png";
import accessoriesImg from "../../assets/delta1.jpg";
import heatRecoveryImg from "../../assets/delta2.png";
import railwayImg from "../../assets/delta3.png";
import medicalImg from "../../assets/delta1.jpg";
import vacuumImg from "../../assets/delta2.png";

import logoFesto from "../../assets/delta3.png";
import logoCraftman from "../../assets/delta1.jpg";
import logoTimber from "../../assets/delta2.png";

const ProductSection = ({ title, description, image, link }) => (
  <section className="flex flex-col md:flex-row items-center my-12 md:my-20 gap-8 max-w-7xl mx-auto px-4">
    <div className="md:w-1/2">
      <img
        src={image}
        alt={title}
        className="rounded-lg shadow-lg w-full object-cover"
      />
    </div>
    <div className="md:w-1/2 space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{description}</p>
      <a
        href={link}
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
      >
        VIEW PRODUCTS
      </a>
    </div>
  </section>
);

const ProductSection1 = ({ title, description, image, link }) => (
  <section className="flex flex-col md:flex-row items-center my-12 md:my-20 gap-8 max-w-7xl mx-auto px-4">
    <div className="md:w-1/2 space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{description}</p>
      <a
        href={link}
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
      >
        VIEW PRODUCTS
      </a>
    </div>
    <div className="md:w-1/2">
      <img
        src={image}
        alt={title}
        className="rounded-lg shadow-lg w-full object-cover"
      />
    </div>
  </section>
);

const HomePage = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Product Sections */}
      <ProductSection
        title="OIL LUBRICATED COMPRESSORS"
        description="Oil lubricated compressors from ELGi are the backbone of varied industrial applications. The oil lubricated range of compressors offer cost-effective, long-lasting compressed air solutions suitable for light to heavy duty industrial applications."
        image={oilLubricatedImg}
        link="/contactUs"
      />
      <ProductSection1
        title="PORTABLE COMPRESSORS"
        description="ELGi’s trolley and skid compressors support compressed air requirements in rugged environments and remote areas with utmost reliability. ELGi's portable range has evolved to meet the changing demands of the construction, mining, oil & gas and water well sectors. They are designed to offer high efficiency, productivity and ease of use."
        image={portableImg}
        link="/collections/portable"
      />
<div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
  <div className="md:w-1/2">
    <ProductSection
      title="MEDICAL AIR COMPRESSORS & VACUUM PUMPS"
      description="Pattons Medical sells medical scroll compressors, vacuum pumps, driers and other medical gas equipment. For more information you can visit the website."
      image={medicalImg}
      link="/collections/medical"
    />
  </div>

  <div className="md:w-1/2">
    <ProductSection1
      title="VACUUM PUMPS"
      description="In today’s advanced industrial landscape, vacuum systems are indispensable, supporting a vast range of applications that demand precision, cleanliness, and control. ELGi’s vacuum solutions are engineered to bring powerful, reliable performance to facilities worldwide, ensuring that critical applications can operate seamlessly and efficiently."
      image={vacuumImg}
      link="/collections/vacuum"
    />
  </div>
</div>

      <ProductSection
        title="OIL FREE COMPRESSORS"
        description="ELGi designs and manufactures proprietary oil free air ends. Each oil free compressor from ELGi is engineered to deliver maximum uptime and reliability. With superior safety norms, the oil free compressors guarantee low energy losses and low air outlet temperatures while ensuring high reliability."
        image={oilFreeImg}
        link="/collections/oil-free"
      />
      <ProductSection1
        title="AIR ACCESSORIES"
        description="For enhanced reliability and energy savings, compressed air must be completely clean and dry. ELGi offers a wide range of pneumatic downstream and upstream accessories that remove inherent impurities such as water, dirt or lubricating oil."
        image={accessoriesImg}
        link="/collections/accessories"
      />
      <ProductSection
        title="HEAT RECOVERY SYSTEMS"
        description="The ELGi heat recovery system (HRS) helps companies recover approximately 96% of heat generated during the compression process. The heat can then be utilised for warming the ambient air or water. It eliminates the need for additional heating equipment, thereby becoming an energy saving device and contributing to lower CO2 emissions."
        image={heatRecoveryImg}
        link="/collections/heat-recovery"
      />
      <ProductSection1
        title="RAILWAY COMPRESSORS"
        description="ELGi has been customising compressors for the Indian Railways for more than three decades, besides providing air solutions for electrical and diesel locomotives, auxiliary compressors, wind screen wipers and water raising apparatus."
        image={railwayImg}
        link="/collections/railway"
      />

      {/* Global Footprint */}
      <section className="bg-white py-12 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">FOLLOW OUR GLOBAL FOOTPRINT</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800 text-lg font-semibold">
          <div>
            <p>60+ YEARS OF CUSTOMER CENTRIC INNOVATION</p>
          </div>
          <div>
            <p>2+ MILLION SUCCESSFUL INSTALLATIONS WORLDWIDE</p>
          </div>
          <div>
            <p>120+ COUNTRIES AND COUNTING</p>
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="bg-gray-100 py-12 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          BRANDS THAT HAVE TRUSTED US OVER THE YEARS
        </h2>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          <img src={logoFesto} alt="Festo" className="h-16 object-contain" />
          <img
            src={logoCraftman}
            alt="Craftman"
            className="h-16 object-contain"
          />
          <img src={logoTimber} alt="Timber" className="h-16 object-contain" />
        </div>
      </section>

      {/* News */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">NEWS & EVENTS</h2>
        <ul className="space-y-4 text-gray-700 font-medium">
          <li>
            Efficient Manufacturing: What to Look for in Next-Gen Air
            Compressors: A Guide for Future-Ready Industries
          </li>
          <li>
            Machine Insider: How DELTA Neuron 4 Controller and Air~Alert Are
            Transforming Compressor Performance
          </li>
          <li>
            B2B Purchases: Smarter, faster, greener compressed air systems
          </li>
          <li>
            Textile Insights: We’re Innovating To Bring DELTA Reliability,
            Efficiency And Smarter Solutions To Textile Customers
          </li>
          <li>
            Food & Beverage News: Driving hygiene & efficiency in food
            processing with compressed air
          </li>
          <li>
            Steel & Metallurgy: Powering Productivity: Importance of Air
            Compressors in the Iron and Steel Industry
          </li>
        </ul>
        <div className="mt-6 text-blue-600 font-semibold cursor-pointer hover:underline">
          VIEW ALL NEWS ARTICLES
        </div>
      </section>

      {/* CSR Section */}
      <section className="bg-blue-50 py-12 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          DELTA CSR - SPREADING SMILES AROUND US
        </h2>
        <p className="max-w-3xl mx-auto text-gray-800 leading-relaxed mb-6">
          At DELTA, we aim to give back to the community through campaigns and
          programmes designed to empower, uplift and better society. DELTA has
          undertaken several projects in the fields of education, vocational
          training and community health advancement.
        </p>
        <a
          href="/csr"
          className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          READ MORE
        </a>
      </section>
    </div>
  );
};

export default HomePage;
