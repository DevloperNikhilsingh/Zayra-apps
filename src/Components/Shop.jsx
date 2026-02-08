import { useState } from "react";
import { clothData } from "../data.js/ShopData";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ITEMS_PER_PAGE = 12;

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCart } = useCart();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredclothData, setFilteredclothData] = useState([]);

  const totalPages = Math.ceil(clothData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleProducts = clothData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // ✅ LIVE SEARCH
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setCurrentPage(1);

    if (value.trim() === "") {
      setFilteredclothData([]);
      return;
    }

    const filtered = clothData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredclothData(filtered);
  };

  // ✅ EXACT SEARCH (icon click / enter)
  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setFilteredclothData([]);
      return;
    }

    const result = clothData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredclothData(result);
    setCurrentPage(1);
  };

  // ✅ ENTER KEY SUPPORT (no reset)
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const productsToShow =
    searchTerm.trim() !== ""
      ? filteredclothData
      : visibleProducts;

  return (
    <>
      <div className='w-full h-[150px] bg-shopbanner6 bg-cover p-4 flex flex-col justify-center items-center gap-1'>
        <h1 className='text-center text-3xl text-black font-bold font-heading'>#stayhome</h1>
        <p className='text-center text-[14px] font-bold font-body'>
          Save more With Coupen & up to 70% off !
        </p>
      </div>

      <div className="search-box w-full shadow-md p-4 flex items-center justify-center rounded">
        <input
          type="text"
          placeholder="Search product..."
          className="w-[300px] p-2 border-0 text-[16px] placeholder:text-black shadow-md outline-none rounded-tl-2xl rounded-bl-2xl"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        <button
          onClick={handleSearch}
          className="p-2 flex items-center justify-center shadow-md rounded-br-2xl rounded-tr-2xl active:bg-gray-200 duration-200"
        >
          🔍
        </button>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {productsToShow.map((item) => (
          <div
            key={item.id}
            className="border p-2 rounded shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            data-aos="fade-up"
          >
            <NavLink to={`/product/${item.id}`}>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[250px] bg-gray-300 rounded-lg object-cover transition-transform duration-300 hover:scale-105"
              />
            </NavLink>

            <p className="text-gray-400 text-[12px] mt-2 font-body">Zayra</p>

            <p className="text-[16px] font-semibold font-heading">{item.name}</p>

            <div className="flex">⭐ ⭐ ⭐ ⭐</div>

            <div className="w-full flex justify-between mt-2 items-center">
              <p className="font-body">₹{item.price}</p>
              <button onClick={() => addToCart(item)}>
                <img
                  src="cart-large-minimalistic-svgrepo-com.svg"
                  alt=""
                  className="w-8 p-1 cursor-pointer active:shadow-lg active:bg-gray-300 hover:shadow-lg hover:bg-gray-400 transition-all duration-300 rounded-lg"
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      {searchTerm.trim() === "" && (
        <div className="flex justify-center items-center gap-2 mt-10 mb-5">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 border rounded ${
                  currentPage === page
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Shop;
