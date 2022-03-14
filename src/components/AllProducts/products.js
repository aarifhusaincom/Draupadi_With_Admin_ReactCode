import React from 'react';
//import './styles.css';
//import {Shortlist} from './style'
import 'bulma/css/bulma.min.css';
import NavBar from '../NavBar/index'
import Footer from '../Footer/index'


class ProductTile extends React.Component {
    render() {
        return (
            <div class="card" style={{position:'relative',top:100,margin: 20 }}>
                <div key={this.props.product.id} class="card-image">
                  <figure class="image is-4by3">
                    <img src={this.props.product.image} alt="Placeholder"></img>
                  </figure>
                </div>
                <div class="card-content">
                    <p class="title product-title">{this.props.product.name}</p>
                     <span>${this.props.product.cost}</span>
                    <div class="content">
                        {this.props.product.short_description}
                        <br></br>
                    </div>
                    <button class="button is-primary" href={"product.html?id=" + this.props.product.id.toString()} target="_blank">
                        <strong>More Details</strong></button>
                </div>
            </div>
        )
    }
}
export default class ProductCatalog extends React.Component {
    renderTile = (current_item) => {
        return <ProductTile product={current_item}></ProductTile>;
    }

    render() {
        let tiles = [];
        for (let i = 0; i < this.props.products.length; i++) {
            const current_item = this.props.products[i];
            tiles.push(this.renderTile(current_item));
        }
        return (<>
        <NavBar/>
        <div Style='display: grid; grid-template-columns: auto auto auto;margin:40px;'>
        {tiles}
        </div><br/><br/>
        <Footer/>
        </>
        )
    }
 }
// import authHeader from '../../AdminPanel/Pages/auth-headers'
// const React = require('react');
// const ReactDOM = require('react-dom');
// const axios = require('axios');
// const createClass = require('create-react-class');


// // These should probably be imported from a constants.js file
// const CATEGORIES_ENDPOINT = 'http://45.80.152.232:2000/mrsharvis/getAllCategories';
// const SUBCATEGORIES_ENDPOINT = 'http://45.80.152.232:3000/mrsharvis/getAllSubcategoriesByCategory?category_id=1'
// const PRODUCTS_ENDPOINT = 'http://45.80.152.232:3000/mrsharvis/getAllProducts?category_id=1&subcategory_id=1';

// const NavContainer = createClass({
//   // All your state lives in your topmost container and is
//   // passed down to any component that needs it
//   getInitialState() {
//     return {
//       categories: [],
//       subcategories:[],
//       items: [],
//       selectedCategoryId: null,
//       selectedSubCategoryId:null
//     }
//   },

//   // Generic method that's used to set a selectedCategoryId
//   // Can now be passed into any component that needs to select a category
//   // without needing to worry about dealing with events and whatnot
//   selectCategory(category) {
//     this.setState({
//       selectedCategoryId: category
//     });
//   },
  
//    selectSubCategory(subcategory) {
//     this.setState({
//       selectedSubCategoryId: subcategory
//     });
//   },

//   componentDidMount() {
//     this.serverRequest = axios.all([
//       axios.get(CATEGORIES_ENDPOINT,{headers:authHeader()}),
//         axios.get(SUBCATEGORIES_ENDPOINT,{headers:authHeader()}),
//       axios.get(PRODUCTS_ENDPOINT,{headers:authHeader()})
//     ])
//     .then(axios.spread((categoriesResponse,subresponse, itemsResponse) => {
//       console.log('Categories', categoriesResponse.data.data);
//        console.log('subc',subresponse.data.data)
//       console.log('Item', itemsResponse.data.data);

//       // This `this` should work due to ES6 arrow functions
//       this.setState({
//         categories: categoriesResponse.data.data,
//         subcategories: subresponse.data.data,
//         items : itemsResponse.data.data
//       });
//     }));
//   },

//   componentWillUnmount() {
//     this.serverRequest.abort();
//   },

