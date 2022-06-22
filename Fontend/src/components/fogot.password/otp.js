import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const OTP = ({ setOTP, submitOTP, notificationOTP }) => (
    <div className="container text-center">
        <div className="content-404 forgotpass">
            <h1><b>ENTER OTP
			</b></h1>
            <span>{notificationOTP}</span>
            <input
                type="number"
                placeholder="Otp code"
                onChange={(e) => setOTP(e.target.value)}
            />
            <br />
            <button
                className="btn btn-default"
                onClick={() => submitOTP()}
            >
                submit
			</button>
            <h2><Link to="/">Trang chủ</Link></h2>
        </div>
    </div>
)
export default OTP