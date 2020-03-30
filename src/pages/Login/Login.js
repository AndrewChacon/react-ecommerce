import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Login.scss';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/auth';
import { connect } from 'react-redux';

const Login = ({ login, isAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async e => {
    e.preventDefault();
    login({ email, password });
  };
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="login">
      <h1>Login</h1>
      <Form onSubmit={e => onSubmit(e)}>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button>Login</Button>
        <FormText color="muted">
          <Link to="/register">Dont have an account?</Link>
        </FormText>
      </Form>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
