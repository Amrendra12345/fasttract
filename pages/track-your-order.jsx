import Head from "next/head";
import Link from "next/link";
import { Container } from "react-bootstrap";

const TrackYourOrder = () => {
  return (
    <>
      <Head>
        <title>Terms your orders</title>
      </Head>
      <div className="checkout_banner">
        <Container>
          <h1>Track Your Order</h1>
        </Container>
      </div>
      <Container>
        <ol className="breadcrumb pl-0 bg-white">
          <li className="breadcrumb-item">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Track Your Order
          </li>
        </ol>
        <div className="desi-work-container">
          <h1 className="">Coming Soon...</h1>
        </div>
      </Container>
    </>
  );
};

export default TrackYourOrder;
