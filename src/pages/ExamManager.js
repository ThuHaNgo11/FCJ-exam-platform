import { Heading, Button } from "@aws-amplify/ui-react"
import MainLayout from "../components/MainLayout"
import { Link } from "react-router-dom"
import ExamList from "../components/exam/ExamList"

const ExamManager = () => {
    return (
        <MainLayout>
            <Heading level={3}>Exam manager</Heading>
            <Link to="/exam/create">
                <Button>Create</Button>
            </Link>
            <ExamList />
        </MainLayout>
    )
}

export default ExamManager