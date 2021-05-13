import React, { useRef, useEffect, VFC } from 'react'
import { gsap, TimelineMax } from 'gsap';
import styled from 'styled-components';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface Props {
    img?: string;
}

const SubImageContainer:VFC<Props> = ({ img }) => {

    gsap.registerPlugin(ScrollTrigger); 

    const ImgRef = useRef(null);
    const ImgContainerRef = useRef(null);

    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ImgContainerRef.current,
                toggleActions: "restart none none reset"
            }
        });
        tl.to(ImgRef.current, { duration: 1, opacity: 1, delay: 0})
        .from(ImgRef.current, {
            duration: 1,
            scale: 1.4,
            ease: "Power2.easeInOut",
            delay: -1.2
        });
    })


    return (
        <ImgContainer ref={ImgContainerRef}>
            <img src={img} ref={ImgRef} alt={img}/>
        </ImgContainer>
    )
}

const ImgContainer = styled.div`
  position: relative;
  overflow: hidden;
  
  & > img {
    width: 100%;
    opacity: 0;
  }
`

const Overlay = styled.div`
    content: "";
    position: absolute;
    width: 0%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.mode.PointColor};
    z-index : 1;
`

export default SubImageContainer;