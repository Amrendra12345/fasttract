import React from "react";

const Numflag = (props) => {
  return (
    <>
      {props.country_ext === "en-us" ? (
        <span className="phoneflag">
          <b className="gss_img flag-us"></b>
        </span>
      ) : props.country_ext === "en-sg" ? (
        <span className="phoneflag">
          <b className="gss_img flag-sg"></b>
        </span>
      ) : props.country_ext === "zh-tw" ? (
        <span className="phoneflag">
          <b className="gss_img flag-tw"></b>
        </span>
      ) : props.country_ext === "ja-jp" ? (
        <span className="phoneflag">
          <b className="gss_img flag-jp"></b>
        </span>
      ) : props.country_ext === "zh-hk" ? (
        <span className="phoneflag">
          <b className="gss_img flag-hk"></b>
        </span>
      ) : props.country_ext === "ko-kr" ? (
        <span className="phoneflag">
          <b className="gss_img flag-kr"></b>
        </span>
      ) : props.country_ext === "en-ph" ? (
        <span className="phoneflag">
          <b className="gss_img flag-ph"></b>
        </span>
      ) : props.country_ext === "en-th" ? (
        <span className="phoneflag">
          <b className="gss_img flag-th"></b>
        </span>
      ) : props.country_ext === "en-gb" ? (
        <span className="phoneflag">
          <b className="gss_img flag-gb"></b>
        </span>
      ) : props.country_ext === "en-in" ? (
        <span className="phoneflag">
          <b className="gss_img flag-in"></b>
        </span>
      ) : props.country_ext === "en-sl" ? (
        <span className="phoneflag">
          <b className="gss_img flag-sl"></b>
        </span>
      ) : props.country_ext === "en-za" ? (
        <span className="phoneflag">
          <b className="gss_img flag-za"></b>
        </span>
      ) : props.country_ext === "en-au" ? (
        <span className="phoneflag">
          <b className="gss_img flag-au"></b>
        </span>
      ) : props.country_ext === "en-ke" ? (
        <span className="phoneflag">
          <b className="gss_img flag-ke"></b>
        </span>
      ) : props.country_ext === "en-kw" ? (
        <span className="phoneflag">
          <b className="gss_img flag-kw"></b>
        </span>
      ) : props.country_ext === "ms-my" ? (
        <span className="phoneflag">
          <b className="gss_img flag-my"></b>
        </span>
      ) : props.country_ext === "en-nz" ? (
        <span className="phoneflag">
          <b className="gss_img flag-nz"></b>
        </span>
      ) : props.country_ext === "en-sa" ? (
        <span className="phoneflag">
          <b className="gss_img flag-sa"></b>
        </span>
      ) : props.country_ext === "en-tr" ? (
        <span className="phoneflag">
          <b className="gss_img flag-tr"></b>
        </span>
      ) : props.country_ext === "uk-ua" ? (
        <span className="phoneflag">
          <b className="gss_img flag-ua"></b>
        </span>
      ) : props.country_ext === "en-ae" ? (
        <span className="phoneflag">
          <b className="gss_img flag-ae"></b>
        </span>
      ) : props.country_ext === "en-ca" ? (
        <span className="phoneflag">
          <b className="gss_img flag-ca"></b>
        </span>
      ) : props.country_ext === "hu-hu" ? (
        <span className="phoneflag">
          <b className="gss_img flag-hu"></b>
        </span>
      ) : props.country_ext === "de-at" ? (
        <span className="phoneflag">
          <b className="gss_img flag-at"></b>
        </span>
      ) : props.country_ext === "en-rs" ? (
        <span className="phoneflag">
          <b className="gss_img flag-rs"></b>
        </span>
      ) : props.country_ext === "de-ch" ? (
        <span className="phoneflag">
          <b className="gss_img flag-ch"></b>
        </span>
      ) : props.country_ext === "de-de" ? (
        <span className="phoneflag">
          <b className="gss_img flag-de"></b>
        </span>
      ) : props.country_ext === "en-il" ? (
        <span className="phoneflag">
          <b className="gss_img flag-il"></b>
        </span>
      ) : props.country_ext === "bg-bg" ? (
        <span className="phoneflag">
          <b className="gss_img flag-bg"></b>
        </span>
      ) : props.country_ext === "fr-fr" ? (
        <span className="phoneflag">
          <b className="gss_img flag-fr"></b>
        </span>
      ) : props.country_ext === "it-it" ? (
        <span className="phoneflag">
          <b className="gss_img flag-it"></b>
        </span>
      ) : props.country_ext === "da-dk" ? (
        <span className="phoneflag">
          <b className="gss_img flag-dk"></b>
        </span>
      ) : props.country_ext === "sk-sk" ? (
        <span className="phoneflag">
          <b className="gss_img flag-sk"></b>
        </span>
      ) : props.country_ext === "no-no" ? (
        <span className="phoneflag">
          <b className="gss_img flag-no"></b>
        </span>
      ) : props.country_ext === "en-ie" ? (
        <span className="phoneflag">
          <b className="gss_img flag-ie"></b>
        </span>
      ) : props.country_ext === "es-es" ? (
        <span className="phoneflag">
          <b className="gss_img flag-es"></b>
        </span>
      ) : props.country_ext === "hr-hr" ? (
        <span className="phoneflag">
          <b className="gss_img flag-hr"></b>
        </span>
      ) : props.country_ext === "pl-pl" ? (
        <span className="phoneflag">
          <b className="gss_img flag-pl"></b>
        </span>
      ) : props.country_ext === "lt-lt" ? (
        <span className="phoneflag">
          <b className="gss_img flag-lt"></b>
        </span>
      ) : props.country_ext === "ro-ro" ? (
        <span className="phoneflag">
          <b className="gss_img flag-ro"></b>
        </span>
      ) : props.country_ext === "lv.lv" ? (
        <span className="phoneflag">
          <b className="gss_img flag-lv"></b>
        </span>
      ) : props.country_ext === "nl-nl" ? (
        <span className="phoneflag">
          <b className="gss_img flag-nl"></b>
        </span>
      ) : props.country_ext === "ru-ru" ? (
        <span className="phoneflag">
          <b className="gss_img flag-ru"></b>
        </span>
      ) : props.country_ext === "nl-be" ? (
        <span className="phoneflag">
          <b className="gss_img flag-be"></b>
        </span>
      ) : props.country_ext === "cs-cz" ? (
        <span className="phoneflag">
          <b className="gss_img flag-cz"></b>
        </span>
      ) : props.country_ext === "el-gr" ? (
        <span className="phoneflag">
          <b className="gss_img flag-gr"></b>
        </span>
      ) : props.country_ext === "pt-pt" ? (
        <span className="phoneflag">
          <b className="gss_img flag-pt"></b>
        </span>
      ) : props.country_ext === "sv-se" ? (
        <span className="phoneflag">
          <b className="gss_img flag-se"></b>
        </span>
      ) : props.country_ext === "es-mx" ? (
        <span className="phoneflag">
          <b className="gss_img flag-mx"></b>
        </span>
      ) : props.country_ext === "pt-br" ? (
        <span className="phoneflag">
          <b className="gss_img flag-br"></b>
        </span>
      ) : props.country_ext === "fi-fi" ? (
        <span className="phoneflag">
          <b className="gss_img flag-fi"></b>
        </span>
      ) : props.country_ext === "zh-cn" ? (
        <span className="phoneflag">
          <b className="gss_img flag-cn"></b>
        </span>
      ) : props.country_ext === "en-id" ? (
        <span className="phoneflag">
          <b className="gss_img flag-id"></b>
        </span>
      ) : props.country_ext === "es-ar" ? (
        <span className="phoneflag">
          <b className="gss_img flag-ar"></b>
        </span>
      ) : props.country_ext === "es-cl" ? (
        <span className="phoneflag">
          <b className="gss_img flag-cl"></b>
        </span>
      ) : (
        ""
      )}
    </>
  );
};

export default Numflag;
