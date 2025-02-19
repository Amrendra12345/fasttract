import Head from 'next/head'
import Link from 'next/link'


import { Container } from 'react-bootstrap'
export default function disclaimer(props) {   
 
  return (
    <>
     <Head>
        <title>Disclaimer | Fast track visa</title>
        <link rel="canonical" href={`https://fasttrackvisa.com/${props.country_ext}/disclaimer `}/>
        <meta name="description" content={`Disclaimer Fast Track Visa at fasttrackvisa.com for assistance with visas, e-visas, flight bookings, hotel reservations, and a variety and holiday packages.`} />
     </Head>
      <div className="checkout_banner">
         <Container>
           <h1>Disclaimer</h1>
        </Container>
      </div>
      <section>
        <Container>
             <ol className="breadcrumb pl-0 bg-white">
                <li className="breadcrumb-item">
                  <Link href={'/'}> Home </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Disclaimer</li>
             </ol>
             <div className="desi-work-container">
             <p>Information shared and communicated over Internet are subject to several security perils. Hence, in case of any damages or losses whatsoever, special or castigatory, direct or indirect, incidental or consequential, alteration or deletion, confidential or exposure, security violation, system failure due to unauthorized use or access, we shall not be held responsible for any consequences.</p>
              <p>We hereby completely disclaim all assurances with regard to the use of software and hardware to protect this website from any special, consequential or direct damages and support the website with all implicit warranties. Hence, as a third party service provider, we or our employees, officers, subsidiaries, affiliates, partners, agents and heir shall not be directly/indirectly liable in any which scenario for any errors, misuse, viruses, third party interceptions, inaccuracies, loss of data due to hacker attacks, disruptions in the communication or delivery of services. Furthermore, this is to be informed that for the sake of information, our website may be linked to other websites as well. Thus, in any way our website is not liable for the breach of any privacy or use of the content of those websites.</p>
                 <h2 className='big_title'>Summary</h2>
                <p>Upon accessing our website and using its services, you unreservedly agree and comply with all the privacy policies and relevant terms and conditions. If you resist complying with any of our privacy policies or privacy statement, please do not use this site.</p>

             </div>
        </Container>
      </section>
    </>
  )
}
export async function getServerSideProps(ctx){
  const country_ext = ctx.locale;
   return{
     props: {country_ext}
   }
}