
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Accordion, Alert, Card, Col, Container, Row } from "react-bootstrap";
import Mob_nflag from "../../components/Mob_nflag";
import ReactHtmlParser from "react-html-parser";
import { useRouter } from "next/router";
import moment from "moment";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "@/pages/payment";
import { useShowModel } from "@/context/loginStatus";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Checkoutpagein = (props) => {
    const {locale, pathname} = useRouter(); 
    const [travellerCount, setTravellerCount] = useState(1)
    const [showAlert, setShowAlert] = useState(false)
    const [traveler_info, setTraveler_info] = useState([])
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [isCouponValid, setIsCouponValid] = useState(false)
    const [couponCode, setCouponCode] = useState('')
    const [inValid, setInValid] = useState(false)
    const [discountAmount, setDiscountAmount] = useState(0)
    const [isContinueToPayment, setIsContinueToPayment] = useState(false)
    const [paymentData, setPaymentData]= useState({})
    const [clientSecret, setClientSecret] = useState("")
    const showModel = useShowModel();
    const { checkoutpage } = props;
    const embassyFees = checkoutpage[0].embassey_fee * travellerCount;
    const processingFees = (checkoutpage[0].price - checkoutpage[0].embassey_fee) * travellerCount;
    const totalFees = embassyFees + processingFees;
 

    let user
     if(typeof window !== 'undefined'){
        user = JSON.parse(localStorage.getItem("loginDetails"));       
     }
     useEffect(()=>{   
        const url = pathname.split('/');        
         if(url[1] === 'checkout'){           
            if(user.email === ''){
                showModel.setLoginModel(true)
            }
         }
         // eslint-disable-next-line react-hooks/exhaustive-deps 
     },[])
   
    const addFormFields = () => {
        let isAddData = false;
        if (traveler_info.length > 0) {
            for (let i = 0; traveler_info.length > i; i++) {
                if (
                    isEmpty(traveler_info[i].First_Name) &&
                    isEmpty(traveler_info[i].Last_Name) &&
                    isEmpty(traveler_info[i].Phone_Number) &&
                    isEmpty(traveler_info[i].Email) &&
                    isEmpty(traveler_info[i].City) &&
                    isEmpty(traveler_info[i].Address)
                ) {
                    if (traveler_info.length - 1 === i) {
                        isAddData = true;
                    }
                }
            }
        } else {
            setTraveler_info([...traveler_info, {
                First_Name: user?.name_of_agency?.split(" ")[0],
                Last_Name: user?.name_of_agency?.split(" ")[1],
                AirportOf_Arrival: "",
                Phone_Number: user?.mobile_number,
                Email: user?.email,
                City: "",
                Address: props.checkoutpage[0].country_site,
            }
            ])
        }
        if (isAddData) {
            setTraveler_info([...traveler_info, {
                First_Name: "",
                Last_Name: "",
                AirportOf_Arrival: "",
                Phone_Number: "",
                Email: "",
                City: "",
                Address: props.checkoutpage[0].country_site,
            }])
            setTravellerCount(travellerCount + 1)
        }
    }
    const isEmpty = (string) => {
        if (string !== null && string !== undefined && string !== "") {
            return true;
        } else {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false)
            }, 2000);
            return false;
        }
    };
    const handleChange = (e, i) => {
        const input_data = [...traveler_info]
        input_data[i][e.target.name] = e.target.value
        setTraveler_info(input_data)
    }
    const removeTravellar = (i) => {
        const input_data = [...traveler_info]
        input_data.splice(i, 1)
        setTraveler_info(input_data)
        setTravellerCount(travellerCount - 1)
    }
    useEffect(() => {
        addFormFields()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const Coupon_code = (e) => {
        setCouponCode(e.target.value);
    };

    const onApply = async () => {
        if (couponCode === '') {
            setInValid(true)
            setTimeout(() => {
                setInValid(false)
            }, 8000);
            return false
        }
        const formdata = new FormData();
        const { country_ext, page_url2 } = props;
        formdata.append("countryCode", props.checkoutpage[0].currency_icon);
        formdata.append("couponCode", couponCode);
        const currentURL = pathname
        const requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
        };
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cupon`, requestOptions);
            if (!res.ok) {
                throw new Error('server error')
            }
            const result = await res.json()
            if (result.status === "success") {
                const discountAmount = result.data;
                setShowSuccessMessage(true)
                setDiscountAmount(discountAmount)
                setIsCouponValid(true)
                setInValid(false)
                fetchCheckoutData(result.status === 'success')
            } else {
                console.log('err')
                setShowSuccessMessage(false)
                setDiscountAmount(0)
                setInValid(true)
                setIsCouponValid(false)
            }
        } catch (error) {
            console.log(error)
        }
    }
    async function fetchCheckoutData(isSuccess) {
        const { country_ext, page_url2 } =  props;        
        const apiUrl = isSuccess
          ? `https://cms.fasttrackvisa.com/api/${country_ext}/checkout/${page_url2}/FTVNY`
          : `https://cms.fasttrackvisa.com/api/${country_ext}/checkout/${page_url2}`;
    
        const res = await fetch(apiUrl);        
        const checkoutpage = await res.json();
    
        if (res.status === 200) {
          // Update your component state or perform other actions based on the API response
          
        }
      }

    const calculateTotal = () => {
        return (props.checkoutpage[0].price * travellerCount)
    }
    const submitTravellerInfo = async() => {
        sessionStorage.setItem("visaPrice", props.checkoutpage[0].price);
        sessionStorage.setItem("finalAmount",props.checkoutpage[0].price * 100 * 1 );
        sessionStorage.setItem("currency", props.checkoutpage[0].currency_code);
        sessionStorage.setItem("ProductId", props.page_url2);
        //sessionStorage.setItem("user_id ", props.page_url2);
        const productId =  props.page_url2
        const currency = props.checkoutpage[0].currency_code      
        const visaPrice = props.checkoutpage[0].price
        const user_id = user.id;
        const origin = props.checkoutpage[0].country_site;
        const destination = props.checkoutpage[0].country;
        const citizen_of = props.checkoutpage[0].country_site;
        const totalFees = embassyFees + processingFees;
        const userEmail = user.email
        const discountedTotalFees = totalFees * (1 - discountAmount / 100);
        let  total_amount;
        const coupon_code = couponCode;
        let discount_price;
        if(isCouponValid){            
             discount_price = 
            Math.round((checkoutpage[0].coupon_code_discount / 100) * (checkoutpage[0].price -  checkoutpage[0].embassey_fee) *  travellerCount )
            total_amount = Math.round(checkoutpage[0].embassey_fee * travellerCount +  (checkoutpage[0].price - checkoutpage[0].embassey_fee) *
                    travellerCount - discountAmount
              );              
        }else{
            total_amount = props.checkoutpage[0].price;
        }
        const total_amount_vp = props.checkoutpage[0].price;
        const no_of_pax = traveler_info.length;
        const data = new FormData();
        data.append("id", productId);       
        data.append("no_of_pax", no_of_pax);
        data.append("total_amount", total_amount * no_of_pax);
        data.append("coupon_code", coupon_code);
        data.append("discount_price", discount_price);
        data.append("destination", destination);
        data.append("user_id", user.id);
        for (let i = 0; traveler_info.length > i; i++) {
            data.append("fname[]", traveler_info[i].First_Name);
            data.append("lname[]", traveler_info[i].Last_Name);
            data.append("origin[]", origin);
            data.append("citizen_of", citizen_of);
            data.append("email_id[]", traveler_info[i].Email);
            data.append("phone[]", traveler_info[i].Phone_Number);
            data.append(
              "d_o_a[]",
              moment(traveler_info[i].Arrival).format("DD/MM/yyyy")
            );
            data.append(
              "d_o_t[]",
              moment(traveler_info[i].Departure).format("DD/MM/yyyy")
            );
            data.append("city[]", traveler_info[i].City);
            data.append("address[]", traveler_info[i].Address);
          }
        for (const [key, value] of data) {
            console.log(`${key}: ${value}\n`)
          }
        let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/${props.country_ext}/success`;
     const res = await axios.post(url, data,  {
            headers: {
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
            },
          },
        )
        const result = res.data
        sessionStorage.setItem("order_id", result.order_id);
        sessionStorage.setItem("ProductId", props.page_url2);
        sessionStorage.setItem("cId", props.country_ext);
        sessionStorage.setItem("user_id", user.id);
        const propPayentData = {
            finalAmount: total_amount * no_of_pax,
            visaPrice: isCouponValid ? total_amount  : total_amount_vp * no_of_pax,
            currency:  props.checkoutpage[0].currency_code,
            ProductId: props.page_url2,
            order_id:  result.order_id,
            email:  userEmail != null ? user.email :traveler_info[0].Email,
        };
       // {console.log("amount",propPayentData.email)}
        const finalAmount = propPayentData.finalAmount > 10000 ? propPayentData.finalAmount : `${propPayentData.finalAmount}00`
        fetch("/api/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
              items: [{ finalAmount: finalAmount, 'currency': propPayentData?.currency}] }),
          })
            .then((res) => res.json())
            .then((data) => { setClientSecret(data.clientSecret) });
            setIsContinueToPayment(true)
            setShowModal(false)
            setPaymentData(propPayentData)

    }
     const handleCallback = (loginStatue) => {
        //console.log(loginStatue);
        setIsContinueToPayment(false)
      };
    // const [isContinueToPayment, setIsContinueToPayment] = useState(false)
    // const [paymentData, setPaymentData]= useState({})
    // const [clientSecret, setClientSecret] = useState("")
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <div className="checkout_banner">
                <Container>
                    <h1> {props.checkoutpage[0]?.title} </h1>
                </Container>
            </div>
            <Container>
                <ol className="breadcrumb pl-0 bg-white">
                    <li className="breadcrumb-item">
                        <Link href={"/" + props.country_ext}>
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item">
                        Checkout
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {" "}
                        {props.checkoutpage[0].title}{" "}
                    </li>
                </ol>
                <div className="desi-work-container pt-4">
                    <Row>
                        <Col className="TravelerOneInformations" sm={12} md={8} lg={8}>
                            <form>
                                <div>
                                    {traveler_info.map((element, index) => (

                                        <div key={index}>
                                            <h3 className="mb-0 mt-3 d-flex justify-content-between">
                                                Traveler Informations
                                                <span>
                                                    {travellerCount > 1 && index > 0 ? (
                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-danger"
                                                            onClick={() => removeTravellar(index)}
                                                        >
                                                            {` ${travellerCount > 1},  ${index}  Remove`}
                                                        </button>
                                                    ) : (
                                                        ""
                                                    )}
                                                </span>
                                            </h3>
                                            <Row className="gutters5">
                                                <Col sm={6}>
                                                    <div className="ftv-field">
                                                        <label htmlFor="input1a">First Name*</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="First_Name"
                                                            placeholder="Here"
                                                            value={element.First_Name || ""}
                                                            onChange={(e) => handleChange(e, index)}
                                                        />
                                                    </div>
                                                </Col>
                                                <Col sm={6}>
                                                    <div className="ftv-field">
                                                        <label htmlFor="input2a">Last Name*</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="Last_Name"
                                                            placeholder="Here"
                                                            value={element.Last_Name || ''}
                                                            onChange={(e) => handleChange(e, index)}
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <h3 className="mt-5 mb-0">Contact</h3>
                                            <Row className="gutters5">
                                                <Col sm={6} className="position-relative">
                                                    <div className="ftv-field">
                                                        <label htmlFor="phone">Phone Number*</label>
                                                        <Mob_nflag
                                                            country_ext={props.country_ext}
                                                        ></Mob_nflag>
                                                        <input
                                                            id="phone"
                                                            type="tel"
                                                            maxLength="10"
                                                            className="form-control phoneinput"
                                                            name="Phone_Number"
                                                            placeholder="Here"
                                                            value={element.Phone_Number || ''}
                                                            onChange={(e) => handleChange(e, index)}
                                                        />
                                                    </div>
                                                </Col>
                                                <Col sm={6}>
                                                    <div className="ftv-field">
                                                        <label htmlFor="input2a">E-mail*</label>
                                                        <input
                                                            id="input2a"
                                                            type="email"
                                                            className="form-control"
                                                            name="Email"
                                                            placeholder="Here"
                                                            value={element.Email || ''}
                                                            onChange={(e) => handleChange(e, index)}
                                                        />
                                                    </div>
                                                </Col>
                                                <Col sm={6}>
                                                    <div className="ftv-field">
                                                        <label htmlFor="input3">City*</label>
                                                        <input
                                                            id="input3"
                                                            type="text"
                                                            className="form-control"
                                                            name="City"
                                                            placeholder="Here"
                                                            value={element.City || ''}
                                                            onChange={(e) => handleChange(e, index)}
                                                        />
                                                    </div>
                                                </Col>
                                                <Col sm={6}>
                                                    <div className="ftv-field">
                                                        <label htmlFor="input3">Nationality*</label>
                                                        <input
                                                            id="input3"
                                                            type="text"
                                                            className="form-control"
                                                            name="Address"
                                                            placeholder="Here"
                                                            value={element.Address || ''}
                                                            onChange={(e) => handleChange(e, index)}
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    ))}
                                </div>

                                {showAlert ? (
                                    <>
                                        {" "}
                                        <br />{" "}
                                        <Alert key="warning" variant="danger">
                                            {" "}
                                            Some field is empty/null.
                                        </Alert>{" "}
                                    </>
                                ) : (
                                    ""
                                )}

                                {travellerCount <= 5 ? (
                                    <button
                                        className="btn3 d-block w-100 mt-4"
                                        type="button"
                                        onClick={addFormFields}
                                    >
                                        + Add Traveller
                                    </button>
                                ) : (
                                    <button className="btn3 d-block w-100 mt-4" type="button">
                                        + You can Add Max 5 Traveller
                                    </button>
                                )}

                                <button
                                    className="btn4 d-block w-100 mt-4"
                                    type="button"
                                    onClick={submitTravellerInfo}
                                >
                                    Continue to Payment
                                </button>
                            </form>
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                            <div className="card">
                                <div className="card-header bg-white">
                                    <h3 className="d-flex justify-content-between">
                                        Order Summary{" "}
                                        <span className="small">
                                            {travellerCount >= 1
                                                ? "" + travellerCount
                                                : " "}{" "}
                                            pax
                                        </span>
                                    </h3>
                                </div>
                                <figure>
                                    {" "}
                                    <Image
                                        alt={props.checkoutpage[0].title}
                                        sizes="(max-width: 500px) 30vw"
                                        src={'/country/countryDefaulr.webp'}

                                        height={254}
                                        width={381}
                                    />
                                </figure>
                                <ul className="plan-Summary">
                                    <li className="planname">
                                        {props.checkoutpage[0].title}
                                    </li>
                                    <li>
                                        <div className="card card-body p-2 mb-2">
                                            {props.checkoutpage[0].duration} Single Entry Visa
                                        </div>
                                    </li>
                                    <li className="d-flex">
                                        <span>Embassy Fees</span>{" "}
                                        <span className="font-weight-bold">
                                            {" "}
                                            {props.checkoutpage[0].currency_icon}{" "}
                                            {props.checkoutpage[0].embassey_fee *
                                                travellerCount}{" "}
                                        </span>
                                    </li>

                                    <li className="d-flex">
                                        <span>Processing Fees</span>{" "}
                                        <span className="font-weight-bold">
                                            {" "}
                                            {props.checkoutpage[0].currency_icon}{" "}
                                            {(props.checkoutpage[0].price -
                                                props.checkoutpage[0].embassey_fee) *
                                                travellerCount}{" "}
                                        </span>
                                    </li>
                                    {showSuccessMessage ? (
                                        <li className='w-100 d-flex justify-content-between'>
                                            <span>Discount </span>
                                            <span className="font-weight-bold">
                                                - {props.checkoutpage[0].currency_icon}{" "}
                                                {discountAmount}
                                            </span>
                                        </li>) : ''
                                    }
                                    {isCouponValid ? (
                                        <li className="d-flex">
                                            <span>Total Fees</span>
                                            <strong>
                                                {props.checkoutpage[0].currency_icon}{" "}
                                                {Math.round(totalFees - discountAmount)}
                                            </strong>
                                        </li>
                                    ) : (
                                        <li className="d-flex">
                                            <span>Total Fees</span>
                                            <strong>
                                                {props.checkoutpage[0].currency_icon} {totalFees}{" "}
                                            </strong>
                                        </li>
                                    )}
                                    <li>
                                        <div className="ftv-field promocode">
                                            <label htmlFor="coupon">Promo Code</label>
                                            <input
                                                type="text"
                                                className="form-control file"
                                                placeholder="Enter Here"
                                                value={couponCode || ''}
                                                onChange={Coupon_code}
                                                name="coupon"
                                                id="coupon"
                                            />
                                            <button className="btn" onClick={onApply}>
                                                Apply
                                            </button>
                                        </div>
                                        {isCouponValid ? (
                                            <>
                                                <p className="text-success pt-2">
                                                    Coupon Applied. You just saved (
                                                    {props.checkoutpage[0].currency_icon}){" "}
                                                    {discountAmount}{" "}
                                                </p>
                                            </>
                                        ) : (
                                            <p
                                                className="text-danger pt-2"
                                                id="error_coupon"
                                                style={{ display: inValid ? "block" : "none" }}
                                            >
                                                Invalid Coupon.
                                            </p>
                                        )}
                                    </li>

                                    <li className="pd">Processing details</li>
                                    <li className="d-flex">
                                        <span>Citizenship</span>{" "}
                                        <span>{props.checkoutpage[0].country_site}</span>
                                    </li>

                                    <li className="d-flex">
                                        <span>Destination</span>{" "}
                                        <span>{props.checkoutpage[0].country}</span>
                                    </li>
                                    <li className="d-flex">
                                        <span>Visa Type</span>{" "}
                                        <span>{props.checkoutpage[0].type}</span>
                                    </li>
                                    <li className="d-flex">
                                        <span>As fast as</span>{" "}
                                        <span>{props.checkoutpage[0].tat}</span>
                                    </li>
                                    <li className="d-flex">
                                        <span>Duration of stay</span>{" "}
                                        <span>up to {props.checkoutpage[0].duration}</span>
                                    </li>

                                    <li className="faq-page pb-0">
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Toggle
                                                as={Card.Header}
                                                className="pl-0 font-weight-bold"
                                                eventKey="0"
                                            >
                                                Specific Rule
                                            </Accordion.Toggle>

                                            <Accordion.Collapse eventKey="0">
                                                <div className="pt-1 pb-2">
                                                    {props.checkoutpage[0].specificrule === null
                                                        ? ""
                                                        : ReactHtmlParser(
                                                            props.checkoutpage[0].specificrule
                                                        )}
                                                </div>
                                            </Accordion.Collapse>

                                            <Accordion.Toggle
                                                as={Card.Header}
                                                className="pl-0 font-weight-bold"
                                                eventKey="1"
                                            >
                                                General Information
                                            </Accordion.Toggle>

                                            <Accordion.Collapse eventKey="1">
                                                <div className="pt-1 pb-0">
                                                    {props.checkoutpage[0].grule === null
                                                        ? ""
                                                        : ReactHtmlParser(
                                                            props.checkoutpage[0].grule
                                                        )}
                                                </div>
                                            </Accordion.Collapse>
                                        </Accordion>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            { isContinueToPayment === true && clientSecret ? (
                <Elements options={{clientSecret:clientSecret}} stripe={stripePromise}>
                    <Payment
                            paymentData={paymentData}
                            handleCallback={handleCallback}
                        />
                </Elements>
            ):('')}
        </>
    )
}

export default Checkoutpagein

export async function getServerSideProps(context) {
    const country_ext = context.locale;
    const page_url = context.query.checkout_inid;
    const page_url2 = context.query.checkoutpage;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${country_ext}/checkout/${page_url2}`);
     console.log(res)
    if (!res.ok) {
        return {
            notFound: true,
        }
    } else {
        //const apistatus = res.status;
        const checkoutpage = await res.json()
        return {
            props: {
                country_ext, page_url, page_url2, checkoutpage
            }
        }
    }
}