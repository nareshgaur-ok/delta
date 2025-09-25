import React, { useState } from "react";
import axios from "axios";
import { ColorPicker } from "primereact/colorpicker";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    discountPrice: 0,
    countInStock: 0,
    sku: 0,
    category: "",
    brand: "",
    sizes: [],
    colors: [], // [{name, code, images:[{url, altText}]}]
    collection: "",
    material: "",
    gender: "Unisex",
    isFeatured: false,
    isPublished: false,
    tags: [],
  });

  const [uploading, setUploading] = useState(false);

  /** ----------------- Handlers ----------------- **/
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setProductData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setProductData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSizesChange = (e) => {
    setProductData((prev) => ({
      ...prev,
      sizes: e.target.value.split(",").map((s) => s.trim()),
    }));
  };

  const handleTagsChange = (e) => {
    setProductData((prev) => ({
      ...prev,
      tags: e.target.value.split(",").map((t) => t.trim()),
    }));
  };

  /** ----------------- Colors ----------------- **/
  const addColor = () => {
    setProductData((prev) => ({
      ...prev,
      colors: [...prev.colors, { name: "", code: "#E44C5F", images: [] }],
    }));
  };

  const removeColor = (index) => {
    setProductData((prev) => ({
      ...prev,
      colors: prev.colors.filter((_, i) => i !== index),
    }));
  };

  const handleColorChange = (index, field, value) => {
    const updatedColors = productData.colors.map((color, i) =>
      i === index ? { ...color, [field]: value } : color
    );
    // console.log("f74",updatedColors)
    setProductData((prev) => ({ ...prev, colors: updatedColors }));
  };

  const handleColorImageUpload = async (e, colorIndex) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      setUploading(true);
      const { data } = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/upload`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      
        // console.log("97adp",data);
      const updatedColors = productData.colors.map((color, i) => {
        if (i === colorIndex) {
          return {
            ...color,
            images: [...color.images, { url: data.imageUrl, altText: "" }],
          };
          
        }
        
        // console.log("99adp",color);
        return color;
      });
      setProductData((prev) => ({ ...prev, colors: updatedColors }));
      setUploading(false);
    } catch (err) {
      console.error(err);
      setUploading(false);
    }
  };

  const removeColorImage = (colorIndex, imgIndex) => {
    const updatedColors = [...productData.colors];
    updatedColors[colorIndex].images = updatedColors[colorIndex].images.filter(
      (_, i) => i !== imgIndex
    );
    setProductData((prev) => ({ ...prev, colors: updatedColors }));
  };

  /** ----------------- Product Images ----------------- **/
  // const handleImageUpload = async (e) => {
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append("image", file);

  //   try {
  //     setUploading(true);
  //     const { data } = await axios.post(
  //       `${import.meta.env.REACT_APP_BACKEND_URL}/api/admin/products`,
  //       formData,
  //       { headers: { "Content-Type": "multipart/form-data" } }
  //     );
  //     setProductData((prev) => ({
  //       ...prev,
  //       images: [...prev.images, { url: data.imageUrl, altText: "" }],
  //     }));
  //     setUploading(false);
  //   } catch (err) {
  //     console.error(err);
  //     setUploading(false);
  //   }
  // };

  // const removeImage = (imgIndex) => {
  //   const updatedImages = productData.images.filter((_, i) => i !== imgIndex);
  //   setProductData((prev) => ({ ...prev, images: updatedImages }));
  // };

  /** ----------------- Submit ----------------- **/
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...productData,
        price: Number(productData.price),
        discountPrice: Number(productData.discountPrice),
        countInStock: Number(productData.countInStock),
        sku: Number(productData.sku),
      };

      
      const response = await axios.post(
       `${import.meta.env.VITE_BACKEND_URL}/api/admin/addProducts`,
        payload,
         {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        }}
      );

      alert("Product added successfully!");
      setProductData({
        name: "",
        description: "",
        price: 0,
        discountPrice: 0,
        countInStock: 0,
        sku: 0,
        category: "",
        brand: "",
        sizes: [],
        colors: [],
        collection: "",
        material: "",
        gender: "Unisex",
        isFeatured: false,
        isPublished: false,
        tags: [],
      });
    } catch (err) {
      console.error("Submit error:", err.response?.data || err.message);
      alert("Error adding product: " + (err.response?.data?.message || err.message));
    }
  };
  

  /** ----------------- Render ----------------- **/
  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6">Add Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Name & Description */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows={4}
            required
          />
        </div>

        {/* Price, Discount, Stock, SKU */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-semibold mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Discount Price</label>
            <input
              type="number"
              name="discountPrice"
              value={productData.discountPrice}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-semibold mb-1">Count in Stock</label>
            <input
              type="number"
              name="countInStock"
              value={productData.countInStock}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">SKU</label>
            <input
              type="number"
              name="sku"
              value={productData.sku}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        {/* Category, Brand, Collection, Material */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={productData.category}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Brand</label>
            <input
              type="text"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-semibold mb-1">Collection</label>
            <input
              type="text"
              name="collection"
              value={productData.collection}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Material</label>
            <input
              type="text"
              name="material"
              value={productData.material}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Gender</label>
          <select
            name="gender"
            value={productData.gender}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Unisex">Unisex</option>
          </select>
        </div>

        {/* Sizes */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Sizes (comma separated)</label>
          <input
            type="text"
            value={productData.sizes.join(",")}
            onChange={handleSizesChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Tags */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Tags (comma separated)</label>
          <input
            type="text"
            value={productData.tags.join(",")}
            onChange={handleTagsChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Featured & Published */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="isFeatured"
                checked={productData.isFeatured}
                onChange={handleChange}
                className="mr-2"
              />
              Featured
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="isPublished"
                checked={productData.isPublished}
                onChange={handleChange}
                className="mr-2"
              />
              Published
            </label>
          </div>
        </div>

        {/* Colors */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Colors and Image</h3>
          {productData.colors.map((color, idx) => (
            <div key={idx} className="border p-4 mb-2 rounded">
              <label className="block font-semibold mb-1">Color Name</label>
              <input
                type="text"
                placeholder="Color Name"
                value={color.name}
                onChange={(e) =>
                  handleColorChange(idx, "name", e.target.value)
                }
                className="w-full border p-2 rounded mb-2"
              />

              <label className="block font-semibold mb-1">Color Code</label>
              <ColorPicker
                value={color.code}
                onChange={(e) => handleColorChange(idx, "code", e.value)}
                className="mb-2 w-full"
              />

              <label className="block font-semibold mb-1">Upload Color Images</label>
              <input
                type="file"
                onChange={(e) => handleColorImageUpload(e, idx)}
                className="mb-2"
              />
              {uploading && <p>Uploading...</p>}

              <div className="flex gap-2 mt-2">
                {color.images.map((img, i) => (
                  <div key={i} className="relative">
                    <img
                      src={img.url}
                      alt={img.altText || "Color"}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() => removeColorImage(idx, i)}
                      className="absolute top-0 right-0 bg-red-500 text-white px-1 text-xs"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => removeColor(idx)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove Color
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addColor}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            + Add Color & Image
          </button>
        </div>


        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
