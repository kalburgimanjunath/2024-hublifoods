import { Avatar, Products } from "../components";
import { PRODUCTS } from "../data/productlist";

export default function UserProfile() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3>User Profile</h3>
        <span>Edit</span>
      </div>
      <div className="flex justify-center align-center">
        <Avatar />
        <div className="m-4">
          <h3>Manjunath Kalburgi</h3>
          <div>Technical architect</div>
        </div>
      </div>
      <div>
        <Products products={PRODUCTS} title={"Purchased Items"} />
      </div>
    </div>
  );
}
