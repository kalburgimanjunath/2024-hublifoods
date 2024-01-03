import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/productlist";
export default function CategoryWise() {
  return (
    <div>
      <div>Back to List</div>
      <div>
        {PRODUCTS &&
          PRODUCTS.map((item, index) => {
            return (
              <Link
                key={item.title + index}
                to={`../../../products/${item.title}`}
              >
                <div>
                  <img src={item.url} />
                </div>
                <div>{item.title}</div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
