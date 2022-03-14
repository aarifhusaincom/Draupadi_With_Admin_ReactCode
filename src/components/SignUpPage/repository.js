import axios from 'axios';

//const BASE_URL = 'http://localhost:5000';

export function getProducts() {
        return axios.get('/getAllProducts')
                .then(response => response.data);
}
export function getCartProducts(cart) {
        return axios.post('/getAllCartProducts', {cart})
                .then(response => response.data);
}
export function login (data) {
        const datas =  { username: data.username, password: data.password }
  //return axios.post('http://45.80.152.232:2000/mrsharvis/userLogin',datas,{
        return axios.post('https://cerbosys.in:4000/draupadi/userLogin',datas,{
                            mode:'no-cors',
                            headers:{
                                    "Content-Type":"application/json; charset=utf-8"
                            }
                    })
    .then(response => {
       localStorage.setItem('user', response.data.token);
       //localStorage.setItem('x-access-token-expiration', 
                           // Date.now() + 2 * 60 * 60 * 1000);
      return response.data
      })
    .catch(err => Promise.reject('Authentication Failed!'));
}

export function AdminLogin (data) {
  return axios.post('/adminLogin', 
                    { username: data.username, password: data.password })
    .then(response => {
       localStorage.setItem('user', response.data.token);
       //localStorage.setItem('x-access-token-expiration', 
                           // Date.now() + 2 * 60 * 60 * 1000);
      return response.data
      })
    .catch(err => Promise.reject('Authentication Failed!'));
}
// export function pay (data) {
//         return axios.get(`${BASE_URL}/api/pay`, 
//             { params: { 'x-access-token': localStorage.getItem('x-access-token')} })
//                 .then(response => response.data)
//                 .catch(err => Promise.reject(err));
// }
export function isAuthenticated(){
        return localStorage.getItem('x-access-token') && localStorage.getItem('x-access-token-expiration') > Date.now()
}