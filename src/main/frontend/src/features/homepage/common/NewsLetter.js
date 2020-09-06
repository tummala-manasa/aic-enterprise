import React from 'react';
import styled from 'styled-components';
import { FaTelegramPlane } from 'react-icons/fa';

const Container = styled.div`
  background-color: #232162;
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.div`
  margin-bottom: 10px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 22vw;
  height: 120px;
  font-size: 18px;
  background-color: #FFF;
`;

const PlaneIcon = styled(FaTelegramPlane)`
  background-color: #232162;
  border-radius: 4px;
  color: #FFF;
  padding: 2px 4px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Or = styled.div`
  position: absolute;
  border: 1px solid #0000001c;
  border-radius: 25px;
  background-color: #FFF;
  padding: 15px;
  font-size: 12px;
`;
const OrBorder = styled.div`
  position: absolute;
  border: 1px solid black;
  border-radius: 25px;
  background-color: #FFF;
  padding: 10px;
  font-size: 12px;
`;

const EmailInput = styled.input`
  padding: 7px 12px;
  font-size: 12px;
  width: 15vw;
`;




export const NewsLetter = () => {
  return (
    <Container>
      <ContentBox style={{ marginRight: '20px' }}>
        <Label>Best Services</Label>
        <div>123-456-7890</div>
      </ContentBox>
      <ContentBox>
        <Label>Sign up for Newsletter</Label>
        <InputContainer>
          <EmailInput type='text' placeholder='Your Email Address'></EmailInput>
          <PlaneIcon />
        </InputContainer>
      </ContentBox>
      <Or>OR</Or>
      <OrBorder>OR</OrBorder>
    </Container>
  )
}