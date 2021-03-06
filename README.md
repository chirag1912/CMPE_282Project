# CMPE_282Project

## Flight booking Application
### Deployed URL:http://44.203.36.137:3000/

### Google Slides: https://docs.google.com/presentation/d/17hPO0HpxleU4qtJdADPeYIy4DIdteiPpKjeWXLJXmas/edit#slide=id.p

## Group Members:
Satish Kathariya

Rahul Sharma

Bhargav Shah

Chirag Rajpal

## Features of the Project:

–Google Single SignOn based Integration

–Cloud based database/datastore backend

–Cloud based Web portal for viewing/browsing (sample) enterprise data (with SSO login)

–Github integrated into SSO (for all project code)

–Cloud based Jenkins, integrated into SSO and Github repo; e.g., Continuous Deployment on AWS with AWS  (Links to an external site.)CodePipeline (Links to an external site.), Jenkins and AWS Elastic Beanstalk (Links to an external site.)

## Pre-requisites Set Up:

### Frontend and Backend Setup:
Node.js -Version 12 https://nodejs.org/en/

Frontend Technologies: NPM, HTML, React, Bootstrap, Material UI.

To run React application in local:
1)npm install
2)npx create-react-app .
2)npm start

Server will be running on ‘http://localhost:3000’ 

## Project Deliverables attached with this Git Repo
–Project Plan in .docx format. Here’s a good template

–Project Presentation in .pptx format

–Project Report: .docx format, including design patterns, diagrams, use/test cases, screenshots, etc.

–15 minute live project presentation, where each team member MUST present/speak for a portion

–Code (checked into github, with references in Project Report: https://github.com/sjsu-cmpe282

## Screenshots of working aplication:
Home Page:
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/22998071/168347107-fc2fbec8-1003-4a33-911d-12fcd782cb24.png">

Sign Up Page:
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/22998071/168347490-dbe15f30-ff8b-4dd2-9681-b4b52fa1b3c3.png">

Login Page:
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/22998071/168347226-fcb8edc9-d590-419c-9925-1cde0cf5dfb2.png">

## Jenkins Screenshots(Continuos Integration and Development):
Installation of jenkins on local Computer
<img width="990" alt="Screen Shot 2022-05-13 at 5 45 24 PM" src="https://user-images.githubusercontent.com/19584278/168404486-f78b192a-a12e-46ef-aa74-63db929ad775.png">

![login](https://user-images.githubusercontent.com/19584278/168404696-d0abec53-8621-4351-bb35-962587a99628.png)
![d1](https://user-images.githubusercontent.com/19584278/168404724-7487c571-160a-4de7-b569-0efdeeb9eec0.png)
![d2](https://user-images.githubusercontent.com/19584278/168404727-3e967bba-0a3c-4bb4-84b0-058dbf6d3e80.png)
![d3](https://user-images.githubusercontent.com/19584278/168404734-2bf8a86d-f3eb-4c9b-9775-dd2aacffd560.png)
![d4](https://user-images.githubusercontent.com/19584278/168404738-d232a92d-cb19-403f-9f50-3232e1efee4a.png)
![d5](https://user-images.githubusercontent.com/19584278/168404744-809a8843-6c76-43ee-aa05-e163d6b8d0f3.png)

## EC2 Integration Autoscaling and Deployment:
https://docs.google.com/document/d/1vZsREyHEh7hq0DCgmzB9wk-32S0CiOE_kVN_fg9SMF0/edit

Steps taken to deploy the Application to EC2 instance with LoadBalancer and Autoscaling enabled:
EC2 instance with AWS_CMPE_282 has been created:
![image](https://user-images.githubusercontent.com/22998071/168374242-6c3e489e-22c1-4d11-a18a-6a9727c9196a.png)



Git version: 2.32.0 is installed on the EC2 git version.

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/22998071/168374597-33b72a10-971e-4aa5-a8e4-77c3205826a3.png">

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/22998071/168374532-48a65469-1dfe-4b2c-a6ad-43f7436c372f.png">


Once the Backend is successfully running, the Database connection successful message is displayed on the console:

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/22998071/168374746-04b05e8c-568b-40b1-9e96-39d19f9ae307.png">

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/22998071/168402398-f9d17cf0-6796-4bb1-9e0f-ccf44ce480ed.png">

Autoscaling and Load Balacer are deployed for the EC2 instance created:

The frontend code has been deployed as well.

## The application is running on the instance:
http://44.203.36.137:3000/


