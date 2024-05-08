import React from 'react'

export default function Button({style, title}) {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[1rem] text-primary outline-none ${style}`}>
      {title}
    </button>
  )
}
