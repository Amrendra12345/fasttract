
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Alert, Col, Container, Modal, Row, Tab, Tabs } from 'react-bootstrap'
import { FaCamera, FaUpload } from 'react-icons/fa'
import Webcam from "react-webcam";

const Successpage = (props) => {    
    const [traveler_document_info, setTraveler_document_info] = useState([])
    const [uploadedFile, setUploadedFile] = useState([])
    const [traveler_info, setTraveler_info] =useState([])
    const [showWebCamModal, setShowWebCamModal] = useState(false)
    const [currentActiveWebCamName, setCurrentActiveWebCamName] = useState('')
    const [currentActiveWebCamIndex, setCurrentActiveWebCamIndex] =useState(null)
    const [currentActiveWebCamSubIndex, setCurrentActiveWebCamSubIndex] =useState(null)
    const [captureImageSrc, setCaptureImageSrc] =useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [showsuccessAlert, setShowsuccessAlert] = useState(false)
    const [thankupage, setThankupage] = useState({})
    const[showForm, setShowForm] = useState(false)   
    
    let userInfo;
    if(typeof window !== 'undefined'){
        userInfo = JSON.parse(localStorage.getItem("loginDetails"));       
     }
   const videoConstraints = {
        facingMode: "user",
      };
    useEffect(()=>{
      for(let i = 0; i < props.thankupage.additional_details_name_ar.length ; i++ ){
        addFormDocumentFields()
      }
        for (let i = 0; props.thankupage.travelar_arr.length > i; i++) {        
            addFormFields();
        }
        updatePayment();
        setThankupage(props.thankupage)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
 const updatePayment = async () => {
        const user_id = userInfo.id || sessionStorage.getItem("user_id");        
        const paymentData = {
          user_id: user_id,
          order_id: props.success_page_url,
          status: 1,
          strip_transaction_id: props.payment_id
        }
        await axios.post(`https://cms.fasttrackvisa.com/api/${props.c_id}/updatepayment`, paymentData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }



    const handleChange = (i, e)=>{      
        const values = [...traveler_document_info];
        values[i][e.target.name] = e.target.value;
        setTraveler_document_info(values);
    }    
 
    const addFormDocumentFields = ()=>{
        setTraveler_document_info([...traveler_document_info, {}])
    }  
    
  const handleInputFileChange = (index, subindex, event, name)=>{
        let UploadedFile = [...uploadedFile]
         uploadedFile[index].LocalUploadedFile[subindex] = event.target.files[0].name;
         let traveler = [...traveler_info] 
          traveler[index][name] = event.target.files[0];
         setTraveler_info( traveler );
       }
   const  handleCaptureImageChange = (index, subindex, event, name)=>{
        let UploadedFile =[...uploadedFile]
        uploadedFile[index].LocalUploadedFile[subindex] = 'Uploaded';
        let traveler = traveler_info
        traveler[index][name] = event;
        setTraveler_info( traveler );
        setShowWebCamModal(false)
        setCurrentActiveWebCamName('')
        setCurrentActiveWebCamIndex(null)
        setCaptureImageSrc('')
 }
 const addFormFields = ()=>{        
    let LocalUploadedFile = [];
    if(userInfo){
        for (let i = 0; props.thankupage.document.length > i; i++) {            
            LocalUploadedFile.push('Upload File Here');
        }
    }
    setTraveler_info([...traveler_info, {}])
    setUploadedFile([...uploadedFile, { LocalUploadedFile }])
} 

const isEmpty = (string) => {   
    if (string !== null && string !== undefined && string !== '') {
      return true;
    } else {
        setShowAlert(true)
      return false;
    }
  }
const submitTravellerDocmentInfo = async()=>{
    
    setShowAlert(false)
    let fieldName = props.thankupage.additional_details_name_ar.map((el)=> el.field_name)
    let document_arr = [];
    for(let i = 0; i < props.thankupage.additional_details_name_ar.length; i++){      
       if(!isEmpty(traveler_document_info[0][fieldName[i]]) === true){
         setShowAlert(true)
          return false;
       }
        document_arr = [...document_arr, {"fiels_name": props.thankupage.additional_details_ar[i], "fiels_value": traveler_document_info[0][fieldName[i]]}]
    }
    ///console.log(document_arr)
    const user_id = sessionStorage.getItem('user_id') || userInfo.id;
    const data = new FormData();
    data.append('user_id', user_id)
    data.append('order_id[]', props.thankupage.travelar_arr[0].toid);
    data.append('field_value[]', JSON.stringify(document_arr));    
    // for (const [key, value] of data) {
    //    console.log(`${key}: ${value}\n`)
    // }
    let url = (`${process.env.NEXT_PUBLIC_BASE_URL}/api/save-additional-details`);
    try {
     const res = await axios.post(url, data, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
              }
         })
         console.log(res)
         return true
    } catch (error) {
        
        console.log(error.message)
        return false;
    }
   
}
const submitUploadDocument = async()=>{
    
    setShowAlert(false)
    const document_fields = props.thankupage.document_fields.map((el)=> el.field_name)
    const document_name = props.thankupage.document.map((el)=> el.doc_name)
  //  console.log(traveler_info[0])
    const data = new FormData();
    for(let i = 0; i < props.thankupage.document.length; i++){
      let files = traveler_info[0][document_fields[i]]      
      if(!isEmpty(traveler_info[0][document_fields[i]]) === true){
        setShowAlert(true)
         return false;
      } 
      data.append('document_name[]', files)
      data.append('document_type[]', document_fields[i])
    }
    const user_id = sessionStorage.getItem('user_id') || userInfo.id;    
    data.append('user_id', user_id)
    data.append('id', props.page_url);
    //  for (const [key, value] of data) {
    //    console.log(`${key}: ${value}\n`)
    // }
    const url = (`${process.env.NEXT_PUBLIC_BASE_URL}/api/uploaddocument`);
    try {
        const res = await axios.post(url, data, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
              }
        })
        console.log(res)
        return true
    } catch (error) {
        return false
        console.log(error.message)
    }

}


