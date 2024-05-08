import styles from "../style"
import Button from "./Button"

export default function CTA() {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-2xl box-shadow`}>
      <div className="flex flex-col flex-1">
        <h2 className={`$${styles.heading2}`}>Try Our Services</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, perspiciatis perferendis? Modi, laborum. Nesciunt molestias et, optio maxime amet odio sunt.</p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 rounded-2xl overflow-hidden`}>
        <Button title='Get Started'/>
      </div>
    </section>
  )
}
