import React, { useEffect, useState } from 'react'
import { useAuth } from '../common/AuthContext';
import authAxios from '../../utils/authAxios';
import { apiUrl } from '../../utils/Constants';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

export default function ItemPage() {
    const { userRole } = useAuth();
    const [user, setUser] = useState({});
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    const getItem = async () => {
        try {
            const response = await authAxios.get(`${apiUrl}/item/get-one/${id}`);
            setUser(response.data);
            console.log(user)
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 404) {
                toast.error('user profile not found.');
            } else {
                toast.error(error.response?.data?.message || 'An error occurred');
            }
        }
    };

    const addToCart = async (itemId) => {
        try {
            const result = await authAxios.post(`${apiUrl}/cart/${itemId}`);
            if (result) {
                toast.success("Added to cart");
                getFav();
            }
        }
        catch (error) {
            toast.error(error.response.data.message);
        }
    };

    useEffect(() => {
        getItem();
    }, []);

    return (
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <div class="flex flex-col md:flex-row -mx-4">
                <div class="md:flex-1 px-4">
                    <div x-data="{ image: 1 }" x-cloak>
                        <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                            <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                                <img src={user.img} alt="Product Image" className='h-full' />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:flex-1 px-4">
                    <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{user.itemName}</h2>
                    <p class="text-gray-500 text-sm">By <a href="#" class="text-indigo-600 hover:underline">{user.category}</a></p>

                    <div class="flex items-center space-x-4 my-4">
                        <div>
                            <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                                <span class="text-indigo-400 mr-1 mt-1">Rs. </span>
                                <span class="font-bold text-indigo-600 text-3xl">{user.price}.00</span>
                            </div>
                        </div>
                        <div class="flex-1">
                            <p class="text-green-500 text-xl font-semibold">Save 12%</p>
                            <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                        </div>
                    </div>

                    {/* <p class="text-gray-500">Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.</p> */}

                    {userRole === 'customer' && (
                        <div class="flex py-4 space-x-4">
                            <button type="button" class="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                            onClick={() => {addToCart(id)}}>
                                Add to Cart
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

