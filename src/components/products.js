export default function Products({ products }) {
  return (
    <div>
      <h3>discounted %</h3>
      {products &&
        products.map((item, index) => {
          return (
            <div key={index + item.title}>
              <div>
                <img src={item.url} />
              </div>
              <div>{item.title}</div>
            </div>
          );
        })}
    </div>
  );
}
