import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.a`
    width: 500px;
    height: 80px;
    background: #11720e;
    border-radius: 28px;
    font-size: 40px;
    text-align: center;
    color: #fdfdfd;
    line-height: 80px;
    text-align: center;
`;

export const CallToActionButton = () => {
    return (
        <ButtonStyle
            href="https://twitter.com/intent/tweet?text=%23ProofOfSilo%20%23POC"
            target="_blank"
        >
            Post a picture on Twitter!
        </ButtonStyle>
    );
};
