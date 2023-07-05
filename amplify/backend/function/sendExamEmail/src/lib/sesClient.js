import { SESClient } from "@aws-sdk/client-ses";
// Set the AWS Region.
const REGION = "ap-southeast-1";
// Create SES service object.
const sesClient = new SESClient({ region: REGION });
export { sesClient };