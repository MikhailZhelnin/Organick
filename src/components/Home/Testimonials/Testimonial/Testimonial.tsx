import Image from "next/image";
import {Rating} from 'react-simple-star-rating'

import {urlFor} from "@/helpers/urlFor";

import {ITestimonial} from "@/global/interfaces/ITestimonial";

import styles from './Testimonial.module.scss'

interface TestimonialProps {
  testimonial: ITestimonial,
}

const Testimonial = ({testimonial}: TestimonialProps) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonialImage}>
        <Image src={urlFor(testimonial.image).url()} alt={testimonial.name} width={115} height={115}/>
      </div>
      <Rating initialValue={testimonial.rating} readonly size={20} className={styles.testimonialRating}/>
      <div className={styles.testimonialText}>
        <p>{testimonial.text}</p>
      </div>
      <h6 className={styles.testimonialName}>{testimonial.name}</h6>
      <span className={styles.testimonialInfo}>{testimonial.info}</span>
    </div>
  )
}

export default Testimonial;