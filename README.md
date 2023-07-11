# FCJ Exam Platform 
<!-- description -->
This is a full-stack web application that provides a solution for online assessment - authoring test contents and delivering examinations.

**[Try out the deployed application here](https://d1swv02b0ramfa.cloudfront.net/)**!

The entire application - frontend, backend, and all configuration - can be deployed in AWS cloud environment. 
&nbsp;

## Outlines
<!-- Table of content -->

## Description

The project demonstrates the capabilities of AWS amplify in building cloud native full stack application.

**Authorization**
Cognito ...

**Frontend**
- Amplify UI with React framework
- Connected components for authentication and data storage 

**Backend**
- Database: DynamoDB
- AWS AppSync GraphQL API: Data management 
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

## Implementation

## Known limitations

## Contribution guidelines
