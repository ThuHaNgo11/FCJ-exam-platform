import { React} from 'react';
import { View } from '@aws-amplify/ui-react';

import { Navigate } from 'react-router';

// import amplify ui connected components
import { Authenticator } from '@aws-amplify/ui-react';

//import components
import LandingPageNavBar from '../components/LandingPageNavBar';

const SignInPage = () => {

    return (
        <View>
            <LandingPageNavBar />
            <Authenticator initialState="signIn">
                {
                    () => (
                        <Navigate to="/"/>
                    )
                }
            </Authenticator>
        </View>
    )
}

export default SignInPage;