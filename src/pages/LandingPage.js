import React, {useState} from 'react'

// import Amplify UI components
import {Heading, View, Card, Flex, Text, Button} from '@aws-amplify/ui-react'

// import components
import LandingPageNavBar from '../components/LandingPageNavBar'
import NavBar from '../components/NavBar'

import {useAuthenticator} from '@aws-amplify/ui-react'
import { Navigate } from 'react-router';

import {RxRocket} from "react-icons/rx";
import "../css/landing-page.css"

const LandingPage = () => {

    const {route} = useAuthenticator(context => [context.route])
    const {user, signOut} = useAuthenticator(context => [context.user])
    const [redirectedPath, setRedirectedPath] = useState("")
    const redirect = (path) => {
        return (event) => {
            event.preventDefault()
            event.stopPropagation()
            setRedirectedPath(path)
        }
    }

    return (
        <View>
            {
                !!redirectedPath && <Navigate to={redirectedPath} />
            }
            {
                route === "authenticated" ? <NavBar userName={user.username} signOut={signOut}/> : <LandingPageNavBar/>
            }
            <View>
                <Flex direction="column" justifyContent="space-between">
                    <Card textAlign="center" class="landing-banner">
                        <Heading level={1} textAlign="center">Welcome AWS builders</Heading>
                        FCJ Exam Platform for creating workshop quizzes
                    </Card>
                    <Flex height="calc(100vh - 350px)" direction="column" justifyContent="center" alignItems="stretch" gap="20px">
                        <Flex direction="row" justifyContent="center" gap="3vw">
                            <Flex className="intro-box" direction="row" justifyContent="flex-start" gap="1em" wrap="wrap"
                                  onClick={redirect("/questions")}>
                                <img alt="" width="100px" height="100px" src={"/assets/img/question.png"} />
                                <Flex direction="column" width="calc(25vw - 130px)" minWidth="120px">
                                    <Heading level={3} textAlign="center">Question Bank</Heading>
                                    <Text>Manage question bank and create more question contents.</Text>
                                </Flex>
                            </Flex>
                            <Flex className="intro-box" direction="row" justifyContent="flex-start" gap="1em" wrap="wrap"
                                  onClick={redirect("/tests")}>
                                <img alt="" width="100px" height="100px" src={"/assets/img/test.png"} />
                                <Flex direction="column" width="calc(25vw - 130px)" minWidth="120px">
                                    <Heading level={3} textAlign="center">Test Manager</Heading>
                                    <Text>Pick questions from the question bank to compile tests.</Text>
                                </Flex>
                            </Flex>
                            <Flex className="intro-box" direction="row" justifyContent="flex-start" gap="1em" wrap="wrap"
                                  onClick={redirect("/exams")}>
                                <img alt="" width="100px" height="100px" src={"/assets/img/exam.png"} />
                                <Flex direction="column" width="calc(25vw - 130px)" minWidth="120px">
                                    <Heading level={3} textAlign="center">Exam Manager</Heading>
                                    <Text>Pick predefined tests and set up exams for test takers.</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex direction="row" justifyContent="space-evenly">
                            <Flex direction="column" className="get-started-box" alignItems="center" width="87vw">
                                <RxRocket size='80' color="white"/>
                                <Heading level={3}>Learn more to begin creating quizzes for your workshops.</Heading>
                                <Button className="get-started-button" onClick={redirect('/get-started')}>Get Started</Button>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </View>
        </View>
    )
}

export default LandingPage;