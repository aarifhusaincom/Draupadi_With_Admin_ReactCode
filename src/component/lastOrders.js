import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import authHeaderuser from "../services/auth-headers";
import { Link, useHistory } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import "./googleButton.css";
import moment from "moment";

const LastOrder = () => {
  const { Panel } = Collapse;
  const history = useHistory();
  const user = useSelector((state) => state.user);
  if (user.token == undefined) {
    history.push("/");
  }
  const [datas, setDatas] = React.useState([]);
  // const[datas1,setDatas1]=React.useState([])
  const [orders, setOrders] = useState([]);
  //const[message1,setMessage1]=React.useState([])
  useEffect(async () => {
    // axios.get('https://45.80.152.232:4000/draupadi/getAllOrderDetail',{headers:authHeaderuser()})
    await axios
      .get(
        `https://cerbosys.in:4000/draupadi/getOrdersByUserId?user_id=${user.userId}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        console.log("all orders----------", res.data.data);
        setOrders(res.data.data);
      })
      .catch((err) => {
        console.log("333333333333333", err);
      });
  }, []);

  // function invoicePrint(id,hd){
  //     //axios.get(`https://45.80.152.232:2000/draupadi/printInvoice?shipping_id=${id}&order_id=${hd}`,{headers:authHeaderuser()})
  //     axios.get(`https://cerbosys.in:4000/draupadi/printInvoice?shipping_id=${id}&order_id=${hd}`,{headers:authHeaderuser()})
  //     .then(res=>{
  //         console.log(res)
  //     })
  // }

  //     function Print(){
  //   window.print();
  // }

  // function orderList() {
  //   let list = [];
  //   (datas || []).forEach((order) => {
  //     let imagess = order.product_image.substr(8);
  //     let date = order.order_date.substr(0, 10);
  //     //  let total = order.totalAmount;
  //     let pay = order.product_price;
  //     let name = order.product_name;
  //     let orders = order.order_id;
  //     // let ord = order.order_status;
  //     //let id = order.shipping_id;
  //     //  let hd = order.order_id;

  //     list.push(
  //       <div className=" column is-full">
  //         <div
  //           className="box"
  //           style={{ backgroundColor: "#F4F4F4", borderRadius: 10 }}
  //         >
  //           <div className="media">
  //             <div
  //               className="media-left"
  //               style={{ paddingLeft: 35, paddingRight: 25 }}
  //             >
  //               <div className="card">
  //                 <div className="card-image">
  //                   <figure className="image is-128x128">
  //                     <img
  //                       src={`https://cerbosys.in:4000/${imagess}`}
  //                       alt="pro"
  //                     />
  //                   </figure>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="media-content">
  //               <br />
  //               <b style={{ textTransform: "capitalize" }}>
  //                 {name.toUpperCase()}{" "}
  //               </b>
  {
    /* <div>{product.product_description.toUpperCase()}</div> */
  }
  {
    /* <div className="field has-addons" style={{width:140,height:50,position:'relative',left:200,top:-50}}>
            <p className="control">
              <a href='/' className="button is-warning">
                -
              </a>
            </p>
            <p className="control">
            <input className="input" type="text" placeholder="0" value={''}/>
            </p>
            <p className="control">
              <a href='/' className="button is-warning">
                +
              </a>
            </p>
            </div> */
  }
  //           </div>
  //           <div className="media-right">
  //             <p className="lead" style={{ color: "grey", fontSize: 20 }}>
  //               <strong style={{ color: "black" }}>{pay}/-</strong>
  //             </p>
  //             <br />
  //             <br />
  //             <p>
  //               <strong style={{ fontSize: 15, color: "grey" }}>
  //                 Ordered on {date}
  //               </strong>
  //             </p>
  //             <p className="lead" style={{ fontSize: 15 }}>
  //               <strong style={{ color: "grey" }}>Order ID - {orders}</strong>
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // });
  //   return list;
  // }
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const OrderHeading = ({ order }) => {
    return (
      <div className="flex flex-start justify-between w-full pr-3">
        <span>{order?.order_id}</span>
        <span>{moment(order?.order_date).format("ll")} </span>
        <span>Rs.{order?.totalAmount}</span>
        <span>{order.status}</span>
      </div>
    );
  };

  return (
    <>
      <div className="container" Style="position:relative;">
        <div
          className="hero is-white"
          Style="border-bottom-style:dashed;border-bottom-width:thin;border-bottom-color:#BA7D82;"
        >
          <div className="hero-body container">
            <h4 className="title">My Orders</h4>
          </div>
        </div>
        <br />
        <div className="container">
          <Table>
            <tr>
              <td Style="border: none;">
                <div className="container" style={{ minWidth: 100 }}>
                  <Link to="/products" style={{ textDecoration: "none" }}>
                    <h2
                      className="title"
                      style={{ color: "#B77304", fontSize: 21 }}
                    >
                      <FaLongArrowAltLeft />
                      Back to Products
                    </h2>
                  </Link>
                </div>
              </td>
              {/* <td Style="border: none;">
                <div className="container">
                  {orderList()}
                  {!datas && <h1 className="title">{message}</h1>}
                </div>
              </td> */}
            </tr>
          </Table>

          {orders.length ? (
            <>
              <h2>Order details:</h2>
              <div className="pl-4  flex justify-between w-full text-xl  pr-6 ">
                <span className="font-bold">ID</span>
                <span className="font-bold">Date</span>
                <span className="font-bold">Amount</span>
                <span className="font-bold">Status</span>
              </div>
              <Collapse
                bordered={false}
                expandIconPosition={"right"}
                // defaultActiveKey={["1"]}
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined rotate={isActive ? 90 : 0} />
                )}
                className="site-collapse-custom-collapse flex-grow"
              >
                {/* {[1, 2, 3, 4, 5].map((order, i) => {
              return ( */}

                {orders.map((order, index) => {
                  return (
                    <Panel
                      header={<OrderHeading order={order} />}
                      key={index}
                      className="site-collapse-custom-panel"
                    >
                      <div className="w-full">
                        <div className="flex  items-center">
                          <div className="w-full text-center font-bold">
                            Image
                          </div>
                          <div className="w-full text-center font-bold">
                            Name
                          </div>
                          <div className="w-full text-center font-bold">
                            Design Code
                          </div>
                          <div className="w-full text-center font-bold">
                            Qty.
                          </div>
                          <div className="w-full text-center font-bold">
                            Price
                          </div>
                        </div>
                        {order?.ordDet?.map((product, index) => {
                          console.log("---image---", product);
                          return (
                            <div className="flex justify-center items-center  my-4">
                              <div className="flex w-full justify-center">
                                <img
                                  src={`https://cerbosys.in:4000${product?.product_image?.substr(
                                    8
                                  )}`}
                                  alt={`${product?.product_name}`}
                                  className="w-[40px] md:w-[60px] object-contain rounded-md  "
                                />
                              </div>
                              <span className="w-full text-center ">
                                {product?.product_name}
                              </span>
                              <span className="w-full text-center">
                                {product?.design_code}
                              </span>
                              <span className="w-full text-center">
                                {product?.product_quantity}
                              </span>
                              <span className="w-full text-center ">
                                Rs.{product?.product_price}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </Panel>
                  );
                })}

                {/* );
            })} */}
              </Collapse>
            </>
          ) : (
            <h2>No Orders yet !!</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default LastOrder;
