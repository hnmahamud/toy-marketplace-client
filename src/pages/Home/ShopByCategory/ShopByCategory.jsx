import { useEffect, useState } from "react";
import ShopByCategoryCard from "./ShopByCategoryCard";

const ShopByCategory = () => {
  const [subCat, setSubCat] = useState("language toys");
  const [subCatData, setSubCatData] = useState();

  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-azure.vercel.app/toys-subCat?subCat=${subCat}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSubCatData(data);
      })
      .catch((error) => console.log(error));
  }, [subCat]);

  return (
    <div className="space-y-8 mt-16 md:mt-2 mb-8 md:mb-16">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="space-y-4"
      >
        <div className="md:w-[70%] md:mx-auto md:text-center space-y-4">
          <h2 className="text-2xl md:text-4xl text-gray-500 font-extrabold">
            Educational and Learning Toys
          </h2>
          <p className="text-gray-500">
            Explore our collection of educational toys designed to inspire
            learning and development. From puzzles and building blocks to
            science kits and language games, our toys foster cognitive
            abilities, problem-solving skills, and creativity. Discover the joy
            of learning through play!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="tabs">
            <a
              onClick={() => setSubCat("language toys")}
              className={`tab tab-sm md:tab-lg tab-lifted ${
                subCat === "language toys" && "tab-active"
              }`}
            >
              Language Toys
            </a>
            <a
              onClick={() => setSubCat("math toys")}
              className={`tab tab-sm md:tab-lg tab-lifted ${
                subCat === "math toys" && "tab-active"
              }`}
            >
              Math Toys
            </a>
            <a
              onClick={() => setSubCat("science toys")}
              className={`tab tab-sm md:tab-lg tab-lifted ${
                subCat === "science toys" && "tab-active"
              }`}
            >
              Science Toys
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {subCatData &&
          subCatData.map((toy) => (
            <ShopByCategoryCard key={toy._id} toy={toy}></ShopByCategoryCard>
          ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
