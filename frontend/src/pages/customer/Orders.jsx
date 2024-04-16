import { Cancel, Delete } from '@material-ui/icons'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../../utils/Constants";
import authAxios from "../../utils/authAxios";
import { toast } from "react-toastify";

export default function Orders() {

  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const res = await authAxios.get(`${apiUrl}/order`);
      setOrders(res.data);
      console.log(orders) // Directly set favorites to the array of favorites
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 404) {
        toast.error('Orders is Empty');
      } else {
        toast.error(error.response?.data?.message || 'An error occurred');
      }
    }
  };

  const removeOrder = async (itemId) => {
    try {
        const result = await authAxios.delete(`${apiUrl}/order/${itemId}`);
        if (result) {
          toast.success("Removed");
          getOrders();
        }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div class="bg-white p-8 rounded-md w-full">
      <div class=" flex items-center justify-between pb-6">
        <div>
          <h2 class="text-gray-600 font-semibold">Products Oder</h2>
          <span class="text-xs">All products item</span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex bg-gray-50 items-center p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd" />
            </svg>
            <input class="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..." />
          </div>
        </div>
      </div>
      <div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Id
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Date
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Price
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Driver
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              {orders.map((orders, index) => {
                return (
                  <tbody>
                    <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex items-center">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {orders._id}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {new Date(orders.createdAt).toLocaleDateString()}
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {orders.price}
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {orders.driverId ? `${orders.driverId.firstName} ${orders.driverId.lastName}` : 'N/A'}
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span
                          class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span aria-hidden
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                          <span class="relative">{orders.status}</span>
                        </span>
                      </td>
                      
                    {orders.status !== "completed" && (
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span
                          class="relative inline-block px-3 py-1 font-semibold text-red-600 leading-tight">
                          <span aria-hidden
                            class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                          <span class="relative" onClick={() => {removeOrder(orders._id)}}> <Delete fontSize='small'/></span>
                        </span>
                      </td>
                    )}
                    </tr>
                  </tbody>
                )
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
