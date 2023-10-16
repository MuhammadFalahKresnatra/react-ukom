import React from 'react'
import './login.css';
import { Link } from 'react-router-dom';
import logo from '../../img/logopolos.png';

const Login = () => {
  return (
    <div className="wrapper">
      <div className="logoback">
        <img src={logo} />
      </div>
      <div className="text-center mt-4 name">
        OLDIN
      </div>
      <form className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user" />
          <input type="text" name="userName" id="userName" placeholder="Username" />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key" />
          <input type="password" name="password" id="pwd" placeholder="Password" />
        </div>
        <Link to="/dashboard"><button className="btn mt-3">Login</button></Link>
      </form>
      <div className="text-center fs-6">
        <Link to="/registrasi"><a className='tombolbawah'>Sign up</a></Link> 
      </div>
    </div>

  )
}

export default Login;
