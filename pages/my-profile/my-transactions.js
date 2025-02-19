// import Image from 'next/image'
import Link from 'next/link';
// import { useRouter,Router } from 'next/router'
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRouter } from 'next/router';
import AsidesProfile from '../components/AsidesProfile';

const My_transactions_in = () => {
	const {locale} = useRouter()
	
   useEffect(()=>{
    var loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
    if(loginDetails){
        console.log(loginDetails.id)
        const My_transactions = async()=>{
          const res = await fetch(`https://cms.fasttrackvisa.com/api/gettransactions?user_id=${loginDetails.id}`);
          const result = await res.json();
         // console.log(result)
        }
        My_transactions()
    }
   },[])
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
					<li className="breadcrumb-item"><Link href={'/'}> Home	</Link></li>
					<li className="breadcrumb-item"><Link href={'/my-profile'}>My Profile </Link></li>
					<li className="breadcrumb-item active" aria-current="page"> My Transactions </li>
				</ol>
				<div className="desi-work-container pt-3">
					<Row>
						<AsidesProfile/>
						<Col sm={12} md={9} lg={9}>							 
						</Col>
					</Row>
				</div>
			</Container>			
		</>

	);

}
export default My_transactions_in; 

