import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const MyToysCard = ({ toy, handleDelete }) => {
  const { _id, picture_url, name, sub_category, price, available_quantity } =
    toy;
  return (
    <>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 shadow-md border rounded-md mb-4">
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
    </div> */}
      <tr>
        <th></th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={picture_url} />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>{sub_category}</td>
        <td>${price}</td>
        <td>{available_quantity}</td>
        <td className="space-x-2">
          <Link
            to={`/toy-details/${_id}`}
            className="btn btn-active btn-ghost btn-sm"
          >
            <FaEye></FaEye>
          </Link>
          <Link
            to={`/update-toy/${_id}`}
            className="btn btn-sm btn-active btn-ghost"
          >
            <FaEdit></FaEdit>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-active btn-ghost"
          >
            <FaTrash></FaTrash>
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyToysCard;
