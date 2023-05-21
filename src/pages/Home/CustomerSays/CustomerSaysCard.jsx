const CustomerSaysCard = ({ sayData }) => {
  const { image, name, designation, say } = sayData;
  return (
    <div className="w-80 bg-white border border-gray-200 rounded-md shadow mr-3">
      <div className="flex flex-col items-center pb-10 mt-4">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={image} />
        <h5 className="mb-1 text-xl font-medium text-gray-900 ">{name}</h5>
        <span className="text-sm text-gray-500">{designation}</span>
        <div className="flex p-4">
          <p>{say}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerSaysCard;
