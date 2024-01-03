import { Back } from "../components";

export default function About() {
  return (
    <div className="text-left">
      <Back title="About" />
      <h3 className="font-bold text-left">Who?</h3>
      <p>
        The Food Delivery app template is designed to make it easy and
        convenient for customers to order food from their favorite restaurants
        and have it delivered right to their doorsteps. The app features a
        user-friendly interface that allows customers to browse through a wide
        selection of restaurants and menus, place orders, and track their
        deliveries in real-time.
      </p>
      <p>
        Customers can easily search for restaurants by location, cuisine, or
        menu item, and filter their search results based on various criteria
        such as price range, rating, and delivery time. Once they have selected
        their desired restaurant and menu items, they can securely place their
        order and choose from various payment options, including credit/debit
        cards and mobile payment methods like Apple Pay and Google Pay.
      </p>
      <p>
        The app also includes features that enhance the user experience, such as
        the ability to customize orders, save favorite restaurants and menu
        items for quick reordering, and access to detailed restaurant menus with
        photos and descriptions. Customers can also rate and review their orders
        and restaurants, providing valuable feedback to both the restaurant and
        other customers.
      </p>
      <p>
        On the restaurant side, the app provides a simple and efficient way to
        manage orders, update menus, and track deliveries. Restaurants can
        easily accept or reject orders, update estimated delivery times, and
        communicate with customers directly through the app.
      </p>
      <p>
        Overall, the Food Delivery app template is a must-have for any
        restaurant looking to expand its customer base and provide a seamless
        and convenient ordering and delivery experience for its customers.
      </p>
      <p>
        <h3>When?</h3>
        <table>
          <tr>
            <td>Monday</td>
            <td> 14:00 - 16:00</td>
          </tr>
          <tr>
            <td> Tuesday </td>
            <td>12:00 - 23:30</td>
          </tr>
          <tr>
            <td> Wednesday </td>
            <td>12:00 - 23:30</td>
          </tr>
          <tr>
            <td>Thursday </td>
            <td>12:00 - 23:30</td>
          </tr>
          <tr>
            <td> Friday </td>
            <td>14:00 - 23:30</td>
          </tr>

          <tr>
            <td> Saturday </td>
            <td>12:00 - 23:30</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td> 12:00 - 23:30</td>
          </tr>
        </table>
      </p>
      <div>
        <div>Phone:+1 506-234-5678</div>
        <div>Fax: +1 506-234-5678</div>
        <div>Eamil: add-your-email@gmail.com</div>
      </div>
    </div>
  );
}
