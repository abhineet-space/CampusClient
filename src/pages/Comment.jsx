import React, { useState } from 'react';
import M1 from '../Asset/Profiling_Monochromatic.png'
import AO from '../Asset/Authentication_Outline.png'
import ReactDOM from 'react-dom'
import './css/comment.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook } from '@fortawesome/free-solid-svg-icons'





const Comment = () => {
const [Username, SetName] = useState("");
const[password, Setname] = useState("");

    return (
        <div>
        <div className="container">
          <div className="forms-container">
            <div className="signin-signup">
              <form className="sign-in-form">
                <h2 className="title">Sign In</h2>
                <div className="input-field">
                  <i className="bx bxs-user" />
                  <input type="Username" placeholder="Username" />
                </div>
                <div className="input-field">
                  <i className="bx bxs-lock-alt" />
                  <input type="password" placeholder="Password" />
                </div>
                <input type="submit" defaultValue="Login" className="btn solid" />
                <p className="social-text">Or sign in with social platforms</p>
                <div className="social-media">
                  <a href="#" className="social-icon">
                  {/* <FontAwesomeIcon icon={faFacebook} /> */}
                  </a>
                  <a href="#" className="social-icon">
                  {/* <FontAwesomeIcon icon={faFacebook} /> */}
                  </a>
                  <a href="#" className="social-icon">
                  {/* <FontAwesomeIcon icon={faFacebook} /> */}
                  </a>
                  <a href="#" className="social-icon">
                  {/* <FontAwesomeIcon icon={fagoogle} /> */}
                  </a>
                </div>
              </form>
              <form className="sign-up-form">
                <h2 className="title">Sign Up</h2>
                <div className="input-field">
                  <i className="bx bxs-user" />
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-field">
                  <i className="bx bxs-envelope" />
                  <input type="text" placeholder="Email" />
                </div>
                <div className="input-field">
                  <i className="bx bxs-lock-alt" />
                  <input type="password" placeholder="Password" />
                </div>
                <input type="submit" defaultValue="Sign Up" className="btn solid" />
                <p className="social-text">Or sign up with social platforms</p>
                <div className="social-media">
                  <a href="#" className="social-icon">
                    <i className="bx bxl-facebook" />
                  </a>
                  <a href="#" className="social-icon">
                    <i className="bx bxl-twitter" />
                  </a>
                  <a href="#" className="social-icon">
                    <i className="bx bxl-google" />
                  </a>
                  <a href="#" className="social-icon">
                    <i className="bx bxl-linkedin" />
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>New here?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, illo. Vitae, nesciunt.
                </p>
                <button className="btn transparent" id="sign-up-btn">Sign up</button>
              </div>
              <img src={M1} className="image" alt="" />
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>One of us?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, illo. Vitae, nesciunt.
                </p>
                <button className="btn transparent" id="sign-in-btn">Sign in</button>
              </div>
              <img src={AO} className="image" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Comment;