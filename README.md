# CMPE_282Project

## Flight booking Application
### Deployed URL:http://44.203.36.137:3000/

## Group Members:
Satish Kathariya/
Rahul Sharma/
Bhargav Shah/
Chirag Rajpal

## Features of the Project:
Okta Sign-On Integration

–Okta based  (Links to an external site.)Cloud Single Sign-on (SSO) / AD

–Cloud based database/datastore backend

–Cloud based Web portal for viewing/browsing (sample) enterprise data (with SSO login)

–Github  (Links to an external site.)integrated into SSO (for all project code)

–Cloud based Jenkins, integrated into SSO and Github repo; e.g., Continuous Deployment on AWS with AWS  (Links to an external site.)CodePipeline (Links to an external site.), Jenkins and AWS Elastic Beanstalk (Links to an external site.)

–Additional integrations / features / capabilities for higher grade [layered security, social media integration, document repository, SFDC integration, etc..]

–For top marks, solution should use a modern approach, e.g. serverless, etc..

–You can choose an alternate project with instructor consent

## Pre-requisites Set Up:

### Frontend:
Node.js -Version 12 https://nodejs.org/en/

Frontend Technologies: NPM, HTML, React, Bootstrap, Material UI.

To run React application in local:
1)npm install
2)npx create-react-app .
2)npm start

Server will be running on ‘http://localhost:3000’ 

## Backend SetUp:
Requirements:

set following environment variables values:
AWS_ACCESS_KEY_ID = os.getenv("AWS_ACCESS_KEY_ID", None)
AWS_SECRET_ACCESS_KEY = os.getenv("AWS_SECRET_ACCESS_KEY", None)
AWS_REGION = os.getenv("AWS_REGION", None)
COGNITO_USER_POOL_ID = os.getenv("COGNITO_USER_POOL_ID", None)
COGNITO_APP_CLIENT_ID = os.getenv("COGNITO_APP_CLIENT_ID", None)
S3_BUCKET = os.getenv("S3_BUCKET", None)
S3_URL = os.getenv("S3_BUCKET", None)
CLOUD_FRONT_URL = os.getenv("CLOUD_FRONT_URL", None)

## Project Deliverables attached with this Git Repo
–Project Plan in .docx format. Here’s a good template

–Project Presentation in .pptx format

–Project Report: .docx format, including design patterns, diagrams, use/test cases, screenshots, etc.

–15 minute live project presentation, where each team member MUST present/speak for a portion

–Code (checked into github, with references in Project Report: https://github.com/sjsu-cmpe282

## Screenshots of working aplication:
Home Page:
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/22998071/168347107-fc2fbec8-1003-4a33-911d-12fcd782cb24.png">

Login Page:
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/22998071/168347226-fcb8edc9-d590-419c-9925-1cde0cf5dfb2.png">

Sign Up Page:
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/22998071/168347490-dbe15f30-ff8b-4dd2-9681-b4b52fa1b3c3.png">


## EC2 Integration Autoscaling and Deployment:
https://docs.google.com/document/d/1vZsREyHEh7hq0DCgmzB9wk-32S0CiOE_kVN_fg9SMF0/edit
