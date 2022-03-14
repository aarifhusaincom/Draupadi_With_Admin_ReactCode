import React from "react";
import DesignItem from "./designPage";
// import authHeaderuser from '../../services/auth-headers'
import axios from 'axios'
//import Footer from '../Footer/index'

    
const DesignList = props => {
//  const[click,setClick] = React.useState(false)
  const [data,setData] = React.useState([])
  //const [data,setData] = React.useState([])

//   const getproduct = id => {
//   axios.get(`https://45.80.152.232:4000/draupadi/getProductById?product_id=${id}`,{headers:authHeaderuser()})
//   .then(res=>{
//   setState(res.data.data);
//   setClick(true);
//   })
// }
React.useEffect(() => {
     //axios.get('https://45.80.152.232:4000/draupadi/getAllCustomisedDesigns')
     axios.get('https://cerbosys.in:4000/draupadi/getAllCustomisedDesigns')
     .then(res=>{
             setData(res.data.data);
             console.log(res.data.data);
             }
             )
  }, [])

//  React.useEffect(() => {
//          axios.get('https://45.80.152.232:4000/draupadi/getAllCategories').then(res=>setData(res.data.data))
//      }, [])

  return (
    <>
    <div className='container' style={{margin:35}}>
        <div className='container'>
      <div className='row'>
      <div className='col-lg-2'>
      <h2 className='title' style={{color:'#BA7D82',fontSize:20,fontWeight:500}}><medium>Designs</medium></h2>
      </div>
      <div className='col'>
        <div className="column columns is-multiline">
       
          {data && data.length ? (
            data.map((product, index) => (
              <>
              <DesignItem
                data={product}
                key={index}
              />
          
     </>
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No Designs found!
              </span>
            </div>
          )}
        </div>
        </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default DesignList;