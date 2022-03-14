// import React from 'react'


// const loadScript = (src) => {
//     return new Promise(resolve=>{
//        const script = document.createElement('script')
//        script.src = src
//        document.body.appendChild(script)
//        script.onload = () => {
//            resolve(true)
//        }
//        script.onerror = () =>{
//            resolve(false)
//        }
//     })
//    }
  
//   const __DEV__ = document.domain === 'localhost'

//  const Cart = () =>{
//    async function displayRazorpay(){

//         const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

//         if(!res){
//             alert('Razorpay failed')
//             return
//         }

//           const options = {
//     "key": __DEV__ ? "rzp_test_wa9lcSWYOOkaNX":"PRODUCTION_KEY", 
//     "amount": "500", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//     "currency": "INR",
//     "name": "SkinCream",
//     "description": "Test Transaction",
//     "image": 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/1200px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg',
//     "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//     "handler": function (response){
//         alert(response.razorpay_payment_id);
//         alert(response.razorpay_order_id);
//         alert(response.razorpay_signature)
//     },
//     "prefill": {
//         "name": "Gaurav Kumar",
//         "email": "gaurav.kumar@example.com",
//         "contact": "9999999999"
//     }
// };
// const paymentObject = new window.Razorpay(options);
// paymentObject.open();
// }

//     return(
//         <div>
//         <button onClick={displayRazorpay}>press me</button>
//         </div>
//     )
// }
// export default Cart;



import React from "react";

const CartItem = props => {
  const { cartItem, cartKey } = props;

  const { product, amount } = cartItem;
  
  var myStr = product.product_image;
  var sStr = myStr.substr(8)
  // console.log(sStr)

  // console.log("Razor file product", product);

  return (
    <div className=" column is-full" >
      <div className="box" style={{backgroundColor:'#F4F4F4',borderRadius:10}}>
        <div className="media">
          <div className="media-left" style={{paddingLeft:35,paddingRight:20}}>
          <div className='card' style={{borderRadius:15,overflow:'hidden',outline:'none',backgroundColor:'transparent',boxShadow:' 2px 3px 17px rgb(35,35,35,0.34)',padding:0,marginTop:0}}>
          <div className='card-image'>
            <figure className="image is-128x128">
              <img
                //src={`https://45.80.152.232:4000${sStr}`}
                src={`https://cerbosys.in:4000${sStr}`}
                alt={product.product_description}
                style={{objectFit:'cover'}}
              />
            </figure>
            </div>
          </div>
          </div>
          <div className="media-content">
          <br/>
            <b style={{ textTransform: "capitalize" }}>
              {product.product_name.toUpperCase()}{" "}
            </b>
            <br/><br/>
            <p className="lead" style={{color:'grey',fontSize:15}}>Price- <strong style={{color:'black',fontSize:15}}>{product.product_price}/-</strong></p>
            {/* <div>{product.product_description.toUpperCase()}</div> */}
            {/* <div className="field has-addons" style={{width:140,height:50,position:'relative',left:200,top:-50}}>
            <p className="control">
              <a href='/' className="button is-warning">
                -
              </a>
            </p>
            <p className="control">
            <input className="input" type="text" placeholder="0" value={amount}/>
            </p>
            <p className="control">
              <a href='/' className="button is-warning">
                +
              </a>
            </p>
            </div> */}
          </div>
          <div
            className="media-right"
            onClick={() => props.removeFromCart(cartKey)}
          >
            <span className="delete is-large"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

