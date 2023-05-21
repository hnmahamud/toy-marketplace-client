import { useLocation } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Hero from "../Shared/Hero/Hero";
import useScrollTop from "../../hooks/useScrollTop";

const Blogs = () => {
  // Custom hook
  const { pathname } = useLocation();
  useScrollTop(pathname);
  useTitle("Blogs");

  return (
    <div>
      <div className="flex flex-col space-y-4 my-8">
        <Hero title="Blogs"></Hero>
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="card card-side border rounded-md shadow-md p-2 md:p-4"
        >
          <div className="col-span-2 card-body">
            <div className="flex flex-col space-y-4">
              <h2 className="text-gray-600 text-lg font-bold">
                What is an access token and refresh token? How do they work and
                where should we store them on the client-side?
              </h2>
              <p className="text-gray-500">
                <strong>Access token:</strong> An access token is a security
                credential that is issued to a client upon successful
                authentication. It is used to authenticate and authorize the
                clients access to specific resources on a server. The token is
                typically a string of characters and is included in each request
                to the server to grant access to protected resources.
              </p>
              <p className="text-gray-500">
                <strong>Refresh token:</strong> A refresh token is a long-lived
                credential that is also issued to a client during
                authentication. Its purpose is to obtain a new access token
                without requiring the user to re-authenticate. When the access
                token expires, the client can send the refresh token to the
                server to obtain a new access token, allowing continuous access
                to protected resources.
              </p>
              <p className="text-gray-500">
                <strong>Client-side storage:</strong> To store these tokens on
                the client-side, best practices suggest storing the access token
                in a secure storage mechanism, such as the browsers localStorage
                or sessionStorage. However, due to their longer lifespan and
                increased sensitivity, refresh tokens should be stored in a more
                secure location, such as an HTTP-only cookie. This helps
                mitigate the risk of unauthorized access to the refresh token by
                malicious scripts or cross-site scripting (XSS) attacks.
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="card card-side border rounded-md shadow-md p-4"
        >
          <div className="col-span-2 card-body">
            <div className="flex flex-col space-y-4">
              <h2 className="text-gray-600 text-lg font-bold">
                Compare SQL and NoSQL databases?
              </h2>
              <p className="text-gray-500">
                SQL databases are based on a structured data model with fixed
                schemas, use SQL for querying, and are good for complex queries
                and structured data. NoSQL databases have flexible schemas,
                scale horizontally, use various query languages, and are
                suitable for unstructured or semi-structured data, high
                scalability, and flexible schemas.
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="card card-side border rounded-md shadow-md p-4"
        >
          <div className="col-span-2 card-body">
            <div className="flex flex-col space-y-4">
              <h2 className="text-gray-600 text-lg font-bold">
                What is express js? What is Nest JS?
              </h2>
              <p className="text-gray-500">
                <strong>Express.js</strong> is a minimalist web application
                framework for Node.js. It provides a simple and flexible set of
                features for building web applications and APIs. Express.js is
                known for its middleware architecture, which allows developers
                to create modular and extensible applications. It provides
                routing, request handling, and response management, making it
                popular for building lightweight and efficient server-side
                applications.
              </p>
              <p className="text-gray-500">
                <strong>NestJS</strong> is a progressive and opinionated Node.js
                framework for building scalable and efficient server-side
                applications. It is built on top of Express.js and enhances it
                with additional features and architectural patterns inspired by
                Angular. NestJS utilizes TypeScript for development and follows
                the principles of Dependency Injection and Decorators to enable
                modular and maintainable code. It provides a structured way to
                organize files, modules, and services, making it suitable for
                building enterprise-level applications with a focus on
                scalability and maintainability.
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="card card-side border rounded-md shadow-md p-4"
        >
          <div className="col-span-2 card-body">
            <div className="flex flex-col space-y-4">
              <h2 className="text-gray-600 text-lg font-bold">
                What is MongoDB aggregate and how does it work?
              </h2>
              <p className="text-gray-500">
                MongoDBs aggregate is a framework for performing advanced data
                aggregation operations on collections of documents. It uses a
                pipeline concept, where documents pass through multiple stages
                that perform specific operations such as filtering, grouping,
                sorting, and transforming data. Each stage in the pipeline takes
                input from the previous stage and passes the results to the next
                stage, allowing you to perform complex calculations, generate
                reports, and extract meaningful insights from your data. The
                aggregation pipeline provides a flexible and efficient way to
                process and analyze large amounts of data in MongoDB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
