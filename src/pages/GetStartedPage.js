import React, { useState } from 'react'

// import Amplify UI components
import { Heading, View, Card, Flex, Text, Button } from '@aws-amplify/ui-react'

// import components
import LandingPageNavBar from '../components/LandingPageNavBar'


const GetStartedPage = () => {

    return (
        <View>
            <LandingPageNavBar/>
            <Heading level={3} textAlign={'center'}>User guide and demo video</Heading>
            <Text textAlign={'center'}>To be added ...</Text>
        </View>
    )
}

export default GetStartedPage;