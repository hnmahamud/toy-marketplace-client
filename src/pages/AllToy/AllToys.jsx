import { useEffect, useState } from "react";
import allToysPic from "../../assets/photos/allToys.jpg";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";
import AllToysCard from "./AllToysCard";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const [allToys, setAllToys] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const { totalToys } = useLoaderData();
  const totalPages = Math.ceil(totalToys / itemsPerPage);

  const pageNumbers = [...Array(totalPages).keys()];

  const option = [1, 5, 10, 20, 30];
  const handleChange = (event) => {
    setItemsPerPage(event.target.value);
    setCurrentPage(0);
  };

  useEffect(() => {
    fetch(
      `http://localhost:5000/toys?currentPage=${currentPage}&itemsPerPage=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setAllToys(data))
      .catch((error) => console.log(error));
  }, [currentPage, itemsPerPage]);

  if (!allToys) {
    return <LoadingSpinner fullScreen={false}></LoadingSpinner>;
  }

  return (
    <div className="my-8">
      <h1 className="text-center text-2xl text-gray-500 font-extrabold mb-8">
        All Toys
      </h1>
      {allToys.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 md:justify-center md:gap-4">
          <div className="col-span-2">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Seller Name</th>
                    <th>Toy Name</th>
                    <th>Sub-category</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {allToys.length > 0 &&
                    allToys.map((toy) => (
                      <AllToysCard key={toy._id} toy={toy}></AllToysCard>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="text-center space-x-2 my-8">
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => setCurrentPage(number)}
                  type="button"
                  className={`${
                    number === currentPage ? "bg-blue-700 text-white" : ""
                  } border border-blue-700 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center`}
                >
                  {number + 1}
                </button>
              ))}
              <select
                className="border border-blue-700 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center"
                onChange={handleChange}
                value={itemsPerPage}
              >
                {option.map((op, index) => (
                  <option key={index}>{op}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-span-1">
            <img className="rounded-md" src={allToysPic} alt="" />
          </div>
        </div>
      ) : (
        <div className="h-[calc(100vh-138px)]">
          <div className="alert alert-info shadow-md rounded-md text-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>No toys available.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllToys;
