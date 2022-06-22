import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const ForgotPassword = ({ setEmail, submit, notification }) => (
	<div className="container text-center">
		<div className="content-404 forgotpass">
			<h4>
				<b>FORGOT PASSWORD
				</b>
			</h4>
			<span>{notification}</span>
			<input
				type="email"
				placeholder="Email"
				onChange={e => setEmail(e.target.value)}
			/>
			<br />
			<button
				className="btn btn-default"
				onClick={() => submit()}
			>
				submit
			</button>
			<h2><Link to="/">Trang Chủ</Link></h2>
		</div>
	</div>
)
export default ForgotPassword