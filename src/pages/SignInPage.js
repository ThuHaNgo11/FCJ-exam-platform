import {React, useEffect, useState} from 'react';
import { View, useAuthenticator } from '@aws-amplify/ui-react';

import { Navigate, useLocation } from 'react-router';

// import amplify ui connected components
import { Authenticator } from '@aws-amplify/ui-react';

//import components
import LandingPageNavBar from '../components/LandingPageNavBar';

const SignInPage = () => {

    const { route } = useAuthenticator(context => [context.route])

    const location = useLocation()

    const [mode, setMode] = useState(location.state || 'signIn')



    useEffect(() => {
        console.log(mode)
    }, [mode])

    return (
        route === "authenticated" ?
        <Navigate to="/" /> : (
        <View>
            <LandingPageNavBar />
            {
                mode === "signIn" ? 
                    <Authenticator initialState="signIn"/> :
                    <Authenticator initialState="signUp"/>
            }
        </View>
        )
    )
}

export default SignInPage;