const submitHandler = ()=>{
  
    const file_name = props.thankupage.additional_details_name_ar
    const doc_upload = props.thankupage.document_fields
     
    if(doc_upload.length > 0 &&  file_name.length === 0){
        submitUploadDocument()
    }else if(doc_upload.length === 0 &&  file_name.length > 0){
        submitTravellerDocmentInfo()
    }else if(doc_upload.length > 0 &&  file_name.length > 0){
        if(submitTravellerDocmentInfo()){
            submitUploadDocument()
        }
    }
    setShowsuccessAlert(true)
 }


    return (
        <>
            <div className="header_bg"></div>
            <Container>
                <ol className="breadcrumb pl-0">
                    <li className="breadcrumb-item"><Link href={'/'}> Home </Link></li>
                    <li className="breadcrumb-item active">Success </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {props.thankupage.destination}  {props.thankupage.category}
                    </li>
                </ol>
                <div className='eta_bg'>
                    Please provide the following additional information for faster processing of your eVisa / ETA Application:
                </div>
                <div className='eta_bg2'>
                        Please share your documents on this email Id <span className=''>info@fasttrackvisa.com</span> 
                         or whatsapp us on +91 9711610418
                </div>
                <div className='AttachDocuments mt-5'>
                    
                    <Tabs defaultActiveKey="0" transition={false}>
                        {props.thankupage.travelar_arr.map((element, index) => (
                            <Tab eventKey={index.toString()} title={element.name} key={index}>
                                <Row className='mb-3'>
                                    {props.thankupage.additional_details_name_ar.map((additional_element, i) => (
                                        <Col sm={6} key={i}>
                                            <div className="ftv-field">
                                                <label>{props.thankupage.additional_details_ar[i]}</label>
                                                <input id={additional_element.field_name} type='text' name={additional_element.field_name} className='form-control' placeholder="Here" onChange={e =>handleChange(index, e)}/>
                                            </div>
                                        </Col>
                                    ))
                                    }
                                </Row>
                                  <h5 className='mt-4 pt-2 mb-0'>Upload Documents</h5>
                                <Row>
                                    {props.thankupage.document.map((subElement, subindex) => (
                                      <Col sm={6} key={subindex}>
                                           <>
                                            <div className="ftv-field file_upload">
                                              <label htmlFor={props.thankupage.document[subindex]}>{props.thankupage.document[subindex].doc_name} </label>
                                              <input id={props.thankupage.document[subindex]} name={props.thankupage.document[subindex]} type="file" className="form-control file" placeholder="Upload File Here" onChange={e => handleInputFileChange(index, subindex, e, props.thankupage.document_fields[subindex].field_name)} />
                                               <small>{uploadedFile[index]?.LocalUploadedFile[subindex] ? uploadedFile[index]?.LocalUploadedFile[subindex] :'' }</small> 
                                               
                                               <span className='browse' title='Browse'><FaUpload/></span>
                                               <b>or</b>
                                               <span className='browse2' title='Take Photo'
                                                onClick={() => {{setShowWebCamModal(true), setCurrentActiveWebCamName(props.thankupage.document_fields[subindex].field_name), setCurrentActiveWebCamIndex(index), setCurrentActiveWebCamSubIndex(subindex)
                                                }}}
                                               ><FaCamera/></span>
                                            </div>
                                           </>
                                      </Col>
                                    ))}
                                </Row>
                            </Tab>
                        ))}
                    </Tabs>
                </div>
               
                <Modal
                  show={showWebCamModal}
                  onHide={() => setShowWebCamModal(false)}
                  dialogClassName="modal-90w"
                  size="lg"  >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      {currentActiveWebCamName}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div>
                      {captureImageSrc === '' ?
                        <Webcam
                          //fullscreen={true}
                          audio={true}
                          height={600}
                          screenshotFormat="image/jpeg"
                          width={760}
                          videoConstraints={videoConstraints}
                        >
                          {({ getScreenshot }) => (
                            <div className='text-center'><button className='btn btn-secondary'
                              onClick={() => {
                                const imageSrc = getScreenshot();
                                setCaptureImageSrc(imageSrc)                                
                              }}
                            >
                              Capture photo
                            </button></div>
                          )}
                        </Webcam>
                        : <> <Image src={captureImageSrc} alt='camera' width={960} height={760}  sizes="100vw"
                        style={{
                          width: '100%',
                          height: 'auto',
                        }}
                        /> <div className='text-center'><button className='btn btn-secondary mt-2'
                          onClick={() => {
                            handleCaptureImageChange(currentActiveWebCamIndex, currentActiveWebCamSubIndex, captureImageSrc, currentActiveWebCamName);
                          }}
                        >
                          Upload photo
                        </button></div> </>
                      }
                    </div>
                  </Modal.Body>
                </Modal>
                {showAlert ? <> <br />  <Alert key='warning' variant='warning'> Some field is empty/null.  </Alert> </> : ''}
                {showsuccessAlert ? <>
                <div className='card card-body mt-2 text-center pt-5'>
                  <figure> <Image priority alt="thank you" src={'/img/check.jpg'} width={152} height={158} /></figure>
                  <h1>Congratulations {props.thankupage.full_name}</h1>
                  <p>Dear,  {props.thankupage.full_name}.  Thank you for applying for {props.thankupage.destination} {props.thankupage.category} on fasttrackvisa.com </p>
                  <p>Your Transaction ID is {props.payment_id}</p>
                </div>
              </> : ''}
              <button className='btn4 d-block w-100 mt-4'onClick={submitHandler} >Submit  </button>
            </Container>

        </>
    )
}

export default Successpage

export const getServerSideProps = async (context) => {
    const c_id = context.locale;
    const page_url = context.query.success_inid;
    const success_page_url = context.query.success_inpage;
    const payment_id = context.query.payment_intent;
   
    const res = await fetch(`https://cms.fasttrackvisa.com/api/thankyou/${page_url}/${success_page_url}`);
    if (res.status === 200) {
        const thankupage = await res.json()

        const apistatus = res.status;
        return {
            props: { c_id, thankupage, success_page_url, apistatus, page_url, payment_id }
        }

    }
    else {
        return {
            props: { success_page_url, page_url }
        }
    }
}


