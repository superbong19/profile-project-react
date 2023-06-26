import React from 'react'
import './testimonials.css'
import AVTAR1 from '../../assets/AVTAR1.jpeg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from client</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonial__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTAR1} alt="Avatar One" />
                    </div>
                    <h5 className='client__name'>Ernes Achiever</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis soluta eum quae consequuntur laborum enim eligendi voluptatem. Minima, ducimus molestiae accusantium quo quae quis! Quisquam voluptas voluptatum aspernatur dolores ipsum.
                    </small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTAR1} alt="Avatar One" />
                    </div>
                    <h5 className='client__name'>Ernes Achiever</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis soluta eum quae consequuntur laborum enim eligendi voluptatem. Minima, ducimus molestiae accusantium quo quae quis! Quisquam voluptas voluptatum aspernatur dolores ipsum.
                    </small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTAR1} alt="Avatar One" />
                    </div>
                    <h5 className='client__name'>Ernes Achiever</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis soluta eum quae consequuntur laborum enim eligendi voluptatem. Minima, ducimus molestiae accusantium quo quae quis! Quisquam voluptas voluptatum aspernatur dolores ipsum.
                    </small>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Testimonials