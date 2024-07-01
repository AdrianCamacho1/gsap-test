import Robot from "../../../assets/Robot.png";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-centern">
      <div className="my-5" alt="text">
        <h1 className="text-5xl font-bold">Site Launch Studios</h1>
        <p className="text-2xl my-7 px-1 dark:text-slate-300">
          Site Launch Studios: Partnering with you to create web solutions that
          exceed your expectations.
        </p>
        <Link
          to="/products"
          type="button"
          className="text-white bg-sls-blue hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Launch Your Idea 🚀
        </Link>
      </div>
      <div className="my-5 lg:max-w-xl" alt="visual">
        <img
          className="rounded-lg max-h-full"
          src={Robot}
          alt="Sitelaunch Robot"
        />
      </div>
    </section>
  );
};
