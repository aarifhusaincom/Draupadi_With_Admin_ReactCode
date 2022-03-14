import React,{Component} from 'react';
import axios from 'axios';

class Sign extends Component {
//   handleChange = (event) => {
//         setState({
//             [event.target.name]: event.target.value,
//         });
//         console.log(state);
//     }

 handleSubmit = (e) =>{
    e.preventDefault();
    const data = {
        user_name:this.username,
        user_mobile:this.phone,
        user_email:this.email,
        user_password:this.password,
        user_confirmPassword: this.confirmPassword
    }
    axios.post('/registerUser',data)
    .then(res=>{
    console.log(res.data);
    console.log(res.status);})
    .catch(err=>console.log(err))
}
render(){
    return(
        <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>
        <div  className='form-group'>
        <label>Name</label>
        <input id='user_name' type='text' name='username' className='form-control' placeholder='Name..' onChange={(e)=> this.username = e.target.value}/>
        </div>
        <div  className='form-group'>
        <label>Phone</label>
        <input id='user_phone' type='text' name='phone' className='form-control' placeholder='Phone' onChange={(e)=> this.phone = e.target.value}/>
        </div>
        <div  className='form-group'>
        <label>Email</label>
        <input id='user_email' type='text' name='email' className='form-control' placeholder='Email' onChange={(e)=> this.email = e.target.value}/>
        </div>
        <div  className='form-group'>
        <label>Password</label>
        <input id='user_password' type='password' name='password' className='form-control' placeholder='Password' onChange={(e)=> this.password = e.target.value}/>
        </div>
        <div  className='form-group'>
        <label>Confirm Password</label>
        <input id='user_confirmPassword' type='password' name='confirmPassword' className='form-control' placeholder='confirm password' onChange={(e)=> this.confirmPassword = e.target.value}/>
        </div>
        <button className='btn btn-primary btn-black' type="submit"> Submit </button>
        </form>
    )
}
}


export default Sign;