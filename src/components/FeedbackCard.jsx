import { quotes } from "../assets"

export default function FeedbackCard({content, name, title, img}) {
  return (
    <div className='flex flex-col justify-between px-10 py-12 rounded-2xl max-w-[360px] ml:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img src={quotes} alt='double_quotes' className="w-[42px] h-[27px] object-contain" />
      <p className="font-poppins font-normal text-lg text-white my-6">{content}</p>

      <div className="flex flex-row items-center">
        <img src={img} alt={name} className="w-[40px] h-[40px] rounded-full" />

        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-2xl leading-4 text-white my-4">{name}</h4>
          <h4 className="font-poppins font-normal text-lg leading-4 text-gray-300">{title}</h4>
        </div>
      </div>
    </div>
  )
}
