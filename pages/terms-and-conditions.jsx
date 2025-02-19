import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/term.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";

export default function TermsConditions() {
  const {locale} = useRouter();
  return (
    <>
      <Head>
        <title>Terms and Conditions | Fast Track Visa </title>
        
       <meta name="description" content={`If you’ve arrived here, we share a common passion: a deep love for travel. Whether you're seeking inspiration, planning tips for your next holiday, or simply an engaging read, we've got you covered.`} />
    <link rel="canonical" href={`https://fasttrackvisa.com/${locale}/terms-and-conditions`}/>
      </Head>
      <div className="checkout_banner">
        <Container>
          <h1>Terms & Conditions</h1>
        </Container>
      </div>
      <Container>
        <ol className="breadcrumb pl-0 bg-white rounded">
          <li className="breadcrumb-item">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Terms & Conditions
          </li>
        </ol>
        <div className="desi-work-container p-4 border mt-4">
          <h2 className={styles.title}>
            We aim to cater the finest and process-efficient e-Visa services to
            our esteemed customers on the first go.
          </h2>
          <p>
            The Terms and Conditions of <strong>Fasttrackvisa.com</strong> are
            outlined here. No changes or alteration to these Terms and
            Conditions will be considered valid unless and otherwise the same is
            brought into practice by any of our travel consultants in writing on
            Company’s letterhead with authorized signature and company stamp.
          </p>
          <p>
            Accordingly, based upon the requirements and requests of our client,
            we will process an application for the same. However, for rendering
            any erroneous information by any unauthorised consultants,
            <strong>Fasttrackvisa.com</strong> shall not be held liable. The
            company will make all attempts so that the required Visa gets
            processed within the stipulated time. Nevertheless, by no means the
            company will be legally liable for any of the events such as;
            rejection of visa application, issuance of erroneous Visa, unwanted
            delay in visa processing occurring with the Visa Issuing Authority.
            If in case, any of the cited instances occurred on account of
            company’s error or omission, then the company is merely liable to
            refund all fees paid or just the cost of a replacement Visa.
            However, in no case the Company shall be liable for any substantial
            losses, but not limited to: lost airfares, profits/income.
          </p>
          <h2 className={styles.title}>
            TERMINATION AND CANCELLATION OF ACCOUNT
          </h2>
          <ul>
            <li>
              <strong>Fasttrackvisa.com</strong> reserves the right to cancel
              orders or payments just before the origination of the delivery
              without stating any reasons for executing the same.
            </li>
            <li>
              You are allowed to cancel an order after you have submitted your
              documents, you have to inform us by mail, This does not mean that
              the refund will be processed, If the visa has not been applied
              with visa authorities the same can be refunded after deducting
              certain service charges, As the Company will initiate the delivery
              of your order immediately after obtaining your documents so that
              the same gets delivered before the expiry of its statutory period
              and the services will be deemed to have been provided giving you
              no further claim or right to cancel your order.
            </li>
            <li>
              Cancelling an order immediately after processing the application,
              there can be a charge of *USD 40 per application. This amount is
              incurred as the payment gateway transfer charges.
            </li>
            <li>
              In case of any rejection of your Visa Application by the Visa
              Issuing Authority, <strong>Fasttrackvisa.com</strong> shall not
              provide you the refund. Under such scenarios, applicants will be
              required to re-apply for the same adhering to the respective visa
              laws.
            </li>
            <li>
              If under any situation, the Company falls short of catering you
              the services as mentioned in the contract, then you may receive
              refunds.
            </li>
            <li>
              The refund is released in the same mode of payment immediately
              after the order gets cancelled and it further takes 2-3 weeks for
              customers to get the refund into their accounts.
            </li>
          </ul>
          <h2 className={styles.title}>PRICING &amp; AVAILABILITY</h2>
          <ul>
            <li>
              <strong>Fasttrackvisa.com</strong> doesn’t assure that your Visa
              Application will be accepted and approved by the Visa Issuing
              Authority. Therefore, in any which case,
              <strong>Fasttrackvisa.com</strong> shall not be held responsible
              if your Visa Application gets rejected or you fail to receive any
              other requested services from <strong>Fasttrackvisa.com</strong>.
              Our endeavour is to put all efforts in checking the online
              submission of your Visa Application and forward it for further
              processing to the Visa Issuing Authority.
            </li>
            <li>
              It is the responsibility of every prospective applicant to abide
              by the required visa guidelines stated by respective Government
              Authorities.
            </li>
            <li>
              In case of any incompetent or fraudulent information/documents
              provided by an applicant or he/she is not entitled to avail the
              requested services, <strong>Fasttrackvisa.com</strong> shall not
              be responsible for the same. Also, for providing any erroneous
              supporting documents that fail to comply with the regulations of
              Visa Issuing Authority, <strong>Fasttrackvisa.com</strong> shall
              not accept any responsibility.
            </li>
            <li>
              <strong>Fasttrackvisa.com</strong> neither represents any
              Government Department of, nor does it issue any Visas nor
              affiliated to any Embassy abroad.
            </li>
            <li>
              The required Visa Application and associated services are provided
              on the official webpage of Government's Tourist Visa.
            </li>
            <li>
              All charges/fees mentioned on this website are incurred for a
              given service, and no applicant will be entertained for requesting
              a change
            </li>
            <li>the given prices/information.</li>
            <li>
              In case of any changes in the price for a given services as
              requested by an applicant, and the same has already been
              dispatched by <strong>Fasttrackvisa.com</strong>, the actual price
              will be levied which was mentioned at the time of placing the
              order.
            </li>
            <li>
              All prices/fees are listed on the website for a given service that
              includes VAT at applicable rate.
            </li>
            <li>
              Sometimes, Visa fee also includes some third party charges (e.g.
              bank transaction charges), which are levied by the Government of.
            </li>
            <li>
              If in any case, you do not agree with these Terms of use, or you
              are being compelled to meet the cited terms, please do not use the
              site for any services.
            </li>
          </ul>
          <h3 className={styles.title}>LIMITS ON USE</h3>
          <ul>
            <li>
              You are strictly prohibited to use
              <strong>Fasttrackvisa.com</strong> and its services for your
              personal benefit and interest. Furthermore, selling or catering
              any services through our website to any third party is not
              permissible.
            </li>
          </ul>
          <h3 className={styles.title}>SECURITY</h3>
          <ul>
            <li>Our website reserves the rights of users from time-to-time;</li>
            <li>
              In order to restrict the access of any individual(s) to
              <strong>Fasttrackvisa.com</strong> and/or withdrawal of any
              content from the webpage for the time being;
            </li>
            <li>
              To practice anything else that Fast Track Visa truly believes to
              protect the security and integrity of Fast Track Visa and its
              database’s information;
            </li>
            <li>
              To practice anything else that <strong>Fasttrackvisa.com</strong> 
              truly believes to protect the security and integrity of 
              <strong>Fasttrackvisa.com</strong> and its database’s information;
            </li>
            <li>
              To bring in anything new or to alter anything and/or additional
              security measure, which is not accompanied by notice
            </li>
          </ul>
          <h4 className={styles.title}>Web Content &amp; Precision</h4>
          <p>
            All accessible contents or information provided on 
            <strong>Fasttrackvisa.com</strong> comply with the legal terms, and
            are accumulated with legitimate skill and care. However, some
            information and contents might be there on our website, which are
            provided by any third party. In case of any inaccuracy or errors on
            that information, <strong>Fasttrackvisa.com</strong> shall not be
            held responsible. Also, in certain cases some omissions or
            accessible issue may occur, which are quite instinctive in any
            internet-related system, and <strong>Fasttrackvisa.com</strong> has
            no reasonable control over it. Such errors or omissions may occur on
            account of operator/user’s error or it may be influenced by a
            software/system or malfunctions. Therefore, user/applicant may
            verify the accuracy of the provided information before relying on it
            completely. The website is dynamic in nature and it reserve rights
            to make any changes in the content at any point of time without any
            prior notice.
          </p>
          <h4 className={styles.title}>Ownership &amp; Limited Licence</h4>
          <p>
            The user/applicants are entitled to a limited licence to download
            the required content/information from the website of 
            <strong>Fasttrackvisa.com</strong>. They are further permitted to
            use the same and take a print of the information for personal or
            non-commercial purposes, provided that all proprietary notices,
            trademarks and copyright are kept intact. Unless mentioned
            unambiguously, using, copying, retransmission and redeployment of
            any content of <strong>Fasttrackvisa.com</strong> are rigidly
            proscribed. Thus, owner/user of this limited licence is subject to
            an agreement that he/she will comply with these terms and conditions
            before accessing, using and downloading the same, which are legally
            owned by <strong>Fasttrackvisa.com</strong> or licensed to 
            <strong>Fasttrackvisa.com</strong>.
          </p>
          <p>
            The information/document downloaded or used from 
            <strong>Fasttrackvisa.com</strong> are only accessible in accordance
            with the licence of end user adhering to the terms of that software,
            or when there is no such licence, and the user is allowed by a
            non-transferable or non-exclusive license to use that software for
            using <strong>Fasttrackvisa.com</strong>. It clearly denotes that 
            <strong>Fasttrackvisa.com</strong> is prohibited in accordance with
            the cited terms and conditions of use.
          </p>
          <p>
            All Intellectual Proprietary rights and copyright that are not
            granted to a user as per these Terms of use are hereby exclusively
            reserved to <strong>Fasttrackvisa.com</strong> or, in case of any
            other logos, brands and Company names that are featured on the
            website of <strong>Fasttrackvisa.com</strong>, their respective
            owners.
          </p>
          <h4 className={styles.title}>Privacy Policy</h4>
          <p>
            The moment a user/applicant access our website, all the required
            information are stored in the database of 
            <strong>Fasttrackvisa.com</strong>. Whatever information fetched
            through our "contact us" option, will only be restricted to 
            <strong>Fasttrackvisa.com</strong>, and the same will be used to
            contact the user while addressing his/her queries. As per the
            provision of applicable law, user may request us for obtaining a
            copy of User Data (if any) by paying a small fee. Besides, user may
            also contact us if he/she wishes to deactivate/remove/alter the User
            Data. All the user details that get stored in our database will
            never be sold or revealed to any third party unless/otherwise any
            requirement arises to share the same for service related matters.
            Thus the information is absolutely safe and secured with us.
          </p>
          <p>
            Considering a hassle-free navigation and effortless functioning, 
            <strong>Fasttrackvisa.com</strong> uses cookies; this further helps
            us in catering a better experience to the user.
          </p>
          <p>
            User Consent: Upon accessing the website of 
            <strong>Fasttrackvisa.com</strong> and using its information, you
            permit <strong>Fasttrackvisa.com</strong> to process/transfer the
            User Data, which is required for providing you the relevant
            services, and allow you to use the site for the said purpose.
          </p>
          <h4 className={styles.title}>Links</h4>
          <p>
            Visitors/Users should be watchful while accessing to any third party
            sites through <strong>Fasttrackvisa.com</strong>. Any such links
            provided on the website of <strong>Fasttrackvisa.com</strong> are
            only for service purposes. <strong>Fasttrackvisa.com</strong> holds
            no right/control over the privacy practices of those links/sites and
            hence, shall not be held responsible for any changes/information
            provided on those links/sites. Furthermore, 
            <strong>Fasttrackvisa.com</strong> is not liable for any third party
            information or opinions that are being catered (if any) on/through 
            <strong>Fasttrackvisa.com</strong>
          </p>
          <h4 className={styles.title}>
            Disclaimer and Limitation of Legal Responsibility
          </h4>
          <p>
            a) <strong>Fasttrackvisa.com</strong> hereby disclaims about the
            completeness, accuracy and adequacy of its content and do not
            warrant you that the information provided here are always
            up-to-date. Any information that you access through our webpage give
            you no warrantee that the same will always be available,
            operational, accessible, virus-free and error-free. Hence, according
            to the Terms of use of these provisions, you agree that the only
            antidote left to you for breaching any of the cited Terms of use
            shall be for our breach of contract as per these Terms.
          </p>
          <p>
            b) Subject to point number (d), <strong>Fasttrackvisa.com</strong> 
            disclaims any loss/damages, liability, data corruption, punitive
            loss, wasted time, loss of goodwill, opportunity and profits caused
            in relation to use of any information/services provided through it,
            howsoever arising, as per agreement, trot or otherwise, even if the
            same was projected or <strong>Fasttrackvisa.com</strong> was aware
            of the propensity of such liability/damage/loss.
          </p>
          <p>
            c) Subject to point number (d) below, or else so far as legitimated,
            total legal responsibility of <strong>Fasttrackvisa.com</strong> as
            per the Terms of use in respect of direct liability, loss or damage,
            howsoever arising, as per agreement, trot or otherwise, shall be
            limited as per claim or a series of claims to USD 50.
          </p>
          <p>
            d) None of these cited Terms of use shall limit our legal
            responsibility for (i) damage/loss for death; (ii) individual injury
            caused on account of our inattention; or (iii) for any deceitful or
            false misrepresentation made by us or those under our control.
          </p>
          <p>
            e) Any consumer who is using <strong>Fasttrackvisa.com</strong> 
            shall be refrained from all of these cited Terms of use and no
            legitimate provisions will further limit his/her statutory rights.
          </p>
          <h4 className={styles.title}>Severability</h4>
          <p>
            In accordance with the legitimate provision, if any of these Terms
            of use are found unacceptable or unenforceable at any point of time
            by the forum of a competent jurisdiction, court or tribunal, that
            will not result into nullify the remainder of these Terms of use.
            The cited Terms of use shall be altered or amended only by
            disuniting or modifying the provisions that are essential to make
            them valid and legitimate. If in case the same is not applicable,
            then substitute provisions can be applied to make these Terms of use
            valid and enforceable. Any unacceptable or unlawful provisions shall
            be severable from these Terms of use so that their authenticity and
            enforceability shall not get impacted again by any forum of a
            competent jurisdiction, court or tribunal.
          </p>
          <h4 className={styles.title}>Terms of Use &amp; Alterations</h4>
          <p>
            <strong>Fasttrackvisa.com</strong> reserves the right to alter or
            change its Terms of use without any prior intimation. Continuation
            of your access to <strong>Fasttrackvisa.com</strong> website or
            availing any services post alteration will constitute your
            acceptance of those new/amended Terms of use. Hence, before making
            any further use of <strong>Fasttrackvisa.com</strong>, you should go
            through the same cautiously.
          </p>
          <h4 className={styles.title}>Termination</h4>
          <p>
            If in case <strong>Fasttrackvisa.com</strong> believes that you are
            using the website/services breaching any of the stated Terms &amp;
            Conditions, <strong>Fasttrackvisa.com</strong> reserve the right to
            limit your access to the website at any point of time without any
            intimation.
          </p>
          <h5 className={styles.title}>Governing Law</h5>
          <p>
            Use of <strong>Fasttrackvisa.com</strong> and its relevant services
            are governed by law. Hence, you are deemed to abide by any disputes
            or claims associated with <strong>Fasttrackvisa.com</strong> to the
            authority of the courts.
          </p>
          <h5 className={styles.title}>Visa and Passport</h5>
          <p>
            For any information related to Visa and Passport, user should
            consult with the relevant Consulate /Embassy. 
            <strong>Fasttrackvisa.com</strong> will review the documents and
            other information before the departure. The reason being, sometimes
            the prerequisite may differ. However, at any point of time, 
            <strong>Fasttrackvisa.com</strong> shall not be held responsible if
            an applicant/user is detained at airport or refused to board the
            flight or gets no access to the territory of visiting country on
            account of any of the following reasons that are occurred from use’s
            end:
          </p>
          <p>
            1) Not accompanied by the correct/valid Passport
            <br />
            1) Not carrying the essential documents and Visa, which are required
            before accessing to the territory of a foreign country or required
            at the visiting airport.
          </p>
          <p>
            Health: Prior flying to the visiting country, user should consult
            with the doctor about his/her health condition and recommended
            inoculations, as the same may change at any point of time.
            Furthermore, a user is solely responsible if he/she is undergoing
            the prescribed medicines and following the medical counsel as
            instructed
          </p>
          <p>
            All services rendered through <strong>Fasttrackvisa.com</strong> are
            in clear understanding that <strong>Fasttrackvisa.com</strong> shall
            not be relied or liable for making any suggestions or decisions
            related to user’s voyage. <strong>Fasttrackvisa.com</strong> doesn’t
            warranty you for the disseminated information on the website and its
            uninterrupted availability, precision, security, compatibility or
            any services offered.
          </p>
          <h5 className={styles.title}>DISCLAIMER</h5>
          <p>
            Information shared and communicated over Internet are subject to
            several security perils. Hence, in case of any damages or losses
            whatsoever, special or castigatory, direct or indirect, incidental
            or consequential, alteration or deletion, confidential or exposure,
            security violation, system failure due to unauthorized use or
            access, we shall not be held responsible for any consequences.
          </p>
          <p>
            We hereby completely disclaim all assurances with regard to the use
            of software and hardware to protect this website from any special,
            consequential or direct damages and support the website with all
            implicit warranties. Hence, as third party service provider, we or
            our employees, officers, subsidiaries, affiliates, partners, agents
            and heir shall not be directly/indirectly liable to you in any which
            scenario for any errors, misuse, viruses, third party interceptions,
            inaccuracies, loss of data due to hacker attacks, disruptions in the
            communication or delivery of services. Furthermore, this is to be
            informed that for the sake of information, our website may be linked
            to other websites as well. Thus, in any way our website is not
            liable for the breach of any privacy or use of the content of those
            websites.
          </p>
          <h5 className={styles.title}>SUMMARY</h5>
          <p>
            Upon accessing our website and using its services, you unreservedly
            agree and comply with all the privacy policies and relevant terms
            and conditions. If you resist complying with any of our privacy
            policies or privacy statement, please do not use this site.
          </p>
          <p>
            We hereby completely disclaim all assurances with regard to the use
            of software and hardware to protect this website from any special,
            consequential or direct damages and support the website with all
            implicit warranties. Hence, as third party service provider, we or
            our employees, officers, subsidiaries, affiliates, partners, agents
            and heir shall not be directly/indirectly liable to you in any which
            scenario for any errors, misuse, viruses, third party interceptions,
            inaccuracies, loss of data due to hacker attacks, disruptions in the
            communication or delivery of services. Furthermore, this is to be
            informed that for the sake of information, our website may be linked
            to other websites as well. Thus, in any way our website is not
            liable for the breach of any privacy or use of the content of those
            websites.
          </p>
          <h5 className={styles.title}>Refund &amp; cancellation policy</h5>
          <p>
            If you wishes to cancel the visa application then the refund will be
            entitled in following cases-
            <br />
            As soon as you make the payment at www.fasttrackvisa.com, we will
            commence the processing of an order immediately. (NOTE: Refund can
            be possible in the case wherein your application is not being
            processed or not being submitted to the immigration for further
            approval.)
          </p>
          <p>
            Any cancellation related to insurance shall not be entertained after
            the order is being processed/policy document being published basis
            on your consent
          </p>
          <p>
            No refund shall be processed once your application is approved by
            the Visa issuing authority (i.e. Visa is Posted), then you must
            comply in accordance with the policy.
          </p>
          <p>
            After we process your application within 24 hours, but it is not yet
            being accepted by the immigration department or is not yet being
            paid at the immigration and you wishes to withdraw the application
            then there shall be a standard deduction charge of $69.00. But in
            case you wishes to cancel the visa application after 24 hours, then
            we will refund upto the 50% visa fees only (after the deduction of
            service fees and bank charges).
          </p>
          <p>
            In case you wishes to cancel the visa application after 24 hours but
            we have forwarded it to the Embassy, then no fees will be refunded
            in any circumstances.
          </p>
          <p>
            Any visa which is being approved, and an applicant wishes to cancel
            the application then there is a cancellation fee that has to be paid
            to the immigration department and for getting it cancelled we will
            charge a service fee of $100.00.
          </p>
          <p>
            Refund shall not be processed in case of rejection, where in you
            have already applied in government system from some other service
            provider/travel agency alternatively or in advance.
          </p>
          <p>
            Due to Covid-19 pandemic across the globe,there have been instances
            wherein immigration doesn't approve e-visa or cancel the approved
            e-visa for a particular national without prior notification.
            Therefore, no refund shall be entertained by FastTrackVisa on any
            such cases with effect from March 1, 2020 till the further notice.
            <br />
            In any case, services fees (40 USD), express service fees (200 USD)
            and the transaction charges are non-refundable.
          </p>
          <p>
            In case of cancellation/Rejection of visa application by the
            embassy, no fees will be refunded.
          </p>
          <p>
            If the embassy needs any additional documents and you have not
            provided, due to which the visa application got rejected than also
            fees will not be refunded.
          </p>
          <p>
            You may cancel the visa application by contacting us on our service
            line or you can also reach us through mail on info@fasttrackvisa.com
            / WhatsApp number +919643106530. Under any circumstances,
            FasttrackVisa.com will not refund any payment that has been done by
            credit card and has crossed 40 days of initiating the payment
          </p>
          <p>
            <strong>Processing Time</strong>
            <br />
            Processing time shown in visa applications under FastTrackVisa are
            approximate and based on Embassy/Consulates processing times and
            under normal circumstances the processing time should be calculated
            after submitting the documents to Embassy/Consulate. The
            Embassy/Consulate may delay the processing time due to the request
            for any additional documents, local holidays or festivals that
            occurred during the duration of the processing of visas without any
            further explanation. FastTrackVisa shall not be responsible for any
            denial, cancellation or financial losses due to delay or reject in
            processing from the Embassy. No service fees, embassy fees, shipping
            charges or any other portion of visa fees will be refunded due to
            delay or denial of service.
          </p>
          <p>
            <strong>Service Description</strong>
            <br />
            FastTrackVisa tries to provide accurate data on the website.
            However, any changes in fees, documents or processing times done by
            Consulate than FastTrackVisa cannot guarantees that the accurate
            data or information will be available always on the website. In any
            case you will not hold FastTrackVisa responsible for not providing
            accurate data or information on the website.
          </p>
          <p>
            <strong>Service</strong>
            <br />
            Any information provided on this website are subject to change
            without giving any prior information. FastTrackVisa can request you
            to submit any additional documents that have not been provided in
            any application form if the Embassy/Consulates requests them to
            provide. FastTrackVisa shall not be responsible for the denial of
            any visa from Consulates and cannot provide you the reason for the
            denial of visa. Processing time of visa are approximately based on
            normal circumstances, it may be delay due to any festivals or local
            holidays came during visa processing period. FastTrackVisa shall not
            be responsible for any delay of visa processing by the
            Embassy/Consulate.
          </p>
          <p>
            <strong>Communications</strong>
            <br />
            By using this website, you give FastTrackVisa full permission to
            contact you via email, phone or any other electronic or
            non-electronic modes of communication.
          </p>
          <p>
            <strong>Security</strong>
            <br />
            By submitting the forms, you agrees that the information provided by
            you is true and accurate. You also agrees that any changes that has
            been done in your profile are by using User ID and password, whether
            done by you or not FastTrackVisa, is not responsible for the same .
            By using this site, you agrees that you are responsible for
            maintaining the confidentiality of your User ID and password and if
            anyone tries to access your account without your permission then you
            agrees to notify us immediately.
          </p>
          <p>
            <strong>Intellectual Property</strong>
            <br />
            This site including all information, source codes, images, data,
            software, database, functionality, graphics, and website design are
            solely owned and controlled by us. All the source codes, Html
            designs, website designs, images, logo, data, etc cannot be copied,
            reproduced, sketched, painted, uploaded, modified, republished,
            transmitted, translated without our prior permission. The content
            and all the trademarks provided on this site are "AS-IS" information
            and are for personal use only.
            <br />
            <strong>Prohibited Activities</strong>
            <br />
            You may not access or use this site for any other purpose other than
            that for which we make this site available. As a user, you agrees
            not to-
          </p>
          <ol>
            <li>
              <ol>
                <li>
                  1.Use this website to advertise for your own use or to offer
                  the services that are available on this website.
                </li>
                <li>
                  2.Engaged in unauthorized framing or linking to the site.
                </li>
                <li>
                  3.The trick, defraud or mislead us and other users, especially
                  in any attempt to learn sensitive account information such as
                  user passwords and account credentials.
                </li>
                <li>
                  4.Delete the copyright or any other exclusive right notice
                  from other contents.
                </li>
              </ol>
            </li>
          </ol>
          <ol>
            <li>
              5.Use the website in a manner inconsistent with any applicable
              laws or regulations.
            </li>
          </ol>
          <p>
            <strong>Links</strong>
            <br />
            FastTrackVisa contains links to third party websites. These links
            are only provided for informational resources and FastTrackVisa has
            no control over the website of the third party. We are not
            responsible for the content or any accuracy of data of third-party
            websites linked to us.
          </p>
          <p>
            <strong>Disclaimer</strong>
            <br />
            Any access or use by you on this website is at your own risk. Any
            damages or inability to use our services or products is on your
            responsibility and FastTrackVisa is not responsible for any of your
            actions. All the downloading of visa and uploading the files will be
            done at your own risk and you agrees that FastTrackVisa and
            employees working in that company shall not be liable to pay any
            damages done by your inability to use this website.
          </p>
          <p>
            This website contains data "AS IS" to all the users. FastTrackVisa
            does not make any guarantee or representations of any kind
            concerning information, requirements, restrictions, quality,
            content, theme, style, provided directly or through any third party
            website to this website.
          </p>
          <p>
            <strong>Restrictions On Use</strong>
            <br />
            This website is intended to use by adult individuals over 18 years
            of age. You may not use this site for any reason other than its
            intended purpose. You also agrees that if you submit any information
            or content than you agrees not to post, transmit any virus or other
            harmful components that violates the copyright or intellectual
            property of any person or entity.
          </p>
        </div>
      </Container>
    </>
  );
}
