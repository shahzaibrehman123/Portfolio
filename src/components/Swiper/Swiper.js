import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <div className="swiper-wrapper">
        <Swiper
          slidesPerView={5}
          spaceBetween={55}
          loop={true}
          loopFillGroupWithBlank={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          initialSlide={0}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide className="swiper-img">
            <div className="d-flex flex-column align-items-center">
              <Icon fontSize={40} icon="cib:ethereum" />
              <h4>Ethereum</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <div className="d-flex flex-column align-items-center">
              <Icon fontSize={40} icon="nonicons:react-16" />
              <h4>React</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <div className="d-flex flex-column align-items-center">
              <Icon fontSize={40} icon="teenyicons:nodejs-solid" />
              <h4>NodeJs</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <div className="d-flex flex-column align-items-center">
              <Icon fontSize={40} icon="akar-icons:python-fill" />
              <h4>Python</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <div className="d-flex flex-column align-items-center">
              <Icon fontSize={40} icon="bxl:mongodb" />
              <h4>MongoDB</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <div className="d-flex flex-column align-items-center">
              <Icon fontSize={40} icon="devicon-plain:sqldeveloper" />
              <h4>SQL</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <div className="d-flex flex-column align-items-center">
              <Icon fontSize={40} icon="eos-icons:blockchain" />
              <h4>Blockchain</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <div className="d-flex flex-column align-items-center">
              <Icon fontSize={40} icon="devicon-plain:azuredevops" />
              <h4>DevOps</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <div className="d-flex flex-column align-items-center">
              <Icon fontSize={40} icon="simple-icons:web3dotjs" />
              <h4>Web3</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <div className="d-flex flex-column align-items-center">
              <Icon fontSize={40} icon="devicon-plain:azure" />
              <h4>Azure</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