//   render() {
//     // ABD: Always Be Destructuring
//     const {
//       categories,
//       subcategories,
//       items,
//       selectedCategoryId,
//       selectedSubCategoryId
//     } = this.state;

//     return (
//       <div className="navigation">
//         <h1>
//           Store
//         </h1>

//         <NavigationCategoryList
//           categories={categories}
//           // Pass the select function into the category list
//           // so the category items can call it when clicked
//           selectCategory={this.selectCategory} />

//         <NavigationSubCategoryList
//           subcategories={subcategories}
//           // Pass the selected category into the list of items
//           // to be used for filtering the list
//           selectedCategoryId={selectedCategoryId} 
//           selectSubCategory={this.selectSubCategory}/>
//           <NavigationItemsList
//           items={items}
//           // Pass the selected category into the list of items
//           // to be used for filtering the list
//           selectedSubCategoryId={selectedSubCategoryId} />
//       </div>
//     );
//   }
// });

// const NavigationCategory = createClass({
//   // Prevent natural browser navigation and
//   // run `selectCategory` passed down from parent
//   // with the id passed down from props
//   // No querying DOM for info! when props have the info we need
//   handleClick(e) {
//     const { id, selectCategory } = this.props;
//     // Handle the event here instead of all the way at the top
//     // You might want to do other things as a result of the click
//     // Like maybe:
//     // Logger.logEvent('Selected category', id);
//     e.preventDefault();
//     selectCategory(id);
//   },

//   render() {
//     const { id, title } = this.props;
//     return (
//       <div className="navigationLink">
//         <a href={id} onClick={this.handleClick}>
//           {title}
//         </a>
//       </div>
//     );
//   }
// });
// const NavigationCategoryList = createClass({
//   // If you put your mapping method out here, it'll only
//   // get instantiated once when the component mounts
//   // rather than being redefined every time there's a rerender
//   renderCategories() {
//     const { selectCategory, title } = this.props;

//     return categories.map(category => {
//       const { category_id, category_name } = category;
//       return (
//         <NavigationCategory
//           // Every time you have a list you need a key prop
//           key={category_id}
//           title={category_name}
//           id={category_id}
//           selectCategory={selectCategory} />
//       );
//     });
//   },

//   render() {
//     return (
//       <div>
//         <div className="navigationCategory">
//           {this.renderCategories()}
//         </div>
//       </div>
//     );
//   }
// });

// const NavigationSubCategory = createClass({
//   // Prevent natural browser navigation and
//   // run `selectCategory` passed down from parent
//   // with the id passed down from props
//   // No querying DOM for info! when props have the info we need
//   handleClick(e) {
//     const { id, selectSubCategory } = this.props;
//     // Handle the event here instead of all the way at the top
//     // You might want to do other things as a result of the click
//     // Like maybe:
//     // Logger.logEvent('Selected category', id);
//     e.preventDefault();
//     selectSubCategory(id);
//   },

//   render() {
//     const { id, title } = this.props;
//     return (
//       <div className="navigationLink">
//         <a href={id} onClick={this.handleClick}>
//           {title}
//         </a>
//       </div>
//     );
//   }
// });

// const NavigationSubCategoryList = createClass({
//   // If you put your mapping method out here, it'll only
//   // get instantiated once when the component mounts
//   // rather than being redefined every time there's a rerender
//   renderSubCategories() {
//     const { selectSubCategory, title } = this.props;

//     return subcategories.map(subcategory => {
//       const { subcategory_id, subcategory_name} = subcategory;
//       return (
//         <NavigationSubCategory
//           // Every time you have a list you need a key prop
//           key={subcategory_id}
//           title={subcategory_name}
//           id={subcategory_id}
//           selectSubCategory={selectSubCategory} />
//       );
//     });
//   },

//   render() {
//     return (
//       <div>
//         <div className="navigationCategory">
//           {this.renderSubCategories()}
//         </div>
//       </div>
//     );
//   }
// });



