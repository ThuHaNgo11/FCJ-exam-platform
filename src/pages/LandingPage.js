
import React from 'react'

// import Amplify UI components
import { Heading, View } from '@aws-amplify/ui-react'

// import components
import LandingPageNavBar from '../components/LandingPageNavBar'
import NavBar from '../components/NavBar'

import {useAuthenticator} from '@aws-amplify/ui-react'

const LandingPage = () => {

  const {route} = useAuthenticator(context => [context.route])
  const {user, signOut} = useAuthenticator(context => [context.user])

  return (
    <View>
      {
        route === "authenticated" ? <NavBar userName={user.username} signOut={signOut} /> : <LandingPageNavBar />
      }
      <Heading level={1}>Welcome AWS builders</Heading>
    </View>
  )
}

export default LandingPage;