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
          marginTop: -25,
          marginBottom: -25,
          backgroundColor: "transparent",
        }}
      >
        <div
          className="box"
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
            <h8 className="title" style={{ fontSize: 12, color: "black" }}>
              <strong>{product.product_name.toUpperCase()}</strong>
            </h8>
          </div>
          <div className="row">
            <div className="column">
              <p style={{ textDecoration: "line-through" }}>
              ₹ {product.product_actualprice}
              </p>
            </div>
            <div className="column">
              <strong>₹ {product.product_price}</strong>
            </div>
          </div>
          <div className="container" Style="text-align:center;">
            {/* <button
                className="button is-small is-danger card-footer-item is-pulled-left"
                 style={{margin:10}}
                onClick={()=> props.getproduct(product.product_id)}
                //onClick={()=>viewdetailsHandler(product.product_id)}
              >
              View
              </button> */}
            {/* <button
                style={{margin:10,backgroundColor:'#E71E2D'}}
                className={click ? "button is-small  is-success ":"button is-small is-danger"}
                onClick={() =>{
                  props.addToCart({
                    id: product.product_id,
                    product,
                    amount: 1,
                    total:0,
                    payable:0
                  });
                  setClick(true);
                }
                }
              >
               {click ? "Saved in Cart":"Add to Cart"}
              </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
