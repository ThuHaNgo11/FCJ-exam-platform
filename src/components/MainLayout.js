
import { withAuthenticator, Button, Heading, View } from '@aws-amplify/ui-react'

import NavBar from './NavBar';

const MainLayout = ({ signOut, user, children }) => {
  return (
    <View className="main">
      <NavBar />
      <Heading level={1}>Hello {user.username}</Heading>
      <Button onClick={signOut}>Sign out</Button>
      <Heading level={2}>AWS knowledge check</Heading>
      <View className="content">
        {children}
      </View>
    </View>
  )
}

export default withAuthenticator(MainLayout);