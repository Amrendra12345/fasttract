import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

export default function BlogSection(props) {
  // console.log(props.blogs)
  let Testimonials_sl = {
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
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="blog-sec">
      <Container>
        <div className="ftv-title">
          <h4 className="big_title">
            Check out our Blog for Inspiring Travel Stories & Ideas
          </h4>
          <p>Stay up-to-date on Global Travel Requirements</p>
        </div>
        <Slider {...Testimonials_sl}>
          {Array.isArray(props.blogs) &&
            props.blogs?.map((blog_arr, i) => (
              <div className="blog-box" title={blog_arr.title} key={i}>
                <Link href={"/blog/" + blog_arr.blogtitle}>
                  <figure>
                    <Image
                      alt={"blog user"}
                      src={
                        blog_arr.title == "The Ultimate Costa Rica Travel Guide"
                          ? "/blog3/Ultimate Costa Rica Travel Guide.webp"
                          : blog_arr.title ==
                            "Unlocking the Mysteries of Ancient Egypt: An Ultimate Guide to Your Unforgettable Journey"
                          ? "/blog3/Unlocking the Mysteries of Ancient Egypt.webp"
                          : blog_arr.title ==
                            "Discover the Marvels of Italy: A Journey through Its Unforgettable Attractions"
                          ? "/blog3/Discover the Marvels of Italy.webp"
                          : blog_arr.title ==
                            "Kumbh Mela 2025: A Journey Through Faith and Culture at Prayagraj"
                          ? "/blog3/Kumbh-Mela-2025.webp"
                          : "/blog2/default_blog.webp"
                      }
                      // src={"https://ik.imagekit.io/vs4gypuhi/" + blog_arr.image}
                      fill
                      sizes="(max-width: 768px) 50vw, 30vw"
                      className="img-fluid"
                      priority
                    />
                  </figure>
                  <h5 className="sub_title text-center"> {blog_arr.title}</h5>
                </Link>
                <p className="font-14">{blog_arr.blog_des}</p>
                <div className="mb-0 author mt-4 pl-3 pr-3 pb-2">
                  <Link href={"/blog/" + blog_arr.blogtitle}>
                    <Image
                      alt={"blog user"}
                      src={"/img/testi1.png"}
                      height={30}
                      width={30}
                      sizes="(max-width: 768px) 50vw, 30vw"
                    />
                    <span className="ml-2"> {blog_arr.by}</span>
                  </Link>
                  <span className="ml-3">{blog_arr.date}</span>
                </div>
              </div>
            ))}
        </Slider>
      </Container>
    </section>
  );
}
