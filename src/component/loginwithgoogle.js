import React, { Component, useRef } from "react";
import GoogleLogin from "react-google-login";
import logo from "../images/Group 18.svg";
import axios from "axios";
import "./form.css";
import images from "../images/Gr1575.png";
import Gsmall from "../images/Gsmall.png";
import { ToastContainer, toast } from "react-toastify";

import "./googleButton.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

  const Logintbygoogle = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loginSuccess = async (res) => {
    const user_name = res.profileObj.name;
    const user_email = res.profileObj.email;
    const imageUrl = res.profileObj.imageUrl;
    const register = await axios
      .post("https://cerbosys.in:4000/draupadi/registerUser", {
        user_name,
        user_email,
      })
      .then(async (res) => {
        if (res.data.status == 200) {
          await axios
            .post("https://cerbosys.in:4000/draupadi/userLogin", {
              user_name: user_email,
            })
            .then((res) => {
              console.log(res);
              dispatch({
                type: "LOGIN_USER",
                payload: {
                  user_name,
                  user_email,
                  imageUrl,
                  token: res.data.token,
                  userId: res.data.user_id,
                  verify: true,
                },
              });
              history.push("/");
            })
            .catch((err) => console.log(err));

          history.push("/");
        } else if (res.data.status == 400) {
          await axios
            .post("https://cerbosys.in:4000/draupadi/userLogin", {
              user_name: user_email,
            })
            .then((res) => {
              console.log(res);
              dispatch({
                type: "LOGIN_USER",
                payload: {
                  user_name,
                  user_email,
                  imageUrl,
                  token: res.data.token,
                  userId: res.data.user_id,
                  verify: true,
                },
              });
              history.push("/");
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  const loginFailed = (res) => {
    console.log(res);

    toast(
      `Kindly enable  cookies in your browser `,
      {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      }
    );
  };

  return (
    <div className="relative  !h-full moBackImage">
      <img src={`${images}`} width='100%' className="imgo"/>
      <img src={`${Gsmall}`} className="imgo2"/>
      <div className="bg-[#e0e0e0] fixed flex flex-col rounded-lg shadow-2xl items-center h-[500px] w-[400px] loginCardDiv">
        <div className="card-image has-text-centered" style={{ padding: 40 }}>
          <figure className="image is-96x96 is-inline-block">
            <img
              src={`${logo}`}
              alt="profile-img"
              className="is-rounded bg-[#e0e0e0] "
            />
          </figure>
        </div>
        <h1 className="title" style={{ textAlign: "center", color: "black", fontWeight:700,fontSize:40 }}>
          Draupadi
        </h1>
        <small style={{ textAlign: "center", color: "black", fontWeight:700,fontSize:15}}>
          {" "}
          Click the Google Button to Login{" "}
        </small>
        <br />
        <div
          className="container"
          style={{ height: 48, textAlign: "center", marginTop: 30 }}
        >
          <GoogleLogin
            clientId="64796468868-r2r5st6h5re2pj32dvrukla18m9hir73.apps.googleusercontent.com"
            buttonText="Login with Google"
            style={{fontWeight:700,fontSize:20}}
            onSuccess={
              loginSuccess
            }
            onFailure={
              loginFailed
            }
            cookiePolicy={'single_host_origin'}
          ></GoogleLogin>
        </div>
      </div>
      <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
    </div>
  );
};
export default Logintbygoogle;
