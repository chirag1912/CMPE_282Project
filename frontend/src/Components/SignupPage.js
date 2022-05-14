import React from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';
import {useHistory, Link} from 'react-router-dom';
import backendServer from '../webConfig.js';
import GoogleLogin from 'react-google-login';

function SignupPage() {

    const[firstName, changeFirstName] = useState("");
    const[lastName, changeLastName] = useState("");
    const[email, changeEmail] = useState("");
    const[password, changePassword] = useState("");
    const[validationText, changeValidationText] = useState("");

    const history = useHistory();

    const handleSignup = async (event) =>{
        event.preventDefault();
        console.log(firstName, lastName, email, password);

        const data = {
            firstName: firstName,
            lastName: lastName,
            email : email,
            password : password
        }


        try{
            const response = await axios.post(`${backendServer}/signup`, data);
            if(response.status === 200){
                console.log("Signup Successful");
                console.log("response data", response.data);
                localStorage.setItem("email",email);
                localStorage.setItem("firstName",firstName);
                localStorage.setItem("lastName",lastName);
                localStorage.setItem("id",response.data.result[0].user_id);
                
                history.push('/search');
            }

            if(response.status === 209){
                console.log("User already exists");
                changeValidationText("Email already exists. Please another email address.");
            }
            
            

        }catch(error){
            console.log(error);
        }
        

    }
    const responseGoogle = (response) => { 
        console.log(response.profileObj.givenName)
            console.log(firstName)
            console.log(lastName)
            const data = {
                firstName: response.profileObj.givenName,
                lastName: response.profileObj.familyName,
                email : response.profileObj.email,
                password : ''
            }
            console.log(data)
            axios.post(`${backendServer}/signup`, data).then((res)=>{
                console.log(res)
            if(res.status === 200){
                console.log("Signup Successful");
                localStorage.setItem("email",email);
                localStorage.setItem("firstName",firstName);
                localStorage.setItem("lastName",lastName);
                localStorage.setItem("id",res.data.result[0].user_id);
                
                history.push('/search');
            }

            if(res.status === 209){
                console.log("User already exists");
                changeValidationText("Email already exists. Please another email address.");
            }
            })
    

      }

    return (
        <div>
            <h1>Signup Page!</h1>
            <Container>
            <Row>
                <Col></Col>
                <Col xs={6}>
                    <Form>

                        <Form.Group className="mb-3" controlId="formBasicFName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter First Name"
                            value={firstName}
                            onChange = {(event)=>{
                                changeFirstName(event.target.value);
                            }}
                            />
                        </Form.Group>
                        

                        <Form.Group className="mb-3" controlId="formBasicLName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter Last Name"
                            value={lastName}
                            onChange = {(event)=>{
                                changeLastName(event.target.value);
                            }}
                            
                            />
                        </Form.Group>
                        
                        

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" 
                            placeholder="Enter Email"
                            value = {email}
                            onChange = {(event)=>{
                                changeEmail(event.target.value);
                            }}
                            
                            />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" 
                            placeholder="Password"
                            value ={password}
                            onChange={(event)=>{
                                changePassword(event.target.value);
                            }}
                            />
                        </Form.Group>
                        
                        
                        <Button 
                        variant="primary"
                         type="submit"
                         onClick={(event)=>{
                            handleSignup(event);
                         }}
                         >
                            Submit
                        </Button>
                    </Form>
                    <p style={{color:"red"}}>{validationText}</p>
                
                </Col>
                <Col></Col>
            </Row>
            <p>------or------</p>
            <GoogleLogin
                clientId="174007546581-v7v03f0hl42dqaf5rhp7p2mmc3rvgjqs.apps.googleusercontent.com"
                buttonText="Sign-Up"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />

            </Container>
            
        </div>
    )
}

export default SignupPage;
