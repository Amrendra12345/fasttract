import Head from "next/head";
import Banner from "./components/home-page/Banner";
import CountryExLists from "../countyExList";
import HomeList from "./components/home-page/HomeList";
import Simple_step from "./components/Simple_step";
import { useRouter } from "next/router";
import Ready_get from "./components/Ready_get";
import BlogSection from "./components/home-page/Blog-Section";
import Abrand from "./components/Abrand";
import Testimonials from "./components/home-page/Testimonials";
import SearchCountry from "./components/search-country";
import { Col, Row } from "react-bootstrap";

export default function Home(props) {
  const { locale, pathname } = useRouter();
  //console.log(locale);
  //console.log(props.homeData.testimonial)
  return (
    <>
      <Head>
        <title>Evisa Apply Online, Visa Solutions | Fast Track Visa</title>
        <link rel="canonical" href={`https://fasttrackvisa.com/${locale}`} />
        <meta
          name="description"
          content="Apply for tourist e-visas and visas globally online through Fast Track Visa. We offer the most enjoyable and reliable way to obtain your visas promptly, guaranteed."
        />
      </Head>
      <>
        <Banner pageTitle={"Apply for Global Visas and ETAs Online"} />
        <div className="container mt-4">
          <Row>
            <Col className="mt-5">
              <SearchCountry ce_name={locale} page_name="homePage" />
            </Col>
          </Row>
        </div>
        <HomeList homelists={props.homeData.homelist} />
        <Simple_step scountryname="Relevant" />
        <Abrand />
        <Testimonials testimonialsData={props.homeData.testimonial} />
        <Ready_get></Ready_get>
        <BlogSection blogs={props.homeData.blog_arr}></BlogSection>
        <div className="container mt-5">
          <Row>
            <Col lg={{ span: 10, offset: 1 }} sm={12}>
              <div className="widget_content">
                <h4>
                  Fly Anywhere <br />
                  <span> Get an eVisa </span>{" "}
                </h4>
                <SearchCountry ce_name={locale} page_name="homePage" />
              </div>
            </Col>
          </Row>
        </div>
      </>
    </>
  );
}

export async function getServerSideProps(ctx) {
  // console.log(ctx.locale)
  let ce_name;
  const country_ext = ctx.locale;
  const res = await fetch(
    `https://ipgeolocation.abstractapi.com/v1/?api_key=0303334790d54efdb7a07b113b206ced`
  );
  if (!res.ok) {
    return {
      notFound: true,
    };
  }
  const data = await res.json();
  if (data !== null) {
    if (data.country_code !== null && data.country_code !== "US") {
      const country_code = data.country_code.toLowerCase();
      for (let CountryExList of CountryExLists) {
        if (CountryExList.split("-")[1] === country_code) {
          ce_name = CountryExList;
        }
      }
    }
  }
  const homeList = await fetch(
    `${process.env.BASE_URL}/api/${country_ext}/homelisting`
  );

  if (!homeList.ok || homeList.length === 0) {
    return {
      notFound: true,
    };
  }
  const homeData = await homeList.json();

  return {
    props: { ce_name, homeData },
  };
}
