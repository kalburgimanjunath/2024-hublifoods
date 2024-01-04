import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { Back, Products } from "../components";
import useRazorpay from "react-razorpay";
import * as alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
export default function Cart() {
  const [sumTotal, setSumTotal] = useState(0);
  const [Razorpay] = useRazorpay();
  const handlePayment = useCallback(async () => {
    const options = {
      key: "rzp_test_XDZYohVji5WV7J",
      amount: "1000",
      currency: "INR",
      isUPILinkEnabled: true,
      name: "HubliFoods app",
      description: "HubliFoods app",
      entity: "order",
      id: "order_9A33XWu170gUtm",
      prefill: {
        name: "manjunath kalburgi",
        email: "manjunathkalburgi@example.com",
        contact: "9986407307",
      },
      notes: {
        address: "HubliFoods Corporate Office",
      },
      notifyOptions: {
        sms: true,
        email: true,
      },
      handler: function (response) {
        console.log(response.razorpay_payment_id);
        console.log(response.razorpay_order_id);
        console.log(response.razorpay_signature);
      },
      callbackUrl: "https://example-callback-url.com/",
      callbackMethod: "get",
      enableReminder: "true",
      customOptions: {
        test: "testing",
      },
    };
    const rzpay = new Razorpay(options);

    rzpay.open();
    alertify.success("Order placed successfully...");
  }, [Razorpay]);

  const cartItems = useSelector((state) => {
    return state.cart;
  });
  const sumFun = (arrayData) => {
    let sum = 0;
    for (let i = 0; i < arrayData.length; i++) {
      sum += arrayData[i].price;
    }
    setSumTotal(sum);
  };
  useEffect(() => {
    if (cartItems.length > 0) {
      sumFun(cartItems);
    }
  }, [cartItems]);
  return (
    <div className="w-full">
      <Back title="Cart" />
      <h3 className="font-bold mt-4 pb-4 border-b-2">Shipping Method</h3>
      <h3 className="mt-4 pb-4 border-b-2 font-bold">Order Summary</h3>
      <div className="pt-4 pb-4">
        {cartItems && cartItems.length < 0 ? (
          <div>Cart List is empty</div>
        ) : (
          <Products products={cartItems} title="" type="cart" />
        )}
      </div>
      <h3 className="mt-4 pb-4 border-b-2 font-bold">Payment Details</h3>
      <div className="mt-4 pb-4 border-b-2 font-bold">
        <span>Total:</span>
        <span>{sumTotal} Rs.</span>
      </div>
      <div className="mt-4 pb-4 border-b-2 flex justify-between">
        <span>Cash on Delivery</span>
        <span>{sumTotal} Rs.</span>
      </div>
      <div className="mt-4">
        <button type="button" className="cart-button" onClick={handlePayment}>
          Secure Checkout
        </button>
      </div>
    </div>
  );
}
