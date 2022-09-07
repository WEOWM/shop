import React from 'react'
import { NavLink } from 'react-router-dom'
import './Login.css'

const Login = () => {
    return (
        <div>
           
            <div className="container d-flex justify-content-center m-5">
                <div className="form-card shadow-lg d-flex justify-content-center align-items-center">
                    <form className='from'>
                        <div className="form-group ">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className='d-flex justify-content-center'>
                        <button  type="submit" className="btn1 btn-primary">Login</button>
                      <NavLink to='/sing 'type="submit" className="btn btn-primary">singup</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login