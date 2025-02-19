import Link from 'next/link'
import Head from 'next/head'
import React, { useEffect, useState, createRef } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router'
import Login from '../../login/login';
import Curr_list from '../Curr_List';
import Country_dd from '../Country_dd';
import Lang_dsp from '../../components/Lang_dsp';
import Lang_dd from '../Lang_dd';
import { useSession, signOut } from "next-auth/react";
import axios from 'axios';
import { FaBars, FaList, FaSignOutAlt, FaUser, FaUserCircle } from "react-icons/fa";
import { Inter } from 'next/font/google' 
import { useShowModel } from '@/context/loginStatus';

const inter = Inter({ subsets: ['latin'] })
const nextAuthUrl = 'https://fasttrackvisa.com';



const Navbar = (props) => {
  const {locale, pathname} = useRouter();
  const router = useRouter()


 //console.log(router)
  //Selecteddestination(locale)

  const { data: session } = useSession();
  const [isActive, setIsActive] = useState('false');
  const [userName, setUserName] = useState(null);
  const [uName, setuName] = useState(null);
  const [stickyClass, setStickyClass] = useState('relative');
  const [show, setShow] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseSignUp = () => setShowSignUp(false);
 
  const handleShowSignUp = () => setShowSignUp(true);
  const nextAuthUrl = 'https://fasttrackvisa.com';
  const showModel = useShowModel();
   
  const handleShow = () => {
    showModel.setLoginModel(true)
  }
  
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };

  }, []);

  const stickNavbar = () => {    
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyClass('hsticky') : setStickyClass('relative');
    }
  };

  useEffect(() => {     
    if (localStorage.getItem('loginDetails') !== null) {
      var loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
      if (loginDetails.email !== '' && loginDetails.email !== null && loginDetails.email !== undefined) {
      } else if (loginDetails.mobile_number !== '' && loginDetails.mobile_number !== null && loginDetails.mobile_number !== undefined) {
      } else {
        isCheckoutPage(true);
        // eslint-disable-line react-hooks/exhaustive-deps
      }
    } else {
      var loginDetails = { provider_id: '', provider: '', name: '', email: '', mobile_number: '' };
      localStorage.setItem('loginDetails', JSON.stringify(loginDetails));
      
    }

    axios.get('https://cms.fasttrackvisa.com/api' + (locale === '' ? '' : '/' + locale) + '/staticcontent').then(res => {
     
      if (res.status === 200) {
        localStorage.setItem('staticContent', JSON.stringify(res.data));
        
      }
    })
  
       // eslint-disable-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    var loginDetails = { provider_id: '', provider: '', name: '', email: '', mobile_number: '' };
    if (localStorage.getItem('loginDetails') !== null) {
      loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
      if (loginDetails.email !== '' && loginDetails.email !== null && loginDetails.email !== undefined) {
        setUserName(loginDetails.email)
      } else if (loginDetails.mobile_number !== '' && loginDetails.mobile_number !== null && loginDetails.mobile_number !== undefined) {
        setUserName(loginDetails.mobile_number)
      }
      if (loginDetails.name_of_agency !== '' && loginDetails.name_of_agency !== null && loginDetails.name_of_agency !== undefined) {
        setuName(loginDetails.name_of_agency)
      }
    } else {
      localStorage.setItem('loginDetails', JSON.stringify(loginDetails));
    }
  // eslint-disable-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    setTimeout(() => {
      // console.log('sssion', session?.user.email);
      if (session !== undefined && session !== null && userName === null) {
        var loginDetails = { provider_id: '', provider: '', name: '', email: '', mobile_number: '' };
        setUserName(session?.user?.name);
        setuName(session?.user?.name);
        loginDetails.email = session?.user?.email;
        loginDetails.name = session?.user?.name;
        //  console.log('loginDetails,', loginDetails);
        axios.post('https://cms.fasttrackvisa.com/api' + (locale === '' ? '' : '/' + locale) + '/user-login', loginDetails).then(res => {
          //alert("nav")
          if (res.status === 200) {
            localStorage.setItem('loginDetails', JSON.stringify(res.data.data));
            sessionStorage.setItem("userInfo",JSON.stringify(res.data.data) )
            const result = res.data.data
            
             const url = pathname;
             var checkOut = url == '/checkout' || url == '/my-profile' || url == '/success';
            if (checkOut) {
              setShow(false);
            }
          }
        })
        // console.log("load nav...", loginDetails)
      }
    }, 1)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])

  const isCheckoutPage = (status) => {
    var loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
    if (loginDetails.email !== '' && loginDetails.email !== null && loginDetails.email !== undefined){
      const url = pathname.split('/');       
      var checkOut = url.find(u => u == 'checkout' || u == 'my-profile' || u == 'success');       
      // console.log(userName,status, checkOut, (status && checkOut), (!status && !checkOut))
      if (status && checkOut && session?.user.email != '') {
        setShow(true);
        login();
      }
      else if (!status && checkOut && session == null) {
        router.push('/','/',  { locale})

      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }

  const login = () => {
    if (showModel.loginModel === true) {
        showModel.setLoginModel(false)
      
      setTimeout(() => {
        showModel.setLoginModel(true)
      }, 100)
    } else {
        showModel.setLoginModel(true)
    }
  }

  const logOut = () => {
    var loginDetail = { provider_id: '', provider: '', name: '', email: '', mobile_number: '' };
    localStorage.setItem('loginDetails', JSON.stringify(loginDetail));
    sessionStorage.setItem("userInfo",JSON.stringify('') )
    //console.log('setTimeout')
    setUserName('');
    if (locale != '') {
      if (props?.handleCallback) {
        props?.handleCallback(false);
        router.push('/','/',  { locale })
      } 
    }
    else {
      if (props?.handleCallback) {
        props?.handleCallback(false);
        router.push('/','/',  { locale })
      }
    }
    if (session != undefined && session != null) {
      setTimeout(() => {
        signOut();
        setUserName(null);
        setuName(null);
      }, 1);
      if (locale != '') {
        router.push('/','/',  { locale })
      } 
    }
  }


  const handleCallback = (loginStatue) => {
    //Selecteddestination(loginStatue)
    if (loginStatue) {
      if (props?.handleCallback) {
        props?.handleCallback(true)
      }
      var loginDetails = { provider_id: '', provider: '', name: '', email: '', mobile_number: '' };
      if (JSON.parse(localStorage.getItem('loginDetails')) !== null) {
        loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
        if (loginDetails.email !== '' && loginDetails.email !== null && loginDetails.email !== undefined) {
          setUserName(loginDetails.email)
        } else if (loginDetails.mobile_number !== '' && loginDetails.mobile_number !== null && loginDetails.mobile_number !== undefined) {
          setUserName(loginDetails.mobile_number)
        }
      }
    } else {
      isCheckoutPage(true);
    }
  }
 const toggleMenu = ()=>{
  setIsActive(current => !current);
 }

  return (
    <>
      <header className={`${inter.className } ${stickyClass}`}>
        <div className='container'>
          <nav className='d-flex justify-content-between align-items-center'>
            <div className='nav-brand'>
              <span className='d-md-none' onClick={toggleMenu}><FaBars/></span>
              <Link href={'/'}>
                <div className='logo_img'>
                 <Image sizes="(min-width: 750px) 20vw, 30vw" priority="false" alt="Fast Track Visa" src={'/img/logo.webp'} fill  />
                 </div>
              </Link>
              </div>
              <div className='menu'>
                  <ul className={`menu_ul ${isActive?'':'active'}`}>
                      <li className='cdd'>
                        <Curr_list country_ext={locale}></Curr_list>
                        <Country_dd country_ext={locale}></Country_dd>
                      </li>
                      <li className='cdd'>
                        <Lang_dsp country_ext={locale}></Lang_dsp>
                        <Lang_dd country_ext={locale}></Lang_dd>
                      </li>
                      {userName !== null && userName !== undefined && userName !== '' ? (
                          <li className='cdd'>
                          <span><i className=''><FaUserCircle /></i>
                            {uName === null || userName === undefined || userName === '' ?
                              ' Hi User'
                              : ' ' + uName || userName
                            }</span>
                          {locale === '' ?
                            (<div className='cn_dd'>
                              <Link href={'/my-profile'}><i className=''><FaUser /></i> My Profile </Link>
                              <Link href={'/my-profile/my-transactions'}><i className=''> <FaList /></i> My Transaction</Link>
                              <button onClick={logOut}><i className=''><FaSignOutAlt /></i> Log Out</button>
                            </div>)
                            :
                            (<div className='cn_dd'>
                              <Link href={'/'+ locale + '/my-profile'}><i className=''><FaUser /></i> My Profile </Link>
                              <Link href={'/' + locale + '/my-profile/my-transactions'}><i className=''><FaList /></i> My Transaction </Link>
                              <button onClick={logOut}><i className=''><FaSignOutAlt /></i> Log Out</button>
                            </div>)
                          }
                        </li>
                        ):(
                        <li>
                           <button onClick={login}>Sign In</button>
                        </li>
                       )
                    }  
                  </ul>
                  <ul className={`menu_sign`}>
                  {userName !== null && userName !== undefined && userName !== '' ? (
                          <li className='cdd'>
                          <span><i className='mr-2'><FaUserCircle /></i>
                            {uName === null || userName === undefined || userName === '' ?
                              ' Hi User'
                              : ' ' + uName || userName
                            }</span>
                          {locale === '' ?
                            (<div className='cn_dd'>
                              <Link href={'/my-profile'}><i className='mr-2'><FaUser /></i> My Profile </Link>
                              <Link href={'/my-profile/my-transactions'}><i className='mr-2'> <FaList /></i> My Transaction</Link>
                              <button onClick={logOut}><i className='mr-2'><FaSignOutAlt /></i> Log Out</button>
                            </div>)
                            :
                            (<div className='cn_dd'>
                              <Link href={'/' + locale + '/my-profile'}><i className='mr-2'><FaUser /></i> My Profile </Link>
                              <Link href={'/' + locale + '/my-profile/my-transactions'}><i className='mr-2'><FaList /></i> My Transaction </Link>
                              <button onClick={logOut}><i className='mr-2'><FaSignOutAlt /></i> Log Out</button>
                            </div>)
                          }
                        </li>
                        ):(
                        <li>
                           <button onClick={login}>Sign In</button>
                        </li>
                       )
                    }  
                  </ul>
              </div>
          </nav>
       </div>
      </header>
     {showModel.loginModel === true ? <Login ce_name={locale} handleCallback={handleCallback} /> : ''}
    </>
  )
}
export default Navbar
