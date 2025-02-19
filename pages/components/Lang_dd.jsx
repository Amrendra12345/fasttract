import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
const Lang_dd = (props) => {
  const { locale } = useRouter();
  const router = useRouter()
  const { pathname, asPath, query } = router
 // console.log(locale);
  return (
    <>
      {locale === "" ? (
        ""
      ) : locale === "en-sg" || locale === "zh-sg" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'en-sg' ? 'en-sg' : `${asPath}`} locale="en-sg">
            English
          </Link>
          <Link href={locale === 'zh-sg' ? 'zh-sg' : `${asPath}`} locale="zh-sg">
            中文
          </Link>
        </div>
      ) : locale === "zh-tw" || locale === "en-tw" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'zh-tw' ? 'zh-tw' : `${asPath}`} locale="zh-tw">
            中文
          </Link>
          <Link href={locale === "en-tw" ? "en-tw" : `${asPath}`} locale="en-tw">
            English
          </Link>
        </div>
      ) : locale === "ja-jp" || locale === "en-jp" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'ja-jp' ? 'ja-jp' : `${asPath}`} locale="ja-jp">
            倭国 
          </Link>
          <Link href={locale === 'en-jp' ? 'en-jp' : `${asPath}`} locale="en-jp">
            English
          </Link>
        </div>
      ) : locale === "zh-hk" || locale === "en-hk" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'zh-hk' ? 'zh-hk' : `${asPath}`} locale="zh-hk">
            中文
          </Link>
          <Link href={locale === 'en-hk' ? 'en-hk' : `${asPath}`} locale="en-hk">
            English
          </Link>
        </div>
      ) : locale === "ko-kr" || locale === "en-kr" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'ko-kr' ? 'ko-kr' : `${asPath}`} locale="ko-kr">
            한국어 
          </Link>
          <Link href={locale === 'en-kr' ? 'en-kr' : `${asPath}`} locale="en-kr">
            English
          </Link>
        </div>
      ) : locale === "en-ph" ? (
        ""
      ) : locale === "en-th" || locale === "th-th" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'en-th' ? 'en-th' : `${asPath}`} locale="en-th">
            English 
          </Link>
          <Link href={locale === 'th-th' ? 'th-th' : `${asPath}`} locale="th-th">
            แบบไทย
          </Link>
        </div>
      ) : locale === "en-gb" ? (
        ""
      ) : locale === "en-in" || locale === "hi-in" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'en-in' ? 'en-in' : `${asPath}`} locale="en-in">
            English
          </Link>
          <Link href={locale === 'hi-in' ? 'hi-in' : `${asPath}`} locale="hi-in">
            हिन्दी
          </Link>
        </div>
      ) : locale === "en-sl" ? (
        ""
      ) : locale === "en-za" ? (
        ""
      ) : locale === "en-au" ? (
        ""
      ) : locale === "en-ke" ? (
        ""
      ) : locale === "en-kw" || locale === "ar-kw" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'en-kw' ? 'en-kw' : `${asPath}`} locale="en-kw">
            English
          </Link>
          <Link href={locale === 'ar-kw' ? 'ar-kw' : `${asPath}`} locale="ar-kw">
            عربى
          </Link>
        </div>
      ) : locale === "ms-my" || locale === "en-my" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'ms-my' ? 'ms-my' : `${asPath}`} locale="ms-my">
            melayu 
          </Link>
          <Link href={locale === 'en-my' ? 'en-my' : `${asPath}`} locale="en-my">
            English
          </Link>
        </div>
      ) : locale === "en-nz" ? (
        ""
      ) : locale === "en-sa" || locale === "ar-sa" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'en-sa' ? 'en-sa' : `${asPath}`} locale="en-sa">
            English
          </Link>
          <Link href={locale === 'ar-sa' ? 'ar-sa' : `${asPath}`} locale="ar-sa">
            عربى
          </Link>
        </div>
      ) : locale === "en-tr" || locale === "tr-tr" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'en-tr' ? 'en-tr' : `${asPath}`} locale="en-tr">
            English
          </Link>
          <Link href={locale === 'tr-tr' ? 'tr-tr' : `${asPath}`} locale="tr-tr">
            Türk
          </Link>
        </div>
      ) : locale === "uk-ua" || locale === "en-ua" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'uk-ua' ? 'uk-ua' : `${asPath}`} locale="uk-ua">
            русский
          </Link>
          <Link href={locale === 'en-ua' ? 'en-ua' : `${asPath}`} locale="en-ua">
            English
          </Link>
        </div>
      ) : locale === "en-ae" || locale === "ar-ae" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'en-ae' ? 'en-ae' : `${asPath}`} locale="en-ae">
            English
          </Link>
          <Link href={locale === 'ar-ae' ? 'ar-ae' : `${asPath}`} locale="ar-ae">
            عربى
          </Link>
        </div>
      ) : locale === "en-ca" || locale === "fr-ca" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'en-ca' ? 'en-ca' : `${asPath}`} locale="en-ca">
            English
          </Link>
          <Link href={locale === 'fr-ca' ? 'fr-ca' : `${asPath}`} locale="fr-ca">
            française
          </Link>
        </div>
      ) : locale === "hu-hu" || locale === "de-hu" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'hu-hu' ? 'hu-hu' : `${asPath}`} locale="hu-hu">
            Magyar
          </Link>
          <Link href={locale === 'de-hu' ? 'de-hu' : `${asPath}`} locale="de-hu">
            deutsch
          </Link>
        </div>
      ) : locale === "de-at" || locale === "fr-at" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'de-at' ? 'de-at' : `${asPath}`} locale="de-at">
            deutsch
          </Link>
          <Link href={locale === 'fr-at' ? 'fr-at' : `${asPath}`} locale="fr-at">
            française
          </Link>
        </div>
      ) : locale === "en-rs" || locale === "sr-rs" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'en-rs' ? 'en-rs' : `${asPath}`} locale="en-rs">
            English
          </Link>
          <Link href={locale === 'sr-rs' ? 'sr-rs' : `${asPath}`} locale="sr-rs">
            Српски
          </Link>
        </div>
      ) : locale === "de-ch" || locale === "fr-ch" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'de-ch' ? 'de-ch' : `${asPath}`} locale="de-ch">
            deutsch
          </Link>
          <Link href={locale === 'fr-ch' ? 'fr-ch' : `${asPath}`} locale="fr-ch">
            française
          </Link>
        </div>
      ) : locale === "de-de" || locale === "en-de" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'de-de' ? 'de-de' : `${asPath}`} locale="de-de">
            deutsch
          </Link>
          <Link href={locale === 'en-de' ? 'en-de' : `${asPath}`} locale="en-de">
            English
          </Link>
        </div>
      ) : locale === "en-il" || locale === "he-il" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'en-il' ? 'en-il' : `${asPath}`} locale="en-il">
            English
          </Link>
          <Link href={locale === 'he-il' ? 'he-il' : `${asPath}`} locale="he-il">
            עִברִית
          </Link>
        </div>
      ) : locale === "bg-bg" || locale === "en-bg" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'bg-bg' ? 'bg-bg' : `${asPath}`} locale="bg-bg">
            български
          </Link>
          <Link href={locale === 'en-bg' ? 'en-bg' : `${asPath}`} locale="en-bg">
            English
          </Link>
        </div>
      ) : locale === "fr-fr" || locale === "en-fr" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'fr-fr' ? 'fr-fr' : `${asPath}`} locale="fr-fr">
            française
          </Link>
          <Link href={locale === 'en-fr' ? 'en-fr' : `${asPath}`} locale="en-fr">
            English
          </Link>
        </div>
      ) : locale === "it-it" || locale === "en-it" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'it-it' ? 'it-it' : `${asPath}`} locale="it-it">
            italiano
          </Link>
          <Link href={locale === 'en-it' ? 'en-it' : `${asPath}`} locale="en-it">
            English
          </Link>
        </div>
      ) : locale === "da-dk" || locale === "en-dk" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'da-dk' ? 'da-dk' : `${asPath}`} locale="da-dk">
            dansk
          </Link>
          <Link href={locale === 'en-dk' ? 'en-dk' : `${asPath}`} locale="en-dk">
            English
          </Link>
        </div>
      ) : locale === "sk-sk" || locale === "hu-sk" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'sk-sk' ? 'sk-sk' : `${asPath}`} locale="sk-sk">
            slovenský
          </Link>
          <Link href={locale === 'hu-sk' ? 'hu-sk' : `${asPath}`} locale="hu-sk">
            Magyar
          </Link>
        </div>
      ) : locale === "no-no" || locale === "en-no" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'no-no' ? 'no-no' : `${asPath}`} locale="no-no">
            norsk
          </Link>
          <Link href={locale === 'en-no' ? 'en-no' : `${asPath}`} locale="en-no">
            English
          </Link>
        </div>
      ) : locale === "en-ie" ? (
        ""
      ) : locale === "es-es" ? (
        ""
      ) : locale === "hr-hr" ? (
        ""
      ) : locale === "pl-pl" ? (
        ""
      ) : locale === "lt-lt" ? (
        ""
      ) : locale === "ro-ro"  ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'ro-ro' ? 'ro-ro' : `${asPath}`} locale="ro-ro">
            Română
          </Link>          
        </div>
      ) : locale === "lv-lv" ? (
        ""
      ) : locale === "nl-nl" || locale === "en-nl" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'nl-nl' ? 'nl-nl' : `${asPath}`} locale="nl-nl">
            nederlands
          </Link>
          <Link href={locale === 'en-nl' ? 'en-nl' : `${asPath}`} locale="en-nl">
            English
          </Link>
        </div>
      ) : locale === "ru-ru" ? (
        ""
      ) : locale === "nl-be" || locale === "fr-be" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'nl-be' ? 'nl-be' : `${asPath}`} locale="nl-be">
            deutsch
          </Link>
          <Link href={locale === 'fr-be' ? 'fr-be' : `${asPath}`} locale="fr-be">
            française
          </Link>
        </div>
      ) : locale === "cs-cz" || locale === "de-cz" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'cs-cz' ? 'cs-cz' : `${asPath}`} locale="cs-cz">
            čeština
          </Link>
          <Link href={locale === 'de-cz' ? 'de-cz' : `${asPath}`} locale="de-cz">
             deutsch
          </Link>
        </div>
      ) : locale === "el-gr" ? (
        ""
      ) : locale === "pt-pt" ? (
        ""
      ) : locale === "sv-se" || locale === "en-se" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'sv-se' ? 'sv-se' : `${asPath}`} locale="sv-se">
            svenska
          </Link>
          <Link href={locale === 'en-se' ? 'en-se' : `${asPath}`} locale="en-se">
            English
          </Link>
        </div>
      ) : locale === "es-mx" || locale === "en-mx" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'es-mx' ? 'es-mx' : `${asPath}`} locale="es-mx">
            español
          </Link>
          <Link href={locale === 'en-mx' ? 'en-mx' : `${asPath}`} locale="en-mx">
            English
          </Link>
        </div>
      ) : locale === "pt-br" || locale === "es-br" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'pt-br' ? 'pt-br' : `${asPath}`} locale="pt-br">
            Português
          </Link>
          <Link href={locale === 'es-br' ? 'es-br' : `${asPath}`} locale="es-br">
            español
          </Link>
        </div>
      ) : locale === "fi-fi" || locale === "sv-fi" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'fi-fi' ? 'fi-fi' : `${asPath}`} locale="fi-fi">
            Suomalainen
          </Link>
          <Link href={locale === 'sv-fi' ? 'sv-fi' : `${asPath}`} locale="sv-fi">
            svenska
          </Link>
        </div>
      ) : locale === "zh-cn" ? (
        ""
      ) : locale === "en-id" || locale === "ms-id" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'en-id' ? 'en-id' : `${asPath}`} locale="en-id">
            English
          </Link>
          <Link href={locale === 'ms-id' ? 'ms-id' : `${asPath}`} locale="ms-id">
            melayu
          </Link>
        </div>
      ) : locale === "es-ar" || locale === "it-ar" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'es-ar' ? 'es-ar' : `${asPath}`} locale="es-ar">
            español
          </Link>
          <Link href={locale === 'it-ar' ? 'it-ar' : `${asPath}`} locale="it-ar">
            italiano
          </Link>
        </div>
      ) : locale === "es-cl" || locale === "en-cl" ? (
        <div className="cn_dd la_ndd">
          <Link href={locale === 'es-cl' ? 'es-cl' : `${asPath}`} locale="es-cl">
            español
          </Link>
          <Link href={locale === 'en-cl' ? 'en-cl' : `${asPath}`} locale="en-cl">
            English
          </Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Lang_dd;
