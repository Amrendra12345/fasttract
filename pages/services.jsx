import Head from "next/head";
import Link from "next/link";
import { Container } from "react-bootstrap";

const Services = () => {
  return (
    <>
      
      <Head>
                <title>Services | Fast Track Visa   </title>
                <meta name="description" content={``} />
                <link rel="canonical" href={`https://fasttrackvisa.com/en-in/services`}/>
            </Head>
      <div className="checkout_banner">
        <Container>
          <h1>Services</h1>
        </Container>
      </div>
      <Container>
        <ol className="breadcrumb pl-0 bg-white">
          <li className="breadcrumb-item">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
          Services
          </li>
        </ol>
        <div className="desi-work-container">
          <h1 className="">Coming Soon...</h1>
        </div>
      </Container>
    </>
  );
};

export default Services;
