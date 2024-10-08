import React from "react";
import { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function Home() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const { search } = useOutletContext();

  useEffect(() => {
    async function fetchdata() {
      const Api = await fetch("https://fakestoreapi.com/products");
      const response = await Api.json();
      setProducts(response);
    }

    fetchdata();
  }, []);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setAllProducts(saved);
  }, []);

  const filtered = products.filter((data) =>
    data.title.toLowerCase().includes(search.toLowerCase())
    ||
    data.price >= search
  );

  return (
    <>
      <div className="w-full p-2 flex flex-wrap gap-4 ">
        {filtered && filtered.length > 0 ? (
          filtered.map((product) => {
            return (
              <div
                key={product.id}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <img className="rounded-t-lg" src={product.image} alt="" />
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
                  <p className="mb-3 font-normal text-orange-700 dark:text-gray-400">
                   ${product.price}
                  </p>
                  {
                    <Link
                      to={`/product/${product.id}`}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      {allProducts.find((p) => p.id === product.id) ? (
                        <span>Added to Cart</span>
                      ) : (
                        <span>Add to Cart</span>
                      )}

                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
                  }
                </div>
              </div>
            );
          })
        ) : (
          <h2 className="text-3xl">No Products Found</h2>
        )}
      </div>
    </>
  );
}

export default Home;
