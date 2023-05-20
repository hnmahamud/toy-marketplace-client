import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const ShopByCategoryCard = ({ toy }) => {
  const { _id, picture_url, name, price, rating } = toy;
  return (
    <div className="shadow border rounded-md">
      <figure>
        <img className="md:h-56 rounded-md" src={picture_url} />
      </figure>
      <div className="p-2 space-y-4">
        <h2 className="text-xl text-gray-500 font-bold">{name}</h2>
        <div className=" text-gray-400">
          <div className="flex gap-2 items-center">
            <strong>Rating:</strong>
            <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
            {rating}
          </div>
          <p>
            <strong>Price:</strong> ${price}
          </p>
        </div>
        <div className="flex justify-end">
          <Link
            to={`/toy-details/${_id}`}
            className="btn btn-xs btn-active btn-ghost"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategoryCard;
