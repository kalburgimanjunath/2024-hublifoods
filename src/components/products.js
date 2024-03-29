import { Link } from "react-router-dom";
import { remoteItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
export default function Products({ products, title, type, filter }) {
  const dispatch = useDispatch();
  const [filteredData, setFilterData] = useState([]);
  const filterProducts = (filter) => {
    return (
      products &&
      products.filter((item) => {
        return item && item.category.toLowerCase() == filter.toLowerCase();
      })
    );
  };
  useEffect(() => {
    if (filter) {
      return setFilterData(filterProducts(filter));
    } else {
      return setFilterData(products);
    }
  }, [filter]);
  return (
    <div>
      {title && <h3 className="text-2xl capitalize text-left m-2">{title}</h3>}
      <div className="flex justify-center flex-wrap">
        {filteredData &&
          filteredData.map((item, index) => {
            return (
              <Link
                key={index + item.title}
                className="m-2"
                to={`../../../products/${item.title}`}
              >
                <div width={120} height={120}>
                  <img
                    src={item.url}
                    className="rounded-t-lg w-32 h-32"
                    width={120}
                    height={120}
                  />
                </div>
                <div className="font-bold">{item.title}</div>
                <div className="flex">
                  <div className="text-orange-600  line-through">
                    {item.price} Rs.
                  </div>
                  <div className="text-orange-600">
                    {item.price - item.discount} Rs.
                  </div>
                </div>
                <div>
                  {type && type == "cart" ? (
                    <button
                      className="border-orange-600 text-orange-600 border-2 rounded-md p-1 w-full"
                      type="button uppercase"
                      onClick={() => dispatch(remoteItem(item.id))}
                    >
                      Remote
                    </button>
                  ) : (
                    <button
                      className="border-orange-600 text-orange-600 border-2 rounded-md p-1 w-full"
                      type="button uppercase"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
