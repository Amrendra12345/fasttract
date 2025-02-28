import React from "react";
import Banner from "../components/home-page/Banner";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

export default function Visa(props) {
  const { locale } = useRouter();
  // console.log(props.visaallproducting.country_site)
  const page_url = props.pageUrl.replace(/-/g, " ");
  return (
    <>
      <Head>
        <title>{`Apply for ${page_url} Online | Fast Track Visa `}</title>
        <meta
          name="description"
          content={`Apply for ${page_url} hassle free online. We offer quick processing and expert assistance. Start your  visa application today!`}
        />
        <link
          rel="canonical"
          href={`https://fasttrackvisa.com/${locale}/${props.pageUrl}`}
        />
      </Head>
      <Banner pageTitle={`Your ${page_url} Is Just A Few Clicks Away...`} />
      <Container>
        <ol className="breadcrumb pl-0 bg-white">
          <li className="breadcrumb-item">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {page_url}{" "}
          </li>
        </ol>
        <div className="desi-work-container pt-3" id="visaallproduct">
          <Row className="justify-content-center">
            {props.visaallproducting.allproduct.map((allproduct, z) => (
              <Col sm={6} md={6} lg={4} key={z}>
                <div className="plan_box mb-2">
                  <figure>
                    <Image
                      alt={allproduct.title}
                      src={
                        // 2
                        allproduct.title == "科威特旅游电子签证"
                          ? "/country/Kuwait.webp"
                          : allproduct.title == "印度旅游电子签证"
                          ? "/country/India.webp"
                          : allproduct.title == "印度商务电子签证"
                          ? "/country/India 8.webp"
                          : allproduct.title == "新西兰旅游ETA"
                          ? "/country/newZealand.webp"
                          : allproduct.title == "美国旅游 ESTA 签证"
                          ? "/country/USA.webp"
                          : allproduct.title == "美国商业 ESTA"
                          ? "/country/USA 1.webp"
                          : allproduct.title == "加拿大旅游ETA"
                          ? "/country/Canada.webp"
                          : allproduct.title == "澳大利亚电子访客签证"
                          ? "/country/Australia.webp"
                          : //3
                          allproduct.title == "泰国旅游电子签证"
                          ? "/country/Thailand.webp"
                          : //4 JAPAN
                          allproduct.title == "ベトナム観光電子ビザ"
                          ? "/country/Vietnam.webp"
                          : allproduct.title == "カンボジア観光電子ビザ"
                          ? "/country/Cambodia.webp"
                          : allproduct.title == "インドの観光電子ビザ"
                          ? "/country/India.webp"
                          : allproduct.title == "スリランカの観光電子ビザ"
                          ? "/country/Srilanka.webp"
                          : allproduct.title == "エジプトの観光電子ビザ"
                          ? "/country/Egypt.webp"
                          : allproduct.title == "アゼルバイジャンの観光電子ビザ"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title == "バーレーンの観光電子ビザ"
                          ? "/country/Bahrein.webp"
                          : allproduct.title == "ケニアの観光電子ビザ"
                          ? "/country/Kenya.webp"
                          : allproduct.title == "クウェートの観光電子ビザ"
                          ? "/country/Kuwait.webp"
                          : allproduct.title == "ニュージーランド観光ETA"
                          ? "/country/newZealand.webp"
                          : allproduct.title == "サウジアラビアの観光電子ビザ"
                          ? "/country/Saudi Arabia.webp"
                          : allproduct.title == "インドネシアの観光電子ビザ"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title == "オマーンの観光電子ビザ"
                          ? "/country/Oman.webp"
                          : allproduct.title == "ロシアの観光電子ビザ"
                          ? "/country/Russia.webp"
                          : allproduct.title == "米国観光ESTAビザ"
                          ? "/country/USA.webp"
                          : allproduct.title == "カナダ観光ETA"
                          ? "/country/Canada.webp"
                          : allproduct.title == "オーストラリア e 観光ビザ"
                          ? "/country/Australia.webp"
                          : allproduct.title ==
                            "تأشيرة فنزويلا السياحية الإلكترونية"
                          ? "/country/venezuela.webp"
                          : //5 hONG KONG
                          //6 SOUTH KOREA
                          //7 PHILIPPNES
                          //8 THAILAND
                          //9 UNITED KINGDOM
                          //10  iNDIA
                          allproduct.title == "वियतनाम पर्यटक ई-वीजा"
                          ? "/country/Vietnam.webp"
                          : allproduct.title == "कंबोडिया पर्यटक ई-वीजा"
                          ? "/country/Cambodia.webp"
                          : allproduct.title == "कंबोडिया बिजनेस ई-वीजा"
                          ? "/country/Cambodia 2.webp"
                          : allproduct.title == "श्रीलंका पर्यटक ई-वीजा"
                          ? "/country/Srilanka 3.webp"
                          : allproduct.title == "श्रीलंका व्यापार ई-वीजा"
                          ? "/country/srilanka 1.webp"
                          : allproduct.title == "श्रीलंका ट्रांजिट ई-वीजा"
                          ? "/country/Srilanka 2.webp"
                          : allproduct.title == "श्रीलंका व्यापार ई-वीजा"
                          ? "/country/srilanka 1.webp"
                          : allproduct.title == "मिस्र पर्यटक ई-वीजा"
                          ? "/country/Egypt.webp"
                          : allproduct.title == "अज़रबैजान पर्यटक ई-वीजा"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title == "बहरीन पर्यटक ई-वीजा"
                          ? "/country/Bahrein.webp"
                          : allproduct.title == "केन्या पर्यटक ई-वीजा"
                          ? "/country/Kenya.webp"
                          : allproduct.title == "मलेशिया पर्यटक ई-वीजा"
                          ? "/country/Malaysia.webp"
                          : allproduct.title == "रूस पर्यटक ई-वीजा"
                          ? "/country/Russia.webp"
                          : allproduct.title == "ऑस्ट्रेलिया ई आगंतुक वीजा"
                          ? "/country/Australia.webp"
                          : allproduct.title == "लाओस पर्यटक ई-वीजा"
                          ? "/country/Laos.webp"
                          : allproduct.title == "मोरक्को पर्यटक ई-वीजा"
                          ? "/country/Morocco.webp"
                          : allproduct.title == "दक्षिण अफ्रीका पर्यटक ई-वीजा"
                          ? "/country/South Africa.webp"
                          : allproduct.title == "अर्मेनिया पर्यटक ई-वीजा"
                          ? "/country/Armenian.webp"
                          : allproduct.title == "जॉर्जिया पर्यटक ई-वीजा"
                          ? "/country/Georgia.webp"
                          : allproduct.title == "मोल्दोवा पर्यटक ई-वीजा"
                          ? "/country/Moldova.webp"
                          : allproduct.title == "ताजिकिस्तान पर्यटक ई-वीजा"
                          ? "/country/tajikistan.webp"
                          : allproduct.title == "यूक्रेन पर्यटक ई-वीजा"
                          ? "/country/Ukraine 1.webp"
                          : allproduct.title ==
                            "यूक्रेन पर्यटक ई-वीजा तत्काल प्रवेश"
                          ? "/country/Ukraine 2.webp"
                          : allproduct.title == "यूक्रेन तत्काल पर्यटक ई-वीजा"
                          ? "/country/Ukraine 3.webp"
                          : allproduct.title == "यूक्रेन व्यापार ई-वीजा"
                          ? "/country/Ukraine 4.webp"
                          : allproduct.title == "यूक्रेन तत्काल व्यापार ई-वीजा"
                          ? "/country/Ukraine 4.webp"
                          : allproduct.title == "यूक्रेन व्यापार तत्काल ई-वीजा"
                          ? "/country/Ukraine 5.webp"
                          : allproduct.title ==
                            "संयुक्त अरब अमीरात पर्यटक ई-वीजा"
                          ? "/country/UAE.webp"
                          : allproduct.title == "रोमानिया पर्यटक ई-वीजा"
                          ? "/country/Romania.webp"
                          : allproduct.title == "इंडोनेशिया पर्यटक ई-वीजा"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title == "वेनेजुएला पर्यटक ई-वीजा"
                          ? "/country/venezuela.webp"
                          : allproduct.title == "कतर पर्यटक ई-वीजा"
                          ? "/country/Qatar 1.webp"
                          : allproduct.title == "कतर बिजनेस ई-वीजा"
                          ? "/country/Qatar 3.webp"
                          : allproduct.title == "थाईलैंड पर्यटक ई-वीजा"
                          ? "/country/Thailand.webp"
                          : //11 SRI LANKA
                          //12 SOUTH AFRICA
                          //13 AUSTRALIA
                          //14 KENYA
                          //15 KUWAIT
                          // 16 MALAYSIA
                          // 17 NEW ZEALAND
                          //18 SAUDI ARABAI
                          //19 TURKEY
                          allproduct.title == "Laos Turist E-Vizesi"
                          ? "/country/Laos.webp"
                          : allproduct.title == "Tayvan Turist E-Vizesi"
                          ? "/country/Taiwan.webp"
                          : allproduct.title == "Ermenistan Turist E-Vizesi"
                          ? "/country/Armenian.webp"
                          : allproduct.title == "Romanya Turist E-Vizesi"
                          ? "/country/Romania.webp"
                          : allproduct.title == "Meksika Turist E-Vizesi"
                          ? "/country/Maxico.webp"
                          : allproduct.title == "Endonezya Turist E-Vizesi"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title == "Umman Turist E-Vizesi"
                          ? "/country/Oman.webp"
                          : //20 UKRAINA
                          allproduct.title ==
                            "Індійська туристична електронна віза"
                          ? "/country/India.webp"
                          : allproduct.title ==
                            "Ділова електронна віза Шрі-Ланки"
                          ? "/country/Srilanka 2.webp"
                          : allproduct.title ==
                            "Транзитна електронна віза Шрі-Ланки"
                          ? "/country/Srilanka.webp"
                          : allproduct.title ==
                            "Туристична електронна віза Шрі-Ланки"
                          ? "/country/Srilanka 3.webp"
                          : allproduct.title ==
                            "Єгипетська туристична електронна віза"
                          ? "/country/Egypt.webp"
                          : allproduct.title ==
                            "Туристична електронна віза Бахрейну"
                          ? "/country/Bahrein.webp"
                          : allproduct.title ==
                            "Туристична електронна віза Кенії"
                          ? "/country/Kenya.webp"
                          : allproduct.title ==
                            "Туристична електронна віза Кувейту"
                          ? "/country/Kuwait.webp"
                          : allproduct.title == "Ділова електронна віза в Індію"
                          ? "/country/India 1.webp"
                          : allproduct.title ==
                            "Туристична електронна віза Саудівської Аравії"
                          ? "/country/Saudi Arabia.webp"
                          : allproduct.title ==
                            "Туристична електронна віза в Мексику"
                          ? "/country/Maxico.webp"
                          : allproduct.title ==
                            "Туристична електронна віза Індонезії"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title ==
                            "Туристична електронна віза Оману"
                          ? "/country/Oman.webp"
                          : // 21 UAE
                          //22 CANADA
                          allproduct.title ==
                            "E-visa touristique pour le Vietnam"
                          ? "/country/Vietnam.webp"
                          : allproduct.title ==
                            "Visa de tourisme pour le Cambodge"
                          ? "/country/Cambodia.webp"
                          : allproduct.title ==
                            "Visa d&#39;affaires pour le Cambodge"
                          ? "/country/Cambodia 2.webp"
                          : allproduct.title ==
                            "Visa de tourisme pour l&#39;Inde"
                          ? "/country/India.webp"
                          : allproduct.title ==
                            "Visa de tourisme pour le Sri Lanka"
                          ? "/country/Srilanka.webp"
                          : allproduct.title ==
                            "E-visa de transit pour le Sri Lanka"
                          ? "/country/Srilanka 1.webp"
                          : allproduct.title ==
                            "Visa d&#39;affaires pour le Sri Lanka"
                          ? "/country/Srilanka 2.webp"
                          : allproduct.title ==
                            "E-visa de tourisme pour l&#39;Égypte"
                          ? "/country/Egypt.webp"
                          : allproduct.title ==
                            "E-visa de tourisme pour l&#39;Égypte"
                          ? "/public/country/"
                          : allproduct.title ==
                            "E-visa de tourisme pour l&#39;Azerbaïdjan"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title ==
                            "E-visa de tourisme pour Bahreïn"
                          ? "/country/Bahrein.webp"
                          : allproduct.title == "Visa de tourisme pour le Kenya"
                          ? "/country/Kenya.webp"
                          : allproduct.title ==
                            "E-Visa de tourisme pour le Koweït"
                          ? "/country/Kuwait.webp"
                          : allproduct.title ==
                            "ETA touristique en Nouvelle-Zélande"
                          ? "/country/newZealand.webp"
                          : allproduct.title ==
                            "Visa de tourisme pour la Turquie"
                          ? "/country/Turkey.webp"
                          : allproduct.title == "VISA ESTA Touristique USA"
                          ? "/country/USA.webp"
                          : allproduct.title == "États-Unis Entreprise ESTA"
                          ? "/country/USA 1.webp"
                          : allproduct.title == "Australie e Visa de visiteur"
                          ? "/country/Australia.webp"
                          : //23 HUNGARY

                          allproduct.title == "Vietnami turisztikai e-vízum"
                          ? "/country/Vietnam.webp"
                          : allproduct.title == "Kambodzsai turisztikai e-vízum"
                          ? "/country/Cambodia.webp"
                          : allproduct.title == "Kambodzsa üzleti E-Visa"
                          ? "/country/Cambodia 2.webp"
                          : allproduct.title == "India turisztikai e-vízum"
                          ? "/country/India.webp"
                          : allproduct.title == "Sri Lanka turisztikai e-vízum"
                          ? "/country/Srilanka.webp"
                          : allproduct.title == "Egyiptom turista E-Visa"
                          ? "/country/Egypt.webp"
                          : allproduct.title == "Ausztrália e Visitor Visa"
                          ? "/country/Australia.webp"
                          : allproduct.title == "Azerbajdzsán Tourist E-Visa"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title == "Bahrein Tourist E-Visa"
                          ? "/country/Bahrein.webp"
                          : allproduct.title == "Kuvaiti turisztikai e-vízum"
                          ? "/country/Kuwait.webp"
                          : allproduct.title == "USA turista ESTA VISA"
                          ? "/country/USA.webp"
                          : allproduct.title == "Új-zélandi turisztikai ETA"
                          ? "/country/newZealand.webp"
                          : allproduct.title == "Kanada Touristen ETA"
                          ? "/country/Canada.webp"
                          : allproduct.title ==
                            "ESTA-Visum für Touristen in den USA"
                          ? "/country/USA.webp"
                          : allproduct.title ==
                            "E-Visum für Touristen für Russland"
                          ? "/country/Russia.webp"
                          : allproduct.title == "Touristen-E-Visum für Kenia"
                          ? "/country/Kenya.webp"
                          : allproduct.title ==
                            "Elektronisches Touristenvisum für Kuwait"
                          ? "/country/Kuwait.webp"
                          : allproduct.title ==
                            "ETA für Touristen in Neuseeland"
                          ? "/country/newZealand.webp"
                          : allproduct.title ==
                            "E-Visum für Touristen für Bahrain"
                          ? "/country/Bahrein.webp"
                          : allproduct.title ==
                            "Touristen-E-Visum für Aserbaidschan"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title == "Australien e Besuchervisum"
                          ? "/country/Australia.webp"
                          : allproduct.title ==
                            "Elektronisches Touristenvisum für Indien"
                          ? "/country/India.webp"
                          : allproduct.title == "E-Visum für Indien"
                          ? "/country/India 6.webp"
                          : allproduct.title ==
                            "Elektronisches Touristenvisum für Sri Lanka"
                          ? "/country/Srilanka.webp"
                          : allproduct.title == "Sri Lanka Business E-Visum"
                          ? "/country/Srilanka 2.webp"
                          : allproduct.title ==
                            "E-Visum für Touristen für Saudi-Arabien"
                          ? "/country/Saudi Arabia.webp"
                          : allproduct.title == "Oman Touristen-E-Visum"
                          ? "/country/Oman.webp"
                          : allproduct.title ==
                            "Elektronisches Touristenvisum für Indonesien"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title == "Sri Lanka Transit-E-Visum"
                          ? "/country/Srilanka 3.webp"
                          : allproduct.title ==
                            "E-Visum für Touristen für Ägypten"
                          ? "/country/Egypt.webp"
                          : allproduct.title ==
                            "Elektronisches Touristenvisum für Vietnam"
                          ? "/country/Vietnam.webp"
                          : allproduct.title == "Touristen-E-Visum für Laos"
                          ? "/country/Laos.webp"
                          : allproduct.title ==
                            "Elektronisches Touristenvisum für Kambodscha"
                          ? "/country/Cambodia.webp"
                          : allproduct.title == "Kambodscha Business E-Visum"
                          ? "/country/Cambodia 1.webp"
                          : //23 HUNGARY
                          //24 AUSTRIA
                          //25 SERBIA
                          //26 SWITZERLAND
                          //27 GERMANY
                          //28  ISRAEL
                          allproduct.title ==
                            "ויזה אלקטרונית לתיירים אזרבייג&#39;ן"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title == "ויזה אלקטרונית לתייר בבחריין"
                          ? "/country/Bahrein.webp"
                          : allproduct.title == "ויזה אלקטרונית לתיירים לקניה"
                          ? "/country/Kenya.webp"
                          : allproduct.title == "ניו זילנד תיירות ETA"
                          ? "/country/newZealand.webp"
                          : allproduct.title == "קנדה תיירות ETA"
                          ? "/country/Canada.webp"
                          : allproduct.title ==
                            "ויזה אלקטרונית לתייר של טג&#39;יקיסטן"
                          ? "/country/tajikistan.webp"
                          : allproduct.title ==
                            "ויזה אלקטרונית לתיירים של ארמניה"
                          ? "/country/Armenian.webp"
                          : allproduct.title == "ויזה אלקטרונית לתיירים למרוקו"
                          ? "/country/Morocco.webp"
                          : //27  BULGARRIA
                          allproduct.title ==
                            "Виетнамска туристическа електронна виза"
                          ? "/country/Vietnam.webp"
                          : allproduct.title ==
                            "Туристическа електронна виза за Камбоджа"
                          ? "/country/Cambodia.webp"
                          : allproduct.title ==
                            "Индийска туристическа електронна виза"
                          ? "/country/India.webp"
                          : allproduct.title ==
                            "Туристическа електронна виза за Шри Ланка"
                          ? "/country/Srilanka.webp"
                          : allproduct.title ==
                            "Бизнес електронна виза за Шри Ланка"
                          ? "/country/Srilanka 1.webp"
                          : allproduct.title ==
                            "Транзитна електронна виза за Шри Ланка"
                          ? "/country/Srilanka 2.webp"
                          : allproduct.title ==
                            "Египетска туристическа електронна виза"
                          ? "/country/Egypt.webp"
                          : allproduct.title ==
                            "Австралийска е посетителска виза"
                          ? "/country/Australia.webp"
                          : allproduct.title ==
                            "Азербайджанска туристическа електронна виза"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title ==
                            "Туристическа електронна виза за Бахрейн"
                          ? "/country/Bahrein.webp"
                          : allproduct.title ==
                            "Туристическа електронна виза за Кения"
                          ? "/country/Kenya.webp"
                          : allproduct.title ==
                            "Кувейтска туристическа електронна виза"
                          ? "/country/Kuwait.webp"
                          : allproduct.title == "Новозеландски туристически ETA"
                          ? "/country/newZealand.webp"
                          : allproduct.title ==
                            "Електронна туристическа виза за Русия"
                          ? "/country/Russia.webp"
                          : allproduct.title == "ESTA туристическа виза за САЩ"
                          ? "/country/USA.webp"
                          : allproduct.title == "Бизнес ESTA в САЩ"
                          ? "/country/USA 1.webp"
                          : allproduct.title == "Канадски туристически ETA"
                          ? "/country/Canada.webp"
                          : allproduct.title ==
                            "Бизнес електронна виза за Индия"
                          ? "/country/India 1.webp"
                          : allproduct.title ==
                            "Лаоска туристическа електронна виза"
                          ? "/country/Laos.webp"
                          : allproduct.title ==
                            "Електронна туристическа виза за Саудитска Арабия"
                          ? "/country/Saudi Arabia.webp"
                          : allproduct.title ==
                            "Индонезийска туристическа електронна виза"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title ==
                            "Туристическа електронна виза за Оман"
                          ? "/country/Oman.webp"
                          : allproduct.title ==
                            "Бизнес електронна виза за Камбоджа"
                          ? "/country/Cambodia 2.webp"
                          : //28 FRANCE
                          allproduct.title ==
                            "Visa d&#39;affaires pour l&#39;Inde"
                          ? "/country/India 1.webp"
                          : //29 ITALY

                          allproduct.title ==
                            "Visto turistico elettronico per il Vietnam"
                          ? "/country/Vietnam.webp"
                          : allproduct.title ==
                            "Visto elettronico turistico per la Cambogia"
                          ? "/country/Cambodia.webp"
                          : allproduct.title ==
                            "Visto elettronico per affari per la Cambogia"
                          ? "/country/Cambodia 1.webp"
                          : allproduct.title ==
                            "Visto elettronico turistico per l&#39;India"
                          ? "/country/India.webp"
                          : allproduct.title ==
                            "Visto elettronico per affari per l&#39;India"
                          ? "/country/India 1.webp"
                          : allproduct.title ==
                            "Visto elettronico per lo Sri Lanka"
                          ? "/country/Srilanka.webp"
                          : allproduct.title ==
                            "Visto elettronico di transito per lo Sri Lanka"
                          ? "/country/Srilanka 2.webp"
                          : allproduct.title ==
                            "Visto elettronico per affari dello Sri Lanka"
                          ? "/country/Srilanka 1.webp"
                          : allproduct.title ==
                            "Visto turistico elettronico per l&#39;Egitto"
                          ? "/country/Egypt.webp"
                          : allproduct.title == "Australia e Visto turistico"
                          ? "/country/Australia.webp"
                          : allproduct.title ==
                            "Visto turistico elettronico per l&#39;Azerbaigian"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title ==
                            "Visto turistico elettronico per il Bahrein"
                          ? "/country/Bahrein.webp"
                          : allproduct.title ==
                            "Visto turistico elettronico per il Kenya"
                          ? "/country/Kenya.webp"
                          : allproduct.title ==
                            "Visto turistico elettronico per il Kuwait"
                          ? "/country/Kuwait.webp"
                          : allproduct.title == "ETA turistico neozelandese"
                          ? "/country/newZealand.webp"
                          : allproduct.title ==
                            "Visto turistico elettronico per la Russia"
                          ? "/country/Russia.webp"
                          : allproduct.title == "Visto turistico ESTA USA"
                          ? "/country/USA.webp"
                          : allproduct.title == "ETA turistico canadese"
                          ? "/country/Canada.webp"
                          : allproduct.title ==
                            "Visto turistico elettronico per il Laos"
                          ? "/country/Laos.webp"
                          : allproduct.title ==
                            "Visto turistico elettronico per l&#39;Arabia Saudita"
                          ? "/country/Saudi Arabia.webp"
                          : allproduct.title ==
                            "Visto elettronico per l&#39;Indonesia"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title ==
                            "Visto turistico elettronico per l&#39;Oman"
                          ? "/country/Oman.webp"
                          : //30 DENMARK

                          allproduct.title == "Vietnam turist e-visum"
                          ? "/country/Vietnam.webp"
                          : allproduct.title == "Cambodja turist e-visum"
                          ? "/country/Cambodia.webp"
                          : allproduct.title == "Cambodja Business E-visum"
                          ? "/country/Cambodia 1.webp"
                          : allproduct.title == "Indien turist e-visum"
                          ? "/country/India.webp"
                          : allproduct.title == "Indien Business E-Visa"
                          ? "/country/India 1.webp"
                          : allproduct.title == "Sri Lanka turist e-visum"
                          ? "/country/Srilanka.webp"
                          : allproduct.title == "Sri Lanka Business E-Visa"
                          ? "/country/Srilanka 1.webp"
                          : allproduct.title == "Sri Lanka Transit E-visum"
                          ? "/country/Srilanka 2.webp"
                          : allproduct.title == "Egyptens turist e-visum"
                          ? "/country/Egypt.webp"
                          : allproduct.title == "Australien e Besøgsvisum"
                          ? "/country/Australia.webp"
                          : allproduct.title == "Aserbajdsjan turist e-visum"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title == "Bahrain turist e-visum"
                          ? "/country/Bahrein.webp"
                          : allproduct.title == "Kenya turist e-visum"
                          ? "/country/Kenya.webp"
                          : allproduct.title == "Kuwait turist e-visum"
                          ? "/country/Kuwait.webp"
                          : allproduct.title == "Laos turist e-visum"
                          ? "/country/Laos.webp"
                          : allproduct.title == "Saudi-Arabien turist e-visum"
                          ? "/country/Saudi Arabia.webp"
                          : allproduct.title == "Rusland turist e-visum"
                          ? "/country/Russia.webp"
                          : allproduct.title == "Indonesien turist e-visum"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title == "Oman turist e-visum"
                          ? "/country/Oman.webp"
                          : allproduct.title == "USA turist ESTA VISA"
                          ? "/country/USA.webp"
                          : //31 slovakia
                          allproduct.title ==
                            "Vietnamské turistické elektronické vízum"
                          ? "/country/Vietnam.webp"
                          : allproduct.title ==
                            "Laosské turistické elektronické vízum"
                          ? "/country/Laos.webp"
                          : allproduct.title ==
                            "Kambodžské turistické elektronické vízum"
                          ? "/country/Cambodia.webp"
                          : allproduct.title == "Kambodžské obchodné e-vízum"
                          ? "/country/Cambodia 1.webp"
                          : allproduct.title ==
                            "Indické turistické elektronické vízum"
                          ? "/country/India.webp"
                          : allproduct.title == "Obchodné E-víza v Indii"
                          ? "/country/India 1.webp"
                          : allproduct.title ==
                            "Turistické elektronické víza Srí Lanky"
                          ? "/country/Srilanka.webp"
                          : allproduct.title ==
                            "Obchodné elektronické víza Srí Lanky"
                          ? "/country/Srilanka 1.webp"
                          : allproduct.title ==
                            "Srílanské tranzitné elektronické vízum"
                          ? "/country/Srilanka 2.webp"
                          : allproduct.title ==
                            "Egyptské turistické elektronické vízum"
                          ? "/country/Egypt.webp"
                          : allproduct.title == "Austrália a návštevnícke víza"
                          ? "/country/Australia.webp"
                          : allproduct.title ==
                            "Azerbajdžanské turistické elektronické víza"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title ==
                            "Bahrajnské turistické elektronické vízum"
                          ? "/country/Bahrein.webp"
                          : allproduct.title ==
                            "Keňa turistické elektronické vízum"
                          ? "/country/Kenya.webp"
                          : allproduct.title ==
                            "Kuvajtské turistické elektronické vízum"
                          ? "/country/Kuwait.webp"
                          : allproduct.title ==
                            "Turistický ETA na Novom Zélande"
                          ? "/country/newZealand.webp"
                          : allproduct.title ==
                            "Saudská Arábia turistické E-vízum"
                          ? "/country/Saudi Arabia.webp"
                          : allproduct.title ==
                            "Ruské turistické elektronické vízum"
                          ? "/country/Russia.webp"
                          : allproduct.title ==
                            "Indonézske turistické elektronické vízum"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title ==
                            "Ománske turistické elektronické vízum"
                          ? "/country/Oman.webp"
                          : allproduct.title == "USA turistické ESTA VISA"
                          ? "/country/USA.webp"
                          : allproduct.title == "Kanadský turistický ETA"
                          ? "/country/Canada.webp"
                          : allproduct.title ==
                            "Szaúd-Arábia turisztikai e-vízuma"
                          ? "/country/Saudi Arabia.webp"
                          : allproduct.title == "Indonéziai turisztikai e-vízum"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title == "Laos Tourist E-Visa"
                          ? "/country/Laos.webp"
                          : //32 Norway

                          allproduct.title == "Kambodsja turist e-visum"
                          ? "/country/Cambodia.webp"
                          : allproduct.title == "India turist e-visum"
                          ? "/country/India.webp"
                          : allproduct.title == "India Business E-visum"
                          ? "/country/India 5.webp"
                          : allproduct.title == "Egypt turist e-visum"
                          ? "/country/Egypt.webp"
                          : allproduct.title == "Australia e besøksvisum"
                          ? "/country/Australia.webp"
                          : allproduct.title == "Saudi-Arabia turist e-visum"
                          ? "/country/Saudi Arabia.webp"
                          : allproduct.title == "Russland turist e-visum"
                          ? "/country/Russia.webp"
                          : allproduct.title == "Indonesia turist e-visum"
                          ? "/country/Indonesia1.webp"
                          : // 33 ireland
                          //spain
                          allproduct.title ==
                            "Visa electrónica de turista de Laos"
                          ? "/country/Laos.webp"
                          : allproduct.title ==
                            "Visa electrónica de turista para Kenia"
                          ? "/country/Kenya.webp"
                          : allproduct.title ==
                            "Visa electrónica de turista para Kuwait"
                          ? "/country/Kuwait.webp"
                          : allproduct.title ==
                            "Visa electrónica de turista para Arabia Saudita"
                          ? "/country/Saudi Arabia.webp"
                          : allproduct.title ==
                            "Visa electrónica de turista para Indonesia"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title ==
                            "Visa electrónica de turista para Omán"
                          ? "/country/Oman.webp"
                          : allproduct.title == "ESTA de negocios de EE. UU."
                          ? "/country/Usa 1.webp"
                          : // croatia
                          //36 poland

                          allproduct.title == "E-Visa turystyczna do Wietnamu"
                          ? "/country/Vietnam.webp"
                          : allproduct.title == "E-Visa turystyczna do Laosu"
                          ? "/country/Laos.webp"
                          : allproduct.title == "E-Visa turystyczna do Kambodży"
                          ? "/country/Cambodia.webp"
                          : allproduct.title == "E-Visa biznesowa do Kambodży"
                          ? "/country/Cambodia 1.webp"
                          : allproduct.title == "E-wiza turystyczna do Indii"
                          ? "/country/India.webp"
                          : allproduct.title == "E-wiza biznesowa do Indii"
                          ? "/country/India 3.webp"
                          : allproduct.title ==
                            "E-Visa turystyczna do Sri Lanki"
                          ? "/country/Srilanka.webp"
                          : allproduct.title == "Biznesowa e-Visa do Sri Lanki"
                          ? "/country/Srilanka 1.webp"
                          : allproduct.title == "E-Visa tranzytowa do Sri Lanki"
                          ? "/country/Srilanka 2.webp"
                          : allproduct.title == "E-Visa turystyczna do Egiptu"
                          ? "/country/Egypt.webp"
                          : allproduct.title == "Australia i wiza turystyczna"
                          ? "/country/Australia.webp"
                          : allproduct.title ==
                            "Turystyczna e-Visa do Azerbejdżanu"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title == "Turystyczna e-Visa do Bahrajnu"
                          ? "/country/Bahrein.webp"
                          : allproduct.title == "E-Visa turystyczna do Kenii"
                          ? "/country/Kenya.webp"
                          : allproduct.title == "E-Visa turystyczna do Kuwejtu"
                          ? "/country/Kuwait.webp"
                          : allproduct.title ==
                            "ETA turystyczna w Nowej Zelandii"
                          ? "/country/newZealand.webp"
                          : allproduct.title ==
                            "E-Visa turystyczna do Arabii Saudyjskiej"
                          ? "/country/Saudi Arabia.webp"
                          : allproduct.title == "E-wiza turystyczna do Rosji"
                          ? "/country/Russia.webp"
                          : allproduct.title ==
                            "E-Visa turystyczna do Indonezji"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title == "Turystyczna e-Visa do Omanu"
                          ? "/country/Oman.webp"
                          : allproduct.title == "Wiza turystyczna ESTA do USA"
                          ? "/country/USA.webp"
                          : allproduct.title == "Kanadyjska turystyczna ETA"
                          ? "/country/Canada.webp"
                          : //36 Lithuania

                          allproduct.title ==
                            "Vietnamo turistinė elektroninė viza"
                          ? "/country/Vietnam.webp"
                          : allproduct.title ==
                            "Laoso turistinė elektroninė viza"
                          ? "/country/Laos.webp"
                          : allproduct.title ==
                            "Kambodžos turistinė elektroninė viza"
                          ? "/country/Cambodia.webp"
                          : allproduct.title ==
                            "Kambodžos verslo elektroninė viza"
                          ? "/country/Cambodia 1.webp"
                          : allproduct.title ==
                            "Indijos turistinė elektroninė viza"
                          ? "/country/India.webp"
                          : allproduct.title ==
                            "Indijos verslo elektroninė viza"
                          ? "/country/India 1.webp"
                          : allproduct.title ==
                            "Šri Lankos verslo elektroninė viza"
                          ? "/country/Srilanka 1.webp"
                          : allproduct.title ==
                            "Šri Lankos tranzitinė elektroninė viza"
                          ? "/country/Srilanka 2.webp"
                          : allproduct.title ==
                            "Šri Lankos turistinė elektroninė viza"
                          ? "/country/Srilanka.webp"
                          : allproduct.title ==
                            "Egipto turistinė elektroninė viza"
                          ? "/country/Egypt.webp"
                          : allproduct.title == "Australijos e lankytojų viza"
                          ? "/country/Australia.webp"
                          : allproduct.title ==
                            "Azerbaidžano turistinė elektroninė viza"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title ==
                            "Bahreino turistinė elektroninė viza"
                          ? "/country/Bahrein.webp"
                          : allproduct.title ==
                            "Kenijos turistinė elektroninė viza"
                          ? "/country/Kenya.webp"
                          : allproduct.title ==
                            "Kuveito turistinė elektroninė viza"
                          ? "/country/Kuwait.webp"
                          : allproduct.title ==
                            "Naujosios Zelandijos turistinis ETA"
                          ? "/country/newZealand.webp"
                          : allproduct.title ==
                            "Saudo Arabijos turistinė elektroninė viza"
                          ? "/country/Saudi Arabia.webp"
                          : allproduct.title ==
                            "Rusijos turistinė elektroninė viza"
                          ? "/country/Russia.webp"
                          : allproduct.title ==
                            "Indonezijos turistinė elektroninė viza"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title ==
                            "Omano turistinė elektroninė viza"
                          ? "/country/Oman.webp"
                          : allproduct.title == "JAV turistinė ESTA VISA"
                          ? "/country/USA.webp"
                          : allproduct.title == "JAV verslo ESTA"
                          ? "/country/USA 1.webp"
                          : allproduct.title == "Kanados turistinis ETA"
                          ? "/country/Canada.webp"
                          : //36 Romania

                          allproduct.title ==
                            "Viză electronică turistică pentru Vietnam"
                          ? "/country/Vietnam.webp"
                          : allproduct.title == "E-Viză turistică pentru Laos"
                          ? "/country/Laos.webp"
                          : allproduct.title ==
                            "E-Viză turistică pentru Cambodgia"
                          ? "/country/Cambodia.webp"
                          : allproduct.title ==
                            "E-Visa de afaceri pentru Cambodgia"
                          ? "/country/Cambodia 1.webp"
                          : allproduct.title ==
                            "Viză electronică turistică pentru India"
                          ? "/country/India.webp"
                          : allproduct.title == "E-Visa de afaceri pentru India"
                          ? "/country/India 3.webp"
                          : allproduct.title ==
                            "E-Visa turistica pentru Sri Lanka"
                          ? "/country/Srilanka.webp"
                          : allproduct.title ==
                            "E-Visa de afaceri pentru Sri Lanka"
                          ? "/country/Srilanka 1.webp"
                          : allproduct.title ==
                            "E-Visa de tranzit pentru Sri Lanka"
                          ? "/country/Srilanka 2.webp"
                          : allproduct.title == "E-Visa turistica pentru Egipt"
                          ? "/country/Egypt.webp"
                          : allproduct.title == "Australia e Viza de vizitator"
                          ? "/country/Australia.webp"
                          : allproduct.title ==
                            "E-Visa turistica pentru Azerbaidjan"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title ==
                            "E-Visa turistica pentru Bahrain"
                          ? "/country/Bahrein.webp"
                          : allproduct.title ==
                            "Viză electronică turistică pentru Kenya"
                          ? "/country/Kenya.webp"
                          : allproduct.title == "E-Visa turistica pentru Kuweit"
                          ? "/country/Kuwait.webp"
                          : allproduct.title ==
                            "ETA Turistică din Noua Zeelandă"
                          ? "/country/newZealand.webp"
                          : allproduct.title ==
                            "E-Visa turistica pentru Arabia Saudita"
                          ? "/country/Saudi Arabia.webp"
                          : allproduct.title == "E-Visa turistica pentru Rusia"
                          ? "/country/Russia.webp"
                          : allproduct.title ==
                            "Viză electronică turistică pentru Indonezia"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title == "E-Viză turistică pentru Oman"
                          ? "/country/Oman.webp"
                          : allproduct.title == "VISA ESTA Turist SUA"
                          ? "/country/USA.webp"
                          : allproduct.title == "SUA Business ESTA"
                          ? "/country/USA 1.webp"
                          : allproduct.title == "Canada Turist ETA"
                          ? "/country/Canada.webp"
                          : //37 Latvia

                          allproduct.title == "Vjetnamas tūristu e-vīza"
                          ? "/country/Vietnam.webp"
                          : allproduct.title == "Laosas tūristu e-vīza"
                          ? "/country/Laos.webp"
                          : allproduct.title == "Kambodžas tūristu e-vīza"
                          ? "/country/Cambodia.webp"
                          : allproduct.title == "Kambodžas biznesa e-vīza"
                          ? "/country/Cambodia 1.webp"
                          : allproduct.title == "Indijas tūristu e-vīza"
                          ? "/country/India.webp"
                          : allproduct.title == "Indijas biznesa e-vīza"
                          ? "/country/India 2.webp"
                          : allproduct.title == "Šrilankas tūristu e-vīza"
                          ? "/country/Srilanka.webp"
                          : allproduct.title == "Šrilankas tranzīta e-vīza"
                          ? "/country/Srilanka 1.webp"
                          : allproduct.title == "Šrilankas biznesa e-vīza"
                          ? "/country/Srilanka 2.webp"
                          : allproduct.title == "Ēģiptes tūristu e-vīza"
                          ? "/country/Egypt.webp"
                          : allproduct.title == "Austrālijas e apmeklētāju vīza"
                          ? "/country/Australia.webp"
                          : allproduct.title == "Azerbaidžānas tūristu e-vīza"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title == "Bahreinas tūristu e-vīza"
                          ? "/country/Bahrein.webp"
                          : allproduct.title == "Kenijas tūristu e-vīza"
                          ? "/country/Kenya.webp"
                          : allproduct.title == "Kuveitas tūristu e-vīza"
                          ? "/country/Kuwait.webp"
                          : allproduct.title == "Jaunzēlandes tūristu ETA"
                          ? "/country/newZealand.webp"
                          : allproduct.title == "Saūda Arābijas tūristu e-vīza"
                          ? "/country/Saudi Arabia.webp"
                          : allproduct.title == "Krievijas tūristu e-vīza"
                          ? "/country/Russia.webp"
                          : allproduct.title == "Indonēzijas tūristu e-vīza"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title == "Omānas tūristu e-vīza"
                          ? "/country/Oman.webp"
                          : allproduct.title == "ASV tūristu ESTA VISA"
                          ? "/country/USA.webp"
                          : allproduct.title == "ASV biznesa ESTA"
                          ? "/country/USA 1.webp"
                          : allproduct.title == "Kanādas tūristu ETA"
                          ? "/country/Canada.webp"
                          : // 38 Netherlands
                          allproduct.title == "E-Toeristenvisum voor Vietnam"
                          ? "/country/Vietnam.webp"
                          : allproduct.title == "Laos e-toeristenvisum"
                          ? "/country/Laos.webp"
                          : allproduct.title == "E-Toeristenvisum voor Cambodja"
                          ? "/country/Cambodia.webp"
                          : allproduct.title == "E-Zakenvisum Cambodja"
                          ? "/country/Cambodia 1.webp"
                          : allproduct.title == "E-Toeristenvisum voor India"
                          ? "/country/India.webp"
                          : allproduct.title == "E-Zakenvisum voor India"
                          ? "/country/India 1.webp"
                          : allproduct.title ==
                            "E-Toeristenvisum voor Sri Lanka"
                          ? "/country/Srilanka.webp"
                          : allproduct.title == "E-Toeristenvisum voor Egypte"
                          ? "/country/Egypt.webp"
                          : allproduct.title == "Australië e bezoekersvisum"
                          ? "/country/Australia.webp"
                          : allproduct.title ==
                            "E-Toeristenvisum voor Azerbeidzjan"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title == "E-Toeristenvisum voor Bahrein"
                          ? "/country/Bahrein.webp"
                          : allproduct.title == "E-Toeristenvisum Kenia"
                          ? "/country/Kenya.webp"
                          : allproduct.title == "E-Toeristenvisum voor Koeweit"
                          ? "/country/Kuwait.webp"
                          : allproduct.title == "Toeristen ETA Nieuw-Zeeland"
                          ? "/country/newZealand.webp"
                          : allproduct.title == "E-Toeristenvisum Saoedi-Arabië"
                          ? "/country/Saudi Arabia.webp"
                          : allproduct.title == "E-Toeristenvisum voor Rusland"
                          ? "/country/Russia.webp"
                          : allproduct.title ==
                            "E-Toeristenvisum voor Indonesië"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title == "E-Toeristenvisum voor Oman"
                          ? "/country/Oman.webp"
                          : allproduct.title == "VS Toeristen ESTA VISA"
                          ? "/country/USA.webp"
                          : allproduct.title == "Zakelijk ESTA VS"
                          ? "/country/USA 1.webp"
                          : allproduct.title == "Toeristen ETA Canada"
                          ? "/country/Canada.webp"
                          : // 39 Rusia
                          //40 Belgium
                          allproduct.title == "E-visa de tourisme pour le Laos"
                          ? "/country/Laos.webp"
                          : allproduct.title ==
                            "E-Visa de tourisme pour l&#39;Arabie Saoudite"
                          ? "/country/Saudi Arabia.webp"
                          : allproduct.title ==
                            "E-Visa de tourisme pour la Russie"
                          ? "/country/Russia.webp"
                          : allproduct.title ==
                            "Visa touristique électronique pour l&#39;Indonésie"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title == "E-visa de tourisme pour Oman"
                          ? "/country/Oman.webp"
                          : allproduct.title == "ETA de tourisme au Canada"
                          ? "/country/Canada.webp"
                          : allproduct.title == "E-transitvisum voor Sri Lanka"
                          ? "/country/srilanka 2.webp"
                          : allproduct.title == "E-Zakenvisum voor Sri Lanka"
                          ? "/country/srilanka 1.webp"
                          : //41 Czech Republic
                          //42 Greece

                          allproduct.title ==
                            "Τουριστική ηλεκτρονική θεώρηση Βιετνάμ"
                          ? "/country/Vietnam.webp"
                          : allproduct.title ==
                            "Τουριστική ηλεκτρονική θεώρηση του Λάος"
                          ? "/country/Laos.webp"
                          : allproduct.title ==
                            "Τουριστική Ηλεκτρονική Βίζα Καμπότζης"
                          ? "/country/Cambodia.webp"
                          : allproduct.title ==
                            "Επιχειρηματική ηλεκτρονική θεώρηση Καμπότζης"
                          ? "/country/Cambodia 1.webp"
                          : allproduct.title ==
                            "Τουριστική Ηλεκτρονική Βίζα Ινδίας"
                          ? "/country/India.webp"
                          : allproduct.title ==
                            "Τουριστική ηλεκτρονική θεώρηση της Σρι Λάνκα"
                          ? "/country/Srilanka.webp"
                          : allproduct.title == "Σρι Λάνκα Business E-Visa"
                          ? "/country/Srilanka 1.webp"
                          : allproduct.title ==
                            "Τουριστική Ηλεκτρονική Βίζα Αιγύπτου"
                          ? "/country/Egypt.webp"
                          : allproduct.title == "Αυστραλία e Visitor Visa"
                          ? "/country/Australia.webp"
                          : allproduct.title ==
                            "Τουριστική ηλεκτρονική θεώρηση του Αζερμπαϊτζάν"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title ==
                            "Τουριστική ηλεκτρονική θεώρηση του Μπαχρέιν"
                          ? "/country/Bahrein.webp"
                          : allproduct.title == "Τουρίστας ΗΠΑ ESTA"
                          ? "/country/USA.webp"
                          : allproduct.title ==
                            "Τουριστική ηλεκτρονική θεώρηση του Ομάν"
                          ? "/country/Oman.webp"
                          : allproduct.title ==
                            "Τουριστική Ηλεκτρονική Βίζα Σαουδικής Αραβίας"
                          ? "/country/Saudi Arabia.webp"
                          : allproduct.title ==
                            "Τουριστική ηλεκτρονική θεώρηση της Ρωσίας"
                          ? "/country/Russia.webp"
                          : allproduct.title ==
                            "Τουριστική ηλεκτρονική βίζα Ινδονησίας"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title ==
                            "Τουριστική ΕΤΑ της Νέας Ζηλανδίας"
                          ? "/country/newZealand.webp"
                          : allproduct.title ==
                            "Τουριστική ηλεκτρονική βίζα Κουβέιτ"
                          ? "/country/Kuwait.webp"
                          : allproduct.title ==
                            "Τουριστική Ηλεκτρονική Βίζα Κένυας"
                          ? "/country/Kenya.webp"
                          : //43 Portugal
                          allproduct.title == "E-Visa de trânsito do Sri Lanka"
                          ? "/country/Srilanka 1.webp"
                          : allproduct.title ==
                            "Visto eletrônico de negócios do Sri Lanka"
                          ? "/country/Srilanka 2.webp"
                          : allproduct.title ==
                            "Visto eletrônico laosiano de turista"
                          ? "/country/Laos.webp"
                          : allproduct.title == "Austrália e visto de visitante"
                          ? "/country/Australia.webp"
                          : allproduct.title ==
                            "E-Visa de turista para o Kuwait"
                          ? "/country/Kuwait.webp"
                          : allproduct.title ==
                            "Arábia Saudita E-Visa de turista"
                          ? "/country/Saudi Arabia.webp"
                          : allproduct.title == "Rússia E-Visa de turista"
                          ? "/country/Russia.webp"
                          : allproduct.title == "ESTA Empresarial dos EUA"
                          ? "/country/Usa 1.webp"
                          : allproduct.title ==
                            "Visto eletrônico de turista para a Indonésia"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title == "E-Visa omã de turista"
                          ? "/country/Oman.webp"
                          : allproduct.title == "VISA ESTA de turista nos EUA"
                          ? "/country/USA.webp"
                          : allproduct.title == "Canadá Turismo ETA"
                          ? "/country/Canada.webp"
                          : allproduct.title ==
                            "Visto eletrônico cambojano de negócios"
                          ? "/country/Cambodia 1.webp"
                          : allproduct.title ==
                            "Visto eletrônico indiano de negócios"
                          ? "/country/India 1.webp"
                          : //44 Sweden
                          allproduct.title == "Kambodja turist E-visum"
                          ? "/country/Cambodia.webp"
                          : allproduct.title == "Kambodja Business E-visum"
                          ? "/country/Cambodia 1.webp"
                          : allproduct.title == "Australien e besöksvisum"
                          ? "/country/Australia.webp"
                          : allproduct.title == "Sri Lanka Transit E-Visum"
                          ? "/country/Srilanka 1.webp"
                          : allproduct.title == "Indien Business E-visum"
                          ? "/country/India 1.webp"
                          : allproduct.title == "Azerbajdzjan turist e-visum"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title == "Kenya turist E-visum"
                          ? "/country/Kenya 1.webp"
                          : allproduct.title == "Nya Zeelands turist ETA"
                          ? "/country/newZealand.webp"
                          : allproduct.title == "Saudiarabiens turist E-visum"
                          ? "/country/Saudi Arabia.webp"
                          : allproduct.title == "Ryssland turist E-visum"
                          ? "/country/Russia.webp"
                          : allproduct.title == "Indonesiens turist e-visum"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title == "Kanada Tourist ETA"
                          ? "/country/Canada.webp"
                          : //44 Mexico
                          allproduct.title ==
                            "Visa electrónica de turista para Sudáfrica"
                          ? "/country/South Africa.webp"
                          : allproduct.title ==
                            "Visa electrónica de turista para Armenia"
                          ? "/country/Armenian.webp"
                          : allproduct.title ==
                            "Visa electrónica de turista para Tayikistán"
                          ? "/country/tajikistan.webp"
                          : allproduct.title ==
                            "Visa electrónica de turista para Turquía"
                          ? "/country/Turkey.webp"
                          : allproduct.title ==
                            "Visa electrónica de turista para Ucrania"
                          ? "/country/Ukraine 1.webp"
                          : allproduct.title ==
                            "Visa electrónica de turista para Tailandia"
                          ? "/country/Thailand.webp"
                          : allproduct.title ==
                            "Visa electrónica de negocios de Camboya"
                          ? "/country/Cambodia 2.webp"
                          : allproduct.title ==
                            "Visa electrónica de negocios de la India"
                          ? "/country/India 1.webp"
                          : allproduct.title ==
                            "Visa electrónica de negocios de Sri Lanka"
                          ? "/country/Srilanka 1.webp"
                          : allproduct.title ==
                            "Visa electrónica de tránsito de Sri Lanka"
                          ? "/country/Srilanka 2.webp"
                          : //44 Brazil

                          allproduct.title ==
                            "E-Visa de turista para o Tadjiquistão"
                          ? "/country/tajikistan.webp"
                          : // 45 Finland
                          allproduct.title == "Laosin turistiviisumi"
                          ? "/country/Laos.webp"
                          : allproduct.title == "Saudi-Arabian turisti E-Visa"
                          ? "/country/Saudi Arabia.webp"
                          : allproduct.title == "Indonesian turistiviisumi"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title == "Oman Tourist E-Visa"
                          ? "/country/Oman.webp"
                          : allproduct.title ==
                            "Intian liiketoiminnan sähköinen viisumi"
                          ? "/country/India 1.webp"
                          : allproduct.title == "Sri Lankan kauttakulku E-Visa"
                          ? "/country/Srilanka 2.webp"
                          : allproduct.title == "Sri Lankan turisti E-Visa"
                          ? "/country/Srilanka 3.webp"
                          : //46 China
                          allproduct.title == "老挝旅游电子签证"
                          ? "/country/Laos.webp"
                          : allproduct.title == "南非旅游电子签证"
                          ? "/country/South Africa.webp"
                          : allproduct.title == "格鲁吉亚旅游电子签证"
                          ? "/country/Georgia.webp"
                          : allproduct.title == "摩尔多瓦旅游电子签证"
                          ? "/country/Moldova 1.webp"
                          : allproduct.title == "沙特阿拉伯旅游电子签证"
                          ? "/country/Saudi Arabia.webp"
                          : allproduct.title == "塔吉克斯坦旅游电子签证"
                          ? "/country/tajikistan.webp"
                          : allproduct.title == "乌克兰旅游电子签证"
                          ? "/country/Ukraine 1.webp"
                          : allproduct.title == "乌克兰旅游电子签证紧急入境"
                          ? "/country/Ukraine 2.webp"
                          : allproduct.title == "乌克兰紧急旅游电子签证"
                          ? "/country/Ukraine 3.webp"
                          : allproduct.title == "乌克兰商务电子签证"
                          ? "/country/Ukraine 4.webp"
                          : allproduct.title == "乌克兰紧急商务电子签证"
                          ? "/country/Ukraine 5.webp"
                          : allproduct.title == "乌克兰商务紧急电子签证"
                          ? "/country/Ukraine 6.webp"
                          : allproduct.title == "印度尼西亚旅游电子签证"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title == "罗马尼亚旅游电子签证"
                          ? "/country/Romania.webp"
                          : allproduct.title == "智利旅游电子签证"
                          ? "/country/Chile.webp"
                          : allproduct.title == "委内瑞拉旅游电子签证"
                          ? "/country/venezuela.webp"
                          : allproduct.title == "阿曼旅游电子签证"
                          ? "/country/Oman.webp"
                          : allproduct.title == "卡塔尔旅游电子签证"
                          ? "/country/Qatar 1.webp"
                          : allproduct.title == "卡塔尔商务电子签证"
                          ? "/country/Qatar 3.webp"
                          : //46 Indonesia
                          //chile
                          allproduct.title ==
                            "Visa electrónica de turista de Venezuela"
                          ? "/country/venezuela.webp"
                          : // default
                          allproduct.title == "United Kingdom EVW"
                          ? "/country/UnitedKingdom.webp"
                          : allproduct.title == "E-Visa Pelancong Arab Saudi"
                          ? "/country/Saudi Arabia.webp"
                          : allproduct.title == "E-Visa Pelancong Ukraine"
                          ? "/country/Ukraine 1.webp"
                          : allproduct.title == "E-Visa Perniagaan Ukraine"
                          ? "/country/Ukraine 3.webp"
                          : allproduct.title ==
                            "E-Visa Pelancong Urgent Ukraine"
                          ? "/country/Ukraine 4.webp"
                          : allproduct.title ==
                            "E-Visa Perniagaan Segera Ukraine"
                          ? "/country/Ukraine 5.webp"
                          : allproduct.title ==
                            "E-Visa Urgent Perniagaan Ukraine"
                          ? "/country/Ukraine 2.webp"
                          : allproduct.title == "E-Visa Pelancong Oman"
                          ? "/country/Oman.webp"
                          : allproduct.title ==
                            "Kemasukan Segera E-Visa Pelancong Ukraine"
                          ? "/country/Ukraine 6.webp"
                          : allproduct.title == "Vietnam Tourist E-Visa"
                          ? "/country/Vietnam.webp"
                          : allproduct.title == "Cambodia Tourist E-Visa"
                          ? "/country/Cambodia.webp"
                          : allproduct.title == "Cambodia Business E-Visa"
                          ? "/country/Cambodia 1.webp"
                          : allproduct.title == "Sri Lanka Tourist E-Visa"
                          ? "/country/Srilanka.webp"
                          : allproduct.title == "E-Visa Pelancong Sri Lanka"
                          ? "/country/Srilanka.webp"
                          : allproduct.title == "E-Visa Pelancong Georgia"
                          ? "/country/Georgia.webp"
                          : allproduct.title == "E-Visa Pelancong Moldova"
                          ? "/country/Moldova 1.webp"
                          : allproduct.title == "E-Visa Perniagaan Sri Lanka"
                          ? "/country/Srilanka 2.webp"
                          : allproduct.title == "E-Visa Transit Sri Lanka"
                          ? "/country/Srilanka 3.webp"
                          : allproduct.title == "E-Visa Pelancong Armenia"
                          ? "/country/Armenian.webp"
                          : allproduct.title == "Egypt Tourist E-Visa"
                          ? "/country/Egypt.webp"
                          : allproduct.title == "Azerbaijan Tourist E-Visa"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title == "E-Visa Pelancong Azerbaijan"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title == "Kenya Tourist E-Visa"
                          ? "/country/Kenya.webp"
                          : allproduct.title == "Malaysia Tourist E-Visa"
                          ? "/country/Malaysia.webp"
                          : allproduct.title == "Argentina Tourist E-Visa"
                          ? "/country/Argentina.webp"
                          : allproduct.title == "UAE Tourist E-Visa"
                          ? "/country/UAE.webp"
                          : allproduct.title == "Russia Tourist E-Visa"
                          ? "/country/Russia.webp"
                          : allproduct.title == "Thailand Tourist E-Visa"
                          ? "/country/Thailand.webp"
                          : allproduct.title == "Australia e Visitor Visa"
                          ? "/country/Australia.webp"
                          : allproduct.title == "Australia dan Visa Pelawat"
                          ? "/country/Australia.webp"
                          : allproduct.title == "India Tourist E-Visa"
                          ? "/country/India.webp"
                          : allproduct.title == "India Business E-Visa"
                          ? "/country/India 5.webp"
                          : allproduct.title == "India Turisztikai E-Visa"
                          ? "/country/India 7.webp"
                          : allproduct.title == "E-Visa Pelancong India"
                          ? "/country/India.webp"
                          : allproduct.title == "E-Visa Perniagaan India"
                          ? "/country/India 3.webp"
                          : allproduct.title == "New Zealand Tourist ETA"
                          ? "/country/newZealand.webp"
                          : allproduct.title == "USA Tourist ESTA"
                          ? "/country/USA.webp"
                          : allproduct.title == "USA Business ESTA"
                          ? "/country/USA 1.webp"
                          : allproduct.title == "Canada Tourist ETA"
                          ? "/country/Canada.webp"
                          : allproduct.title == "Turkey Tourist E-Visa"
                          ? "/country/Turkey.webp"
                          : allproduct.title == "E-Visa Pelancong Bahrain"
                          ? "/country/Bahrein.webp"
                          : allproduct.title == "E-Visa Pelancong Kuwait"
                          ? "/country/Kuwait.webp"
                          : allproduct.title == "ETA Pelancong New Zealand"
                          ? "/country/newZealand.webp"
                          : allproduct.title == "E-Visa Pelancong Rusia"
                          ? "/country/Russia.webp"
                          : allproduct.title ==
                            "تأشيرة أرمينيا السياحية الإلكترونية"
                          ? "/country/Turkey.webp"
                          : allproduct.title ==
                            "تأشيرة أذربيجان السياحية الإلكترونية"
                          ? "/country/Russia.webp"
                          : allproduct.title ==
                            "تأشيرة جنوب إفريقيا السياحية الإلكترونية"
                          ? "/country/newZealand.webp"
                          : allproduct.title ==
                            "تأشيرة فيتنام السياحية الإلكترونية"
                          ? "/country/Vietnam.webp"
                          : allproduct.title ==
                            "تأشيرة لاوس السياحية الإلكترونية"
                          ? "/country/Laos.webp"
                          : allproduct.title ==
                            "تأشيرة الهند السياحية الإلكترونية"
                          ? "/country/India.webp"
                          : allproduct.title ==
                            "تأشيرة الهند الإلكترونية للأعمال"
                          ? "/country/India 8.webp"
                          : allproduct.title == "كندا السياحية ايتا"
                          ? "/country/Canada.webp"
                          : allproduct.title ==
                            "Visa de tourisme pour l&#39;Arménie"
                          ? "/country/Armenian.webp"
                          : allproduct.title ==
                            "Visa touristique électronique pour le Venezuela"
                          ? "/country/venezuela.webp"
                          : allproduct.title ==
                            "تأشيرة كمبوديا السياحية الإلكترونية"
                          ? "/country/Cambodia 1.webp"
                          : allproduct.title ==
                            "تأشيرة الأعمال الإلكترونية في كمبوديا"
                          ? "/country/Cambodia 2.webp"
                          : allproduct.title ==
                            "تأشيرة تايوان السياحية الإلكترونية"
                          ? "/country/Taiwan.webp"
                          : allproduct.title ==
                            "تأشيرة سريلانكا السياحية الإلكترونية"
                          ? "/country/srilanka 1.webp"
                          : allproduct.title ==
                            "تأشيرة مولدوفا السياحية الإلكترونية"
                          ? "/country/Moldova 1.webp"
                          : allproduct.title ==
                            "تأشيرة الأعمال الإلكترونية لسريلانكا"
                          ? "/country/srilanka 2.webp"
                          : allproduct.title ==
                            "التأشيرة الإلكترونية السياحية لمصر"
                          ? "/country/Egypt.webp"
                          : allproduct.title ==
                            "تأشيرة رومانيا السياحية الإلكترونية"
                          ? "/country/Romania.webp"
                          : allproduct.title ==
                            "تأشيرة إندونيسيا السياحية الإلكترونية"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title ==
                            "تأشيرة تشيلي السياحية الإلكترونية"
                          ? "/country/Chile.webp"
                          : allproduct.title ==
                            "تأشيرة عبور سريلانكا الإلكترونية"
                          ? "/country/srilanka 3.webp"
                          : allproduct.title ==
                            "تأشيرة كينيا السياحية الإلكترونية"
                          ? "/country/Kenya.webp"
                          : allproduct.title == "المملكة المتحدة EVW"
                          ? "/country/UnitedKingdom.webp"
                          : allproduct.title == "نيوزيلندا السياحية ETA"
                          ? "/country/newZealand.webp"
                          : allproduct.title ==
                            "تأشيرة تركيا السياحية الإلكترونية"
                          ? "/country/Turkey.webp"
                          : allproduct.title ==
                            "التأشيرة الإلكترونية السياحية لروسيا"
                          ? "/country/Russia.webp"
                          : allproduct.title ==
                            "تأشيرة الأرجنتين السياحية الإلكترونية"
                          ? "/country/Argentina.webp"
                          : allproduct.title ==
                            "تأشيرة كولومبيا السياحية الإلكترونية"
                          ? "/country/Cambodia.webp"
                          : allproduct.title == "베트남 관광 e비자"
                          ? "/country/Vietnam.webp"
                          : allproduct.title == "캄보디아 관광 E비자"
                          ? "/country/Cambodia.webp"
                          : allproduct.title == "이집트 관광 E비자"
                          ? "/country/Egypt.webp"
                          : allproduct.title == "아제르바이잔 관광 E비자"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title == "바레인 관광 E비자"
                          ? "/country/Bahrein.webp"
                          : allproduct.title == "케냐 관광 E비자"
                          ? "/country/Kenya.webp"
                          : allproduct.title == "쿠웨이트 관광 E비자"
                          ? "/country/Kuwait.webp"
                          : allproduct.title == "뉴질랜드 관광 ETA"
                          ? "/country/newZealand.webp"
                          : allproduct.title == "미국 관광 ESTA 비자"
                          ? "/country/USA.webp"
                          : allproduct.title == "인도네시아 관광 E비자"
                          ? "/country/Indonesia1.webp"
                          : allproduct.title == "사우디아라비아 관광 E비자"
                          ? "/country/Saudi Arabia.webp"
                          : allproduct.title == "캐나다 관광 ETA"
                          ? "/country/Canada.webp"
                          : allproduct.title == "호주 전자 방문 비자"
                          ? "/country/Australia.webp"
                          : allproduct.title == "วีซ่าท่องเที่ยวอินเดีย E-Visa"
                          ? "/country/India.webp"
                          : allproduct.title == "วีซ่าธุรกิจอินเดีย E-Visa"
                          ? "/country/India 6.webp"
                          : allproduct.title == "วีซ่าท่องเที่ยวศรีลังกา E-Visa"
                          ? "/country/Srilanka 2.webp"
                          : allproduct.title == "วีซ่าธุรกิจศรีลังกา E-Visa"
                          ? "/country/Srilanka 3.webp"
                          : allproduct.title == "ศรีลังกาทรานสิท E-วีซ่า"
                          ? "/country/Srilanka 4.webp"
                          : allproduct.title == "วีซ่าท่องเที่ยวโมร็อกโก E-Visa"
                          ? "/country/Morocco.webp"
                          : allproduct.title ==
                            "วีซ่าท่องเที่ยวอาร์เมเนีย E-Visa"
                          ? "/country/Armenian.webp"
                          : allproduct.title == "E-Visa ท่องเที่ยวมอลโดวา"
                          ? "/country/Moldova.webp"
                          : allproduct.title == "E-Visa ท่องเที่ยวโรมาเนีย"
                          ? "/country/Romania.webp"
                          : allproduct.title == "วีซ่าท่องเที่ยวโอมาน E-Visa"
                          ? "/country/Oman.webp"
                          : allproduct.title ==
                            "วีซ่าท่องเที่ยวอาเซอร์ไบจาน E-Visa"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title == "วีซ่าท่องเที่ยวบาห์เรน E-Visa"
                          ? "/country/Bahrein.webp"
                          : allproduct.title == "วีซ่าท่องเที่ยวยูเครน E-Visa"
                          ? "/country/Ukraine 6.webp"
                          : allproduct.title ==
                            "ยูเครน Tourist E-Visa รายการด่วน"
                          ? "/country/Ukraine 2.webp"
                          : allproduct.title ==
                            "วีซ่าท่องเที่ยวยูเครนด่วน E-Visa"
                          ? "/country/Ukraine 3.webp"
                          : allproduct.title == "วีซ่าธุรกิจยูเครน E-Visa"
                          ? "/country/Ukraine 4.webp"
                          : allproduct.title == "E-Visa ธุรกิจด่วนของยูเครน"
                          ? "/country/Ukraine 5.webp"
                          : allproduct.title == "E-Visa ด่วนสำหรับธุรกิจยูเครน"
                          ? "/country/Ukraine 1.webp"
                          : allproduct.title == "วีซ่าท่องเที่ยวเคนยา E-Visa"
                          ? "/country/Kenya.webp"
                          : allproduct.title == "UAE Transit E-Visa ดูไบ"
                          ? "/country/uae2.jpeg"
                          : allproduct.title == "UAE Transit E-Visa"
                          ? "/country/uae3.jpeg"
                          : allproduct.title ==
                            "E-Visa ท่องเที่ยวสหรัฐอาหรับเอมิเรตส์"
                          ? "/country/UAE.webp"
                          : allproduct.title == "Kamboçya Turist E-Vizesi"
                          ? "/country/Cambodia.webp"
                          : allproduct.title == "Kamboçya Ticari E-Vizesi"
                          ? "/country/Cambodia 1.webp"
                          : allproduct.title == "Sri Lanka Turist E-Vizesi"
                          ? "/country/Srilanka.webp"
                          : allproduct.title == "Sri Lanka Transit E-Vizesi"
                          ? "/country/Srilanka 2.webp"
                          : allproduct.title == "Sri Lanka Ticari E-Vizesi"
                          ? "/country/srilanka 1.webp"
                          : allproduct.title == "Kenya Turist E-Vizesi"
                          ? "/country/Kenya.webp"
                          : allproduct.title == "Kuveyt Turist E-Vizesi"
                          ? "/country/Kuwait.webp"
                          : allproduct.title == "BAE Turist E-Vizesi"
                          ? "/country/UAE.webp"
                          : allproduct.title == "Rusya Turist E-Vizesi"
                          ? "/country/Russia.webp"
                          : allproduct.title ==
                            "Visa electrónica de turista para Vietnam"
                          ? "/country/Vietnam.webp"
                          : allproduct.title ==
                            "Visa electrónica de turista para Azerbaiyán"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title ==
                            "Visa electrónica de turista para Baréin"
                          ? "/country/Bahrein.webp"
                          : allproduct.title == "ETA turística de Nueva Zelanda"
                          ? "/country/newZealand.webp"
                          : allproduct.title ==
                            "VISA ESTA de turista de EE. UU."
                          ? "/country/USA.webp"
                          : allproduct.title == "ETA turística de Canadá"
                          ? "/country/Canada.webp"
                          : allproduct.title == "越南旅游电子签证"
                          ? "/country/Vietnam.webp"
                          : allproduct.title == "柬埔寨旅游电子签证"
                          ? "/country/Cambodia.webp"
                          : allproduct.title == "柬埔寨商务电子签证"
                          ? "/country/Cambodia 1.webp"
                          : allproduct.title == "斯里兰卡旅游电子签证"
                          ? "/country/Srilanka.webp"
                          : allproduct.title == "斯里兰卡商务电子签证"
                          ? "/country/Srilanka 2.webp"
                          : allproduct.title == "斯里兰卡过境电子签证"
                          ? "/country/Srilanka 3.webp"
                          : allproduct.title == "埃及旅游电子签证"
                          ? "/country/Egypt.webp"
                          : allproduct.title == "阿塞拜疆旅游电子签证"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title == "巴林旅游电子签证"
                          ? "/country/Bahrein.webp"
                          : allproduct.title == "肯尼亚旅游电子签证"
                          ? "/country/Kenya.webp"
                          : allproduct.title == "马来西亚旅游电子签证"
                          ? "/country/Malaysia.webp"
                          : allproduct.title == "土耳其旅游电子签证"
                          ? "/country/Turkey.webp"
                          : allproduct.title == "哥伦比亚旅游电子签证"
                          ? "/country/Cambodia.webp"
                          : allproduct.title == "俄罗斯旅游电子签证"
                          ? "/country/Russia.webp"
                          : allproduct.title == "USA Tourist ESTA VISA"
                          ? "/country/USA.webp"
                          : allproduct.title == "Kanadan turisti-ETA"
                          ? "/country/Canada.webp"
                          : allproduct.title == "Venäjän turisti E-Visa"
                          ? "/country/Russia.webp"
                          : allproduct.title == "Kambodžan turisti E-Visa"
                          ? "/country/Cambodia.webp"
                          : allproduct.title == "Intian turisti E-Visa"
                          ? "/country/India.webp"
                          : allproduct.title == "Sri Lankan turisti-e-viisumi"
                          ? "/country/Srilanka.webp"
                          : allproduct.title == "Egyptin turisti E-Visa"
                          ? "/country/Egypt.webp"
                          : allproduct.title == "Egyptin turisti E-Visa"
                          ? "/country/Egypt.webp"
                          : allproduct.title == "Azerbaidžanin turisti E-Visa"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title == "Bahrain Tourist E-Visa"
                          ? "/country/Bahrein.webp"
                          : allproduct.title == "Kenia Tourist E-Visa"
                          ? "/country/Kenya.webp"
                          : allproduct.title == "Kuwait Tourist E-Visa"
                          ? "/country/Kuwait.webp"
                          : allproduct.title == "Uuden-Seelannin turisti-ETA"
                          ? "/country/newZealand.webp"
                          : allproduct.title == "E-Visa de turista vietnamita"
                          ? "/country/Vietnam.webp"
                          : allproduct.title ==
                            "Visto eletrônico cambojano de turista"
                          ? "/country/Cambodia.webp"
                          : allproduct.title ==
                            "Visto eletrônico indiano de turista"
                          ? "/country/India.webp"
                          : allproduct.title == "E-Visa Sri Lanka de turista"
                          ? "/country/Srilanka.webp"
                          : allproduct.title == "E-Visa Sri Lanka de turista"
                          ? "/country/Srilanka.webp"
                          : allproduct.title == "E-Visa egípcio de turista"
                          ? "/country/Egypt.webp"
                          : allproduct.title ==
                            "E-Visa de turista para o Azerbaijão"
                          ? "/country/Azerbaijan.webp"
                          : allproduct.title ==
                            "E-Visa de turista para o Bahrein"
                          ? "/country/Bahrein.webp"
                          : allproduct.title == "E-Visa queniano de turista"
                          ? "/country/Kenya.webp"
                          : allproduct.title == "E-Visa queniano de turista"
                          ? "/country/Kenya.webp"
                          : allproduct.title == "Turismo da Nova Zelândia ETA"
                          ? "/country/newZealand.webp"
                          : allproduct.title ==
                            "Visa electrónica de turista para Camboya"
                          ? "/country/Cambodia.webp"
                          : allproduct.title ==
                            "Visa electrónica de turista para India"
                          ? "/country/India.webp"
                          : allproduct.title ==
                            "Visa electrónica de turista de Sri Lanka"
                          ? "/country/Srilanka.webp"
                          : allproduct.title ==
                            "Visa electrónica de turista para Egipto"
                          ? "/country/Egypt.webp"
                          : allproduct.title ==
                            "Visa de Visitante para Australia"
                          ? "/country/Australia.webp"
                          : allproduct.title ==
                            "Visa electrónica de turista para Rusia"
                          ? "/country/Russia.webp"
                          : allproduct.title + " " + allproduct.validity ==
                            "Indian Tourist E-Visa" + " " + "30days"
                          ? "/blog2/India 2.webp"
                          : allproduct.title + " " + allproduct.validity ==
                            "Indian Tourist E-Visa" + " " + "1years"
                          ? "/blog2/India.webp"
                          : allproduct.title == "Indian  Business E-Visa"
                          ? "/blog2/India 3.webp"
                          : "/country/countryDefaulr.webp"
                      }
                      height={270}
                      width={397}
                    />

                    {/* <Image alt={allproduct.title}
                                    sizes="(max-width: 500px) 30vw"
                                     src={'https://ik.imagekit.io/vs4gypuhi/' + allproduct.imageurl}
                                    height={260} width={371}
                                /> */}
                  </figure>
                  <ul className="product-plan">
                    <li className="planname">
                      {allproduct.title}
                      {/* <b className={`flag flag-${allproduct.country_code}`}></b> */}
                    </li>
                    <li className="mb-2">
                      <select className="form-control">
                        <option>
                          {" "}
                          {allproduct.validity} {allproduct.category}{" "}
                        </option>
                      </select>
                    </li>
                    <li className="d-flex mb-1">
                      <span>
                        <strong>
                          {allproduct.currency_icon} {allproduct.price}
                        </strong>{" "}
                        <br />
                        Total Fee
                      </span>
                      <span className="pt-2 d-block">
                        *Includes Processing fee
                      </span>
                    </li>
                    <li className="d-flex mb-1">
                      <span>
                        <i className="fa fa-hourglass-start"></i>
                        Entry Type{" "}
                      </span>{" "}
                      <span>{allproduct.entry_type}</span>
                    </li>
                    <li className="d-flex mb-1">
                      <span>
                        <i className="fa fa-hourglass-start"></i> Processing
                        Time
                      </span>
                      <span>{allproduct.tat}</span>
                    </li>
                    <li className="d-flex mb-1">
                      <span>
                        <i className="fa fa-clock-o"></i> Duration of stay{" "}
                      </span>
                      <span>
                        up to {allproduct.duration}
                        <i
                          className="fa fa-question-circle"
                          title="Maximum stay allowed at one time"
                        ></i>
                      </span>
                    </li>
                    <li className="d-flex mb-2">
                      <span>
                        <i className="fa fa-hourglass-start"></i> Visa Validity{" "}
                      </span>
                      <span>{allproduct.validity}</span>
                    </li>
                    <li>
                      <Link
                        href={
                          "/checkout/" +
                          allproduct.urllink +
                          "/" +
                          allproduct.id
                        }
                        className="buy_btn"
                        locale={locale}
                      >
                        Apply for {allproduct.title}
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      <div className="faq">
        <Container>
          <div className="ftv-title">
            <h2>Frequently Asked Questions</h2>
          </div>
          <Row>
            {props.visaallproducting.faq_arr.map((faq_arr, f) => (
              <Col sm={6} md={6} key={f}>
                <p className="small_heading">{faq_arr.question}</p>
                <p className="faq_para">{faq_arr.answ}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}
export const getServerSideProps = async (cxt) => {
  const pageUrl = cxt.query.visa;
  const country_ext = cxt.locale;
  console.log(pageUrl);
  const res = await fetch(
    `${process.env.BASE_URL}/api/${country_ext}/international-visa/${pageUrl}`
  );

  if (!res.ok || res.length === 0) {
    return {
      notFound: true,
    };
  }
  const visaallproducting = await res.json();
  return {
    props: { pageUrl, visaallproducting },
  };
};
