
import { withAuthenticator, View } from '@aws-amplify/ui-react'

import NavBar from './NavBar';

const MainLayout = ({ signOut, user, children }) => {
  return (
    <View className="main">
      <NavBar userName={user.username} signOut={signOut}/>
      <View className="content">
        {children}
      </View>
    </View> 
  )
}

export default withAuthenticator(MainLayout);