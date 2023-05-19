import { Link } from "react-router-dom";

const AllToysCard = ({ toy }) => {
  const { _id, seller_name, name, sub_category, price, available_quantity } =
    toy;
  return (
    <tr>
      <th></th>
      <th>{seller_name}</th>
      <td>{name}</td>
      <td>{sub_category}</td>
      <td>${price}</td>
      <td>{available_quantity}</td>
      <td>
        <Link
          to={`/toy-details/${_id}`}
          className="btn btn-active btn-ghost btn-xs"
        >
          Details
        </Link>
      </td>
    </tr>
  );
};

export default AllToysCard;
