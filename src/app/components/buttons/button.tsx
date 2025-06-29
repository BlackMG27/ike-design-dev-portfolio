import React from 'react'
import Link from 'next/link'

interface ButtonProps{
  text?: string,
  link?: string,
  icon?: string
}

const Button: React.FC<ButtonProps> = ({text, link}) => {
const url: string = link!
  return(
    <button className='button'>
      <Link href={url}>
        {text}
      </Link>
    </button>
  )
}

export default Button