import React from "react";
import styled from "styled-components";
import { CallToActionButton } from "./CallToActionButton";
import BG from "../../assets/img/header-background.jpg";

const HeroStyles = styled.div`
    background-image: url(${BG});
    background-repeat: no-repeat;
    background-attachment: local;
    background-position: center center;
    background-size: auto;
    min-height: 800px;
    width: 100%;
    height: 100%;
`;

const HeroTitle = styled.h1`
    font-size: 9rem;
    text-align: center;
    color: #000000;
    text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    margin: 0;
`;

const HeroParagraph = styled.p`
    color: #000000;
    font-family: "Imprima";
    font-style: normal;
    font-weight: 400;
    font-size: 2.9rem;
    text-align: center;
    text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
`;

const ButtonWrapper = styled.div`
    background-color: "#fffff";
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Hero = () => {
    return (
        <HeroStyles>
            <HeroTitle>Proof of Silo</HeroTitle>
            <HeroParagraph>Be quick before they're gone!</HeroParagraph>
            <ButtonWrapper>
                <CallToActionButton />
            </ButtonWrapper>
        </HeroStyles>
    );
};
