import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'swiper/swiper-bundle.css';


import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import Section from "../../../Component/Section/Section";

const Cetagory = () => {
  return (
    <section>
      <Section 
      heading={'ORDER ONLINE'}
      subHeading={'---From 11:00am to 10:00pm---'}
      ></Section>
      <Swiper 
      spaceBetween={10}
      slidesPerView={5}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      autoPlay={true}
      interval={3000}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-12 mt-8"
    >
      <SwiperSlide><img src={slider1} alt="slider1" /><p className="font-Cinzel text-3xl text-center text-white font-semibold ">Salads</p></SwiperSlide>
      <SwiperSlide><img src={slider2} alt="slider1" /><p className="font-Cinzel text-3xl text-center text-white font-semibold -mt-16 ">Salads</p></SwiperSlide>
      <SwiperSlide><img src={slider3} alt="slider1" /><p className="font-Cinzel text-3xl text-center text-white font-semibold -mt-16 ">Salads</p></SwiperSlide>
      <SwiperSlide><img src={slider4} alt="slider1" /><p className="font-Cinzel text-3xl text-center text-white font-semibold -mt-16  ">Salads</p></SwiperSlide>
      <SwiperSlide><img src={slider5} alt="slider1" /><p className="font-Cinzel text-3xl text-center text-white font-semibold -mt-16 ">Salads</p></SwiperSlide>
      <SwiperSlide> <p className="font-Cinzel text-3xl text-center text-white font-semibold  "></p></SwiperSlide>
    </Swiper>
    </section>
  );
};

export default Cetagory;
