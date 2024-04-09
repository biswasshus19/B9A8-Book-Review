import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="hero lg:min-h-screen bg-base-200 rounded-2xl lg:mt-8 mt-4 lg:mx-0 mx-2 w-[95%]">
      <div className="hero-content text-center">
        <div className="lg:max-w-md">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="py-6 lg:py-6">
            Welcome to our Book Vibe! We are here for you, You can chose any book from us. In our policy we are ready everytime for our customers. Here You can know about our book details.
          </p>
          <p>
            This is our least book section. Here  you can Review our book and make your knowledge about our book. so there have many side about our book
          </p>
          <Link to="/contact">
            <button className="btn font-semibold text-lg border-[#23be0a] bg-[#23be0a] text-white mt-4">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
