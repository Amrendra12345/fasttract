import { useRouter } from "next/router";
import React from "react";

const Curr_list = (props) => {
  const { locale } = useRouter();

  return (
    <>
      {locale === "en-us" ? (
        <span>
          <b className="gss_img flag-us"></b> USD{" "}
        </span>
      ) : locale === "en-sg" || locale === "zh-sg" ? (
        <span>
          <b className="gss_img flag-sg"></b>SGD{" "}
        </span>
      ) : locale === "zh-tw" || locale === "en-tw" ? (
        <span>
          <b className="gss_img flag-tw"></b>TWD{" "}
        </span>
      ) : locale === "ja-jp" || locale === "en-jp" ? (
        <span>
          <b className="gss_img flag-jp"></b>USD{" "}
        </span>
      ) : locale === "zh-hk" || locale === "en-hk" ? (
        <span>
          <b className="gss_img flag-hk"></b>USD{" "}
        </span>
      ) : locale === "ko-kr" || locale === "en-kr" ? (
        <span>
          <b className="gss_img flag-kr"></b>KRW{" "}
        </span>
      ) : locale === "en-ph" ? (
        <span>
          <b className="gss_img flag-ph"></b>PHP{" "}
        </span>
      ) : locale === "en-th" || locale === "th-th" ? (
        <span>
          <b className="gss_img flag-th"></b>THB{" "}
        </span>
      ) : locale === "en-gb" ? (
        <span>
          <b className="gss_img flag-gb"></b>GBP{" "}
        </span>
      ) : locale === "en-in" || locale === "hi-in" ? (
        <span>
          <b className="gss_img flag-in"></b>INR{" "}
        </span>
      ) : locale === "en-sl" ? (
        <span>
          <b className="gss_img flag-sl"></b>LKR{" "}
        </span>
      ) : locale === "en-za" ? (
        <span>
          <b className="gss_img flag-za"></b>ZAR{" "}
        </span>
      ) : locale === "en-au" ? (
        <span>
          <b className="gss_img flag-au"></b>AUD{" "}
        </span>
      ) : locale === "en-ke" ? (
        <span>
          <b className="gss_img flag-ke"></b>KES{" "}
        </span>
      ) : locale === "en-kw" || locale === "ar-kw" ? (
        <span>
          <b className="gss_img flag-kw"></b>KWD{" "}
        </span>
      ) : locale === "ms-my" || locale === "en-my" ? (
        <span>
          <b className="gss_img flag-my"></b>MYR{" "}
        </span>
      ) : locale === "en-nz" ? (
        <span>
          <b className="gss_img flag-nz"></b>NZD{" "}
        </span>
      ) : locale === "en-sa" || locale === "ar-sa" ? (
        <span>
          <b className="gss_img flag-sa"></b>SAR{" "}
        </span>
      ) : locale === "en-tr" || locale === "tr-tr" ? (
        <span>
          <b className="gss_img flag-tr"></b>TRY{" "}
        </span>
      ) : locale === "uk-ua" || locale === "en-ua" ? (
        <span>
          <b className="gss_img flag-ua"></b>UAH{" "}
        </span>
      ) : locale === "en-ae" || locale === "ar-ae" ? (
        <span>
          <b className="gss_img flag-ae"></b>AED{" "}
        </span>
      ) : locale === "en-ca" || locale === "fr-ca" ? (
        <span>
          <b className="gss_img flag-ca"></b>CAD{" "}
        </span>
      ) : locale === "hu-hu" || locale === "de-hu" ? (
        <span>
          <b className="gss_img flag-hu"></b>HUF{" "}
        </span>
      ) : locale === "de-at" || locale === "fr-at" ? (
        <span>
          <b className="gss_img flag-at"></b>EUR{" "}
        </span>
      ) : locale === "en-rs" || locale === "sr-rs" ? (
        <span>
          <b className="gss_img flag-rs"></b>RSD{" "}
        </span>
      ) : locale === "de-ch" || locale === "fr-ch" ? (
        <span>
          <b className="gss_img flag-ch"></b>CHF{" "}
        </span>
      ) : locale === "de-de" || locale === "en-de" ? (
        <span>
          <b className="gss_img flag-de"></b>EUR{" "}
        </span>
      ) : locale === "en-il" || locale === "he-il" ? (
        <span>
          <b className="gss_img flag-il"></b>ILS{" "}
        </span>
      ) : locale === "bg-bg" || locale === "en-bg" ? (
        <span>
          <b className="gss_img flag-bg"></b>BGN{" "}
        </span>
      ) : locale === "fr-fr" || locale === "en-fr" ? (
        <span>
          <b className="gss_img flag-fr"></b>EUR{" "}
        </span>
      ) : locale === "it-it" || locale === "en-it" ? (
        <span>
          <b className="gss_img flag-it"></b>EUR{" "}
        </span>
      ) : locale === "da-dk" || locale === "en-dk" ? (
        <span>
          <b className="gss_img flag-dk"></b>DKK{" "}
        </span>
      ) : locale === "sk-sk" || locale === "hu-sk" ? (
        <span>
          <b className="gss_img flag-sk"></b>EUR{" "}
        </span>
      ) : locale === "no-no" || locale === "en-no" ? (
        <span>
          <b className="gss_img flag-no"></b>NOK{" "}
        </span>
      ) : locale === "en-ie" ? (
        <span>
          <b className="gss_img flag-ie"></b>EUR{" "}
        </span>
      ) : locale === "es-es" ? (
        <span>
          <b className="gss_img flag-es"></b>EUR{" "}
        </span>
      ) : locale === "hr-hr" ? (
        <span>
          <b className="gss_img flag-hr"></b>HRK{" "}
        </span>
      ) : locale === "pl-pl" ? (
        <span>
          <b className="gss_img flag-pl"></b>PLN{" "}
        </span>
      ) : locale === "lt-lt" ? (
        <span>
          <b className="gss_img flag-lt"></b>EUR{" "}
        </span>
      ) : locale === "ro-ro" || locale === "hu-ro" ? (
        <span>
          <b className="gss_img flag-ro"></b>RON{" "}
        </span>
      ) : locale === "lv-lv" ? (
        <span>
          <b className="gss_img flag-lv"></b>LVA{" "}
        </span>
      ) : locale === "nl-nl" || locale === "en-nl" ? (
        <span>
          <b className="gss_img flag-nl"></b>EUR{" "}
        </span>
      ) : locale === "ru-ru" ? (
        <span>
          <b className="gss_img flag-ru"></b>RUB{" "}
        </span>
      ) : locale === "nl-be" || locale === "fr-be" ? (
        <span>
          <b className="gss_img flag-be"></b>EUR{" "}
        </span>
      ) : locale === "cs-cz" || locale === "de-cz" ? (
        <span>
          <b className="gss_img flag-cz"></b>CZK{" "}
        </span>
      ) : locale === "el-gr" ? (
        <span>
          <b className="gss_img flag-gr"></b>EUR{" "}
        </span>
      ) : locale === "pt-pt" ? (
        <span>
          <b className="gss_img flag-pt"></b>EUR{" "}
        </span>
      ) : locale === "sv-se" || locale === "en-se" ? (
        <span>
          <b className="gss_img flag-se"></b>SEK{" "}
        </span>
      ) : locale === "es-mx" || locale === "en-mx" ? (
        <span>
          <b className="gss_img flag-mx"></b>MXN{" "}
        </span>
      ) : locale === "pt-br" || locale === "es-br" ? (
        <span>
          <b className="gss_img flag-br"></b>BRL{" "}
        </span>
      ) : locale === "fi-fi" || locale === "sv-fi" ? (
        <span>
          <b className="gss_img flag-fi"></b>EUR{" "}
        </span>
      ) : locale === "zh-cn" ? (
        <span>
          <b className="gss_img flag-cn"></b>CNY{" "}
        </span>
      ) : locale === "en-id" || locale === "ms-id" ? (
        <span>
          <b className="gss_img flag-id"></b>IDR{" "}
        </span>
      ) : locale === "es-ar" || locale === "it-ar" ? (
        <span>
          <b className="gss_img flag-ar"></b>ARS{" "}
        </span>
      ) : locale === "es-cl" || locale === "en-cl" ? (
        <span>
          <b className="gss_img flag-cl"></b>CLP{" "}
        </span>
      ) : (
        ""
      )}
    </>
  );
};

export default Curr_list;
