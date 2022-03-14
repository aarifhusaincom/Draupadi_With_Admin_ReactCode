// import React from "react";
// import authHeaderuser from '../../services/auth-headers'
// import axios from 'axios'
// import'./wishlist.css';


// const WishItem = props => {
//   const { wishItem} = props;
//   console.log(wishItem)
//   var myStr = wishItem.product_image;
//   var sStr = myStr.substr(8)
//   console.log(sStr)

//   // function deleteWish(wishKey){
//   //    //axios.get(`https://45.80.152.232:4000/draupadi/deleteWishlist?wishlist_id=${wishKey}`,{headers:authHeaderuser()})
//   //    axios.get(`https://cerbosys.in:4000/draupadi/deleteWishlist?wishlist_id=${wishKey}`,{headers:authHeaderuser()})
//   //    .then(res=>console.log(res))
//   //    window.location.reload()
//   //  }

//   return (
//     // <div className=" column is-full" >
//     //   <div className="box" style={{backgroundColor:'#F4F4F4',borderRadius:10}}>
//     //     <div className="media">
//     //       <div className="media-left">
//     //       <div className='card'>
//     //       <div className='card-image'>
//     //         <figure className="image is-128x128">
//     //           <img
//     //             src={`https://cerbosys.in:4000${sStr}`}
//     //             alt={wishItem.product_description}
//     //             style={{objectFit:'cover'}}
//     //           />
//     //         </figure>
//     //         </div>
//     //       </div>
//     //       </div>
//     //       <div className="media-content">
//     //       <br/>
//     //         <b style={{ textTransform: "capitalize" }}>
//     //           {wishItem.product_name.toUpperCase()}
//     //         </b>
//     //         <br/>
//     //         <br/>
//     //         <p className="lead" style={{color:'grey',fontSize:15}}>Price-<strong style={{color:'black',fontSize:15}}>{wishItem.product_price}/-</strong></p>
//     //         {/* <div>{product.product_description.toUpperCase()}</div> */}
//     //       </div>
//     //       <div className='media-right' style={{position:'relative'}}>
//     //         <button className='button is-normal' Style='background-color:#BA7D82;color:white;border-radius:15px;' onClick={()=>props.movetocart()}>move to cart </button>
//     //         </div>
//     //          <div
//     //         className="media-right"
//     //         onClick={() =>{}}
//     //       >
//     //         <span className="delete is-large"></span>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };

// export default WishItem;