import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
  // Custom hook for set website page wise title
  useTitle("Update Toy");
  const { id } = useParams();
  const [toy, setToy] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://toy-marketplace-server-azure.vercel.app/toys/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToy(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const availableQuantity = form.availableQuantity.value;
    const detailDescription = form.detailDescription.value;

    const toyInfo = {
      price,
      available_quantity: availableQuantity,
      detail_description: detailDescription,
    };

    fetch(`https://toy-marketplace-server-azure.vercel.app/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast("Toy update successful!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/my-toys", { replace: true });
        }
      })
      .catch((error) => console.log(error));
  };

  if (!toy) {
    return <LoadingSpinner fullScreen={false}></LoadingSpinner>;
  }

  return (
    <div className="md:h-[calc(100vh-134px)] my-8">
      <h1 className="text-center text-2xl text-gray-500 font-extrabold mb-8 md:mb-16">
        Update toy
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            className="md:h-[450px] rounded-md"
            src={toy?.picture_url}
            alt=""
          />
        </div>
        <div className="card w-full rounded-md border">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  name="price"
                  defaultValue={toy?.price}
                  type="text"
                  placeholder="Price"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available quantity</span>
                </label>
                <input
                  name="availableQuantity"
                  defaultValue={toy?.available_quantity}
                  type="text"
                  placeholder="Available quantity"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Detail description</span>
                </label>
                <textarea
                  name="detailDescription"
                  defaultValue={toy?.detail_description}
                  placeholder="Detail description"
                  className="textarea textarea-bordered textarea-md w-full h-28"
                  required
                ></textarea>
              </div>

              <div className="form-control mt-4">
                <button className="bg-gray-100 w-full text-blue-600 font-semibold border rounded-full hover:bg-gray-200">
                  <div className="flex justify-center items-center space-x-4 p-2">
                    Update
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
