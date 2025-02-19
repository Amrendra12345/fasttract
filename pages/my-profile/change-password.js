// import Image from 'next/image'
import Link from 'next/link';
// import Router from 'next/router';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useRouter } from 'next/router';
import AsidesProfile from '../components/AsidesProfile';

export default function ChangePassword() {
    const {locale} = useRouter()
	const [c_ext, setcExt] = useState('');
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmNewPassword, setConfirmNewPassword] = useState('');
	const [error, setError] = useState(null);
	const [activeClass, setActiveClass] = useState('hsticky');


	useEffect(() => {
		setcExt(window.location.pathname.split('/')[1])

	}, [])



	const handleSubmit = async (e) => {
		e.preventDefault();

		if (newPassword !== confirmNewPassword) {
			setError('Passwords do not match');
			return;
		}
		const data = new FormData();
		data.append('uid', JSON.parse(localStorage.getItem('loginDetails'))?.id);
		data.append('current_password', oldPassword);
		data.append('newpassword', newPassword);

		axios.post(`https://cms.fasttrackvisa.com/api/${c_ext}/change-password`, data).then((res) => {
			//console.log(res);
		}).catch((ex) => console.error("Update Password", ex), setError('Unable to change password'))
	};

	return (
		<>
			<div className="checkout_banner">
				<Container>
					<h1 className='mt-5'>Welcome back, </h1>
					<p>Here's your account details.</p>
				</Container>
			</div>
			<Container>
				<ol className="breadcrumb pl-0 bg-white">
					<li className="breadcrumb-item"><Link href={'/'}>Home</Link></li>
					<li className="breadcrumb-item"><Link href={'/my-profile'}>

						My Profile

					</Link></li>

					<li className="breadcrumb-item active" aria-current="page"> Change Password </li>
				</ol>

				<div className="desi-work-container pt-3">

					<Row>
						<AsidesProfile/>
						<Col sm={12} md={9} lg={9}>

							<form onSubmit={handleSubmit}>
								<Row className="gutters5">
									<Col sm={6}>
										<div className="ftv-field">
											<label>Old Password</label>
											<input
												type="password" className="form-control" placeholder='here'
												value={oldPassword}
												onChange={(e) => setOldPassword(e.target.value)}
											/>
										</div>
									</Col><Col sm={6}>
										<div className="ftv-field">
											<label>New Password</label>
											<input
												type="password" className="form-control" placeholder='here'
												value={newPassword}
												onChange={(e) => setNewPassword(e.target.value)}
											/>
										</div>
									</Col><Col sm={6}>
										<div className="ftv-field">
											<label>Confirm New Password</label>
											<input
												type="password" className="form-control" placeholder='here'
												value={confirmNewPassword}
												onChange={(e) => setConfirmNewPassword(e.target.value)}
											/>
										</div>
									</Col>
								</Row>


								<button className='btn4 d-block w-100 mt-4' type='submit'>Update Password</button>
								{error && <p>{error}</p>}
							</form>


						</Col>


					</Row>

				</div>



			</Container>


		</>

	);
}