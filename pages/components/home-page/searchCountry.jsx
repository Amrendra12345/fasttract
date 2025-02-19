import axios from 'axios';
import { useRouter } from 'next/router';
import React, { use, useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

let currentIndex ;
let desCurrentIndex ;
const SearchCountry = (props) => {  
    const router = useRouter()
    const [originInputValue, setOriginInputValue] = useState('');
    const [originCountry, setOriginCountry] = useState([]);
    const [filterOrigin, setFilterOrigin] = useState([]);
    const [isOpen, setIsOpen] = useState(false)    
    const [isActive, setIsActive] = useState(false)
    const originRef = useRef();   
    const destinationRef = useRef(); 
    const [ destination, setDestionation] = useState([]);
    const [ filterDestination, setFilterDestination] = useState([]);
    const [desInputValue, setDesInputValue] = useState('')
    const [originCountryKey, setOriginCountryKey] = useState('')
    const [isError, setIsError] = useState(null);
    const originClickHandler = async()=>{        
      const res = await fetch(`https://cms.fasttrackvisa.com/api/${props.ce_name}/origin-country`);
      if(!res.ok){
          setError('No country')
      }
      const data = await res.json();       
      setOriginCountry(data.origin_country)
      setFilterOrigin(data.origin_country)
      setIsOpen(true)
  }
  const originChangekHandler = (e) =>{
      const val = e.target.value      
      setOriginInputValue(val)
       if(val !== ''){
          const filterData = originCountry.filter((el, index)=>{
              if(el.name.toLowerCase().startsWith(val)){
                  currentIndex = val.length
                  return el.name.toLowerCase().startsWith(val)
              }else{
                  return el.name.toLowerCase().startsWith(val.substring(0, currentIndex))
              }
          })
          setFilterOrigin(filterData)
      }else{
      setFilterOrigin(originCountry)
      }
  }
  
 const selectedOriginCountry = async(e)=>{
      const country =  e.target.innerText 
      const countryKey = e.target.getAttribute('label');
      setOriginInputValue(country);
      setOriginCountryKey(countryKey)
      setIsOpen(false);      
      // destionation country start

      try {
          const res = await fetch(`https://cms.fasttrackvisa.com/api/${props.ce_name}/origin-country/${country}`)
          if(!res.ok){
              throw new error
          }
          const data = await res.json();
          if(data.destination_country.length > 1){
            setIsError('')
            setDesInputValue('')
            setDestionation(data.destination_country);
            setFilterDestination(data.destination_country)
            return false
          }else{
            setIsActive(false);
            setDesInputValue('')
            setFilterDestination([])
            setIsError('Not available destination country')
            setTimeout(() => {
                setIsError("");
              }, 3000);
          }
          
      } catch (error) {
          console.log(error.message)
      }
 }
  // destionation country start
const desClickHandler = (e)=>{
    const country =  e.target.innerText 
    setDesInputValue(country)
    setIsError('')
    if(0 === filterDestination.length){
        if(originInputValue !== ''){
            setIsActive(false);
           setIsError('Not available destination country') 
        }else{
            setIsActive(false);
            setIsError('Please select your origin country first')   
        }
    }else{
        setIsActive(true)
    };
}
const desChangeHandler = (e)=>{
  const inputVal = e.target.value
  setDesInputValue(inputVal)
  if(inputVal !== ''){
      const filterData = destination.filter((el, index)=>{
          if(el.name.toLowerCase().startsWith(inputVal)){
              desCurrentIndex = inputVal.length
              return el.name.toLowerCase().startsWith(inputVal)
          }else{
              return el.name.toLowerCase().startsWith(inputVal.substring(0, desCurrentIndex))
          }
      })
      setFilterDestination(filterData)
  }else{
      setFilterDestination(destination)
  }
  
}
const desCountryClick = async(e)=>{
  const country =  e.target.innerText 
  setDesInputValue(country)
  setIsActive(false)
}
const originDowpdon = (event)=>{
if(originRef && originRef.current && originRef.current.contains(event.target)){
   console.log('inside click')
}else{
  setIsOpen(false)
}
}

const destinationDowpdon = (event)=>{
  if(destinationRef && destinationRef.current && destinationRef.current.contains(event.target)){
     console.log('inside click')
  }else{
      setIsActive(false)
  }
}
useEffect(()=>{
  document.addEventListener('click', originDowpdon)
  return ()=>{
      document.removeEventListener('click', originDowpdon)
  }
},[])
useEffect(()=>{
  document.addEventListener('click', destinationDowpdon)
  return ()=>{
      document.removeEventListener('click', destinationDowpdon)
  }
},[])

const handleKeyDown = (e)=>{
    const inputValue =e.target.value
    if(e.key == 'Backspace' || e.key == 'Delete'){
       if(inputValue.length > 1){
          setIsActive(false);
          setDesInputValue('')
          setFilterDestination([])
       }
    }
   else if(1 >= inputValue.length){
      setIsActive(false);
      setDesInputValue('')
      setFilterDestination([])
    }
}

const GetEvisa = async() =>{
  const destination = desInputValue;
  const extention = originCountryKey    
  setIsError('')
  if(originInputValue.length < 1){
      setIsError('Please select your origin country')
      setTimeout(() => {
          setIsError("");
        }, 3000);
      return false;
  }else if(desInputValue.length < 1){
      setIsError('Please select your destination country')
      setTimeout(() => {
          setIsError("");
        }, 3000);
      return false;    
  }else{
      getErrorStatus(extention, destination)
  }

}
const getErrorStatus = async(ext, conunty)=>{   
  axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${ext}/international-visa/${conunty}`)
  .then(function(){ 
      router.push(conunty, conunty, { locale: ext })
  })
     .catch(function (error) {        
        if (error.response) {
          setIsError('Not available this country visa')
          setTimeout(() => {
              setIsError("");
            }, 3000);
        }
 })
}

  return (
    <> 
    <section className="searchband">
       <Container>
          { isError && <p className='errors pl-5 mb-3'><span> {isError}</span></p>}
           <Row>
              <Col md={5} className="position-relative" >
                <div className="ftv-field">
                    <label htmlFor="sourcLabel">I am a citizen of</label>
                    <input type='text' className='form-control'value={originInputValue || ''} placeholder="Select..." onClick={originClickHandler}  onChange={originChangekHandler} onKeyDown={handleKeyDown} />
                 </div>
                 <ul className={`country_list  ${isOpen === true ? 'show':'hidden'}`}  ref={originRef}>
                    {
                        filterOrigin.map((country)=>{
                            return <li  label={country.extention} key={country.extention} onClick={selectedOriginCountry}>{country.name}</li>
                        })
                    }
                 </ul>
              </Col>
              <Col md={5} className="position-relative"ref={destinationRef} >
                <div className="ftv-field">
                 <label htmlFor="">I am a citizen of</label>
                 <input type="text" className="form-control" value={desInputValue || ''} placeholder="Select..." onClick={desClickHandler} onChange={desChangeHandler}/>
                 </div>
                  <ul className={`country_list ${isActive === true  ? 'show':'hidden'}`}>
                     {
                        filterDestination.map((des, i)=>{
                            return <li  key={i} onClick={desCountryClick} >{des.name}</li>
                        })
                     }
                  </ul>
              </Col>
            <Col md={2}>
            <button type='button' className="btn btn-lg btn2" onClick={GetEvisa}>Get an eVisa</button>
            </Col>
           </Row>
       </Container>
    </section>
   </>
  )
}

export default SearchCountry