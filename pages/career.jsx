import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import { Container } from 'react-bootstrap'

export default function Career() {
  const {locale} = useRouter();
  return (
    <>
    <Head>
    <title>Career | Fast Track Visa   </title>
    <meta name="description" content={`At Fast Track Visa, you will have the chance to leverage state-of-the-art technology, collaborate with industry professionals, and develop ground-breaking solutions in the fast-growing travel sector.`} />
    <link rel="canonical" href={`https://fasttrackvisa.com/${locale}/career`}/>
    </Head>
      <div className="checkout_banner">
          <Container>
            <h1>Career</h1>
           </Container>
       </div>
       <Container>
         <ol className="breadcrumb pl-0 bg-white">
            <li className="breadcrumb-item"><Link href={'/'}> Home </Link></li>
            <li className="breadcrumb-item active" aria-current="page">Career</li>
         </ol>
          <div className="desi-work-container">
             <h2 className=''>Coming Soon</h2>
         </div>
      </Container>
    </>
  )
}
