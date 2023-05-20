import { Carousel } from "@trendyol-js/react-carousel";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const CustomerSays = () => {
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

      <Carousel
        className="relative"
        show={3.5}
        slide={2}
        swiping={true}
        rightArrow={
          <div className="btn btn-circle btn-xs mt-44 ml-1 md:ml-2">
            <FaArrowRight></FaArrowRight>
          </div>
        }
        leftArrow={
          <div className="btn btn-circle btn-xs mt-44 mr-1 md:mr-2">
            <FaArrowLeft></FaArrowLeft>
          </div>
        }
      >
        <div className="bg-white border border-gray-200 rounded-md shadow mr-2">
          <div className="flex flex-col items-center mt-2">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://i.ibb.co/2q0HrQJ/Jessica-Smith.jpg"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 ">
              Jessica Smith
            </h5>
            <span className="text-sm text-gray-500">Parent</span>
            <div className="flex p-4">
              <p>
                The educational toys I purchased from this website have made
                learning a joy for my children. They are not only having fun but
                also developing important skills and knowledge. Highly
                recommended!
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-md shadow mr-2">
          <div className="flex flex-col items-center mt-2">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://i.ibb.co/g4Zx132/John-Davis.jpg"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 ">
              John Davis
            </h5>
            <span className="text-sm text-gray-500">Teacher</span>
            <div className="flex p-4">
              <p>
                As a teacher, I am impressed with the quality and educational
                value of the toys offered on this website. They have become an
                integral part of my classroom, enhancing engagement and
                fostering a love for learning.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-md shadow mr-2">
          <div className="flex flex-col items-center mt-2">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://i.ibb.co/stLS9BM/Emily-Thompson.jpg"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 ">
              Emily Thompson
            </h5>
            <span className="text-sm text-gray-500">
              Educational Consultant
            </span>
            <div className="flex p-4">
              <p>
                I have been recommending these educational toys to parents and
                educators alike. The range of options caters to various learning
                styles, and the results speak for themselves - children are
                excited to learn and explore!
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-md shadow mr-2">
          <div className="flex flex-col items-center mt-2">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://i.ibb.co/vvpjQxn/Alex-Parker.jpg"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 ">
              Alex Parker
            </h5>
            <span className="text-sm text-gray-500">Child Psychologist</span>
            <div className="flex p-4">
              <p>
                As a child psychologist, I recognize the importance of play in a
                childs development. These educational toys strike the perfect
                balance between fun and learning, supporting cognitive, social,
                and emotional growth.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-md shadow mr-2">
          <div className="flex flex-col items-center mt-2">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://i.ibb.co/GCPWZ3W/Sophia-Lee.jpg"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 ">
              Sophia Lee
            </h5>
            <span className="text-sm text-gray-500">Parent and Educator</span>
            <div className="flex p-4">
              <p>
                Being both a parent and an educator, I am thrilled with the
                educational toys available here. They align with curriculum
                objectives and provide a hands-on learning experience that my
                children and students adore.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-md shadow mr-2">
          <div className="flex flex-col items-center mt-2">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://i.ibb.co/ryyydpH/Michael-Johnson.jpg"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 ">
              Michael Johnson
            </h5>
            <span className="text-sm text-gray-500">Education Enthusiast</span>
            <div className="flex p-4">
              <p>
                These educational toys have redefined the way we approach
                learning. They foster creativity, problem-solving, and critical
                thinking, giving children the tools they need to succeed in the
                modern world.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CustomerSays;
