import React, { useState } from "react";
import {FullDiv,FormDiv,FormElem,Feild,SignBtn,LogoDiv} from './signElem';
import {ReactComponent as Logo} from '../../images/dp.svg';
import Admin from '../Admin';
import {Link} from 'react-router-dom'

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
    return(
        <FullDiv>
        <table>
        <tr>
        <th>
        <LogoDiv>
        <Logo/>
        </LogoDiv>
        </th>
        <th>
        <FormDiv>
        <FormElem onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <Feild placeholder='User ID/Email ID' type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} /><br/><br/>
        <Feild type='password' placeholder='Password' value={password}
            onChange={(e) => setPassword(e.target.value)}/><br/><br/>
        <Link to='/AdminDashboard'><SignBtn type="submit" onClick={Admin} disabled={!validateForm()}> Sign In </SignBtn></Link><br/>
        <small Style='font-size:20px;color:black;'>Forgot password?</small><br/>
        <small Style='font-size:20px;color:black;'>Forgot User ID? </small>
        </FormElem>
        </FormDiv>
        </th>
        </tr>
        </table>
        </FullDiv>
    )
}

export default Form;