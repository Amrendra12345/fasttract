// import Image from 'next/image'
import Link from 'next/link';
// import { useRouter,Router } from 'next/router'
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import countryList from '../../countryList.json';
import axios from 'axios';
import { useRouter } from 'next/router';


const My_profile = () => {
	//const pathname = useRouter()
	const {locale} = useRouter();

	const [countrys] = useState(countryList);
	const [first_name, setFirst_name] = useState('');
	const [last_name, setLast_name] = useState('');
	const [phone_number, setPhone_number] = useState('');
	const [email, setEmail] = useState('');
	const [gender, setGender] = useState('');
	const [dob, setDob] = useState('');
	const [nationality, setNationality] = useState('');
	const [city, setCity] = useState('');
	const [address, setAddress] = useState('');
	const [passport_number, setPassport_number] = useState('');
	const [passport_exp_date, setPassport_exp_date] = useState('');
	const [marital_status, setMarital_status] = useState('');
	const [number_of_kids, setNumber_of_kids] = useState('');
	const [activeClass, setActiveClass] = useState('hsticky');
	const [c_ext, setcExt] = useState('');



	useEffect(() => {
		if (localStorage.getItem('loginDetails') === null) {
			var loginDetails = { provider_id: '', provider: '', name: '', email: '', mobile_number: '' };
			localStorage.setItem('loginDetails', JSON.stringify(loginDetails));
		  }
		setcExt(window.location.pathname.split('/')[1])
		setFirst_name(JSON.parse(localStorage.getItem('loginDetails'))?.name_of_agency?.split(' ')[0])
		setLast_name(JSON.parse(localStorage.getItem('loginDetails')).name_of_agency?.split(' ')[1] || '');
		setPhone_number(JSON.parse(localStorage.getItem('loginDetails')).mobile_number || '');
		setEmail(JSON.parse(localStorage.getItem('loginDetails')).email || '');
		setGender(JSON.parse(localStorage.getItem('loginDetails')).gender || '');
		setDob(JSON.parse(localStorage.getItem('loginDetails')).dob || '');
		setNationality(JSON.parse(localStorage.getItem('loginDetails')).country || '');
		setCity(JSON.parse(localStorage.getItem('loginDetails')).city || '');
		setAddress(JSON.parse(localStorage.getItem('loginDetails')).address || '');
		setPassport_number(JSON.parse(localStorage.getItem('loginDetails')).passport_number || '');
		setPassport_exp_date(JSON.parse(localStorage.getItem('loginDetails')).passport_exp_date || '');
		setMarital_status(JSON.parse(localStorage.getItem('loginDetails')).marital_status || '');
		setNumber_of_kids(JSON.parse(localStorage.getItem('loginDetails')).number_of_kids || '');

	}, [])

	const updateProfile = () => {
		const data = new FormData();
		data.append('user_id', JSON.parse(localStorage.getItem('loginDetails'))?.id);
		data.append('first_name', first_name);
		data.append('last_name', last_name);
		data.append('phone_number', phone_number);
		data.append('email', email);
		data.append('gender', gender);
		data.append('dob', dob);
		data.append('nationality', nationality);
		data.append('city', city);
		data.append('address', address);
		data.append('passport_number', passport_number);
		data.append('passport_exp_date', passport_exp_date);
		data.append('marital_status', marital_status);
		data.append('number_of_kids', number_of_kids);
		axios.post(`https://cms.fasttrackvisa.com/api/${locale}/updateprofile`, data).then((res) => {
			//console.log(res);
		}).catch((ex) => console.error("Update Profile", ex))
	}

	function calculateAge(birthday) { // birthday is a date
		var ageDifMs = Date.now() - new Date(birthday).getTime();
		var ageDate = new Date(ageDifMs); // miliseconds from epoch
		//console.log(Math.abs(ageDate.getUTCFullYear() - 1970))
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}






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
					<li className="breadcrumb-item"><Link href={'/' + c_ext}>
						
							Home
						
					</Link></li>

					<li className="breadcrumb-item active" aria-current="page"> My Profile </li>
				</ol>
				<div className="desi-work-container pt-3">

					<Row>
						<Col sm={12} md={3} lg={3}>
							<ul className='profile_ul'>
								<li><Link href={'my-profile/my-transactions'} locale={locale}><i className='fa fa-list'></i> My Transactions </Link></li>
								<li><Link href={'my-profile/change-password'} locale={locale}><i className='fa fa-key'></i> Change Password </Link></li>
								<li><Link href={'my-profile'} locale={locale}><i className='fa fa-user'></i> Update Profile </Link></li>
							</ul>
						</Col>
						<Col sm={12} md={9} lg={9}>
							<Row className="gutters5">
								<Col sm={6}>
									<div className="ftv-field">
										<label htmlFor="fname">First Name</label>
										<input id="fname" value={first_name} name="fname" type="text" className="form-control" placeholder="Here" onChange={e => setFirst_name(e.target.value)} />
									</div>
								</Col>
								<Col sm={6}>
									<div className="ftv-field">
										<label htmlFor="lname">Last Name</label>
										<input id="lname" name="lname" value={last_name} type="text" className="form-control" placeholder="Here" onChange={e => setLast_name(e.target.value)} />
									</div>
								</Col>
								<Col sm={6}>
									<div className="ftv-field">
										<label htmlFor="email">Email</label>
										<input id="email" name="email" value={email} type="email" className="form-control" placeholder="Here" onChange={e => setEmail(e.target.value)} />
									</div>
								</Col>
								<Col sm={6}>
									<div className="ftv-field">
										<label htmlFor="phone_number">Phone Number</label>
										<input id="phone_number" name="phone_number" value={phone_number} type="text" maxLength={10} className="form-control" placeholder="Here" onChange={e => setPhone_number(e.target.value)} />
									</div>
								</Col>
								<Col sm={6}>
									<div className="ftv-field">
										<label htmlFor="gender">Gender</label>
										<select className="form-control" id="gender" name="gender" value={gender} onChange={e => setGender(e.target.value)} >
											<option value="">Please Select</option>
											<option value="Male">Male</option>
											<option value="Female">Female</option>
										</select>
									</div>
								</Col>
								<Col sm={6}>
									<div className="ftv-field">
										<label htmlFor="dob">Date of Birth</label>
										<DatePicker
											selected={dob}
											onChange={(date) => setDob(date)}
											dateFormat="dd/MM/yyyy"
											placeholderText="Here"
										/>
									</div>
								</Col>
								<Col sm={6}>
									<div className="ftv-field">
										<label htmlFor="nationality">Nationality</label>
										<Select
											className="basic-single"
											classNamePrefix="select"
											onChange={(option) => { setNationality(option.value) }}
											isClearable={true}
											isSearchable={true}
											name="color"
											options={countrys}
										/>
									</div>
								</Col>
								<Col sm={6}>
									<div className="ftv-field">
										<label htmlFor="city">City</label>
										<input id="city" name="city" value={city} type="text" className="form-control" placeholder="Here" onChange={e => setCity(e.target.value)} />
									</div>
								</Col>
								<Col sm={6}>
									<div className="ftv-field">
										<label htmlFor="address">Address</label>
										<input id="address" name="address" value={address} type="text" className="form-control" placeholder="Here" onChange={e => setAddress(e.target.value)} />
									</div>
								</Col>
								<Col sm={6}>
									<div className="ftv-field">
										<label htmlFor="passport_number">Passport Number</label>
										<input id="passport_number" name="passport_number" value={passport_number} type="text" className="form-control" placeholder="Here" onChange={e => setPassport_number(e.target.value)} />
									</div>
								</Col>
								<Col sm={6}>
									<div className="ftv-field">
										<label htmlFor="passport_ed">Passport Expiry Date</label>
										<DatePicker
											selected={passport_exp_date}
											onChange={(date) => setPassport_exp_date(date)}
											dateFormat="dd/MM/yyyy"
											placeholderText="here"
										/>
									</div>
								</Col>
								<Col sm={6}>
									<div className="ftv-field">
										<label htmlFor="marital_status">Marital Status</label>
										<select className="form-control" id="marital_status" name="marital_status" value={marital_status} onChange={e => setMarital_status(e.target.value)} >
											<option value="">Please Select </option>
											<option value="Male">Married</option>
											<option value="Female">Unmarried</option>
										</select>
									</div>
								</Col>
								<Col sm={6}>
									<div className="ftv-field">
										<label htmlFor="number_of_kids">Number of Kids(0 to 3)</label>
										<select className="form-control" id="number_of_kids" name="number_of_kids" value={number_of_kids} onChange={e => setNumber_of_kids(e.target.value)}>
											<option value="">Please Select </option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
										</select>
										{/* 
										<input id="number_of_kids" name="number_of_kids" value={number_of_kids} type="tel" className="form-control" placeholder="Here" onChange={e => setNumber_of_kids(e.target.value)} maxLength={1} max={3} minLength={0} /> */}
									</div>
								</Col>
							</Row>
							<button className='btn4 d-block w-100 mt-4' type='button' onClick={() => { updateProfile() }}>Update</button>
						</Col>


					</Row>

				</div>



			</Container>

			
		</>

	);

}
export default My_profile; 