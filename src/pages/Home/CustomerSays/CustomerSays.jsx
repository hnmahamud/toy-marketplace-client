import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import CustomerSaysCard from "./CustomerSaysCard";
const CustomerSays = () => {
  const [says, setSays] = useState([]);
  useEffect(() => {
    fetch("/customer-says.json")
      .then((res) => res.json())
      .then((data) => setSays(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="space-y-8 mt-16 md:mt-32 mb-8 md:mb-32">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="md:w-[70%] md:mx-auto text-center space-y-4"
      >
        <h2 className="text-2xl md:text-4xl text-blue-500 font-extrabold">
          Happy Customers
        </h2>
        <p className="text-gray-500">
          Hear what our satisfied customers have to say about their experience
          with our educational toys. From parents to teachers and educational
          consultants, their testimonials showcase the positive impact our toys
          have had on learning and development. Discover why our customers are
          happy and join the growing community of satisfied learners!
        </p>
      </div>

      {says.length > 0 ? (
        <Marquee pauseOnHover={true}>
          {says.map((say) => (
            <CustomerSaysCard key={say.id} sayData={say}></CustomerSaysCard>
          ))}
        </Marquee>
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomerSays;
