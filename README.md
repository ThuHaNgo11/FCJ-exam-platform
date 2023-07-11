# FCJ Exam Platform 
<!-- description -->
This is a full-stack web application that ... **[Try out the deployed application here](https://d2k5b8bzo1vefz.cloudfront.net/)**!

The entire application - frontend, backend, and all configuration - can deployed in your AWS account.
&nbsp;

## Outlines


## Description

The goal of AWS Full-Stack Template is to provide ...

**Database components**

**Application components**

* Serverless service backend 
* Web application
  
**Infrastructure components**

&nbsp;

## architecture

**Summary diagram**

![Summary diagram](readmeImages/SummaryDiagram.png)

&nbsp;

**High-level, end-to-end diagram**

![High-level architectural diagram](readmeImages/ArchDiagram.png)

&nbsp;

**Frontend**

Build artifacts are stored in a S3 bucket where web application assets are maintained (web graphics, etc.). Amazon CloudFront caches the frontend content from S3, presenting the application to the user via a CloudFront distribution.  The frontend interacts with Amazon Cognito and Amazon API Gateway only.  Amazon Cognito is used for all authentication requests, whereas API Gateway (and Lambda) is used for all API calls to DynamoDB.

**Backend**

The core of the backend infrastructure consists of Amazon Cognito, Amazon DynamoDB, AWS Lambda, and Amazon API Gateway. The application leverages Amazon Cognito for user authentication, and Amazon DynamoDB to store all of the data for the goals. 

![Backend diagram](readmeImages/BackendDiagram.png)

&nbsp;

## Cost

## Implementation

## Known limitations

## Contribution guidelines
