import Image from 'next/image';
import Container from 'react-bootstrap/Container'
import Slider from "react-slick";

const Testimonials = (props) => {
  //console.log(props.testimonialsData)
  var Testimonials_sl = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }

    ]
  }
  return (
    <div className="testimonials-sec">
      <Container>
        <div className="ftv-title">
          <p><i className="fa fa-star"></i><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>  Trusted by 50,000+ travelers. </p>
          <h4 className='big_title'>What People Say About Us </h4>

        </div>
        <Slider {...Testimonials_sl}>
        {Array.isArray(props.testimonialsData) &&
            props.testimonialsData?.map((testimonial, n) => {
                return(
                  <div className="testi-box" key={n}>
                      <div className="testi-desc">
                        <h4 className='sub_title'></h4>
                        <p>{testimonial.description}</p>
                      </div>
                      <div className="testi-info">
                        {/* <Image src={`/${testimonial.image}`} alt='Becca' sizes='(max-width: 768px) 30vw, 20vw' width={70} height={70} priority="false" />
                        */}
                      <div style={{textAlign:'center'}}>
                        <p className='small_heading'>{testimonial.title}</p>
                        <p>{testimonial.city} </p>
                      </div>
                    </div>
                  </div>
                )
            })}

          {/* <div className="testi-box">
            <div className="testi-desc">
              <h4 className='sub_title'>An Unfororgettable Experience</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

              </p>
            </div>
            <div className="testi-info">
              <Image src="/img/testi1.png" alt='Becca' sizes='(max-width: 768px) 30vw, 20vw' width={70} height={70} priority="false" />
              <div>
                <p className='small_heading'>Becca Ward</p>
                <p>Lorem Ipsum </p>
              </div>
            </div>
          </div> */}
        </Slider>
      </Container>
    </div>
  )
}

export default Testimonials
