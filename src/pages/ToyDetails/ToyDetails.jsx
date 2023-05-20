import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";
import useTitle from "../../hooks/useTitle";

const ToyDetails = () => {
  // Custom hook for set website page wise title
  useTitle("Toy Details");
  const { id } = useParams();
  const [toy, setToy] = useState();

  useEffect(() => {
    fetch(`https://toy-marketplace-server-azure.vercel.app/toys/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!toy) {
    return <LoadingSpinner fullScreen={false}></LoadingSpinner>;
  }

  const {
    picture_url,
    seller_name,
    seller_email,
    name,
    sub_category,
    price,
    rating,
    available_quantity,
    detail_description,
  } = toy;
  return (
    <div className="md:h-[calc(100vh-138px)] my-8">
      <h1 className="text-center text-2xl text-gray-500 font-extrabold mb-8">
        Toy details
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 shadow-md border rounded-md">
        <figure className="md:col-span-1">
          <img src={picture_url} />
        </figure>
        <div className="card-body md:col-span-2">
          <h2 className="card-title">{name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="text-gray-400">
              <p>
                <strong>Seller Name:</strong> {seller_name}
              </p>
              <p>
                <strong>Sub Category:</strong> {sub_category}
              </p>
              <div className="flex gap-2 items-center">
                <strong>Rating:</strong>
                <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
                {rating}
              </div>
            </div>
            <div className="text-gray-400">
              <p>
                <strong>Seller Email:</strong> {seller_email}
              </p>
              <p>
                <strong>Available Quantity:</strong> {available_quantity}
              </p>
              <p>
                <strong>Price:</strong> ${price}
              </p>
            </div>
          </div>
          <p className="text-gray-400">
            <strong>Detail Description:</strong> {detail_description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
