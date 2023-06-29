/* src/App.js */

// landing page - prompt login or signup
// -> if logged in, show dashboard

import { useEffect, useState } from 'react'
import { Button, Heading, Text, TextField, View } from '@aws-amplify/ui-react'
import NavBar from '../components/NavBar'

const LandingPage = () => {
  return (
    <View>
      <NavBar />  
      <Heading level={1}>Welcome AWS builders</Heading>
    </View>
  )
}

export default LandingPage