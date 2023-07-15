import React from 'react'

// import Amplify UI components
import {Heading, View, Card, Flex, Text} from '@aws-amplify/ui-react'

// import components
import LandingPageNavBar from '../components/LandingPageNavBar'
import NavBar from '../components/NavBar'

import {useAuthenticator} from '@aws-amplify/ui-react'
import "../css/landing-page.css"

const LandingPage = () => {

    const {route} = useAuthenticator(context => [context.route])
    const {user, signOut} = useAuthenticator(context => [context.user])

    return (
        <View>
            {
                route === "authenticated" ? <NavBar userName={user.username} signOut={signOut}/> : <LandingPageNavBar/>
            }
            <View>
                <Flex direction="column" justifyContent="space-between">
                    <Card textAlign="center" class="landing-banner">
                        <Heading level={1} textAlign="center">Welcome AWS builders</Heading>
                        FCJ Exam Platform for creating workshop quizzes
                    </Card>
                    <Flex direction="row" justifyContent="space-evenly" height="160px" margin="150px 0 0 0">
                        <Card className="intro-box">
                            <Flex direction="row" justifyContent="flex-start" gap="1em">
                                <img width="110px" src={"/assets/img/question.png"} />
                                <Flex direction="column" width="300px">
                                    <Heading level={3} textAlign="center">Question Manager</Heading>
                                    <Text>Manage question bank and create more question contents.</Text>
                                </Flex>
                            </Flex>
                        </Card>
                        <Card className="intro-box">
                            <Flex direction="row" justifyContent="flex-start" gap="1em">
                                <img width="110px" src={"/assets/img/test.png"} />
                                <Flex direction="column" width="300px">
                                    <Heading level={3} textAlign="center">Test Manager</Heading>
                                    <Text>Pick questions from the question back to compile tests.</Text>
                                </Flex>
                            </Flex>
                        </Card>
                        <Card className="intro-box">
                            <Flex direction="row" justifyContent="flex-start" gap="1em">
                                <img width="110px" src={"/assets/img/exam.png"} />
                                <Flex direction="column" width="300px">
                                    <Heading level={3} textAlign="center">Exam Manager</Heading>
                                    <Text>Pick predefined tests and set up exams for test takes.</Text>
                                </Flex>
                            </Flex>
                        </Card>
                    </Flex>
                </Flex>
            </View>
        </View>
    )
}

export default LandingPage;