import { features } from "../constants"
import styles, { layout } from '../style'
import Button from "./Button"

const FeatureCard = (feature, { index }) => {
  return (
    <div className={`flex flex-row items-center p-6 rounded-2xl ${index !== features.length - 1 ? 'mb-6' : 'mb-0' } feature-card`}>
      <div className={`${styles.flexCenter} w-[64px] h-[64px] rounded-full bg-dimBlue`}>
        <img src={feature.icon} alt="feature-icon" className="w-1/2 h-1/2 object-contain"/>
      </div>

      <div className="flex-1 flex flex-col ml-3">
        <h3 className="font-poppins font-semibold text-white text-lg leading-[24px] mb-1">
          {feature.title}
        </h3>
        <p className="font-poppins font-semibold text-dimWhite text-base leading-[24px] mb-1">
          {feature.content}
        </p>
      </div>
    </div>
  )
}

export default function Business() {
  return (
    <section id="features" className="layout.section">
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden"/>
          we'll handle the money part
        </h2>

        <p className={styles.paragraph} style={{maxWidth: '470px', marginTop: '20px'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sapiente impedit tempora eius, nobis odit explicabo nemo quam tempore perferendis atque?
        </p>

        <Button style="mt-10" title='Get Started' />
      </div>

      <div className='flex justify-center'>
        <div className={`flex flex-col ${layout.sectionImg} max-w-fit`}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
