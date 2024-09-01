import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Product() {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from API
    async function fetchData() {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    }

    fetchData();

    // Load previously saved products from local storage
    const savedProducts = JSON.parse(localStorage.getItem("cart")) || [];
    setAllProducts(savedProducts);
  }, [id]);

  // Add product to the cart and save to local storage
  useEffect(() => {
    if (product.id) {
      const updatedProducts = [...allProducts];
      if (!updatedProducts.find((p) => p.id === product.id)) {
        updatedProducts.push(product);
        setAllProducts(updatedProducts);
        localStorage.setItem("cart", JSON.stringify(updatedProducts));
      }
    }
  }, [product, allProducts]);

  return (
    <>
      <div className="w-full p-4 my-2 relative">
        
        <h4>
          <span className="text-3xl absolute right-10 top-0">
            Product {allProducts.length}
          </span>
          <svg
            className="absolute right-0 top-0 w-10 h-10 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
            />
          </svg>
        </h4>
      </div>

      <div className="w-full p-2 flex flex-wrap gap-4 ">
        {
          allProducts.map((product) => {
           return(
            <div
            key={product.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg w-96 h-96"
                src={product.image}
                alt={product.title}
              />
            </a>

            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {product.description}
              </p>
              <Link
                to={`/`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Go Back
                <svg
                  className="rtl:rotate-360 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
           )
          })
          
        }
      </div>
    </>
  );
}

export default Product;
