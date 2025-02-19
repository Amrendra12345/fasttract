
import Image from 'next/image'
import Container from 'react-bootstrap/Container';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Simple_step = (props) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        responsive: [

            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

        ]
    }

    return (
        <div className="simple-step">
            <Container>
                <div className="ftv-title">
                    <p className='title_p'>We Take Care Of Your Online Visa Application</p>
                    <h3 className='big_title'>Apply Visa Online In 4 Simple Steps</h3>
                </div>
                <Slider {...settings}>
                    <div className="thumbnail">
                        <div className='blogBox'>
                            <figure> <Image alt="Log In & Apply" src={'/img/step-1.png'} width={163} height={116} /></figure>
                        <div className='caption'>
                        <h4 className='normal_title'>Log In & Apply</h4>
                        <p>Fill in the Online Application Form with basic details</p>
                        </div>
                        </div>
                    </div>
                    <div className="thumbnail">
                    <div className='blogBox'>
                        <figure> <Image alt="Upload Documents & Pay Online" src={'/img/step-2.png'} width={131} height={112} /></figure>
                        <div className='caption'>
                        <h4 className='normal_title'>Upload Documents & Pay Online</h4>
                        <p>Our Visa Expert will validate your application</p>
                        </div>
                        </div>
                    </div>
                    <div className="thumbnail">
                    <div className='blogBox'>
                        <figure> <Image alt="Visa Processing" src={'/img/step-3.png'} width={118} height={118} /></figure>
                        <div className='caption'>
                        <h4 className='normal_title'>Visa Processing</h4>
                        <p>We will process your eVisa with the {props.scountryname} embassy</p>
                        </div>
                        </div>
                    </div>
                    <div className="thumbnail">
                        <div className='blogBox'>
                        <figure>
                            <Image alt="Visa by E-Mail" src={'/img/step-4.png'} width={140} height={108} />
                        </figure>
                        <div className='caption'>
                        <h4 className='normal_title'>Visa by E-Mail</h4>
                        <p>Get your eVisa & eSIM delivered to you via e-mail</p>
                        </div>
                        </div>
                    </div>
                </Slider>
            </Container>
        </div>


    );

}
export default Simple_step;
