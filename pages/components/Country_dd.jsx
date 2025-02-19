import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

const Country_dd = () => {
  const { locale } = useRouter();
  const router = useRouter();
  const { pathname, asPath, query } = router;
  //    // router.push({ pathname, query }, asPath, { locale: nextLocale})

  return (
    <div className="cn_dd">
      <Link
        href={locale === "en-us" ? "en-us" : `${asPath}`}
        locale="en-us"
        className={locale === "en-us" ? "mactive" : ""}
        title="USA"
      >
        <b className="gss_img flag-us"></b>USA{" "}
      </Link>
      <Link
        href={locale === "en-sg" ? "en-sg" : `${asPath}`}
        locale="en-sg"
        className={locale === "en-sg" ? "mactive" : ""}
        title="Singapore"
      >
        <b className="gss_img flag-sg"></b>Singapore{" "}
      </Link>
      <Link
        href={locale === "zh-tw" ? "zh-tw" : `${asPath}`}
        locale="zh-tw"
        className={locale === "zh-tw" ? "mactive" : ""}
        title="Taiwan"
      >
        <b className="gss_img flag-tw"></b>Taiwan
      </Link>
      <Link
        href={locale === "ja-jp" ? "ja-jp" : `${asPath}`}
        locale="ja-jp"
        className={locale === "ja-jp" ? "mactive" : ""}
        title="Japan"
      >
        <b className="gss_img flag-jp"></b>Japan
      </Link>
      <Link
        href={locale === "zh-hk" ? "zh-hk" : `${asPath}`}
        locale="zh-hk"
        className={locale === "zh-hk" ? "mactive" : ""}
        title="Hong Kong"
      >
        <b className="gss_img flag-hk"></b>Hong Kong
      </Link>
      <Link
        href={locale === "ko-kr" ? "ko-kr" : `${asPath}`}
        locale="ko-kr"
        className={locale === "ko-kr" ? "mactive" : ""}
        title="South Korea"
      >
        <b className="gss_img flag-kr"></b>South Korea
      </Link>
      <Link
        href={locale === "en-ph" ? "en-ph" : `${asPath}`}
        locale="en-ph"
        className={locale === "en-ph" ? "mactive" : ""}
        title="Philippines"
      >
        <b className="gss_img flag-ph"></b>Philippines
      </Link>
      <Link
        href={locale === "en-th" ? "en-th" : `${asPath}`}
        locale="en-th"
        className={locale === "en-th" ? "mactive" : ""}
        title="Thailand"
      >
        <b className="gss_img flag-th"></b>Thailand
      </Link>
      <Link
        href={locale === "en-gb" ? "en-gb" : `${asPath}`}
        locale="en-gb"
        className={locale === "en-gb" ? "mactive" : ""}
        title="United Kingdom"
      >
        <b className="gss_img flag-gb"></b>United Kingdom
      </Link>
      <Link
        href={locale === "en-in" ? "en-in" : `${asPath}`}
        locale="en-in"
        className={locale === "en-in" ? "mactive" : ""}
        title="India"
      >
        <b className="gss_img flag-in"></b>India
      </Link>
      <Link
        href={locale === "en-sl" ? "en-sl" : `${asPath}`}
        locale="en-sl"
        className={locale === "en-sl" ? "mactive" : ""}
        title="Sri Lanka"
      >
        <b className="gss_img flag-sl"></b>Sri Lanka
      </Link>
      <Link
        href={locale === "en-za" ? "en-za" : `${asPath}`}
        locale="en-za"
        className={locale === "en-za" ? "mactive" : ""}
        title="South Africa"
      >
        <b className="gss_img flag-za"></b>South Africa
      </Link>
      <Link
        href={locale === "en-au" ? "en-au" : `${asPath}`}
        locale="en-au"
        className={locale === "en-au" ? "mactive" : ""}
        title="Australia"
      >
        <b className="gss_img flag-au"></b>Australia
      </Link>
      <Link
        href={locale === "en-ke" ? "en-ke" : `${asPath}`}
        locale="en-ke"
        className={locale === "en-ke" ? "mactive" : ""}
        title="Kenya"
      >
        <b className="gss_img flag-ke"></b>Kenya
      </Link>
      <Link
        href={locale === "en-kw" ? "en-kw" : `${asPath}`}
        locale="en-kw"
        className={locale === "en-kw" ? "mactive" : ""}
        title="Kuwait"
      >
        <b className="gss_img flag-kw"></b>Kuwait
      </Link>
      <Link
        href={locale === "ms-my" ? "ms-my" : `${asPath}`}
        locale="ms-my"
        className={locale === "ms-my" ? "mactive" : ""}
        title="Malaysia"
      >
        <b className="gss_img flag-my"></b>Malaysia
      </Link>
      <Link
        href={locale === "en-nz" ? "en-nz" : `${asPath}`}
        locale="en-nz"
        className={locale === "en-nz" ? "mactive" : ""}
        title="New Zealand"
      >
        <b className="gss_img flag-nz"></b>New Zealand
      </Link>
      <Link
        href={locale === "en-sa" ? "en-sa" : `${asPath}`}
        locale="en-sa"
        className={locale === "en-sa" ? "mactive" : ""}
        title="Saudi Arabia"
      >
        <b className="gss_img flag-sa"></b>Saudi Arabia
      </Link>
      <Link
        href={locale === "en-tr" ? "en-tr" : `${asPath}`}
        locale="en-tr"
        className={locale === "en-tr" ? "mactive" : ""}
        title="Turkey"
      >
        <b className="gss_img flag-tr"></b>Turkey
      </Link>
      <Link
        href={locale === "uk-ua" ? "uk-ua" : `${asPath}`}
        locale="uk-ua"
        className={locale === "uk-ua" ? "mactive" : ""}
        title="Ukraine"
      >
        <b className="gss_img flag-ua"></b>Ukraine
      </Link>
      <Link
        href={locale === "en-ae" ? "en-ae" : `${asPath}`}
        locale="en-ae"
        className={locale === "en-ae" ? "mactive" : ""}
        title="UAE"
      >
        <b className="gss_img flag-ae"></b>UAE
      </Link>
      <Link
        href={locale === "en-ca" ? "en-ca" : `${asPath}`}
        locale="en-ca"
        className={locale === "en-ca" ? "mactive" : ""}
        title="Canada"
      >
        <b className="gss_img flag-ca"></b>Canada
      </Link>
      <Link
        href={locale === "hu-hu" ? "hu-hu" : `${asPath}`}
        locale="hu-hu"
        className={locale === "hu-hu" ? "mactive" : ""}
        title="Hungary"
      >
        <b className="gss_img flag-hu"></b>Hungary
      </Link>
      <Link
        href={locale === "de-at" ? "de-at" : `${asPath}`}
        locale="de-at"
        className={locale === "de-at" ? "mactive" : ""}
        title="Austria"
      >
        <b className="gss_img flag-at"></b>Austria
      </Link>
      <Link
        href={locale === "en-rs" ? "en-rs" : `${asPath}`}
        locale="en-rs"
        className={locale === "en-rs" ? "mactive" : ""}
        title="Serbia"
      >
        <b className="gss_img flag-rs"></b>Serbia
      </Link>
      <Link
        href={locale === "de-ch" ? "de-ch" : `${asPath}`}
        locale="de-ch"
        className={locale === "de-ch" ? "mactive" : ""}
        title="Switzerland"
      >
        <b className="gss_img flag-ch"></b>Switzerland
      </Link>
      <Link
        href={locale === "de-de" ? "de-de" : `${asPath}`}
        locale="de-de"
        className={locale === "de-de" ? "mactive" : ""}
        title="Germany"
      >
        <b className="gss_img flag-de"></b>Germany
      </Link>
      <Link
        href={locale === "en-il" ? "en-il" : `${asPath}`}
        locale="en-il"
        className={locale === "en-il" ? "mactive" : ""}
        title="Israel"
      >
        <b className="gss_img flag-il"></b>Israel
      </Link>
      <Link
        href={locale === "bg-bg" ? "bg-bg" : `${asPath}`}
        locale="bg-bg"
        className={locale === "bg-bg" ? "mactive" : ""}
        title="Bulgaria"
      >
        <b className="gss_img flag-bg"></b>Bulgaria
      </Link>
      <Link
        href={locale === "fr-fr" ? "fr-fr" : `${asPath}`}
        locale="fr-fr"
        className={locale === "fr-fr" ? "mactive" : ""}
        title="France"
      >
        <b className="gss_img flag-fr"></b>France
      </Link>
      <Link
        href={locale === "it-it" ? "it-it" : `${asPath}`}
        locale="it-it"
        className={locale === "it-it" ? "mactive" : ""}
        title="Italy"
      >
        <b className="gss_img flag-it"></b>Italy
      </Link>
      <Link
        href={locale === "da-dk" ? "da-dk" : `${asPath}`}
        locale="da-dk"
        className={locale === "da-dk" ? "mactive" : ""}
        title="Denmark"
      >
        <b className="gss_img flag-dk"></b>Denmark
      </Link>
      <Link
        href={locale === "sk-sk" ? "sk-sk" : `${asPath}`}
        locale="sk-sk"
        className={locale === "sk-sk" ? "mactive" : ""}
        title="Slovakia"
      >
        <b className="gss_img flag-sk"></b>Slovakia
      </Link>
      <Link
        href={locale === "no-no" ? "no-no" : `${asPath}`}
        locale="no-no"
        className={locale === "no-no" ? "mactive" : ""}
        title="Norway"
      >
        <b className="gss_img flag-no"></b>Norway
      </Link>
      <Link
        href={locale === "en-ie" ? "en-ie" : `${asPath}`}
        locale="en-ie"
        className={locale === "en-ie" ? "mactive" : ""}
        title="Ireland"
      >
        <b className="gss_img flag-ie"></b>Ireland
      </Link>
      <Link
        href={locale === "en-es" ? "en-es" : `${asPath}`}
        locale="es-es"
        className={locale === "es-es" ? "mactive" : ""}
        title="Spain"
      >
        <b className="gss_img flag-es"></b>Spain
      </Link>
      <Link
        href={locale === "hr-hr" ? "hr-hr" : `${asPath}`}
        locale="hr-hr"
        className={locale === "hr-hr" ? "mactive" : ""}
        title="Croatia"
      >
        <b className="gss_img flag-hr"></b>Croatia
      </Link>
      <Link
        href={locale === "pl-pl" ? "pl-pl" : `${asPath}`}
        locale="pl-pl"
        className={locale === "pl-pl" ? "mactive" : ""}
        title="Poland"
      >
        <b className="gss_img flag-pl"></b>Poland
      </Link>
      <Link
        href={locale === "lt-lt" ? "lt-lt" : `${asPath}`}
        locale="lt-lt"
        className={locale === "lt-lt" ? "mactive" : ""}
        title="Lithuania"
      >
        <b className="gss_img flag-lt"></b>Lithuania
      </Link>
      <Link
        href={locale === "ro-ro" ? "ro-ro" : `${asPath}`}
        locale="ro-ro"
        className={locale === "ro-ro" ? "mactive" : ""}
        title="Romania"
      >
        <b className="gss_img flag-ro"></b>Romania
      </Link>
      <Link
        href={locale === "lv-lv" ? "lv-lv" : `${asPath}`}
        locale="lv-lv"
        className={locale === "lv-lv" ? "mactive" : ""}
        title="Latvia"
      >
        <b className="gss_img flag-lv"></b>Latvia
      </Link>
      <Link
        href={locale === "nl-nl" ? "nl-nl" : `${asPath}`}
        locale="nl-nl"
        className={locale === "nl-nl" ? "mactive" : ""}
        title="Netherlands"
      >
        <b className="gss_img flag-nl"></b>Netherlands
      </Link>
      <Link
        href={locale === "ru-ru" ? "ru-ru" : `${asPath}`}
        locale="ru-ru"
        className={locale === "ru-ru" ? "mactive" : ""}
        title="Russia"
      >
        <b className="gss_img flag-ru"></b>Russia
      </Link>
      <Link
        href={locale === "nl-be" ? "nl-be" : `${asPath}`}
        locale="nl-be"
        className={locale === "nl-be" ? "mactive" : ""}
        title="Belgium"
      >
        <b className="gss_img flag-be"></b>Belgium
      </Link>
      <Link
        href={locale === "cs-cz" ? "cs-cz" : `${asPath}`}
        locale="cs-cz"
        className={locale === "cs-cz" ? "mactive" : ""}
        title="Czech Republic"
      >
        <b className="gss_img flag-cz"></b>Czech Republic
      </Link>
      <Link
        href={locale === "el-gr" ? "el-gr" : `${asPath}`}
        locale="el-gr"
        className={locale === "el-gr" ? "mactive" : ""}
        title="Greece"
      >
        <b className="gss_img flag-gr"></b>Greece
      </Link>
      <Link
        href={locale === "pt-pt" ? "pt-pt" : `${asPath}`}
        locale="pt-pt"
        className={locale === "pt-pt" ? "mactive" : ""}
        title="Portugal"
      >
        <b className="gss_img flag-pt"></b>Portugal
      </Link>
      <Link
        href={locale === "sv-se" ? "sv-se" : `${asPath}`}
        locale="sv-se"
        className={locale === "sv-se" ? "mactive" : ""}
        title="Sweden"
      >
        <b className="gss_img flag-se"></b>Sweden
      </Link>
      <Link
        href={locale === "es-mx" ? "es-mx" : `${asPath}`}
        locale="es-mx"
        className={locale === "es-mx" ? "mactive" : ""}
        title="Mexico"
      >
        <b className="gss_img flag-mx"></b>Mexico
      </Link>

      <Link
        href={locale === "pt-br" ? "pt-br" : `${asPath}`}
        locale="pt-br"
        className={locale === "pt-br" ? "mactive" : ""}
        title="Brazil"
      >
        <b className="gss_img flag-br"></b>Brazil
      </Link>
      <Link
        href={locale === "fi-fi" ? "fi-fi" : `${asPath}`}
        locale="fi-fi"
        className={locale === "fi-fi" ? "mactive" : ""}
        title="Finland"
      >
        <b className="gss_img flag-fi"></b>Finland
      </Link>
      <Link
        href={locale === "zh-cn" ? "zh-cn" : `${asPath}`}
        locale="zh-cn"
        className={locale === "zh-cn" ? "mactive" : ""}
        title="China"
      >
        <b className="gss_img flag-cn"></b>China
      </Link>
      <Link
        href={locale === "en-id" ? "en-id" : `${asPath}`}
        locale="en-id"
        className={locale === "en-id" ? "mactive" : ""}
        title="Indonesia"
      >
        <b className="gss_img flag-id"></b>Indonesia
      </Link>
      <Link
        href={locale === "es-ar" ? "es-ar" : `${asPath}`}
        locale="es-ar"
        className={locale === "es-ar" ? "mactive" : ""}
        title="Argentina"
      >
        <b className="gss_img flag-ar"></b>Argentina
      </Link>
      <Link
        href={locale === "es-cl" ? "es-cl" : `${asPath}`}
        locale="es-cl"
        className={locale === "es-cl" ? "mactive" : ""}
        title="Chile"
      >
        <b className="gss_img flag-cl"></b>Chile
      </Link>
    </div>
  );
};

export default Country_dd;
