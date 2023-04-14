import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from 'swiper';

import SectionHeading from "@/components/Shared/SectionHeading/SectionHeading";
import Testimonial from "@/components/HomePage/Testimonials/Testimonial/Testimonial";

import {ITestimonial} from "../../../global/interfaces/index";
import {testimonialsFeaturesData} from "@/data";

import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Testimonials.module.scss'

interface TestimonialsProps {
  testimonials: ITestimonial[]
}

export const Testimonials = ({testimonials}: TestimonialsProps) => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.content}>
          <SectionHeading overhead='Testimonials' title='What Our Customer Saying?'/>
          <Swiper
            slidesPerView={1}
            modules={[Autoplay, Pagination]}
            loop
            pagination={{clickable: true}}
            autoplay={{
              delay: 5000,
            }}
            style={{marginBottom: '170px' ,paddingBottom: '30px'}}
          >
            {testimonials.map(testimonial => (
              <SwiperSlide key={testimonial.id}>
                <Testimonial testimonial={testimonial}/>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.list}>
            {testimonialsFeaturesData.map(feature => (
              <div key={feature.id} className={styles.listItem}>
                <h2 className={styles.listItemTitle}>{feature.title}</h2>
                <span className={styles.listItemText}>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}