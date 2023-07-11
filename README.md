# FCJ Exam Platform 
<!-- description -->
This is a full-stack web application that provides a solution for online assessment - authoring test contents and delivering examinations.

**[Try out the deployed application here](https://d1swv02b0ramfa.cloudfront.net/)**!

The entire application - frontend, backend, and all configuration - can be deployed in AWS cloud environment. 
&nbsp;

## Outlines
<!-- Table of content -->

## Description

The project demonstrates the capabilities of AWS amplify in building cloud native full stack application... (what and how, why - purpose and objective)

## Built with
<!-- add image, description and link of each library -->

**Authorization**
Cognito ...

**Frontend**
- Amplify UI with React framework
- Amplify Connected components for authentication and data storage
- React Bootstrap
- MomentJS
- React Router
- UseImmer
- Js PDF
- React icons

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

**Summary diagram**

![Summary diagram](readmeImages/SummaryDiagram.png)

&nbsp;

**High-level, end-to-end diagram**

![High-level architectural diagram](readmeImages/ArchDiagram.png)

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

#### Build local dev environment 
- Run `npm install`
- Run `amplify push`
- Start local dev server: `npm start`
- Local dev server should run on `http://localhost:3000`

## Known limitations

## Contribution guidelines
