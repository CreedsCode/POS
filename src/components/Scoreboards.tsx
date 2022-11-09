import React from "react";
import styled from "styled-components";

const ScoreboardsStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: -130px;
`;

const Scoreboard = styled.div`
    flex: 0 0 50%;
    padding: 10px;
`;

const ScoreboardTitle = styled.h3`
    text-align: center;
    font-size: 1.9rem;
`;

export default function Scoreboards() {
    return (
        <ScoreboardsStyle>
            <Scoreboard>
                <ScoreboardTitle>Validators</ScoreboardTitle>
            </Scoreboard>
            <Scoreboard>
                <ScoreboardTitle>Recent Proofs</ScoreboardTitle>
            </Scoreboard>
        </ScoreboardsStyle>
    );
}
