import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Working with David was a fantastic experience. They transformed our outdated website into a modern, user-friendly platform that has significantly boosted our online presence and customer engagement.",
    },
    {
      img: profilePic2,
      review:
        "The website David developed for our e-commerce store is outstanding. The design is sleek, the navigation is intuitive, and the performance is top-notch. Our sales have increased dramatically since the launch",
    },
    {
      img: profilePic3,
      review:
        "I highly recommend David for web development services. They delivered a custom website that perfectly fits our brand and business goals. Their attention to detail and professionalism are unparalleled",
    },
    {
      img: profilePic4,
      review:
        "From start to finish, David provided exceptional service. They were responsive, creative, and knowledgeable. Our new website is everything we hoped for and more. We couldn’t be happier with the result.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
