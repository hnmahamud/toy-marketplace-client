import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProviders";
import MyToysCard from "./MyToysCard";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  // Custom hook for set website page wise title
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState(false);
  const [sortBy, setSortBy] = useState("normal");
  const handleSelectChange = (event) => {
    setSortBy(event.target.value);
  };

  const email = user?.email;
  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-azure.vercel.app/my-toys?email=${email}&sortBy=${sortBy}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      })
      .catch((error) => console.log(error));
  }, [email, sortBy]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-marketplace-server-azure.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount === 1) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              const remaining = myToys.filter((toy) => toy._id !== id);
              setMyToys(remaining);
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  if (!myToys) {
    return <LoadingSpinner fullScreen={false}></LoadingSpinner>;
  }

  return (
    <div className="my-8">
      <h1 className="text-2xl text-center text-gray-500 font-extrabold mb-8">
        My Toys
      </h1>
      <div className="mb-4">
        <label className="label">
          <span className="text-lg text-gray-500 font-extrabold">
            Sort By Price:
          </span>
        </label>
        <select
          value={sortBy}
          onChange={handleSelectChange}
          className="select select-bordered"
          required
        >
          <option value="normal">-Select One-</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>

      {myToys.length > 0 ? (
        myToys.map((toy) => (
          <MyToysCard
            key={toy._id}
            toy={toy}
            handleDelete={handleDelete}
          ></MyToysCard>
        ))
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

export default MyToys;
