import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Header() {
  const cart = useSelector((state) => state.cart);
  const watchlist = useSelector((state) => state.watchlist);
  const rightnav = [
    {
      title: "info",
      url: "about",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
      ),
    },
    {
      title: "Favarite",
      url: "watchlist",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
          />
        </svg>
      ),
    },
    {
      title: "Account",
      url: "account",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      ),
    },
    {
      title: "notification",
      url: "notification",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
      ),
    },
    {
      title: "cart",
      url: "cart",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="flex bg-orange-600 text-white shadow-lg">
      <Link className="flex p-2 w-half items-center" to="/">
        <img
          src="https://cdn.mobilzer.com/icon-192.png"
          width={30}
          height={30}
        />
        <span className="pl-2">HUBLIFOODS</span>
      </Link>
      <div className="flex items-center justify-end w-full">
        <div className="flex justify-evenly">
          {rightnav &&
            rightnav.map((item, index) => {
              return (
                <Link
                  to={item.url}
                  className="p-2 hover:text-blue-600"
                  key={`rightnav-${item.title}-${index}`}
                >
                  {item.title == "cart" ? (
                    <div
                      className="text-center items-center absolute bg-blue-600 rounded-lg hover:text-white"
                      style={{
                        top: "4px",
                        marginLeft: "10px",
                        height: "22px",
                        width: "22px",
                      }}
                    >
                      <span className="text-white">{cart.length}</span>
                    </div>
                  ) : null}
                  {item.title == "Favarite" ? (
                    <div
                      className="text-center items-center absolute bg-blue-600 rounded-lg hover:text-white"
                      style={{
                        top: "4px",
                        marginLeft: "10px",
                        height: "22px",
                        width: "22px",
                      }}
                    >
                      <span className="text-white">{watchlist.length}</span>
                    </div>
                  ) : null}
                  <span>{item.icon}</span>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
