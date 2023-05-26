import { Link } from "react-router-dom";

export default function Header({ title, text, path, link }) {
  return (
    <div className="text-center mb-4 sm:mb-5 lg:mb-6">
      <h1 className="text-xl font-sans text-transparent font-black bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      <p className="text-xs text-white font-light sm:text-base lg:text-lg">
        {text}{" "}
        <Link to={path}>
          <span className="text-blue-300 font-medium">{link}</span>
        </Link>
      </p>
    </div>
  );
}
