// import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/productlist";
import { Back, Products } from "../components";
import { useParams } from "react-router";

export default function CategoryWise() {
  let { id } = useParams();
  return (
    <div>
      <Back title={id} />
      <div>
        <Products products={PRODUCTS} title="" filter={id} />
      </div>
    </div>
  );
}
