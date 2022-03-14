import React, { useEffect, useState } from "react";
import { Row, Form, Col, Table } from "react-bootstrap";
import axios from "axios";
import authHeaderuser from "../../services/auth-headers";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import './shippingAddress.css';

export default function EditInfo() {

const dispatch= useDispatch()
  const [name, setName] = useState("");

  
  const [mobile, setMobile] = useState("");
  
 
  const [file, setFile] = useState([]);

  const user = useSelector((state) => state.user);
useEffect(async () => {
  await axios.get("https://cerbosys.in:4000/draupadi/getUserForUpdate", {
    headers: {
      // "Content-Type": "application/json",
      Authorization: `Bearer ${user?.token}`,
    },
  }).then(res=> {console.log("taranjeet-------",res.data.data[0])

    setName(res.data.data[0].user_name)
    setMobile(res.data.data[0].user_mobile)
   


} )
 
}, [])



console.log(mobile);

 


 





// 200-OK response aa raha hai ek baar fir hit kar

  async function handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
   
    formData.append("user_image", file);
    formData.append("user_name", name)
    formData.append("user_id", user.userId)
    formData.append("user_mobile", mobile)
   
  
    console.log(formData);
    //  return axios.post('https://45.80.152.232:4000/draupadi/updateUser',{
    return await axios
      .post(
        "https://cerbosys.in:4000/draupadi/updateUser",
        // {
        // user_mobile: 9877155245,
        // formData
        // }
        formData,
        {
          headers: {
            // "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          },
        }
      )
      .then((res) => {
    
        console.log(res);
        dispatch({type:"LOGIN_USER",
      payload:{user_name:name,mobile:mobile}})
      setName("")
      setMobile("")
      setFile("")
      });
  }

  



  return (
    <div className="container" style={{ position: "relative" }}>
      <div
        className="hero is-white"
        Style="border-bottom-style:dashed;border-bottom-width:thin;border-bottom-color:#BA7D82;"
      >
        <div className="hero-body container">
          <h4 className="title">User Information</h4>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col col-lg-3 editInfoDiv">
          <div className="container">
            <Link to="/profile" Style="text-decoration: none;">
              <h2 className="title" style={{ color: "#B77304", fontSize: 21 }}>
                <FaLongArrowAltLeft />
                Back to Account
              </h2>
            </Link>
          </div>
        </div>
        <div className="col">
          <Form onSubmit={handleSubmit} encType="multipart/form-data">
            <Col>
              <Row className="mb-4">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    // placeholder="Your name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} md="4" controlId="validationCustom08">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="text"
                    // placeholder="mobile"
                    value={mobile}
                    onChange={(e)=>setMobile(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid mobile.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
            
            </Col>

            <Col>
              <Row className="mb-4">
                <Form.Group as={Col} md="4" controlId="validationCustom08">
                  <input
                    type="file"
                    placeholder="Email"
                    onChange={(e)=>setFile(e.target.files[0])}
                  />
                </Form.Group>
              </Row>
            </Col>

            <button
              className="button is-normal"
              Style="background-color:#BA7D82;color:white;border-radius:15px;"
              style={{ width: 200 }}
              type="submit"
              //onClick={()=>{}}
            >
              UPDATE
            </button>
            <br />
            <br />
          </Form>
        </div>
      </div>
    </div>
  );
}
