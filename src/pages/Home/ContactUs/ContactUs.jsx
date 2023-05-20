import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";
const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="space-y-8 mt-16 md:mt-32 mb-8 md:mb-24">
      <div className="md:w-[70%] md:mx-auto text-center space-y-4">
        <h2 className="text-2xl md:text-4xl text-gray-500 font-extrabold">
          Connect with Us <br className="block md:hidden" /> and Ignite
          Learning!
        </h2>
        <p className="text-gray-500">
          We are here to assist you! If you have any questions, feedback, or
          need assistance with our educational toys, feel free to get in touch
          with our dedicated team. Our knowledgeable and friendly staff are
          ready to provide you with the support you need. Reach out to us via
          phone, email, or through the contact form below. We value your input
          and are committed to ensuring your satisfaction. Lets make your
          educational toy journey an exceptional one!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:justify-center gap-4 md:gap-16">
        <div
          className="rounded-md"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <MapContainer
            className="rounded-md"
            center={[23.751122489538883, 90.37355027657674]}
            zoom={14}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="card w-full rounded-md border"
        >
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="textarea textarea-bordered textarea-md w-full h-28"
                  required
                ></textarea>
              </div>
              <div className="form-control mt-4">
                <button className="bg-gray-100 w-full text-blue-600 font-semibold border rounded-full hover:bg-gray-200">
                  <div className="flex justify-center items-center space-x-4 p-2">
                    Send
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
