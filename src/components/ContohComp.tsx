// Carousel.tsx
import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ContohComp: React.FC = () => {
  return  (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="bg-gray-300 p-4">
          <h1>Slide 1</h1>
          <img src="image1.jpg" alt="Image 1" />
          {/* Add other tags as needed */}
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="bg-gray-300 p-4">
          <h1>Slide 2</h1>
          <img src="image2.jpg" alt="Image 2" />
          {/* Add other tags as needed */}
        </div>
      </SwiperSlide>

      {/* Add more slides as needed */}

    </Swiper>
  );
};

export default  ContohComp
