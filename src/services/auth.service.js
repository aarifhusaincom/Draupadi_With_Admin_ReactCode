import axios from "axios";

class AuthService {
  login(username, password) {
    const data = {
            username: username,
            password: password
        }
        console.log(data)
    return  axios("https://cerbosys.in:4000/draupadi/userLogin", {
            method: "post",
            headers: {
              "Content-Type": "application/json; charset=utf-8"
                     },
            data: JSON.stringify(data)
        })
        .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      })
        .catch(err => {
            console.log(err);
            console.log("error happed");
        });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, mobile, password) {
    const data = {
      user_name: username,
      user_mobile: mobile,
      user_password: password
    }
    console.log(data)
    return axios('https://cerbosys.in:4000/draupadi/registerUser',{
      method:"post",
     headers: {
           "Content-Type": "application/json; charset=utf-8"
                     },
      data:JSON.stringify(data)      
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  isAuthenticated(){
        return localStorage.getItem('user')
}
}
 
export default new AuthService();