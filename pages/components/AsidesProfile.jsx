import Link from 'next/link'
import React from 'react'
import { Col } from 'react-bootstrap'
import { FaKey, FaList, FaUser } from 'react-icons/fa'

const AsidesProfile = () => {
  return (
    <Col sm={12} md={3} lg={3}>
        <ul className='profile_ul'>
			<li><Link href={'/my-profile/my-transactions'}><i className='mr-2'><FaList/></i> My Transactions </Link></li>
			<li><Link href={'/my-profile/change-password'}><i className='mr-2'><FaKey/></i> Change Password </Link></li>
			<li><Link href={'/my-profile'}><i className='mr-2'><FaUser/></i> Update Profile </Link></li>
							</ul>
    </Col>
  )
}

export default AsidesProfile