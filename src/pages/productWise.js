// import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/productlist";
import { Back } from "../components";
import { useParams } from "react-router";
export default function ProductWise() {
  let { id } = useParams();
  return (
    <div>
      <Back title={id} />
      <div className="grid grid-cols-2">
        <div className="p-5">
          <img src={PRODUCTS[0].url} width={"80%"} />
        </div>
        <div className="p-4 text-left">
          <div className="flex justify-between w-full items-center mt-10">
            <div className="font-bold text-2xl">{PRODUCTS[0].title}</div>
            <div className="flex justify-end">
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
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
            </div>
            <div>
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
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-center w-full items-center mt-5 border-t-2  m-5">
            <button
              className="flex mt-4 p-4 rounded-lg border-2 text-orange-600 border-orange-600  text-2xl"
              type="button"
            >
              -
            </button>
            <span>Quantity</span>
            <button
              className="flex mt-4 p-4 rounded-lg border-2 text-orange-600 border-orange-600  text-2xl"
              type="button"
            >
              +
            </button>
          </div>
          <div className="flex justify-end w-full flex-wrap text-right mt-5 border-t-2 border-b-2 m-5">
            <div className="text-orange-600 line-through w-full">
              {PRODUCTS[0].discount} Rs.
            </div>
            <div className="text-orange-600 w-full text-2xl">110 Rs.</div>
            <button className="cart-button mt-4" type="button uppercase">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
