import React, { useState } from "react";
import { EmailIcon } from "../../assets/email.icon";
import { OpendEyeIcon } from "../../assets/opened-eye.icon";
import { ClosedEyeIcon } from "../../assets/closed-eye.icon";
import "./login.style.css";
export const Login = () => {
    const [value, setValue] = useState('');

    const handleInputChange = (event) => {
      const inputValue = event.target.value;
  
      // Lọc bỏ mọi ký tự không phải số hoặc dấu chấm hoặc dấu phẩy
      const newValue = inputValue.replace(/[^\d]/g, '');
  
      setValue(newValue);
    };
  

  return (
    <section>
      <form action="">
        <h1>Login</h1>
        <div className="inputbox">
          <div
            style={{
              position: "absolute",
              right: "8px",
              color: "white",
              fontSize: "1.2rem",
              top: "25px",
              color: 'white'
            }}
          >
            <EmailIcon />
          </div>
          <input type="number" required />
          <label htmlFor="">Email</label>
        </div>
        <div className="inputbox">
          <div
            style={{
              position: "absolute",
              right: "8px",
              color: "white",
              fontSize: "1.2rem",
              top: "20px",
            }}
          >
            <OpendEyeIcon />
          </div>
          {/* <ClosedEyeIcon /> */}
          <input type="password" required />
          <label htmlFor="">Password</label>
        </div>
      </form>
    </section>
  );
};
