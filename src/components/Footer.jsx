import styles from "../style"
import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"

export default function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex flex-col flex-1 justify-start mr-10">
          <img src={logo} alt="hoobank" className="w-[240px] h-[64px] object-contain" />
          <p className={`${styles.paragraph} mt-4 max-w-[280px]`}>A new way to make payments. GET RICH</p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-4">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className="flex flex-col sm:my-0 my-4 min-w-[160px]">
              <h4 className="font-poppins font-normal text-lg text-white mb-1">{footerLink.title}</h4>
              <ul>
                {footerLink.links.map((link, index) => (
                  <li key={index} className={`font-poppins font-normal text-base text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className=" w-full flex md:flex-row flex-col justify-between items-center border-t-2 border-t-dimWhite p-4">
        <p className="font-poppins font-normal text-lg text-white">
          2024 Krishna Upadhyay. All rights reserved.
        </p>

        <div className="flex md:mt-0 mt-4">
          {socialMedia.map((social, index) => (
            <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
