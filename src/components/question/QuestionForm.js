// import Amplify UI
import {Heading, TextAreaField, View, TextField, Loader, Flex, Button, Image, ButtonGroup} from "@aws-amplify/ui-react"
import {StorageManager} from '@aws-amplify/ui-react-storage';
import ThemedAmplifyButton from "../ui/ThemedAmplifyButton";

// import API
import {saveQuestion} from "../../api/questionApi";

// import React
import {useState} from "react"
import {useImmer} from "use-immer";
import {delay, getImmerChangeHandler} from "../../hooks/utils";
import {useLocation, useNavigate} from "react-router";
import {Storage} from "aws-amplify";
import moment from "moment";

const initialState = {
    prompt: 'Please enter question prompt.',
    data: {},
    key: 1,
    choices: [
        {key: 1, value: 'This is choice 1.'},
        {key: 2, value: 'This is choice 2.'},
        {key: 3, value: 'This is choice 3.'},
        {key: 4, value: 'This is choice 4.'},
    ]
}

const QuestionForm = () => {
    const location = useLocation()

    const navState = location.state || initialState

    const [formState, setFormState] = useImmer(navState)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()

    const handleChanges = getImmerChangeHandler(setFormState)
    const loadImg = async (path) => {
        return await Storage.get(path)
    }

    const handleChoiceChange = (event) => {
        setFormState(
            formState => {
                formState.choices.find(c => {
                    return c.key.toString() === event.target.dataset.key.toString()
                }).value = event.target.value
            }
        )
    }

    const handleKeyChange = (event) => {
        setFormState(
            formState => {
                formState.key = parseInt(event.target.dataset.key)
            }
        )
    }

    const handleSaveButton = (event) => {
        event.preventDefault()
        setIsSubmitting(true)

        const field = (!formState.hasOwnProperty('id')) ? 'createQuestion' : 'updateQuestion'

        saveQuestion(formState)
            .then((data) => {
                console.log("Created new data", data.data[field])
                // wait 2s for the data to be available on OpenSearch
                delay(2000).then(
                    () => navigate('/questions', {replace: true})
                )
            }, (reason) => {
                console.log(reason)
            })
    }

    const handleRemoveImage = () => {
        setFormState(
            formState => {
                if (!!formState.data && !!formState.data.image) {
                    if (!formState.deletedImages) {
                        formState.deletedImages = [formState.data.image]
                    } else {
                        formState.deletedImages.push(formState.data.image)
                    }
                    formState.data.image = null
                    formState.data.imageUrl = null
                }
            }
        )
    }


    return (
        <Flex direction="column" alignItems="center" padding="5px">
            <View width="50vw">
                <Flex direction="column" alignItems="stretch" padding="5px">
                <Heading level={3} textAlign="center">Compose Question</Heading>
                <TextAreaField name='prompt' value={formState.prompt} onChange={handleChanges}></TextAreaField>
                {!!formState.data && !!formState.data.image &&
                    <>
                        <Image
                            alt="question prompt illustration"
                            src={formState.data.imageUrl}
                            maxHeight="300px"
                            maxWidth="100%"
                            alignSelf="center"
                        />
                        <Button onClick={handleRemoveImage}>Remove Image</Button>
                    </>
                }
                <StorageManager
                    acceptedFileTypes={['image/*']}
                    accessLevel="public"
                    maxFileCount={1}
                    displayText={{
                        dropFilesText: !!formState.data && !!formState.data.image ? 'Replace image' : 'Upload optional image'
                    }}
                    onUploadSuccess={(data) => {
                        console.log(data)
                        loadImg(data.key).then(
                            (imageUrl) => {
                                setFormState(
                                    formState => {
                                        if (!!formState.data) {
                                            formState.data.image = data.key
                                            formState.data.imageUrl = imageUrl
                                        } else {
                                            formState.data = {image: data.key, imageUrl: imageUrl}
                                        }
                                    }
                                )
                            }
                        )
                    }}
                    onUploadError={(error) => {
                        console.log(error)
                    }}
                    processFile={({file, key}) => {
                        key = moment().unix() + '-' + key
                        return {key, file}
                    }}
                    isResumable
                />
                {
                    formState.choices.map(
                        (choice, index) => (
                            <Flex key={choice.key} direction="row" alignItems="stretch">
                                <TextField data-key={choice.key} value={choice.value}
                                           onChange={handleChoiceChange}
                                           flex="1"
                                           height="42px"
                                           labelHidden="true"
                                >
                                </TextField>
                                {
                                    (choice.key === formState.key) ?
                                        <ThemedAmplifyButton size="big" variation="primary" colorMode="light">Correct Answer</ThemedAmplifyButton>
                                        : <ThemedAmplifyButton size="big" colorMode="light" data-key={choice.key} onClick={handleKeyChange}>Correct
                                            Answer</ThemedAmplifyButton>
                                }
                            </Flex>
                        )
                    )
                }
                <ButtonGroup>
                    <Button onClick={handleSaveButton}>
                        {isSubmitting && <Loader/>}
                        Save
                    </Button>
                    <Button onClick={() => navigate('/questions', {replace: true})}>Cancel</Button>
                </ButtonGroup>
                </Flex>
            </View>
        </Flex>
    )
}

export default QuestionForm