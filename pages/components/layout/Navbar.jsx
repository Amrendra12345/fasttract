import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaBars,
  FaList,
  FaSignOutAlt,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Curr_list from "../Curr_List";
import Country_dd from "../Country_dd";
import Lang_dsp from "../Lang_dsp";
import Lang_dd from "../Lang_dd";
import { useRouter } from "next/router";
import Login from "@/pages/login/login";
import { useModal } from "@/context/loginStatus";

const Navbar = (props) => {
  var loginDetails = {};
  const [userName, setUserName] = useState(null);
  const [uName, setuName] = useState(null);
  const [stickyClass, setStickyClass] = useState("relative");
  const { data: session } = useSession();
  const { locale, pathname } = useRouter();
  const router = useRouter();
  const [isActive, setIsActive] = useState("false");
  const { isOpen, closeModal, openModal } = useModal();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleMenu = () => {
    setIsActive((current) => !current);
  };

  const handlerLogin = () => {
    if (isOpen === true) {
      closeModal(false);
      setTimeout(() => {
        openModal();
      }, 100);
    } else {
      openModal();
    }
  };

  const handlerLogOut = () => {
    var loginDetail = {
      provider_id: "",
      provider: "",
      name: "",
      email: "",
      mobile_number: "",
    };
    setUserName("");
    handleCallback(false);
    if (session != undefined && session != null) {
      setTimeout(() => {
        signOut();
        setUserName(null);
        setuName(null);
      }, 1);
    }
    localStorage.setItem("loginDetails", JSON.stringify(loginDetail));
  };

  useEffect(() => {
    if (localStorage.getItem("loginDetails") !== null) {
      var loginDetails = JSON.parse(localStorage.getItem("loginDetails"));
      var loginDetails = {
        provider_id: "",
        provider: "",
        name: "",
        email: "",
        mobile_number: "",
      };
      localStorage.setItem("loginDetails", JSON.stringify(loginDetails));
    }

    axios
      .get("https://cms.fasttrackvisa.com/api/" + locale + "/staticcontent")
      .then((res) => {
        // console.log(res)
        if (res.status === 200) {
          localStorage.setItem("staticContent", JSON.stringify(res.data));
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleCallback = (loginStatue) => {
    console.log(loginStatue);
    if (loginStatue) {
      if (props?.handleCallback) {
        props?.handleCallback(true);
      }
      var loginDetails = {
        provider_id: "",
        provider: "",
        name: "",
        email: "",
        mobile_number: "",
      };
      if (JSON.parse(localStorage.getItem("loginDetails")) !== null) {
        loginDetails = JSON.parse(localStorage.getItem("loginDetails"));
        if (
          loginDetails.email !== "" &&
          loginDetails.email !== null &&
          loginDetails.email !== undefined
        ) {
          setUserName(loginDetails.email);
        } else if (
          loginDetails.mobile_number !== "" &&
          loginDetails.mobile_number !== null &&
          loginDetails.mobile_number !== undefined
        ) {
          setUserName(loginDetails.mobile_number);
        }
      }
    }
  };
  useEffect(() => {
    setTimeout(() => {
      if (session !== undefined && session !== null && userName === null) {
        let loginDetails = {
          provider_id: "",
          provider: "",
          name: "",
          email: "",
          mobile_number: "",
        };
        setUserName(session?.user?.name);
        setuName(session?.user?.name);
        loginDetails.email = session?.user?.email;
        loginDetails.name = session?.user?.name;
        axios
          .post(
            "https://cms.fasttrackvisa.com/api/" + locale + "/user-login",
            loginDetails
          )
          .then((res) => {
            //alert("nav")
            if (res.status === 200) {
              localStorage.setItem(
                "loginDetails",
                JSON.stringify(res.data.data)
              );
            }
          });
      } else {
        let loginDetails = {
          provider_id: "",
          provider: "",
          name: "",
          email: "",
          mobile_number: "",
        };
        localStorage.setItem("loginDetails", JSON.stringify(loginDetails));
      }
    }, 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);
  return (
    <>
      <header className={stickyClass}>
        <div className="container">
          <nav className="d-flex justify-content-between align-items-center">
            <div className="nav-brand">
              <span className="d-md-none" onClick={toggleMenu}>
                <FaBars />
              </span>
              <Link href={"/"}>
                <div className="logo_img">
                  <Image
                    sizes="(min-width: 750px) 20vw, 30vw"
                    priority="false"
                    alt="Fast Track Visa"
                    src={"/img/logo.webp"}
                    fill
                  />
                </div>
              </Link>
            </div>
            <div className="menu">
              <ul className={`menu_ul ${isActive ? "" : "active"}`}>
                <li className="cdd">
                  <Curr_list country_ext={locale}></Curr_list>
                  <Country_dd country_ext={locale}></Country_dd>
                </li>
                <li className="cdd">
                  <Lang_dsp country_ext={locale}></Lang_dsp>
                  <Lang_dd country_ext={locale}></Lang_dd>
                </li>
                {userName !== null &&
                userName !== undefined &&
                userName !== "" ? (
                  <li className="cdd">
                    <span>
                      <i className="">
                        <FaUserCircle />
                      </i>
                      {uName === null ||
                      userName === undefined ||
                      userName === ""
                        ? " Hi User"
                        : " " + uName || userName}
                    </span>
                    {locale === "" ? (
                      <div className="cn_dd">
                        <Link href={"/my-profile"}>
                          <i className="">
                            <FaUser />
                          </i>{" "}
                          My Profile{" "}
                        </Link>
                        <Link href={"/my-profile/my-transactions"}>
                          <i className="">
                            {" "}
                            <FaList />
                          </i>{" "}
                          My Transaction
                        </Link>
                        <button onClick={logOut}>
                          <i className="">
                            <FaSignOutAlt />
                          </i>{" "}
                          Log Out
                        </button>
                      </div>
                    ) : (
                      <div className="cn_dd">
                        <Link href={"/" + locale + "/my-profile"}>
                          <i className="">
                            <FaUser />
                          </i>{" "}
                          My Profile{" "}
                        </Link>
                        <Link
                          href={"/" + locale + "/my-profile/my-transactions"}
                        >
                          <i className="">
                            <FaList />
                          </i>{" "}
                          My Transaction{" "}
                        </Link>
                        <button onClick={handlerLogOut}>
                          <i className="">
                            <FaSignOutAlt />
                          </i>{" "}
                          Log Out
                        </button>
                      </div>
                    )}
                  </li>
                ) : (
                  <li>
                    <button onClick={handlerLogin}>Sign In</button>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {isOpen === true ? (
        <Login ce_name={props.ce_name} handleCallback={handleCallback} />
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
