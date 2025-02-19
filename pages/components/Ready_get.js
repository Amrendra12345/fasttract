
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
const Ready_get = () => {
  return (
     <div className="ready-get">
        <Container>
          <div className="row align-items-center justify-content-between">

            <div className="col-12 col-md-6">
              <h4 className='big_title text-white'>
                The Smartest Way to get an eVisa from anywhere to anywhere
              </h4>
              <p className='font-14'> You will not find a simpler way to get your eVisa online.  Simply fill in the online form,  upload your documents and make the payment securely via Stripe.  Your eVisa will be sent to you via e-mail within a few hours to a few days.  And what's more,  we will provide you with a complimentary eSIM to keep you connected & online on your journey.</p>
              <p>  Can there be a better deal ?</p>

            </div>
            <div className="col-12 col-md-5">
              <figure>
                <Image alt=" The Smartest Way to get an eVisa" src={'/img/ready-get.png'} width={487} height={450} />
              </figure>
            </div>

          </div>
        </Container>
      </div>
 
  );
}

export default Ready_get;
