import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//shared
import FormInput from '../shared/FormInput';
import Button from '../shared/Button';
import Link from '../shared/Link';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 252px;
  width: 406px;
`

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 175px;
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      window.location.href = "/words";
    }
  }, [])

  function getUser(token: string) {
    fetch('http://localhost:8000/api/v1/auth/users/me', {
      method : 'GET',
      headers : {"Authorization": token},
    })
    .then (response => response.text())
    .then (response => {
      response = JSON.parse(response);
      localStorage.setItem('user', JSON.stringify(response));
      
    })
  }

  function getToken(e: any, formData: any) {
    e.preventDefault();
    fetch('http://localhost:8000/auth/token/login/', {
      method : 'POST',
      body : formData,
    })
    .then (response => response.text())
    .then (response => {
      response = JSON.parse(response);
      const token = "Token " + (response as any).auth_token;
      localStorage.setItem('token', token);
      if (token != "Token undefined") {
        getUser(token);
      }
    })
  }

  function regForm(e: any) {
    const formData = new FormData(e.target);

    e.preventDefault();
    fetch('http://localhost:8000/api/v1/auth/users/', {
      method : 'POST',
      body : formData,
    })
    .then (async response => {
      response = JSON.parse(await response.text());
      const status = response.status;
      if (status == 200) {
        getToken(e, formData);
      }
    }).catch((err: unknown) =>  {
      console.error(err);
    })
  }

  return (
    <Form onSubmit={regForm}>
      <Inputs>
        <FormInput placeholder='E-mail' type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <FormInput placeholder='Password' type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      </Inputs>
      <Buttons>
        <Button width='150px' height='41px'>Continue</Button>
        <Link href='/auth'>Sign in</Link>
      </Buttons>
    </Form>
  )
}

export default SignUpForm;