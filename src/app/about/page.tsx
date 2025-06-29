import React from 'react'
import { Metadata } from 'next';
import Header from '../components/layouts/header';

export const metadata: Metadata ={
  title: "About IkeDesignDev",
  description: "this is the about page for IkeDesignDev"
}

export default function About() {
  return(
    <>
      <Header 
        title='Finding My Threads' 
        subtitle='How I became a Creative Technologist'
        />
    </>
  )
}

