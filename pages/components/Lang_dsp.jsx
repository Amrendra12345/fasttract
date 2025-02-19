import { useRouter } from "next/router";
import React from "react";

const Lang_dsp = () => {
  const { locale } = useRouter();
  const router = useRouter();
  const { pathname, asPath, query } = router;

  return (
    <>
      {locale === "en-us" ? (
        <span>English</span>
      ) : locale === "en-sg" ? (
        <span>English </span>
      ) : locale === "zh-sg" ? (
        <span>中文 </span>
      ) : locale === "zh-tw" ? (
        <span>中文 </span>
      ) : locale === "en-tw" ? (
        <span>English </span>
      ) : locale === "ja-jp" ? (
        <span>倭国 </span>
      ) : locale === "en-jp" ? (
        <span>English </span>
      ) : locale === "zh-hk" ? (
        <span>中文 </span>
      ) : locale === "en-hk" ? (
        <span>English </span>
      ) : locale === "ko-kr" ? (
        <span>한국어 </span>
      ) : locale === "en-kr" ? (
        <span>English </span>
      ) : locale === "en-ph" ? (
        <span>English </span>
      ) : locale === "en-th" ? (
        <span>English </span>
      ) : locale === "th-th" ? (
        <span>แบบไทย </span>
      ) : locale === "en-gb" ? (
        <span>English </span>
      ) : locale === "en-in" ? (
        <span>English </span>
      ) : locale === "hi-in" ? (
        <span>हिन्दी </span>
      ) : locale === "en-sl" ? (
        <span>English </span>
      ) : locale === "en-za" ? (
        <span>English </span>
      ) : locale === "en-au" ? (
        <span>English </span>
      ) : locale === "en-ke" ? (
        <span>English </span>
      ) : locale === "en-kw" ? (
        <span>English </span>
      ) : locale === "ar-kw" ? (
        <span>عربى</span>
      ) : locale === "ms-my" ? (
        <span>melayu </span>
      ) : locale === "en-my" ? (
        <span>English </span>
      ) : locale === "en-nz" ? (
        <span>English </span>
      ) : locale === "en-sa" ? (
        <span>English </span>
      ) : locale === "ar-sa" ? (
        <span>عربى </span>
      ) : locale === "en-tr" ? (
        <span>English </span>
      ) : locale === "tr-tr" ? (
        <span>Türk </span>
      ) : locale === "uk-ua" ? (
        <span>русский </span>
      ) : locale === "en-ua" ? (
        <span>English </span>
      ) : locale === "en-ae" ? (
        <span>English </span>
      ) : locale === "ar-ae" ? (
        <span>عربى </span>
      ) : locale === "en-ca" ? (
        <span>English </span>
      ) : locale === "fr-ca" ? (
        <span>française </span>
      ) : locale === "hu-hu" ? (
        <span>Magyar </span>
      ) : locale === "de-hu" ? (
        <span>deutsch </span>
      ) : locale === "de-at" ? (
        <span>deutsch </span>
      ) : locale === "fr-at" ? (
        <span>française </span>
      ) : locale === "en-rs" ? (
        <span>English </span>
      ) : locale === "sr-rs" ? (
        <span>Српски </span>
      ) : locale === "de-ch" ? (
        <span>deutsch </span>
      ) : locale === "fr-ch" ? (
        <span>française </span>
      ) : locale === "de-de" ? (
        <span>deutsch </span>
      ) : locale === "en-de" ? (
        <span>English </span>
      ) : locale === "en-il" ? (
        <span>English </span>
      ) : locale === "he-il" ? (
        <span>עִברִית </span>
      ) : locale === "bg-bg" ? (
        <span>български </span>
      ) : locale === "en-bg" ? (
        <span>English </span>
      ) : locale === "fr-fr" ? (
        <span>française </span>
      ) : locale === "en-fr" ? (
        <span>English </span>
      ) : locale === "it-it" ? (
        <span>italiano </span>
      ) : locale === "en-it" ? (
        <span>English </span>
      ) : locale === "da-dk" ? (
        <span>dansk </span>
      ) : locale === "en-dk" ? (
        <span>English </span>
      ) : locale === "sk-sk" ? (
        <span>slovenský </span>
      ) : locale === "hu-sk" ? (
        <span>Magyar </span>
      ) : locale === "no-no" ? (
        <span>norsk </span>
      ) : locale === "en-no" ? (
        <span>English </span>
      ) : locale === "en-ie" ? (
        <span>English </span>
      ) : locale === "es-es" ? (
        <span>español </span>
      ) : locale === "hr-hr" ? (
        <span>Hrvatski </span>
      ) : locale === "pl-pl" ? (
        <span>Polskie </span>
      ) : locale === "lt-lt" ? (
        <span>lietuvis </span>
      ) : locale === "ro-ro" ? (
        <span>Română </span>
      ) : locale === "lv-lv" ? (
        <span>latviski </span>
      ) : locale === "nl-nl" ? (
        <span>nederlands </span>
      ) : locale === "en-nl" ? (
        <span>English </span>
      ) : locale === "ru-ru" ? (
        <span>русский </span>
      ) : locale === "nl-be" ? (
        <span>deutsch </span>
      ) : locale === "fr-be" ? (
        <span>française </span>
      ) : locale === "cs-cz" ? (
        <span>čeština </span>
      ) : locale === "de-cz" ? (
        <span>deutsch </span>
      ) : locale === "el-gr" ? (
        <span>English </span>
      ) : locale === "pt-pt" ? (
        <span>Português </span>
      ) : locale === "sv-se" ? (
        <span>svenska </span>
      ) : locale === "en-se" ? (
        <span>English </span>
      ) : locale === "es-mx" ? (
        <span>español </span>
      ) : locale === "en-mx" ? (
        <span>English </span>
      ) : locale === "pt-br" ? (
        <span>Português </span>
      ) : locale === "es-br" ? (
        <span>español </span>
      ) : locale === "fi-fi" ? (
        <span>Suomalainen </span>
      ) : locale === "sv-fi" ? (
        <span>svenska </span>
      ) : locale === "zh-cn" ? (
        <span>中文 </span>
      ) : locale === "en-id" ? (
        <span>English </span>
      ) : locale === "ms-id" ? (
        <span>melayu </span>
      ) : locale === "es-ar" ? (
        <span>español </span>
      ) : locale === "it-ar" ? (
        <span>italiano </span>
      ) : locale === "es-cl" ? (
        <span>español </span>
      ) : locale === "en-cl" ? (
        <span>English</span>
      ) : (
        ""
      )}
    </>
  );
};

export default Lang_dsp;
