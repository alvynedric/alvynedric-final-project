import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    imageUrl: "",
    TypeId: "", // foreign key untuk Type
    BrandId: "", // foreign key untuk Brand
  });
  const navigate = useNavigate();
  const URL = "http://localhost:3000/api";

  // daftar pilihan type & brand (sementara hardcode)
  const typeOptions = [
    { id: 1, name: "Novel" },
    { id: 2, name: "Comic" },
    { id: 3, name: "Fairytale" },
  ];

  const brandOptions = [
    { id: 1, name: "Gramedia" },
    { id: 2, name: "Mizan" },
    { id: 3, name: "Bentang Pustaka" },
  ];

  // handle perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createItem = async (data) => {
    try {
      const result = await axios({
        method: "POST",
        url: `${URL}/items/add`,
        data,
      });
      console.log(result);
      navigate("/items");
    } catch (err) {
      console.log(err);
    }
  };
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    const tempObj = {
      ...formData,
      price: +formData.price,
      stock: +formData.stock,
      TypeId: +formData.TypeId,
      BrandId: +formData.BrandId,
    };
    // console.log(tempObj);
    createItem(tempObj);
    // contoh kirim ke backend:
    // axios.post("/api/items", formData)
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h3 className="text-2xl font-bold text-center mb-6">Create Item</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Item name"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Category"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price ($)
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="0.00"
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Stock
          </label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="0"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Type (pakai TypeId) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Type
          </label>
          <select
            name="TypeId"
            value={formData.TypeId}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="">Select Type</option>
            {typeOptions.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        {/* Brand (pakai BrandId) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Brand
          </label>
          <select
            name="BrandId"
            value={formData.BrandId}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="">Select Brand</option>
            {brandOptions.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Create Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
