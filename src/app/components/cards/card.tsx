import React from 'react'
import Image from 'next/image'
import Button from '../buttons/button'


interface CardProps{
  title?: string,
  link?: string 
  image?: string
  imgText?: string
}


const Card: React.FC<CardProps> = ({title, link, image, imgText}) => {
  const img: string = image!
  const alt: string = imgText!
  const cardTitle: string = title!
  const url: string = link!

  return(
    <div className='card'>
      <div className="card_image_container">
        <Image src={img} alt={alt}/>
      </div>
      <div className="card_text_container">
        <h4>{cardTitle}</h4>
      </div>
      <Button link={url} text="Learn More"/>
    </div>
  )
}

export default Card