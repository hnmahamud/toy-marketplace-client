import Lottie from "lottie-react";
import addToyAnimation from "../../assets/add-toy.json";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProviders";
import { toast } from "react-toastify";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState("math_toys");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
      price,
      rating,
      available_quantity: availableQuantity,
      detail_description: detailDescription,
    };

    fetch("http://localhost:5000/toys", {
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
          toast("Toy added successful!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center">Add a toy</h1>
      <div className="">
        <div className="">
          <Lottie
            className="h-72"
            animationData={addToyAnimation}
            loop={true}
          />
        </div>
        <div className="card w-full md:w-[80%] mx-auto rounded-md border">
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
                    <option value="math_toys">Math Toys</option>
                    <option value="language_toys">Language Toys</option>
                    <option value="science_toys">Science Toys</option>
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
                  className="textarea textarea-bordered textarea-md w-full"
                  required
                ></textarea>
              </div>

              <div className="form-control mt-4">
                <button className="bg-gray-100 w-full text-blue-600 font-semibold border rounded-full hover:bg-gray-200">
                  <div className="flex justify-center items-center space-x-4 p-2">
                    Submit
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

export default AddToy;
