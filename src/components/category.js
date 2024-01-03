import { Link } from "react-router-dom";
export default function Cateogry() {
  const category = [
    {
      title: "Drinks",
      url: "https://cdn.mobilzer.com/food-app/categories/6f4eac9c-a742-486c-b749-855a78218481/0031107e-d3e8-44e2-b24f-e7428a173f89.png?ts=1681014957&quot;",
    },
    {
      title: "Pizzas",
      url: "https://cdn.mobilzer.com/food-app/categories/3e4f32df-5c2b-4f20-81a7-15af49555f70/eb948857-e0b4-4081-8a5c-6b14191918ef.png?ts=1681014984",
    },
    {
      title: "Western",
      url: "https://cdn.mobilzer.com/food-app/categories/b1a3cd59-a8ca-477a-9066-630655bb9a45/6ebeebb7-87f8-491f-8094-79d8afd8860e.png?ts=1681015000",
    },
    {
      title: "Appetizer",
      url: "https://cdn.mobilzer.com/food-app/categories/6a88ee64-2d15-4b78-be9a-274c22384dd1/c99137a4-4073-4d7e-80f3-008c1104b452.png?ts=1681015036",
    },
  ];
  return (
    <div>
      <h3>Categories</h3>
      {category &&
        category.map((item, index) => {
          return (
            <Link key={index + item.title} to={`/category/:${item.title}`}>
              <div>
                <img src={item.url} />
              </div>
              <div>{item.title}</div>
            </Link>
          );
        })}
    </div>
  );
}
