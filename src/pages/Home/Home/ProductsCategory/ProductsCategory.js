import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductsCategory = () => {
    const [categories, setCategories] = useState([]);
    //   console.log(categories);

    useEffect(() => {
        fetch(" https://resale-furniture-server-abu-saleh-rony.vercel.app/category", {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);
    return (
        <div className="w-full mx-auto text-center p-3 my-3">
            {/* <h4>All Category: {categories.length}</h4> */}
            <button

                className="relative bg-purple-700 text-white px-8 py-4 ml-4 overflow-hidden font-semibold rounded dark:bg-gray-100 dark:text-gray-900"
            >Products Category
            </button>
            <div className="flex justify-around items-center">
                {categories?.map((category) => (
                    <div key={category._id}>
                        <ul className="menu rounded-box my-1">
                            <li className="hover-bordered">
                                <Link to={`/category/${category.c_id}`}>
                                    <img className="w-[150px]" src={category.logo} alt="" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsCategory;
