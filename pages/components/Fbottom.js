import Link from 'next/link'

const Fbottom = (props) => {
  return (
    <>

      <div className="container d-flex ">
        <p>Why wait ? Start your Application for a  {props.countryname} Tourist eVisa Now</p>

        <Link href="#visalist">
          <a className='btn btn-white'>Apply Now</a>
        </Link>
      </div>
      <style jsx global>

        {`  
          .ffbootom {opacity:0; height:0}
          .fsticky{position:fixed;bottom:0;height:auto;opacity:1; left:0;width:100%;z-index:991; -webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-name:fadeInUp;animation-name:fadeInUp;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-box-shadow:0 -3px 8px rgba(0,0,0,0.5);box-shadow:0 -3px 8px rgba(0,0,0,0.5)}
          @-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}
          100%{opacity:1;-webkit-transform:none;transform:none}
          }@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);-ms-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}
          100%{opacity:1;-webkit-transform:none;-ms-transform:none;transform:none}
          }
    `}</style>

    </>

  );

}
export default Fbottom;
