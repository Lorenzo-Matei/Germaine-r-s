import React from "react";

import {
  Button,
  Card,
  CardBody,
  Form,
  FormInput,
  FormGroup,
} from "shards-react";
import "./sign-in-page.styles.scss";
import Background from "../../assets/images/backgrounds/vector1.jpg";
import { FaMailBulk } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";

const SignInPage = () => {
  const { search } = useLocation(); // react hook,
  const redirectInUrl = new URLSearchParams(search).get("redirect"); // passes search object and then grabs redirect query
  const redirect = redirectInUrl ? redirectInUrl : "/"; // checks redirectinurl if it exists otherwise default url is '/'

  return (
    <div className="signin-page-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>

      <Card className="signin-card">
        <CardBody
          className="signup-leftside"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 id="signup-title">New here?</h1>
          <p id="signup-subtitle">
            Sign up to stay up to date on cutting edge industry equipment!
          </p>
          <hr id="signup-hr" />
          <Link to={`/sign-in?redirect=${redirect}`}>
            <Button id="signup-btn" outline pill theme="danger">
              {/* if user is new, redirect user to signup page and set querying string to url fetched in redirect */}
              Sign Up Now!
            </Button>
          </Link>
        </CardBody>
        <div id="signin-rightside">
          <h1 id="signin-title">Sign-In</h1>
          <p id="signin-subtitle">Welcome back</p>

          <Form className="login-forms">
            <FormGroup>
              {/* <label htmlFor="#username">Email</label> */}
              <FormInput id="#username" placeholder="Email" required />
            </FormGroup>
            <FormGroup>
              {/* <label htmlFor="#password">Password</label> */}
              <FormInput
                type="password"
                id="#password"
                placeholder="Password"
                required
              />
            </FormGroup>
          </Form>
          <p id="forgot-password">forgot your password?</p>

          <Button id="signin-btn" outline pill theme="success" type="submit">
            Sign In!
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SignInPage;
