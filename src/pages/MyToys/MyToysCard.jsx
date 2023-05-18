import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const MyToysCard = ({ toys, handleDelete }) => {
  const {
    _id,
    picture_url,
    seller_name,
    seller_email,
    name,
    sub_category,
    price,
    rating,
    available_quantity,
    detail_description,
  } = toys;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 shadow-md border rounded-md mb-4">
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
        <div className="card-actions justify-end">
          <Link
            to={`/update-toy/${_id}`}
            className="btn btn-xs btn-active btn-ghost"
          >
            Update
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-xs btn-active btn-ghost"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyToysCard;
