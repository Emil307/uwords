import React from 'react';
import styled from 'styled-components';
// features
import SignUpForm from '../../features/SignUpForm';
// shared
import Logo from '../../shared/Logo';
import Title from '../../shared/Title';
import Copyright from '../../shared/Copyright';
// images
import fon from '../../images/fon.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 1170px;
  height: calc(100vh - 70px);
  padding: 42px 15px 28px;
  margin: 0 auto;
`

const Offer = styled.div`
  height: 354px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #ABE6EE;
  margin-top: 3px;
`

const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
`

const SignUp: React.FC = () => {
  return (
    <Container>
      <div>
        <Logo/>
      </div>
      <Offer>
        <div>
          <Title fontSize={36}>Sign up</Title>
          <Text>Greeting! Please, enter your account</Text>
        </div>
        <SignUpForm/>
      </Offer>
      <div>
        <Copyright>© 2023, Bignose corporation</Copyright>
      </div>
      <Image src={fon} alt="" />
    </Container>
  )
}

export default SignUp