import Image from "next/image";
import { Inter } from "next/font/google";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import ChatHot from "../chatHot";
const inter = Inter({ subsets: ["latin"] });
const Footer = (props) => {
  const { locale } = useRouter();
  //console.log(locale)
  return (
    <footer className={`mt-auto`}>
      <Container>
        <Row>
          <Col md={6}>
            <Image
              src={"/img/logo.webp"}
              width={200}
              height={56}
              alt="fast track visa"
            />
            <Row className="my-4">
              <Col sm={6}>
                <h5>UAE Office</h5>
                <p>
                  ELOB Office No. E2-123F-45 Hamriyah Free Zone Sharjah, United
                  Arab Emirates, 52101
                </p>
                <ul className="slink_ul">
                  <li className="slink_li">
                    <a
                      className="slink"
                      target="_blank"
                      aria-label="facebook"
                      href="https://www.facebook.com/fasttrckvisa"
                      rel="nofollow"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li className="slink_li">
                    <a
                      className="slink"
                      target="_blank"
                      aria-label="twitter"
                      href="https://x.com/FTVisaServices"
                      rel="nofollow"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="slink_li">
                    <a
                      className="slink"
                      target="_blank"
                      aria-label="linkedinIn"
                      href="https://www.linkedin.com/company/fasttrack-visa-com"
                      rel="nofollow"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="slink_li">
                    <a
                      className="slink"
                      aria-label="instagram"
                      target="_blank"
                      href="https://www.instagram.com/fasttrackvisa/"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="slink_li">
                    <a
                      className="slink"
                      aria-label="youtube"
                      target="_blank"
                      href="https://www.youtube.com/channel/UCUYzoyrZZ7MSEYYwu2P6-6g"
                    >
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </Col>
              <Col sm={6}>
                <h5>US Office</h5>
                <p>Suite 80 55 West 39th Street New York, USA, 10018</p>
                <a href="mailto:info@fasttrackvisa.com">
                  info@fasttrackvisa.com
                </a>
                <p className="phoneNumber">
                  <span>Phone No:</span>{" "}
                  <span>
                    <a href="tel:097116 10418"> 097116 10418 </a>
                  </span>
                </p>
                <Image
                  alt="card_image"
                  src={"/img/card_image.png"}
                  width={150}
                  height={31}
                />
              </Col>
            </Row>
            <Row>
              <Col></Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={6}>
                <h5>Company </h5>
                <ul>
                  <li>
                    <Link href={`/about-us`}>About Us </Link>
                  </li>
                  <li>
                    <Link href={`/contact-us`}>Contact Us</Link>
                  </li>
                  <li>
                    <Link href={"/blog"}>Blog</Link>
                  </li>
                  <li>
                    <Link href={`/career`}>Career </Link>
                  </li>
                </ul>
              </Col>
              <Col md={6}>
                <h5>Company </h5>
                <ul>
                  <li>
                    <Link href={`/sitemap`}>Sitemap</Link>
                  </li>
                  <li>
                    <Link href={`/terms-and-conditions`}>
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href={`/privacy-policy`}>Privacy policy</Link>
                  </li>
                  <li>
                    <Link href={`/refund-and-cancellation`}>
                      Refund & cancellation
                    </Link>
                  </li>
                  <li>
                    <Link href={`/disclaimer`}>Disclaimer</Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <ChatHot />
      </Container>
      <div className="copyRight">
        <p>© 2024 Fast Track Visa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
