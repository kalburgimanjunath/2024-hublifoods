import { Banner, Category, Products } from "../components/";
import { PRODUCTS } from "../data/productlist";
export default function MarketPlace() {
  return (
    <div>
      <Banner />
      <Category />
      <Products products={PRODUCTS} title="% Discounted items" />
    </div>
  );
}
