import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function HomeList(props) {
  const { locale } = useRouter();
  return (
    <section className="homeCategary pt-5">
      <div className="container">
        <Row>
          {Array.isArray(props.homelists) &&
            props.homelists?.map((list, i) => {
              return (
                <Col
                  sm={6}
                  md={4}
                  key={list.urllink}
                  className={`${
                    locale === "en-in" &&
                    (list.title === "Russia Tourist E-Visa" ||
                      list.title === "Malaysia Tourist E-Visa" ||
                      list.title === "Azerbaijan Tourist E-Visa")
                      ? "d-none"
                      : ""
                  }`}
                >
                  <div className="pro-div">
                    <Link href={"/" + list.urllink} locale={locale}>
                      <figure
                        className="visa-img"
                        style={{ position: "relative" }}
                      >
                        <Image
                          alt={list.title}
                          src={
                            // 2
                            list.title == "科威特旅游电子签证"
                              ? "/country/Kuwait.webp"
                              : list.title == "印度旅游电子签证"
                              ? "/country/India.webp"
                              : list.title == "新西兰旅游ETA"
                              ? "/country/newZealand.webp"
                              : list.title == "美国旅游 ESTA 签证"
                              ? "/country/USA.webp"
                              : list.title == "加拿大旅游ETA"
                              ? "/country/Canada.webp"
                              : list.title == "澳大利亚电子访客签证"
                              ? "/country/Australia.webp"
                              : //3
                              list.title == "泰国旅游电子签证"
                              ? "/country/Thailand.webp"
                              : //4 JAPAN
                              list.title == "ベトナム観光電子ビザ"
                              ? "/country/Vietnam.webp"
                              : list.title == "カンボジア観光電子ビザ"
                              ? "/country/Cambodia.webp"
                              : list.title == "インドの観光電子ビザ"
                              ? "/country/India.webp"
                              : list.title == "スリランカの観光電子ビザ"
                              ? "/country/Srilanka.webp"
                              : list.title == "エジプトの観光電子ビザ"
                              ? "/country/Egypt.webp"
                              : list.title == "アゼルバイジャンの観光電子ビザ"
                              ? "/country/Azerbaijan.webp"
                              : list.title == "バーレーンの観光電子ビザ"
                              ? "/country/Bahrein.webp"
                              : list.title == "ケニアの観光電子ビザ"
                              ? "/country/Kenya.webp"
                              : list.title == "クウェートの観光電子ビザ"
                              ? "/country/Kuwait.webp"
                              : list.title == "ニュージーランド観光ETA"
                              ? "/country/newZealand.webp"
                              : list.title == "サウジアラビアの観光電子ビザ"
                              ? "/country/Saudi Arabia.webp"
                              : list.title == "インドネシアの観光電子ビザ"
                              ? "/country/Indonesia1.webp"
                              : list.title == "オマーンの観光電子ビザ"
                              ? "/country/Oman.webp"
                              : list.title == "ロシアの観光電子ビザ"
                              ? "/country/Russia.webp"
                              : list.title == "米国観光ESTAビザ"
                              ? "/country/USA.webp"
                              : list.title == "カナダ観光ETA"
                              ? "/country/Canada.webp"
                              : list.title == "オーストラリア e 観光ビザ"
                              ? "/country/Australia.webp"
                              : list.title ==
                                "تأشيرة فنزويلا السياحية الإلكترونية"
                              ? "/country/venezuela.webp"
                              : list.title == "वियतनाम पर्यटक ई-वीजा"
                              ? "/country/Vietnam.webp"
                              : list.title == "कंबोडिया पर्यटक ई-वीजा"
                              ? "/country/Cambodia.webp"
                              : list.title == "श्रीलंका पर्यटक ई-वीजा"
                              ? "/country/Srilanka.webp"
                              : list.title == "मिस्र पर्यटक ई-वीजा"
                              ? "/country/Egypt.webp"
                              : list.title == "अज़रबैजान पर्यटक ई-वीजा"
                              ? "/country/Azerbaijan.webp"
                              : list.title == "बहरीन पर्यटक ई-वीजा"
                              ? "/country/Bahrein.webp"
                              : list.title == "केन्या पर्यटक ई-वीजा"
                              ? "/country/Kenya.webp"
                              : list.title == "मलेशिया पर्यटक ई-वीजा"
                              ? "/country/Malaysia.webp"
                              : list.title == "रूस पर्यटक ई-वीजा"
                              ? "/country/Russia.webp"
                              : list.title == "ऑस्ट्रेलिया ई आगंतुक वीजा"
                              ? "/country/Australia.webp"
                              : list.title == "लाओस पर्यटक ई-वीजा"
                              ? "/country/Laos.webp"
                              : list.title == "मोरक्को पर्यटक ई-वीजा"
                              ? "/country/Morocco.webp"
                              : list.title == "दक्षिण अफ्रीका पर्यटक ई-वीजा"
                              ? "/country/South Africa.webp"
                              : list.title == "अर्मेनिया पर्यटक ई-वीजा"
                              ? "/country/Armenian.webp"
                              : list.title == "जॉर्जिया पर्यटक ई-वीजा"
                              ? "/country/Georgia.webp"
                              : list.title == "मोल्दोवा पर्यटक ई-वीजा"
                              ? "/country/Moldova.webp"
                              : list.title == "ताजिकिस्तान पर्यटक ई-वीजा"
                              ? "/country/tajikistan.webp"
                              : list.title == "यूक्रेन पर्यटक ई-वीजा"
                              ? "/country/Ukraine 1.webp"
                              : list.title == "संयुक्त अरब अमीरात पर्यटक ई-वीजा"
                              ? "/country/UAE.webp"
                              : list.title == "रोमानिया पर्यटक ई-वीजा"
                              ? "/country/Romania.webp"
                              : list.title == "इंडोनेशिया पर्यटक ई-वीजा"
                              ? "/country/Indonesia1.webp"
                              : list.title == "वेनेजुएला पर्यटक ई-वीजा"
                              ? "/country/venezuela.webp"
                              : list.title == "कतर पर्यटक ई-वीजा"
                              ? "/country/Qatar 1.webp"
                              : list.title == "थाईलैंड पर्यटक ई-वीजा"
                              ? "/country/Thailand.webp"
                              : list.title == "थाईलैंड पर्यटक ई-वीजा"
                              ? "/public/country/Thailand.webp"
                              : list.title == "थाईलैंड पर्यटक ई-वीजा"
                              ? "/public/country/Thailand.webp"
                              : list.title == "थाईलैंड पर्यटक ई-वीजा"
                              ? "/public/country/Thailand.webp"
                              : //11 SRI LANKA
                              //12 SOUTH AFRICA
                              //13 AUSTRALIA
                              //14 KENYA
                              //15 KUWAIT
                              // 16 MALAYSIA
                              // 17 NEW ZEALAND
                              //18 SAUDI ARABAI
                              //19 TURKEY
                              //20 UKRAINA
                              list.title ==
                                "Індійська туристична електронна віза"
                              ? "/country/India.webp"
                              : list.title ==
                                "Туристична електронна віза Шрі-Ланки"
                              ? "/country/Srilanka.webp"
                              : list.title ==
                                "Єгипетська туристична електронна віза"
                              ? "/country/Egypt.webp"
                              : list.title ==
                                "Туристична електронна віза Бахрейну"
                              ? "/country/Bahrein.webp"
                              : list.title == "Туристична електронна віза Кенії"
                              ? "/country/Kenya.webp"
                              : list.title ==
                                "Туристична електронна віза Кувейту"
                              ? "/country/Kuwait.webp"
                              : list.title ==
                                "Туристична електронна віза Саудівської Аравії"
                              ? "/country/Saudi Arabia.webp"
                              : list.title ==
                                "Туристична електронна віза в Мексику"
                              ? "/country/Maxico.webp"
                              : list.title ==
                                "Туристична електронна віза Індонезії"
                              ? "/country/Indonesia1.webp"
                              : list.title == "Туристична електронна віза Оману"
                              ? "/country/Oman.webp"
                              : // 21 UAE
                              //22 CANADA
                              list.title == "E-visa touristique pour le Vietnam"
                              ? "/country/Vietnam.webp"
                              : list.title ==
                                "Visa de tourisme pour le Cambodge"
                              ? "/country/Cambodia.webp"
                              : list.title == "Visa de tourisme pour l&#39;Inde"
                              ? "/country/India.webp"
                              : list.title ==
                                "Visa de tourisme pour l&#39;Arménie"
                              ? "/country/Armenian.webp"
                              : list.title ==
                                "Visa touristique électronique pour le Venezuela"
                              ? "/country/venezuela.webp"
                              : list.title ==
                                "Visa de tourisme pour le Sri Lanka"
                              ? "/country/Srilanka.webp"
                              : list.title ==
                                "E-visa de tourisme pour l&#39;Égypte"
                              ? "/country/Egypt.webp"
                              : list.title ==
                                "E-visa de tourisme pour l&#39;Égypte"
                              ? "/public/country/"
                              : list.title ==
                                "E-visa de tourisme pour l&#39;Azerbaïdjan"
                              ? "/country/Azerbaijan.webp"
                              : list.title == "E-visa de tourisme pour Bahreïn"
                              ? "/country/Bahrein.webp"
                              : list.title == "Visa de tourisme pour le Kenya"
                              ? "/country/Kenya.webp"
                              : list.title ==
                                "E-Visa de tourisme pour le Koweït"
                              ? "/country/Kuwait.webp"
                              : list.title ==
                                "ETA touristique en Nouvelle-Zélande"
                              ? "/country/newZealand.webp"
                              : list.title == "Visa de tourisme pour la Turquie"
                              ? "/country/Turkey.webp"
                              : list.title == "VISA ESTA Touristique USA"
                              ? "/country/USA.webp"
                              : list.title == "Australie e Visa de visiteur"
                              ? "/country/Australia.webp"
                              : //23 HUNGARY

                              list.title == "Vietnami turisztikai e-vízum"
                              ? "/country/Vietnam.webp"
                              : list.title == "Kambodzsai turisztikai e-vízum"
                              ? "/country/Cambodia.webp"
                              : list.title == "India turisztikai e-vízum"
                              ? "/country/India.webp"
                              : list.title == "Sri Lanka turisztikai e-vízum"
                              ? "/country/Srilanka.webp"
                              : list.title == "Egyiptom turista E-Visa"
                              ? "/country/Egypt.webp"
                              : list.title == "Ausztrália e Visitor Visa"
                              ? "/country/Australia.webp"
                              : list.title == "Azerbajdzsán Tourist E-Visa"
                              ? "/country/Azerbaijan.webp"
                              : list.title == "Bahrein Tourist E-Visa"
                              ? "/country/Bahrein.webp"
                              : list.title == "Kuvaiti turisztikai e-vízum"
                              ? "/country/Kuwait.webp"
                              : list.title == "USA turista ESTA VISA"
                              ? "/country/USA.webp"
                              : list.title == "Új-zélandi turisztikai ETA"
                              ? "/country/newZealand.webp"
                              : list.title == "Kanada Touristen ETA"
                              ? "/country/Canada.webp"
                              : list.title ==
                                "ESTA-Visum für Touristen in den USA"
                              ? "/country/USA.webp"
                              : list.title ==
                                "E-Visum für Touristen für Russland"
                              ? "/country/Russia.webp"
                              : list.title ==
                                "E-Visum für Touristen für Saudi-Arabien"
                              ? "/country/Saudi Arabia.webp"
                              : list.title == "Oman Touristen-E-Visum"
                              ? "/country/Oman.webp"
                              : list.title ==
                                "Elektronisches Touristenvisum für Indonesien"
                              ? "/country/Indonesia1.webp"
                              : list.title == "Touristen-E-Visum für Kenia"
                              ? "/country/Kenya.webp"
                              : list.title ==
                                "Elektronisches Touristenvisum für Kuwait"
                              ? "/country/Kuwait.webp"
                              : list.title == "ETA für Touristen in Neuseeland"
                              ? "/country/newZealand.webp"
                              : list.title ==
                                "E-Visum für Touristen für Bahrain"
                              ? "/country/Bahrein.webp"
                              : list.title ==
                                "Touristen-E-Visum für Aserbaidschan"
                              ? "/country/Azerbaijan.webp"
                              : list.title == "Australien e Besuchervisum"
                              ? "/country/Australia.webp"
                              : list.title ==
                                "Elektronisches Touristenvisum für Indien"
                              ? "/country/India.webp"
                              : list.title ==
                                "Elektronisches Touristenvisum für Sri Lanka"
                              ? "/country/Srilanka.webp"
                              : list.title ==
                                "E-Visum für Touristen für Ägypten"
                              ? "/country/Egypt.webp"
                              : list.title ==
                                "Elektronisches Touristenvisum für Vietnam"
                              ? "/country/Vietnam.webp"
                              : list.title == "Touristen-E-Visum für Laos"
                              ? "/country/Laos.webp"
                              : list.title ==
                                "Elektronisches Touristenvisum für Kambodscha"
                              ? "/country/Cambodia.webp"
                              : //23 HUNGARY
                              //24 AUSTRIA
                              //25 SERBIA
                              //26 SWITZERLAND
                              //27 GERMANY
                              //28  ISRAEL
                              list.title ==
                                "ויזה אלקטרונית לתיירים אזרבייג&#39;ן"
                              ? "/country/Azerbaijan.webp"
                              : list.title == "ויזה אלקטרונית לתייר בבחריין"
                              ? "/country/Bahrein.webp"
                              : list.title == "ויזה אלקטרונית לתיירים לקניה"
                              ? "/country/Kenya.webp"
                              : list.title == "ניו זילנד תיירות ETA"
                              ? "/country/newZealand.webp"
                              : list.title == "קנדה תיירות ETA"
                              ? "/country/Canada.webp"
                              : list.title ==
                                "ויזה אלקטרונית לתייר של טג&#39;יקיסטן"
                              ? "/country/tajikistan.webp"
                              : list.title == "ויזה אלקטרונית לתיירים של ארמניה"
                              ? "/country/Armenian.webp"
                              : list.title == "ויזה אלקטרונית לתיירים למרוקו"
                              ? "/country/Morocco.webp"
                              : //27  BULGARRIA
                              list.title ==
                                "Виетнамска туристическа електронна виза"
                              ? "/country/Vietnam.webp"
                              : list.title ==
                                "Туристическа електронна виза за Камбоджа"
                              ? "/country/Cambodia.webp"
                              : list.title ==
                                "Индийска туристическа електронна виза"
                              ? "/country/India.webp"
                              : list.title ==
                                "Туристическа електронна виза за Шри Ланка"
                              ? "/country/Srilanka.webp"
                              : list.title ==
                                "Египетска туристическа електронна виза"
                              ? "/country/Egypt.webp"
                              : list.title == "Австралийска е посетителска виза"
                              ? "/country/Australia.webp"
                              : list.title ==
                                "Азербайджанска туристическа електронна виза"
                              ? "/country/Azerbaijan.webp"
                              : list.title ==
                                "Туристическа електронна виза за Бахрейн"
                              ? "/country/Bahrein.webp"
                              : list.title ==
                                "Туристическа електронна виза за Кения"
                              ? "/country/Kenya.webp"
                              : list.title ==
                                "Кувейтска туристическа електронна виза"
                              ? "/country/Kuwait.webp"
                              : list.title == "Новозеландски туристически ETA"
                              ? "/country/newZealand.webp"
                              : list.title ==
                                "Електронна туристическа виза за Русия"
                              ? "/country/Russia.webp"
                              : list.title == "ESTA туристическа виза за САЩ"
                              ? "/country/USA.webp"
                              : list.title == "Канадски туристически ETA"
                              ? "/country/Canada.webp"
                              : list.title ==
                                "Лаоска туристическа електронна виза"
                              ? "/country/Laos.webp"
                              : list.title ==
                                "Електронна туристическа виза за Саудитска Арабия"
                              ? "/country/Saudi Arabia.webp"
                              : list.title ==
                                "Индонезийска туристическа електронна виза"
                              ? "/country/Indonesia1.webp"
                              : list.title ==
                                "Туристическа електронна виза за Оман"
                              ? "/country/Oman.webp"
                              : //28 FRANCE
                              //29 ITALY

                              list.title ==
                                "Visto turistico elettronico per il Vietnam"
                              ? "/country/Vietnam.webp"
                              : list.title ==
                                "Visto elettronico turistico per la Cambogia"
                              ? "/country/Cambodia.webp"
                              : list.title ==
                                "Visto elettronico turistico per l&#39;India"
                              ? "/country/India.webp"
                              : list.title ==
                                "Visto elettronico per lo Sri Lanka"
                              ? "/country/Srilanka.webp"
                              : list.title ==
                                "Visto turistico elettronico per l&#39;Egitto"
                              ? "/country/Egypt.webp"
                              : list.title == "Australia e Visto turistico"
                              ? "/country/Australia.webp"
                              : list.title ==
                                "Visto turistico elettronico per l&#39;Azerbaigian"
                              ? "/country/Azerbaijan.webp"
                              : list.title ==
                                "Visto turistico elettronico per il Bahrein"
                              ? "/country/Bahrein.webp"
                              : list.title ==
                                "Visto turistico elettronico per il Kenya"
                              ? "/country/Kenya.webp"
                              : list.title ==
                                "Visto turistico elettronico per il Kuwait"
                              ? "/country/Kuwait.webp"
                              : list.title == "ETA turistico neozelandese"
                              ? "/country/newZealand.webp"
                              : list.title ==
                                "Visto turistico elettronico per la Russia"
                              ? "/country/Russia.webp"
                              : list.title == "Visto turistico ESTA USA"
                              ? "/country/USA.webp"
                              : list.title == "ETA turistico canadese"
                              ? "/country/Canada.webp"
                              : list.title ==
                                "Visto turistico elettronico per il Laos"
                              ? "/country/Laos.webp"
                              : list.title ==
                                "Visto turistico elettronico per l&#39;Arabia Saudita"
                              ? "/country/Saudi Arabia.webp"
                              : list.title ==
                                "Visto elettronico per l&#39;Indonesia"
                              ? "/country/Indonesia1.webp"
                              : list.title ==
                                "Visto turistico elettronico per l&#39;Oman"
                              ? "/country/Oman.webp"
                              : //30 DENMARK

                              list.title == "Vietnam turist e-visum"
                              ? "/country/Vietnam.webp"
                              : list.title == "Cambodja turist e-visum"
                              ? "/country/Cambodia.webp"
                              : list.title == "Indien turist e-visum"
                              ? "/country/India.webp"
                              : list.title == "Sri Lanka turist e-visum"
                              ? "/country/Srilanka.webp"
                              : list.title == "Egyptens turist e-visum"
                              ? "/country/Egypt.webp"
                              : list.title == "Australien e Besøgsvisum"
                              ? "/country/Australia.webp"
                              : list.title == "Aserbajdsjan turist e-visum"
                              ? "/country/Azerbaijan.webp"
                              : list.title == "Bahrain turist e-visum"
                              ? "/country/Bahrein.webp"
                              : list.title == "Kenya turist e-visum"
                              ? "/country/Kenya.webp"
                              : list.title == "Kuwait turist e-visum"
                              ? "/country/Kuwait.webp"
                              : list.title == "Laos turist e-visum"
                              ? "/country/Laos.webp"
                              : list.title == "Saudi-Arabien turist e-visum"
                              ? "/country/Saudi Arabia.webp"
                              : list.title == "Rusland turist e-visum"
                              ? "/country/Russia.webp"
                              : list.title == "Indonesien turist e-visum"
                              ? "/country/Indonesia1.webp"
                              : list.title == "Oman turist e-visum"
                              ? "/country/Oman.webp"
                              : list.title == "USA turist ESTA VISA"
                              ? "/country/USA.webp"
                              : //31 slovakia
                              list.title ==
                                "Vietnamské turistické elektronické vízum"
                              ? "/country/Vietnam.webp"
                              : list.title ==
                                "Laosské turistické elektronické vízum"
                              ? "/country/Laos.webp"
                              : list.title ==
                                "Kambodžské turistické elektronické vízum"
                              ? "/country/Cambodia.webp"
                              : list.title ==
                                "Indické turistické elektronické vízum"
                              ? "/country/India.webp"
                              : list.title ==
                                "Turistické elektronické víza Srí Lanky"
                              ? "/country/Srilanka.webp"
                              : list.title ==
                                "Egyptské turistické elektronické vízum"
                              ? "/country/Egypt.webp"
                              : list.title == "Austrália a návštevnícke víza"
                              ? "/country/Australia.webp"
                              : list.title ==
                                "Azerbajdžanské turistické elektronické víza"
                              ? "/country/Azerbaijan.webp"
                              : list.title ==
                                "Bahrajnské turistické elektronické vízum"
                              ? "/country/Bahrein.webp"
                              : list.title ==
                                "Keňa turistické elektronické vízum"
                              ? "/country/Kenya.webp"
                              : list.title ==
                                "Kuvajtské turistické elektronické vízum"
                              ? "/country/Kuwait.webp"
                              : list.title == "Turistický ETA na Novom Zélande"
                              ? "/country/newZealand.webp"
                              : list.title ==
                                "Saudská Arábia turistické E-vízum"
                              ? "/country/Saudi Arabia.webp"
                              : list.title ==
                                "Ruské turistické elektronické vízum"
                              ? "/country/Russia.webp"
                              : list.title ==
                                "Indonézske turistické elektronické vízum"
                              ? "/country/Indonesia1.webp"
                              : list.title ==
                                "Ománske turistické elektronické vízum"
                              ? "/country/Oman.webp"
                              : list.title == "USA turistické ESTA VISA"
                              ? "/country/USA.webp"
                              : list.title == "Kanadský turistický ETA"
                              ? "/country/Canada.webp"
                              : list.title ==
                                "Szaúd-Arábia turisztikai e-vízuma"
                              ? "/country/Saudi Arabia.webp"
                              : list.title == "Indonéziai turisztikai e-vízum"
                              ? "/country/Indonesia1.webp"
                              : list.title == "Laos Tourist E-Visa"
                              ? "/country/Laos.webp"
                              : //32 Norway

                              list.title == "Kambodsja turist e-visum"
                              ? "/country/Cambodia.webp"
                              : list.title == "India turist e-visum"
                              ? "/country/India.webp"
                              : list.title == "Egypt turist e-visum"
                              ? "/country/Egypt.webp"
                              : list.title == "Australia e besøksvisum"
                              ? "/country/Australia.webp"
                              : list.title == "Saudi-Arabia turist e-visum"
                              ? "/country/Saudi Arabia.webp"
                              : list.title == "Russland turist e-visum"
                              ? "/country/Russia.webp"
                              : list.title == "Indonesia turist e-visum"
                              ? "/country/Indonesia1.webp"
                              : // 33 ireland
                              //spain
                              list.title ==
                                "Visa electrónica de turista de Laos"
                              ? "/country/Laos.webp"
                              : list.title ==
                                "Visa electrónica de turista para Kenia"
                              ? "/country/Kenya.webp"
                              : list.title ==
                                "Visa electrónica de turista para Kuwait"
                              ? "/country/Kuwait.webp"
                              : list.title ==
                                "Visa electrónica de turista para Arabia Saudita"
                              ? "/country/Saudi Arabia.webp"
                              : list.title ==
                                "Visa electrónica de turista para Indonesia"
                              ? "/country/Indonesia1.webp"
                              : list.title ==
                                "Visa electrónica de turista para Omán"
                              ? "/country/Oman.webp"
                              : // croatia
                              //36 poland

                              list.title == "E-Visa turystyczna do Wietnamu"
                              ? "/country/Vietnam.webp"
                              : list.title == "E-Visa turystyczna do Laosu"
                              ? "/country/Laos.webp"
                              : list.title == "E-Visa turystyczna do Kambodży"
                              ? "/country/Cambodia.webp"
                              : list.title == "E-wiza turystyczna do Indii"
                              ? "/country/India.webp"
                              : list.title == "E-Visa turystyczna do Sri Lanki"
                              ? "/country/Srilanka.webp"
                              : list.title == "E-Visa turystyczna do Egiptu"
                              ? "/country/Egypt.webp"
                              : list.title == "Australia i wiza turystyczna"
                              ? "/country/Australia.webp"
                              : list.title ==
                                "Turystyczna e-Visa do Azerbejdżanu"
                              ? "/country/Azerbaijan.webp"
                              : list.title == "Turystyczna e-Visa do Bahrajnu"
                              ? "/country/Bahrein.webp"
                              : list.title == "E-Visa turystyczna do Kenii"
                              ? "/country/Kenya.webp"
                              : list.title == "E-Visa turystyczna do Kuwejtu"
                              ? "/country/Kuwait.webp"
                              : list.title == "ETA turystyczna w Nowej Zelandii"
                              ? "/country/newZealand.webp"
                              : list.title ==
                                "E-Visa turystyczna do Arabii Saudyjskiej"
                              ? "/country/Saudi Arabia.webp"
                              : list.title == "E-wiza turystyczna do Rosji"
                              ? "/country/Russia.webp"
                              : list.title == "E-Visa turystyczna do Indonezji"
                              ? "/country/Indonesia1.webp"
                              : list.title == "Turystyczna e-Visa do Omanu"
                              ? "/country/Oman.webp"
                              : list.title == "Wiza turystyczna ESTA do USA"
                              ? "/country/USA.webp"
                              : list.title == "Kanadyjska turystyczna ETA"
                              ? "/country/Canada.webp"
                              : //36 Lithuania

                              list.title ==
                                "Vietnamo turistinė elektroninė viza"
                              ? "/country/Vietnam.webp"
                              : list.title == "Laoso turistinė elektroninė viza"
                              ? "/country/Laos.webp"
                              : list.title ==
                                "Kambodžos turistinė elektroninė viza"
                              ? "/country/Cambodia.webp"
                              : list.title ==
                                "Indijos turistinė elektroninė viza"
                              ? "/country/India.webp"
                              : list.title ==
                                "Šri Lankos turistinė elektroninė viza"
                              ? "/country/Srilanka.webp"
                              : list.title ==
                                "Egipto turistinė elektroninė viza"
                              ? "/country/Egypt.webp"
                              : list.title == "Australijos e lankytojų viza"
                              ? "/country/Australia.webp"
                              : list.title ==
                                "Azerbaidžano turistinė elektroninė viza"
                              ? "/country/Azerbaijan.webp"
                              : list.title ==
                                "Bahreino turistinė elektroninė viza"
                              ? "/country/Bahrein.webp"
                              : list.title ==
                                "Kenijos turistinė elektroninė viza"
                              ? "/country/Kenya.webp"
                              : list.title ==
                                "Kuveito turistinė elektroninė viza"
                              ? "/country/Kuwait.webp"
                              : list.title ==
                                "Naujosios Zelandijos turistinis ETA"
                              ? "/country/newZealand.webp"
                              : list.title ==
                                "Saudo Arabijos turistinė elektroninė viza"
                              ? "/country/Saudi Arabia.webp"
                              : list.title ==
                                "Rusijos turistinė elektroninė viza"
                              ? "/country/Russia.webp"
                              : list.title ==
                                "Indonezijos turistinė elektroninė viza"
                              ? "/country/Indonesia1.webp"
                              : list.title == "Omano turistinė elektroninė viza"
                              ? "/country/Oman.webp"
                              : list.title == "JAV turistinė ESTA VISA"
                              ? "/country/USA.webp"
                              : list.title == "Kanados turistinis ETA"
                              ? "/country/Canada.webp"
                              : //36 Romania

                              list.title ==
                                "Viză electronică turistică pentru Vietnam"
                              ? "/country/Vietnam.webp"
                              : list.title == "E-Viză turistică pentru Laos"
                              ? "/country/Laos.webp"
                              : list.title ==
                                "E-Viză turistică pentru Cambodgia"
                              ? "/country/Cambodia.webp"
                              : list.title ==
                                "Viză electronică turistică pentru India"
                              ? "/country/India.webp"
                              : list.title ==
                                "E-Visa turistica pentru Sri Lanka"
                              ? "/country/Srilanka.webp"
                              : list.title == "E-Visa turistica pentru Egipt"
                              ? "/country/Egypt.webp"
                              : list.title == "Australia e Viza de vizitator"
                              ? "/country/Australia.webp"
                              : list.title ==
                                "E-Visa turistica pentru Azerbaidjan"
                              ? "/country/Azerbaijan.webp"
                              : list.title == "E-Visa turistica pentru Bahrain"
                              ? "/country/Bahrein.webp"
                              : list.title ==
                                "Viză electronică turistică pentru Kenya"
                              ? "/country/Kenya.webp"
                              : list.title == "E-Visa turistica pentru Kuweit"
                              ? "/country/Kuwait.webp"
                              : list.title == "ETA Turistică din Noua Zeelandă"
                              ? "/country/newZealand.webp"
                              : list.title ==
                                "E-Visa turistica pentru Arabia Saudita"
                              ? "/country/Saudi Arabia.webp"
                              : list.title == "E-Visa turistica pentru Rusia"
                              ? "/country/Russia.webp"
                              : list.title ==
                                "Viză electronică turistică pentru Indonezia"
                              ? "/country/Indonesia1.webp"
                              : list.title == "E-Viză turistică pentru Oman"
                              ? "/country/Oman.webp"
                              : list.title == "VISA ESTA Turist SUA"
                              ? "/country/USA.webp"
                              : list.title == "Canada Turist ETA"
                              ? "/country/Canada.webp"
                              : //37 Latvia

                              list.title == "Vjetnamas tūristu e-vīza"
                              ? "/country/Vietnam.webp"
                              : list.title == "Laosas tūristu e-vīza"
                              ? "/country/Laos.webp"
                              : list.title == "Kambodžas tūristu e-vīza"
                              ? "/country/Cambodia.webp"
                              : list.title == "Indijas tūristu e-vīza"
                              ? "/country/India.webp"
                              : list.title == "Šrilankas tūristu e-vīza"
                              ? "/country/Srilanka.webp"
                              : list.title == "Ēģiptes tūristu e-vīza"
                              ? "/country/Egypt.webp"
                              : list.title == "Austrālijas e apmeklētāju vīza"
                              ? "/country/Australia.webp"
                              : list.title == "Azerbaidžānas tūristu e-vīza"
                              ? "/country/Azerbaijan.webp"
                              : list.title == "Bahreinas tūristu e-vīza"
                              ? "/country/Bahrein.webp"
                              : list.title == "Kenijas tūristu e-vīza"
                              ? "/country/Kenya.webp"
                              : list.title == "Kuveitas tūristu e-vīza"
                              ? "/country/Kuwait.webp"
                              : list.title == "Jaunzēlandes tūristu ETA"
                              ? "/country/newZealand.webp"
                              : list.title == "Saūda Arābijas tūristu e-vīza"
                              ? "/country/Saudi Arabia.webp"
                              : list.title == "Krievijas tūristu e-vīza"
                              ? "/country/Russia.webp"
                              : list.title == "Indonēzijas tūristu e-vīza"
                              ? "/country/Indonesia1.webp"
                              : list.title == "Omānas tūristu e-vīza"
                              ? "/country/Oman.webp"
                              : list.title == "ASV tūristu ESTA VISA"
                              ? "/country/USA.webp"
                              : list.title == "Kanādas tūristu ETA"
                              ? "/country/Canada.webp"
                              : // 38 Netherlands
                              list.title == "E-Toeristenvisum voor Vietnam"
                              ? "/country/Vietnam.webp"
                              : list.title == "Laos e-toeristenvisum"
                              ? "/country/Laos.webp"
                              : list.title == "E-Toeristenvisum voor Cambodja"
                              ? "/country/Cambodia.webp"
                              : list.title == "E-Toeristenvisum voor India"
                              ? "/country/India.webp"
                              : list.title == "E-Toeristenvisum voor Sri Lanka"
                              ? "/country/Srilanka.webp"
                              : list.title == "E-Toeristenvisum voor Egypte"
                              ? "/country/Egypt.webp"
                              : list.title == "Australië e bezoekersvisum"
                              ? "/country/Australia.webp"
                              : list.title ==
                                "E-Toeristenvisum voor Azerbeidzjan"
                              ? "/country/Azerbaijan.webp"
                              : list.title == "E-Toeristenvisum voor Bahrein"
                              ? "/country/Bahrein.webp"
                              : list.title == "E-Toeristenvisum Kenia"
                              ? "/country/Kenya.webp"
                              : list.title == "E-Toeristenvisum voor Koeweit"
                              ? "/country/Kuwait.webp"
                              : list.title == "Toeristen ETA Nieuw-Zeeland"
                              ? "/country/newZealand.webp"
                              : list.title == "E-Toeristenvisum Saoedi-Arabië"
                              ? "/country/Saudi Arabia.webp"
                              : list.title == "E-Toeristenvisum voor Rusland"
                              ? "/country/Russia.webp"
                              : list.title == "E-Toeristenvisum voor Indonesië"
                              ? "/country/Indonesia1.webp"
                              : list.title == "E-Toeristenvisum voor Oman"
                              ? "/country/Oman.webp"
                              : list.title == "VS Toeristen ESTA VISA"
                              ? "/country/USA.webp"
                              : list.title == "Toeristen ETA Canada"
                              ? "/country/Canada.webp"
                              : // 39 Rusia
                              //40 Belgium
                              list.title == "E-visa de tourisme pour le Laos"
                              ? "/country/Laos.webp"
                              : list.title ==
                                "E-Visa de tourisme pour l&#39;Arabie Saoudite"
                              ? "/country/Saudi Arabia.webp"
                              : list.title ==
                                "E-Visa de tourisme pour la Russie"
                              ? "/country/Russia.webp"
                              : list.title ==
                                "Visa touristique électronique pour l&#39;Indonésie"
                              ? "/country/Indonesia1.webp"
                              : list.title == "E-visa de tourisme pour Oman"
                              ? "/country/Oman.webp"
                              : list.title == "ETA de tourisme au Canada"
                              ? "/country/Canada.webp"
                              : //41 Czech Republic
                              //42 Greece

                              list.title ==
                                "Τουριστική ηλεκτρονική θεώρηση Βιετνάμ"
                              ? "/country/Vietnam.webp"
                              : list.title ==
                                "Τουριστική ηλεκτρονική θεώρηση του Λάος"
                              ? "/country/Laos.webp"
                              : list.title ==
                                "Τουριστική Ηλεκτρονική Βίζα Καμπότζης"
                              ? "/country/Cambodia.webp"
                              : list.title ==
                                "Τουριστική Ηλεκτρονική Βίζα Ινδίας"
                              ? "/country/India.webp"
                              : list.title ==
                                "Τουριστική ηλεκτρονική θεώρηση της Σρι Λάνκα"
                              ? "/country/Srilanka.webp"
                              : list.title ==
                                "Τουριστική Ηλεκτρονική Βίζα Αιγύπτου"
                              ? "/country/Egypt.webp"
                              : list.title == "Αυστραλία e Visitor Visa"
                              ? "/country/Australia.webp"
                              : list.title ==
                                "Τουριστική ηλεκτρονική θεώρηση του Αζερμπαϊτζάν"
                              ? "/country/Azerbaijan.webp"
                              : list.title ==
                                "Τουριστική ηλεκτρονική θεώρηση του Μπαχρέιν"
                              ? "/country/Bahrein.webp"
                              : list.title == "Τουρίστας ΗΠΑ ESTA"
                              ? "/country/USA.webp"
                              : list.title ==
                                "Τουριστική ηλεκτρονική θεώρηση του Ομάν"
                              ? "/country/Oman.webp"
                              : list.title ==
                                "Τουριστική Ηλεκτρονική Βίζα Σαουδικής Αραβίας"
                              ? "/country/Saudi Arabia.webp"
                              : list.title ==
                                "Τουριστική ηλεκτρονική θεώρηση της Ρωσίας"
                              ? "/country/Russia.webp"
                              : list.title ==
                                "Τουριστική ηλεκτρονική βίζα Ινδονησίας"
                              ? "/country/Indonesia1.webp"
                              : list.title ==
                                "Τουριστική ΕΤΑ της Νέας Ζηλανδίας"
                              ? "/country/newZealand.webp"
                              : list.title ==
                                "Τουριστική ηλεκτρονική βίζα Κουβέιτ"
                              ? "/country/Kuwait.webp"
                              : list.title ==
                                "Τουριστική Ηλεκτρονική Βίζα Κένυας"
                              ? "/country/Kenya.webp"
                              : //43 Portugal

                              list.title ==
                                "Visto eletrônico laosiano de turista"
                              ? "/country/Laos.webp"
                              : list.title == "Austrália e visto de visitante"
                              ? "/country/Australia.webp"
                              : list.title == "E-Visa de turista para o Kuwait"
                              ? "/country/Kuwait.webp"
                              : list.title == "Arábia Saudita E-Visa de turista"
                              ? "/country/Saudi Arabia.webp"
                              : list.title == "Rússia E-Visa de turista"
                              ? "/country/Russia.webp"
                              : list.title ==
                                "Visto eletrônico de turista para a Indonésia"
                              ? "/country/Indonesia1.webp"
                              : list.title == "E-Visa omã de turista"
                              ? "/country/Oman.webp"
                              : list.title == "VISA ESTA de turista nos EUA"
                              ? "/country/USA.webp"
                              : list.title == "Canadá Turismo ETA"
                              ? "/country/Canada.webp"
                              : //44 Sweden
                              list.title == "Kambodja turist E-visum"
                              ? "/country/Cambodia.webp"
                              : list.title == "Australien e besöksvisum"
                              ? "/country/Australia.webp"
                              : list.title == "Azerbajdzjan turist e-visum"
                              ? "/country/Azerbaijan.webp"
                              : list.title == "Kenya turist E-visum"
                              ? "/country/Kenya 1.webp"
                              : list.title == "Nya Zeelands turist ETA"
                              ? "/country/newZealand.webp"
                              : list.title == "Saudiarabiens turist E-visum"
                              ? "/country/Saudi Arabia.webp"
                              : list.title == "Ryssland turist E-visum"
                              ? "/country/Russia.webp"
                              : list.title == "Indonesiens turist e-visum"
                              ? "/country/Indonesia1.webp"
                              : list.title == "Kanada Tourist ETA"
                              ? "/country/Canada.webp"
                              : //44 Mexico
                              list.title ==
                                "Visa electrónica de turista para Sudáfrica"
                              ? "/country/South Africa.webp"
                              : list.title ==
                                "Visa electrónica de turista para Armenia"
                              ? "/country/Armenian.webp"
                              : list.title ==
                                "Visa electrónica de turista para Tayikistán"
                              ? "/country/tajikistan.webp"
                              : list.title ==
                                "Visa electrónica de turista para Turquía"
                              ? "/country/Turkey.webp"
                              : list.title ==
                                "Visa electrónica de turista para Ucrania"
                              ? "/country/Ukraine 1.webp"
                              : list.title ==
                                "Visa electrónica de turista para Tailandia"
                              ? "/country/Thailand.webp"
                              : //44 Brazil

                              list.title ==
                                "E-Visa de turista para o Tadjiquistão"
                              ? "/country/tajikistan.webp"
                              : // 45 Finland
                              list.title == "Laosin turistiviisumi"
                              ? "/country/Laos.webp"
                              : list.title == "Saudi-Arabian turisti E-Visa"
                              ? "/country/Saudi Arabia.webp"
                              : list.title == "Indonesian turistiviisumi"
                              ? "/country/Indonesia1.webp"
                              : list.title == "Oman Tourist E-Visa"
                              ? "/country/Oman.webp"
                              : //46 China
                              list.title == "老挝旅游电子签证"
                              ? "/country/Laos.webp"
                              : list.title == "南非旅游电子签证"
                              ? "/country/South Africa.webp"
                              : list.title == "格鲁吉亚旅游电子签证"
                              ? "/country/Georgia.webp"
                              : list.title == "摩尔多瓦旅游电子签证"
                              ? "/country/Moldova 1.webp"
                              : list.title == "沙特阿拉伯旅游电子签证"
                              ? "/country/Saudi Arabia.webp"
                              : list.title == "塔吉克斯坦旅游电子签证"
                              ? "/country/tajikistan.webp"
                              : list.title == "乌克兰旅游电子签证"
                              ? "/country/Ukraine 1.webp"
                              : list.title == "印度尼西亚旅游电子签证"
                              ? "/country/Indonesia1.webp"
                              : list.title == "罗马尼亚旅游电子签证"
                              ? "/country/Romania.webp"
                              : list.title == "智利旅游电子签证"
                              ? "/country/Chile.webp"
                              : list.title == "委内瑞拉旅游电子签证"
                              ? "/country/venezuela.webp"
                              : list.title == "阿曼旅游电子签证"
                              ? "/country/Oman.webp"
                              : list.title == "卡塔尔旅游电子签证"
                              ? "/country/Qatar 1.webp"
                              : //46 Indonesia
                              //chile
                              list.title ==
                                "Visa electrónica de turista de Venezuela"
                              ? "/country/venezuela.webp"
                              : // default
                              list.title == "Vietnam Tourist E-Visa"
                              ? "/country/Vietnam.webp"
                              : list.title == "Cambodia Tourist E-Visa"
                              ? "/country/Cambodia.webp"
                              : list.title == "Sri Lanka Tourist E-Visa"
                              ? "/country/Srilanka.webp"
                              : list.title == "E-Visa Pelancong Sri Lanka"
                              ? "/country/Srilanka.webp"
                              : list.title == "E-Visa Pelancong Ukraine"
                              ? "/country/Ukraine 1.webp"
                              : list.title == "E-Visa Pelancong Oman"
                              ? "/country/Oman.webp"
                              : list.title == "United Kingdom EVW"
                              ? "/country/UnitedKingdom.webp"
                              : list.title == "Egypt Tourist E-Visa"
                              ? "/country/Egypt.webp"
                              : list.title == "E-Visa Pelancong Armenia"
                              ? "/country/Armenian.webp"
                              : list.title == "E-Visa Pelancong Georgia"
                              ? "/country/Georgia.webp"
                              : list.title == "E-Visa Pelancong Moldova"
                              ? "/country/Moldova 1.webp"
                              : list.title == "E-Visa Pelancong Arab Saudi"
                              ? "/country/Saudi Arabia.webp"
                              : list.title == "Azerbaijan Tourist E-Visa"
                              ? "/country/Azerbaijan.webp"
                              : list.title == "E-Visa Pelancong Azerbaijan"
                              ? "/country/Azerbaijan.webp"
                              : list.title == "Kenya Tourist E-Visa"
                              ? "/country/Kenya.webp"
                              : list.title == "Malaysia Tourist E-Visa"
                              ? "/country/Malaysia.webp"
                              : list.title == "UAE Tourist E-Visa"
                              ? "/country/UAE.webp"
                              : list.title == "Russia Tourist E-Visa"
                              ? "/country/Russia.webp"
                              : list.title == "Thailand Tourist E-Visa"
                              ? "/country/Thailand.webp"
                              : list.title == "Australia e Visitor Visa"
                              ? "/country/Australia.webp"
                              : list.title == "Australia dan Visa Pelawat"
                              ? "/country/Australia.webp"
                              : list.title == "India Tourist E-Visa"
                              ? "/country/India.webp"
                              : list.title == "E-Visa Pelancong India"
                              ? "/country/India.webp"
                              : list.title == "New Zealand Tourist ETA"
                              ? "/country/newZealand.webp"
                              : list.title == "Argentina Tourist E-Visa"
                              ? "/country/Argentina.webp"
                              : list.title == "USA Tourist ESTA"
                              ? "/country/USA.webp"
                              : list.title == "Canada Tourist ETA"
                              ? "/country/Canada.webp"
                              : list.title == "Turkey Tourist E-Visa"
                              ? "/country/Turkey.webp"
                              : list.title == "E-Visa Pelancong Bahrain"
                              ? "/country/Bahrein.webp"
                              : list.title == "E-Visa Pelancong Kuwait"
                              ? "/country/Kuwait.webp"
                              : list.title == "ETA Pelancong New Zealand"
                              ? "/country/newZealand.webp"
                              : list.title == "E-Visa Pelancong Rusia"
                              ? "/country/Russia.webp"
                              : list.title ==
                                "التأشيرة الإلكترونية السياحية لمصر"
                              ? "/country/Egypt.webp"
                              : list.title ==
                                "تأشيرة مولدوفا السياحية الإلكترونية"
                              ? "/country/Moldova 1.webp"
                              : list.title ==
                                "تأشيرة سريلانكا السياحية الإلكترونية"
                              ? "/country/srilanka 1.webp"
                              : list.title ==
                                "تأشيرة إندونيسيا السياحية الإلكترونية"
                              ? "/country/Indonesia1.webp"
                              : list.title ==
                                "تأشيرة تشيلي السياحية الإلكترونية"
                              ? "/country/Chile.webp"
                              : list.title ==
                                "تأشيرة رومانيا السياحية الإلكترونية"
                              ? "/country/Romania.webp"
                              : list.title ==
                                "تأشيرة أرمينيا السياحية الإلكترونية"
                              ? "/country/Turkey.webp"
                              : list.title ==
                                "تأشيرة أذربيجان السياحية الإلكترونية"
                              ? "/country/Russia.webp"
                              : list.title ==
                                "تأشيرة جنوب إفريقيا السياحية الإلكترونية"
                              ? "/country/newZealand.webp"
                              : list.title == "تأشيرة لاوس السياحية الإلكترونية"
                              ? "/country/Laos.webp"
                              : list.title ==
                                "تأشيرة فيتنام السياحية الإلكترونية"
                              ? "/country/Vietnam.webp"
                              : list.title ==
                                "تأشيرة الهند السياحية الإلكترونية"
                              ? "/country/India.webp"
                              : list.title == "كندا السياحية ايتا"
                              ? "/country/Canada.webp"
                              : list.title ==
                                "تأشيرة كمبوديا السياحية الإلكترونية"
                              ? "/country/Cambodia.webp"
                              : list.title ==
                                "تأشيرة تايوان السياحية الإلكترونية"
                              ? "/country/Taiwan.webp"
                              : list.title ==
                                "تأشيرة كينيا السياحية الإلكترونية"
                              ? "/country/Kenya.webp"
                              : list.title == "المملكة المتحدة EVW"
                              ? "/country/UnitedKingdom.webp"
                              : list.title == "نيوزيلندا السياحية ETA"
                              ? "/country/newZealand.webp"
                              : list.title ==
                                "تأشيرة تركيا السياحية الإلكترونية"
                              ? "/country/Turkey.webp"
                              : list.title ==
                                "التأشيرة الإلكترونية السياحية لروسيا"
                              ? "/country/Russia.webp"
                              : list.title ==
                                "تأشيرة الأرجنتين السياحية الإلكترونية"
                              ? "/country/Argentina.webp"
                              : list.title ==
                                "تأشيرة كولومبيا السياحية الإلكترونية"
                              ? "/country/Cambodia.webp"
                              : list.title == "베트남 관광 e비자"
                              ? "/country/Vietnam.webp"
                              : list.title == "캄보디아 관광 E비자"
                              ? "/country/Cambodia.webp"
                              : list.title == "이집트 관광 E비자"
                              ? "/country/Egypt.webp"
                              : list.title == "아제르바이잔 관광 E비자"
                              ? "/country/Azerbaijan.webp"
                              : list.title == "바레인 관광 E비자"
                              ? "/country/Bahrein.webp"
                              : list.title == "케냐 관광 E비자"
                              ? "/country/Kenya.webp"
                              : list.title == "쿠웨이트 관광 E비자"
                              ? "/country/Kuwait.webp"
                              : list.title == "뉴질랜드 관광 ETA"
                              ? "/country/newZealand.webp"
                              : list.title == "미국 관광 ESTA 비자"
                              ? "/country/USA.webp"
                              : list.title == "오만 관광 E비자"
                              ? "/country/Oman.webp"
                              : list.title == "인도네시아 관광 E비자"
                              ? "/country/Indonesia1.webp"
                              : list.title == "사우디아라비아 관광 E비자"
                              ? "/country/Saudi Arabia.webp"
                              : list.title == "캐나다 관광 ETA"
                              ? "/country/Canada.webp"
                              : list.title == "호주 전자 방문 비자"
                              ? "/country/Australia.webp"
                              : list.title == "วีซ่าท่องเที่ยวอินเดีย E-Visa"
                              ? "/country/India.webp"
                              : list.title == "วีซ่าท่องเที่ยวศรีลังกา E-Visa"
                              ? "/country/Srilanka.webp"
                              : list.title == "วีซ่าท่องเที่ยวโมร็อกโก E-Visa"
                              ? "/country/Morocco.webp"
                              : list.title == "วีซ่าท่องเที่ยวอาร์เมเนีย E-Visa"
                              ? "/country/Armenian.webp"
                              : list.title == "วีซ่าท่องเที่ยวโมร็อกโก E-Visa"
                              ? "/country/Morocco.webp"
                              : list.title == "วีซ่าท่องเที่ยวยูเครน E-Visa"
                              ? "/country/Ukraine 1.webp"
                              : list.title == "E-Visa ท่องเที่ยวมอลโดวา"
                              ? "/country/Moldova.webp"
                              : list.title == "E-Visa ท่องเที่ยวโรมาเนีย"
                              ? "/country/Romania.webp"
                              : list.title == "วีซ่าท่องเที่ยวโอมาน E-Visa"
                              ? "/country/Oman.webp"
                              : list.title ==
                                "วีซ่าท่องเที่ยวอาเซอร์ไบจาน E-Visa"
                              ? "/country/Azerbaijan.webp"
                              : list.title == "วีซ่าท่องเที่ยวบาห์เรน E-Visa"
                              ? "/country/Bahrein.webp"
                              : list.title == "วีซ่าท่องเที่ยวเคนยา E-Visa"
                              ? "/country/Kenya.webp"
                              : list.title ==
                                "E-Visa ท่องเที่ยวสหรัฐอาหรับเอมิเรตส์"
                              ? "/country/UAE.webp"
                              : list.title == "Kamboçya Turist E-Vizesi"
                              ? "/country/Cambodia.webp"
                              : list.title == "Laos Turist E-Vizesi"
                              ? "/country/Laos.webp"
                              : list.title == "Tayvan Turist E-Vizesi"
                              ? "/country/Taiwan.webp"
                              : list.title == "Ermenistan Turist E-Vizesi"
                              ? "/country/Armenian.webp"
                              : list.title == "Romanya Turist E-Vizesi"
                              ? "/country/Romania.webp"
                              : list.title == "Meksika Turist E-Vizesi"
                              ? "/country/Maxico.webp"
                              : list.title == "Endonezya Turist E-Vizesi"
                              ? "/country/Indonesia1.webp"
                              : list.title == "Umman Turist E-Vizesi"
                              ? "/country/Oman.webp"
                              : list.title == "Sri Lanka Turist E-Vizesi"
                              ? "/country/Srilanka.webp"
                              : list.title == "Kenya Turist E-Vizesi"
                              ? "/country/Kenya.webp"
                              : list.title == "Kuveyt Turist E-Vizesi"
                              ? "/country/Kuwait.webp"
                              : list.title == "BAE Turist E-Vizesi"
                              ? "/country/UAE.webp"
                              : list.title == "Rusya Turist E-Vizesi"
                              ? "/country/Russia.webp"
                              : list.title ==
                                "Visa electrónica de turista para Vietnam"
                              ? "/country/Vietnam.webp"
                              : list.title ==
                                "Visa electrónica de turista para Azerbaiyán"
                              ? "/country/Azerbaijan.webp"
                              : list.title ==
                                "Visa electrónica de turista para Baréin"
                              ? "/country/Bahrein.webp"
                              : list.title == "ETA turística de Nueva Zelanda"
                              ? "/country/newZealand.webp"
                              : list.title == "VISA ESTA de turista de EE. UU."
                              ? "/country/USA.webp"
                              : list.title == "ETA turística de Canadá"
                              ? "/country/Canada.webp"
                              : list.title == "越南旅游电子签证"
                              ? "/country/Vietnam.webp"
                              : list.title == "柬埔寨旅游电子签证"
                              ? "/country/Cambodia.webp"
                              : list.title == "斯里兰卡旅游电子签证"
                              ? "/country/Srilanka.webp"
                              : list.title == "埃及旅游电子签证"
                              ? "/country/Egypt.webp"
                              : list.title == "阿塞拜疆旅游电子签证"
                              ? "/country/Azerbaijan.webp"
                              : list.title == "巴林旅游电子签证"
                              ? "/country/Bahrein.webp"
                              : list.title == "肯尼亚旅游电子签证"
                              ? "/country/Kenya.webp"
                              : list.title == "马来西亚旅游电子签证"
                              ? "/country/Malaysia.webp"
                              : list.title == "土耳其旅游电子签证"
                              ? "/country/Turkey.webp"
                              : list.title == "哥伦比亚旅游电子签证"
                              ? "/country/Cambodia.webp"
                              : list.title == "俄罗斯旅游电子签证"
                              ? "/country/Russia.webp"
                              : list.title == "USA Tourist ESTA VISA"
                              ? "/country/USA.webp"
                              : list.title == "Kanadan turisti-ETA"
                              ? "/country/Canada.webp"
                              : list.title == "Venäjän turisti E-Visa"
                              ? "/country/Russia.webp"
                              : list.title == "Kambodžan turisti E-Visa"
                              ? "/country/Cambodia.webp"
                              : list.title == "Intian turisti E-Visa"
                              ? "/country/India.webp"
                              : list.title == "Sri Lankan turisti-e-viisumi"
                              ? "/country/Srilanka.webp"
                              : list.title == "Egyptin turisti E-Visa"
                              ? "/country/Egypt.webp"
                              : list.title == "Egyptin turisti E-Visa"
                              ? "/country/Egypt.webp"
                              : list.title == "Azerbaidžanin turisti E-Visa"
                              ? "/country/Azerbaijan.webp"
                              : list.title == "Bahrain Tourist E-Visa"
                              ? "/country/Bahrein.webp"
                              : list.title == "Kenia Tourist E-Visa"
                              ? "/country/Kenya.webp"
                              : list.title == "Kuwait Tourist E-Visa"
                              ? "/country/Kuwait.webp"
                              : list.title == "Uuden-Seelannin turisti-ETA"
                              ? "/country/newZealand.webp"
                              : list.title == "E-Visa de turista vietnamita"
                              ? "/country/Vietnam.webp"
                              : list.title ==
                                "Visto eletrônico cambojano de turista"
                              ? "/country/Cambodia.webp"
                              : list.title ==
                                "Visto eletrônico indiano de turista"
                              ? "/country/India.webp"
                              : list.title == "E-Visa Sri Lanka de turista"
                              ? "/country/Srilanka.webp"
                              : list.title == "E-Visa Sri Lanka de turista"
                              ? "/country/Srilanka.webp"
                              : list.title == "E-Visa egípcio de turista"
                              ? "/country/Egypt.webp"
                              : list.title ==
                                "E-Visa de turista para o Azerbaijão"
                              ? "/country/Azerbaijan.webp"
                              : list.title == "E-Visa de turista para o Bahrein"
                              ? "/country/Bahrein.webp"
                              : list.title == "E-Visa queniano de turista"
                              ? "/country/Kenya.webp"
                              : list.title == "E-Visa queniano de turista"
                              ? "/country/Kenya.webp"
                              : list.title == "Turismo da Nova Zelândia ETA"
                              ? "/country/newZealand.webp"
                              : list.title ==
                                "Visa electrónica de turista para Camboya"
                              ? "/country/Cambodia.webp"
                              : list.title ==
                                "Visa electrónica de turista para India"
                              ? "/country/India.webp"
                              : list.title ==
                                "Visa electrónica de turista de Sri Lanka"
                              ? "/country/Srilanka.webp"
                              : list.title ==
                                "Visa electrónica de turista para Egipto"
                              ? "/country/Egypt.webp"
                              : list.title == "Visa de Visitante para Australia"
                              ? "/country/Australia.webp"
                              : list.title ==
                                "Visa electrónica de turista para Rusia"
                              ? "/country/Russia.webp"
                              : list.title == "Indian Tourist E-Visa"
                              ? "/blog2/India 3.webp"
                              : "/country/countryDefaulr.webp"
                          }
                          // src={`https://ik.imagekit.io/vs4gypuhi/${list.imageurl}`}
                          // height={300}
                          // width={450}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 33vw"
                          priority
                          fill
                          style={{ objectFit: "cover" }}
                          className="img-fluid"
                        />
                      </figure>
                      <div className="pro-details">
                        <h2 className="pro-title">{list.title}</h2>
                        <p className="skill">
                          <i className="fa fa-clock-o" /> {list.duration}{" "}
                          Validity
                        </p>
                        <p className="skill">
                          <i className="fa fa-usd" /> Starting as low as{" "}
                          {list.currency_icon} {list.price} per Visa{" "}
                        </p>
                      </div>
                    </Link>
                  </div>
                </Col>
              );
            })}
        </Row>
      </div>
    </section>
  );
}
