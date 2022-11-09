import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Hero } from "./components/Hero";
import Scoreboards from "./components/Scoreboards";

const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100vw;
        height: 100vh;
        background: #6bb441;
        padding: 0;
        margin: 0;
        font-family: Imprima, monospace, sans-serif;
    }
    * {
        box-sizing: border-box;
    }
    :root {
        font-size: 16px;
    }
`;

const Wrapper = styled.div`
    background: #6bb441;
    color: #f5f5f5;
    height: 100vh;
`;

export const App = () => {
    return (
        <Wrapper>
            <GlobalStyle />
            <Hero />
            <Scoreboards />
        </Wrapper>
    );
};
