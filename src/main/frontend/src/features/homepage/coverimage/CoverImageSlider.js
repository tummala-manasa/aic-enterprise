import React from 'react';
import styled from 'styled-components';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const Container = styled.div`
  background-color: #FFF;
`;

const Image = styled.img`
  width: 100vw;
`;

const Button = styled.a`
  text-decoration: none;
  color: black;
  border: 1px solid black;
  padding: 15px 30px;
`;

const Content = styled.div`
  position: absolute;
  left: 50vw;
  top: 30px;
`;

const Title = styled.div`
  font-size: 46px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Description = styled.div`
  width: 40vw;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 80px;
`;

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const CoverImageSlider = () => {

  return (
    <Container id='cover_image_slider_id'>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={400000}
        bullets={false}
        style={{ height: '450px' }}
      >
        <div className='cover-image'>
          <Image src="/images/cover_image1.png" />

          <Content>
            <Title>Efficient Customer Service</Title>
            <Description>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi</Description>
            <Button href='/' >EXPLORE</Button>
          </Content>
        </div>
        
        <div className='cover-image'>
          <Image src="/images/cover_image2.png" />
          
          <Content>
            <Title>In time delivery</Title>
            <Description>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi</Description>
            <Button href='/' >EXPLORE</Button>
          </Content>
        </div>

        <div className='cover-image'>
          <Image src="/images/cover_image0.png" />
          <Content>
            <Title>Wide Range Products</Title>
            <Description>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi</Description>
            <Button href='/' >EXPLORE</Button>
          </Content>
        </div>
      </AutoplaySlider>
    </Container>
  )
}
