import Link from 'next/link';
import React from 'react'
import { Container } from 'react-bootstrap'
import styles from '../styles/term.module.scss'
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function PrivacyPolicy(props) {
  const {locale} = useRouter();
  return (
    <>
    <Head>
       <title>{`Privacy Policy | Fast Track Visa `}</title>
       <meta name="description" content={`Discover our comprehensive Privacy Policy page, detailing how Fast Track Visa safeguards your personal information, ensures data security, and maintains transparency in all our travel services.`} />
       <link rel="canonical" href={`https://fasttrackvisa.com/${props.country_ext}/privacy-policy`}/>
    </Head>
    <section className="privacyPolicy">
      <div className="checkout_banner">
        <Container>
          <h1>Privacy policy</h1>
        </Container>
      </div>
      <Container>
        <ol className="breadcrumb pl-0 bg-white">
          <li className="breadcrumb-item">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Privacy policy
          </li>
        </ol>
        <div className="desi-work-container">
          <p>
            At <strong>Fasttrackvisa.com</strong>, we adhere to a stringent
            privacy policy to keep all the information safe and protected. We
            keep a regular tab on how the shared information is used and
            processed and in what context. In case we bring any changes to our
            privacy policies, we keep our visitors updated about the same
            through this section. By accessing the pages of{" "}
            <strong>Fasttrackvisa.com</strong>, you agree to all our Privacy
            Proclamations and relevant Terms and Conditions.{" "}
            <strong>Fasttrackvisa.com</strong> reserves all right to
            modify/alter the same at any point of time.
          </p>
          <h2 className={styles.title}>Collected information</h2>
          <ul>
            <li>
              We keep our customers or applicants always transparent about our
              work procedures. All the information collected from our
              customers/applicants is used merely for providing them finest of
              our services. No information is exposed or shared with any of the
              third parties unless it is permitted by the applicant or customer.
              Hence, all information shared with us is absolutely confidential
              and protected from any unauthorized access or use.
            </li>
          </ul>
          <h2 className={styles.title}>Cookies</h2>
          <p>
            Basically, cookie is a technical terminology, which works as a
            communication bridge between web server and a web browser. A cookie
            resides in your computer in the form of a small file for better
            comprehension of your web access. There is a traffic log cookie that
            keeps us updating on your every move on our webpage, which further
            helps us in analysing your quest; and the extent to which we need to
            evolve our performances for better customer experience. A user is
            always free to accept or reject any cookies while browsing. In case
            there is a default setting in your browser, you may further allow or
            reject the cookies.
          </p>
          <h3 className={styles.title}>Disclaimer</h3>
          <p>
            Information shared and communicated over Internet are subject to
            several security perils. Hence, in case of any damages or losses
            whatsoever, special or castigatory, direct or indirect, incidental
            or consequential, alteration or deletion, confidential or exposure,
            security violation, system failure due to unauthorized use or
            access, <strong>Fasttrackvisa.com</strong> shall not be held
            responsible for any consequences. <strong>Fasttrackvisa.com</strong>{" "}
            hereby completely disclaims all assurances with regard to the use of
            software and hardware to protect this website from any special,
            consequential or direct damages and support the website with all
            implicit warranties. Hence, <strong>Fasttrackvisa.com</strong> or
            its employees, officers, subsidiaries, affiliates, partners,
            third-party agents and heir shall not be directly/indirectly liable
            in any which scenario for any errors, misuse, viruses, third party
            interceptions, inaccuracies, loss of data due to hacker attacks,
            disruptions in the communication or delivery of services.
            Furthermore, it is to be informed that for the sake of information,{" "}
            <strong>Fasttrackvisa.com</strong> is linked to other websites as
            well. Thus, in any way <strong>Fasttrackvisa.com</strong> is not
            liable for the breach of any privacy or use of the content of those
            websites.
          </p>
          <p>
            In addition, <strong>Fasttrackvisa.com</strong> neither represents
            any Government Department, nor does it linked with any Embassy
            abroad.
          </p>
          <h4 className={styles.title}>Summary</h4>
          <p>
            Upon accessing the website of <strong>Fasttrackvisa.com</strong> and
            using its services, you unreservedly agree and comply with all the
            privacy policies and relevant terms and conditions. If you resist
            complying with any of our privacy policies or privacy statement,
            please do not use this site.
          </p>
        </div>
      </Container>
    </section>
    </>
  );
}

export async function getServerSideProps(ctx){
  const country_ext = ctx.locale;
   return{
     props: {country_ext}
   }
}