import React from 'react';
import "./Socialbtn.css"
const Socialbtn = () => {
    return (
        <div className=" social-button-container w-50 mt-3">
        <div className="">
          <img
          
            className=" social-button"
            src="https://i.ibb.co/gSTHXZJ/google-btn.png"
            alt=""
          />
        </div>
        <div className="">
          <img
            className=" social-button"
            src="https://i.ibb.co/g9f4P0S/github-btn.png"
            alt=""
          />
        </div>
      </div>
    );
};

export default Socialbtn;