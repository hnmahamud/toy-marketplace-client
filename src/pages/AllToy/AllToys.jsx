import { useEffect, useRef, useState } from "react";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";
import AllToysCard from "./AllToysCard";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Hero from "../Shared/Hero/Hero";

const AllToys = () => {
  useTitle("All Toys");
  const [allToys, setAllToys] = useState(false);
  const inputRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const { totalToysNumber } = useLoaderData();
  const totalPages = Math.ceil(totalToysNumber / itemsPerPage);

  const pageNumbers = [...Array(totalPages).keys()];

  const option = [1, 5, 10, 20, 30];
  const handleChange = (event) => {
    setItemsPerPage(event.target.value);
    setCurrentPage(0);
    inputRef.current.value = "";
  };

  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-azure.vercel.app/toys?currentPage=${currentPage}&itemsPerPage=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setAllToys(data))
      .catch((error) => console.log(error));
  }, [currentPage, itemsPerPage]);

  if (!allToys) {
    return <LoadingSpinner fullScreen={false}></LoadingSpinner>;
  }

  const handleFind = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchText = form.searchText.value;
    if (searchText === "") {
      setItemsPerPage(20);
    }
    fetch(
      `https://toy-marketplace-server-azure.vercel.app/toys-search?searchText=${searchText}`
    )
      .then((res) => res.json())
      .then((data) => setAllToys(data))
      .catch((error) => console.log(error));
  };

  const changeHandleFind = (event) => {
    const searchText = event.target.value;
    if (searchText === "") {
      setItemsPerPage(20);
    }
    fetch(
      `https://toy-marketplace-server-azure.vercel.app/toys-search?searchText=${searchText}`
    )
      .then((res) => res.json())
      .then((data) => setAllToys(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="my-8">
      <Hero title="All Toys"></Hero>
      <div className="flex justify-center items-center text-center my-12">
        <div className="form-control">
          <form onSubmit={handleFind} className="input-group">
            <input
              ref={inputRef}
              onChange={changeHandleFind}
              name="searchText"
              type="text"
              placeholder="Search your toys..."
              className="input input-bordered input-sm md:input-md"
            />
            <button className="btn btn-square btn-sm md:btn-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
      {allToys.length > 0 ? (
        <div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
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
                } border border-blue-700 font-medium rounded-full text-sm px-3 py-1.5 text-center inline-flex items-center`}
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
