import React from 'react';
import {PcategoryContainer,Shortlist,Headertwo,Pspan,ImageContainer,Scrolldiv,Image,SmallImage,Pheader,Pname,Plist,Productpara,DetailsContainer} from './productsCategoryElements';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar';
class Pcategory extends React.Component{
    state = {
        bags:[{
            'id':'1',
            'item':'Products',
            'title':'Bags',
            'src':['https://m.media-amazon.com/images/I/719r0MVQ9IL._UX500_.jpg','https://m.media-amazon.com/images/I/719r0MVQ9IL._UX500_.jpg'],
            'description':'',
            'content':'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
            'price': '2345/-',
            'color':['red','pink','white'],
            'count':'1',
            'subcategory':['Handbags','Luggage Bags','Duffle','Bow Bags','Bow Bag and Braided Strap','Bow Bag with Plain Strap','Bucket Bags','tote bags','Tote bag with leather Strap','Braided leather Strap','Border Tote Bag','Wooden Handle','Patch work Bag','Criss cross bag in multi color','double border bag','Outside Strap bag','veggie bag','Pocket bags'],
        }]
    }

    render(){
        const {bags} = this.state;
    return(
        <>
        {bags.map(items => {
            return(
                <>
                <NavBar/>
                <div Style='width:1150px;text-align:center; top:120px;left:90px;position:relative;border-bottom-style:dashed;border-bottom-width:thin;border-bottom-color:#ff1a1a;'>
                <p><Link to='/'>Home</Link>/<Link>{items.title}</Link>/<Link>{items.subcategory[0]}</Link></p>
                </div>
                <div className='pc' Style='width:900px;position:relative;top:40px;left:50px;height:900px;margin:80px;'>
                <table>
                <tr>
                <th>
                <PcategoryContainer>
                <Pheader>{items.item}</Pheader>
                <Pname>{items.title}</Pname>
                <ul Style='margin: 0.75em 0;padding: 0 1em;list-style: none;'>
                <Plist>{items.subcategory[0]}</Plist>
                <Plist>{items.subcategory[1]}</Plist>
                <Plist>{items.subcategory[2]}</Plist>
                <Plist>{items.subcategory[3]}</Plist>
                <Plist>{items.subcategory[4]}</Plist>
                <Plist>{items.subcategory[5]}</Plist>
                <Plist>{items.subcategory[6]}</Plist>
                <Plist>{items.subcategory[7]}</Plist>
                <Plist>{items.subcategory[8]}</Plist>
                <Plist>{items.subcategory[9]}</Plist>
                <Plist>{items.subcategory[10]}</Plist>
                <Plist>{items.subcategory[11]}</Plist>
                <Plist>{items.subcategory[12]}</Plist>
                <Plist>{items.subcategory[13]}</Plist>
                <Plist>{items.subcategory[14]}</Plist>
                <Plist>{items.subcategory[15]}</Plist>

                </ul>
                </PcategoryContainer>
                </th>
                <th>
                <ImageContainer>
                <Image src={items.src[0]} alt='fb'/>
                </ImageContainer>
                <Scrolldiv>
                <SmallImage src={items.src[1]} alt='gh'/>
                <SmallImage src={items.src[1]} alt='gh'/>
                <SmallImage src={items.src[1]} alt='gh'/>
                <SmallImage src={items.src[1]} alt='gh'/>
                </Scrolldiv>
                </th>
                <th>
                <DetailsContainer>
                <Productpara>{items.subcategory[0]} by Draupadi</Productpara>
                <h3 Style='font-size:15px;'>category | {items.subcategory[0]}</h3>
                <h3 Style='font-size:15px;'>lku      | {items.id}</h3>
                <Pspan>{items.price}</Pspan><p><small Style='color:grey;position:relative;top:-5px;left:70px;'>inclusive of all taxes</small></p><Shortlist/>
                <button Style='position:relative;top:-50px;left:200px;border-radius:10px;width:100px;height:30px;background:#ff1a1a;border:2px solid black;'> + Add to cart </button> 
                <Headertwo>Description</Headertwo>
                <p>{items.content}</p>
                </DetailsContainer>
                </th>
                </tr>
                </table>
                </div>
                </>
            )
        })}
        </>
    );
}
}
export default Pcategory;