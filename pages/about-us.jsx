import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

export default function Aboutus(props) {
  return (
    <>
      <Head>
        <title>About Us | Fast Track Visa </title>
        <meta name="description" content={`Fast Track Visa is one of the fastest-growing travel and tourism companies in India. We offer comprehensive information and services related to visas, e-visas, flight bookings, hotel reservations, and both domestic and international holiday packages`} />
        <link rel="canonical" href={`https://fasttrackvisa.com/${props.country_ext}/about-us`}/>
      </Head>
      <div className="checkout_banner">
        <Container>
          <h1>About Us</h1>
        </Container>
      </div>
      <Container>
        <ol className="breadcrumb pl-0 bg-white">
          <li className="breadcrumb-item">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            About Us
          </li>
        </ol>
        <div className="desi-work-container">
          <h2>Who we are</h2>
          <p>Launched by an Asia-based Fortune 500 company, FastTrackVisa.com (FTV) seeks to streamline the visa application process for overseas travellers, wherever in the world they hail from and wherever they're travelling to. </p>
          <p>However, this doesn't mean we prioritise speed of delivery over everything else. At FTV, we're committed to ensuring our customers receive the premium service they deserve. We can do this because we
            blend state-of-the-art digital resources with a customer service that's second to none. Everything we do is underpinned by our three core values: </p>
          <ul>
            <li>only offering customers the best available visa options</li>
            <li>a dedication to transparent pricing</li>
            <li>delivering an excellent visa application experience.</li>
          </ul>
          <div className="mt-4">
            <p>Moreover, our service is underscored by comprehensive and stringent data security protocols and a steadfast commitment to performance excellence across all our operations. At the heart of our operations, we've installed: </p>
            <ul>
              <li>a rigorous standardisation of processes</li>
              <li>robustness in our technology-backed delivery platforms</li>
              <li>proficiency and preparedness in our resources</li>
              <li>an open mind to innovation, when it's beneficial.</li>
            </ul>
            <p> As such, at FTV, we're confident we can provide you with the timely, affordable, transparent and comprehensive visa application service you need  and deserve. </p>
          </div>
          <div className="mt-4">
            <h3>
              A visa provider <b>fit for today</b>
            </h3>
            <p> In today's world, every moment is precious. For those who need a visa application processed as fast as can be, there's FastTrackVisa.com (FTV). We'll ensure you have all the information and guidance you need to apply online for your visa. </p>
            <p> Then, after you've followed our affordable application process, we'll make sure your visa's rocessed and emailed to you as quickly as possible. Time is of the essence, that's why FTV is here for you. </p>
          </div>
        </div>
      </Container>
    </>
  );
}
export async function getServerSideProps(ctx){
  const country_ext = ctx.locale;
   return{
     props: {country_ext}
   }
}
