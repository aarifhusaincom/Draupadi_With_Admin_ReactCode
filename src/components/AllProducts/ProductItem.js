import React from "react";
//import Pcategory from './productCategaory'
//import withContext from "../AllProducts/button";
//import ProductList from './ProductsList'
import { Link } from "react-router-dom";
import "./product.css";

const ProductItem = (props) => {
  const { product } = props;
  // const[click,setClick] = React.useState(false)

  var myStr = product.product_image;
  var sStr = myStr.substr(8);
  // console.log(sStr)

  return (
    <>
      <div
        className=" column is-3"
        style={{
          marginTop: 25,
          marginBottom: 35,
          backgroundColor: "transparent",
        }}
      >
        <div
          className="box flex flex-col justify-center space-y-1 mx-auto h-auto"
          style={{ backgroundColor: "transparent" }}
          Style="outline: none;box-shadow: none;"
        >
          <div
            className="card"
            style={{
              borderRadius: 15,
              overflow: "hidden",
              outline: "none",
              backgroundColor: "transparent",
            }}
          >
            <div
              className="card-image"
              Style="box-shadow: 0px 3px 6px #23232300;
-webkit-box-shadow: 0px 3px 6px #23232300;
-moz-box-shadow: 0px 3px 6px #23232300;"
            >
              <figure
                className="image is-1by1"
                style={{ objectFit: "cover", width: "100%" }}
              >
                <Link
                  to={{
                    pathname: `/products/${product.product_id}`,
                    query: { id: product.product_id },
                  }}
                >
                  <img
                    src={`https://cerbosys.in:4000${sStr}`}
                    style={{ width: "100%" }}
                    alt="Placeholder"
                  />
                </Link>
              </figure>
            </div>
          </div>
          <div className="container" Style="text-align:center;">
            <h8 className="title" style={{ fontSize: 18, color: "black" }}>
              <strong className="flex justify-center">
                {product.product_name.toUpperCase()}
              </strong>
            </h8>
          </div>
          <div className="flex justify-center">
            <span
              className="text-xl ml-1"
              style={{ fontSize: 18, color: "black" }}
            >
              <strong style={{ fontSize: 15, color: "black" }}>
                ₹ {product.product_price}
              </strong>
            </span>
            {/* <span className="mr-1">
              <p style={{ textDecoration: "line-through",  fontSize: "15px" }}>
                ₹{product.product_actualprice}
              </p>
            </span> */}
          </div>
          <div className="container" Style="text-align:center;"></div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
