import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProviders";
import useTitle from "../../hooks/useTitle";
import Hero from "../Shared/Hero/Hero";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollTop";

const AddToy = () => {
  // Custom hook
  const { pathname } = useLocation();
  useScrollTop(pathname);
  useTitle("Add Toy");

  const { user } = useContext(AuthContext);
  const [nLoading, setNLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("language toys");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNLoading(true);
    const form = event.target;
    const pictureUrl = form.pictureUrl.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const detailDescription = form.detailDescription.value;

    const toyInfo = {
      picture_url: pictureUrl,
      name,
      seller_name: sellerName,
      seller_email: sellerEmail,
      sub_category: selectedOption,
      price,
      rating,
      available_quantity: availableQuantity,
      detail_description: detailDescription,
    };

    fetch("https://toy-marketplace-server-azure.vercel.app/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          setNLoading(false);
          form.reset();
          Swal.fire({
            title: "Success!",
            text: "Toy added successful!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="my-8 space-y-8">
      <Hero title="Add a toy"></Hero>
      <div className="card w-full rounded-md border">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="w-full flex gap-2">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Picture URL</span>
                </label>
                <input
                  name="pictureUrl"
                  type="url"
                  placeholder="Picture URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="w-full flex gap-2">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <input
                  defaultValue={user ? user.displayName : ""}
                  name="sellerName"
                  type="text"
                  placeholder="Seller Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Seller Email</span>
                </label>
                <input
                  defaultValue={user ? user.email : ""}
                  name="sellerEmail"
                  type="text"
                  placeholder="Seller Name"
                  className="input input-bordered"
                  required
                  readOnly
                />
              </div>
            </div>

            <div className="w-full flex gap-2">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Sub-category</span>
                </label>
                <select
                  value={selectedOption}
                  onChange={handleSelectChange}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="language toys">Language Toys</option>
                  <option value="math toys">Math Toys</option>
                  <option value="science toys">Science Toys</option>
                </select>
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  name="price"
                  type="text"
                  placeholder="Price"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="w-full flex gap-2">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  name="rating"
                  type="text"
                  placeholder="Rating"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Available quantity</span>
                </label>
                <input
                  name="availableQuantity"
                  type="text"
                  placeholder="Available quantity"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Detail description</span>
              </label>
              <textarea
                name="detailDescription"
                placeholder="Detail description"
                className="textarea textarea-bordered textarea-md w-full h-36"
                required
              ></textarea>
            </div>

            <div className="form-control mt-4">
              {nLoading ? (
                <button className="bg-gray-100 w-full rounded-full text-blue-600 border border-gray-200 p-2">
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-6 h-6 text-gray-200 animate-spin fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </button>
              ) : (
                <button className="bg-gray-100 w-full text-blue-600 font-semibold border rounded-full hover:bg-gray-200">
                  <div className="flex justify-center items-center space-x-4 p-2">
                    Submit
                  </div>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
