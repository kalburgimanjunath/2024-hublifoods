export default function Header() {
  const rightnav = [
    { title: "info", url: "" },
    { title: "Favarite", url: "" },
    { title: "Account", url: "" },
    { title: "notification", url: "" },
    { title: "cart", url: "" },
  ];
  return (
    <div>
      <div>
        <img
          src="https://cdn.mobilzer.com/icon-192.png"
          width={30}
          height={30}
        />
        <span>Hublifoods</span>
      </div>
      <div>
        {rightnav &&
          rightnav.map((item, index) => {
            return (
              <span key={`rightnav-${item.title}-${index}`}>{item.title}</span>
            );
          })}
      </div>
    </div>
  );
}
