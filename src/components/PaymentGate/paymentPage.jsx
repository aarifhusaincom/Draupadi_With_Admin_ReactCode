import React from 'react'
//import { MDBInput } from "mdbreact";
import{Button} from 'react-bootstrap';
import axios from 'axios';
import authHeaderuser from '../../services/auth-headers.js'

const loadScript = (src) => {
    return new Promise(resolve=>{
       const script = document.createElement('script')
       script.src = src
       document.body.appendChild(script)
       script.onload = () => {
           resolve(true)
       }
       script.onerror = () =>{
           resolve(false)
       }
    })
   }

 const __DEV__ = document.domain === 'localhost'
 const address = localStorage.getItem('address')
  const address1 = localStorage.getItem('address1')
  const address2 = localStorage.getItem('address2')
  const address3 = localStorage.getItem('address3')
  const address4 = localStorage.getItem('address4')
  const addresses = JSON.parse(address)
   const addresses1 = JSON.parse(address1)
    const addresses2 = JSON.parse(address2)
     const addresses3 = JSON.parse(address3)
      const addresses4 = JSON.parse(address4)


const Page = () =>{
    //const[online,setOnline] = React.useState(false)
    //const[cash,setCash] = React.useState(false)
    //const[status,setStatus] = React.useState('')
    const[data,setData] = React.useState([])
    //const[status,setStatus] = React.useState(false)

// function onClickOnline(e){
//     setOnline(!online)
//     setCash(false)
// }
// function onClickCash(e){
//     setCash(!cash)
//     setOnline(false)
// }

const id = localStorage.getItem('orderid')
const order = JSON.parse(id)
console.log('hi dude',order)
const user = localStorage.getItem('user')
const use = JSON.parse(user)


React.useEffect(() => {
    //    axios.get(`https://45.80.152.232:2000/mrsharvis/getAllOrdersByOrderId?order_id=${order}`,{headers:authHeaderuser()})
    axios.get(`https://cerbosys.in:4000/draupadi/getAllOrdersByOrderId?order_id=${order}`,{headers:authHeaderuser()})
    .then(res=> {
        setData(res.data.data[0])
        console.log("setData",res)})
    }, [order])
    
    
    async function displayRazorpay(){
    // console.log("localband", localStorage.getItem("address1"));
    

        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if(!res){
            alert('Razorpay failed')
            return
        }
         
      var paynow = localStorage.getItem("paynow")
      console.log("paynow", paynow)
      paynow = paynow * 100;
          const options = {
    "key": __DEV__ ? "rzp_test_2bQ3mYU4FM9qdV":"rzp_live_MtYL5wjLaA9IKU", 
    "amount": paynow, 
    "currency": "INR",
    "name": "Draupadi",
    "description": "Test Transaction",
    "image": 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/1200px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg',
    "order_id": data.orderId ,
    "handler": function (response){
        console.log(response)
        alert(response.razorpay_payment_id);
        localStorage.setItem('payid',response.razorpay_payment_id);
        alert(response.razorpay_amount);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
         if (response.razorpay_payment_id){
              const address = localStorage.getItem('address')
              const addressess = JSON.parse(address)
   //axios.all([axios.post('https://45.80.152.232:2000/mrsharvis/insertRazorpayDetails',{
    axios.all([axios.post('https://cerbosys.in:4000/draupadi/insertRazorpayDetails',{
        razorpay_paymentid:response.razorpay_payment_id,
        org_name:'Razorpay',
        status:'paid',
        payableAmount:data.totalAmount,
        shipping_id:addressess
    },{headers:authHeaderuser()}),
       axios.post('https://cerbosys.in:4000/draupadi/updatePaymentStatus',{order_status:'Order Placed',order_id:order,payment_status:'paid'},{headers:authHeaderuser()}),
      axios.post('https://cerbosys.in:4000/draupadi/generateInvoice',{order_id:order,shipping_id:addresses || addresses1 || addresses2 || addresses3 || addresses4,total_amount:1567,amount_payable:1000,payment_mode:"Razorpay"},{headers:authHeaderuser()}) 
   ]).then(res=>console.log(res))
         }
    },
    "prefill": {
        "name": use.user,
        // "email": "gaurav.kumar@example.com",
        // "contact": "9999999999"
    }
};


const paymentObject = new window.Razorpay(options);
paymentObject.on('payment.failed', function (response){
    console.log(response)
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});
paymentObject.open();

}


// if(payid){
//     const address = localStorage.getItem('address')
//     const addressess = JSON.parse(address)
//     axios.post('http://45.80.152.232:2000/mrsharvis/insertRazorpayDetails',{
//         razorpay_paymentid:payid,
//         org_name:'Razorpay',
//         status:'paid',
//         payableAmount:data.totalAmount,
//         shipping_id:addressess
//     },{headers:authHeaderuser()}).then(res=>console.log(res))
// }



    return(
        <>
        <div className="hero is-black">
        <div className="hero-body container">
          <h4 className="title">Payment Page</h4>
        </div>
      </div>
     <div className="col-md-12">
      <div className="card card-container">
      {/* <MDBInput onClick={onClickOnline} checked={online}  label="Online" type="radio"
        id="radio1" />
      <MDBInput onClick={onClickCash} checked={cash} label="COD" type="radio"
        id="radio2" /> */}
        <br/>
         <Button onClick={displayRazorpay}>Open Razorpay To Pay</Button>
         {/* {cash && (<><Button>Place Order</Button></>)}
        {!cash && !online && (<h1>Choose payment option to Place Order </h1>)} */}
    <div className="col-sm-4"></div>
          </div>
    </div>
    </>
    )
}
export default Page