// const NavigationItemLink = createClass({
//   render() {
//     const { name } = this.props;
//     return (
//       <div className="navigationSubCategory" id={name}>
//         {name}
//       </div>
//     );
//   }
// });

// const NavigationItemsList = createClass({
//   renderItemCategories() {
//     const { selectedSubCategoryId, items } = this.props;
//     // This is the key to filtering based on selectedCategoryId
//     return items.filter(item => {
//       // Checking all the categories in the item's categories array
//       // against the selectedCategoryId passed in from props
//       return items.categories.some(category => {
//         return category.id === selectedSubCategoryId;
//       });
//     })
//     // After filtering what you need, map through
//     // the new, shorter array and render each item
//     .map(item => {
//       const { title, link, id } = item;
//       return (
//         <NavigationItemLink
//           key={id}
//           name={title}
//           link={link} />
//       );
//     });
//   },

//   render() {
//     return (
//       <div className="subCategoryContainer">
//         {this.renderItemCategories()}
//       </div>
//     );
//   }
// });

// export default NavContainer
//import React, { Component } from 'react';
//import inventory, { categories } from './inventory';

// import Button from './button';
// import Item from './ProductItem';
// import authHeader from '../../AdminPanel/Pages/auth-headers'

// //import './App.css';

// class ProductTile extends Component {
//   state = {
//     currentCat: [],
//     categories: []
//   };

//   getCategories() {
//       axios.get('http://45.80.152.232:2000/mrsharvis/getAllCategories',{headers:authHeader()})
//       .then(res=>{
//           this.setState({
//               categories:res.data.data
//           })
//       })

//       axios.get(`http://45.80.152.232:3000/mrsharvis/getAllSubcategoriesByCategory?category_id=${this.state.categories.category_id}`,{headers:authHeader()})
//       .then(res=>{
//           this.setState({
//               currentCat:res.data.data
//           })
//       })
//     return this.state.categories.category_name.map(cat => (
//       <span key={cat}>
//         <Button
//           value={cat}
//           classes={this.buttonClasses(cat)}
//           onClick={c => this.changeCategory(c)}
//         />
//       </span>
//     ));
//   }

//   getInventory() {
//     const { categories, currentCat } = this.state;

//     return currentCat
//       .filter((item) => {
//         let selected = false;
//         if (categories.length === 0) {
//           selected = true;
//         } else {
//           categories.forEach((cat) => {
//             if (cat === item.category_name) {
//               selected = true;
//             }
//           });
//         }
//         return selected;
//       })
//       .map(({
//         id,
//       }) => (
//         <Item key={id} name={name} price={price} desc={description} image={image} />
//       ));
//   }

//   buttonClasses(cat) {
//     let active = false;
//     const { currentCat } = this.state;

//     currentCat.forEach((c) => {
//       if (c === cat) {
//         active = true;
//       }
//     });

//     return active ? 'button active' : 'button';
//   }

//   allButtonClasses() {
//     const { currentCat } = this.state;
//     return currentCat.length === 0 ? 'button active' : 'button';
//   }

//   changeCategory(cat) {
//     let { currentCat } = this.state;
//     let found = false;

//     if (cat !== 'All') {
//       for (let i = 0; i < currentCat.length; i += 1) {
//         if (currentCat[i] === cat) {
//           found = true;
//           currentCat.splice(i, 1);
//         }
//       }

//       if (!found) {
//         currentCat.push(cat);
//       }
//     } else {
//       currentCat = [];
//     }

//     this.setState({
//       currentCat,
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Select Categories</h1>

//         <div>
//           <span key="All">
//             <Button
//               value="All"
//               classes={this.allButtonClasses()}
//               onClick={c => this.changeCategory(c)}
//             />
//           </span>
//           {this.getCategories()}
//         </div>

//         <div>{this.getInventory()}</div>
//       </div>
//     );
//   }
// }

// export default ProductTile;