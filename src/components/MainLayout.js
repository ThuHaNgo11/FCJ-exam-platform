/* src/App.js */
import React, { Children, useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { withAuthenticator, Button, Heading, Text, TextField, View } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import awsExports from "../aws-exports"

Amplify.configure(awsExports);

const MainLayout = ({signOut, user, children }) => {
  return (
    <View style={styles.container}>
      <Heading level={1}>Hello {user.username}</Heading>
      <Button style={styles.button} onClick={signOut}>Sign out</Button>
      <Heading level={2}>Amplify Todos</Heading>
      {children}
    </View>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
}

export default withAuthenticator(MainLayout);