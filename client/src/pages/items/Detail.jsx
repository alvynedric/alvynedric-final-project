import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const URL = "http://localhost:3000/api"; // sesuaikan dengan backend

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get(`${URL}/items/details/${id}`);
        setItem(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  }

  if (!item) {
    return <p className="text-center mt-10 text-red-500">Item not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
      >
        ← Back
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="flex-shrink-0 md:w-1/3">
          <img
            src={item.imageUrl || "https://via.placeholder.com/300"}
            alt={item.name}
            className="w-full h-64 object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Details */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{item.name}</h2>
          <p className="text-gray-600">{item.category}</p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
              <p className="text-xs text-gray-500">Price</p>
              <p className="text-lg font-semibold">${item.price}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
              <p className="text-xs text-gray-500">Stock</p>
              <p className="text-lg font-semibold">{item.stock}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
              <p className="text-xs text-gray-500">Type ID</p>
              <p className="text-lg font-semibold">{item.TypeId}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
              <p className="text-xs text-gray-500">Brand ID</p>
              <p className="text-lg font-semibold">{item.BrandId}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
