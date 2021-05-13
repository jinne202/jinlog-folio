import React from 'react';
import styled from 'styled-components';
import DarkMode from './DarkMode';
import Link from 'next/link';

const Layout = () => {
    return (
        <LayoutWrapper>
            <DarkMode/>
            <Link href="/">
            <Title>
                &lt;jin.log/&gt;
            </Title>
            </Link>
        </LayoutWrapper>
    )
}

const LayoutWrapper = styled.div`
    width : 100%;
    padding : 30px 5%;
    position : fixed;
    z-index : 1000;
    display : flex;
`

const Title = styled.h1`
    font-size : 24px;
    padding : 2px 0 0 0;
    font-weight : 700;
    margin : 0 0 0 20px;
    color : ${({ theme }) => theme.mode.TextColor};
    cursor: pointer;
`

export default Layout;