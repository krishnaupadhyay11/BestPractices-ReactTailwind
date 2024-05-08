import {apple, bill, google} from '../assets'
import styles , {layout} from '../style'
import Button from './Button'

export default function Billing() {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt='billing' className='w-full h-full relative z-[5]' />

        <div className='absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient' />
      </div>

      <div className={`${layout.sectionInfo} max-w-[480px]`}>
        <h2 className={styles.heading2}>
          Easily control your <br className='sm:block hidden' /> billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat nemo facere officiis vel nihil impedit, corrupti vitae reprehenderit optio sit labore voluptas tempore nisi reiciendis doloribus voluptate voluptatibus recusandae deserunt odio! Sapiente, velit?
        </p>

        <div className='flex flex-wrap sm:mt-10 mt-6 gap-2'>
          <img src={apple} alt='Apple Store' className='w-[128px] h-[42px] object-contain cursor-pointer' />
          <img src={google} alt='Play Store' className='w-[128px] h-[42px] object-contain cursor-pointer' />
        </div>
      </div>
    </section>
  )
}
