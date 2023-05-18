import { useEffect, useState } from "react";
import allToysPic from "../../assets/photos/allToys.jpg";
import AllToyCard from "./AllToyCard";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";

const AllToy = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setAllToys(data))
      .catch((error) => console.log(error));
  }, []);

  if (allToys.length < 1) {
    return <LoadingSpinner fullScreen={false}></LoadingSpinner>;
  }

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center mb-8">All Toys</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 md:justify-center gap-4">
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
                    <AllToyCard key={toy._id} toy={toy}></AllToyCard>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-1">
          <img className="rounded-md" src={allToysPic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AllToy;
