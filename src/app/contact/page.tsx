import React from "react";
import { Metadata } from "next";
import Header from "../components/layouts/header";

export const metadata: Metadata ={
  title: "Contact Me",
  description: 'Please contact me using one or more of the methods below'
}

const Contact = () => {
  return(
    <>
      <Header 
      title="How to Reach Me" 
      subtitle="Please use one of the methods below."/>
    </>
  )
}

export default Contact