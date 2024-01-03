export default function Banner() {
  const banners = [
    "https://cdn.mobilzer.com/food-app/banners/31246b31-8c5d-4b9d-bf49-d49c11805412.png?ts=1681014474",
    "https://cdn.mobilzer.com/food-app39795cc5-bc40-49ce-8850-30ca00acf2e8.png?ts=1681013798",
  ];
  return (
    <div>
      <div>leftArray</div>
      {banners &&
        banners.map((item, index) => {
          return <img key={index} src={item} />;
        })}
      <div>rightArray</div>
    </div>
  );
}
