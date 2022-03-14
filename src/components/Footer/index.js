import React, { useState } from "react";
import {
  FooterDiv,
  FooterBtn,
  FooterInput,
  Information,
  Contacts,
  About,
  Updates,
  FooterLink,
  FooterHeader,
  FooterHeader1,
} from "./footerElements";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { SiFacebook } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { instagram } from "../Hero/Icons";
import "./footer.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [readMore, setReadMore] = useState(false);
  const [mail, setMail] = useState("");
  const notify = () => toast("Subscribed Succesfully...🥰😍 !");

  const subsCribe = async (e) => {
    e.preventDefault();
    return await axios
      .post("https://cerbosys.in:4000/draupadi/insertSubscription", {
        subscription_email: mail,
      })
      .then((res) => {
        console.log("subscribe", res);
        notify();
        setMail("");
      });
  };

  const onchangeMail = (e) => {
    const mail = e.target.value;
    setMail(mail);
  };

  const extraContent = (
    <div>
      <p className="extra-content">
        The idea behind establishing this unit was to provide an avenue of
        employment to the under-privileged to uplift and empower them while
        creating quality products. Draupadi upcycles the Sari wastes to develop
        vibrant and trendy bags & accessories. These bags & accessories are made
        by the underprivileged women residing in the nearby villages of
        Mathura..
      </p>
    </div>
  );

  const linkName = readMore ? "Read Less << " : "Read More >> ";
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#f9f7f3" }}>
        <div className="container" style={{ backgroundColor: "#f9f7f3" }}>
          <div className="row" id="foott" style={{ paddingTop: 20 }}>
            <div className="col py-2" style={{ marginRight: -15 }}>
              <strong>
                <FooterHeader1 style={{ fontSize: "18px" }}>Info</FooterHeader1>
                {/* <FooterLink  >FAQ</FooterLink> */}
                <FooterLink to="/shipping">Shipping & Returns</FooterLink>
                <FooterLink to="/termsandconditions">
                  Terms & Condition
                </FooterLink>
                <FooterLink to="/privacyPolicy">Privacy Policy</FooterLink>
                {/* <li>
        <FooterLink>Refund Policy</FooterLink>
        </li> */}
                {/* <li>
        <FooterLink>In The News</FooterLink>
        </li> */}
              </strong>
            </div>
            <div className="col py-2">
              <strong>
                <FooterHeader style={{ fontSize: "18px" }}>
                  Reach Us
                </FooterHeader>
                <br />
                <p Style="text-align:left;position:relative;color:#0404040;font-size:14px;font-family:Amiri,serif;">
                  Mon - Sat | 9 AM - 6 PM (IST){" "}
                </p>
                <a
                  Style="color: #404040;
display: flex;
text-decoration: none;
text-align:left;
font-size: 14px;
font-family:Amiri,serif;
font-style: normal;
font-weight:100%;
position:relative;
color: #404040;
justify-content:space-between;"
                  href="tel:+919953730501"
                >
                  +91 6396173148
                </a>
                <a
                  Style="color: #404040;
display: flex;
text-decoration: none;
text-align:left;
padding: 1rem;
font-size: 14px;
font-family:Amiri,serif;
font-style: normal;
font-weight:100%;
position:relative;
left:-15px;
justify-content:space-between;"
                  href="mailto:bagsbydraupadi@gmail.com"
                >
                  bagsbydraupadi@gmail.com
                </a>
              </strong>
              <div
                style={{
                  width: "60px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <a
                  style={{
                    textDecoration: "none",
                    color: "blue",
                    fontSize: "21px",
                    marginTop: "-2px",
                  }}
                  href="https://business.facebook.com/BagsByDraupadi/?fref=nf"
                >
                  <SiFacebook />
                </a>
                <a
                  style={{ textDecoration: "none", fontSize: "18px" }}
                  href="https://instagram.com/bagsbydraupadi?utm_medium=copy_link"
                >
                  {" "}
                  {instagram}{" "}
                </a>
              </div>
            </div>
            <div className="col-4 py-2" style={{ marginRight: 25 }}>
              <FooterHeader style={{ fontSize: "18px" }}>About </FooterHeader>
              <br />
              <strong style={{ color: "#404040" }}>
                <p
                  className="about-content"
                  Style="text-align:justify;position:relative;font-size:14px; word-spacing:5px;
        font-family:Amiri,serif; font-style: normal;"
                >
                  Draupadi was established in February 2021 at Mathura, the
                  homeland and birthplace of Lord Krishna. Mathura is known for
                  its textile industry and especially for Sari Printing &
                  Manufacturing. Most of the villages around Mathura have
                  conditions of poverty leading to malnutrition, child labour,
                  scarce resources for an average family size of 6-8, and lack
                  of purpose to avail education, especially for the girl
                  child...
                  <a
                    className="read-more-link"
                    onClick={() => {
                      setReadMore(!readMore);
                    }}
                  >
                    {linkName}
                  </a>
                  {readMore && extraContent}
                </p>
              </strong>
            </div>
            <div className="col py-2">
              <FooterHeader style={{ fontSize: "18px" }}>
                News & Update
              </FooterHeader>
              <br />
              <strong style={{ color: "#404040", fontSize: "12px" }}>
                <p Style="font-size:14px;text-align:left;font-family:Amiri,serif; font-style: normal;">
                  {" "}
                  Sign up to get the latest sales, new releases and more...
                </p>
                <br />
              </strong>
              <form onSubmit={subsCribe}>
                <input
                  class="input is-small subbtn"
                  style={{ maxWidth: "100%", fontSize: "12px" }}
                  placeholder="Enter Email Address..."
                  onChange={onchangeMail}
                  type="email"
                  value={mail}
                  required
                />
                <br />
                <button
                  type="submit"
                  className="button is-normal is-dark subbtn"
                  style={{ minWidth: "100%", marginTop: 15, fontSize: "14px" }}
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid d-flex px-5"
        style={{
          justifyContent: "center",
          backgroundColor: "#f9f7f3",
          height: "70px",
          paddingTop: "30px",
          borderTop: "3px  white solid",
          fontSize: "12px",
          fontWeight: "700",
          fontStyle: "normal",
        }}
      >
        {" "}
        <div>© 2021, Draupadi </div> &nbsp;{" "}
        <div>
          Powered By{" "}
          <a
            href="https://cerbosys.com/"
            style={{ textDecoration: "none", color: "blue" }}
          >
            Cerbosys
          </a>
        </div>{" "}
      </div>
    </>
  );
};
export default Footer;
