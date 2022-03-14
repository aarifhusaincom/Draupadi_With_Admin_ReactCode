import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./toppromo.css";





const TopNav = () =>{
      
    const[offer, setOffer] = useState([]);
    const[len, setLen] = useState(null)


    useEffect(() => {
    
        axios.get("https://cerbosys.in:4000/draupadi/getActiveOffers").then(res=>{
            console.log("getAllOffers", res.data.message)
            if(res.data.message=="No Detail Available"){
                console.log("nothing")
            }else{
            setLen(res.data.data.length);
            setOffer(res.data.data);
            }
        })
    }, []);


    return(
        // <marquee behavior="alternate" width="100%" scrollamount="20"  className="scrolldiv">
             <>

<div id="myCarousel" class="carousel slide" data-ride="carousel">
<div class="carousel-inner">


<div className='offerstrip item active'  >
        <div className='offerstrip_content' style={{backgroundColor:"white", height:"30px"}}>Check offers DraupadibyBags</div>
        </div> 


{offer.map((data, index)=>{
    return <div className='offerstrip item ' key={index} >
        <div className='offerstrip_content'>Use code "{data.offer_code}" for {data.offer_description}.</div>
        </div> 
})}
 


       

        {/* <div className='offerstrip item' >
        <div className='offerstrip_content' >Use code "MALAIKA30" to avail flat 30% off ( Excluding offer products & Kits ).</div>
         </div> */}

</div>
        </div>
     

        </>
       
    )
}
export default TopNav;