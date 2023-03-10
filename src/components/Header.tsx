import React from "react";
import styled from "styled-components";
import ToggleButton from "./ToggleButton";

type Props = {
    title: string,
    subtitle?: string,
    theme: string,
    themeToggler: () => void;
};

const Header = ({title, subtitle, theme, themeToggler}: Props) => {

    return(
    <>
        <h1>{title}</h1>
        <HeaderSubtitle>
            {subtitle && <SubtitleContainer>{subtitle}</SubtitleContainer>}
            <ToggleButton label='Toggle light/dark' theme={theme} onClick={themeToggler} />
        </HeaderSubtitle>
    </>
    );
};

const HeaderSubtitle = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const SubtitleContainer = styled.h2`
    font-size: 0.8em;
    font-style: italic;
    font-weight: thin;
`;

export default Header;