import React from "react";
import { Metadata } from "next";

export const metadata: Metadata ={
  title: "Contact Me",
  description: 'Please contact me using one or more of the methods below'
}

const Contact = () => {
  return(
    <h2>This is the contact page.</h2>
  )
}

export default Contact