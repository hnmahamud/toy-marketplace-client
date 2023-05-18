const AllToysCard = ({ toy }) => {
  const { _id, seller_name, name, sub_category, price, available_quantity } =
    toy;
  return (
    <tr>
      <th>{seller_name}</th>
      <td>{name}</td>
      <td>{sub_category}</td>
      <td>${price}</td>
      <td>{available_quantity}</td>
      <td>
        <button className="btn btn-active btn-ghost btn-xs">Details</button>
      </td>
    </tr>
  );
};

export default AllToysCard;
