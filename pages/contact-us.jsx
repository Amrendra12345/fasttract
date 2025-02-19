import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import { Container } from 'react-bootstrap';

export default function Contactus(props) {
  
   const schema = {
      "@context" : "https://schema.org",
      "@type" : "Organization",
      "Name"  :  "Fast Track Visa",
      "url" : "https://fasttrackvisa.com/en-in",
      "contactPoint" : [
         { "@type" : "ContactPoint",
           "telephone" : "+919711610418",
           "contactType" : "customer service"
         } ] 
   }
  return (
    <>
    <Head>
    <title>Contact Us | Fast Track Visa  </title>
    <meta name="description" content={`Contact Fast Track Visa at fasttrackvisa.com for assistance with visas, e-visas, flight bookings, hotel reservations, and a variety and holiday packages.`} />
    <link rel="canonical" href={`https://fasttrackvisa.com/${props.country_ext}/contact-us`}/>
    <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    
    </Head>
    
       <div className="checkout_banner">
           <Container>
              <h1>Contact Us</h1>
           </Container>
        </div>
        <Container>
            <ol className="breadcrumb pl-0 bg-white">
               <li className="breadcrumb-item"><Link href={'/'}> Home </Link></li>
                <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
             </ol>
             <div className="desi-work-container">
             <h2 className='title'>Let's keep in touch.</h2>
             <p>We provide many tools you can use to guide yourself through the entire visa process. To save your time, please use our tools before contacting us:</p>
            <ul>
                <li>Start New ApplicationStart new application</li>
                <li>Check Order StatusCheck application status</li>
                <li>Login to My AccountLogin to my accountChat with our agent.</li>
            </ul>
            <p>The best way to contact us is to use the chat feature in the lower right hand corner (we offer 24/7 service). This is the preferred method to get quick answers to all your questions.</p>
            </div>
       </Container>
    </>
  )
}
export async function getServerSideProps(ctx){
   const country_ext = ctx.locale;
    return{
      props: {country_ext}
    }
 }
