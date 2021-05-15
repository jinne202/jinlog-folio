import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Copyright>Copyright © 2021 | All rights reserved. | HAN EUNJIN</Copyright>
    )
}

const Copyright = styled.p`
    text-align : center;
    color : ${({ theme }) => theme.mode.TextColor};
    opacity : 0.6;
    font-size : 12px;
    width : 100%;
    padding : 30px 0;
`

export default Footer;