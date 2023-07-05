import {SendEmailCommand} from "@aws-sdk/client-ses";
import {sesClient} from "./lib/sesClient.js";

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const createSendEmailCommand = (toAddress, fromAddress, body, subject) => {
    return new SendEmailCommand({
        Destination: {
            ToAddresses: [
                toAddress,
            ],
        },
        Message: {
            /* required */
            Body: {
                /* required */
                Html: {
                    Charset: "UTF-8",
                    Data: body,
                },
            },
            Subject: {
                Charset: "UTF-8",
                Data: subject,
            },
        },
        Source: fromAddress,
    });
};


export const handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    for (const record of event.Records) {
        console.log(record.eventID);
        console.log(record.eventName);
        console.log('DynamoDB Record: %j', record.dynamodb);

        //pull off items from stream
        const examLink = record.dynamodb.NewImage.examLink.S
        const toAddress = record.dynamodb.NewImage.toAddress.S
        const fromAddress = record.dynamodb.NewImage.fromAddress.S
        const subject = record.dynamodb.NewImage.subject.S
        const body = record.dynamodb.NewImage.body.S

        const sendEmailCommand = createSendEmailCommand(
            toAddress,
            process.env.SES_EMAIL,
            body,
            subject
        );


        if (record.eventName === 'INSERT') {
            try {
                return await sesClient.send(sendEmailCommand);
            } catch (e) {
                console.error("Failed to send email.");
                return e;
            }
        }
    }
};
