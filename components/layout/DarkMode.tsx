import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';

import {lightModeRequest, darkModeRequest} from '../../reducers/layoutReducer';

const DarkMode = () => {

    const dispatch = useDispatch();
    const { themeMode } = useSelector((state: any) => state.layoutReducer);

    const handleThemeMode = useCallback(() => {
        if (themeMode === "light") {
            dispatch(darkModeRequest());
        } else if (themeMode === "dark") {
            dispatch(lightModeRequest());
        }
    }, [themeMode]);

    return (
        <ModeChange>
            <ThemeModeButton onClick={handleThemeMode}>
                {themeMode === "light" ? <div>L</div> : <div>D</div>}
            </ThemeModeButton>
        </ModeChange>
    )
}

const ModeChange = styled.div`
    display : flex;
    text-align : center;
    line-height : 22px;
    font-size : 14px;
    font-weight : 700;
    font-family: 'Noto Sans KR', sans-serif;
`

const ThemeModeButton = styled.div`
    width : 30px;
    height : 30px;
    color : ${({ theme }) => theme.mode.PrimaryColor};
    border-radius : 30px;
    background-color : ${({ theme }) => theme.mode.PointColor};
    text-align : center;
    padding : 3px 0;
    cursor : pointer;
`

export default DarkMode;