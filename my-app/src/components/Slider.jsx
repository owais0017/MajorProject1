import React from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {slideItems} from '../data'
import { useState } from 'react';



const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    height: 50px;
    width: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    position: absolute;
    margin: auto;
    left:${props => props.direction === "left" && "10px"};
    right:${props => props.direction === "right" && "10px"};
    opacity: 0.5;
    cursor: pointer;

`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex * -100}vw)
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${props => props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    padding: 50px;
`
const Image = styled.img`
    height: 80%;

`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    font-size: 20px;
    margin: 50px 0px;
    font-weight: 500;
    letter-spacing: 3px;
` 
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const HandClick = (direction) => {
           if(direction === "left"){
               setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
           }else{
                 setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
            }
} 
  return (
    <Container>
        <Arrow direction="left" onClick={()=>HandClick("left")}>
            <ArrowLeftOutlinedIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {slideItems.map(item=>(
                <Slide bg={item.bg}>
                <ImgContainer>
                    <Image src={item.src}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.Desc}</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
                ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>HandClick("right")}>
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider