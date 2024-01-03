// import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/productlist";
import { Back } from "../components";
export default function ProductWise() {
  return (
    <div>
      <Back title="Products" />
      <div>
        <div>
          <img src={PRODUCTS[0].url} />
        </div>
        <div>{PRODUCTS[0].title}</div>
        <div>Share to Social Media</div>
        <div>Add to Favorite</div>
      </div>
    </div>
  );
}
