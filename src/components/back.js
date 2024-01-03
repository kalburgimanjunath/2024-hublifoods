import { Link } from "react-router-dom";

export default function Back({ title }) {
  return (
    <div className="fixed top-0 p-3 w-full bg-orange-600 text-white shadow-lg">
      <Link to="/" className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>

        <span className="pl-2">{title}</span>
      </Link>
    </div>
  );
}
