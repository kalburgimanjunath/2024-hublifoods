import { Banner, Category, Products } from "../components";
import { PRODUCTS } from "../data/productlist";
export default function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <Products products={PRODUCTS} title="discounted %" />
    </div>
  );
}
