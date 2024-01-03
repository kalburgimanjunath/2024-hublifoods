import { Link } from "react-router-dom";

export default function Products({ products, title }) {
  return (
    <div>
      {title && <h3 className="text-2xl capitalize text-left m-2">{title}</h3>}
      <div className="flex justify-center">
        {products &&
          products.map((item, index) => {
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
              </Link>
            );
          })}
      </div>
    </div>
  );
}
