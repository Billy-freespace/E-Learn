import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import loginService from "../services/login";

const SignInSide = (match) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      console.log("username: " + username);
      console.log("password: " + password);
      const usuario = await loginService.login({ username, password });
      console.log("usuario: " + usuario);
      setUser(usuario);
      console.log(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      setError("Wrong credentials");
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  // useEffect(() => {}, []);

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="/logo.png" /> Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleLogin}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              value={username}
              iconPosition="left"
              placeholder="E-mail address"
              onChange={(event) => setUsername(event.target.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              value={password}
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="/">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default SignInSide;
