import React from 'react'
import ContactUs from '../components/shared/Contact'
import Header from '../components/shared/Header'
import App from '../App'
import AppAppBar from '../components/shared/AppAppBar'

function ContactUsPage() {
  return (
   <>
   <Header isAuthenticated="false" title="Sign Up" link="/sign-up"/>
   <ContactUs/>
   </>
  )
}

export default ContactUsPage