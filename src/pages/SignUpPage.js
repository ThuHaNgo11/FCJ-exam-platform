import { React, useEffect} from 'react';
import { View, useAuthenticator } from '@aws-amplify/ui-react';

import { Navigate } from 'react-router';

// import amplify ui connected components
import { Authenticator } from '@aws-amplify/ui-react';

//import components
import LandingPageNavBar from '../components/LandingPageNavBar';

const SignUpPage = () => {

    const { route } = useAuthenticator(context => [context.route])

    const authContext = useAuthenticator(context => context)

    useEffect(() => {
        console.log(authContext)
    }, [authContext])
    

    return (
        route === "authenticated" ?
            <Navigate to="/" /> : (
                <View>
                    <LandingPageNavBar />
                    <Authenticator initialState="signUp" />
                </View>
            )
    )
}

export default SignUpPage;