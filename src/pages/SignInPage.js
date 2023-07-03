import { React} from 'react';
import { View, useAuthenticator } from '@aws-amplify/ui-react';

import { Navigate } from 'react-router';

// import amplify ui connected components
import { Authenticator } from '@aws-amplify/ui-react';

//import components
import LandingPageNavBar from '../components/LandingPageNavBar';

const SignInPage = () => {

    const { route } = useAuthenticator(context => [context.route])

    return (
        route === "authenticated" ?
            <Navigate to="/" /> : (
                <View>
                    <LandingPageNavBar />
                    <Authenticator initialState="signIn" />
                </View>
            )
    )
}

export default SignInPage;