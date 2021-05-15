import React, { useRef, useEffect } from 'react';
import { gsap }from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styled from 'styled-components';
import Link from 'next/link';

import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import ImageContainer from '../components/ImageContainer/ImageContainer';

const myImage = require('../static/image/MyImage.png');
const ProjectImage = require('../static/image/sample.jpeg');
const projectFR = require('../static/image/projectFR.png');
const projectDC = require('../static/image/projectDC.png');
const projectDP = require('../static/image/projectDP.png');
const projectZNone = require('../static/image/projectZNone.png');
const projectZNtwo = require('../static/image/projectZNtwo.png');
const projectMC = require('../static/image/projectMC.jpg');



import { FrontendSvg, DeveloperSvg, AboutmeSvg, myProjectSvg, ContactSvg } from '../static/svg/Svg';


const Index = () => {

  gsap.registerPlugin(ScrollTrigger); 


  const divRef = useRef(null);
  const firstSvgRef = useRef(null);
  const secondSvgRef = useRef(null);
  const aboutmeSvgRef = useRef(null);
  const myProejctSvgRef = useRef(null);
  const contactSvgRef = useRef(null);
  const timeline = gsap.timeline({defaults: {ease: "SlowMo.easeOut"}});


  useEffect(() => {
    timeline.from(divRef.current.childNodes, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });

    gsap.to(firstSvgRef.current, {
      x: "200px",
      duration: 1,
      scrollTrigger: {
        trigger: firstSvgRef.current,
        markers: false,
        start: "top center",
        end: "bottom 0px",
        scrub: true,
      }
    });

    gsap.to(secondSvgRef.current, {
      x: "-200px",
      duration: 1,
      scrollTrigger: {
        trigger: secondSvgRef.current,
        markers: false,
        start: "top center",
        end: "bottom 0px",
        scrub: true,
      }
    });

    gsap.to(aboutmeSvgRef.current, {
      x: "-500px",
      duration: 1,
      scrollTrigger: {
        trigger: aboutmeSvgRef.current,
        markers: false,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.to(myProejctSvgRef.current, {
      x: "500px",
      duration: 1,
      scrollTrigger: {
        trigger: myProejctSvgRef.current,
        markers: false,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.to(contactSvgRef.current, {
      x: "-400px",
      duration: 1,
      scrollTrigger: {
        trigger: contactSvgRef.current,
        markers: false,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });
  }, []);

  return (
    <>
    <Layout/>
    <MainWrapper>
      <FirstSection >
        <SvgWrapper ref={firstSvgRef}>
          {FrontendSvg}
        </SvgWrapper>
        <SecondSvgWrapper ref={secondSvgRef}>
          {DeveloperSvg}
        </SecondSvgWrapper>
        <TextWrapper ref={divRef}>
          <Title>Han eunjin</Title>
          <SecondTitle>Front-end</SecondTitle>
          <ThirdTitle>Developer -</ThirdTitle>
          <FourthTitle>and I love UI/UX</FourthTitle>
        </TextWrapper>
      </FirstSection>
      <SecondSection>
        <AboutmeSvgWrapper ref={aboutmeSvgRef}>
          {AboutmeSvg}
        </AboutmeSvgWrapper>
        <AboutWrapper>
          <LeftWrapper>
            <LeftFlexWrapper>
              <LeftImg>
                        <img src={myImage} alt="프로필사진" />
              </LeftImg>
              <LineOne>Step up &</LineOne>
            </LeftFlexWrapper>
            <LineTwo>- design code</LineTwo>
          </LeftWrapper>
          <RightWrapper>
            <CircleTextWrapper>
              <CircleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
              <defs>
              <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle_top">
              <animateTransform attributeName="transform" begin="0s" dur="20s" type="rotate" from="0 250 250" to="360 250 250" repeatCount="indefinite" />
              </path>
              <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle_bottom">
              <animateTransform attributeName="transform" begin="0s" dur="20s" type="rotate" from="195 250 250" to="555 250 250" repeatCount="indefinite" />
              </path>
            </defs>
              <CircleText dy="70" textLength="1220">
                  <textPath href="#textcircle_top">&#128171; Have to strive for</textPath>
                  <textPath href="#textcircle_bottom">make good code</textPath>
              </CircleText>
            </CircleSvg>
            </CircleTextWrapper>
            <RightOne>
              <p>2015-2017<br/>계원예술대학교 디지털미디어디자인 전문학사</p>
              <p>2017-2020<br/>홍익대학교 디지털미디어디자인 학사</p>
            </RightOne>
            <RightTwo>
              디자인과 프로그래밍을 이해하며, 그 사이를 이어주는 프론트엔드 개발자를 목표로 하고 있습니다. 상상하던 것들을 직접 구현하는 것에 재미를 느끼며, 새로운 기술을 배우는 데 있어 적극적으로 도전하고 싶습니다. 
            </RightTwo>
          </RightWrapper>
        </AboutWrapper>
      </SecondSection>
      <ThirdSection>
        <MyProjectSvgWrapper ref={myProejctSvgRef}>
          {myProjectSvg}
        </MyProjectSvgWrapper>
        <ProjectWrapperReverse>
          <ProjectInfo>
            <ProjectTitle>FRONTROW<br/>E-COMMERCE</ProjectTitle>
            <ProjectDesc>
              <span>React / React-Redux / Styled Component</span>
              이커머스의 기능을 구현한 쇼핑몰입니다.
            </ProjectDesc>
            <ProjectButton>
              View Github
            </ProjectButton>
            <Link href="https://frontrow-store.herokuapp.com/">
              <a>
              <ProjectSubButton>
                View Demo
              </ProjectSubButton>
              </a>
            </Link>
          </ProjectInfo>
          <ProjectImgWrapper>
            <ImageContainer img={projectFR}/>
          </ProjectImgWrapper>
        </ProjectWrapperReverse>
        <ProjectWrapper>
          <ProjectImgWrapper>
            <ImageContainer img={projectDC}/>
          </ProjectImgWrapper>
          <ProjectInfo>
            <ProjectTitle>Discord<br/>ChatService</ProjectTitle>
            <ProjectDesc>
              <span>React / SWR / @emotion-styled</span>
              챗 서버와 디엠 기능을 SWR을 통해 만든 디스코드 클론 프로젝트입니다.
            </ProjectDesc>
            <ProjectButton>
              View Github
            </ProjectButton>
          </ProjectInfo>
        </ProjectWrapper>
        <ProjectWrapperReverse>
          <ProjectInfo>
            <ProjectTitle>Dajeong Pay</ProjectTitle>
            <ProjectDesc>
              <span>React / Next.js / React-Redux / Styled Component</span>
              간단한 카운터 기능을 추가해 제작한 전시용 사이트입니다.
            </ProjectDesc>
            <ProjectButton>
              View Github
            </ProjectButton>
            <ProjectSubButton>
              View Demo
            </ProjectSubButton>
            <ProjectNotice>해당 프로젝트는 디자이너의 요구로 <br/> 1920해상도에서만 원활하게 보이도록 제작되었습니다.</ProjectNotice>
          </ProjectInfo>
          <ProjectImgWrapper>
            <ImageContainer img={projectDP}/>
          </ProjectImgWrapper>
        </ProjectWrapperReverse>
        <ProjectWrapper>
          <ProjectImgWrapper>
            <ImageContainer img={projectMC}/>
          </ProjectImgWrapper>
          <ProjectInfo>
            <ProjectTitle>New McDonald's<br/>Kiosk</ProjectTitle>
            <ProjectDesc>
              <span>Processing / Websocket</span>
              졸업프로젝트로 진행한 음성인식으로 주문 가능한 키오스크입니다.
            </ProjectDesc>
            <Link href="/project/mckiosk">
            <ProjectButton>
              View Project
            </ProjectButton>
            </Link>
          </ProjectInfo>
        </ProjectWrapper>
        <ProjectWrapperReverse>
          <ProjectInfo>
            <ProjectTitle>ZERONINEZ</ProjectTitle>
            <ProjectDesc>
              <span>React / Next.js / React-Redux/ Redux-saga / Styled Component</span>
              디자인 솔루션 회사 제로나인즈의 회사 소개 사이트를 제작했습니다.
            </ProjectDesc>
            <ProjectButton>
              View Github
            </ProjectButton>
          </ProjectInfo>
          <ProjectImgWrapper>
            <ImageContainer img={projectZNone}/>
            <ImageContainer img={projectZNtwo}/>
          </ProjectImgWrapper>
        </ProjectWrapperReverse>
      </ThirdSection>
      <FourthSection>
          <ContactSvgWrapper ref={contactSvgRef}>
            {ContactSvg}
          </ContactSvgWrapper>
          <ContactWrapper>
              <ContactBox>
                <span>E-MAIL</span>
                <a href="mailto:hanb5468@gmail.com">
                <p>hanb5468@gmail.com</p>
                </a>
              </ContactBox>
              <ContactBox>
                <span>GITHUB</span>
                <a href="https://github.com/jinne202" target="_blank">
                <p>github.com/jinne202</p>
                </a>
              </ContactBox>
              <ContactBox>
                <span>LINKEDIN</span>
                <a href="https://www.linkedin.com/in/jinne-han/" target="_blank">
                <p>linkedin.com/in/jinne-han/</p>
                </a>
              </ContactBox>
              <ContactBox>
                <span>ROCKETPUNCH</span>
                <a href="https://rocketpunch.com/@hanb5468" target='_blank'>
                  <p>rocketpunch.com/@hanb5468</p>
                </a>
              </ContactBox>
              <ContactBox>
                <span>INSTAGRAM</span>
                <a href="https://www.instagram.com/jinne_com/" target="_blank">
                <p>@jinne_com</p>
                </a>
              </ContactBox>
          </ContactWrapper>
      </FourthSection>
      <Footer/>
    </MainWrapper>
    </>
  )
}

const MainWrapper = styled.div`
  background-color : ${({ theme }) => theme.mode.PrimaryColor};
  overflow-x: hidden;
`


const FirstSection = styled.div`
  position : relative;
  width : 100%;
  display : inline-block;
  padding : 0 5%;
`

const TextWrapper = styled.div`
  position : relative;
`

const Title = styled.h2`
  font-size : 9vw;
  font-weight : 600;
  margin : 15vh 0 0 0;
  color : ${({ theme }) => theme.mode.TextColor};
  transform : translateY(0);
  font-family : 'Poppins', sans-serif;

  @media (min-width: 631px) and (max-width: 1024px) {
        margin : 25vh 0 0 0;
  }

  @media (max-width: 630px) {
        margin : 35vh 0 0 0;
  }
`

const SecondTitle = styled(Title)`
  color : ${({ theme }) => theme.mode.PointColor};
  margin : 0 0 0 0;
  text-align : right;
`

const ThirdTitle = styled(Title)`
  color : ${({ theme }) => theme.mode.PointColor};
  margin : 0 0 10px 0;
`

const FourthTitle = styled(Title)`
  text-align : right;
  margin : 0 0 10px 0;
  color : ${({ theme }) => theme.mode.PointColor};
`

const SvgWrapper = styled.div`
  position : absolute;
  top : 25vh;
  right : 15%;
  opacity : 0.3;

  & > svg > path {
    fill : ${({ theme }) => theme.mode.PointColorDark};
  }

  @media (min-width: 631px) and (max-width: 768px) {
        width : 400px;

        & > svg {
          width : 100%;
        }
  }

  @media (max-width: 630px) {
        width : 300px;
        right : 35%;

        & > svg {
          width : 100%;
        }
  }
`

const SecondSvgWrapper = styled(SvgWrapper)`
  top : 45vh;
  left : 10%;
`

const SecondSection = styled.div`
  width : 100%;
  height : 1000px;
  display : inline-block;
  padding : 0 5%;
  position : relative;
  font-family : 'Poppins', sans-serif;
`

const AboutWrapper = styled.div`
  display : flex;
  padding : 40vh 50px;
  width : 100%;
  z-index : 1;
  position : relative;

  @media (min-width: 631px) and (max-width: 768px) {
    display : block;
  }

  @media (max-width: 630px) {
    display : block;
    padding : 40vh 20px;
  }
`

const LeftWrapper = styled.div`
  display : block;
  width : 50%;

  @media (min-width: 769px) and (max-width: 1024px) {
    width : 60%;
  }

  @media (max-width: 768px) {
    width : 100%;
  }
`

const LeftFlexWrapper = styled.div`
  display : flex;
`

const LeftImg = styled.div`
  width : 140px;
  height : 90px;

  & > img {
    width : 100%;
    height : 100%;
    object-fit : cover;
  }

  @media (max-width: 630px) {
    width : 90px;
    height : 60px;
  }
`

const LineOne = styled.p`
  font-size : 90px;
  margin : 0 0 0 17px;
  font-weight : 500;
  color : ${({ theme }) => theme.mode.TextColor};
  letter-spacing : -10px;

  @media (min-width: 631px) and (max-width: 1024px) {
    font-size : 70px;
    letter-spacing : -7px;
  }

  @media (max-width: 630px) {
    font-size : 50px;
    letter-spacing : -5px;
  }
`

const LineTwo = styled.p`
  font-size : 90px;
  font-weight : 500;
  color : ${({ theme }) => theme.mode.TextColor};
  letter-spacing : -10px;

  @media (min-width: 631px) and (max-width: 1024px) {
    font-size : 70px;
    letter-spacing : -7px;
  }

  @media (max-width: 630px) {
    font-size : 50px;
    letter-spacing : -5px;
  }
`

const RightWrapper = styled.div`
  color : ${({ theme }) => theme.mode.TextColor};
  display : flex;
  width : 50%;
  margin : 100px 0 0 0;
  font-size : 14px;
  position : relative;
  font-family: 'Noto Sans KR', sans-serif;

  @media (min-width: 769px) and (max-width: 1439px) {
    display : block;
    width : 40%;
    margin : 0 0 0 10px;
  }

  @media (max-width: 768px) {
    width : 100%;
    display : block;
  }
`

const RightOne = styled.div`
  width : 50%;
  line-height : 150%;
  margin : 0 0 0 10px;

  & > p {
    margin : 0 0 20px 0;
  }

  @media (min-width: 631px) and (max-width: 1439px) {
    width : 100%;
    margin : 0 0 0 0;
  }

  @media (max-width: 630px) {
    width : 100%;
    margin : 0 0 0 0;
  }
`

const RightTwo = styled.div`
  width : 50%;
  line-height : 150%;

  @media (min-width: 631px) and (max-width: 1439px) {
    width : 100%;
  }

  @media (max-width: 630px) {
    width : 100%;
    margin : 0 0 0 0;
  }
`

const CircleTextWrapper = styled.div`
  position : absolute;
  top : -30vh;
  left : -12%;

  @media (min-width: 769px) and (max-width: 1024px) {
    top : -15vh;
  }

  @media (max-width: 768px) {
    left : 75%;
    right : 100px;
    top : -13vh;
  }
  
`

const CircleSvg = styled.svg`
    height : 25vh;

    @media (max-width: 1024px) {
    height : 15vh;
  }
`

const CircleText = styled.text `
    font-size: 40px;
    font-family : 'Poppins', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 11px;
    fill: ${({ theme }) => theme.mode.PointColorSecond};
`

const ThirdSection = styled.div`
    width : 100%;
    display : inline-block;
    padding : 0 5%;
    position : relative;
    font-family : 'Poppins', sans-serif;
`

const ProjectWrapper = styled.div`
  display : flex;
  margin : 0 0 400px 0;

  @media (max-width: 768px) {
    display : block;
    width : 100%;
    margin : 0 0 200px 0;
  }
`

const ProjectWrapperReverse = styled(ProjectWrapper)`
  @media (max-width: 768px) {
    display : block;
    display: flex;
    flex-direction: column-reverse;
    width : 100%;
  }
`

const ProjectImgWrapper = styled.div`
  width : 60%;

  @media (max-width: 768px) {
    width : 100%;
  }
`

const ProjectInfo = styled.div`
  width : 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin : 0 0 0 30px;
  padding : 0 20px 0 0;

  @media (min-width: 769px) and (max-width: 768px) {
    width : 100%;
  }

  @media (max-width: 768px) {
    width : 100%;
    margin : 50px 0 0 0;
  }
`

const ProjectTitle = styled.h4`
  color : ${({ theme }) => theme.mode.TextColor};
  font-size : 70px;
  font-weight : 500;
  letter-spacing : -7px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size : 50px;
    letter-spacing : -3px;
  }

  @media (max-width: 768px) {
    font-size : 40px;
    letter-spacing : -3px;
  }
`

const ProjectDesc = styled.p`
  margin : 50px 0 0 0;
  color : ${({ theme }) => theme.mode.TextColor};
  font-size : 14px;
  line-height : 150%;
  font-family: 'Noto Sans KR', sans-serif;

  & > span {
    margin : 0 0 20px 0;
    display : block;
    font-family : 'Poppins', sans-serif;
  }
`

const ProjectButton = styled.button`
  width : 250px;
  height : 50px;
  cursor: pointer;
  background-color : transparent;
  border : 2px solid ${({ theme }) => theme.mode.SecondaryColor};
  font-size : 14px;
  color : ${({ theme }) => theme.mode.TextColor};
  transition: all 0.3s ease;
  margin : 50px 0 0 0;
  display : block;

  &:hover {
    background-color : ${({ theme }) => theme.mode.SecondaryColor};
    color : ${({ theme }) => theme.mode.PrimaryColor};
  }
`

const ProjectSubButton = styled(ProjectButton)`
  margin : 20px 0 0 0;
`

const ProjectNotice = styled.p`
  font-size : 12px;
  color : ${({ theme }) => theme.mode.TextColor};
  opacity : 0.8;
  margin : 20px 0 0 0;
  line-height : 150%;
  font-family: 'Noto Sans KR', sans-serif;
`

const AboutmeSvgWrapper = styled(SvgWrapper)`
  display : block;
  right : 0;

  @media (min-width: 631px) and (max-width: 1024px) {
        width : 700px;
        right : -200px;

        & > svg {
          width : 100%;
        }
  }
`

const MyProjectSvgWrapper = styled(SvgWrapper)`
  display : block;
  top : -200px;
  left : -100px;

  @media (min-width: 631px) and (max-width: 1024px) {
        width : 700px;

        & > svg {
          width : 100%;
        }
  }
`

const ContactSvgWrapper = styled(SvgWrapper)`
  display : block;
  top : -100px;
  left : 500px;
  pointer-events : none;

  @media (min-width: 631px) and (max-width: 1024px) {
        width : 700px;
        left : 200px;

        & > svg {
          width : 100%;
        }
  }

  @media (max-width: 630px) {
    left : 450px;
  }
`

const FourthSection = styled.div`
  width : 100%;
  display : inline-block;
  padding : 0 5%;
  position : relative;
  font-family : 'Poppins', sans-serif;
  margin : 0 0 200px 0;
  display : flex;
  justify-content : flex-end;

  @media (max-width: 768px) {
    justify-content : center;
  }
`

const ContactWrapper = styled.div`
  width : 50%;

  @media (max-width: 630px) {
    width : 90%;
  }
`

const ContactBox = styled.div`
  display : flex;
  margin : 0 0 50px 0;
  width : 100%;

  & > span {
    color : ${({ theme }) => theme.mode.PointColor};
    font-weight : 500;
    letter-spacing : 2px;
    width : 160px;
    font-size : 14px;
    display : block;
  }

  & > a > p {
    color : ${({ theme }) => theme.mode.TextColor};
    cursor: pointer;
  }

  @media (max-width: 630px) {
    margin : 0 0 20px 0;

    & > span {
      font-size : 12px;
      display : block;
    }

    & > a > p {
      font-size : 14px;
    }
  }
`

export default Index;