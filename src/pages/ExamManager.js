import {Heading, Button, Card, Text} from "@aws-amplify/ui-react"
import MainLayout from "../components/MainLayout"
import {Link} from "react-router-dom"
import ExamList from "../components/exam/ExamList"
import {FaPlus} from "react-icons/fa";

const ExamManager = () => {
    return (
        <MainLayout>
            <Card>
                <Heading level={3} textAlign="center">Exam manager</Heading>
                <Link to="/exam/create">
                    <Button>
                        <FaPlus/>
                        <Text paddingLeft="5px">Create</Text>
                    </Button>
                </Link>
                <ExamList/>
            </Card>
        </MainLayout>
    )
}

export default ExamManager