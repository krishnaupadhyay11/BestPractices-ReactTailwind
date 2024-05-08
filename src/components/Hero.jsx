import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'


export default function Hero() {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex items-center py-[6px] px-4 bg-discount-gradient rounded-xl mb-2 mx-auto'>
          <img src={discount} alt='discount' className='w-[32px] h-[32px]' />

          <p className={`${styles.paragraph}`}>
            <span className='text-white'>20% </span>Discount For {" "}
            <span className='text-white'>1 Month </span>Account
          </p>
        </div>

        <div className='w-full flex justify-between items-center '>
          <h1 className='flex-1 font-poppins font-semibold sm:text-[72px] text-[52px] text-white'>
            The Next <br className='sm:block hidden' /> {" "}
            <span className='text-gradient'>Generation</span>          
          </h1>

          <div className='sm:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>

        <h1 className='flex-1 font-poppins font-semibold sm:text-[72px] text-[52px] text-white'>
          Payment Method.            
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet recusandae voluptatibus quae nesciunt expedita non. Corrupti porro voluptate sed recusandae dignissimos vel alias incidunt eos, reiciendis fuga sint nisi distinctio dolores sunt placeat.
        </p>
      </div>

      <div>
        <img src={robot} alt='billing' className='w-full h-full relative z-[5]' />

        <div className='absolute z-[0] w-[40%] h-[35%] top-0 left-[25%] pink__gradient' />
      </div>

      <div className='sm:hidden flex justify-center items-center'>
        <GetStarted />
      </div>
    </section>
  )
}
