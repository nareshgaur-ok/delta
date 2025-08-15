import { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductDetails,
  fetchSimilarProduct,
} from "../../redux/slices/productSlice";
import { addToCart } from "../../redux/slices/cartSlice";

const ProductDetails = ({ productId }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedProduct, loading, error, similarProducts } = useSelector(
    (state) => state.products
  );
  const { user, guestId } = useSelector((state) => state.auth);

  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const productFetchId = productId || id;

  // Fetch product + similar
  useEffect(() => {
    if (productFetchId) {
      dispatch(fetchProductDetails(productFetchId));
      dispatch(fetchSimilarProduct({ id: productFetchId }));
    }
  }, [dispatch, productFetchId]);

  // Default main image (first color → first image)
  useEffect(() => {
    if (selectedProduct?.colors?.length > 0) {
      const firstColor = selectedProduct.colors[0];
      if (firstColor.images?.length > 0) {
        setMainImage(firstColor.images[0].url);
        setSelectedColor(firstColor);
      }
    }
  }, [selectedProduct]);

  // Decide which images to display (based on selectedColor)
  const displayImages =
    selectedColor && selectedColor.images?.length > 0
      ? selectedColor.images
      : selectedProduct?.colors?.[0]?.images || [];

  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error("please select a size and color before adding to cart.", {
        duration: 3000,
      });
      return;
    }

    setIsButtonDisabled(true);
    dispatch(
      addToCart({
        productId: productFetchId,
        quantity,
        size: selectedSize,
        color: selectedColor.name,
        guestId,
        userId: user?._id,
      })
    )
      .then(() => toast.success("Product added to cart!", { duration: 1000 }))
      .finally(() => setIsButtonDisabled(false));
  };

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6">
      {selectedProduct && (
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
          <div className="flex flex-col md:flex-row">
            {/* Thumbnails */}
            <div className="hidden md:flex flex-col space-y-4 mr-6">
              {displayImages.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={img.altText || `Thumbnail ${index}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                    mainImage === img.url ? "border-black" : "border-gray-300"
                  }`}
                  onClick={() => setMainImage(img.url)}
                />
              ))}
            </div>

            {/* Main image */}
            <div className="md:w-1/2">
              <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
            </div>

            {/* Mobile thumbnails */}
            <div className="md:hidden flex overflow-x-auto space-x-4 mb-4">
              {displayImages.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={img.altText || `Thumbnail ${index}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                    mainImage === img.url ? "border-black" : "border-gray-300"
                  }`}
                  onClick={() => setMainImage(img.url)}
                />
              ))}
            </div>

            {/* Product Info */}
            <div className="md:w-1/2 md:ml-10">
              <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                {selectedProduct.name}
              </h1>

              <p className="text-lg line-through text-gray-600 mb-1">
                Rs {selectedProduct.price}
              </p>
              <p className="text-xl text-gray-500 mb-2">
                Rs {selectedProduct.discountPrice}
              </p>

              <p className="text-gray-600 mb-4">
                {selectedProduct.description}
              </p>

              {/* Color selection */}
              <div className="mb-4">
                <p className="text-gray-700">Color:</p>
                <div className="flex flex-wrap gap-4 mt-2">
                  {selectedProduct.colors.map((color) => (
                    <div
                      key={color.code}
                      className="flex flex-col items-center space-y-1"
                    >
                      <button
                        onClick={() => {
                          setSelectedColor(color);
                          if (color.images?.length > 0) {
                            setMainImage(color.images[0].url);
                          }
                        }}
                        className={`w-8 h-8 rounded-full border ${
                          selectedColor?.code === color.code
                            ? "border-4 border-black"
                            : "border-gray-300"
                        }`}
                        style={{
                          backgroundColor: color.code,
                          filter: "brightness(0.5)",
                        }}
                      />
                      <p className="text-xs text-center">{color.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Size selection */}
              <div className="mb-4">
                <p className="text-gray-700">Size:</p>
                <div className="flex gap-2 mt-2">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded border ${
                        selectedSize === size ? "bg-black text-white" : ""
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <p className="text-gray-700">Quantity:</p>
                <div className="flex items-center gap-4 mt-2">
                  <button
                    onClick={() => handleQuantityChange("minus")}
                    className="px-2 py-1 bg-gray-300 rounded text-lg"
                  >
                    -
                  </button>
                  <span className="text-lg">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange("plus")}
                    className="px-2 py-1 bg-gray-300 rounded text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              {selectedProduct.countInStock === 0 ? (
                <p className="text-red-500 font-semibold mb-4">Out of stock</p>
              ) : (
                <button
                  onClick={handleAddToCart}
                  disabled={isButtonDisabled}
                  className={`bg-black text-white px-2 py-2 rounded w-full mb-4 ${
                    isButtonDisabled
                      ? "cursor-not-allowed opacity-50"
                      : "hover:bg-gray-900"
                  }`}
                >
                  {isButtonDisabled ? "Adding..." : "ADD TO CART"}
                </button>
              )}

              {/* Characteristics */}
              <div className="mt-10 text-gray-700">
                <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
                <table className="w-full text-left text-sm text-gray-600">
                  <tbody>
                    <tr>
                      <td className="py-1">Brand</td>
                      <td className="py-1">{selectedProduct.brand}</td>
                    </tr>
                    <tr>
                      <td className="py-1">Material</td>
                      <td className="py-1">{selectedProduct.material}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* You may also like */}
          <div className="mt-20">
            <h2 className="text-2xl text-center font-medium mb-4">
              You May Also Like
            </h2>
            <ProductGrid
              products={similarProducts}
              loading={loading}
              error={error}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
