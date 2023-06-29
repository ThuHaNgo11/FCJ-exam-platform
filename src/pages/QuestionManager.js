import '../components/MainLayout';
import MainLayout from '../components/MainLayout';
import QuestionCreateForm from '../ui-components/QuestionCreateForm';

const QuestionManager = () => {
    return (
        <MainLayout>
            <QuestionCreateForm />
        </MainLayout>
    )
}

export default QuestionManager;