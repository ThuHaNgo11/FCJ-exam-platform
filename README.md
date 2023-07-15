# FCJ Exam Platform 
<!-- description -->
This is a full-stack web application that provides a solution for online assessment - authoring test contents and delivering exams.
User (admin) performs CRUD operation on Questions, Tests, and Exams Databases. When exam is ready to delivered, admin sends email with test link to exam taker(s). Answers will be graded and customed certificate will be ready for download with passed result. 

**[Try out the deployed application here](https://d1swv02b0ramfa.cloudfront.net/)**

Demo credential (username/password): testUser/testUser123

The entire application - frontend, backend, and all configuration - can be deployed in AWS cloud environment. 
&nbsp;

## Outlines
<!-- Table of content -->

## Description

The project demonstrates the capabilities of AWS amplify in building cloud native full stack application. 

## Built with
<!-- add image, description and link of each library -->

**Authorization**
- Cognito

**Frontend**
- Amplify UI with React framework
- Amplify Connected components for authentication and data storage
- React Bootstrap
- MomentJS
- React Router
- UseImmer
- Js PDF
- React icons
- ReactMultiEmail

**Backend**
- Database: DynamoDB
- AWS AppSync GraphQL API: Data management
- OpenSearch
- SES triggered by Lambda subcription to graphQL data change
- S3 storage 

**Hosting**
- Cloudfront and S3: Build artifacts are stored in a S3 bucket where web application assets are maintained (web graphics, etc.). Amazon CloudFront caches the frontend content from S3, presenting the application to the user via a CloudFront distribution.

&nbsp;

## architecture

**High-level, end-to-end**

![High-level architectural diagram](readme-img/fcj-exam-platform-architecture.png)

**Frontend architecture**
![Frontend architecture](readme-img/frontend-architecture.png)

**Backend architecture**
![Backend architecture](readme-img/backend-architecture.png)

**Detailed architecture**
![Detailed architecture](readme-img/detailed-architecture.png)

&nbsp;

## Cost

## Getting started
To get your local up and running, please follow this set up guide:

### Prerequisites
- Install [Node.js®](https://nodejs.org/en/download), [NPM](https://docs.npmjs.com/getting-started), and [Git](https://git-scm.com/) if they are not already on your machine.
- Verify that you are running at least Node.js version 14.x, npm version 6.14.x, Git version 2.14.x or greater by running node -v and npm -v in a terminal/console window
- [Create AWS Account](https://portal.aws.amazon.com/billing/signup#/start/email). If you don't already have an AWS account, you'll need to create one in order to follow the next steps.
  
### Installation 

#### Set up Amplify environement 
- Create an empty directory and change current directory to that
- Run `amplify init --app <github url>`
- Follow prompts to install Amplify CLI and configure it to connect to your AWS account
- Check `src/aws-exports.js` is created
- Configure SES verified identities via SES Console.
For dev environment which use SES sandbox, only verified identities can send or receive emails via SES.
- Update lambda function environment variable:
  - Run `amplify update function`.
  - Choose `sendExamEmail` function
  - Variable name: `SES_EMAIL`
  - Variable value: an email address where email should be sent from. This email address should be verified in SES Console.


#### Build local dev environment 
- Run `npm install`
- Run `amplify push`
- Start local dev server: `npm start`
- Local dev server should run on `http://localhost:3000`

## Known limitations

## Contribution guidelines
