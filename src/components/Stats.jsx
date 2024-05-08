import { stats } from "../constants"
import styles from "../style"

export default function Stats() {
  return (
    /* <div className="w-full flex flex-col sm:flex-row justify-center">
      {stats.map((stat, index) => (
        <div key={stat.id} className={`text-white flex gap-3 ${index > 0 ? 'ml-4' : ''} items-center`}>
          <div className="flex gap-2">
            <h1>{stat.value}</h1>

            <p>{stat.title}</p>
          </div>

          {index !== stats.length - 1 && 
            <div style={{backgroundColor: 'white', height: '80%', width: '2px'}} />
          }          
        </div>
      ))}
    </div> */

    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-10 mb-4`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex sm:justify- justify-center items-center m-3`}>
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[60px] text-white">{stat.value}</h4>

          <p className="font-poppins font-semibold xs:text-[20px] text-[40px] text-white text-gradient uppercase ml-3">{stat.title}</p>
        </div>
      ))}
    </section>
  )
}
