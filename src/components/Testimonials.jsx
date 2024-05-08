import {feedback} from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'

export default function Testimonials() {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

      <div className='w-full flex justify-center gap-12 items-center md:flex-row flex-col sm:mb-10 mb-6 relative z-[1]'>
        <h1 className={styles.heading2}>What people are <br className='sm:block hidden'/> saying about us</h1>

        <div className='md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[550px]`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias, maxime obcaecati inventore aperiam aut sed quia rem ex perferendis nisi quas harum perspiciatis magni beatae, esse vero sint doloribus facere assumenda eum.
          </p>
        </div>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] max-w-fit'>
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}
