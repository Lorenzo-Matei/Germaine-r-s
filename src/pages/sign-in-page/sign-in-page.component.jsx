import React from 'react';

import { Button, Card, CardBody, Form, FormInput, FormGroup } from 'shards-react';
import './sign-in-page.styles.scss';
import Background from '../../assets/images/backgrounds/vector1.jpg'
import {FaMailBulk} from 'react-icons/fa'

const SignInPage = () => {
    return (
        // <div className='signin-page-container'>
            <Card className='signin-card'>
                <CardBody className='signup-leftside' style={{  
                backgroundImage: `url(${Background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }}>
                    <h1 id='signup-title'>New here?</h1>
                    <p id='signup-subtitle'>Sign up to stay up to date on cutting edge industry equipment!</p>
                    <hr id='signup-hr'/>
                    <Button id='signup-btn' outline pill theme='danger'>Sign Up Now!</Button>

                </CardBody>
                <div id='signin-rightside'>
                    <h1 id='signin-title'>Sign-In</h1>
                    <p id='signin-subtitle'>Welcome back</p>


                    <Form  className='login-forms'>
                        <FormGroup >
                            {/* <label htmlFor="#username">Email</label> */}
                            <FormInput id="#username" placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            {/* <label htmlFor="#password">Password</label> */}
                            <FormInput type="password" id="#password" placeholder="Password" />
                        </FormGroup>
                    </Form>
                    <p id='forgot-password'>forgot your password?</p>

                    <Button id='signin-btn' outline pill theme='success'>Sign In!</Button>

                </div>


            </Card>
            
            

        // </div>

    )

}

export default SignInPage;
