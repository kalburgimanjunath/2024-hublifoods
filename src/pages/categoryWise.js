// import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/productlist";
import { Back, Products } from "../components";
export default function CategoryWise() {
  return (
    <div>
      <Back title="Category" />
      <div>
        <Products products={PRODUCTS} title="" />
        {/* {PRODUCTS &&
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
          })} */}
      </div>
    </div>
  );
}