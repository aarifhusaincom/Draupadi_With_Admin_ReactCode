import React from 'react';
import { ProductContainer,ProductHeading,ProductWrapper,ProductImg,ProductCard } from './productElements';
import {Link} from 'react-router-dom'
import axios from 'axios'
import './data.css';

const Products = React.memo(() => {
    const [data,setData] = React.useState([])
    React.useEffect(() => {
    
      axios.get('https://cerbosys.in:4000/draupadi/getProductsData').then(res=>setData(res.data.data))
    }, [])
    return(
        <ProductContainer id='pdiv' className='pcontainer'>
        <ProductHeading >Featured Products</ProductHeading>
        <ProductWrapper className='home-product-div'>
         {   
         data.slice(0,9).map(e=>{
             return(
                 <>
                 <ProductCard key={e.product_id}>
                 <Link to='/products'>
                     <ProductImg src={`https://cerbosys.in:4000${e.product_image.substr(8)}`} alt='DP'/></Link>
                 </ProductCard>
                 </>
             )
         })}
        </ProductWrapper>
        </ProductContainer>
    )
})
export default Products;