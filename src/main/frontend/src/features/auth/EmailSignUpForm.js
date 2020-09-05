import React, { useState } from 'react';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import Cookies from 'universal-cookie';

import { Line } from '../homepage/common/Line';
import { Spinner } from '../utils/Spinner';

const Container = styled.form`
`;

const Button = styled.button`
  width: 300px;
  background-color: #7795a3;
  color: #FFF;
  border: none;
  padding: 15px 0;
  font-size: 14px;
  cursor: pointer;
  position: relative;
`;

const ErrorMsg = styled.div`
  color: red;
  margin-top: 10px;
  text-align: center;
`;

const Separator = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const OrLabel = styled.div`
  margin: -5px 10px 0 10px;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoogleIcon = styled(FcGoogle)`
  cursor: pointer;
`;


export const EmailSignUpForm = () => {
  const cookies = new Cookies();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSignUp = async (e) => {
    e.preventDefault();
    if (!(name && email && phoneNumber && password && confirmPassword)) {
      setErrorMsg('All fields are mandatory');
    } else if (password !== confirmPassword) {
      setErrorMsg('The Passwords you entered do not match');
    } else if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setErrorMsg('Invalid E-mail address');
    } else if (password.length < 8) {
      setErrorMsg('Password is too short (minimum is 8 characters)');
    } else {
      setErrorMsg(null);
      const headers = { 
        'Content-Type': 'application/json'
      }
      const userDetails = { name, email, phoneNumber, password };
      console.log('userDetails', userDetails)
      try {
        setIsLoading(true);
        const signUpResponse = await axios.post('/api/users/sign-up', userDetails, { headers });
        
        if (signUpResponse.data.status === 409) {
          setErrorMsg('This Email address is already registered');
        } else if (signUpResponse.data.status === 200) {
          const loginResponse = await axios.post('/login', userDetails, { headers });
          const token = loginResponse.headers.authorization.split(' ')[1];
          cookies.set('auth_token', token);
          setIsLoading(false);
          window.location.href = '/';
        }
      } catch (err) {
        setIsLoading(false);
        console.log('Exception while siging up the user', userDetails, err.message);
      }

    }
  }


  return (
    <Container>
      <div className='group'>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <span className='highlight'></span>
        <span className='bar'></span>
        <label>Name*</label>
      </div>

      <div className='group'>
        <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
        <span className='highlight'></span>
        <span className='bar'></span>
        <label>Email*</label>
      </div>

      <div className='group'>
        <input type='text' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
        <span className='highlight'></span>
        <span className='bar'></span>
        <label>Phone No*</label>
      </div>
        
      <div className='group'>      
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
        <span className='highlight'></span>
        <span className='bar'></span>
        <label>Password*</label>
      </div>

      <div className='group'>      
        <input type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        <span className='highlight'></span>
        <span className='bar'></span>
        <label>Confirm Password*</label>
      </div>

      <Button onClick={handleOnSignUp}>
        Sign Up
        {isLoading ? 
          <Spinner 
            containerStyle={{ top: 0, justifyContent: 'flex-end', right: '15px' }} 
            loaderStyle={{ fontSize: '15px', color: '#FFF' }} 
          /> : 
          null}
      </Button>

      <ErrorMsg>{errorMsg}</ErrorMsg>

      <Separator>
        <Line style={{ width: '100px', marginLeft: '0', marginRight: '0' }}/>
        <OrLabel>or sign up with</OrLabel>
        <Line style={{ width: '100px', marginLeft: '0', marginRight: '0' }}/>
      </Separator>

      <SocialMedia>
        <GoogleIcon size='2em' />
      </SocialMedia>
    </Container>
  )
}
