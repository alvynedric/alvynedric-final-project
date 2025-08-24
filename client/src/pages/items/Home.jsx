import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const URL = "http://localhost:3000/api";
  const [coffees, setCoffees] = useState([]);

  const getItems = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: `${URL}/items`,
      });
      console.log(result.data);
      setCoffees(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const result = confirm("Do you want to delete?");
      if (result) {
        await axios({
          method: "DELETE",
          url: `${URL}/items/delete/${id}`,
        });
      }
      getItems();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <h3 className="text-2xl font-bold text-center ">Books List</h3>
      <Link
        to="/items/create"
        className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-200"
      >
        + Create Item
      </Link>
      <hr />
      <div className="flex justify-center mt-6">
        <div className="flex justify-center mt-6">
          <div className="">
            <table className="min-w-full border border-gray-200 text-sm text-left">
              <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                <tr>
                  <th className="px-6 py-3 border-b">Name</th>
                  <th className="px-6 py-3 border-b">Category</th>
                  <th className="px-6 py-3 border-b">Price</th>
                  <th className="px-6 py-3 border-b">Stock</th>
                  <th className="px-6 py-3 border-b">Inputted By</th>
                  <th className="px-6 py-3 border-b">Type</th>
                  <th className="px-6 py-3 border-b">Brand</th>
                  <th className="px-6 py-3 border-b text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {coffees.length > 0 ? (
                  coffees.map((coffee) => {
                    const {
                      id,
                      name,
                      category,
                      price,
                      stock,
                      image,
                      User,
                      Type,
                      Brand,
                    } = coffee;
                    return (
                      <tr key={id} className="hover:bg-gray-50">
                        {/* Name with image */}
                        <td className="px-6 py-4 flex items-center gap-3">
                          <img
                            src={image}
                            alt={name}
                            className="w-10 h-10 rounded object-cover border"
                          />
                          <span>{name}</span>
                        </td>

                        <td className="px-6 py-4">{category}</td>
                        <td className="px-6 py-4">$ {price}</td>
                        <td className="px-6 py-4">{stock} pcs</td>

                        {/* New Columns */}
                        <td className="px-6 py-4">{User?.name || "-"}</td>
                        <td className="px-6 py-4">{Type?.name || "-"}</td>
                        <td className="px-6 py-4">{Brand?.name || "-"}</td>

                        <td className="px-6 py-4 text-right">
                          <Link
                            to={`/items/detail/${id}`}
                            className="px-3 py-1 text-white bg-blue-700 rounded hover:bg-blue-800"
                          >
                            Detail
                          </Link>
                          <Link
                            to={`/items/update/${id}`}
                            className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteHandler(id)}
                            className="ml-2 px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan="8"
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      There’s no data
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
