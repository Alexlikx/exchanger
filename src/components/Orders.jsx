import React, { useEffect, useState } from "react";
import loading from "./assets/loading.svg";

const Orders = () => {
  const [Loading, setLoading] = useState(true);
  const Orders = JSON.parse(localStorage.getItem("Order"));

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 50);
  return (
    <div className="text-white mt-[100px]">
      <div className="full-w justify-center flex min-h-[50vh]">
        {Loading ? (
          <img src={loading} alt="" width={100} height={100} className="icon" />
        ) : Orders ? (
          <div className="orders">
            <h1 className="font-poppins text-[40px] gradient">Your orders</h1>
            <div className="w-full background-white"></div>
          </div>
        ) : (
          <div className="orders-yet">
            <h1 className="font-poppins text-[40px] gradient">Your orders</h1>
            <p className="text-center font-poppins text-[28px]">
              No orders yet
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
