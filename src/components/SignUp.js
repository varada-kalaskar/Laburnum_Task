import "./SignUp.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Input from 'react-phone-number-input/input'
import 'react-phone-number-input/style.css'
import { Row,Col } from "react-bootstrap";


const Login = () => {
  const history = useHistory();
  const [phone, setPhone] = useState()

  const initialFormData = Object.freeze({
    username: "",
    password: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  return (
    <div className="login">
      <div className="container" id="loginbg">
        <div className="card logincard">
          <div className="card-body">
            <div className="wrapper">
              <h2 className="logintitle typing-demo">Sign Up</h2>
            </div>
            <form className="loginform">
              <div className="formField">
                <div className="logo">
                  <i className="fa fa-user icon"></i>
                </div>
                <div className="formInput">
                  <input
                    type="text"
                    name="name"
                    className="formip"
                    placeholder="Name"
                    id="name"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="formField">
                <Row>
                  <Col md={1}></Col>
                  <Col>
                <div className="formInput">
                    <label className="bdaylable" style={{color:"#000000"}}>Choose your birthdate</label>
                    <input
                        type="date"
                        name="birthdate"
                        className="formip birthday"
                        placeholder="Choose your birthdate"
                        id="date"
                        onChange={handleChange}
                    />
                </div>
                </Col>
                <Col md={4}>
                <label className="bdaylable" style={{color:"#000000"}}>Gender</label>
                <div>
        <input type="radio" value="Male" name="gender" className="gender"/> M
        <input type="radio" value="Female" name="gender" className="gender" /> F
      </div>
      </Col>
      </Row>
              </div>
              

              <div className="formField">
  <div className="formInput">
    <input
      type="textarea"
      name="address"
      className="formip"
      placeholder="Address"
      id="address"
      onChange={handleChange}
    />
  </div>
</div>

              <div className="formField">
                <div className="formInput">
                  <input
                    type="email"
                    name="email"
                    className="formip"
                    placeholder="Email"
                    id="email"
                    onChange={handleChange}
                  />
                </div>
              </div>



              <div className="formField">
                <Input
                placeholder="Phone number"
                value={phone}
                className="formip"
                onChange={setPhone}
                />
              </div>
              <div className="form-center">
                
              </div>

              <button
                className="btn loginbutton scanfcode"
                type="submit"
              >
                <span>Login</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
