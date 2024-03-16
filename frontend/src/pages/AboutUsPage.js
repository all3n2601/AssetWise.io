import React from 'react'
import AboutUs from '../components/shared/AboutUs'
import Header from '../components/shared/Header'

function AboutUsPage() {
  return (

    <>
     <Header isAuthenticated="false"  title="Sign Up" link="/sign-up"/>
     <AboutUs/>
     
     </>
   
  )
}

export default AboutUsPage