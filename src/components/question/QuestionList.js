import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {View, Grid} from "@aws-amplify/ui-react";
import {useImmer} from "use-immer";
import {listQuestion} from "../../api/questionApi";


const QuestionList = () => {
    const [questions, setQuestions] = useImmer([])
    const [filter, setFilter] = useImmer({})
    const [nextToken, setNextToken] = useImmer('')

    useEffect(
        () => {
            (async () => {
                let result = await listQuestion()
                setQuestions(result.data.listQuestions.items)
                setNextToken(result.data.listQuestions.nextToken)
            })()

        },
        [filter]
    )
    return (
        <Grid>
        </Grid>
    )
}

export default QuestionList