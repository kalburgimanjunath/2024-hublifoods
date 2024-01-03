import React from "react";
import { useSelector } from "react-redux";
import { Products } from "../components";
export default function WatchList() {
  const watchlistItems = useSelector((state) => {
    return state.watchlist;
  });
  console.log(watchlistItems);
  return (
    <div>
      <h3 className="font-bold mt-2">Watchlist</h3>
      <div>
        {watchlistItems && watchlistItems.length < 0 ? (
          <div>Watch List is empty</div>
        ) : (
          <Products products={watchlistItems} title="" />
        )}
      </div>
    </div>
  );
}
