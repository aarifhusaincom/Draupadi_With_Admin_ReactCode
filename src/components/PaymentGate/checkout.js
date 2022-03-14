import React from "react";
import { isAuthenticated, getCartProducts } from "../SignUpPage/repository";
import { Redirect, Link } from "react-router-dom";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
  });
};

const __DEV__ = "Development";
export default function Checkout() {
 



  // pay = () => pay().then(data => alert(data)).catch(err => console.log(err))
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay failed");
      return;
    }

    const options = {
      key: __DEV__ ? "rzp_test_2bQ3mYU4FM9qdV" : "PRODUCTION_KEY",
      amount: "500",
      currency: "INR",
      name: "SkinCream",
      description: "Test Transaction",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/1200px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
      order_id: "order_9A33XWu170gUtm",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  if (!isAuthenticated()) return <Redirect to="/login" />;
  const { products, total } = state;
  return (
    <div className=" container">
      <h3 className="card-title">Checkout</h3>
      <hr />
      {products.map((product, index) => (
        <div key={index}>
          <p>
            {product.name} <small> (quantity: {product.qty})</small>
            <span className="float-right text-primary">
              ${product.qty * product.price}
            </span>
          </p>
          <hr />
        </div>
      ))}{" "}
      <hr />
      {products.length ? (
        <div>
          <h4>
            <small>Total Amount:</small>
            <span className="float-right text-primary">${total}</span>
          </h4>
          <hr />
        </div>
      ) : (
        ""
      )}
      {!products.length ? (
        <h3 className="text-warning">No item on the cart</h3>
      ) : (
        ""
      )}
      {products.length ? (
        <button
          className="btn btn-success float-right"
          onClick={displayRazorpay}
        >
          Pay
        </button>
      ) : (
        ""
      )}
      <Link to="/">
        <button
          className="btn btn-danger float-right"
          style={{ marginRight: "10px" }}
        >
          Cancel
        </button>
      </Link>
      <br />
      <br />
      <br />
    </div>
  );
}
