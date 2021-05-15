import React, { useRef, useEffect } from 'react';
import { gsap }from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styled from 'styled-components';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';

import SubImageContainer from '../../components/SubImageContainer/SubImageContainer';

const projectMC = require('../../static/image/projectMC.jpg');
const mcPhoto1 = require('../../static/image/mcPhoto1.jpg');
const mcPhoto2 = require('../../static/image/mcPhoto2.jpg');

const mckiosk = () => {

    gsap.registerPlugin(ScrollTrigger);
    
    const TitleRef = useRef(null);

    useEffect(() => {
        gsap.to(TitleRef.current, {
            y: "70px",
            duration: 0.4,
            scrollTrigger: {
              trigger: TitleRef.current,
              markers: false,
              start: "top 150px",
              end: "bottom 0px",
              scrub: true,
            }
        });
    })

    return (
        <>
        <Layout/>
        <ProjectWrapper>
            <TitleSection>
            <Title ref={TitleRef}>New McDonald's Kiosk</Title>
            <MainImgWrapper>
                <SubImageContainer img={projectMC}/>
            </MainImgWrapper>
            </TitleSection>
            <InfoSection>
                <LeftInfo>
                    <InfoBox>
                        <span>TIMELINE</span>
                        <p>2019</p>
                    </InfoBox>
                    <InfoBox>
                        <span>TECH STACK</span>
                        <p>Processing</p>
                    </InfoBox>
                </LeftInfo>
                <RightInfo>
                    <InfoTitle>Speech <br/>Recognition-<br/>Kiosk</InfoTitle>
                    <InfoBox>
                        <span>CHALLENGE</span>
                        <p>사람의 자리를 기계가 대체하고 있는 요즘, 조금 더 인간적인 키오스크가 될 수는 없을까하는 생각이 들었습니다. 그래서 메뉴판을 눈으로 확인한 후, 음성으로 주문할 수 있는 키오스크를 제작했습니다. 새로운 맥도날드 키오스크 리디자인입니다. 누구나 디지털 세상에서 소외되지 않을 권리가 있습니다.</p>
                    </InfoBox>
                </RightInfo>
            </InfoSection>
            <PhotoSection>
                <SubImageContainer img={mcPhoto1}/>
                <SubImageContainer img={mcPhoto2}/>
            </PhotoSection>
            <ProjectDesc>
                해당 프로젝트는 홍익대학교 디지털미디어디자인과 2019년 졸업전시 작품입니다. <br/>실제 키오스크를 대여해 음성인식으로 주문할 수 있는 서비스를 구현했습니다.
            </ProjectDesc>
            <Footer/>
        </ProjectWrapper>
        </>
    )
}

const ProjectWrapper = styled.div`
    background-color : ${({ theme }) => theme.mode.PrimaryColor};
    overflow-x: hidden;
    font-family : 'Poppins', sans-serif;
`

const TitleSection = styled.div`
    padding : 150px 10% 0;
    margin : 0 0 100px 0;

    @media (max-width: 630px) {
        margin : 0 0 50px 0;
    }
`

const Title = styled.h3`
    color : ${({ theme }) => theme.mode.TextColor};
    font-size : 7vw;
    font-weight : 500;
    position : relative;
    z-index : 5;
`

const MainImgWrapper = styled.div`
    width : 100%;

    & > img {
        width : 100%;
        height : 800px;
        object-fit : cover;
    }
`

const InfoSection = styled.div`
    padding : 50px 10% 0;
    display : flex;

    @media (max-width: 630px) {
        display : block;
    }
`

const LeftInfo = styled.div`
    width : 40%;

    @media (max-width: 630px) {
        width : 100%;
    }
`

const InfoBox = styled.div`

    margin : 0 0 20px 0;

    & > span {
        color : ${({ theme }) => theme.mode.PointColor};
        font-size : 12px;
        letter-spacing : 3px;
        margin : 0 0 10px 0;
        display : block;
    }

    & > p {
        color : ${({ theme }) => theme.mode.TextColor};
        font-size : 16px;
        line-height : 170%;
        width : 70%;
        font-family: 'Noto Sans KR', sans-serif;
    }

    @media (min-width: 631px) and (max-width: 1024px) {
        & > p {
            width : 90%;
        }
    }

    @media (max-width: 630px) {
        margin : 0 0 40px 0;

        & > p {
            width : 100%;
        }
    }
`


const RightInfo = styled.div`
    width : 60%;

    @media (max-width: 630px) {
        width : 100%;
    }
`

const InfoTitle = styled.p`
    color : ${({ theme }) => theme.mode.TextColor};
    font-size : 6vw;
    font-weight : 600;
    margin : 0 0 40px 0;
    line-height : 150%;

    @media (max-width: 630px) {
        & > br {
            display : none;
        }
    }
`

const PhotoSection = styled.div`
    padding : 150px 10% 0;
    margin : 0;

    & > img {
        width : 100%;
        height : 800px;
        object-fit : cover;
    }
`

const ProjectDesc = styled.p`
    padding : 0 10% 0;
    margin : 100px 0 200px 0;
    color : ${({ theme }) => theme.mode.TextColor};
    opacity : 0.5;
    font-size : 14px;
    line-height : 150%;
    text-align : center;
    font-family: 'Noto Sans KR', sans-serif;

    @media (max-width: 630px) {
        & > br {
            display : none;
        }
    }
`


export default mckiosk;