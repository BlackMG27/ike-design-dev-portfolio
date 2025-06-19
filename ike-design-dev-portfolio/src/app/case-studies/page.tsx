import React from 'react'
import {Metadata} from 'next'

export const metadata: Metadata = {
  title: "My Case Studies",
  description: "This is the main page for my more intensive projects from start to finish"
}

export default function CaseStudies(){
  return (
    <h2>This is the Case Studies Main page.</h2>
  )
}