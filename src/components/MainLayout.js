/* src/App.js */
import React, { Children, useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { withAuthenticator, Button, Heading, Text, TextField, View } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import awsExports from "../aws-exports"

Amplify.configure(awsExports);

const MainLayout = ({ signOut, user, children }) => {
  return (
    <View className="main">
      <Heading level={1}>Hello {user.username}</Heading>
      <Button onClick={signOut}>Sign out</Button>
      <Heading level={2}>Amplify Todos</Heading>
      <View className="content">
        {children}
      </View>
    </View>
  )
}

export default withAuthenticator(MainLayout);