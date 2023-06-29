import React, { useEffect, useState } from 'react';

// import UI components
import {
    View,
    Heading,
    Button,
    Flex,
    Text
} from '@aws-amplify/ui-react';
import { useParams } from 'react-router';

import { getExamForSession } from '../api/examApi';

const initialState = {

}

const TakeExamPage = () => {
    // states
    let {examid, sessionid} = useParams()

    useEffect(() => {
        console.log(examid)

        const fetchExamData = async () => {
            let examData = await getExamForSession(examid)
            console.log(examData)
        }
        fetchExamData()
    },[examid])

    return (
        <View>
            <Heading level={3}>Exam name</Heading>
            <Flex>
                <Text>Exam date</Text>
                <Text>Organization</Text>
            </Flex>
            <Flex>
                <Text>Exam description</Text>
                <Text>Exam instruction</Text>
            </Flex>
        </View>
    )
}


export default TakeExamPage;