import React, { useState } from 'react';
import '../../styles/Login.css'

function Login(props) {

    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter name"

                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Phone</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter phone number"

                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Location</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter location"

                    />
                </div>
                <div className="form-check">
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                >Submit</button>
            </form>
            <div className="alert alert-success mt-2" role="alert">

            </div>
            <div className="registerMessage">
                <span>Dont have an account? </span>
                <span className="loginText" >Register</span>
            </div>
        </div>
    )
}

export default Login;